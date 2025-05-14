// import React, { useState, useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';

// const SkillsCloud = ({ skills = [], className = "" }) => {
//   const containerRef = useRef(null);
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
//   const [skillNodes, setSkillNodes] = useState([]);
//   const [hoveredSkill, setHoveredSkill] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);

//   // Check if mobile
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   // Update dimensions on resize
//   useEffect(() => {
//     const updateDimensions = () => {
//       if (containerRef.current) {
//         setDimensions({
//           width: containerRef.current.offsetWidth,
//           height: containerRef.current.offsetHeight,
//         });
//       }
//     };

//     updateDimensions();
//     window.addEventListener('resize', updateDimensions);
//     return () => window.removeEventListener('resize', updateDimensions);
//   }, []);

//   // Generate skill nodes with positions
//   useEffect(() => {
//     if (dimensions.width === 0 || dimensions.height === 0 || skills.length === 0) return;

//     const centerX = dimensions.width / 2;
//     const centerY = dimensions.height / 2;
//     const radius = Math.min(dimensions.width, dimensions.height) * 0.35;
    
//     // Calculate positions in a spiral pattern
//     const nodes = skills.map((skill, index) => {
//       // Determine size based on skill level (1-10)
//       const size = (skill.level || 5) / 10;
      
//       // Calculate angle and distance from center
//       const angle = (index / skills.length) * Math.PI * 6; // Multiple loops for spiral
//       const distance = (radius * (index / skills.length)) + (radius * 0.2);
      
//       // Calculate position
//       const x = centerX + Math.cos(angle) * distance;
//       const y = centerY + Math.sin(angle) * distance;
      
//       return {
//         ...skill,
//         x,
//         y,
//         size: 0.5 + size * 0.5, // Scale between 0.5 and 1.0
//       };
//     });
    
//     setSkillNodes(nodes);
//   }, [dimensions, skills]);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.05,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const nodeVariants = {
//     hidden: { opacity: 0, scale: 0 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 260,
//         damping: 20,
//       },
//     },
//   };

//   // Handle skill hover
//   const handleSkillHover = (skill) => {
//     setHoveredSkill(skill);
//   };

//   // Handle skill hover end
//   const handleSkillHoverEnd = () => {
//     setHoveredSkill(null);
//   };

//   return (
//     <div 
//       ref={containerRef} 
//       className={`relative w-full h-[500px] ${className}`}
//     >
//       <motion.div
//         className="absolute inset-0"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//       >
//         {skillNodes.map((skill, index) => (
//           <motion.div
//             key={index}
//             className="absolute transform -translate-x-1/2 -translate-y-1/2"
//             style={{ 
//               left: skill.x, 
//               top: skill.y,
//               zIndex: hoveredSkill === skill ? 10 : 1,
//             }}
//             variants={nodeVariants}
//             custom={index}
//             whileHover={{ 
//               scale: 1.2,
//               transition: { duration: 0.2 }
//             }}
//             onHoverStart={() => handleSkillHover(skill)}
//             onHoverEnd={handleSkillHoverEnd}
//           >
//             <motion.div 
//               className={`
//                 px-3 py-1.5 rounded-full cursor-pointer
//                 ${hoveredSkill === skill 
//                   ? 'bg-white text-black' 
//                   : 'bg-black text-white border border-white/30'}
//               `}
//               animate={{ 
//                 scale: skill.size * (hoveredSkill === skill ? 1.1 : 1),
//               }}
//               transition={{ duration: 0.3 }}
//             >
//               <span className="text-xs md:text-sm font-medium whitespace-nowrap">
//                 {skill.name}
//               </span>
//             </motion.div>
//           </motion.div>
//         ))}
//       </motion.div>
      
//       {/* Skill details on hover */}
//       {hoveredSkill && !isMobile && (
//         <motion.div
//           className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg p-4 w-64"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 20 }}
//           transition={{ duration: 0.2 }}
//         >
//           <h3 className="text-white text-lg font-bold mb-1">{hoveredSkill.name}</h3>
//           <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
//             <motion.div 
//               className="bg-white h-2 rounded-full"
//               initial={{ width: 0 }}
//               animate={{ width: `${(hoveredSkill.level || 5) * 10}%` }}
//               transition={{ duration: 0.5, ease: "easeOut" }}
//             />
//           </div>
//           <p className="text-gray-300 text-xs mt-2">{hoveredSkill.description || `Experience with ${hoveredSkill.name}`}</p>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default SkillsCloud;
