import { useEffect, useRef } from "react";

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
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

const stats = [
  { num: "4+",       label: "Years Building Production AI" },
  { num: "50+",      label: "AI Systems & Automations Delivered" },
  { num: "15+",      label: "LLM / Vision Models Deployed" },
  { num: "Millions", label: "Requests Processed by Systems" },
];

const capabilities = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: "End-to-End AI Systems",
    accent: "#4ade80",
    points: [
      "Data pipelines & ETL",
      "Vector databases & RAG pipelines",
      "Model training / fine-tuning",
      "Scalable inference APIs",
      "Cloud & GPU deployment",
    ],
    tech: ["Python", "FastAPI", "Qdrant", "Airflow", "Docker"],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
        <path d="M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
    title: "LLM & Generative AI Engineering",
    accent: "#60a5fa",
    points: [
      "RAG systems & knowledge assistants",
      "Prompt engineering & tool-calling",
      "AI agents & orchestration frameworks",
      "LLM evaluation pipelines",
      "Custom embeddings & retrieval systems",
    ],
    tech: ["LangChain", "LangGraph", "OpenAI", "Claude", "Gemini"],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: "Production AI Infrastructure",
    accent: "#a78bfa",
    points: [
      "High-performance inference pipelines",
      "GPU deployment & optimization",
      "Low-latency LLM serving (vLLM / Groq)",
      "Data pipelines for AI systems",
      "Monitoring, evaluation, and iteration",
    ],
    tech: ["vLLM", "Groq", "Kubernetes", "Prometheus", "Terraform"],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="9" height="9" rx="1"/>
        <rect x="13" y="3" width="9" height="9" rx="1"/>
        <rect x="2" y="14" width="9" height="7" rx="1"/>
        <rect x="13" y="14" width="9" height="7" rx="1"/>
      </svg>
    ),
    title: "AI Automation & Computer Vision",
    accent: "#fb923c",
    points: [
      "OCR pipelines & document intelligence",
      "Vision-based UI automation",
      "AI-powered workflow automation",
      "RPA + LLM integration",
      "Structured data extraction",
    ],
    tech: ["OpenCV", "PaddleOCR", "Playwright", "GPT-4V", "Pytesseract"],
  },
];

const techStack = [
  { label: "Python",      color: "#3776ab" },
  { label: "LangChain",   color: "#4ade80" },
  { label: "LangGraph",   color: "#4ade80" },
  { label: "OpenAI API",  color: "#74aa9c" },
  { label: "Claude API",  color: "#d4a96a" },
  { label: "Gemini",      color: "#4285f4" },
  { label: "Hugging Face",color: "#ff9d00" },
  { label: "FastAPI",     color: "#009688" },
  { label: "Qdrant",      color: "#dc4e41" },
  { label: "Weaviate",    color: "#00c853" },
  { label: "vLLM",        color: "#a78bfa" },
  { label: "Docker",      color: "#2496ed" },
  { label: "PostgreSQL",  color: "#336791" },
  { label: "Redis",       color: "#dc382d" },
  { label: "AWS",         color: "#ff9900" },
  { label: "GCP",         color: "#4285f4" },
  { label: "PyTorch",     color: "#ee4c2c" },
];

const projectTypes = [
  "Enterprise RAG knowledge assistants",
  "AI agents for business workflows",
  "Vision-based desktop automation",
  "Document OCR & extraction systems",
  "Conversational AI platforms",
  "AI-powered search systems",
  "Data pipelines for AI systems",
  "LLM fine-tuning pipelines",
  "AI-powered analytics assistants",
];

const exploring = [
  "Multi-agent AI systems and orchestration frameworks",
  "Advanced RAG architectures for enterprise knowledge",
  "LLM evaluation and benchmarking frameworks",
  "Vision-language models for automation",
  "High-performance inference with vLLM and GPU clusters",
];

