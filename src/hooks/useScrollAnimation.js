import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for scroll-based animations using GSAP and ScrollTrigger
 * 
 * @param {Object} options - Animation options
 * @param {React.RefObject} options.targetRef - Reference to the target element
 * @param {string} options.animation - Animation type: 'fade', 'slide', 'scale', 'rotate', etc.
 * @param {Object} options.from - Starting animation values
 * @param {Object} options.to - Ending animation values
 * @param {number} options.duration - Animation duration in seconds
 * @param {string} options.ease - GSAP easing function
 * @param {number} options.delay - Animation delay in seconds
 * @param {Object} options.scrollTrigger - ScrollTrigger configuration
 * @param {boolean} options.scrub - Whether to scrub the animation with scroll
 * @param {number} options.stagger - Stagger value for multiple elements
 */
const useScrollAnimation = ({
  targetRef,
  animation = 'fade',
  from = {},
  to = {},
  duration = 1,
  ease = 'power2.out',
  delay = 0,
  scrollTrigger = {},
  scrub = false,
  stagger = 0,
}) => {
  useEffect(() => {
    if (!targetRef.current) return;

    // Define animation presets
    const presets = {
      fade: {
        from: { opacity: 0, ...from },
        to: { opacity: 1, ...to },
      },
      slideUp: {
        from: { y: 100, opacity: 0, ...from },
        to: { y: 0, opacity: 1, ...to },
      },
      slideDown: {
        from: { y: -100, opacity: 0, ...from },
        to: { y: 0, opacity: 1, ...to },
      },
      slideLeft: {
        from: { x: -100, opacity: 0, ...from },
        to: { x: 0, opacity: 1, ...to },
      },
      slideRight: {
        from: { x: 100, opacity: 0, ...from },
        to: { x: 0, opacity: 1, ...to },
      },
      scale: {
        from: { scale: 0.5, opacity: 0, ...from },
        to: { scale: 1, opacity: 1, ...to },
      },
      rotate: {
        from: { rotation: -10, opacity: 0, ...from },
        to: { rotation: 0, opacity: 1, ...to },
      },
    };

    // Get animation preset or use custom values
    const animationValues = presets[animation] || { from, to };

    // Create the animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: targetRef.current,
        start: 'top bottom-=100',
        end: 'bottom top+=100',
        toggleActions: 'play none none reverse',
        scrub: scrub,
        ...scrollTrigger,
      },
    });

    // Set initial state
    gsap.set(targetRef.current.children.length > 0 ? targetRef.current.children : targetRef.current, animationValues.from);

    // Create the animation
    tl.to(
      targetRef.current.children.length > 0 ? targetRef.current.children : targetRef.current,
      {
        ...animationValues.to,
        duration,
        ease,
        delay,
        stagger,
      }
    );

    // Cleanup
    return () => {
      if (tl) tl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [targetRef, animation, from, to, duration, ease, delay, scrollTrigger, scrub, stagger]);
};

export default useScrollAnimation;
