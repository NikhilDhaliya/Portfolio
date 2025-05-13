/* eslint-disable no-unused-vars */
import React from "react";
import AboutCards from "./AboutCards";
import { FaDiagramProject } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";
import { SiLeetcode } from "react-icons/si";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { motion } from "framer-motion";

// Example floating logos (replace src with your own or use skill icons)
const floatingLogos = [
  { src: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png", alt: "React", size: 60, x: 0, y: 0 },
  { src: "https://img.icons8.com/?size=100&id=20909&format=png", alt: "HTML5", size: 48, x: 80, y: 40 },
  { src: "https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png", alt: "CSS3", size: 48, x: -70, y: 60 },
  { src: "https://img.icons8.com/?size=100&id=Nkym0Ujb8VGI&format=png", alt: "JavaScript", size: 54, x: 60, y: -60 },
  { src: "https://img.icons8.com/?size=100&id=38389&format=png", alt: "Git", size: 44, x: -60, y: -60 },
];

const Aboutme = () => {
  return (
    <div id="about" className="min-h-screen bg-black text-white py-16 md:py-25 overflow-x-hidden">
      <h1 className="text-4xl md:text-5xl font-bold px-4 md:px-10 mb-3 flex justify-center items-center">
        About Me
      </h1>
      <div className="w-18 h-1 bg-gradient-to-r from-white to-gray-400 rounded mb-10 md:mb-15 mx-auto"></div>
      <div className="flex flex-col lg:flex-row flex-wrap gap-8 md:gap-10 px-4 md:px-10 items-center lg:items-start justify-center">
        {/* Floating logos instead of image */}
        <div className="relative w-full max-w-xs md:max-w-[33vw] min-h-[220px] flex items-center justify-center mb-6 lg:mb-0">
          {floatingLogos.map((logo, i) => (
            <motion.img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="absolute"
              style={{
                width: logo.size,
                height: logo.size,
                left: `calc(50% + ${logo.x}px)`,
                top: `calc(50% + ${logo.y}px)`,
                zIndex: 2,
                filter: "drop-shadow(0 2px 12px #38BDF8aa)",
              }}
              animate={{
                y: [
                  0,
                  Math.sin(i) * 18 + 10,
                  Math.cos(i) * -18 - 10,
                  0,
                ],
                x: [
                  0,
                  Math.cos(i) * 10,
                  Math.sin(i) * -10,
                  0,
                ],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
        <div className="aboutme flex flex-col justify-center w-full max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center lg:text-left">
            Full Stack Developer & Problem Solver
          </h2>
          <p className="text-[15px] md:text-[16px] mb-1 text-center lg:text-left">
            I'm a curious and motivated B.Tech 2nd-year student with a growing
            passion for full-stack web development. I enjoy turning ideas into
            interactive experiences and love the process of building things from
            the ground up—from planning to deployment.
          </p>
          <p className="text-[15px] md:text-[16px] mb-6 text-center lg:text-left">
            In the past 2 years, I've worked on several small projects and one
            major project that helped me apply what I've learned and improve my
            skills. I'm continuously exploring technologies like React, Node.js,
            and version control with Git to build modern, responsive, and
            efficient applications.
          </p>
          <div className="cards flex flex-col sm:flex-row flex-wrap gap-4 md:gap-5 items-center lg:items-start justify-center lg:justify-start w-full">
            <AboutCards
              title="Experience"
              description="2 Years"
              logo={<BsFillPersonLinesFill size={35} color="#38BDF8" />}
            />
            <AboutCards
              title="Education"
              description="Pursuing B.Tech in CS"
              logo={<GiGraduateCap size={38} color="#38BDF8" />}
            />
            <AboutCards
              onClick={() => {
                const section = document.getElementById("projects");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              title="Projects"
              description="2+ Completed"
              logo={<FaDiagramProject size={35} color="#38BDF8" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;