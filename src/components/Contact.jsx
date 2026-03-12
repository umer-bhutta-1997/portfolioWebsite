import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ background: "#080808", padding: "100px 0 80px" }}
    >
      <div className="max-w-6xl mx-auto px-5">
        {/* Huge CTA headline — like the reference "Build with AI." */}
        <div className="reveal mb-16" ref={useReveal()}>
          <h2
            className="font-black leading-none text-white"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 9rem)",
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
            }}
          >
            Build AI.{" "}
            <span className="text-gray-600">Together.</span>
          </h2>
          <p className="mt-6 text-gray-500 text-base max-w-xl leading-relaxed">
            Looking to build an AI system, integrate LLMs into your product, or
            hire a dedicated AI engineer? Let's talk.
          </p>
        </div>

        {/* Contact columns */}
        <div
          className="reveal grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t"
          ref={useReveal()}
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          {/* Email */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-600 mb-4">Email</p>
            <a
              href="mailto:bhutta.umer65@gmail.com"
              className="flex items-center gap-3 text-white font-semibold hover:text-gray-300 transition-colors group"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              bhutta.umer65@gmail.com
            </a>
            <p className="text-gray-600 text-sm mt-2">Typically replies within 24h</p>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-600 mb-4">Social</p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/in/bhutta-umer65/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white font-semibold hover:text-gray-300 transition-colors"
              >
                <FaLinkedin size={16} />
                LinkedIn
              </a>
              <a
                href="https://github.com/umer-bhutta-1997"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white font-semibold hover:text-gray-300 transition-colors"
              >
                <FaGithub size={16} />
                GitHub
              </a>
            </div>
          </div>

          {/* Location + availability */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-600 mb-4">Location</p>
            <div className="flex items-center gap-2 text-white font-semibold mb-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Islamabad, Pakistan
            </div>
            <p className="text-gray-600 text-sm">Open to remote worldwide</p>
            <div className="flex items-center gap-2 mt-3">
              <span className="status-dot green" />
              <span className="text-green-400 text-sm font-medium">Available for new projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
