import React from "react";
import AnimatedCursor from "react-animated-cursor";

const FluidCursor = () => {
  return (
    <AnimatedCursor
      trailingSpeed={1}
      innerSize={8}
      outerSize={8}
      innerScale={1.5}
      outerScale={5}
      outerAlpha={5}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: "white",
      }}
      outerStyle={{
        border: "3px solid white",
        mixBlendMode: "exclusion",
      }}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
        ".card",
        '[role="button"]',
      ]}
      // Performance optimizations
      trailStyle={{
        backgroundColor: "white",
      }}
      showTrail={true}
      trailLength={5} // Reduced from default for better performance
      trailOpacity={0.5} // Reduced opacity for better performance
      fps={30} // Reduced from 60fps to 30fps for better performance
    />
  );
};

export default FluidCursor;
