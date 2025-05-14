import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ 
  text, 
  className = "", 
  once = true,
  type = "heading", // heading, paragraph, or character
  delay = 0,
  duration = 0.05,
  staggerChildren = 0.03,
  ...props 
}) => {
  // Split text into words and characters
  const words = text.split(' ');
  
  // Animation variants for different types
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: staggerChildren,
        delayChildren: delay,
      },
    }),
  };
  
  const wordVariants = {
    hidden: { 
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: duration,
      },
    },
  };
  
  const characterVariants = {
    hidden: { 
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: duration,
      },
    },
  };

  // For paragraph animation (simpler)
  const paragraphVariants = {
    hidden: { 
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.5,
        delay: delay,
      },
    },
  };

  if (type === "paragraph") {
    return (
      <motion.p
        className={className}
        variants={paragraphVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        {...props}
      >
        {text}
      </motion.p>
    );
  }

  if (type === "character") {
    return (
      <motion.span
        className={`inline-block ${className}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        {...props}
      >
        {words.map((word, index) => (
          <span className="inline-block" key={index}>
            {Array.from(word).map((char, charIndex) => (
              <motion.span
                key={charIndex}
                className="inline-block"
                variants={characterVariants}
              >
                {char}
              </motion.span>
            ))}
            {index !== words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        ))}
      </motion.span>
    );
  }

  // Default: heading (word-by-word animation)
  return (
    <motion.h2
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      {...props}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={wordVariants}
        >
          {word}
          {index !== words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default AnimatedText;
