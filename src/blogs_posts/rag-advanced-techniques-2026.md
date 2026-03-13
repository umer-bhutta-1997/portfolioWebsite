> **March 2026** — Basic RAG is table stakes. Production systems now use hybrid search, reranking, GraphRAG, and agentic retrieval. Here's what the frontier looks like.

---

## Why Basic RAG Isn't Enough Anymore

In 2023, building a RAG system meant: embed documents → store in FAISS → retrieve top-k → stuff into prompt. That still works for demos.

In production 2026, basic RAG fails because:

1. **Semantic search misses keyword matches** — "HIPAA compliance" and "health regulation" may not be nearest neighbors
2. **Top-k retrieval ignores relevance quality** — retrieved chunks can be similar but irrelevant to the actual question
3. **Flat retrieval ignores relationships** — documents connect to each other in ways vector similarity doesn't capture
4. **Single-shot retrieval can't handle complex questions** — "Compare how our Q1 and Q4 results relate to the market conditions in those periods"

The solution: a stack of complementary techniques layered on top of basic semantic search.

---

## Technique 1: Hybrid Search (Semantic + BM25)

Hybrid search combines vector similarity with traditional keyword (BM25) search, then fuses the results.

```python
from qdrant_client import QdrantClient
from qdrant_client.http.models import SparseVector, SparseVectorParams
from sentence_transformers import SentenceTransformer
from rank_bm25 import BM25Okapi
import numpy as np

class HybridRAG:
    def __init__(self, collection_name: str):
        self.client = QdrantClient(url="http://localhost:6333")
        self.dense_model = SentenceTransformer("BAAI/bge-large-en-v1.5")
        self.collection_name = collection_name

    def hybrid_search(self, query: str, top_k: int = 10) -> list[dict]:
        """Combine dense (semantic) + sparse (BM25) retrieval."""

        # Dense search — semantic similarity
        dense_vector = self.dense_model.encode(query).tolist()
        dense_results = self.client.search(
            collection_name=self.collection_name,
            query_vector=("dense", dense_vector),
            limit=top_k,
            with_payload=True
        )

        # Sparse search — BM25 keyword matching
        sparse_results = self.client.search(
            collection_name=self.collection_name,
            query_vector=("sparse", self._bm25_encode(query)),
            limit=top_k,
            with_payload=True
        )

        # Reciprocal Rank Fusion — combine both result sets
        return self._rrf_fusion(dense_results, sparse_results, k=60)

    def _rrf_fusion(self, results_a, results_b, k: int = 60) -> list[dict]:
        """Reciprocal Rank Fusion for combining ranked lists."""
        scores = {}

        for rank, result in enumerate(results_a, 1):
            doc_id = result.id
            scores[doc_id] = scores.get(doc_id, 0) + 1 / (k + rank)

        for rank, result in enumerate(results_b, 1):
            doc_id = result.id
            scores[doc_id] = scores.get(doc_id, 0) + 1 / (k + rank)

        # Sort by fusion score
        sorted_ids = sorted(scores, key=scores.get, reverse=True)
        return sorted_ids[:10]
```

**Why this matters:** In production benchmarks, hybrid search consistently outperforms pure semantic search by **10-20% on recall@10**, particularly for technical queries with specific terminology.

---

## Technique 2: Reranking with Cohere or Cross-Encoders

Retrieval gets you candidates. Reranking finds the best ones.

```python
import cohere

co = cohere.Client("YOUR_COHERE_API_KEY")

def rerank_results(query: str, documents: list[str], top_n: int = 5) -> list[dict]:
    """Rerank retrieved documents using Cohere Rerank v3."""

    results = co.rerank(
        model="rerank-english-v3.0",
        query=query,
        documents=documents,
        top_n=top_n,
        return_documents=True
    )

    return [
        {
            "text": result.document.text,
            "relevance_score": result.relevance_score,
            "original_rank": result.index
        }
        for result in results.results
    ]

# Alternative: Cross-encoder (open source, self-hosted)
from sentence_transformers import CrossEncoder

cross_encoder = CrossEncoder("cross-encoder/ms-marco-MiniLM-L-6-v2")

def cross_encode_rerank(query: str, passages: list[str]) -> list[tuple]:
    """Score all query-passage pairs simultaneously."""
    pairs = [[query, passage] for passage in passages]
    scores = cross_encoder.predict(pairs)

    ranked = sorted(zip(scores, passages), reverse=True)
    return ranked[:5]
```

