import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points } from "@react-three/drei";
import * as THREE from "three";

// Generate random points in a 3D space with a more structured, grid-like pattern
const generatePoints = (count, radius) => {
  const points = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  // Refined monochromatic color palette for a more professional look
  const colorOptions = [
    new THREE.Color("#ffffff").toArray(), // pure white - very rare, only for highlights
    new THREE.Color("#f8f8f8").toArray(), // near white
    new THREE.Color("#f0f0f0").toArray(), // off-white
    new THREE.Color("#e8e8e8").toArray(), // very light gray
    new THREE.Color("#d8d8d8").toArray(), // light gray
    new THREE.Color("#c8c8c8").toArray(), // medium-light gray
    new THREE.Color("#b8b8b8").toArray(), // medium gray
    new THREE.Color("#a8a8a8").toArray(), // medium-dark gray
  ];

  // Weight distribution for a more professional look
  // Emphasize mid-tones with fewer extremes
  const colorWeights = [0.05, 0.1, 0.15, 0.2, 0.2, 0.15, 0.1, 0.05];

  // Create a more structured distribution with some randomness
  // This creates a more professional, grid-like pattern with subtle variations
  const gridSize = Math.ceil(Math.cbrt(count)); // Cubic root for 3D grid
  const cellSize = (radius * 2) / gridSize;

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;

    // Determine if this should be a grid point or a random point
    // 70% grid points, 30% random points for natural variation
    const isGridPoint = Math.random() < 0.7;

    if (isGridPoint) {
      // Create a grid-like structure with slight randomness
      const gridX = Math.floor(i % gridSize) - gridSize / 2;
      const gridY = Math.floor((i / gridSize) % gridSize) - gridSize / 2;
      const gridZ = Math.floor(i / (gridSize * gridSize)) - gridSize / 2;

      // Add slight randomness to grid positions for a more natural look
      points[i3] = gridX * cellSize + (Math.random() * 0.4 - 0.2) * cellSize;
      points[i3 + 1] =
        gridY * cellSize + (Math.random() * 0.4 - 0.2) * cellSize;
      points[i3 + 2] =
        gridZ * cellSize + (Math.random() * 0.4 - 0.2) * cellSize;
    } else {
      // Add some completely random points for natural variation
      const angle = Math.random() * Math.PI * 2;
      const z = Math.random() * 2 - 1;
      const r = Math.sqrt(1 - z * z) * radius;

      points[i3] = Math.cos(angle) * r;
      points[i3 + 1] = Math.sin(angle) * r;
      points[i3 + 2] = z * radius;
    }

    // Weighted random color selection for more elegant distribution
    const random = Math.random();
    let weightSum = 0;
    let selectedIndex = 0;

    // Select color based on weights
    for (let j = 0; j < colorWeights.length; j++) {
      weightSum += colorWeights[j];
      if (random < weightSum) {
        selectedIndex = j;
        break;
      }
    }

    const color = colorOptions[selectedIndex];
    colors[i3] = color[0];
    colors[i3 + 1] = color[1];
    colors[i3 + 2] = color[2];
  }

  return { positions: points, colors };
};

const ParticleCloud = ({ count = 2500, radius = 2.0 }) => {
  const pointsRef = useRef();

  // Generate points only once
  const { positions, colors } = useMemo(
    () => generatePoints(count, radius),
    [count, radius]
  );

  // Animation loop - extremely subtle and professional
  useFrame((state) => {
    const { clock } = state;
    if (pointsRef.current) {
      // Very slow, barely perceptible rotation for a professional look
      pointsRef.current.rotation.x =
        Math.sin(clock.getElapsedTime() * 0.03) * 0.05;
      pointsRef.current.rotation.y =
        Math.sin(clock.getElapsedTime() * 0.04) * 0.05;

      // Almost imperceptible breathing effect
      const time = clock.getElapsedTime();
      // Combine two sine waves with different frequencies for more organic movement
      const breathingScale =
        1 + Math.sin(time * 0.15) * 0.015 + Math.sin(time * 0.08) * 0.01;

      pointsRef.current.scale.set(
        breathingScale,
        breathingScale,
        breathingScale
      );
    }
  });

  return (
    <Points
      ref={pointsRef}
      positions={positions}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        vertexColors
        size={0.008} // Smaller points for a more refined, professional look
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.7} // Slightly more subtle
        toneMapped={false} // Better color reproduction
      />
    </Points>
  );
};

const ParticleField = ({ className = "" }) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    // Delay mounting to ensure proper initialization
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={`absolute inset-0 z-0 ${className}`}
      style={{
        pointerEvents: "none",
        zIndex: 2,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 50 }} // Wider view, more professional perspective
        dpr={[1, 2]} // Better performance on high-DPI displays
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          precision: "highp", // Higher precision for smoother gradients
        }}
        linear // Linear color space for more accurate whites
      >
        <ambientLight intensity={0.5} />{" "}
        {/* Slightly dimmer for more contrast */}
        <fog attach="fog" args={["#000000", 4, 8]} />{" "}
        {/* More subtle depth fog */}
        <ParticleCloud />
      </Canvas>
    </div>
  );
};

export default ParticleField;