export default function About() {
  const headerRef = useReveal(0);
  const photoRef  = useReveal(0);
  const bioRef    = useReveal(100);
  const statsRef  = useReveal(0);
  const stackRef  = useReveal(0);
  const cap0Ref   = useReveal(0);
  const cap1Ref   = useReveal(80);
  const cap2Ref   = useReveal(160);
  const cap3Ref   = useReveal(240);
  const projRef   = useReveal(0);
  const explRef   = useReveal(0);

  const capRefs = [cap0Ref, cap1Ref, cap2Ref, cap3Ref];

  return (
    <section id="about" style={{ background: "#080808", padding: "110px 0 80px" }}>
      <div className="max-w-6xl mx-auto px-5">

        {/* ── Section header ── */}
        <div ref={headerRef} className="reveal mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3">About</p>
          <h2
            className="font-black text-white leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
          >
            AI Systems Architect.<br />
            <span className="text-gray-600">Production-first. Always.</span>
          </h2>
        </div>

        {/* ── Top grid: Photo + Bio ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-12">

          {/* Photo card */}
          <div ref={photoRef} className="reveal">
            <div className="card-dark p-1" style={{ borderRadius: 18 }}>
              <div className="relative overflow-hidden" style={{ borderRadius: 14, height: 360 }}>
                <img
                  src="picture.jpg"
                  alt="Muhammad Umer Bhutta"
                  className="w-full h-full object-cover object-top"
                  style={{ filter: "grayscale(15%)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(8,8,8,0.85) 0%, transparent 50%)" }}
                />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white font-bold text-lg leading-tight">Muhammad Umer Bhutta</p>
                  <p className="text-gray-400 text-sm mt-0.5">AI Engineer · Islamabad, Pakistan</p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="status-dot green" />
                    <span className="text-xs text-gray-400">Available for AI projects</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust badge */}
            <div
              className="mt-5 flex items-start gap-3 px-4 py-3 rounded-xl"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <p className="text-xs text-gray-400 leading-relaxed">
                Delivered AI systems used by{" "}
                <span className="text-gray-300 font-medium">startups, enterprises, and government-scale platforms</span>{" "}
                — shipped and running in production.
              </p>
            </div>
          </div>

          {/* Bio + CTA */}
          <div ref={bioRef} className="reveal flex flex-col gap-6">

            {/* Role pill */}
            <div
              className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide"
              style={{ background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)", color: "#4ade80" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              AI Engineer | Building Production-Grade AI Systems
            </div>

            {/* Headline bio */}
            <div>
              <p className="text-white font-semibold text-xl leading-snug mb-4">
                I design and build production AI systems across LLMs, RAG pipelines, computer vision, and intelligent automation.
              </p>
              <p className="text-gray-400 leading-relaxed text-[15px]">
                Over the past <span className="text-white font-semibold">4+ years</span> I have delivered{" "}
                <span className="text-white font-semibold">50+ AI solutions</span> for startups, enterprises, and internal
                platforms — ranging from LLM-powered knowledge systems and AI agents to computer vision automation and
                large-scale data pipelines.
              </p>
              <p className="text-gray-400 leading-relaxed text-[15px] mt-3">
                My expertise spans the entire AI lifecycle:{" "}
                <span className="text-gray-300">data ingestion, model training & fine-tuning, RAG architecture,
                inference optimization, and scalable deployment.</span>
              </p>
              <p className="text-gray-400 leading-relaxed text-[15px] mt-3">
                I specialize in building AI that is{" "}
                <span className="text-white font-semibold">fast, reliable, and production-ready</span> — not just demos.
                Whether it's RAG systems, autonomous AI agents, OCR pipelines, enterprise knowledge assistants, or
                large-scale AI infrastructure, I can take an idea from{" "}
                <span className="text-gray-300 font-medium">concept → prototype → production.</span>
              </p>
            </div>

            {/* Currently exploring */}
            <div ref={explRef} className="reveal card-dark p-5 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="status-dot cyan" />
                <span className="text-white text-sm font-semibold">Currently Exploring</span>
              </div>
              <ul className="flex flex-col gap-1.5">
                {exploring.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-gray-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <a href="mailto:bhutta.umer65@gmail.com" className="btn-white inline-flex items-center gap-2">
                Start an AI Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
              <a href="#work" className="btn-ghost inline-flex items-center gap-2">
                View My Work
              </a>
            </div>
          </div>
        </div>

        {/* ── Stats ── */}
        <div ref={statsRef} className="reveal grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((s, i) => (
            <div
              key={i}
              className="card-dark p-6 flex flex-col items-center text-center"
              style={{ borderRadius: 14 }}
            >
              <p
                className="font-black text-white leading-none mb-1"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.04em" }}
              >
                {s.num}
              </p>
              <p className="text-gray-500 text-xs font-medium leading-snug mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── Tech Stack Strip ── */}
        <div ref={stackRef} className="reveal mb-12">
          <div
            className="card-dark px-6 py-5"
            style={{ borderRadius: 14 }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-600 mb-4">
              Tech & Tools
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((t, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: `${t.color}10`,
                    border: `1px solid ${t.color}30`,
                    color: t.color,
                  }}
                >
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Capabilities: 2×2 grid ── */}
        <div className="mb-4">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-600 mb-6">Core Capabilities</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                ref={capRefs[i]}
                className="reveal card-dark p-6"
                style={{ borderRadius: 14 }}
              >
                {/* Icon + Title */}
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${cap.accent}12`, color: cap.accent }}
                  >
                    {cap.icon}
                  </div>
                  <p className="text-white font-bold text-[15px] leading-snug pt-1">{cap.title}</p>
                </div>

                {/* Bullet points */}
                <ul className="flex flex-col gap-2 mb-4">
                  {cap.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-gray-400">
                      <span
                        className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full"
                        style={{ background: cap.accent, opacity: 0.6 }}
                      />
                      {pt}
                    </li>
                  ))}
                </ul>

                {/* Tech tags at bottom */}
                <div
                  className="flex flex-wrap gap-1.5 pt-4"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  {cap.tech.map((t, j) => (
                    <span
                      key={j}
                      className="text-[11px] px-2 py-0.5 rounded font-mono"
                      style={{
                        background: `${cap.accent}0a`,
                        color: cap.accent,
                        border: `1px solid ${cap.accent}20`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── AI Systems I've Built ── */}
        <div ref={projRef} className="reveal mt-12">
          <div
            className="card-dark p-8"
            style={{ borderRadius: 18, background: "rgba(255,255,255,0.02)" }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-600">AI Systems I've Built</p>
              <div className="hidden sm:block flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
              <span className="text-xs text-gray-600 font-mono">{projectTypes.length} categories</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {projectTypes.map((type, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-sm text-gray-300 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                  {type}
                </span>
              ))}
            </div>

            {/* Bottom divider + tagline */}
            <div
              className="mt-8 pt-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p className="text-sm text-gray-500 max-w-md leading-relaxed">
                Every system built for{" "}
                <span className="text-gray-300">real-world scale</span> — optimized for latency, cost, and
                reliability from day one.
              </p>
              <a
                href="mailto:bhutta.umer65@gmail.com"
                className="text-sm font-semibold inline-flex items-center gap-1.5 whitespace-nowrap transition-colors duration-200"
                style={{ color: "#4ade80" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#86efac")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4ade80")}
              >
                Discuss your AI project
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
