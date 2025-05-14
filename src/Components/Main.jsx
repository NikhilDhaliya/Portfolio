/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import ParticleField from "./ParticleField";
import FluidShape from "./FluidShape";

const Main = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const textRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate mouse position relative to the window
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;

      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id="home"
      className="relative w-full h-screen bg-black flex flex-col justify-center items-center md:items-start px-4 md:px-12 lg:px-24 py-12 md:py-0 overflow-hidden"
      data-scroll="true"
    >
      {/* Refined gradient background - more subtle and professional */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black z-0"></div>

      {/* Subtle vignette overlay for more depth */}
      <div className="absolute inset-0 bg-radial-gradient z-[1] opacity-70 pointer-events-none"></div>

      {/* Professional 3D Particle Background */}
      <ParticleField className="opacity-80" />

      {/* Refined Fluid Shapes - More subtle and professional */}
      <FluidShape
        size={400}
        color="bg-white/10"
        position={{ top: "10%", right: "15%" }}
        duration={15}
      />
      <FluidShape
        size={300}
        color="bg-gray-400/08"
        position={{ bottom: "15%", left: "10%" }}
        duration={18}
        delay={2}
      />
      <FluidShape
        size={220}
        color="bg-gray-600/08"
        position={{ top: "35%", left: "25%" }}
        duration={12}
        delay={1}
      />
      <FluidShape
        size={180}
        color="bg-white/06"
        position={{ bottom: "35%", right: "25%" }}
        duration={14}
        delay={3}
      />

      {/* Content with parallax effect */}
      <motion.div
        className="flex flex-col gap-6 md:gap-8 max-w-4xl relative z-10"
        ref={textRef}
        style={{
          x: mousePosition.x * -20, // Subtle parallax effect
          y: mousePosition.y * -20,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
        data-scroll="true"
        data-scroll-speed="0.1"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold text-center md:text-left leading-tight tracking-tight">
          Hi, I'm Nikhil –{" "}
          <motion.span
            className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            Full Stack
          </motion.span>{" "}
          <span className="block mt-1 md:inline">Web Developer</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl lg:text-2xl text-center md:text-left max-w-2xl font-light tracking-wide">
          I craft elegant, responsive web applications with modern technologies
        </p>

        <div className="buttons flex flex-col sm:flex-row gap-4 md:gap-6 items-center md:items-start mt-4">
          <motion.a
            href="#projects"
            className="bg-white text-black font-medium px-8 py-3 rounded-sm cursor-pointer relative h-12 w-48 overflow-hidden border-0 shadow-lg transition-all flex items-center justify-center text-center tracking-wide"
            whileHover={{
              scale: 1.03,
              y: -3,
              boxShadow: "0 0 20px 2px rgba(255, 255, 255, 0.15)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            View Projects
          </motion.a>

          <motion.a
            href="/Resume.pdf"
            download
            className="bg-transparent border border-white text-white font-medium px-8 py-3 rounded-sm cursor-pointer relative h-12 w-48 overflow-hidden shadow-none transition-all flex items-center justify-center text-center tracking-wide"
            whileHover={{
              scale: 1.03,
              y: -3,
              boxShadow: "0 0 15px 2px rgba(255, 255, 255, 0.1)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            My Resume
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Main;
