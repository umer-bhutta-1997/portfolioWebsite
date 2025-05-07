import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

// Dynamically import all markdown files in src/blogs_posts
const blogFiles = import.meta.glob("/src/blogs_posts/*.md", { as: "raw" });

export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  // Load markdown content on slug change
  useEffect(() => {
    const loadContent = async () => {
      const entry = Object.entries(blogFiles).find(([path]) =>
        path.endsWith(`/${slug}.md`)
      );
      if (entry) {
        const [, resolver] = entry;
        try {
          const mdText = await resolver();
          setContent(mdText);
        } catch {
          setContent("# Error\nUnable to load this post.");
        }
      } else {
        setContent("# 404\nBlog not found.");
      }
    };
    loadContent();
  }, [slug]);

  return (
    <article className="max-w-4xl mx-auto p-6 prose prose-indigo dark:prose-invert">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
