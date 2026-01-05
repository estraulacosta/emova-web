"use client";

import { motion } from "framer-motion";

export default function DecorativeRules() {
  return (
    <>
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

      <div className="w-full bg-[#B9C85E] py-16 md:py-24">
        <div className="relative mx-auto" style={{ maxWidth: '1440px', minHeight: '1850px', paddingLeft: '50px', paddingRight: '50px' }}>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute left-1/2 -translate-x-1/2 text-white font-bold text-center"
            style={{
              top: '0px',
              width: '1064px',
              fontFamily: 'Archivo, sans-serif',
              fontSize: '46px',
              lineHeight: '51px',
              letterSpacing: '-0.92px'
            }}
          >
            La solución: Diagnóstico Neuroemocional Científico
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="absolute left-1/2 -translate-x-1/2 text-white text-center"
            style={{
              top: '142px',
              width: '815px',
              fontFamily: 'Archivo, sans-serif',
              fontSize: '20px',
              lineHeight: '24px'
            }}
          >
            Nuestro Diagnóstico Neuroemocional es la radiografía completa de la inteligencia emocional de tu organización. No es una encuesta superficial, es un análisis científico que revela:
          </motion.p>

          <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
            {/* Línea horizontal desde círculos izquierda hasta media luna */}
            <motion.line
              x1="345" y1="469" x2="712" y2="469"
              stroke="#575756"
              strokeWidth="2"
              strokeDasharray="6 8"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />

            {/* Línea desde media luna hacia derecha, bajando y conectando con círculo de Impacto */}
            <motion.path
              d="M896 469 L1280 469 Q1320 469 1320 509 L1320 1106 Q1320 1146 1280 1146 L980 1146"
              stroke="#575756"
              strokeWidth="2"
              strokeDasharray="6 8"
              strokeLinecap="round"
              fill="none"
              strokeLinejoin="round"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />

            {/* Línea horizontal conectando círculos inferiores con círculo derecha y bajando */}
            <motion.path
              d="M 90 1146 L 360 1146 M 580 1146 L 920 1146 M 90 1146 L 90 1720"
              stroke="#575756"
              strokeWidth="2"
              strokeDasharray="6 8"
              strokeLinecap="round"
              fill="none"
              strokeLinejoin="round"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            />
            <motion.polygon
              points="90,1730 83,1715 97,1715"
              fill="#575756"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 1.0 }}
            />

            <motion.circle
              cx="243" cy="469"
              r="76"
              fill="white"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            />
            <motion.circle
              cx="332" cy="410"
              r="31"
              fill="white"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
            />
            <motion.circle
              cx="152" cy="525"
              r="31"
              fill="white"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
            />

            <motion.g
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
            >
              <circle cx="810" cy="469" r="76" fill="white"/>
              <circle cx="850" cy="469" r="58" fill="#B9C85E"/>
            </motion.g>

            <motion.circle
              cx="1038" cy="1146"
              r="76"
              fill="white"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
            />
            <motion.circle
              cx="1038" cy="1146"
              r="31"
              fill="#575756"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.7 }}
            />

            <motion.circle
              cx="432" cy="1167"
              r="39.5"
              fill="white"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.8 }}
            />
            <motion.circle
              cx="511" cy="1167"
              r="39.5"
              fill="white"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.9 }}
            />
            <motion.circle
              cx="471" cy="1099"
              r="39.5"
              fill="white"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 1.0 }}
            />
          </svg>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="absolute text-[#575756]"
            style={{ left: '167px', top: '614px', width: '363px' }}
          >
            <h3 className="font-bold mb-3" style={{ fontSize: '32px', lineHeight: '32px', fontFamily: 'Archivo, sans-serif' }}>
              Mapa de desconexiones críticas
            </h3>
            <p style={{ fontSize: '16px', lineHeight: '26px', fontFamily: 'Archivo, sans-serif' }}>
              • Identificamos las 5 fracturas emocionales que más impactan tu negocio<br/>
              • Localizamos dónde se pierden los talentos antes de renunciar<br/>
              • Detectamos los puntos de fricción relacional que limitan productividad
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute text-[#575756]"
            style={{ left: '734px', top: '598px', width: '381px' }}
          >
            <h3 className="font-bold mb-3" style={{ fontSize: '32px', lineHeight: '32px', fontFamily: 'Archivo, sans-serif' }}>
              Análisis de carencias en inteligencia humana
            </h3>
            <p style={{ fontSize: '16px', lineHeight: '26px', fontFamily: 'Archivo, sans-serif' }}>
              • Evaluamos nivel de inteligencia emocional por equipos y liderazgos<br/>
              • Medimos capacidad de comunicación consciente y empática<br/>
              • Diagnosticamos habilidades de autorregulación emocional
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="absolute text-[#575756]"
            style={{ left: '392px', top: '1294px', width: '332px' }}
          >
            <h3 className="font-bold mb-3" style={{ fontSize: '32px', lineHeight: '32px', fontFamily: 'Archivo, sans-serif' }}>
              Radiografía de cultura organizacional
            </h3>
            <p style={{ fontSize: '16px', lineHeight: '26px', fontFamily: 'Archivo, sans-serif' }}>
              • Analizamos rituales, dinámicas y patrones relacionales tóxicos<br/>
              • Identificamos tóxicas emocionalmente desconectadas<br/>
              • Evaluamos nivel de seguridad psicológica en equipos
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="absolute text-[#575756]"
            style={{ left: '965px', top: '1299px', width: '298px' }}
          >
            <h3 className="font-bold mb-3" style={{ fontSize: '32px', lineHeight: '32px', fontFamily: 'Archivo, sans-serif' }}>
              Impacto financiero real
            </h3>
            <p style={{ fontSize: '16px', lineHeight: '26px', fontFamily: 'Archivo, sans-serif' }}>
              • Calculamos el costo exacto de cada carencia detectada<br/>
              • Proyectamos pérdidas futuras si no se actúa<br/>
              • Cuantificamos el ROI potencial de activar la inteligencia emocional
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="absolute text-white uppercase"
            style={{
              left: '0px',
              top: '1785px',
              fontSize: '32px',
              lineHeight: '20px',
              letterSpacing: '1.68px',
              fontFamily: 'Archivo, sans-serif',
              fontWeight: 500
            }}
          >
            Lo que recibes al final
          </motion.p>

        </div>
      </div>
    </>
  );
}
