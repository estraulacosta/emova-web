"use client";

import { motion } from "framer-motion";

export default function Solution() {
  return (
    <section className="pb-32 md:pb-48 bg-emova-primary overflow-visible relative">
      <div className="container mx-auto px-6 relative">
        
        <div className="relative max-w-5xl mx-auto">
           {/* People Image */}
           <motion.div
             initial={{ y: 100, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="absolute top-0 left-0 right-0 z-30 flex justify-center pointer-events-none"
           >
              <img 
                src="/assets/Personas%20sentadas.png" 
                alt="Personas sentadas" 
                className="w-full max-w-none h-auto object-contain -translate-y-[62%]"
              />
           </motion.div>

           {/* Bubble */}
           <motion.div
             initial={{ y: -100, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="relative z-10"
           >
              <div className="relative w-full flex justify-center">
                {/* SVG Background */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-full max-w-none z-0 -translate-y-[20%]">
                   <img 
                     src="/assets/burbuja_final.svg"
                     alt="Fondo burbuja"
                     className="w-full h-auto"
                   />
                </div>

                {/* Content */}
                <div
                  className="solution-bubble-content relative z-10 pt-0 min-[375px]:pt-3 sm:pt-6 md:pt-12 pb-10 px-6 sm:px-8 md:px-12 text-center max-w-3xl mx-auto"
                  style={{
                    ...(typeof window !== 'undefined' && window.innerWidth >= 1024 && window.innerWidth <= 1050
                      ? { paddingLeft: '6vw', paddingRight: '6vw', maxWidth: '92vw', marginBottom: 100 }
                      : {})
                  }}
                >
                  <h2
                    className="text-base sm:text-xl md:text-6xl font-playfair font-bold mb-2 sm:mb-3 md:mb-10 text-emova-secondary"
                    style={{
                      ...(typeof window !== 'undefined' && window.innerWidth >= 1024 && window.innerWidth <= 1050
                        ? { fontSize: '5rem', color: '#575756', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-1px', textAlign: 'center', marginBottom: '2.5rem' }
                        : {})
                    }}
                  >
                    Solución
                  </h2>
                  <div
                    className="space-y-2 sm:space-y-3 md:space-y-6 text-emova-grey"
                  >
                    <p
                      className="text-[9px] min-[375px]:text-[11px] sm:text-sm md:text-2xl font-libre leading-tight md:leading-relaxed"
                      style={{
                        ...(typeof window !== 'undefined' && window.innerWidth >= 1024 && window.innerWidth <= 1050
                          ? { fontSize: '2.2rem', lineHeight: '2.2rem', color: '#575756' }
                          : {})
                      }}
                    >
                      Somos la única Activadora de Inteligencia Emocional Organizacional. No capacitamos personas. Activamos transformación humana.
                    </p>
                    <p
                      className="text-[9px] min-[375px]:text-[11px] sm:text-sm md:text-2xl font-libre leading-tight md:leading-relaxed opacity-90"
                      style={{
                        ...(typeof window !== 'undefined' && window.innerWidth >= 1024 && window.innerWidth <= 1050
                          ? { fontSize: '2.2rem', lineHeight: '2.2rem', color: '#575756' }
                          : {})
                      }}
                    >
                      A diferencia de consultoras tradicionales que entregan contenidos genéricos, nosotros activamos transformaciones neuroemocionales reales mediante nuestro Modelo de Transformación Neuroemocional™.
                    </p>
                  </div>
                </div>
              </div>
           </motion.div>
        </div>

        {/* Resultado */}
        <div className="resultado-section"></div>
      </div>
    </section>
  );
}
