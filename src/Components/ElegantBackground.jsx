import React, { useEffect, useRef } from "react";

const ElegantBackground = ({ className = "" }) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const particlesRef = useRef([]);
  const animationFrameRef = useRef(null);

  // Configuration for the particles - optimized for global background
  const config = {
    particleCount: 150,
    particleSize: { min: 1, max: 3 },
    speed: { min: 0.1, max: 0.4 },
    connectionDistance: 200,
    colors: [
      "rgba(255, 255, 255, 0.7)",
      "rgba(220, 220, 220, 0.5)",
      "rgba(200, 200, 200, 0.3)",
    ],
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Initialize canvas context
    contextRef.current = canvas.getContext("2d");
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Start animation
    startAnimation();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Initialize particles
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

    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    particlesRef.current.forEach((particle, index) => {
      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Boundary check
      if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

      // Draw particle
      context.beginPath();
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.fillStyle = particle.color;
      context.fill();

      // Draw connections
      for (let j = index + 1; j < particlesRef.current.length; j++) {
        const otherParticle = particlesRef.current[j];
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < config.connectionDistance) {
          const opacity = 1 - distance / config.connectionDistance;
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(otherParticle.x, otherParticle.y);
          context.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.25})`;
          context.lineWidth = 0.4;
          context.stroke();
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
