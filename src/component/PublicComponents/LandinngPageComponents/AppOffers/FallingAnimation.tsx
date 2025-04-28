"use client";

import React from "react";
import { motion, Transition, Variants } from "motion/react";

const fallVariant: Variants = {
  hidden: { y: -300, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const fallTransition: Transition = {
  type: "spring",
  stiffness: 30,
  damping: 10,
  duration: 0.8,
};

interface FallingAimateProps {
  children: React.ReactNode;
}

export default function FallingAimate({ children }: FallingAimateProps) {
  return (
    <motion.div
      initial="hidden" // Start above the viewport, invisible :contentReference[oaicite:7]{index=7}
      whileInView="visible" // Animate to 'visible' when scrolled into view :contentReference[oaicite:8]{index=8}
      variants={fallVariant} // Use the defined y/opacity values
      transition={fallTransition} // Spring-like falling animation
      viewport={{ once: true, amount: 0.5 }} // Run once when 50% is visible :contentReference[oaicite:9]{index=9}
    >
      {children}
    </motion.div>
  );
}
