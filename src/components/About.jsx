export default function About() {
  return (
    <section id="about" className="mx-auto my-[0.3px] px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 shadow-lg py-[100px]">
      <h2 className="text-4xl font-extrabold text-center text-white">
        About Me
      </h2>
      <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-10">
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
        <div className="text-center md:text-left max-w-lg">
          <p className="text-lg leading-relaxed">
            Hi! I’m <span className="font-bold text-indigo-400">Muhammad Umer Bhutta</span>, an <span className="font-bold text-indigo-400">AI Engineer</span> with <span className="font-bold text-indigo-400">2+ years of experience</span> in designing and implementing intelligent solutions that integrate **Artificial Intelligence** into existing systems and workflows, enhancing their capabilities and scalability.
          </p>
          <p className="mt-4 leading-relaxed">
            My expertise includes working with <span className="font-bold text-indigo-400">Large Language Models (LLMs)</span>, <span className="font-bold text-indigo-400">Natural Language Processing (NLP)</span>, and <span className="font-bold text-indigo-400">Python</span> to deliver high-impact AI solutions. I specialize in creating scalable, maintainable systems tailored to meet unique business challenges.
          </p>
          <p className="mt-4 leading-relaxed">
            As a seasoned <span className="font-bold text-indigo-400">Software Engineer</span>, I have hands-on experience in designing robust architectures that integrate AI into existing platforms, ensuring seamless functionality and optimized performance. From building intelligent chatbots and predictive models to enhancing legacy systems with advanced AI capabilities, I thrive on solving complex engineering challenges with innovative solutions.
          </p>
          <p className="mt-4 leading-relaxed">
            I have delivered <span className="font-bold text-indigo-400">10+ AI-driven projects</span>, ranging from intelligent automation tools to scalable data pipelines. My strong foundation in <span className="font-bold text-indigo-400">Python</span> enables me to design, develop, and deploy applications efficiently while ensuring performance and reliability.
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-4">
          <a
            href="/UmerBhutta_AL_NLP_resume.pdf" // Path to the file in the `public` folder
            download="Muhammad-Umer-Bhutta-Resume.pdf" // Optional: rename the downloaded file
            className="px-6 py-3 border-2 border-indigo-500 text-indigo-500 font-bold rounded-full shadow-lg hover:bg-indigo-500 hover:text-white transition"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-500 text-white font-bold rounded-full shadow-lg hover:bg-indigo-600 transition"
          >
            Projects
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}