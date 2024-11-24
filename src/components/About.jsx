export default function About() {
  return (
    <section id="about" className=" mx-auto my-[0.3px] px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300  shadow-lg py-[100px]">
      <h2 className="text-4xl font-extrabold text-center text-white">
        About Me
      </h2>
      <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="relative">
          <img
            src="your-photo.jpg"
            alt="Profile"
            className="w-40 h-40 rounded-full shadow-lg transform transition-all hover:scale-105"
          />
          <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center shadow-md">
            <span className="text-xl font-bold">👋</span>
          </div>
        </div>
        <div className="text-center md:text-left max-w-lg">
          <p className="text-lg leading-relaxed">
            Hi! I'm a <span className="font-bold text-indigo-400">Full Stack Developer</span> with 3 years of experience in building dynamic and user-friendly web applications. My passion lies in crafting intuitive, scalable solutions that make a real difference.
          </p>
          <p className="mt-4 leading-relaxed">
            I specialize in React.js, Node.js, MongoDB, and more. Whether it's frontend development or backend architecture, I thrive on solving complex problems with creativity and code.
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <a
              href="#"
              className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 transition"
            >
              Download Resume
            </a>
            <a
              href="#"
              className="px-4 py-2 border border-indigo-500 text-indigo-500 font-semibold rounded-lg hover:bg-indigo-500 hover:text-white transition"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
