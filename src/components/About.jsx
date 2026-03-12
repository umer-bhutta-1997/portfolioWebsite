import { useEffect, useRef } from "react";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const stats = [
  { num: "4+", label: "Years Experience" },
  { num: "20+", label: "AI Projects Delivered" },
  { num: "10+", label: "LLMs Fine-tuned" },
  { num: "5+", label: "RAG Systems Built" },
];

const highlights = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: "End-to-End AI Systems",
    desc: "From data ingestion to production deployment — I build the full pipeline.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
    title: "LLM & GenAI Specialist",
    desc: "RAG pipelines, fine-tuning, prompt engineering, and agentic workflows.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: "Business-Focused Engineering",
    desc: "I obsess over latency, cost, and reliability — not just benchmark scores.",
  },
];

export default function About() {
  const sectionRef = useReveal();
  const statsRef = useReveal();

  return (
    <section id="about" style={{ background: "#080808", padding: "100px 0" }}>
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div ref={sectionRef} className="reveal mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3">About</p>
          <h2
            className="font-black text-white leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
          >
            I build AI products<br />
            <span className="text-gray-500">end-to-end.</span>
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left — photo + bio */}
          <div className="reveal" ref={useReveal()}>
            {/* Profile card */}
            <div className="card-dark p-1 mb-6" style={{ borderRadius: 18 }}>
              <div
                className="relative overflow-hidden"
                style={{ borderRadius: 14, height: 340 }}
              >
                <img
                  src="picture.jpg"
                  alt="Muhammad Umer Bhutta"
                  className="w-full h-full object-cover object-top"
                  style={{ filter: "grayscale(20%)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(8,8,8,0.7) 0%, transparent 60%)",
                  }}
                />
                <div className="absolute bottom-5 left-5">
                  <p className="text-white font-bold text-lg">Muhammad Umer Bhutta</p>
                  <p className="text-gray-400 text-sm">AI Engineer · Islamabad, PK</p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <p className="text-gray-400 leading-relaxed text-base">
              I'm an AI engineer with{" "}
              <span className="text-white font-semibold">4+ years</span> of experience
              building intelligent systems across NLP, LLMs, computer vision, and
              generative AI. I've worked with early-stage startups and enterprise clients
              to deliver AI that actually works in production.
            </p>
            <p className="text-gray-400 leading-relaxed text-base mt-4">
              My focus: shipping AI that is{" "}
              <span className="text-white font-semibold">fast, reliable, and cost-effective</span>.
              Whether you need a custom RAG system, an autonomous agent, fine-tuned
              models, or a full AI-powered product — I can take it from zero to production.
            </p>

            <a
              href="mailto:bhutta.umer65@gmail.com"
              className="btn-white mt-6 inline-flex"
            >
              Let's collaborate
            </a>
          </div>

          {/* Right — stats + highlights */}
          <div className="flex flex-col gap-6">
            {/* Stats */}
            <div
              ref={statsRef}
              className="reveal grid grid-cols-2 gap-4"
            >
              {stats.map((s, i) => (
                <div key={i} className="card-dark p-5">
                  <p className="stat-num">{s.num}</p>
                  <p className="stat-label">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="flex flex-col gap-4">
              {highlights.map((h, i) => (
                <div key={i} className="card-dark p-5 flex gap-4 items-start reveal" ref={useReveal()}>
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-gray-400"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    {h.icon}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{h.title}</p>
                    <p className="text-gray-500 text-sm mt-1">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Currently learning */}
            <div className="card-dark p-5 reveal" ref={useReveal()}>
              <div className="flex items-center gap-2 mb-2">
                <span className="status-dot cyan" />
                <span className="text-white text-sm font-semibold">Currently exploring</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Multi-agent orchestration, structured outputs with tool-calling LLMs,
                LLM evaluation frameworks, and low-latency inference with vLLM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
