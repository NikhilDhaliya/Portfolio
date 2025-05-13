import React, { useState, useRef } from "react";

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
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate rotation based on mouse position relative to card center
    // Inverted the Y rotation and adjusted the X rotation for more natural tilt
    const rotateYValue = -((e.clientX - centerX) / (rect.width / 2)) * 15;
    const rotateXValue = ((e.clientY - centerY) / (rect.height / 2)) * 15;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: 'preserve-3d',
      }}
      className="relative group w-full max-w-xs md:w-[350px] md:h-[420px] h-[420px] rounded-2xl overflow-hidden shadow-xl border border-gray-800 bg-black/80 backdrop-blur-md transition-all duration-300 hover:scale-105 flex flex-col justify-end"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-top opacity-70 group-hover:opacity-40 transition duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none" />
      
      {/* Title - Default Position (Top Left) - Only visible on desktop */}
      <div className="relative z-10 p-4 md:p-7 hidden md:block md:group-hover:opacity-0 transition-opacity duration-500">
        <h2 className="text-xl md:text-2xl font-bold text-white/40 group-hover:text-white transition-colors duration-500">
          {title}
        </h2>
      </div>

      {/* Content - Always visible on mobile, fades in on desktop hover */}
      <div className="relative z-10 flex flex-col h-full justify-end p-4 md:p-7 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-2 card-title relative w-max after:content-[''] after:block after:h-1 after:w-full after:bg-white after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-500">
          {title}
        </h2>
        <div className="flex gap-2 mb-2 flex-wrap">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-gray-900 text-gray-300 px-2 py-0.5 rounded-full text-xs font-semibold border border-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-400 text-xs md:text-sm mb-4">
          {description}
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black font-semibold px-4 py-1.5 rounded-md shadow hover:bg-gray-200 transition text-sm"
          >
            Live Demo
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black border border-white text-white font-semibold px-4 py-1.5 rounded-md shadow hover:bg-gray-900 transition text-sm"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