**The reranking pipeline:**
```
Initial Retrieval (top 50) → Reranker → Final Results (top 5)
                                ↓
                   Bi-encoder fast  →  Cross-encoder slow but accurate
                   (first pass)         (second pass)
```

---

## Technique 3: GraphRAG — Knowledge Graphs for Relationship Queries

Vector similarity can't answer: *"What are all the regulatory requirements that affect both our EU operations and our US healthcare division?"*

GraphRAG solves this by building a knowledge graph from your documents:

```python
from langchain_community.graphs import Neo4jGraph
from langchain.chains import GraphCypherQAChain
from langchain_anthropic import ChatAnthropic

# Initialize Neo4j graph database
graph = Neo4jGraph(
    url="bolt://localhost:7687",
    username="neo4j",
    password="your-password"
)

# Build graph from documents
def build_knowledge_graph(documents: list[str], llm):
    """Extract entities and relationships from documents."""

    extraction_prompt = """Extract entities and relationships from this text.
    Return JSON: {"entities": [{"name": str, "type": str}],
                  "relationships": [{"from": str, "type": str, "to": str}]}

    Text: {text}"""

    for doc in documents:
        extracted = llm.invoke(extraction_prompt.format(text=doc))
        entities = extracted["entities"]
        relationships = extracted["relationships"]

        # Write to Neo4j
        for entity in entities:
            graph.query(
                "MERGE (n:Entity {name: $name, type: $type})",
                params=entity
            )
        for rel in relationships:
            graph.query(
                """MATCH (a:Entity {name: $from}), (b:Entity {name: $to})
                   MERGE (a)-[:RELATES {type: $type}]->(b)""",
                params=rel
            )

# Query using natural language → Cypher
llm = ChatAnthropic(model="claude-sonnet-4-5")
chain = GraphCypherQAChain.from_llm(
    llm=llm,
    graph=graph,
    verbose=True,
    validate_cypher=True  # Auto-fix Cypher errors
)

result = chain.invoke(
    "What regulations affect both our EU operations and US healthcare division?"
)
```

**Microsoft's GraphRAG** (open-sourced late 2024) takes this further, using community detection algorithms to create hierarchical summaries of document clusters — enabling both "local" (specific fact) and "global" (cross-document theme) queries.

---

## Technique 4: Agentic RAG — Let the Model Control Retrieval

Instead of a fixed retrieval → generate pipeline, let the LLM decide:
- Whether it needs to retrieve
- What to search for
- How many times to retrieve
- When it has enough context

```python
from anthropic import Anthropic
import json

client = Anthropic()

TOOLS = [
    {
        "name": "vector_search",
        "description": "Search the knowledge base for relevant information",
        "input_schema": {
            "type": "object",
            "properties": {
                "query": {"type": "string", "description": "Search query"},
                "top_k": {"type": "integer", "description": "Number of results", "default": 5}
            },
            "required": ["query"]
        }
    },
    {
        "name": "graph_query",
        "description": "Query the knowledge graph for entity relationships",
        "input_schema": {
            "type": "object",
            "properties": {
                "question": {"type": "string"}
            },
            "required": ["question"]
        }
    }
]

def agentic_rag(user_question: str) -> str:
    """RAG with the model controlling its own retrieval strategy."""

    messages = [{"role": "user", "content": user_question}]

    while True:
        response = client.messages.create(
            model="claude-sonnet-4-5",
            max_tokens=4096,
            tools=TOOLS,
            messages=messages
        )

        if response.stop_reason == "end_turn":
            # Model has enough information, return final answer
            return response.content[0].text

        if response.stop_reason == "tool_use":
            tool_results = []
            for block in response.content:
                if block.type == "tool_use":
                    # Execute the retrieval the model requested
                    if block.name == "vector_search":
                        result = vector_search(block.input["query"], block.input.get("top_k", 5))
                    elif block.name == "graph_query":
                        result = graph_query(block.input["question"])

                    tool_results.append({
                        "type": "tool_result",
                        "tool_use_id": block.id,
                        "content": json.dumps(result)
                    })

            # Continue the conversation with retrieved context
            messages.append({"role": "assistant", "content": response.content})
            messages.append({"role": "user", "content": tool_results})
```

