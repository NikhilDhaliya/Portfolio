import React from "react";

const Footer = ({ homeRef }) => {
  return (
    <footer
      id="footer"
      className="bg-transparent border-t border-gray-800 py-8"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Navigation Links */}
        <nav className="flex gap-8 mb-2">
          <a
            onClick={() =>
              homeRef.current.scrollIntoView({ behavior: "smooth" })
            }
            href="#home"
            className="text-white hover:text-gray-300 transition font-medium"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:text-gray-300 transition font-medium"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-white hover:text-gray-300 transition font-medium"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-white hover:text-gray-300 transition font-medium"
          >
            Projects
          </a>
        </nav>
        {/* Contact Details */}
        <div className="flex flex-wrap gap-8 justify-center items-center text-gray-400 text-sm mb-2">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-white"
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
            <span>nikhil11754@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-white"
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
            <span>+91 8791974146</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-white"
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
            <span>Uttar Pradesh, Meerut</span>
          </div>
        </div>
        {/* Social Icons */}
        <div className="flex gap-6 mb-2">
          {/* ...your social icons here... */}
        </div>
        {/* Copyright */}
        <div className="text-gray-400 text-sm mt-2">
          © 2023 Nikhil. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
