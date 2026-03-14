import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import caseStudies from "../case_studies/case_studies.json";

const caseStudyFiles = import.meta.glob("/src/case_studies/*.md", { query: "?raw", import: "default" });

const sectorColors = {
  "Commerce": "#fb923c",
  "Government": "#60a5fa",
  "Automation": "#a78bfa",
  "Enterprise": "#4ade80",
  "Document": "#f472b6",
  "AI Infrastructure": "#facc15",
  "Applied AI": "#34d399",
};

function getSectorColor(sector) {
  const key = Object.keys(sectorColors).find((k) => sector.includes(k));
  return key ? sectorColors[key] : "#6b7280";
}

export default function CaseStudyPost() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  const meta = caseStudies.find((c) => c.slug === slug);
  const accentColor = meta ? getSectorColor(meta.sector) : "#6b7280";

  useEffect(() => {
    setLoading(true);
    const entry = Object.entries(caseStudyFiles).find(([path]) =>
      path.endsWith(`/${slug}.md`)
    );
    if (entry) {
      const [, resolver] = entry;
      resolver()
        .then((text) => { setContent(text); setLoading(false); })
        .catch(() => { setContent("# Error\nUnable to load this case study."); setLoading(false); });
    } else {
      setContent("# 404\nCase study not found.");
      setLoading(false);
    }
  }, [slug]);

  return (
    <div style={{ background: "#080808", minHeight: "100vh" }}>
      <div className="max-w-3xl mx-auto px-5 py-16">

        {/* Back */}
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-sm mb-12 transition-colors duration-200"
          style={{ color: "#6b7280" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
          </svg>
          All case studies
        </Link>

        {/* Meta header */}
        {meta && (
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#6b7280" }}>
                Case Study
              </p>
              <span
                className="text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded"
                style={{
                  background: `${accentColor}15`,
                  color: accentColor,
                  border: `1px solid ${accentColor}30`,
                }}
              >
                {meta.sector}
              </span>
            </div>

            <h1
              className="font-black text-white leading-tight mb-5"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", letterSpacing: "-0.025em" }}
            >
              {meta.title}
            </h1>

            <p className="text-base leading-relaxed mb-6" style={{ color: "#9ca3af" }}>
              {meta.description}
            </p>

            {/* Stack tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {meta.stack.map((t, i) => (
                <span
                  key={i}
                  className="text-xs font-mono px-3 py-1 rounded-full"
                  style={{
                    background: `${accentColor}10`,
                    color: accentColor,
                    border: `1px solid ${accentColor}25`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Hero image */}
            {meta.image && (
              <div className="overflow-hidden rounded-2xl mb-10" style={{ maxHeight: 360 }}>
                <img
                  src={meta.image}
                  alt={meta.title}
                  className="w-full h-full object-cover"
                  style={{ filter: "grayscale(15%) brightness(0.8)" }}
                />
              </div>
            )}

            {/* Divider */}
            <div style={{ height: 1, background: "rgba(255,255,255,0.08)" }} />
          </div>
        )}

        {/* Article body */}
        {loading ? (
          <div className="py-20 text-center">
            <div
              className="inline-block w-6 h-6 rounded-full border-2 animate-spin"
              style={{ borderColor: "#333", borderTopColor: "#fff" }}
            />
          </div>
        ) : (
          <article
            className="prose prose-invert max-w-none"
            style={{
              "--tw-prose-body": "#a1a1aa",
              "--tw-prose-headings": "#ffffff",
              "--tw-prose-lead": "#a1a1aa",
              "--tw-prose-links": "#ffffff",
              "--tw-prose-bold": "#ffffff",
              "--tw-prose-counters": "#6b7280",
              "--tw-prose-bullets": "#4b5563",
              "--tw-prose-hr": "rgba(255,255,255,0.08)",
              "--tw-prose-quotes": "#a1a1aa",
              "--tw-prose-quote-borders": "rgba(255,255,255,0.15)",
              "--tw-prose-captions": "#6b7280",
              "--tw-prose-code": "#e2e8f0",
              "--tw-prose-pre-code": "#e2e8f0",
              "--tw-prose-pre-bg": "#111111",
              "--tw-prose-th-borders": "rgba(255,255,255,0.1)",
              "--tw-prose-td-borders": "rgba(255,255,255,0.06)",
            }}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            >
              {content}
            </ReactMarkdown>
          </article>
        )}

        {/* Bottom nav */}
        <div className="mt-16 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-sm mb-4" style={{ color: "#6b7280" }}>
            Interested in building something similar?
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:bhutta.umer65@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200"
              style={{ background: "#ffffff", color: "#000000" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#e5e7eb")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#ffffff")}
            >
              Start an AI Project
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm mt-0 transition-colors duration-200"
              style={{ color: "#6b7280" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
              </svg>
              Back to all case studies
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
