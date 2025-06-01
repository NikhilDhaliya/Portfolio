/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

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
      className="relative group w-full max-w-xs md:w-[350px] min-h-[420px] rounded-2xl overflow-hidden shadow-xl border border-gray-800 bg-black/80 backdrop-blur-md flex flex-col justify-end"
    >
      {/* Glow effect on hover - Black and White Theme */}
      <motion.div
        className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 z-0"
        animate={{
          opacity: isHovered ? 0.15 : 0,
          boxShadow: isHovered
            ? "0 0 30px 5px rgba(255, 255, 255, 0.1)"
            : "0 0 0px 0px rgba(255, 255, 255, 0)",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Background image with parallax effect */}
      <motion.div
        ref={imageRef}
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateX(${mousePosition.x}px) translateY(${mousePosition.y}px)`,
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
          zIndex: 1,
        }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-40 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none" />
      </motion.div>

      {/* Title - Default Position (Top Left) - Always visible */}
      <motion.div
        className="relative z-10 p-4 md:p-7"
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-xl md:text-2xl font-bold text-white/90 group-hover:text-white transition-colors duration-500">
          {title}
        </h2>
      </motion.div>

      {/* Content with 3D effect - Always visible */}
      <motion.div
        ref={contentRef}
        className="relative z-10 flex flex-col h-full justify-end p-4 md:p-7"
        style={{
          transform: `translateZ(40px)`,
          transformStyle: "preserve-3d",
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="flex gap-2 mb-2 flex-wrap">
          {tags.map((tag, i) => (
            <motion.span
              key={i}
              className="bg-gray-900 text-gray-300 px-2 py-0.5 rounded-full text-xs font-semibold border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 20,
              }}
              transition={{
                duration: 0.3,
                delay: 0.1 + i * 0.05,
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <motion.p
          className="text-gray-400 text-xs md:text-sm mb-4"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10,
          }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {isDescriptionExpanded || description.length <= descriptionCharLimit
            ? description
            : `${description.substring(0, descriptionCharLimit)}...`}
        </motion.p>

        {description.length > descriptionCharLimit && (
          <button
            onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
            className="text-blue-400 hover:underline text-xs text-left self-start focus:outline-none"
          >
            {isDescriptionExpanded ? "Read Less" : "Read More"}
          </button>
        )}

        <div className="flex gap-4 flex-wrap mt-4">
          <motion.a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black font-semibold px-4 py-1.5 rounded-md shadow hover:bg-gray-200 transition text-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20,
            }}
            transition={{
              duration: 0.3,
              delay: 0.3,
              type: "spring",
              stiffness: 300,
            }}
          >
            Live Demo
          </motion.a>
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black border border-white text-white font-semibold px-4 py-1.5 rounded-md shadow hover:bg-gray-900 transition text-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 20,
              }}
              transition={{
                duration: 0.3,
                delay: 0.4,
                type: "spring",
                stiffness: 300,
              }}
            >
              GitHub
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
