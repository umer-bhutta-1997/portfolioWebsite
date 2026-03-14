import { useState } from "react";
import { Link } from "react-router-dom";
import caseStudies from "../case_studies/case_studies.json";

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

export default function CaseStudyList() {
  const [searchTerm, setSearchTerm] = useState("");

  const sorted = [...caseStudies].reverse();

  const filtered = sorted.filter(({ title, description, sector }) => {
    const t = searchTerm.toLowerCase();
    return (
      title.toLowerCase().includes(t) ||
      description.toLowerCase().includes(t) ||
      sector.toLowerCase().includes(t)
    );
  });

  return (
    <div style={{ background: "#080808", minHeight: "100vh" }}>
      <div className="max-w-5xl mx-auto px-5 py-20">

        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm mb-12 transition-colors duration-200"
          style={{ color: "#6b7280" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
          </svg>
          Back to home
        </Link>

        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#6b7280" }}>
            Case Studies
          </p>
          <h1
            className="font-black text-white leading-none mb-4"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", letterSpacing: "-0.03em" }}
          >
            Production AI<br />
            <span style={{ color: "#374151" }}>systems built.</span>
          </h1>
          <p style={{ color: "#6b7280" }} className="text-base max-w-xl leading-relaxed">
            Industry-ready documentation of AI systems shipped across enterprise, government,
            automation, and commerce — with architecture, challenges, and outcomes.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-10">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
            width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by title, sector, or keyword..."
            className="w-full max-w-md pl-11 pr-4 py-3 text-sm rounded-xl outline-none transition-all duration-200"
            style={{
              background: "#111111",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#e2e8f0",
            }}
            onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.2)")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
          />
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 40 }} />

        {/* Grid of case study cards */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map(({ title, slug, description, sector, stack, image }) => {
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
                    <div className="overflow-hidden" style={{ height: 180 }}>
                      <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ filter: "grayscale(20%) brightness(0.75)" }}
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6 gap-3">
                    {/* Sector badge */}
                    <span
                      className="self-start text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded"
                      style={{
                        background: `${accentColor}15`,
                        color: accentColor,
                        border: `1px solid ${accentColor}30`,
                      }}
                    >
                      {sector}
                    </span>

                    {/* Title */}
                    <h2
                      className="font-bold text-white leading-snug transition-colors duration-200 group-hover:text-gray-200"
                      style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)" }}
                    >
                      {title}
                    </h2>

                    {/* Description */}
                    <p className="text-sm leading-relaxed line-clamp-3" style={{ color: "#6b7280" }}>
                      {description}
                    </p>

                    {/* Stack tags */}
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                      {stack.map((t, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            color: "#9ca3af",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group-hover:text-white"
                      style={{ color: "#4b5563" }}
                    >
                      Read case study
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                        className="transition-transform duration-200 group-hover:translate-x-1">
                        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-sm" style={{ color: "#6b7280" }}>
              No case studies found for &ldquo;{searchTerm}&rdquo;
            </p>
          </div>
        )}

        <p className="text-xs mt-8" style={{ color: "#374151" }}>
          {filtered.length} case {filtered.length !== 1 ? "studies" : "study"}
          {searchTerm && ` matching "${searchTerm}"`}
        </p>

      </div>
    </div>
  );
}
