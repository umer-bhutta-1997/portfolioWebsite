import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/* ─── Reveal hook ─────────────────────────────────────────────────────────── */
function useReveal(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

/* ─── Mini SVG icon set ───────────────────────────────────────────────────── */
function Ico({ t }) {
  const s = {
    width: 11, height: 11, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor", strokeWidth: 2,
    strokeLinecap: "round", strokeLinejoin: "round",
  };
  const map = {
    user:    <svg {...s}><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>,
    router:  <svg {...s}><polyline points="16 3 21 8 16 13"/><line x1="21" y1="8" x2="9" y2="8"/><polyline points="8 21 3 16 8 11"/><line x1="3" y1="16" x2="15" y2="16"/></svg>,
    brain:   <svg {...s}><circle cx="12" cy="12" r="10"/><polyline points="12 8 12 12 15 15"/></svg>,
    tool:    <svg {...s}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
    check:   <svg {...s}><polyline points="20 6 9 17 4 12"/></svg>,
    send:    <svg {...s}><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
    memory:  <svg {...s}><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    doc:     <svg {...s}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
    chunk:   <svg {...s}><rect x="2" y="2" width="9" height="9"/><rect x="13" y="2" width="9" height="9"/><rect x="2" y="13" width="9" height="9"/><rect x="13" y="13" width="9" height="9"/></svg>,
    embed:   <svg {...s}><circle cx="5" cy="12" r="3"/><circle cx="19" cy="12" r="3"/><line x1="8" y1="12" x2="16" y2="12"/></svg>,
    search:  <svg {...s}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    filter:  <svg {...s}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>,
    llm:     <svg {...s}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
    parse:   <svg {...s}><line x1="17" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="17" y1="18" x2="3" y2="18"/></svg>,
    json:    <svg {...s}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    screen:  <svg {...s}><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    eye:     <svg {...s}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
    anchor:  <svg {...s}><circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg>,
    action:  <svg {...s}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    api:     <svg {...s}><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
    db:      <svg {...s}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    monitor: <svg {...s}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    auth:    <svg {...s}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
    intent:  <svg {...s}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
    list:    <svg {...s}><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>,
    book:    <svg {...s}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
    star:    <svg {...s}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
    dollar:  <svg {...s}><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    chat:    <svg {...s}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    human:   <svg {...s}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
    frontend:<svg {...s}><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    gateway: <svg {...s}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    infer:   <svg {...s}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>,
    plan:    <svg {...s}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  };
  return map[t] ?? <svg {...s}><circle cx="12" cy="12" r="5"/></svg>;
}

/* ─── Connector primitives ────────────────────────────────────────────────── */
function DownArrow({ bright, accent }) {
  const c = bright ? accent : "rgba(255,255,255,0.18)";
  return (
    <div style={{ display: "flex", justifyContent: "center", height: 16, flexShrink: 0 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ width: 1.5, height: 11, background: c, transition: "background 0.3s" }} />
        <div style={{
          width: 0, height: 0,
          borderLeft: "4px solid transparent",
          borderRight: "4px solid transparent",
          borderTop: `5px solid ${c}`,
          transition: "all 0.3s",
        }} />
      </div>
    </div>
  );
}

function RightConnector({ bright, accent }) {
  const c = bright ? accent : "rgba(255,255,255,0.18)";
  return (
    <div style={{ display: "flex", alignItems: "center", width: 18, flexShrink: 0 }}>
      <div style={{ flex: 1, height: 1.5, background: c, transition: "background 0.3s", position: "relative" }}>
        <div style={{
          position: "absolute", right: -1, top: "50%", transform: "translateY(-50%)",
          width: 0, height: 0,
          borderTop: "4px solid transparent",
          borderBottom: "4px solid transparent",
          borderLeft: `5px solid ${c}`,
          transition: "all 0.3s",
        }} />
      </div>
    </div>
  );
}

/* ─── Flow node with tooltip ──────────────────────────────────────────────── */
function FlowNode({ label, iconType, tooltip, accent, bright }) {
  const [hov, setHov] = useState(false);
  return (
    <div style={{ position: "relative", flex: 1 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={{
        display: "flex", alignItems: "center", gap: 7,
        padding: "6px 10px", borderRadius: 8,
        background: hov ? `${accent}14` : "rgba(255,255,255,0.04)",
        border: `1px solid ${hov ? accent + "45" : "rgba(255,255,255,0.08)"}`,
        transition: "all 0.2s", cursor: "default",
      }}>
        <span style={{ color: (bright || hov) ? accent : "rgba(255,255,255,0.35)", transition: "color 0.3s" }}>
          <Ico t={iconType} />
        </span>
        <span style={{
          fontSize: 11, fontWeight: 500,
          color: hov ? "#fff" : "rgba(255,255,255,0.72)",
          transition: "color 0.2s", whiteSpace: "nowrap",
        }}>
          {label}
        </span>
      </div>
      {hov && tooltip && (
        <div style={{
          position: "absolute", bottom: "calc(100% + 6px)", left: "50%",
          transform: "translateX(-50%)",
          background: "#1c1c1c", border: "1px solid rgba(255,255,255,0.14)",
          borderRadius: 7, padding: "5px 10px",
          fontSize: 10, color: "rgba(255,255,255,0.75)",
          whiteSpace: "nowrap", zIndex: 20, pointerEvents: "none",
          boxShadow: "0 6px 16px rgba(0,0,0,0.6)",
        }}>
          {tooltip}
        </div>
      )}
    </div>
  );
}

/* ─── Side node (dashed, italic) ─────────────────────────────────────────── */
function SideBox({ label, iconType, tooltip, accent, bright }) {
  const [hov, setHov] = useState(false);
  return (
    <div style={{ position: "relative" }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={{
        display: "flex", alignItems: "center", gap: 6,
        padding: "5px 9px", borderRadius: 8,
        background: hov ? `${accent}12` : "rgba(255,255,255,0.02)",
        border: `1px dashed ${(bright || hov) ? accent + "60" : "rgba(255,255,255,0.14)"}`,
        transition: "all 0.2s", cursor: "default",
      }}>
        <span style={{ color: (bright || hov) ? accent : "rgba(255,255,255,0.3)", transition: "color 0.3s" }}>
          <Ico t={iconType} />
        </span>
        <span style={{
          fontSize: 10, fontWeight: 500, fontStyle: "italic",
          color: hov ? "#fff" : "rgba(255,255,255,0.5)",
          transition: "color 0.2s", whiteSpace: "nowrap",
        }}>
          {label}
        </span>
      </div>
      {hov && tooltip && (
        <div style={{
          position: "absolute", bottom: "calc(100% + 6px)", left: "50%",
          transform: "translateX(-50%)",
          background: "#1c1c1c", border: "1px solid rgba(255,255,255,0.14)",
          borderRadius: 7, padding: "5px 10px",
          fontSize: 10, color: "rgba(255,255,255,0.75)",
          whiteSpace: "nowrap", zIndex: 20, pointerEvents: "none",
          boxShadow: "0 6px 16px rgba(0,0,0,0.6)",
        }}>
          {tooltip}
        </div>
      )}
    </div>
  );
}

/* ─── Full diagram canvas ─────────────────────────────────────────────────── */
function FlowDiagram({ nodes, sideNode, accent, bright }) {
  return (
    <div style={{
      background: "rgba(0,0,0,0.28)",
      border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: 10, padding: "13px 11px", flex: 1,
    }}>
      {nodes.map((node, i) => (
        <div key={i}>
          {i > 0 && <DownArrow bright={bright} accent={accent} />}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <FlowNode
              label={node.label}
              iconType={node.icon}
              tooltip={node.tooltip}
              accent={accent}
              bright={bright}
            />
            {sideNode?.connectsTo === i && (
              <>
                <RightConnector bright={bright} accent={accent} />
                <SideBox
                  label={sideNode.label}
                  iconType={sideNode.icon}
                  tooltip={sideNode.tooltip}
                  accent={accent}
                  bright={bright}
                />
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Chip ────────────────────────────────────────────────────────────────── */
function Chip({ label, accent }) {
  return (
    <span style={{
      fontSize: 9, fontWeight: 700, letterSpacing: "0.07em",
      textTransform: "uppercase", padding: "3px 7px",
      borderRadius: 5, background: `${accent}0e`,
      border: `1px solid ${accent}28`, color: accent,
    }}>
      {label}
    </span>
  );
}

/* ─── Architecture data ───────────────────────────────────────────────────── */
const architectures = [
  {
    title: "LLM Agent Workflow",
    status: "Production Pattern",
    purpose: "AI workflow for reasoning, tool use, memory, and multi-step execution.",
    accent: "#60a5fa",
    caseStudy: "/case-studies/ai-agent-rpa-code-generation",
    nodes: [
      { label: "User Request",             icon: "user",   tooltip: "Natural language input or system trigger" },
      { label: "Intent Router",            icon: "router", tooltip: "Classifies intent and routes to the correct workflow" },
      { label: "Planner Agent",            icon: "brain",  tooltip: "Decomposes task and builds an execution plan", hasSide: true },
      { label: "Tools / APIs / Retriever", icon: "tool",   tooltip: "Executes tool calls, API requests, or context retrieval" },
      { label: "Validator / Critic",       icon: "check",  tooltip: "Checks output quality before finalising the answer" },
      { label: "Response / Action",        icon: "send",   tooltip: "Returns structured response or triggers downstream action" },
    ],
    sideNode: { label: "Conversation Memory", icon: "memory", tooltip: "Persists context across turns for coherent multi-step workflows", connectsTo: 2 },
    chips: ["Planning", "Tool Calling", "Memory", "Validation", "Structured Output"],
    bottomNote: "Used for assistants, internal copilots, multi-step workflows, and action-driven AI systems.",
  },
  {
    title: "Retrieval-Augmented Generation",
    status: "Production Pattern",
    purpose: "Grounded AI architecture for searching and answering from large knowledge sources.",
    accent: "#4ade80",
    caseStudy: "/case-studies/enterprise-rag-knowledge-search",
    nodes: [
      { label: "Documents / DB / Records", icon: "doc",    tooltip: "Source documents, databases, or structured records" },
      { label: "Chunking + Metadata",      icon: "chunk",  tooltip: "Splits content into indexed units with metadata tags" },
      { label: "Embeddings + Indexing",    icon: "embed",  tooltip: "Converts chunks to vectors and stores for retrieval" },
      { label: "Hybrid Retrieval",         icon: "search", tooltip: "Combines semantic and keyword search for precision", hasSide: true },
      { label: "Prompt Assembly",          icon: "llm",    tooltip: "Constructs grounded prompt from retrieved context" },
      { label: "LLM Answer + Evidence",    icon: "send",   tooltip: "Generates answer citing retrieved context only" },
    ],
    sideNode: { label: "Filters / Reranker", icon: "filter", tooltip: "Applies metadata filters and reranks by relevance", connectsTo: 3 },
    chips: ["RAG", "Embeddings", "Hybrid Search", "Reranking", "Grounding"],
    bottomNote: "Designed for enterprise search, policy intelligence, support systems, and knowledge assistants.",
  },
  {
    title: "Document Intelligence Pipeline",
    status: "Applied in Real Projects",
    purpose: "Structured extraction pipeline for OCR, parsing, normalization, and downstream AI use.",
    accent: "#f472b6",
    caseStudy: "/case-studies/document-intelligence-ocr-pipeline",
    nodes: [
      { label: "Scanned Document / Image", icon: "doc",   tooltip: "Input from scan, upload, or document stream" },
      { label: "Preprocessing",            icon: "plan",  tooltip: "Image cleanup, deskew, and contrast normalisation" },
      { label: "OCR / Vision Model",       icon: "eye",   tooltip: "Extracts raw text and layout signals from the document" },
      { label: "Layout + Field Parsing",   icon: "parse", tooltip: "Detects structure, sections, and extraction targets" },
      { label: "Validation / Cleanup",     icon: "check", tooltip: "Corrects errors, resolves ambiguity, normalises output", hasSide: true },
      { label: "Structured JSON / Data",   icon: "json",  tooltip: "Final structured output ready for downstream use" },
    ],
    sideNode: { label: "Human Review", icon: "human", tooltip: "Optional human-in-the-loop step for low-confidence outputs", connectsTo: 4 },
    chips: ["OCR", "Parsing", "Extraction", "Validation", "Structuring"],
    bottomNote: "Built for document automation, record extraction, multilingual text, and AI-ready data pipelines.",
  },
  {
    title: "Vision-Based Automation",
    status: "Applied in Real Projects",
    purpose: "Perception-driven automation for desktop UI environments where selectors are unreliable.",
    accent: "#fb923c",
    caseStudy: "/case-studies/vision-based-desktop-automation",
    nodes: [
      { label: "Live Screen / Screenshot", icon: "screen", tooltip: "Captures the current UI state for analysis" },
      { label: "OCR + Detection",          icon: "eye",    tooltip: "Extracts text and detects interactive elements" },
      { label: "Element Matching",         icon: "search", tooltip: "Matches detected elements to the intended target", hasSide: true },
      { label: "Action Planning",          icon: "brain",  tooltip: "Determines the next action based on detected state" },
      { label: "Execution Engine",         icon: "action", tooltip: "Executes click, input, or scroll with confidence threshold" },
      { label: "Task Result",              icon: "send",   tooltip: "Confirms completion or triggers retry on failure" },
    ],
    sideNode: { label: "Fuzzy Matching", icon: "anchor", tooltip: "Handles ambiguous or partially visible elements via similarity scoring", connectsTo: 2 },
    chips: ["Vision", "OCR", "UI Detection", "Automation", "Resilience"],
    bottomNote: "Used for desktop automation, workflow execution, and visually grounded AI-driven control.",
  },
  {
    title: "AI Serving & Deployment",
    status: "Production Pattern",
    purpose: "Backend architecture for exposing models, APIs, embeddings, and scalable runtime services.",
    accent: "#a78bfa",
    caseStudy: "/case-studies/llm-infrastructure-inference-evaluation",
    nodes: [
      { label: "Frontend / Product",        icon: "frontend", tooltip: "Client app, internal tool, or external API consumer" },
      { label: "API Gateway",               icon: "gateway",  tooltip: "Routes requests, applies auth, and enforces rate limits", hasSide: true },
      { label: "Inference Service",         icon: "infer",    tooltip: "Processes requests and calls model or embedding runtime" },
      { label: "Model / Embedding Runtime", icon: "llm",      tooltip: "Runs LLM or embedding model, GPU-optimised with vLLM or Groq" },
      { label: "Database / Vector Store",   icon: "db",       tooltip: "Persists results, vectors, session data, and retrieval index" },
      { label: "Logs / Monitoring",         icon: "monitor",  tooltip: "Captures latency, errors, and model output for observability" },
    ],
    sideNode: { label: "Auth / Rate Limits", icon: "auth", tooltip: "JWT validation, API key management, and per-client throttling", connectsTo: 1 },
    chips: ["APIs", "GPU Runtime", "vLLM", "Observability", "Scale"],
    bottomNote: "Designed for production AI platforms, internal tools, scalable APIs, and deployable model services.",
  },
  {
    title: "AI Sales & Recommendation",
    status: "Applied in Real Projects",
    purpose: "Conversational decision-support system for guided product discovery, comparison, and selling.",
    accent: "#34d399",
    caseStudy: "/case-studies/ai-sales-concierge-luxury-watches",
    nodes: [
      { label: "User Intent",               icon: "intent",  tooltip: "Detects whether user is buying, selling, comparing, or exploring" },
      { label: "Preference Capture",        icon: "list",    tooltip: "Collects structured preferences through natural conversation" },
      { label: "Catalog / Listing Retrieval", icon: "book",  tooltip: "Retrieves relevant products or listings from indexed catalog" },
      { label: "Reasoning + Comparison",    icon: "brain",   tooltip: "Analyses options and explains tradeoffs to the user", hasSide: true },
      { label: "Recommendation Engine",     icon: "star",    tooltip: "Scores and ranks options based on fit to stated preferences" },
      { label: "Guided Response",           icon: "chat",    tooltip: "Delivers recommendation with reasoning and next-step guidance" },
    ],
    sideNode: { label: "Market / Pricing Context", icon: "dollar", tooltip: "Enriches recommendations with real-time pricing signals", connectsTo: 3 },
    chips: ["Sales AI", "Recommendations", "Retrieval", "Comparison", "Conversation"],
    bottomNote: "Built for guided commerce, product discovery, seller assistance, and high-consideration purchase journeys.",
  },
];

/* ─── Bottom principles ───────────────────────────────────────────────────── */
const principles = [
  "End-to-end system thinking",
  "Production-first design",
  "Retrieval & orchestration expertise",
  "AI integration readiness",
  "Continuous improvement mindset",
];

/* ─── Architecture card ───────────────────────────────────────────────────── */
function ArchCard({ arch, delay }) {
  const [hov, setHov] = useState(false);
  const ref = useReveal(delay);

  return (
    <div
      ref={ref}
      className="reveal"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", flexDirection: "column", gap: 13,
        padding: 20, borderRadius: 16,
        background: "#0e0e0e",
        border: `1px solid ${hov ? arch.accent + "38" : "rgba(255,255,255,0.07)"}`,
        boxShadow: hov ? `0 10px 40px ${arch.accent}10` : "none",
        transform: hov ? "translateY(-3px)" : "translateY(0)",
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 }}>
        <p style={{ fontSize: 15, fontWeight: 700, color: "#fff", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
          {arch.title}
        </p>
        <span style={{
          flexShrink: 0, fontSize: 9, fontWeight: 700,
          letterSpacing: "0.07em", textTransform: "uppercase",
          padding: "3px 8px", borderRadius: 20,
          background: `${arch.accent}12`,
          border: `1px solid ${arch.accent}30`,
          color: arch.accent, whiteSpace: "nowrap",
        }}>
          {arch.status}
        </span>
      </div>

      {/* Purpose */}
      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.43)", lineHeight: 1.55, margin: 0 }}>
        {arch.purpose}
      </p>

      {/* Diagram */}
      <FlowDiagram nodes={arch.nodes} sideNode={arch.sideNode} accent={arch.accent} bright={hov} />

      {/* Chips */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
        {arch.chips.map((c, i) => <Chip key={i} label={c} accent={arch.accent} />)}
      </div>

      {/* Bottom strip */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
        paddingTop: 11, borderTop: "1px solid rgba(255,255,255,0.06)",
      }}>
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.33)", lineHeight: 1.5, margin: 0 }}>
          {arch.bottomNote}
        </p>
        <Link
          to={arch.caseStudy}
          style={{
            flexShrink: 0, fontSize: 10, fontWeight: 700,
            color: hov ? arch.accent : "rgba(255,255,255,0.35)",
            textDecoration: "none", display: "flex", alignItems: "center", gap: 4,
            transition: "color 0.2s",
          }}
        >
          Case study
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}

/* ─── Main section export ─────────────────────────────────────────────────── */
export default function Architectures() {
  const headerRef = useReveal(0);
  const stripRef  = useReveal(80);

  return (
    <section id="architectures" style={{ background: "#080808", padding: "110px 0 80px" }}>
      <div className="max-w-6xl mx-auto px-5">

        {/* ── Header ── */}
        <div ref={headerRef} className="reveal mb-14">
          <div style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "flex-start", gap: 24, flexWrap: "wrap", marginBottom: 20,
          }}>
            {/* Left: title + description */}
            <div style={{ flex: 1, minWidth: 260 }}>
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3">
                System Design
              </p>
              <h2
                className="font-black text-white leading-none mb-4"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
              >
                AI Architectures<br />
                <span className="text-gray-600">I Design.</span>
              </h2>
              <p className="text-gray-500 text-[15px] leading-relaxed max-w-xl">
                Visual breakdowns of the production AI systems I design — from data ingestion
                and orchestration to deployment, monitoring, and human-facing products.
              </p>
            </div>

            {/* Right: stats card */}
            <div style={{
              padding: "18px 22px", borderRadius: 14,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              minWidth: 190, flexShrink: 0,
            }}>
              <p style={{ fontSize: 26, fontWeight: 900, color: "#fff", letterSpacing: "-0.05em", marginBottom: 3 }}>
                50+
              </p>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 10 }}>
                Systems Built
              </p>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
                LLMs · RAG · OCR<br />Agents · Automation
              </p>
              <div style={{ marginTop: 10, paddingTop: 10, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                <p style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontStyle: "italic" }}>
                  Designed for production environments
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#fff",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.11)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
          >
            View Case Studies
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>

        {/* ── 2-column card grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-14">
          {architectures.map((arch, i) => (
            <ArchCard key={i} arch={arch} delay={i * 50} />
          ))}
        </div>

        {/* ── Bottom principles strip ── */}
        <div ref={stripRef} className="reveal">
          <div style={{
            padding: "22px 26px", borderRadius: 16,
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}>
            <p style={{
              fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.3)",
              marginBottom: 14,
            }}>
              What these architectures reflect
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 36px" }}>
              {principles.map((p, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{
                    width: 5, height: 5, borderRadius: "50%",
                    background: "rgba(255,255,255,0.2)", flexShrink: 0,
                  }} />
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>
                    {p}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
