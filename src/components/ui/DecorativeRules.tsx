"use client";

import { motion } from "framer-motion";

export default function DecorativeRules() {
  return (
    <div className="w-full py-12 md:py-16 lg:py-20 bg-[#F5F5F5] overflow-hidden">
      <div className="relative w-full">
        <div className="relative w-full" style={{ minHeight: '300px' }}>
          
          {/* SVG con las líneas decorativas en L - Posicionadas a la derecha */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute right-0 top-0 w-full max-w-sm md:max-w-md lg:max-w-lg"
          >
            <svg 
              width="100%" 
              height="280" 
              viewBox="0 0 350 220" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
              preserveAspectRatio="xMaxYMin meet"
            >
              {/* Primera línea - Verde primario (B9C85E) - Más adelante */}
              <motion.path
                d="M110 70 V10 H400"
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
                style={{transform: "translateX(180px) translateY(65px)"}}
              />
              
              {/* Segunda línea - Verde secundario (9FB350) - Más atrás */}
              <motion.path
                d="M10 140 V80 H340"
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
                style={{transform: "translateX(250px) translateY(10px)"}}
              />
            </svg>
          </motion.div>

          {/* Contenido de texto - Centrado */}
          <div className="container mx-auto px-4 md:px-6 max-w-6xl relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid-sistema items-center pt-8 md:pt-12"
            >
              <div className="col-span-m-3 col-span-t-5 col-span-d-12 text-center">
                <h3 className="text-xl md:text-2xl lg:text-4xl font-playfair font-bold text-emova-primary mb-6 md:mb-8">
                  ¿Cómo puedes arreglar lo que no puedes medir?
                </h3>
              </div>
            </motion.div>
          </div>

          {/* Imagen de la regla - Ancho completo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="relative w-full mt-8 md:mt-12"
          >
            <img 
              src="/assets/Regla.png" 
              alt="Regla de medición" 
              className="w-full h-auto object-cover drop-shadow-lg"
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
}
