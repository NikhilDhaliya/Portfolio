/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import FluidShape from "./FluidShape";
import AnimatedText from "./AnimatedText";

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
      className="relative w-full h-screen bg-transparent flex flex-col justify-center items-center md:items-start px-4 md:px-12 lg:px-24 py-12 md:py-0 overflow-hidden"
      data-scroll="true"
    >
      {/* Removed solid background to allow global elegant background to show through */}

      {/* Subtle vignette overlay for more depth */}
      <div className="absolute inset-0 bg-radial-gradient z-[1] opacity-70 pointer-events-none"></div>

      {/* Elegant 2D Background now applied globally */}

      {/* Reduced number of Fluid Shapes for better performance */}
      <FluidShape
        size={400}
        color="bg-white/10"
        position={{ top: "10%", right: "15%" }}
        duration={20} // Slower animation for better performance
      />
      <FluidShape
        size={300}
        color="bg-gray-400/08"
        position={{ bottom: "15%", left: "10%" }}
        duration={24} // Slower animation for better performance
        delay={2}
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
          <AnimatedText
            text="Hi, I'm Nikhil –"
            type="character"
            className="inline-block"
            staggerChildren={0.02}
          />{" "}
          <motion.span
            className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            Full Stack
          </motion.span>{" "}
          <AnimatedText
            text="Web Developer"
            type="character"
            className="block mt-1 md:inline"
            delay={0.5}
            staggerChildren={0.02}
          />
        </h1>

        <AnimatedText
          text="I craft elegant, responsive web applications with modern technologies"
          type="paragraph"
          className="text-gray-300 text-lg md:text-xl lg:text-2xl text-center md:text-left max-w-2xl font-light tracking-wide"
          delay={0.8}
        />

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
