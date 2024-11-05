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
        <section id="services" className="py-20 bg-gray-600">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg transition-shadow hover:shadow-xl">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
