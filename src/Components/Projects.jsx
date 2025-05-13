import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    title: "Ochi Design Clone",
    description:
      "A responsive and animated website clone of Ochi.design showcasing modern web design using GSAP and ScrollTrigger animations.",
    tags: ["React", "Tailwind" ,"Framer Motion"],
    liveDemo: "https://nikhildhaliya.github.io/ochi_Clone/",
    github: "https://github.com/NikhilDhaliya/ochi_Clone",
  },
  {
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    title: "PestiCare",
    description:
      "A web-based solution designed to help farmers and gardeners identify pests and recommend appropriate treatments. PestiCare aims to support sustainable farming by providing an accessible pest diagnosis and prevention tool.",
    tags: ["Full Stack", "Machine Learning"],
    liveDemo: "https://nikhildhaliya.github.io/PestiCare_Project/",
    github: "https://github.com/NikhilDhaliya/PestiCare",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="text-white bg-black w-full min-h-screen flex flex-col items-center relative overflow-hidden"
    >
      {/* Subtle top and bottom gradients */}
      {/* <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div> */}
      
      <div className="header mt-10 flex flex-col gap-4 px-4 md:px-10 py-6 w-full max-w-5xl relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl m-auto mb-6 font-bold text-center bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
          My Projects
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-white via-gray-400 to-white rounded-full mx-auto mb-8"></div>
      </div>
      
      <div className="cards flex flex-col md:flex-row flex-wrap gap-8 md:gap-10 justify-center items-center w-full px-4 pb-16 relative z-10">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
