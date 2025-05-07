import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Fixed default import
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Blogs from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import AutocoderDetails from "./components/AutocoderDetails";
import matter from "gray-matter";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const context = import.meta.glob("/src/blogs/*.md"); // Dynamically import markdown files
        const blogData = [];

        for (const path in context) {
          const module = await context[path]();
          const slug = path.split("/").pop().replace(".md", ""); // Extract slug
          const { data } = matter(module.default); // Parse front matter
          blogData.push({ slug, ...data });
        }

        setBlogs(blogData);
      } catch (error) {
        console.error("Error loading blogs:", error);
      }
    };

    loadBlogs();
  }, []);

  return (
    <Router>
      <div className="relative">
        
        {/* Sticky Navbar */}
        <Navbar />

        {/* Application Routes */}
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
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/projects/autocoder" element={<AutocoderDetails />} />
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
