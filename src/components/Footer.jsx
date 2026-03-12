import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "32px 0",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: "#374151" }}>
          © {new Date().getFullYear()} Muhammad Umer Bhutta. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/umer-bhutta-1997"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200"
            style={{ color: "#4b5563" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#4b5563")}
          >
            <FaGithub size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/bhutta-umer65/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200"
            style={{ color: "#4b5563" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#4b5563")}
          >
            <FaLinkedin size={17} />
          </a>
          <a
            href="mailto:bhutta.umer65@gmail.com"
            className="transition-colors duration-200"
            style={{ color: "#4b5563" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#4b5563")}
          >
            <FaEnvelope size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}