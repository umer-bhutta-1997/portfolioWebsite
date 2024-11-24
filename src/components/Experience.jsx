import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior AI Engineer",
      company: "Rawa'a",
      duration: "October 2024 - Present",
      type: "Part-Time",
      responsibilities: [
        "Improved the existing architecture of the stock price prediction model to enhance its scalability and performance.",
        "Increased the accuracy of the model and significantly reduced the loss between predicted and actual values.",
        "Designed and implemented an ensemble model to boost predictive accuracy without compromising the authenticity of the results.",
        "Integrated new features to help the model better understand stock dynamics and make more informed predictions.",
        "Ensured the robustness of the model by addressing edge cases and refining its predictive capabilities.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Autosphere.ai",
      duration: "March 2024 - Present",
      type: "Full-Time",
      responsibilities: [
        "Worked with software development and testing team members to design and develop robust AI solutions to meet client requirements for functionality, scalability, and performance.",
        "Collaborated with cross-functional teams to identify opportunities for process automation using AI, driving operational efficiency.",
        "Evaluated effectiveness of various machine learning algorithms, selecting best-suited models for specific tasks.",
        "Developed custom ML/AI models to address unique business challenges, leading to improved decision-making capabilities.",
        "Performed rigorous testing and validation of AI models to ensure robustness and reliability in real-world applications.",
        "Maintained existing software systems by identifying and correcting software defects.",
        "Developed scalable and maintainable code, ensuring long-term stability of software.",
        "Collaborated with clients to define solution requirements.",
      ],
    },
    {
      title: "ML Engineer",
      company: "DiveDeepAI",
      duration: "August 2022 - February 2024",
      type: "Full-Time",
      responsibilities: [
        "Compiled, cleaned, and manipulated data for proper handling.",
        "Analyzed large datasets to identify trends and patterns in customer behaviors.",
        "Developed polished visualizations to share results of data analyses.",
        "Modeled predictions with feature selection algorithms.",
        "Devised and deployed predictive models using machine learning algorithms to drive business decisions.",
        "Collaborated with a multidisciplinary team to develop machine learning solutions for real-world challenges.",
        "Utilized tools including Numpy, TensorFlow, PyTorch, OpenAI, Flask, Django, FastAPI, Docker to build and deploy AI models.",
        "Led and contributed to various projects, including Custom Chatbot, Outscore.com, and data visualization.",
        "Gained expertise in data preprocessing, feature engineering, model validation, and optimization.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-indigo-400 mb-16">Experience</h2>
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">{experience.title}</h3>
              <p className="text-sm text-gray-400 italic">
                {experience.company} &middot; {experience.duration} &middot; {experience.type}
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
