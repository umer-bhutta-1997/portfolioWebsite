import { useState, useEffect } from "react";
import NeuralNetworkBackground from "./NeuralNetworkBackground";

const ROLES = [
  "AI Engineer",
  "LLM Specialist",
  "GenAI Architect",
  "RAG Systems Builder",
  "AI Agent Developer",
];

function useTypingEffect(words, typingSpeed = 90, pauseMs = 1800, deleteSpeed = 50) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [phase, setPhase] = useState("typing"); // typing | pause | deleting

  useEffect(() => {
    const current = words[wordIdx];
    let timer;

    if (phase === "typing") {
      if (display.length < current.length) {
        timer = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), typingSpeed);
      } else {
        timer = setTimeout(() => setPhase("pause"), pauseMs);
      }
    } else if (phase === "pause") {
      timer = setTimeout(() => setPhase("deleting"), pauseMs / 3);
    } else {
      if (display.length > 0) {
        timer = setTimeout(() => setDisplay(display.slice(0, -1)), deleteSpeed);
      } else {
        setWordIdx((i) => (i + 1) % words.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timer);
  }, [display, phase, wordIdx, words, typingSpeed, pauseMs, deleteSpeed]);

  return display;
}

export default function Hero() {
  const [projects, setProjects] = useState("20");
  const [experience, setExperience] = useState(0);
  const role = useTypingEffect(ROLES);

  useEffect(() => {
    const experiences = [
      { start: "August 2021", end: "Present" },
      { start: "March 2024", end: "Present" },
      { start: "October 2024", end: "January 2025" },
    ];
    const now = new Date();
    // Earliest start
    const earliest = new Date("August 2021");
    const diffMonths =
      (now.getFullYear() - earliest.getFullYear()) * 12 +
      (now.getMonth() - earliest.getMonth());
    setExperience(Math.floor(diffMonths / 12));

    fetch("https://api.github.com/users/umer-bhutta-1997/repos")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const count = data.filter((r) => !r.fork).length;
          if (count > 0) setProjects(String(count));
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col grain"
      style={{ background: "#080808", overflow: "hidden" }}
    >
      {/* Neural network canvas background */}
      <NeuralNetworkBackground />

      {/* Animated blob shapes — mimics the 3D AI mesh from reference */}
      <div
        className="mesh-blob"
        style={{
          width: "55vw",
          height: "55vw",
          maxWidth: 700,
          maxHeight: 700,
          background: "radial-gradient(circle, rgba(80,80,90,0.55) 0%, rgba(30,30,38,0.4) 50%, transparent 75%)",
          top: "-10%",
          right: "-10%",
          animationDuration: "14s",
          zIndex: 2,
        }}
      />
      <div
        className="mesh-blob"
        style={{
          width: "35vw",
          height: "35vw",
          maxWidth: 420,
          maxHeight: 420,
          background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
          bottom: "10%",
          left: "-5%",
          animationDuration: "18s",
          animationDelay: "-6s",
          zIndex: 2,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-between max-w-6xl w-full mx-auto px-5 py-16 md:py-24">
        {/* Top: Name + description */}
        <div>
          {/* Available badge */}
          <div className="flex items-center gap-2 mb-8">
            <span className="status-dot green" />
            <span className="text-sm text-gray-400">Available for AI projects</span>
          </div>

          {/* Name — newspaper style */}
          <h1
            className="font-black text-white leading-none tracking-tight"
            style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", letterSpacing: "-0.03em" }}
          >
            Muhammad
            <br />
            <span className="text-gradient">Umer Bhutta</span>
          </h1>

          {/* Typing role */}
          <div className="mt-5 flex items-center gap-3">
            <span
              className="font-mono text-lg md:text-2xl text-gray-300"
              style={{ minHeight: "2rem" }}
            >
              {role}
              <span
                className="text-white ml-0.5"
                style={{ animation: "blink 1s step-end infinite" }}
              >
                |
              </span>
            </span>
          </div>

          {/* Tagline */}
          <p
            className="mt-6 text-gray-400 leading-relaxed max-w-2xl"
            style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
          >
            I design and ship production-ready AI systems — RAG pipelines,
            LLM agents, fine-tuned models, and GenAI applications — that
            solve real business problems and scale reliably.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
              View My Work
            </a>
            <a href="mailto:bhutta.umer65@gmail.com" className="btn-ghost">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              bhutta.umer65@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom: Status bar */}
        <div
          className="mt-16 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div className="flex items-start gap-3">
            <svg className="mt-0.5 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <div>
              <p className="text-white text-sm font-medium">Islamabad, Pakistan</p>
              <p className="text-gray-500 text-xs mt-0.5">Open to remote work</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <svg className="mt-0.5 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
            </svg>
            <div>
              <p className="text-white text-sm font-medium">AI Systems + LLMs</p>
              <p className="text-gray-500 text-xs mt-0.5">RAG, agents, fine-tuning</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <svg className="mt-0.5 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
            <div>
              <p className="text-white text-sm font-medium">{experience}+ Years · {projects}+ Projects</p>
              <p className="text-gray-500 text-xs mt-0.5">Production AI experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-float-s">
        <span className="text-xs text-gray-600 tracking-widest uppercase">scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </section>
  );
}
