import React, { createContext, useContext, useRef, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

// Create context
const ScrollContext = createContext({
  scroll: null,
});

// Hook to use the scroll context
export const useLocoScroll = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize Locomotive Scroll
    scrollRef.current = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 0.8,
      lerp: 0.08,
      smartphone: {
        smooth: true,
        multiplier: 0.9,
      },
      tablet: {
        smooth: true,
        breakpoint: 768,
        multiplier: 0.9,
      },
      reloadOnContextChange: true,
      inertia: 0.6,
    });

    // Update scroll on page load
    setTimeout(() => {
      scrollRef.current.update();
    }, 500);

    // Cleanup
    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy();
        scrollRef.current = null;
      }
    };
  }, []);

  // Update scroll on resize
  useEffect(() => {
    const handleResize = () => {
      if (scrollRef.current) {
        scrollRef.current.update();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ scroll: scrollRef.current }}>
      <div
        ref={containerRef}
        data-scroll-container="true"
        className="scroll-container"
      >
        {children}
      </div>
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;
