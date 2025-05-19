import React, { createContext, useContext, useRef, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const ScrollContext = createContext({
  scroll: null,
});

export const useLocoScroll = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    scrollRef.current = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 0.4,
      lerp: 0.05,
      smartphone: {
        smooth: false,
        multiplier: 0.5,
      },
      tablet: {
        smooth: false,
        breakpoint: 768,
        multiplier: 0.5,
      },
      reloadOnContextChange: true,
      inertia: 0.3, 
    });

    setTimeout(() => {
      scrollRef.current.update();
    }, 500);


    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy();
        scrollRef.current = null;
      }
    };
  }, []);

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
