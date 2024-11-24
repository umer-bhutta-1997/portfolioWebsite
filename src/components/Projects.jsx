import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Dream Drive",
      description:
        "A platform for skill-based competitions where users participate in Spot the Ball challenges to win dream cars.",
      tags: ["React", "Node.js", "MongoDB", "AI"],
      link: "https://dreamdrive.co.za/pages/test-game",
      src: "Dream Drive Logo.png",
    },
    {
      title: "SiteJetAI",
      description:
        "An AI-powered platform revolutionizing customer support by enhancing efficiency and redefining user experiences.",
      tags: ["Next.js", "Stripe", "PostgreSQL", "E-Commerce"],
      link: "https://sitejetai.com",
      src: "https://sitejetai.com//assets/SiteJetLogo-0d677d0b.svg",
    },
    {
      title: "Play Book AI",
      description: "AI-Powered Magic for Personalised Children's Adventures!",
      tags: ["Socket.io", "Express", "Redis", "WebSockets"],
      link: "https://playbook.avatare.com",
      src: "https://playbook.avatare.com/assets/Logo-2794b624.svg",
    },
    {
      title: "Avatare",
      description:
        "An AI-powered platform offering automated business solutions like customer support and personalized marketing campaigns.",
      tags: ["Socket.io", "Express", "Redis", "WebSockets"],
      link: "http://www.avatare.com/",
      src: "http://www.avatare.com/assets/Avatare_logo_white-bdfa0369.svg",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 mt-[0.5px]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-700"
            >
              <div className="bg-gray-700 h-48 rounded-lg mb-4 overflow-hidden">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gray-600 transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-2 bg-indigo-600 text-white font-bold rounded-md shadow-md hover:bg-indigo-700 transition"
              >
                Visit Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
