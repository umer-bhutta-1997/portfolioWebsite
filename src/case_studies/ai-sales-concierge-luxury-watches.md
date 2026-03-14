> **Sector:** Commerce / Luxury Retail &nbsp;·&nbsp; **Type:** Conversational AI + RAG

## Executive Summary

Designed an **AI sales concierge agent** for the luxury watch market that guides buyers through discovery, comparison, and decision-making — while also helping sellers produce stronger listings. The system replicates the behavior of a knowledgeable watch advisor through a combination of retrieval, domain reasoning, and guided multi-turn conversation.

Instead of returning search results, the system delivers **decision support**: understanding intent, surfacing relevant inventory, explaining tradeoffs, and adapting to how buyers actually talk about watches.

---

## Business Context

Luxury watch commerce is a high-friction, high-consideration market on both sides of the transaction.

**Buyers face:**
- Thousands of listings with inconsistent descriptions and condition language
- Uncertainty around pricing, authenticity signals, and reference comparisons
- Difficulty comparing models across brands, movements, and specifications
- No trusted guide to help them move from interest to confident decision

**Sellers face:**
- Writing compelling, accurate listings that communicate condition and value
- Pricing correctly relative to the reference, condition, and market
- Communicating watch attributes in the language buyers expect

A standard keyword search cannot solve this. The problem is not discoverability — it is **guided decision-making in a domain that requires expertise**.

---

## Problem Statement

The existing marketplace experience treated watch commerce like commodity search. Users could filter and browse, but there was no system that could:
- Understand ambiguous buying intent ("something like a Rolex but less flashy")
- Collect structured preferences through natural conversation
- Explain why one watch is a better fit than another for a stated use case
- Help sellers structure listings that communicate the right information

The gap between a great watch advisor and a search bar is enormous. This project was built to close that gap with AI.

---

## Objectives & Success Criteria

- Enable buyers to describe needs conversationally and receive relevant, reasoned recommendations
- Support preference refinement through dialogue (not just filters)
- Assist sellers with listing quality, pricing narrative, and specification description
- Retrieve relevant inventory with semantic accuracy across brand, reference, condition, and style
- Explain recommendations — not just return matches

---

## Constraints & Requirements

- Domain-specific vocabulary (reference numbers, movements, complications, case materials, lug widths)
- Ambiguous natural language inputs requiring semantic normalization
- Mixed structured (price, brand, year) and unstructured (condition description, style notes) data
- System must support both buy-side and sell-side flows without feeling fragmented
- Recommendations must feel grounded — not hallucinated product details

---

## Solution Overview

Built an **AI concierge system** composed of a conversational agent layer, a domain-aware retrieval layer, and a seller assistance module.

The agent manages multi-turn dialogue, tracks intent across turns, and decides when to retrieve, clarify, compare, or recommend. The retrieval layer enables semantic search over watch inventory using both structured filters and embedding-based similarity. The seller module helps generate listing copy and pricing framing from watch attributes.

---

## System Architecture

```
User Message
     │
     ▼
Intent Classifier
(buy intent / sell intent / comparison / clarification)
     │
     ├─► Preference Extractor
     │     └─ structured fields: brand, reference, budget, style, complications
     │
     ├─► Retrieval Engine
     │     ├─ Vector search (semantic similarity)
     │     ├─ Structured filter (price, brand, condition)
     │     └─ Ranked results with explanation payload
     │
     ├─► Recommendation Reasoner
     │     └─ Explains why a watch matches stated preferences
     │
     └─► Seller Assistance Flow
           └─ Takes watch attributes → generates listing copy + pricing framing
```

**Key layers:**

1. **Conversational Agent** — Manages dialogue state, intent tracking, and clarification logic using an LLM with tool-calling
2. **Watch Knowledge & Retrieval** — Structured watch database with vector embeddings for semantic search across descriptions and specifications
3. **Preference Extraction** — Structured extraction of buyer preferences from natural language
4. **Recommendation Engine** — Retrieves and ranks candidates, then generates explanations aligned to stated buyer intent
5. **Seller Assistance Module** — Accepts raw watch data and produces strong listing copy with specification summaries

---

## Technical Highlights

- Multi-turn conversational agent with structured memory and intent tracking
- Domain-specific retrieval combining structured filters and vector similarity
- Semantic normalization of ambiguous watch language into queryable fields
- Buy-side preference extraction with progressive refinement across turns
- Sell-side listing generation from raw product attributes
- Retrieval-grounded recommendation explanations (not hallucinated)
- Fallback clarification logic when preferences are underspecified

---

## Challenges Solved

### Ambiguous Buying Language

Buyers do not speak in database fields. They say:
- "I want something like a Rolex but less flashy"
- "Something collectible but actually wearable daily"
- "A dress watch for under this budget that looks serious"

The system had to bridge this to structured retrieval without losing the intent. This required semantic normalization, contextual field inference, and preference expansion across follow-up turns.

### Dual-Mode Design

Supporting buyer and seller flows within a single agent created interface design challenges. The solution was intent classification at the conversation level — the agent detects which mode the user is in and activates the appropriate workflow branch.

### Retrieval Precision in a Niche Domain

Generic embedding models often underperform on highly domain-specific vocabulary (reference numbers, movement types, case specifications). This required domain-aware indexing and retrieval evaluation to ensure results were meaningfully ranked.

---

## Outcome

The concierge demonstrated how AI can improve high-consideration commerce by functioning as a **trusted advisory layer** rather than a generic assistant. Instead of presenting 200 search results, it guided users toward confident decisions through intelligent conversation.

The system also showed that sell-side assistance — helping sellers produce better listings — can be addressed with the same conversational architecture, creating a unified platform experience.

---

## Lessons Learned

- Preference extraction must be progressive, not all-at-once — buyers reveal intent across multiple turns
- Domain-specific retrieval quality matters more than prompt sophistication in niche markets
- Explanation quality (why a recommendation fits) drives trust more than recommendation accuracy alone
- Sell-side and buy-side flows share a retrieval foundation but require separate dialogue logic

---

## Future Roadmap

- Pricing intelligence layer with real-time market comparisons
- Authenticity signal analysis from listing images
- Seller performance analytics on listing quality and conversion
- Multi-modal watch image search and condition assessment
