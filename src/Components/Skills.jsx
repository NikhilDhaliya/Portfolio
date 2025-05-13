/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

// List your skills and their icon paths (place icons in public/assets/skills/)
const skills = [
  {
    src: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
    name: "HTML5",
  },
  {
    src: "https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000",
    name: "CSS3",
  },
  {
    src: "https://img.icons8.com/?size=100&id=Nkym0Ujb8VGI&format=png&color=000000",
    name: "JavaScript",
  },
  {
    src: "https://img.icons8.com/?size=100&id=nCj4PvnCO0tZ&format=png&color=000000",
    name: "TypeScript",
  },
  {
    src: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000",
    name: "React",
  },
  {
    src: "https://img.icons8.com/?size=100&id=WoopfRcDj3RF&format=png&color=000000",
    name: "Tailwind",
  },
  {
    src: "https://img.icons8.com/?size=100&id=ouWtcsgDBiwO&format=png&color=000000",
    name: "Node.js",
  },
  {
    src: "https://img.icons8.com/?size=100&id=74402&format=png&color=000000",
    name: "MongoDB",
  },
  {
    src: "https://img.icons8.com/?size=100&id=38389&format=png&color=000000",
    name: "Git",
  },
  {
    src: "https://img.icons8.com/?size=100&id=8gfeOoqrHqJU&format=png&color=000000",
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
    className="bg-black w-full min-h-[90vh] flex flex-col items-center justify-center py-16"
  >
    <h1 className="text-5xl text-white font-semibold mb-12">My Skills</h1>
    <div className="relative mx-auto w-full max-w-xs h-60 md:max-w-[700px] md:h-[500px] lg:max-w-[1000px] overflow-hidden">
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
              scale: 1.25,
              left: `calc(${pos.left} + ${Math.random() > 0.5 ? 2 : -2}%)`,
              top: `calc(${pos.top} + ${Math.random() > 0.5 ? 2 : -2}%)`,
              rotate: pos.rotate + (Math.random() > 0.5 ? 12 : -12),
              zIndex: 20,
              transition: { type: "spring", stiffness: 400, damping: 15 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { type: "spring", stiffness: 500, damping: 20 },
            }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
          >
            <motion.img
              src={skill.src}
              alt={skill.name}
              className="w-16 h-16 md:w-28 md:h-28 object-contain rounded-[20%] shadow-xl bg-gradient-to-br from-[#23272F] to-[#181C23] border border-[#23272F]"
              draggable={false}
              animate={{
                y: [0, -8, 0, 8, 0],
                boxShadow: [
                  "0 2px 24px 0 #38BDF855",
                  "0 4px 32px 0 #38BDF855",
                  "0 2px 24px 0 #38BDF855",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: i * 0.1,
              }}
            />
            {/* Popup on hover */}
            <motion.div
              className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-[#181C23] text-sky-300 text-xs font-semibold shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none"
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              whileHover={{ opacity: 1, y: -10, scale: 1 }}
              transition={{ duration: 0.25, type: "spring" }}
            >
              {skill.name}
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default Skills;
