import { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-gray-300 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <a
            href="/"
            className="text-2xl font-bold text-white hover:text-indigo-400 transition"
          >
            MUB
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <a href="/" className="hover:text-indigo-400 transition text-gray-300">
            Home
          </a>
          <a href="#about" className="hover:text-indigo-400 transition text-gray-300">
            About
          </a>
          <a href="#projects" className="hover:text-indigo-400 transition text-gray-300">
            Projects
          </a>
          <a href="#skills" className="hover:text-indigo-400 transition text-gray-300">
            Skills
          </a>
          <a href="#experience" className="hover:text-indigo-400 transition text-gray-300">
            Experience
          </a>
          <a href="#services" className="hover:text-indigo-400 transition text-gray-300">
            Services
          </a>
          <a href="#contact" className="hover:text-indigo-400 transition text-gray-300">
            Contact
          </a>
          <a href="/blogs" className="hover:text-indigo-400 transition text-gray-300">
            Blogs
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white hover:text-indigo-400 transition"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <nav className="flex flex-col items-center gap-4 py-4">
            <a
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-indigo-400 transition text-gray-300"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-indigo-400 transition text-gray-300"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-indigo-400 transition text-gray-300"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-indigo-400 transition text-gray-300"
            >
              Skills
            </a>
            <a
              href="#experience"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-indigo-400 transition text-gray-300"
            >
              Experience
            </a>
            <a
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-indigo-400 transition text-gray-300"
            >
              Services
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-indigo-400 transition text-gray-300"
            >
              Contact
            </a>
            <a
              href="/blogs"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-indigo-400 transition text-gray-300"
            >
              Blogs
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
