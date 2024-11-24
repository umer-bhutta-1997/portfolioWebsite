import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaGitlab,
  FaGit,
} from "react-icons/fa";
import { SiNextdotjs, SiRedux, SiTailwindcss, SiPostgresql, SiPrisma, SiMongodb, SiFirebase, SiGatsby, SiStyledcomponents, SiBootstrap, SiStripe, SiJsonwebtokens } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiNextdotjs /> },
        { name: "Gatsby", icon: <SiGatsby /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Material UI", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "Konva.js", icon: <FaReact /> },
        { name: "Styled Components", icon: <SiStyledcomponents /> },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <FaNodeJs /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "Postrgress", icon: <SiPostgresql /> },
        { name: "Prisma", icon: <SiPrisma /> },
        { name: "Mongoose", icon: <SiMongodb /> },
      ],
    },
    {
      category: "API Development & Version Control",
      items: [
        { name: "RESTful APIs", icon: <SiJsonwebtokens /> },
        { name: "Authentication (JWT)", icon: <SiJsonwebtokens /> },
        { name: "Stripe Payment Integration", icon: <SiStripe /> },
        { name: "Git", icon: <FaGit /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "GitLab", icon: <FaGitlab /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 mt-[0.5px]"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-700"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-center gap-4 bg-gray-700 text-gray-300 rounded-md px-4 py-2 text-sm hover:bg-gray-600 hover:scale-105 transition-all"
                  >
                    <span className="text-lg text-indigo-400">{item.icon}</span>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
