import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export default function BlogPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const content = await import(`../blogs/${slug}.md`);
        const { data, content: markdownContent } = matter(content.default);
        setBlog({ ...data, content: markdownContent });
      } catch (error) {
        console.error("Error loading blog:", error);
      }
    };

    loadBlog();
  }, [slug]);

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto p-4 text-center">
        <h1 className="text-4xl font-bold text-red-600">Blog not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">{blog.title}</h1>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 object-cover mb-6"
      />
      <div className="prose prose-indigo max-w-none">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>
    </div>
  );
}
