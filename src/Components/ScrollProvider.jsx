import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const ScrollProvider = ({ children }) => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      multiplier: 1,
      lerp: 0.05
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default ScrollProvider; 