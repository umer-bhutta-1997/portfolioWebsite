import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

const systems = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    accent: "#60a5fa",
    category: "AI Agents & Autonomous Systems",
    bullets: [
      "RPA code generation agents",
      "Multi-step reasoning workflows",
      "Tool-calling LLM systems",
      "Developer productivity assistants",
    ],
    tech: ["LangGraph", "OpenAI", "Agents", "Python"],
    caseStudy: "/case-studies/ai-agent-rpa-code-generation",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    accent: "#4ade80",
    category: "Enterprise RAG Platforms",
    bullets: [
      "Directive intelligence systems",
      "Semantic enterprise search",
      "Conversational knowledge assistants",
      "Hybrid retrieval pipelines",
    ],
    tech: ["RAG", "Elasticsearch", "Qdrant", "Embeddings"],
    caseStudy: "/case-studies/enterprise-rag-knowledge-search",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    accent: "#f472b6",
    category: "Document Intelligence & OCR",
    bullets: [
      "Multilingual OCR pipelines",
      "Intelligent document parsing",
      "Structured data extraction",
      "Document classification systems",
    ],
    tech: ["PaddleOCR", "GPT-4V", "Tesseract", "Python"],
    caseStudy: "/case-studies/document-intelligence-ocr-pipeline",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    accent: "#fb923c",
    category: "Vision-Based Automation",
    bullets: [
      "Selector-free UI automation",
      "Visual element detection",
      "OCR-guided action execution",
      "Desktop workflow automation",
    ],
    tech: ["OpenCV", "Playwright", "OCR", "Python"],
    caseStudy: "/case-studies/vision-based-desktop-automation",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    ),
    accent: "#a78bfa",
    category: "LLM Infrastructure & Platforms",
    bullets: [
      "High-throughput inference APIs",
      "Embedding generation services",
      "GPU deployment & optimization",
      "Evaluation & monitoring pipelines",
    ],
    tech: ["vLLM", "FastAPI", "Docker", "Prometheus"],
    caseStudy: "/case-studies/llm-infrastructure-inference-evaluation",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    accent: "#34d399",
    category: "Conversational AI Systems",
    bullets: [
      "Enterprise chat assistants",
      "Customer support automation",
      "Multi-channel AI platforms",
      "Context-aware dialogue systems",
    ],
    tech: ["LLMs", "RAG", "WebSockets", "APIs"],
    caseStudy: "/case-studies/enterprise-rag-knowledge-search",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    accent: "#facc15",
    category: "AI Developer Tooling",
    bullets: [
      "RPA & automation code generation",
      "Automated code validation",
      "AI-powered dev assistants",
      "SDK-aware code generation",
    ],
    tech: ["Python", "LLMs", "LangGraph", "Automation"],
    caseStudy: "/case-studies/ai-agent-rpa-code-generation",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    accent: "#f87171",
    category: "AI Data & Processing Pipelines",
    bullets: [
      "Data ingestion & ETL pipelines",
      "Embedding generation pipelines",
      "AI-ready dataset preparation",
      "Vector database indexing",
    ],
    tech: ["Python", "Airflow", "Vector DBs", "ETL"],
    caseStudy: "/case-studies/llm-infrastructure-inference-evaluation",
  },
];

const selectedSystems = [
  { name: "Government directive intelligence platform", slug: "government-directive-intelligence-rag" },
  { name: "AI RPA code generation agent", slug: "ai-agent-rpa-code-generation" },
  { name: "Enterprise document intelligence pipeline", slug: "document-intelligence-ocr-pipeline" },
  { name: "Vision-based desktop automation system", slug: "vision-based-desktop-automation" },
  { name: "AI sales concierge for luxury watch commerce", slug: "ai-sales-concierge-luxury-watches" },
  { name: "Multi-agent AI research & workflow systems", slug: "multi-agent-ai-workflow-systems" },
];

const scaleMetrics = [
  { num: "50+", label: "AI systems built" },
  { num: "10+", label: "RAG architectures" },
  { num: "Millions", label: "Documents processed" },
  { num: "Gov+Ent", label: "Enterprise & government" },
];

