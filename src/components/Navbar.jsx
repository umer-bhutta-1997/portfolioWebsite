import { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-lg font-bold">My Portfolio</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-300">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-300">
            About
          </Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-300">
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-300">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-gray-800 px-4 py-2 space-y-2">
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-300">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-300">
            About
          </Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-300">
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-300">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
