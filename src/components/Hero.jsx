import { useState, useEffect } from "react";

export default function Hero() {
  const [projects, setProjects] = useState(0);
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    // Function to calculate total years of experience
    const calculateExperience = () => {
      const experiences = [
        { duration: "October 2024 - Present" },
        { duration: "March 2024 - Present" },
        { duration: "August 2022 - February 2024" },
      ];
      let totalYears = 0;
      const currentYear = new Date().getFullYear();

      experiences.forEach(({ duration }) => {
        const [start, end] = duration.split(" - ");
        const startYear = new Date(start).getFullYear();
        const endYear = end === "Present" ? currentYear : new Date(end).getFullYear();
        totalYears += endYear - startYear;
      });

      setExperience(totalYears);
    };

    // Function to fetch projects and count them
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/users/umer-bhutta-1997/repos");
        const data = await response.json();
        const totalProjects = data.filter((repo) => !repo.fork).length;
        setProjects(totalProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    calculateExperience();
    fetchProjects();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-[300px] h-[300px] bg-indigo-500 rounded-full blur-3xl opacity-30 absolute top-10 left-10"></div>
        <div className="w-[250px] h-[250px] bg-blue-500 rounded-full blur-3xl opacity-30 absolute bottom-20 right-20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 md:px-20 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          Hi, I’m <span className="text-indigo-400">Muhammad Umer Bhutta</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
          I’m an <span className="text-indigo-400">AI Engineer</span> with expertise in{" "}
          <span className="text-blue-400">Large Language Models (LLMs)</span>,{" "}
          <span className="text-purple-400">Natural Language Processing (NLP)</span>, and{" "}
          <span className="text-indigo-400">scalable web solutions</span>. Passionate about leveraging{" "}
          <span className="text-indigo-400">AI</span> to drive innovation and solve complex challenges.
        </p>
        
        {/* Metrics */}
        <div className="mt-12 flex flex-wrap justify-center gap-16">
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-bold text-indigo-400">
              {projects}+ {/* Dynamic Projects */}
            </span>
            <p className="text-lg font-medium text-gray-300">Projects Delivered</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-bold text-indigo-400">
              {experience}+ {/* Dynamic Experience */}
            </span>
            <p className="text-lg font-medium text-gray-300">Years of Experience</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-500 text-white font-bold rounded-full shadow-lg hover:bg-indigo-600 transition"
          >
            Projects
          </a>
          <a
            href="#resume"
            className="px-6 py-3 border-2 border-indigo-500 text-indigo-500 font-bold rounded-full shadow-lg hover:bg-indigo-500 hover:text-white transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
