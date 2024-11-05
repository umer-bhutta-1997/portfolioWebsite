import React from 'react';

const Projects = () => {
    const projects = [
      {
        title: "AI-Powered Automation Tool",
        description: "A full-stack web application that automates repetitive tasks using AI algorithms, built with React and Node.js.",
        tags: ["React", "Node.js", "MongoDB", "AI"],
      },
      {
        title: "E-Commerce Platform",
        description: "An intuitive e-commerce platform with integrated payment systems and user authentication, developed with Next.js.",
        tags: ["Next.js", "Stripe", "PostgreSQL", "E-Commerce"],
      },
      {
        title: "Real-Time Chat Application",
        description: "A real-time chat application enabling seamless communication, built with Socket.io and Express.",
        tags: ["Socket.io", "Express", "Redis", "WebSockets"],
      },
    ];
  
    return (
        <section id="projects" className="py-20 bg-gray-700">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
                <div className="bg-gray-200 h-48 rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/api/placeholder/400/320"
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  