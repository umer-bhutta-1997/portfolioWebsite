import {
  FaPython,
  FaDatabase,
  FaDocker,
  FaGithub,
  FaGitlab,
  FaGit,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiLangchain,
  SiFastapi,
  SiDjango,
  SiFlask,
  SiPostgresql,
  SiMongodb,
  SiHuggingface,
  SiNumpy,
  SiTableau,
} from "react-icons/si";
import { AiFillCloud } from "react-icons/ai";

export default function Skills() {
  const skills = [
    {
      category: "Programming Languages & Frameworks",
      items: [
        { name: "Python", icon: <FaPython /> },
        { name: "Django", icon: <SiDjango /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "PyTorch", icon: <SiPytorch /> },
        { name: "LangChain", icon: <SiLangchain /> },
        { name: "PyInstaller", icon: <FaPython /> },
      ],
    },
    {
      category: "AI & Machine Learning Skills",
      items: [
        { name: "Neural Networks", icon: <SiTensorflow /> },
        { name: "Natural Language Processing (NLP)", icon: <SiHuggingface /> },
        { name: "Retrieval Augmented Generation (RAG)", icon: <SiHuggingface /> },
        { name: "Generative AI (GenAI)", icon: <SiHuggingface /> },
        { name: "Fine-Tuning LLMs", icon: <SiHuggingface /> },
        { name: "LLMOps", icon: <FaDatabase /> },
        { name: "Feature Engineering", icon: <FaDatabase /> },
      ],
    },
    {
      category: "Data Tools & Technologies",
      items: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "NumPy", icon: <SiNumpy /> },
        { name: "Pandas", icon: <SiNumpy /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Tableau", icon: <SiTableau /> },
        { name: "Dify", icon: <AiFillCloud /> },
        { name: "RunPod", icon: <AiFillCloud /> },
      ],
    },
    {
      category: "LLM Models & Generative AI",
      items: [
        { name: "OpenAI GPT", icon: <SiHuggingface /> },
        { name: "BERT", icon: <SiHuggingface /> },
        { name: "LLaMA", icon: <SiHuggingface /> },
        { name: "Claude", icon: <SiHuggingface /> },
        { name: "Anthropic AI", icon: <SiHuggingface /> },
        { name: "PaLM", icon: <SiHuggingface /> },
      ],
    },
    {
      category: "Vision-Language Models (VLMs)",
      items: [
        { name: "CLIP (Contrastive Language–Image Pretraining)", icon: <SiHuggingface /> },
        { name: "DALL-E", icon: <SiHuggingface /> },
        { name: "BLIP", icon: <SiHuggingface /> },
        { name: "Flamingo", icon: <SiHuggingface /> },
        { name: "Stable Diffusion", icon: <SiHuggingface /> },
      ],
    },
    {
      category: "Vector Stores",
      items: [
        { name: "Pinecone", icon: <FaDatabase /> },
        { name: "Weaviate", icon: <FaDatabase /> },
        { name: "ChromaDB", icon: <FaDatabase /> },
        { name: "Milvus", icon: <FaDatabase /> },
        { name: "FAISS (Facebook AI Similarity Search)", icon: <FaDatabase /> },
        { name: "Qdrant", icon: <FaDatabase /> },
      ],
    },
    {
      category: "Version Control & APIs",
      items: [
        { name: "Git", icon: <FaGit /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "GitLab", icon: <FaGitlab /> },
        { name: "RESTful APIs", icon: <SiFlask /> },
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
