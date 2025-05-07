import React from "react";

const AutocoderDetails = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Project Title */}
        <h1 className="text-5xl font-bold text-indigo-400 mb-6">Autocoder</h1>
        
        {/* Introduction */}
        <p className="text-lg text-gray-400 mb-6 leading-relaxed">
          Autocoder is an advanced AI agent designed to revolutionize Robotic Process Automation (RPA) by generating high-quality RPA code in both 
          <span className="text-white"> .robot </span> and 
          <span className="text-white"> Python</span> formats. By leveraging a custom-designed SDK specifically tailored for RPA workflows, Autocoder accelerates automation development, ensures production-readiness, and enhances overall efficiency.
        </p>

        {/* Features Section */}
        <h2 className="text-3xl font-semibold text-white mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-300 leading-relaxed">
          <li>
            <span className="font-bold text-indigo-400">Dual Code Output:</span> Generates RPA code in both <span className="text-white">.robot</span> and <span className="text-white">Python</span> formats for maximum compatibility.
          </li>
          <li>
            <span className="font-bold text-indigo-400">Custom SDK Integration:</span> Utilizes a custom-designed SDK to simplify and standardize the development of RPA workflows.
          </li>
          <li>
            <span className="font-bold text-indigo-400">AI-Powered Code Generation:</span> Produces optimized, production-ready scripts tailored to specific automation processes.
          </li>
          <li>
            <span className="font-bold text-indigo-400">Error-Handling Best Practices:</span> Implements robust error-handling mechanisms to ensure reliability and fault tolerance.
          </li>
          <li>
            <span className="font-bold text-indigo-400">Seamless Workflow Integration:</span> Designed to easily integrate with existing automation pipelines and tools.
          </li>
        </ul>

        {/* Benefits Section */}
        <h2 className="text-3xl font-semibold text-white mt-8 mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-300 leading-relaxed">
          <li>
            <span className="font-bold text-indigo-400">Efficiency Boost:</span> Saves time and reduces manual coding efforts for RPA developers.
          </li>
          <li>
            <span className="font-bold text-indigo-400">Enhanced Accuracy:</span> Minimizes human errors in script generation with AI precision.
          </li>
          <li>
            <span className="font-bold text-indigo-400">Scalability:</span> Enables rapid scaling of automation processes across multiple business units.
          </li>
          <li>
            <span className="font-bold text-indigo-400">Customization:</span> Offers flexible configurations to suit unique business requirements.
          </li>
        </ul>

        {/* Technologies Used */}
        <h2 className="text-3xl font-semibold text-white mt-8 mb-4">
          Technologies Used
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-300 leading-relaxed">
          <li><span className="font-bold text-indigo-400">AI Frameworks:</span> Multi-agent system using CrewAI</li>
          <li><span className="font-bold text-indigo-400">Programming Languages:</span> Python</li>
          <li><span className="font-bold text-indigo-400">Vector Store:</span> ChromaDB</li>
          <li><span className="font-bold text-indigo-400">Language Model:</span> LLaMA 2 (3B)</li>
          <li><span className="font-bold text-indigo-400">File Formats:</span> .robot, JSON</li>
          <li><span className="font-bold text-indigo-400">RPA SDKs:</span> Custom SDK for RPA workflow generation</li>
          <li><span className="font-bold text-indigo-400">Integration Tools:</span> Docker, Flask</li>
        </ul>

        {/* Use Cases Section */}
        <h2 className="text-3xl font-semibold text-white mt-8 mb-4">Use Cases</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-300 leading-relaxed">
          <li>
            <span className="font-bold text-indigo-400">Process Automation:</span> Streamlines repetitive tasks, such as data extraction and transformation, across industries.
          </li>
          <li>
            <span className="font-bold text-indigo-400">Workflow Optimization:</span> Enhances efficiency in business processes by automating manual workflows.
          </li>
          <li>
            <span className="font-bold text-indigo-400">Scalable Deployments:</span> Easily integrates into enterprise systems for large-scale automation.
          </li>
        </ul>

        {/* How it Works Section */}
        <h2 className="text-3xl font-semibold text-white mt-8 mb-4">
          How Autocoder Works
        </h2>
        <p className="text-gray-400 mb-6 leading-relaxed">
          Autocoder uses cutting-edge AI models to analyze workflow requirements and translate them into actionable RPA scripts. The process involves:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-gray-300 leading-relaxed">
          <li>
            <span className="font-bold text-indigo-400">Input:</span> User provides the workflow requirements, including input formats, triggers, and expected outcomes.
          </li>
          <li>
            <span className="font-bold text-indigo-400">Processing:</span> The AI engine interprets the requirements and generates RPA scripts using the custom SDK.
          </li>
          <li>
            <span className="font-bold text-indigo-400">Output:</span> The output is delivered in both .robot and Python formats, ready for deployment.
          </li>
        </ol>

        {/* Call to Action */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-indigo-400 mb-4">
            Ready to Transform Your Automation?
          </h3>
          <p className="text-lg text-gray-400 mb-6">
            Experience the power of AI-driven RPA with Autocoder. Automate your workflows and boost your efficiency today!
          </p>
          <a
            href="/#contact"
            className="inline-block px-6 py-3 bg-indigo-600 text-white font-bold rounded-md shadow-md hover:bg-indigo-700 transition"
          >
            Contact Us to Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default AutocoderDetails;
