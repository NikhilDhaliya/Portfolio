import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FluidShape = ({
  size = 300,
  color = "bg-white/10",
  position = { top: "10%", left: "10%" },
  duration = 8,
  delay = 0,
  className = "",
  animate = true,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // More subtle and professional animation variants
  const variants = {
    animate: {
      borderRadius: [
        "60% 40% 30% 70%/60% 30% 70% 40%",
        "40% 50% 60% 50%/50% 60% 40% 50%",
        "60% 40% 30% 70%/60% 30% 70% 40%",
      ],
      // More subtle scale changes for a professional look
      scale: [1, 1.03, 0.97, 1],
      // Minimal rotation for elegance
      rotate: [0, 5, -5, 0],
      // Smaller movements for subtlety
      x: [0, 15, -15, 0],
      y: [0, -20, 20, 0],
    },
  };

  return (
    <motion.div
      className={`absolute rounded-full ${color} ${className}`}
      style={{
        width: size,
        height: size,
        ...position,
        filter: "blur(60px)", // Lowered blur for better performance
        opacity: 0.5,
        zIndex: 0,
        mixBlendMode: "screen",
        pointerEvents: "none",
        willChange: "transform", // Hint for GPU acceleration
      }}
      initial={{ opacity: 0 }}
      animate={isMounted && animate ? "animate" : "initial"}
      variants={variants}
      transition={{
        duration: duration,
        ease: "easeInOut",
        times: [0, 0.35, 0.7, 1],
        repeat: Infinity,
        repeatType: "mirror",
        delay: delay,
      }}
    />
  );
};

export default FluidShape;
