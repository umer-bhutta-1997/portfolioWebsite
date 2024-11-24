export default function ContactSection() {
    return (
      <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 text-gray-300">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-indigo-400 mb-12">
            Contact Me
          </h2>
          
          {/* Contact Information Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400">
                <a
                  href="mailto:bhutta.umer65@gmail.com"
                  className="text-indigo-400 hover:underline"
                >
                  bhutta.umer65@gmail.com
                </a>
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-gray-400">
                <a
                  href="https://www.linkedin.com/in/bhutta-umer65/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:underline"
                >
                  linkedin.com/in/bhutta-umer65
                </a>
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
              <p className="text-gray-400">
                Islamabad, Pakistan
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  