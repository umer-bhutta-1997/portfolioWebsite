import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import blogs from "../blogs_posts/blogs.json";

const blogFiles = import.meta.glob("/src/blogs_posts/*.md", { query: "?raw", import: "default" });

export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  const meta = blogs.find((b) => b.slug === slug);

  useEffect(() => {
    setLoading(true);
    const entry = Object.entries(blogFiles).find(([path]) =>
      path.endsWith(`/${slug}.md`)
    );
    if (entry) {
      const [, resolver] = entry;
      resolver()
        .then((text) => { setContent(text); setLoading(false); })
        .catch(() => { setContent("# Error\nUnable to load this post."); setLoading(false); });
    } else {
      setContent("# 404\nBlog post not found.");
      setLoading(false);
    }
  }, [slug]);

  const formatDate = (dateStr) => {
    try {
      return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric", month: "long", day: "numeric",
      });
    } catch { return dateStr; }
  };

  return (
    <div style={{ background: "#080808", minHeight: "100vh" }}>
      <div className="max-w-3xl mx-auto px-5 py-16">

        {/* Back */}
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-sm mb-12 transition-colors duration-200"
          style={{ color: "#6b7280" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
          </svg>
          All articles
        </Link>

        {/* Meta header */}
        {meta && (
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#6b7280" }}>
              Writing
            </p>
            <h1
              className="font-black text-white leading-tight mb-5"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", letterSpacing: "-0.025em" }}
            >
              {meta.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-sm font-mono" style={{ color: "#6b7280" }}>
                {formatDate(meta.date)}
              </span>
              <span style={{ color: "#374151" }}>·</span>
              <span className="text-sm" style={{ color: "#6b7280" }}>{meta.author}</span>
            </div>

            {/* Hero image */}
            {meta.image && (
              <div className="overflow-hidden rounded-2xl mb-10" style={{ maxHeight: 360 }}>
                <img
                  src={meta.image}
                  alt={meta.title}
                  className="w-full h-full object-cover"
                  style={{ filter: "grayscale(10%)" }}
                />
              </div>
            )}

            {/* Divider */}
            <div className="divider" />
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
        <div className="mt-16 pt-8 divider">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-sm mt-6 transition-colors duration-200"
            style={{ color: "#6b7280" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to all articles
          </Link>
        </div>
      </div>
    </div>
  );
}