**Why agentic RAG outperforms static RAG:**
- Model can **reformulate queries** when initial results are poor
- Can **combine multiple retrievals** for complex questions
- Knows **when enough context exists** without wasting tokens
- Can use **different retrieval strategies** for different question types

---

## Technique 5: Contextual Chunk Headers (CCH)

A simple but high-impact technique: prepend metadata to each chunk before embedding.

```python
def create_contextual_chunk(
    chunk: str,
    document_title: str,
    section: str,
    doc_date: str,
    position: str
) -> str:
    """Add context headers that dramatically improve retrieval quality."""

    header = f"""Document: {document_title}
Section: {section}
Date: {doc_date}
Position: {position} of document
---
"""
    return header + chunk

# Before CCH:
# Chunk: "The migration should complete within 4 hours."
# (Which migration? Of what? When?)

# After CCH:
# Chunk: "Document: AWS Migration Runbook v3.2
#          Section: Phase 3 - Database Migration
#          Date: 2025-11-15
#          Position: middle of document
#          ---
#          The migration should complete within 4 hours."
```

Anthropic's research shows CCH improves retrieval accuracy by **49% on multi-hop questions**.

---

## Production Architecture: The Full Stack

```
User Query
    │
    ▼
┌──────────────────────────────────────────┐
│           Query Processing               │
│  - Query expansion (generate variants)   │
│  - Query classification (type of Q?)     │
│  - HyDE (hypothetical document embed)    │
└──────────────────┬───────────────────────┘
                   │
    ┌──────────────┴──────────────┐
    ▼                             ▼
Dense Search                 Sparse Search
(BAAI/bge-large)             (BM25 / SPLADE)
    │                             │
    └──────────────┬──────────────┘
                   ▼
              RRF Fusion
              (top 50 candidates)
                   │
                   ▼
              Reranking
              (Cohere / cross-encoder)
              (top 5-10 results)
                   │
                   ▼
           Context Assembly
           + CCH metadata
           + Citation tracking
                   │
                   ▼
       LLM Generation (Claude 4.5)
       + Source attribution
                   │
                   ▼
            Final Response
```

---

## Evaluation: How to Know Your RAG is Working

```python
from ragas import evaluate
from ragas.metrics import (
    faithfulness,
    answer_relevancy,
    context_recall,
    context_precision
)

# Generate test dataset
test_data = {
    "question": test_questions,
    "answer": generated_answers,
    "contexts": retrieved_contexts,
    "ground_truth": expected_answers
}

# Evaluate
result = evaluate(
    dataset=test_data,
    metrics=[faithfulness, answer_relevancy, context_recall, context_precision]
)

print(result)
# faithfulness:      0.87  (Are answers grounded in context?)
# answer_relevancy:  0.91  (Does answer address the question?)
# context_recall:    0.84  (Were relevant docs retrieved?)
# context_precision: 0.79  (Are retrieved docs actually relevant?)
```

---

## Conclusion

RAG in 2026 is a rich engineering discipline, not a one-liner. The teams winning with RAG are combining hybrid search, reranking, GraphRAG for relational data, and agentic retrieval for complex questions.

Start with hybrid search + reranking. That alone will dramatically improve your system. Then layer in GraphRAG for use cases with relationship queries, and agentic RAG when your questions become complex enough to require multi-step reasoning.

---

## Sources

- [AI Product Launches March 2026 — TLDL](https://www.tldl.io/blog/ai-product-launches-march-2026)
- [Gemini 2.5 Thinking Model Updates — Google Developers](https://developers.googleblog.com/en/gemini-2-5-thinking-model-updates/)
- [Latest AI Model Releases — LLM Stats](https://llm-stats.com/llm-updates)
