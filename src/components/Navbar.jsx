import { useState, useEffect } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Work" },
    { href: "#skills", label: "Stack" },
    { href: "#experience", label: "Experience" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
    { href: "#architectures", label: "Architectures" },
    { href: "/blogs", label: "Blogs" },
    { href: "/case-studies", label: "Case Studies" },
  ];

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(8,8,8,0.92)"
          : "rgba(8,8,8,0.6)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.07)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black text-black transition-all duration-200 group-hover:scale-105"
            style={{ background: "#ffffff" }}
          >
            M
          </div>
          <span className="text-white font-bold text-base tracking-tight hidden sm:block">
            Umer Bhutta
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Resume CTA */}
        <a
          href="/UmerBhutta_AL_NLP_resume.pdf"
          download="Muhammad-Umer-Bhutta-Resume.pdf"
          className="hidden md:flex items-center gap-2 btn-ghost text-sm py-2 px-4"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Resume
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 group"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden border-t"
          style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(8,8,8,0.97)" }}
        >
          <nav className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/UmerBhutta_AL_NLP_resume.pdf"
              download="Muhammad-Umer-Bhutta-Resume.pdf"
              className="mt-2 px-3 py-3 text-sm text-white border border-white/20 rounded-lg text-center hover:bg-white/5 transition-all"
            >
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