export default function Projects() {
  const headerRef  = useReveal(0);
  const metricsRef = useReveal(80);
  const gridRef    = useReveal(0);
  const selectedRef = useReveal(80);
  const closingRef  = useReveal(0);

  return (
    <section id="projects" style={{ background: "#080808", padding: "110px 0 80px" }}>
      <div className="max-w-6xl mx-auto px-5">

        {/* ── Header ── */}
        <div ref={headerRef} className="reveal mb-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-4">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3">
                Production Work
              </p>
              <h2
                className="font-black text-white leading-none"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
              >
                AI systems I've<br />
                <span className="text-gray-600">designed & deployed.</span>
              </h2>
            </div>
            <Link
              to="/case-studies"
              className="self-start sm:self-end inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 whitespace-nowrap"
              style={{ color: "#6b7280" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
            >
              View case studies
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl">
            Over the past <span className="text-gray-300 font-medium">4+ years</span> I have built{" "}
            <span className="text-gray-300 font-medium">50+ AI systems</span> across RAG pipelines, AI agents,
            computer vision, document intelligence, and automation platforms — shipped for startups,
            enterprises, and government-scale organizations.
          </p>
        </div>

        {/* ── Scale metrics strip ── */}
        <div ref={metricsRef} className="reveal grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
          {scaleMetrics.map((m, i) => (
            <div
              key={i}
              className="flex flex-col px-5 py-4 rounded-xl"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span
                className="font-black text-white leading-none mb-1"
                style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.03em" }}
              >
                {m.num}
              </span>
              <span className="text-xs text-gray-500 font-medium leading-snug">{m.label}</span>
            </div>
          ))}
        </div>

        {/* ── 3-column system category grid ── */}
        <div ref={gridRef} className="reveal">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
            {systems.map((s, i) => (
              <Link
                key={i}
                to={s.caseStudy}
                className="group flex flex-col gap-4 p-5 rounded-2xl transition-all duration-300"
                style={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${s.accent}40`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
              >
                {/* Icon + Category */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${s.accent}12`, color: s.accent }}
                  >
                    {s.icon}
                  </div>
                  <p className="text-white font-bold text-sm leading-snug">{s.category}</p>
                </div>

                {/* Bullets */}
                <ul className="flex flex-col gap-1.5">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-gray-400">
                      <span
                        className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full"
                        style={{ background: s.accent, opacity: 0.5 }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tech tags + arrow */}
                <div
                  className="flex items-center justify-between mt-auto pt-3"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="flex flex-wrap gap-1">
                    {s.tech.map((t, j) => (
                      <span
                        key={j}
                        className="text-[10px] font-mono px-2 py-0.5 rounded"
                        style={{
                          background: `${s.accent}0d`,
                          color: s.accent,
                          border: `1px solid ${s.accent}25`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <svg
                    width="13" height="13" viewBox="0 0 24 24" fill="none"
                    stroke={s.accent} strokeWidth="2.5" opacity="0.5"
                    className="flex-shrink-0 ml-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ── Selected Systems ── */}
        <div ref={selectedRef} className="reveal mb-12">
          <div
            className="p-7 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-600">
                Selected Systems
              </p>
              <div className="hidden sm:block flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
              <Link
                to="/case-studies"
                className="text-xs font-semibold transition-colors duration-200"
                style={{ color: "#4b5563" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#9ca3af")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4b5563")}
              >
                Full case studies →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selectedSystems.map((sys, i) => (
                <Link
                  key={i}
                  to={`/case-studies/${sys.slug}`}
                  className="group flex items-center gap-3 text-sm text-gray-400 transition-colors duration-200 hover:text-gray-200"
                >
                  <span
                    className="flex-shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{ background: "rgba(255,255,255,0.15)" }}
                  />
                  {sys.name}
                  <svg
                    className="ml-auto flex-shrink-0 opacity-0 group-hover:opacity-60 transition-opacity duration-200 group-hover:translate-x-0.5"
                    width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── Closing line ── */}
        <div ref={closingRef} className="reveal">
          <div
            className="flex flex-col sm:flex-row sm:items-center gap-5 px-6 py-5 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <svg className="flex-shrink-0 opacity-40" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <p className="text-sm text-gray-500 leading-relaxed">
              Most of my recent work focuses on building production-grade AI systems used internally by companies
              and organizations — which is why many projects are documented as{" "}
              <Link
                to="/case-studies"
                className="text-gray-400 underline underline-offset-2 transition-colors duration-200 hover:text-white"
              >
                technical case studies
              </Link>{" "}
              rather than public demo apps.
            </p>
            <a
              href="mailto:bhutta.umer65@gmail.com"
              className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 whitespace-nowrap"
              style={{ background: "#ffffff", color: "#000000" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#e5e7eb")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#ffffff")}
            >
              Start an AI Project
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
