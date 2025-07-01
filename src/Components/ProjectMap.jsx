import React, { useState, useRef, useEffect } from "react";
import { FaRegHandPointer } from "react-icons/fa";

// Example projects array (replace with your real data or import)
const projects = [
  {
    title: "SkillSprint",
    description:
      "SkillSprint is a full-stack web application that empowers students and developers to discover hackathons, build or join teams, collaborate on projects, and showcase their skills.",
    image:
      "https://i.pinimg.com/736x/94/f5/33/94f5338ac8094e7dc55f020643b00b3b.jpg",
    liveDemo: "https://skillsprint-frontend-hmxp.onrender.com/",
    github: null,
  },
  {
    title: "PestiCare",
    description:
      "A web-based solution designed to help farmers and gardeners identify pests and recommend appropriate treatments. PestiCare aims to support sustainable farming by providing an accessible pest diagnosis and prevention tool.",
    image:
      "https://i.pinimg.com/736x/94/f5/33/94f5338ac8094e7dc55f020643b00b3b.jpg",
    liveDemo: "https://nikhildhaliya.github.io/PestiCare_Project/",
    github: "https://github.com/NikhilDhaliya/PestiCare",
  },
  // Add more projects as needed
];

const RADIUS = 180; // px, radius of the circle
const NODE_SIZE = 38; // px, diameter of each node

const ProjectMap = () => {
  const [activeIdx, setActiveIdx] = useState(null);
  const center = 220;
  const nodePositions = projects.map((_, i) => {
    const angle = (2 * Math.PI * i) / projects.length;
    return {
      x: center + RADIUS * Math.cos(angle),
      y: center + RADIUS * Math.sin(angle),
    };
  });

  // Close modal when clicking outside or pressing ESC
  const modalRef = useRef(null);
  useEffect(() => {
    if (activeIdx === null) return;
    const handleClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setActiveIdx(null);
      }
    };
    const handleEsc = (e) => {
      if (e.key === "Escape") setActiveIdx(null);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [activeIdx]);

  // Trap focus inside modal
  useEffect(() => {
    if (activeIdx === null) return;
    const focusable = modalRef.current?.querySelectorAll(
      'a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable && focusable.length) {
      focusable[0].focus();
      const handleTab = (e) => {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.key === "Tab") {
          if (e.shiftKey) {
            if (document.activeElement === first) {
              e.preventDefault();
              last.focus();
            }
          } else {
            if (document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        }
      };
      document.addEventListener("keydown", handleTab);
      return () => document.removeEventListener("keydown", handleTab);
    }
  }, [activeIdx]);

  // Animate constellation entrance
  const [showConstellation, setShowConstellation] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowConstellation(true), 200);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center py-12 relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br animate-gradient-move rounded-2xl blur-2xl opacity-80" />
      </div>
      <div className={`relative w-[440px] h-[440px] mx-auto ${showConstellation ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <svg width={440} height={440} className="absolute top-0 left-0 z-0">
          {/* Draw lines between nodes */}
          {nodePositions.map((pos, i) =>
            nodePositions.map((pos2, j) =>
              i < j ? (
                <line
                  key={`line-${i}-${j}`}
                  x1={pos.x}
                  y1={pos.y}
                  x2={pos2.x}
                  y2={pos2.y}
                  stroke={activeIdx === i || activeIdx === j ? "#fff" : "#fff6"}
                  strokeWidth={activeIdx === i || activeIdx === j ? 2 : 1}
                  style={{ filter: activeIdx === i || activeIdx === j ? "drop-shadow(0 0 6px #fff8)" : "none" }}
                />
              ) : null
            )
          )}
        </svg>
        {/* Draw nodes */}
        {nodePositions.map((pos, i) => (
          <button
            key={i}
            className={`absolute rounded-full shadow-lg border-2 border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400/60 ${
              activeIdx === i ? "scale-125 z-20 ring-4 ring-pink-400/40" : "hover:scale-110 z-10"
            } animate-pulse-node group`}
            style={{
              left: pos.x - NODE_SIZE / 2,
              top: pos.y - NODE_SIZE / 2,
              width: NODE_SIZE,
              height: NODE_SIZE,
              boxShadow: activeIdx === i ? "0 0 24px 6px #f0f" : undefined,
            }}
            tabIndex={0}
            aria-label={`Open project: ${projects[i].title}`}
            onClick={() => setActiveIdx(i)}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") setActiveIdx(i);
            }}
          >
            {/* Click badge on hover/focus */}
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-black/70 text-white text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200 pointer-events-none select-none shadow-md">
              <FaRegHandPointer className="inline-block text-pink-300 text-base" />
              Click
            </span>
            <img
              src={projects[i].image}
              alt={projects[i].title}
              className="w-4/5 h-4/5 object-cover rounded-full"
              draggable={false}
            />
          </button>
        ))}
        {/* Modal and backdrop for active node */}
        {activeIdx !== null && (
          <>
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/60 z-20 transition-opacity duration-300" aria-hidden="true" />
            {/* Modal */}
            <div
              ref={modalRef}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/10 shadow-lg shadow-white/5 p-6 w-[320px] max-w-[95vw] z-30 animate-fade-in rounded-2xl md:w-[320px]"
              style={{ pointerEvents: "auto" }}
              role="dialog"
              aria-modal="true"
            >
              <button
                className="absolute top-2 right-2 text-black/60 hover:text-black/90 text-xl font-bold bg-white/30 rounded-full px-2 py-0.5"
                onClick={() => setActiveIdx(null)}
                aria-label="Close"
              >
                ×
              </button>
              <h3 className="text-xl font-bold mb-2 text-white/90 drop-shadow">{projects[activeIdx].title}</h3>
              <p className="text-sm mb-3 text-white/90">{projects[activeIdx].description}</p>
              <div className="flex gap-3 mt-2">
                {projects[activeIdx].liveDemo && (
                  <a
                    href={projects[activeIdx].liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded-full bg-blue-600/90 text-white font-semibold shadow hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>
                )}
                {projects[activeIdx].github && (
                  <a
                    href={projects[activeIdx].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded-full bg-gray-800/90 text-white font-semibold shadow hover:bg-gray-900 transition"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </>
        )}
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in { animation: fade-in 0.3s ease; }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.7s cubic-bezier(0.4,0,0.2,1); }
        @keyframes pulse-node {
          0%, 100% { box-shadow: 0 0 0 0 #fff0; }
          50% { box-shadow: 0 0 16px 4px #fff3; }
        }
        .animate-pulse-node { animation: pulse-node 2.5s infinite; }
        @media (max-width: 500px) {
          .w-[440px], .h-[440px] { width: 98vw !important; height: 98vw !important; }
          .md:w-[320px] { width: 98vw !important; }
        }
      `}</style>
    </div>
  );
};

export default ProjectMap; 