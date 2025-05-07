import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Autocoder",
      description:
        "An AI agent specialized in generating RPA code in both .robot and Python formats, leveraging a custom-designed SDK specifically built for RPA processes. Autocoder streamlines robotic process automation by providing high-quality, production-ready scripts tailored to the needs of automation workflows.",
      tags: ["AI", "RPA", ".robot", "Python", "SDK"],
      link: "/projects/autocoder", // Link for project details
    },
    {
      title: "SiteJetAI",
      description:
        "An AI-powered platform revolutionizing customer support by enhancing efficiency and redefining user experiences.",
      tags: ["Next.js", "Stripe", "PostgreSQL", "E-Commerce"],
      link: "/projects/sitejetai", // Updated link for project details
    },
    {
      title: "Play Book AI",
      description: "AI-Powered Magic for Personalised Children's Adventures!",
      tags: ["Socket.io", "Express", "Redis", "WebSockets"],
      link: "/projects/play-book-ai", // Updated link for project details
    },
    {
      title: "Avatare",
      description:
        "An AI-powered platform offering automated business solutions like customer support and personalized marketing campaigns.",
      tags: ["Socket.io", "Express", "Redis", "WebSockets"],
      link: "/projects/avatare", // Updated link for project details
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 mt-[0.5px]"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-indigo-400 mb-12">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-700"
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-indigo-500 text-white rounded-full text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="block w-full text-center px-4 py-2 bg-indigo-600 text-white font-bold rounded-md shadow-md hover:bg-indigo-700 transition"
              >
                More Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
