import React from "react";

const FloatingComponent = ({
  className = "",
  color = "bg-sky-400/30", // translucent light blue
  blur = "blur-[100px]",   // heavy blur
  zIndex = "z-0",          // stay in background
  size = 300,
  top = "30%",
  left = "60%",
}) => {
  return (
    <div
      className={`absolute rounded-full ${color} ${blur} ${zIndex} ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top,
        left,
        animation: "jellyFloat 12s ease-in-out infinite alternate",
        position: "absolute",
        filter: "blur(60px)",
        opacity: 0.7,
      }}
    >
      <style>
        {`
          @keyframes jellyFloat {
            0% {
              transform: translateY(0) scale(1, 1) rotate(0deg);
              border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
            }
            50% {
              transform: translateY(-20px) scale(1.1, 0.9) rotate(10deg);
              border-radius: 60% 40% 60% 40% / 40% 60% 40% 60%;
            }
            100% {
              transform: translateY(0) scale(1, 1) rotate(-10deg);
              border-radius: 50% 60% 40% 50% / 60% 50% 40% 60%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default FloatingComponent;
