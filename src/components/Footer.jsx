import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-8 mt-[0.5px]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-400 mb-4">
          © 2024 Muhammad Azaz. All Rights Reserved.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/devazaz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/muhammad-azaz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:m.azaz3499@gmail.com"
            className="text-gray-300 hover:text-indigo-400 transition text-xl"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer