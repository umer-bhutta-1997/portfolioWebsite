import React from 'react';

const Contact = () => {
    return (
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Get In Touch</h2>
          <form className="space-y-6 bg-gray-700 p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
                placeholder="Your message"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
          <div className="mt-10 text-center text-gray-300">
            <h3 className="text-lg font-semibold mb-4">Contact Me:</h3>
            <p>
              Email: <a href="mailto:your-email@example.com" className="text-blue-400">your-email@example.com</a>
            </p>
            <p>
              LinkedIn: <a href="https://www.linkedin.com/in/your-profile" className="text-blue-400" target="_blank" rel="noopener noreferrer">your-profile</a>
            </p>
            <p>
              GitHub: <a href="https://github.com/your-username" className="text-blue-400" target="_blank" rel="noopener noreferrer">your-username</a>
            </p>
          </div>
        </div>
      </section>
    );
  };
  

export default Contact;