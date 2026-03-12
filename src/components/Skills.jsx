import { useEffect, useRef } from "react";
import {
  FaPython, FaDatabase, FaDocker, FaGithub, FaGitlab, FaGit,
} from "react-icons/fa";
import {
  SiTensorflow, SiPytorch, SiLangchain, SiFastapi, SiDjango, SiFlask,
  SiPostgresql, SiMongodb, SiHuggingface, SiNumpy, SiOpenai,
} from "react-icons/si";
import { AiFillCloud } from "react-icons/ai";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const STACK = [
  {
    category: "Core Languages & Frameworks",
    icon: "{ }",
    items: [
      { name: "Python 3.11+", icon: <FaPython /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "LangChain", icon: <SiLangchain /> },
    ],
  },
  {
    category: "AI & LLM Expertise",
    icon: "AI",
    items: [
      { name: "RAG Pipelines", icon: <SiHuggingface /> },
      { name: "LLM Fine-tuning", icon: <SiHuggingface /> },
      { name: "AI Agents", icon: <SiOpenai /> },
      { name: "Prompt Engineering", icon: <SiOpenai /> },
      { name: "NLP", icon: <SiHuggingface /> },
      { name: "LLMOps", icon: <FaDatabase /> },
      { name: "Generative AI", icon: <SiHuggingface /> },
    ],
  },
  {
    category: "LLM Models",
    icon: "⚡",
    items: [
      { name: "OpenAI GPT-4o", icon: <SiOpenai /> },
      { name: "Claude (Anthropic)", icon: <SiHuggingface /> },
      { name: "LLaMA 3", icon: <SiHuggingface /> },
      { name: "Mistral / Mixtral", icon: <SiHuggingface /> },
      { name: "Gemma", icon: <SiHuggingface /> },
      { name: "BERT / RoBERTa", icon: <SiHuggingface /> },
    ],
  },
  {
    category: "Vector Stores & Search",
    icon: "◈",
    items: [
      { name: "Pinecone", icon: <FaDatabase /> },
      { name: "ChromaDB", icon: <FaDatabase /> },
      { name: "Weaviate", icon: <FaDatabase /> },
      { name: "FAISS", icon: <FaDatabase /> },
      { name: "Qdrant", icon: <FaDatabase /> },
      { name: "Milvus", icon: <FaDatabase /> },
    ],
  },
  {
    category: "Data & Infrastructure",
    icon: "□",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "NumPy / Pandas", icon: <SiNumpy /> },
      { name: "RunPod", icon: <AiFillCloud /> },
      { name: "Dify", icon: <AiFillCloud /> },
    ],
  },
  {
    category: "Vision & Multimodal",
    icon: "◉",
    items: [
      { name: "CLIP", icon: <SiHuggingface /> },
      { name: "DALL-E 3", icon: <SiOpenai /> },
      { name: "Stable Diffusion", icon: <SiHuggingface /> },
      { name: "BLIP / BLIP-2", icon: <SiHuggingface /> },
      { name: "GPT-4 Vision", icon: <SiOpenai /> },
      { name: "Flamingo", icon: <SiHuggingface /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: "#080808", padding: "100px 0" }}>
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="reveal mb-16" ref={useReveal()}>
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3">Tech Stack</p>
          <h2
            className="font-black text-white leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
          >
            Tools I ship<br />
            <span className="text-gray-500">production AI with.</span>
          </h2>
        </div>

        {/* Focus areas */}
        <div className="reveal mb-10" ref={useReveal()}>
          <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
            <span className="text-white font-medium">Focus areas:</span>{" "}
            RAG optimization, agentic workflows, prompt engineering, model evaluation,
            and production-ready AI systems with sub-second latency.
          </p>
        </div>

        {/* Skill grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STACK.map((group, i) => (
            <div
              key={i}
              className="reveal card-dark p-6"
              ref={useReveal()}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="text-xs font-black text-gray-600 w-7 h-7 flex items-center justify-center rounded-md"
                  style={{ background: "rgba(255,255,255,0.04)", fontFamily: "monospace" }}
                >
                  {group.icon}
                </span>
                <h3 className="text-white font-semibold text-sm">{group.category}</h3>
              </div>

              {/* Items */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <span
                    key={j}
                    className="tag flex items-center gap-1.5"
                  >
                    <span className="text-gray-500 text-xs">{item.icon}</span>
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
