/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";

const AboutCards = ({ title, description, logo, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="card flex flex-col gap-3 justify-center items-center w-full max-w-xs md:w-[220px] md:h-[200px] rounded-md bg-white/10 backdrop-blur-sm border border-white/10 shadow-lg px-4 py-6 cursor-pointer relative overflow-hidden"
      whileHover={{
        y: -8,
        scale: 1.03,
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.4)",
        borderColor: "rgba(255, 255, 255, 0.3)",
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 15,
        },
      }}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 0.8,
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 rounded-md pointer-events-none"
        animate={{
          boxShadow: isHovered
            ? [
                "0 0 0px rgba(255,255,255,0)",
                "0 0 10px rgba(255,255,255,0.3)",
                "0 0 0px rgba(255,255,255,0)",
              ]
            : "0 0 0px rgba(255,255,255,0)",
        }}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
          repeatType: "reverse",
        }}
      />

      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: "-100%" }}
        animate={{
          x: isHovered ? "200%" : "-100%",
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: isHovered ? Infinity : 0,
          repeatType: "loop",
        }}
      />

      {/* Animated particles */}
      {isHovered &&
        Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/40 pointer-events-none"
            initial={{
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              y: [null, Math.random() * -150 - 50],
              opacity: [0, 0.8, 0],
              scale: [0, Math.random() * 1.5 + 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 1.5 + 1,
              repeat: Infinity,
              repeatType: "loop",
              delay: Math.random() * 0.5,
            }}
          />
        ))}

      {/* Logo with enhanced animations */}
      <motion.div
        className="logo p-4 bg-black/70 border border-gray-700 rounded-md relative z-10"
        animate={
          isHovered
            ? {
                y: [0, -5, 0],
                rotate: [0, -3, 3, -3, 0],
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0px 0px 0px rgba(255,255,255,0)",
                  "0px 0px 15px rgba(255,255,255,0.3)",
                  "0px 0px 0px rgba(255,255,255,0)",
                ],
              }
            : {
                boxShadow: [
                  "0px 0px 0px rgba(255,255,255,0)",
                  "0px 0px 5px rgba(255,255,255,0.1)",
                  "0px 0px 0px rgba(255,255,255,0)",
                ],
              }
        }
        transition={{
          duration: isHovered ? 1.5 : 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        {logo}
      </motion.div>

      {/* Content with animations */}
      <motion.div className="content flex flex-col items-center justify-center flex-wrap relative z-10 mt-2">
        <motion.h3
          className="text-lg font-bold text-center text-white mb-1"
          animate={
            isHovered
              ? {
                  scale: [1, 1.05, 1],
                  color: ["#ffffff", "#f0f0f0", "#ffffff"],
                }
              : {}
          }
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
            repeatType: "reverse",
          }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-sm text-center text-gray-400"
          animate={isHovered ? { opacity: [0.7, 1, 0.7] } : {}}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
            repeatType: "reverse",
          }}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default AboutCards;
