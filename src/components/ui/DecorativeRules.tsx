"use client";

import { motion } from "framer-motion";

export default function DecorativeRules() {
  return (
    <div className="w-full py-12 md:py-16 lg:py-20 bg-[#F5F5F5] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="relative w-full" style={{ minHeight: '250px' }}>
          
          {/* SVG único con ambas líneas */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full"
          >
            <svg 
              width="100%" 
              height="250" 
              viewBox="0 0 1200 250" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Primera línea - Verde primario */}
              <motion.path
                d="M50 200 V100 H400"
                stroke="#B9C85E"
                strokeWidth="2"
                strokeDasharray="4 4"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  pathLength: { duration: 1.5, delay: 0.5, ease: "easeInOut" },
                  opacity: { duration: 0.3, delay: 0.5 }
                }}
              />
              
              {/* Segunda línea - Verde secundario */}
              <motion.path
                d="M800 200 V50 H1150"
                stroke="#9FB350"
                strokeWidth="2"
                strokeDasharray="4 4"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  pathLength: { duration: 1.5, delay: 0.7, ease: "easeInOut" },
                  opacity: { duration: 0.3, delay: 0.7 }
                }}
              />
            </svg>
          </motion.div>

          {/* Contenido de texto central */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="absolute inset-0 flex items-center justify-center text-center px-4"
          >
            <div className="max-w-3xl">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-emova-grey mb-4">
                {/* Agrega aquí el título */}
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-emova-grey font-noto">
                {/* Agrega aquí el texto descriptivo */}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
