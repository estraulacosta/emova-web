"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ModeloSection() {
  return (
    <section className="relative bg-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-noto text-emova-grey">
            Nuestro modelo está diseñado sobre esta{" "}
            <span className="text-emova-primary font-bold">evidencia científica:</span>
          </h2>
        </motion.div>

        {/* Row 1 - Neurociencia */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-12 gap-6 md:gap-8 items-center mb-12 md:mb-16 lg:mb-20">
          {/* Image Left */}
          <div className="col-span-3 md:col-span-2 lg:col-span-4 flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Green Circle */}
              <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-emova-tertiary flex items-center justify-center shadow-lg">
                <img
                  src="/assets/cerebro-arriba.png"
                  alt="Cerebro"
                  className="relative w-32 h-32 md:w-40 md:h-40 lg:w-55 lg:h-55 object-contain bottom-0 right-0 md:-bottom-2 md:-right-2 lg:-bottom-10 lg:-right-4"
                />
              </div>
            </motion.div>
          </div>
          {/* Text Right */}
          <div className="col-span-3 md:col-span-3 lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-emova-grey text-base md:text-lg lg:text-xl flex items-start gap-2"
            >
              <span className="text-emova-primary font-bold text-xl">★</span>
              <span>Neurociencia aplicada para crear cambios cerebrales reales</span>
            </motion.p>
          </div>
        </div>

        {/* Row 2 - Psicología Organizacional */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-12 gap-6 md:gap-8 items-center mb-12 md:mb-16 lg:mb-20">
          {/* Text Left */}
          <div className="col-span-3 md:col-span-3 lg:col-span-7 order-2 md:order-1">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-emova-grey text-base md:text-lg lg:text-xl flex items-start gap-2 md:justify-end"
            >
              <span className="text-emova-primary font-bold text-xl">★</span>
              <span>Psicología organizacional para transformar culturas</span>
            </motion.p>
          </div>
          {/* Image Right - Coming from right */}
          <div className="col-span-3 md:col-span-2 lg:col-span-5 order-1 md:order-2 relative flex justify-center md:justify-end items-center overflow-visible">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Large Green Circle with overflow effect */}
              <div className="relative w-75 h-75 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] md:-mr-20 lg:-mr-32">
                <div className="absolute inset-0 rounded-full bg-emova-tertiary shadow-2xl overflow-visible flex items-center justify-center" style={{ transform: 'translateX(-10%)' }}>
                  {/* Green darker ball inside - positioned between fingers */}
                  <div 
                    className="absolute w-18 h-18 md:w-20 md:h-20 lg:w-30 lg:h-30 rounded-full bg-emova-secondary shadow-lg z-20" 
                    style={{ top: '30%', left: '27%' }}
                  ></div>
                  <img
                    src="/assets/mano-agarrando.png"
                    alt="Mano agarrando"
                    className="w-[120%] h-[120%] object-contain relative z-10"
                    style={{ transform: 'translateX(30%) translateY(12%)' }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Row 3 - Medición de Impacto */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-12 gap-6 md:gap-8 items-center mb-12 md:mb-16">
          {/* Image Left - Coming from left */}
          <div className="col-span-3 md:col-span-2 lg:col-span-5 relative flex justify-center md:justify-start items-center overflow-visible">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Container with overflow effect */}
              <div className="relative w-80 h-55 md:w-96 md:h-96 lg:w-[550px] lg:h-[550px] md:-ml-20 lg:-ml-32">
                {/* Dotted Border Box - Only around the small circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative inline-block p-2 h-40 w-40 md:h-48 md:w-48 lg:h-59 lg:w-59">
                    {/* SVG Dotted Border - Green version, smaller */}
                    <svg 
                      className="absolute top-[-20] right-21 md:top-0 md:right-0 lg:top-12 lg:right-33 w-20 h-30 md:w-15 md:h-24 lg:w-36 lg:h-45 z-35" 
                      viewBox="0 0 134 214" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                      style={{transform: 'translateX(43%) translateY(20%)' }}
                    >
                      <path 
                        d="M1 213.5V1H132.5V213.5" 
                        stroke="var(--color-emova-secondary)" 
                        strokeWidth="2" 
                        strokeDasharray="4 4"
                      />
                    </svg>
                    
                    {/* Small green circle with darker center */}
                    <div className="relative z-10 w-40 h-40 bottom-15 left-[-7] md:bottom-1/2 md:left-1/2 lg:bottom-0 lg:left-0 md:w-24 md:h-24 lg:w-59 lg:h-59 rounded-full bg-emova-tertiary flex items-center justify-center shadow-lg" style={{ transform: 'translateX(-12%) translateY(45%)' }}>
                      <div className="relative w-20 h-20 right-[-2] top-2 md:right-0 md:top-0 lg:right-4 lg:top-2 md:w-12 md:h-12 lg:w-35 lg:h-35 rounded-full bg-emova-secondary" style={{ transform: 'translateX(8.5%) translateY(1%)' }}></div>
                    </div>
                  </div>
                </div>
                
                {/* Large ruler image */}
                <img
                  src="/assets/regla-cortada.png"
                  alt="Regla"
                  className="absolute bottom-0 left-0 w-[150%] h-auto md:w-[150%] lg:w-[150%] object-contain"
                  style={{ transform: 'translateX(-15%)' }}
                />
              </div>
            </motion.div>
          </div>
          {/* Text Right */}
          <div className="col-span-3 md:col-span-3 lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative left-0 md:left-0 lg:left-[-240] text-emova-grey text-base md:text-lg lg:text-xl flex items-start gap-2"
            >
              <span className="text-emova-primary font-bold text-xl">★</span>
              <span>Medición de impacto para garantizar ROI comprobado</span>
            </motion.p>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-emova-primary hover:bg-emova-secondary text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
          >
            Convierte esta ciencia en ventaja competitiva para tu organización
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
