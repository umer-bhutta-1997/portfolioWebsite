import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-8 mt-[0.5px]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-400 mb-4">
          © 2024 Umer Bhutta. All Rights Reserved.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/umer-bhutta-1997"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/bhutta-umer65/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:bhutta.umer65@gamil.com"
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