import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import caseStudies from "../case_studies/case_studies.json";

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

// Show 4 featured case studies on homepage (most recent first)
const featured = [...caseStudies].reverse().slice(0, 4);

export default function CaseStudiesPreview() {
  const headerRef = useReveal(0);
  const gridRef   = useReveal(80);
  const ctaRef    = useReveal(160);

  return (
    <section id="case-studies" style={{ background: "#080808", padding: "110px 0 80px" }}>
      <div className="max-w-6xl mx-auto px-5">

        {/* Header */}
        <div ref={headerRef} className="reveal mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3">
                Case Studies
              </p>
              <h2
                className="font-black text-white leading-none"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}
              >
                AI systems<br />
                <span className="text-gray-600">shipped in production.</span>
              </h2>
            </div>
            <Link
              to="/case-studies"
              className="self-start sm:self-end inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 whitespace-nowrap"
              style={{ color: "#6b7280" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
            >
              View all 8 case studies
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                className="transition-transform duration-200 group-hover:translate-x-1">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* 2×2 card grid */}
        <div ref={gridRef} className="reveal grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {featured.map(({ title, slug, description, sector, stack, image }) => {
            const accentColor = getSectorColor(sector);
            return (
              <Link
                key={slug}
                to={`/case-studies/${slug}`}
                className="group flex flex-col overflow-hidden transition-all duration-300"
                style={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 16,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
              >
                {/* Image */}
                {image && (
                  <div className="overflow-hidden" style={{ height: 160 }}>
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ filter: "grayscale(20%) brightness(0.7)" }}
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 gap-3">
                  {/* Sector */}
                  <span
                    className="self-start text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded"
                    style={{
                      background: `${accentColor}15`,
                      color: accentColor,
                      border: `1px solid ${accentColor}30`,
                    }}
                  >
                    {sector}
                  </span>

                  {/* Title */}
                  <h3
                    className="font-bold text-white leading-snug"
                    style={{ fontSize: "clamp(0.95rem, 2vw, 1.05rem)" }}
                  >
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed line-clamp-2" style={{ color: "#6b7280" }}>
                    {description}
                  </p>

                  {/* Stack + CTA row */}
                  <div className="flex items-center justify-between mt-auto pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="flex flex-wrap gap-1">
                      {stack.slice(0, 3).map((t, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.07)",
                            color: "#6b7280",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                      {stack.length > 3 && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded" style={{ color: "#4b5563" }}>
                          +{stack.length - 3}
                        </span>
                      )}
                    </div>
                    <div
                      className="flex items-center gap-1 text-xs font-semibold transition-all duration-200 group-hover:text-white"
                      style={{ color: "#4b5563" }}
                    >
                      Read
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                        className="transition-transform duration-200 group-hover:translate-x-0.5">
                        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View all CTA */}
        <div ref={ctaRef} className="reveal flex items-center justify-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#e5e7eb",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.09)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            }}
          >
            View all 8 case studies
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
