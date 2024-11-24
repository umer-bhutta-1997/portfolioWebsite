import React from 'react';

const Services = () => {
  const services = [
    {
      title: "AI Solutions",
      description: "Tailored AI solutions to optimize business processes and enhance decision-making.",
      icon: "🤖",
    },
    {
      title: "AI Agents",
      description: "Intelligent agents that automate tasks and provide insights in real-time.",
      icon: "🧠",
    },
    {
      title: "RAG Agents",
      description: "Retrieval-Augmented Generation agents for enhanced data retrieval and contextual responses.",
      icon: "🔍",
    },
    {
      title: "Generative AI Solutions",
      description: "Cutting-edge generative AI applications to create content and drive innovation.",
      icon: "✨",
    },
    {
      title: "AI Web Applications",
      description: "Developing web applications powered by AI to improve user experience and functionality.",
      icon: "🌐",
    },
    {
      title: "AI-Driven Analytics",
      description: "Advanced analytics solutions leveraging AI to uncover valuable insights from data.",
      icon: "📊",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-indigo-400 mb-16">My Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div className="text-6xl text-indigo-400 mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
