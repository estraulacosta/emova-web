"use client";
import { motion } from "framer-motion";

export default function MotionHeader() {
  return (
    <div
      className="w-full bg-[#B9C85E] flex justify-center items-center"
      style={{height: '220px', marginTop: '48px', zIndex: 10, position: 'relative'}}
    >
      <motion.h1
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
        className="text-base sm:text-xl md:text-6xl font-playfair font-bold text-white text-center"
      >
        Método
      </motion.h1>
    </div>
  );
}