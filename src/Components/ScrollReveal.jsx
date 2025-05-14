/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocoScroll } from "./ScrollProvider";

const ScrollReveal = ({
  children,
  threshold = 0.1,
  animation = "fade-up", // fade-up, fade-down, fade-left, fade-right, zoom-in, zoom-out
  delay = 0,
  duration = 0.6,
  once = true,
  className = "",
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { scroll } = useLocoScroll() || {};

  // Define animation variants
  const variants = {
    "fade-up": {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    "fade-down": {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 },
    },
    "fade-left": {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    "fade-right": {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    "zoom-in": {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    "zoom-out": {
      hidden: { opacity: 0, scale: 1.2 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, once]);

  // Update scroll when element becomes visible
  useEffect(() => {
    if (isVisible && scroll) {
      // Small delay to ensure animation completes before updating scroll
      const timeout = setTimeout(() => {
        if (scroll && typeof scroll.update === "function") {
          scroll.update();
        }
      }, (duration + delay) * 1000 + 100);

      return () => clearTimeout(timeout);
    }
  }, [isVisible, scroll, duration, delay]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants[animation]}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
      data-scroll="true"
      data-scroll-speed="0.1"
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
