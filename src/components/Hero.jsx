import { useEffect, useState } from "react";

export default function Hero() {
  const [projects, setProjects] = useState(0);
  const [users, setUsers] = useState(0);
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    const animateValue = (start, end, duration, setValue) => {
      const range = end - start;
      let current = start;
      const increment = end > start ? 1 : -1;
      const stepTime = Math.abs(Math.floor(duration / range));

      const timer = setInterval(() => {
        current += increment;
        setValue(current);
        if (current === end) {
          clearInterval(timer);
        }
      }, stepTime);
    };

    animateValue(0, 10, 1000, setProjects); // 10 Projects
    animateValue(700, 1000, 1000, setUsers); // 1000+ Users
    animateValue(0, 3, 1000, setExperience); // 3 Years
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-30 absolute top-10 left-10"></div>
        <div className="w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-30 absolute bottom-20 right-20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Hi, I’m <span className="text-indigo-400">Muhammad Umer Bhutta</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-300">
          AI engineer wit extensive experience in the LLMs, NLP,  {" "}
          <span className="text-indigo-400">scalable web solutions</span>.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center">
            <span className="text-6xl font-bold text-indigo-400">
              {projects}+
            </span>
            <p className="text-lg font-semibold text-gray-300">
              Projects Delivered
            </p>
          </div>
          {/* <div className="flex flex-col items-center">
            <span className="text-6xl font-bold text-indigo-400">{users}+</span>
            <p className="text-lg font-semibold text-gray-300">
              Satisfied Users
            </p>
          </div> */}
          <div className="flex flex-col items-center">
            <span className="text-6xl font-bold text-indigo-400">
              {experience}+
            </span>
            <p className="text-lg font-semibold text-gray-300">
              Years of Experience
            </p>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-500 text-white font-bold rounded-full shadow-lg hover:bg-indigo-600 transition cursor-pointer"
          >
            View My Projects
          </a>
          <a
            href="#resume"
            className="px-6 py-3 bg-transparent border-2 border-indigo-500 text-indigo-500 font-bold rounded-full shadow-lg hover:bg-indigo-500 hover:text-white transition cursor-pointer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
