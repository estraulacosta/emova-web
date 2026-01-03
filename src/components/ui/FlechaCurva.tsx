"use client";
import React from "react";
import { motion } from "framer-motion";

interface FlechaCurvaProps {
  color?: string;
  strokeWidth?: number;
  className?: string;
}

const FlechaCurva: React.FC<FlechaCurvaProps> = ({
  color = "#222",
  strokeWidth = 2,
  className = "",
}) => (
  <motion.svg
    width="100%"
    height="120"
    viewBox="0 0 1000 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ minWidth: 320, maxWidth: 1000 }}
    initial={{ opacity: 0, pathLength: 0 }}
    whileInView={{ opacity: 1, pathLength: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1.5, ease: "easeInOut" }}
  >
    {/* Flecha de arriba derecha a abajo izquierda */}
    <motion.path
      d="M950 20 Q950 110 500 110 Q50 110 50 100"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeDasharray="8 6"
      fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
    <motion.polyline
      points="50,100 60,110 50,120"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3, delay: 1.3 }}
    />
  </motion.svg>
);

export default FlechaCurva;
