/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({
  image,
  title,
  description,
  tags = [],
  liveDemo,
  github,
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  const descriptionCharLimit = 150;

  // Check if mobile on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);

      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Enhanced mouse move handler with parallax effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate rotation based on mouse position relative to card center
    const rotateYValue = -((e.clientX - centerX) / (rect.width / 2)) * 15;
    const rotateXValue = ((e.clientY - centerY) / (rect.height / 2)) * 15;

    // Calculate mouse position for parallax effect
    const x = (e.clientX - centerX) / 25;
    const y = (e.clientY - centerY) / 25;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setMousePosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative group w-full max-w-xs md:w-[350px] min-h-[420px] rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-white/10 backdrop-blur-md flex flex-col justify-end"
    >
      {/* Animated border/glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none z-20"
        animate={{
          boxShadow: isHovered
            ? "0 0 30px 8px rgba(255,255,255,0.18), 0 0 0 2px #fff3"
            : "0 0 0 0 rgba(255,255,255,0)",
          borderColor: isHovered ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.1)",
        }}
        transition={{ duration: 0.4 }}
        style={{ borderWidth: 2, borderStyle: "solid" }}
      />

      {/* Overlay action buttons (Live Demo, GitHub) */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
        transition={{ duration: 0.3 }}
      >
        {liveDemo && (
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-white/80 text-black font-semibold flex items-center gap-2 shadow-lg hover:bg-white"
          >
            <FaExternalLinkAlt className="inline-block" /> Live Demo
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-black/80 text-white font-semibold flex items-center gap-2 shadow-lg hover:bg-black"
          >
            <FaGithub className="inline-block" /> GitHub
          </a>
        )}
      </motion.div>

      {/* Background image with parallax and zoom effect */}
      <motion.div
        ref={imageRef}
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateX(${mousePosition.x}px) translateY(${mousePosition.y}px) scale(${isHovered ? 1.08 : 1})`,
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
          zIndex: 1,
          transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-40 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none" />
      </motion.div>

      {/* Title - Always visible */}
      <motion.div
        className="relative z-10 p-4 md:p-7"
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-xl md:text-2xl font-bold text-white/90 group-hover:text-white transition-colors duration-500">
          {title}
        </h2>
      </motion.div>

      {/* Tags - pill shaped, improved styling */}
      <div className="flex flex-wrap gap-2 px-4 md:px-7 pb-2 z-10">
        {tags && tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 rounded-full bg-white/20 text-white/80 text-xs font-medium shadow-sm backdrop-blur-sm border border-white/10"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Description/content - fade in on hover */}
      <motion.div
        ref={contentRef}
        className="relative z-10 flex flex-col h-full justify-end p-4 md:p-7"
        style={{
          transform: `translateZ(40px)`,
          transformStyle: "preserve-3d",
        }}
        animate={{
          opacity: isHovered ? 1 : isMobile ? 1 : 0.7,
          y: isHovered ? 0 : 20,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <p className="text-white/80 text-sm md:text-base mb-2 line-clamp-4 transition-all duration-300">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
