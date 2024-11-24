import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    // Simulating blog content loading
    const blogs = {
      blog1: "# Blog 1 Content\nThis is the content of Blog 1.",
      blog2: "# Blog 2 Content\nThis is the content of Blog 2.",
      blog3: "# Blog 3 Content\nThis is the content of Blog 3.",
    };
    setContent(blogs[slug] || "Blog not found");
  }, [slug]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <pre className="prose">{content}</pre>
    </div>
  );
}
