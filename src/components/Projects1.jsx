import React, { useState, useEffect } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/umer-bhutta-1997/repos"
        );
        const data = await response.json();

        // Filter and format repositories
        const filteredProjects = data
          .filter((repo) => !repo.fork) // Exclude forked repositories
          .map((repo) => ({
            title: repo.name,
            description: repo.description || "No description available.",
            tags: [repo.language || "N/A"],
            link: repo.html_url,
          }));

        setProjects(filteredProjects);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  if (loading) {
    return (
      <section
        id="projects"
        className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 mt-[0.5px]"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            My Projects
          </h2>
          <p className="text-center text-gray-400">Loading projects...</p>
        </div>
      </section>
    );
  }

  if (!projects.length) {
    return (
      <section
        id="projects"
        className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 mt-[0.5px]"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            My Projects
          </h2>
          <p className="text-center text-gray-400">No projects available.</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 mt-[0.5px]"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-700"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-2 bg-indigo-600 text-white font-bold rounded-md shadow-md hover:bg-indigo-700 transition"
                >
                  Visit Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
