import React from "react";
import AnimatedCursor from "react-animated-cursor";

const FluidCursor = () => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={8}
      // Scale factors for normal and hover states
      innerScale={1.5}
      outerScale={2.5}
      outerAlpha={0}
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
      trailStyle={{
        backgroundColor: "white",
      }}
      showTrail={true}
    />
  );
};

export default FluidCursor;
