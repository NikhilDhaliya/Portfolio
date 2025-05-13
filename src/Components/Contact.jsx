import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-12">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center">
        Contact Me
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 rounded mb-10 mx-auto"></div>
      <div className="flex flex-col md:flex-row gap-12 w-full max-w-5xl">
        {/* Left: Contact Info */}
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-white mb-4">Get in Touch</h3>
          <p className="text-gray-300 mb-8">
            Feel free to reach out to me for any inquiries or collaborations.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-gray-800 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12H8m8 0a8 8 0 11-16 0 8 8 0 0116 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16v.01"
                  />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-white">Email</div>
                <div className="text-gray-300">nikhil11754@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-gray-800 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h2.28a2 2 0 011.7.96l1.54 2.57a2 2 0 001.7.96h2.28a2 2 0 012 2v2.28a2 2 0 01-.96 1.7l-2.57 1.54a2 2 0 00-.96 1.7V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                  />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-white">Phone</div>
                <div className="text-gray-300">+91 8791974146</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-gray-800 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"
                  />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-white">Location</div>
                <div className="text-gray-300">Uttar Pradesh, Meerut</div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
  );
};

export default Contact;
