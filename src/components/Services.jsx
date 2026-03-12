import { useEffect, useRef } from "react";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const services = [
  {
    category: "RAG Platform",
    title: "RAG & Knowledge Systems",
    description:
      "Hybrid search, chunking strategies, schema-aware re-ranking, and retrieval observability. I build RAG systems that are accurate, fast, and production-ready.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
  },
  {
    category: "Agents",
    title: "AI Agent Development",
    description:
      "Multi-tool planning, retries, guardrails, and tracing via OpenTelemetry. I build autonomous agents that execute complex workflows reliably.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
  },
  {
    category: "Machine Learning",
    title: "Custom Model Training",
    description:
      "Fine-tuned transformers for domain-specific tasks with custom datasets. LoRA, QLoRA, RLHF — I select the right technique for your use case and budget.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    category: "Developer UX",
    title: "AI-Powered Web Apps",
    description:
      "Full-stack AI web applications with streaming, real-time inference, and clean UX. FastAPI backends + React frontends built for speed and reliability.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    category: "Data Pipeline",
    title: "AI Analytics & Insights",
    description:
      "Streaming data processing, ML-powered dashboards, and predictive analytics pipelines. Turn raw data into actionable intelligence for your business.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    category: "API Architecture",
    title: "LLM API & Integration",
    description:
      "Scalable LLM API wrappers, prompt management systems, multi-provider routing, and cost optimization. Clean, maintainable integrations with any LLM provider.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" style={{ background: "#080808", padding: "100px 0" }}>
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="reveal mb-16" ref={useReveal()}>
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3">Services</p>
          <h2
            className="font-black text-white leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
          >
            What I build<br />
            <span className="text-gray-500">for your business.</span>
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {services.map((s, i) => (
            <div
              key={i}
              className="reveal card-dark p-6"
              ref={useReveal()}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Category + icon */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  {s.icon}
                </div>
                <span className="text-xs font-semibold tracking-widest uppercase text-gray-600">
                  {s.category}
                </span>
              </div>
              <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        {/* Why choose me — CTA card */}
        <div
          className="reveal card-dark p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
          ref={useReveal()}
        >
          <div className="flex-1">
            <h3
              className="font-black text-white leading-tight mb-3"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Why hire an AI engineer<br />
              <span className="text-gray-500">instead of a team?</span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
              I move fast, own the full stack, and focus on business outcomes — not
              research paper metrics. You get a senior AI engineer who understands
              both the ML and the engineering, delivered at startup speed.
            </p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <a href="mailto:bhutta.umer65@gmail.com" className="btn-white">
              Start a project →
            </a>
            <a
              href="https://www.linkedin.com/in/bhutta-umer65/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
