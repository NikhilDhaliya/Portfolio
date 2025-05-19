import React, { useEffect, useRef } from "react";

const ElegantBackground = ({ className = "" }) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const particlesRef = useRef([]);
  const animationFrameRef = useRef(null);

  // Configuration for the particles - optimized for performance
  const config = {
    particleCount: 80, // Reduced from 150 for better performance
    particleSize: { min: 1, max: 3 },
    speed: { min: 0.05, max: 0.2 }, // Reduced speed for less CPU usage
    connectionDistance: 150, // Reduced connection distance
    colors: [
      "rgba(255, 255, 255, 0.5)",
      "rgba(220, 220, 220, 0.4)",
      "rgba(200, 200, 200, 0.3)",
    ],
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    contextRef.current = canvas.getContext("2d");
    handleResize();

    window.addEventListener("resize", handleResize);

    startAnimation();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initParticles = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    particlesRef.current = [];
    for (let i = 0; i < config.particleCount; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size:
          Math.random() * (config.particleSize.max - config.particleSize.min) +
          config.particleSize.min,
        speedX:
          (Math.random() - 0.5) * (config.speed.max - config.speed.min) +
          config.speed.min,
        speedY:
          (Math.random() - 0.5) * (config.speed.max - config.speed.min) +
          config.speed.min,
        color: config.colors[Math.floor(Math.random() * config.colors.length)],
      });
    }
  };

  // Animation loop
  const animate = () => {
    const canvas = canvasRef.current;
    const context = contextRef.current;
    if (!canvas || !context) return;

    context.clearRect(0, 0, canvas.width, canvas.height);

    particlesRef.current.forEach((particle, index) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      context.beginPath();
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.fillStyle = particle.color;
      context.fill();
      if (index % 3 === 0) {
        const checkLimit = Math.min(particlesRef.current.length, index + 10);
        for (let j = index + 1; j < checkLimit; j++) {
          const otherParticle = particlesRef.current[j];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;

          // Quick distance check using squared distance (avoids expensive sqrt)
          const distSquared = dx * dx + dy * dy;
          const connectionDistSquared =
            config.connectionDistance * config.connectionDistance;

          if (distSquared < connectionDistSquared) {
            const distance = Math.sqrt(distSquared); // Only calculate sqrt when needed
            const opacity = 1 - distance / config.connectionDistance;
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(otherParticle.x, otherParticle.y);
            context.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`;
            context.lineWidth = 0.4;
            context.stroke();
          }
        }
      }
    });

    // Continue animation
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  // Start animation
  const startAnimation = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 z-0 ${className}`}
      style={{ pointerEvents: "none" }}
    />
  );
};

export default ElegantBackground;
