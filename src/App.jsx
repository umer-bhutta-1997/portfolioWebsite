import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Blogs from "./components/BlogList";
import BlogPost from "./components/BlogPost";

import matter from "gray-matter";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function loadBlogs() {
      const context = import.meta.glob("/src/blogs/*.md"); // Load all Markdown files dynamically
      const blogData = [];
      for (const path in context) {
        const module = await context[path]();
        const slug = path.split("/").pop().replace(".md", "");
        const { data } = matter(module.default);
        blogData.push({ slug, ...data });
      }
      setBlogs(blogData);
    }
    loadBlogs();
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Services />
                <Projects />
                <Footer />
              </>
            }
          />

          {/* Blogs Page */}
          <Route path="/blogs" element={<Blogs blogs={blogs} />} />

          {/* Dynamic Blog Post Page */}
          <Route path="/blogs/:slug" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
