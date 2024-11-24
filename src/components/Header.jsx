
export const Header = () => {
  return (
    <header className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <a href="/" className="text-2xl font-bold text-white hover:text-indigo-400 transition">
            Muhammad Azaz
          </a>
        </div>
        <nav className="flex gap-6">
          <a
            href="#about"
            className="hover:text-indigo-400 transition text-gray-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-indigo-400 transition text-gray-300"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-indigo-400 transition text-gray-300"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="hover:text-indigo-400 transition text-gray-300"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};