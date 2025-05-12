import React from "react";

const ProjectCard = ({
  image,
  title,
  description,
  tags = [],
  liveDemo,
  github,
}) => (
  <div className="relative group w-[350px] h-[420px] rounded-2xl overflow-hidden shadow-xl border border-[#232d3a] bg-[#1a2236]/80 backdrop-blur-md transition-transform duration-500 hover:scale-105">
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover object-center opacity-70 group-hover:opacity-40 transition duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#10182b]/90 via-[#10182b]/60 to-transparent pointer-events-none" />
    <div className="relative z-10 flex flex-col h-full justify-end p-7">
      <h2 className="text-2xl font-bold text-white mb-2 card-title relative w-max after:content-[''] after:block after:h-1 after:w-full after:bg-sky-400 after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-500">
        {title}
      </h2>
      <div className="flex gap-2 mb-2 flex-wrap">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="bg-[#232d3a] text-sky-300 px-2 py-0.5 rounded-full text-xs font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-[#cbd5e1] text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
        {description}
      </p>
      <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sky-400 text-white font-semibold px-4 py-1.5 rounded-md shadow hover:bg-sky-500 transition"
        >
          Live Demo
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#10182b] border border-sky-400 text-sky-400 font-semibold px-4 py-1.5 rounded-md shadow hover:bg-sky-500 hover:text-white transition"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;