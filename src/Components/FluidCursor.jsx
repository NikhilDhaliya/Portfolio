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
      trailStyle={{
        backgroundColor: "white",
      }}
      showTrail={true}
    />
  );
};

export default FluidCursor;
