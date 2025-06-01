/* eslint-disable no-unused-vars */
import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import FluidShape from "./FluidShape";
import AnimatedText from "./AnimatedText";

const projects = [
  {
    image:
      "https://i.pinimg.com/736x/94/f5/33/94f5338ac8094e7dc55f020643b00b3b.jpg",
    title: "SkillSprint",
    description:
      "SkillSprint is a full-stack web application that empowers students and developers to discover hackathons, build or join teams, collaborate on projects, and showcase their skills. The platform streamlines the process of hackathon participation with intuitive registration, team management, and developer profiles, creating a centralized hub for innovation and collaboration.",
    tags: ["React", "Tailwind", "Framer Motion"],
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
      className="text-white bg-transparent w-full min-h-screen flex flex-col items-center relative overflow-hidden"
      data-scroll="true"
      data-scroll-speed="0.05"
    >
      {/* Fluid Shapes - Black and White Theme */}
      <FluidShape
        size={400}
        color="bg-white/15"
        position={{ top: "15%", left: "10%" }}
        duration={12}
      />
      <FluidShape
        size={350}
        color="bg-gray-600/15"
        position={{ bottom: "20%", right: "10%" }}
        duration={10}
        delay={2}
      />
      <div className="header mt-10 flex flex-col gap-4 px-4 md:px-10 py-6 w-full max-w-5xl relative z-10">
        <AnimatedText
          text="My Projects"
          type="character"
          className="text-3xl sm:text-4xl md:text-5xl m-auto mb-4 font-bold text-center bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent"
          staggerChildren={0.03}
        />
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-white via-gray-400 to-white rounded-full mx-auto mb-8"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>

      <div className="cards flex flex-col md:flex-row flex-wrap gap-8 md:gap-10 justify-center items-center w-full px-4 pb-16 relative z-10">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: i * 0.2,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <ProjectCard {...proj} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
