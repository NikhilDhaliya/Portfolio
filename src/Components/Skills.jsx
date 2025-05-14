/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import FluidShape from "./FluidShape";

// List your skills and their icon paths (place icons in public/assets/skills/)
const skills = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    name: "HTML5",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    name: "CSS3",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    name: "JavaScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    name: "TypeScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    name: "React",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    name: "Tailwind CSS",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    name: "Node.js",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    name: "Git",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    name: "Figma",
  },
  // Add more as needed
];

// Manually chosen positions for a visually pleasing, clear, and evenly spread pattern
const positions = [
  { left: "10%", top: "10%", rotate: -10 },
  { left: "40%", top: "7%", rotate: 8 },
  { left: "70%", top: "13%", rotate: -6 },
  { left: "20%", top: "35%", rotate: 12 },
  { left: "55%", top: "28%", rotate: -8 },
  { left: "80%", top: "35%", rotate: 10 },
  { left: "15%", top: "65%", rotate: -12 },
  { left: "45%", top: "60%", rotate: 6 },
  { left: "75%", top: "70%", rotate: -14 },
  { left: "60%", top: "80%", rotate: 14 },
];

const Skills = () => (
  <section
    id="skills"
    className="bg-transparent w-full min-h-[90vh] flex flex-col items-center justify-center py-16 relative"
    data-scroll="true"
    data-scroll-speed="0.1"
  >
    {/* Fluid Shapes - Black and White Theme - Repositioned to avoid overlap with icons */}
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <FluidShape
        size={400}
        color="bg-white/10"
        position={{ top: "5%", right: "5%" }}
        duration={12}
      />
      <FluidShape
        size={300}
        color="bg-gray-500/10"
        position={{ bottom: "5%", left: "5%" }}
        duration={10}
        delay={1}
      />
    </div>

    <h1 className="text-5xl text-white font-semibold mb-4">My Skills</h1>
    <div className="w-18 h-1 bg-gradient-to-r from-white to-gray-400 rounded mb-10 md:mb-15 mx-auto"></div>
    <div
      className="relative mx-auto w-full max-w-xs h-60 md:max-w-[700px] md:h-[500px] lg:max-w-[1000px] overflow-hidden md:overflow-visible"
      style={{ zIndex: 5 }}
    >
      {skills.map((skill, i) => {
        const pos = positions[i % positions.length];
        return (
          <motion.div
            key={skill.name}
            className="absolute flex items-center justify-center group"
            style={{
              left: pos.left,
              top: pos.top,
              rotate: pos.rotate,
            }}
            whileHover={{
              scale: 1.2,
              left: `calc(${pos.left} + ${Math.random() > 0.5 ? 1.5 : -1.5}%)`,
              top: `calc(${pos.top} + ${Math.random() > 0.5 ? 1.5 : -1.5}%)`,
              rotate: pos.rotate + (Math.random() > 0.5 ? 8 : -8),
              zIndex: 20,
              filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.3))",
              transition: { type: "spring", stiffness: 300, damping: 15 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { type: "spring", stiffness: 500, damping: 20 },
            }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
          >
            <div className="w-16 h-16 md:w-28 md:h-28 rounded-[20%] shadow-xl bg-gradient-to-br from-[#23272F] to-[#181C23] border border-[#23272F] flex items-center justify-center p-3 md:p-5 overflow-hidden relative z-10 group-hover:shadow-[0_0_25px_5px_rgba(255,255,255,0.5)] transition-all duration-300">
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={skill.src}
                  alt={skill.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  draggable={false}
                  style={{
                    animation: `float ${4 + i * 0.2}s ease-in-out infinite`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              </div>
            </div>
            {/* Enhanced popup on hover */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-sm bg-[#181C23] text-white text-xs font-medium tracking-wide shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out pointer-events-none border border-gray-800">
              {skill.name}
            </div>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default Skills;
