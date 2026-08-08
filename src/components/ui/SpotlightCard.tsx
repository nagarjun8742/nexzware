import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse positions relative to the card container
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Tilt spring settings for ultra-smooth buttery rotations
  const rotateXSpring = useSpring(0, { damping: 25, stiffness: 120, mass: 0.5 });
  const rotateYSpring = useSpring(0, { damping: 25, stiffness: 120, mass: 0.5 });

  // Map mouse positions to rotational angles
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Position relative to card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);

    // Calculate rotation (-10 to 10 degrees)
    const rX = ((y - height / 2) / height) * -10;
    const rY = ((x - width / 2) / width) * 10;

    rotateXSpring.set(rX);
    rotateYSpring.set(rY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateXSpring.set(0);
    rotateYSpring.set(0);
  };

  // Construct spotlight CSS background gradient string
  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(7, 92, 255, 0.15), rgba(109, 93, 252, 0.08) 40%, transparent 80%)`
  );

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full rounded-3xl ${className}`}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full rounded-3xl"
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Glowing Spotlight Overlay */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
          style={{
            background,
            mixBlendMode: "screen",
          }}
        />

        {/* Shiny border highlight overlay */}
        <div className="absolute inset-0 rounded-3xl border border-white/20 pointer-events-none z-20 group-hover:border-white/40 transition-colors duration-300" />

        {/* Actual card content */}
        <div className="w-full h-full transform translate-z-[20px] transition-transform duration-300">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
