/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "SkillSprint",
    description:
      "SkillSprint is a full-stack web application that empowers students and developers to discover hackathons, build or join teams, collaborate on projects, and showcase their skills.",
    liveDemo: "https://skillsprint-frontend-hmxp.onrender.com/",
    github: null,
  },
  {
    title: "PestiCare",
    description:
      "A web-based solution designed to help farmers and gardeners identify pests and recommend appropriate treatments. PestiCare aims to support sustainable farming by providing an accessible pest diagnosis and prevention tool.",
    liveDemo: "https://nikhildhaliya.github.io/PestiCare_Project/",
    github: "https://github.com/NikhilDhaliya/PestiCare",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full min-h-screen flex flex-col items-center justify-center py-20 px-2 md:px-0 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
      data-scroll="true"
      data-scroll-speed="0.05"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white drop-shadow-lg tracking-tight bg-gradient-to-r from-blue-300 via-pink-200 to-purple-300 bg-clip-text text-transparent">
        My Projects
      </h2>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-14 px-2 md:px-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="relative group rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl p-10 flex flex-col justify-between min-h-[400px] max-w-xl mx-auto transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.06, rotate: i % 2 === 0 ? 2 : -2, boxShadow: "0 12px 48px 0 rgba(31, 38, 135, 0.37)", borderColor: "#fff7" }}
            whileTap={{ scale: 0.98, rotate: 0 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            style={{ perspective: 1200 }}
          >
            {/* Animated gradient border on hover */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none z-10"
              initial={{ opacity: 0 }}
              whileHover={{
                opacity: 1,
                background: "linear-gradient(120deg, #a1c4fd55, #c2e9fb33, #fbc2eb44, #fcb69f33)",
                filter: "blur(8px)",
              }}
              transition={{ duration: 0.4 }}
            />
            {/* Project Icon/Initials Pop */}
            <motion.div
              className="flex items-center justify-center mb-6"
              whileHover={{ scale: 1.18, rotate: i % 2 === 0 ? -8 : 8 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              <div className="rounded-full bg-gradient-to-br from-blue-900/60 via-purple-800/40 to-pink-700/40 shadow-lg w-20 h-20 flex items-center justify-center text-3xl font-bold text-white/80 border border-white/20">
                {project.title.split(' ').map(w => w[0]).join('').toUpperCase()}
              </div>
            </motion.div>
            {/* Project Title */}
            <motion.h3
              className="text-2xl font-bold text-white mb-3 drop-shadow-lg z-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              {project.title}
            </motion.h3>
            {/* Project Description */}
            <motion.p
              className="text-gray-200 text-base mb-6 z-20 flex-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            >
              {project.description}
            </motion.p>
            {/* Action Buttons */}
            <motion.div
              className="flex gap-4 mt-2 z-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full bg-blue-600/90 text-white font-semibold shadow hover:bg-blue-700 transition flex items-center gap-2 text-base"
                >
                  <FaExternalLinkAlt className="inline-block" /> Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full bg-gray-800/90 text-white font-semibold shadow hover:bg-gray-900 transition flex items-center gap-2 text-base"
                >
                  <FaGithub className="inline-block" /> GitHub
                </a>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
