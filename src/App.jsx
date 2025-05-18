import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Aboutme from "./Components/Aboutme";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/footer";
import ScrollProvider from "./Components/ScrollProvider";
import ElegantBackground from "./Components/ElegantBackground";
import FluidCursor from "./Components/FluidCursor";

const App = () => {
  const homeRef = useRef(null);

  return (
    <ScrollProvider>
      <AnimatePresence mode="wait">
        <div className="w-full min-h-screen bg-black relative">
          {/* Custom Fluid Cursor */}
          <FluidCursor />

          {/* Global Elegant Background - increased z-index */}
          <div className="fixed inset-0 z-[1] pointer-events-none">
            <ElegantBackground className="opacity-80" />
          </div>

          {/* Smooth scroll progress indicator */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-white z-50 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "linear" }}
            style={{ transformOrigin: "0% 0%" }}
          />

          <Navbar />

          {/* Main content with data-scroll attributes for animation */}
          <div ref={homeRef} data-scroll-section="true">
            <Main />
          </div>

          <div data-scroll-section="true">
            <Aboutme />
          </div>

          <div data-scroll-section="true">
            <Skills />
          </div>

          <div data-scroll-section="true">
            <Projects />
          </div>

          <div data-scroll-section="true">
            <Footer homeRef={homeRef} />
          </div>
        </div>
      </AnimatePresence>
    </ScrollProvider>
  );
};

export default App;
