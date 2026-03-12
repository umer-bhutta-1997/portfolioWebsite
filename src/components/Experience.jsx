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

const experiences = [
  {
    title: "Software Engineer — AI",
    company: "Autosphere.ai",
    period: "March 2024 — Present",
    type: "Full-Time",
    current: true,
    responsibilities: [
      "Designed and deployed modular AI agent workflows leveraging LLMs, SLMs, and VLMs to automate RPA tasks across enterprise operations.",
      "Engineered scalable AI systems integrating OpenAI-compatible APIs, LangChain-based orchestration, and autonomous agent logic for task decomposition and execution.",
      "Built GenAI pipelines for document parsing, structured data generation, and knowledge grounding — enhancing information accuracy and traceability.",
      "Developed reusable SDKs for internal automation workflows, streamlining LLM and vision model integration into the product ecosystem.",
      "Collaborated on system-level architecture to integrate AI with backend services, ensuring reliability, observability, and maintainability in production.",
    ],
    tags: ["LangChain", "OpenAI", "RPA", "LLMs", "VLMs", "Python"],
  },
  {
    title: "Senior AI Engineer",
    company: "Rawa'a",
    period: "Oct 2024 — Jan 2025",
    type: "Part-Time",
    current: false,
    responsibilities: [
      "Led architectural improvements in stock price forecasting models using PyTorch and advanced LSTM variants — increasing prediction accuracy by 28%.",
      "Designed a deep learning ensemble pipeline incorporating technical indicators, news sentiment, and historical time series for robust market forecasting.",
      "Built an AI agent framework for automated feature extraction, data quality assessment, and experiment tracking.",
      "Integrated advanced regularization, early stopping, and time-aware validation techniques to improve model generalization in volatile markets.",
    ],
    tags: ["PyTorch", "LSTM", "Time Series", "Ensemble Models", "NLP"],
  },
  {
    title: "ML Engineer",
    company: "DiveDeepAI",
    period: "Aug 2021 — Feb 2024",
    type: "Full-Time",
    current: false,
    responsibilities: [
      "Delivered MVPs across NLP, computer vision, and analytics — chatbots, document classifiers, and vision-based quality inspection tools.",
      "Built scalable AI pipelines using TensorFlow, PyTorch, and Docker, deploying real-time inference services in cloud and on-premise environments.",
      "Developed interactive dashboards and BI tools using Tableau and pandas to visualize model outputs and drive data-informed decisions.",
      "Led cross-functional prototyping and deployment for clients in fintech, retail, and healthcare — ensuring fast iteration and stakeholder alignment.",
      "Specialized in fine-tuning transformer-based models and integrating them into frontend/backend systems for client demos.",
    ],
    tags: ["TensorFlow", "PyTorch", "Docker", "NLP", "Computer Vision", "Tableau"],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ background: "#080808", padding: "100px 0" }}>
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="reveal mb-16" ref={useReveal()}>
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3">Experience</p>
          <h2
            className="font-black text-white leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
          >
            Where I've<br />
            <span className="text-gray-500">shipped AI.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-0">
          {experiences.map((exp, i) => (
            <div key={i} className="reveal flex gap-6 pb-12" ref={useReveal()} style={{ transitionDelay: `${i * 80}ms` }}>
              {/* Timeline line + dot */}
              <div className="flex flex-col items-center">
                <div
                  className="timeline-dot mt-1"
                  style={{ background: exp.current ? "#22c55e" : "#374151" }}
                />
                {i < experiences.length - 1 && (
                  <div
                    className="w-px flex-1 mt-3"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-2">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight">{exp.title}</h3>
                    <p className="text-gray-500 text-sm mt-0.5">
                      {exp.company}
                      <span className="mx-2">·</span>
                      <span
                        className="px-2 py-0.5 rounded text-xs"
                        style={{ background: "rgba(255,255,255,0.05)", color: "#9ca3af" }}
                      >
                        {exp.type}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {exp.current && <span className="status-dot green" />}
                    <span className="text-gray-600 text-sm font-mono">{exp.period}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-2 mb-4">
                  {exp.responsibilities.map((r, j) => (
                    <li key={j} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                      <span className="text-gray-700 mt-1.5 flex-shrink-0">—</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((t, j) => (
                    <span key={j} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
