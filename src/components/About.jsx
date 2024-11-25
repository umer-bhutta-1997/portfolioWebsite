export default function About() {
  return (
    <section
      id="about"
      className="mx-auto px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 shadow-lg py-[100px]"
    >
      <h2 className="text-4xl font-extrabold text-center text-white">
        About Me
      </h2>
      <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Profile Image */}
        <div className="relative">
          <img
            src="picture.jpg"
            alt="Profile"
            className="w-40 h-40 rounded-full shadow-lg transform transition-all hover:scale-105"
          />
          <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center shadow-md">
            <span className="text-xl font-bold">👋</span>
          </div>
        </div>

        {/* About Text */}
        <div className="text-center md:text-left max-w-lg">
          <p className="text-lg leading-relaxed">
            Hi there! I’m{" "}
            <span className="font-bold text-indigo-400">
              Muhammad Umer Bhutta
            </span>, an <span className="font-bold text-indigo-400">AI Engineer</span> passionate about building intelligent systems that solve real-world challenges. With over{" "}
            <span className="font-bold text-indigo-400">4+ years of experience</span>, I specialize in integrating{" "}
            <span className="font-bold text-indigo-400">
              Artificial Intelligence
            </span>{" "}
            into workflows, automating processes, and delivering impactful, scalable solutions.
          </p>
          <p className="mt-4 leading-relaxed">
            I have a proven track record of developing AI-driven projects, including intelligent chatbots, predictive analytics, and custom LLM-based solutions. My expertise spans{" "}
            <span className="font-bold text-indigo-400">Large Language Models (LLMs)</span>,{" "}
            <span className="font-bold text-indigo-400">
              Natural Language Processing (NLP)
            </span>, and{" "}
            <span className="font-bold text-indigo-400">Python</span>. My goal is to create systems that are not just functional but innovative and user-friendly.
          </p>
          <p className="mt-4 leading-relaxed">
            Outside of engineering, I’m constantly exploring new AI advancements and finding ways to implement them into practical solutions. Whether you’re looking for a partner to build AI-powered systems or optimize your existing workflows, let’s collaborate to bring your vision to life.
          </p>
        </div>
      </div>
    </section>
  );
}
