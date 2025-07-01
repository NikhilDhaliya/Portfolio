/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import FluidShape from "./FluidShape";
import AnimatedText from "./AnimatedText";
import ProjectMap from "./ProjectMap";

const projects = [
  {
    image:
      "https://i.pinimg.com/736x/94/f5/33/94f5338ac8094e7dc55f020643b00b3b.jpg",
    title: "SkillSprint",
    description:
      "SkillSprint is a full-stack web application that empowers students and developers to discover hackathons, build or join teams, collaborate on projects, and showcase their skills. The platform streamlines the process of hackathon participation with intuitive registration, team management, and developer profiles, creating a centralized hub for innovation and collaboration.",
    tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB Atlas"],
    liveDemo: "https://skillsprint-frontend-hmxp.onrender.com/"
  },
  {
    image:
      "https://i.pinimg.com/736x/94/f5/33/94f5338ac8094e7dc55f020643b00b3b.jpg",
    title: "PestiCare",
    description:
      "A web-based solution designed to help farmers and gardeners identify pests and recommend appropriate treatments. PestiCare aims to support sustainable farming by providing an accessible pest diagnosis and prevention tool.",
    tags: ["Full Stack", "Machine Learning"],
    liveDemo: "https://nikhildhaliya.github.io/PestiCare_Project/",
    github: "https://github.com/NikhilDhaliya/PestiCare"
  }
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
      <ProjectMap />
    </div>
  );
};

export default Projects;
