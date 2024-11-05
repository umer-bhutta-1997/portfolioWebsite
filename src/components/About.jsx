import React from 'react';

const About = () => {
    return (
      <section id="about" className="py-20 bg-gray-700">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-lg text-gray-300">
                I am Muhammad Umer, a dedicated software engineer specializing in AI and automation solutions.
                I am passionate about developing efficient workflows and enhancing RPA script development 
                through innovative technologies. My expertise in backend development and keen understanding 
                of information flow allow me to create robust applications that solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">AI Development</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">RPA Automation</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">Python</span>
              </div>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg">
              <img
                src="/api/placeholder/400/320"
                alt="Profile"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  

export default About;