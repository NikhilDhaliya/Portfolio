/* eslint-disable no-unused-vars */
import React from "react";
import AboutCards from "./AboutCards";
import { FaDiagramProject } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";
import { SiLeetcode } from "react-icons/si";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { motion } from "framer-motion";
import FluidShape from "./FluidShape";

const Aboutme = () => {
  return (
    <div
      data-scroll="true"
      data-scroll-speed="0.05"
      id="about"
      className="min-h-screen bg-transparent text-white py-16 md:py-24 overflow-hidden relative"
    >
      {/* Fluid Shapes - Black and White Theme */}
      <FluidShape
        size={350}
        color="bg-white/10"
        position={{ top: "15%", right: "15%" }}
        duration={12}
      />
      <FluidShape
        size={250}
        color="bg-gray-600/10"
        position={{ bottom: "20%", left: "10%" }}
        duration={10}
        delay={1}
      />

      {/* Section Title with Animation */}
      <div className="text-center mb-12">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h1>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-white via-gray-400 to-white rounded-full mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 px-4 md:px-10 items-start justify-center max-w-6xl mx-auto">
        {/* About Me Content */}
        <motion.div
          className="w-full lg:w-3/5 order-2 lg:order-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-4 text-center lg:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Full Stack Developer & Problem Solver
          </motion.h2>

          <motion.p
            className="text-base mb-4 text-center lg:text-left text-gray-300"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm a curious and motivated B.Tech 2nd-year student with a growing
            passion for full-stack web development. I enjoy turning ideas into
            interactive experiences and love the process of building things from
            the ground up—from planning to deployment.
          </motion.p>

          <motion.p
            className="text-base mb-6 text-center lg:text-left text-gray-300"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            In the past 2 years, I've worked on several small projects and one
            major project that helped me apply what I've learned and improve my
            skills. I'm continuously exploring technologies like React, Node.js,
            and version control with Git to build modern, responsive, and
            efficient applications.
          </motion.p>

          {/* Cards Section */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.1,
              }}
              viewport={{ once: true }}
            >
              <AboutCards
                title="Experience"
                description="2 Years"
                logo={<BsFillPersonLinesFill size={28} color="#FFFFFF" />}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.2,
              }}
              viewport={{ once: true }}
            >
              <AboutCards
                title="Education"
                description="Pursuing B.Tech in CS"
                logo={<GiGraduateCap size={30} color="#FFFFFF" />}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.3,
              }}
              viewport={{ once: true }}
            >
              <AboutCards
                onClick={() => {
                  const section = document.getElementById("projects");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                title="Projects"
                description="2+ Completed"
                logo={<FaDiagramProject size={28} color="#FFFFFF" />}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Image/Visual Section */}
        <motion.div
          className="w-full lg:w-2/5 order-1 lg:order-2 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full max-w-sm aspect-square">
            {/* Code-inspired visual element */}
            <motion.div
              className="absolute inset-0 border border-gray-800 rounded-md overflow-hidden bg-black/30"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-10 bg-gray-900 flex items-center px-4 border-b border-gray-800">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-xs text-gray-400">developer.js</div>
              </div>

              <div className="p-4 text-xs md:text-sm font-mono text-gray-300 h-full overflow-hidden">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="text-blue-400">const</span>{" "}
                  <span className="text-green-400">developer</span> = {"{"}
                  <br />
                  &nbsp;&nbsp;<span className="text-yellow-400">
                    name
                  </span>: <span className="text-orange-400">'Nikhil'</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-yellow-400">
                    role
                  </span>:{" "}
                  <span className="text-orange-400">
                    'Full Stack Developer'
                  </span>
                  ,
                  <br />
                  &nbsp;&nbsp;<span className="text-yellow-400">skills</span>: [
                  <span className="text-orange-400">'React'</span>,{" "}
                  <span className="text-orange-400">'Node.js'</span>,{" "}
                  <span className="text-orange-400">'JavaScript'</span>],
                  <br />
                  &nbsp;&nbsp;<span className="text-yellow-400">
                    passion
                  </span>:{" "}
                  <span className="text-orange-400">
                    'Building elegant web applications'
                  </span>
                  ,
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-400">code</span>: (){" "}
                  {"=>"} {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-purple-400">return</span>{" "}
                  <span className="text-orange-400">
                    'Clean, efficient, and scalable'
                  </span>
                  ;
                  <br />
                  &nbsp;&nbsp;{"}"}
                  <br />
                  {"}"};
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Aboutme;
