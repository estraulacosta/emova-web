"use client";
import React from "react";
import { motion } from "framer-motion";

interface EsferaProps {
  size?: number;
  color?: string;
  className?: string;
}

const Esfera: React.FC<EsferaProps> = ({ size = 80, color = "#05DBED", className }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 291 291"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={className}
  >
    <motion.circle 
      cx="145.5" 
      cy="145.5" 
      r="145.5" 
      fill={color}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
  </motion.svg>
);

export default Esfera;
