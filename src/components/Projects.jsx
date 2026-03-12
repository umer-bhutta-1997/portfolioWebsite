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

const projects = [
  {
    category: "AI Agents",
    title: "Autocoder",
    description:
      "An AI agent specialized in generating production-ready RPA code in .robot and Python formats. Uses a custom SDK built for RPA processes — leveraging LLMs, task decomposition, and code validation to streamline robotic process automation.",
    tags: ["LangChain", "OpenAI", "RPA", "Python SDK", "AI Agents"],
    link: "/projects/autocoder",
    gradient: "from-blue-950 to-gray-950",
    accent: "#3b82f6",
  },
  {
    category: "Customer AI",
    title: "SiteJetAI",
    description:
      "An AI-powered customer support platform that reduces response time by 80%. Uses RAG for context-aware answers, multi-channel integration, and intelligent escalation logic. Deployed for enterprise clients.",
    tags: ["RAG", "Next.js", "PostgreSQL", "OpenAI", "Stripe"],
    link: "/projects/sitejetai",
    gradient: "from-emerald-950 to-gray-950",
    accent: "#10b981",
  },
  {
    category: "Generative AI",
    title: "Play Book AI",
    description:
      "AI-powered platform that generates fully personalized children's story books with custom illustrations. Uses GPT-4 for narrative generation, DALL-E for art, and real-time streaming via WebSockets.",
    tags: ["GPT-4", "DALL-E", "WebSockets", "Redis", "Express"],
    link: "/projects/play-book-ai",
    gradient: "from-purple-950 to-gray-950",
    accent: "#8b5cf6",
  },
  {
    category: "Business AI",
    title: "Avatare",
    description:
      "Automated AI business platform offering customer support avatars, personalized marketing campaigns, and intelligent sales assistants. Multi-tenant architecture with LLM-powered conversation flows.",
    tags: ["LLMs", "Multi-tenant", "NLP", "REST APIs", "Docker"],
    link: "/projects/avatare",
    gradient: "from-orange-950 to-gray-950",
    accent: "#f97316",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ background: "#080808", padding: "100px 0" }}>
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="reveal flex items-end justify-between mb-16 flex-wrap gap-4" ref={useReveal()}>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3">Recent Work</p>
            <h2
              className="font-black text-white leading-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
            >
              AI systems I've<br />
              <span className="text-gray-500">built & shipped.</span>
            </h2>
          </div>
          <a href="/blogs" className="btn-ghost text-sm py-2 px-5">
            View all work →
          </a>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <div
              key={i}
              className="reveal card-dark overflow-hidden group"
              ref={useReveal()}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Top gradient bar */}
              <div
                className={`h-36 bg-gradient-to-br ${project.gradient} relative flex items-end p-5`}
              >
                {/* Abstract AI visualization */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: `radial-gradient(circle at 70% 30%, ${project.accent}40, transparent 60%)`,
                  }}
                />
                <div className="absolute top-4 right-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: `${project.accent}20`, border: `1px solid ${project.accent}30` }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={project.accent} strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                </div>
                <span
                  className="relative z-10 text-xs font-semibold tracking-widest uppercase"
                  style={{ color: project.accent }}
                >
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((t, j) => (
                    <span key={j} className="tag text-xs">{t}</span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors duration-200 group"
                >
                  View details
                  <svg
                    width="14" height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
