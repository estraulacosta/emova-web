"use client";

import { motion } from "framer-motion";

export default function DecorativeRules() {
  return (
    <>
      <div className="w-full py-12 md:py-16 lg:py-20 bg-emova-bg-grey overflow-hidden">
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
                  stroke="currentColor"
                  className="text-emova-primary"
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
                  stroke="currentColor"
                  className="text-emova-tertiary"
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

      <div className="w-full bg-emova-primary py-10 md:py-20" style={{ paddingBottom: '100px' }}>
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          
          {/* Título y descripción - Responsive */}
          <div className="grid-sistema mb-12 md:mb-16 lg:mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-m-3 col-span-t-5 col-span-d-12 text-white font-bold text-center font-playfair text-2xl md:text-3xl lg:text-[46px] lg:leading-[51px]"
              style={{ letterSpacing: '-0.92px' }}
            >
              La solución: Diagnóstico Neuroemocional Científico
            </motion.h2>
          </div>

          <div className="grid-sistema mb-12 md:mb-16 lg:mb-0">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="col-span-m-3 col-span-t-5 col-span-d-8 col-start-d-3 text-white text-center font-noto text-base md:text-lg lg:text-xl"
            >
              Nuestro Diagnóstico Neuroemocional es la radiografía completa de la inteligencia emocional de tu organización. No es una encuesta superficial, es un análisis científico que revela:
            </motion.p>
          </div>

          {/* Versión Desktop con SVG - Solo visible en lg+ */}
          <div className="hidden lg:block relative mx-auto top-0 md:top-0 lg:top-[-200px]" style={{ maxWidth: '1440px', minHeight: '1850px' }}>
            <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
              {/* Línea horizontal desde círculos izquierda hasta media luna */}
              <motion.line
                x1="345" y1="469" x2="712" y2="469"
                stroke="currentColor"
                className="text-emova-grey"
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
                d="M896 469 L1280 469 Q1320 469 1320 509 L1320 1106 Q1320 1146 1280 1146 L1150 1146"
                stroke="currentColor"
                className="text-emova-grey"
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
                d="M 90 1146 L 360 1146 M 580 1146 L 920 1146 M 90 1146 Q 50 1146 50 1186 L 50 1720"
                stroke="currentColor"
                className="text-emova-grey"
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
                points="50,1730 43,1715 57,1715"
                fill="currentColor"
                className="text-emova-grey"
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
                <circle cx="850" cy="469" r="58" fill="currentColor" className="text-emova-primary"/>
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
                fill="currentColor"
                className="text-emova-grey"
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
              className="absolute text-emova-grey"
              style={{ left: '167px', top: '614px', width: '363px' }}
            >
              <h3 className="font-bold mb-3 font-playfair" style={{ fontSize: '32px', lineHeight: '32px' }}>
                Mapa de desconexiones críticas
              </h3>
              <p className="font-noto" style={{ fontSize: '16px', lineHeight: '26px' }}>
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
              className="absolute text-emova-grey"
              style={{ left: '734px', top: '598px', width: '381px' }}
            >
              <h3 className="font-bold mb-3 font-playfair" style={{ fontSize: '32px', lineHeight: '32px' }}>
                Análisis de carencias en inteligencia humana
              </h3>
              <p className="font-noto" style={{ fontSize: '16px', lineHeight: '26px' }}>
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
              className="absolute text-emova-grey"
              style={{ left: '392px', top: '1294px', width: '332px' }}
            >
              <h3 className="font-bold mb-3 font-playfair" style={{ fontSize: '32px', lineHeight: '32px' }}>
                Radiografía de cultura organizacional
              </h3>
              <p className="font-noto" style={{ fontSize: '16px', lineHeight: '26px' }}>
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
              className="absolute text-emova-grey"
              style={{ left: '965px', top: '1299px', width: '298px' }}
            >
              <h3 className="font-bold mb-3 font-playfair" style={{ fontSize: '32px', lineHeight: '32px' }}>
                Impacto financiero real
              </h3>
              <p className="font-noto" style={{ fontSize: '16px', lineHeight: '26px' }}>
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
              className="absolute text-white uppercase font-playfair"
              style={{
                left: '0px',
                top: '1785px',
                fontSize: '32px',
                lineHeight: '20px',
                letterSpacing: '1.68px',
                fontWeight: 500
              }}
            >
              Lo que recibes al final
            </motion.p>
          </div>

          {/* Versión Tablet y Móvil - Grid responsive */}
          <div className="lg:hidden">
            <div className="grid-sistema gap-8 md:gap-12">
              
              {/* Sección 1: Mapa de desconexiones críticas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="col-span-m-3 col-span-t-5 bg-white rounded-3xl p-6 md:p-8"
              >
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-emova-primary"
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
                      className="absolute -top-2 -right-2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-emova-primary"
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                      className="absolute -bottom-2 -left-2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-emova-primary"
                    />
                  </div>
                </div>
                <h3 className="font-bold mb-3 font-playfair text-emova-grey text-xl md:text-2xl lg:text-3xl text-center">
                  Mapa de desconexiones críticas
                </h3>
                <p className="font-noto text-emova-grey text-sm md:text-base leading-relaxed">
                  • Identificamos las 5 fracturas emocionales que más impactan tu negocio<br/>
                  • Localizamos dónde se pierden los talentos antes de renunciar<br/>
                  • Detectamos los puntos de fricción relacional que limitan productividad
                </p>
              </motion.div>

              {/* Sección 2: Análisis de carencias en inteligencia humana */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="col-span-m-3 col-span-t-5 bg-white rounded-3xl p-6 md:p-8"
              >
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-emova-primary"
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                </div>
                <h3 className="font-bold mb-3 font-playfair text-emova-grey text-xl md:text-2xl lg:text-3xl text-center">
                  Análisis de carencias en inteligencia humana
                </h3>
                <p className="font-noto text-emova-grey text-sm md:text-base leading-relaxed">
                  • Evaluamos nivel de inteligencia emocional por equipos y liderazgos<br/>
                  • Medimos capacidad de comunicación consciente y empática<br/>
                  • Diagnosticamos habilidades de autorregulación emocional
                </p>
              </motion.div>

              {/* Sección 3: Radiografía de cultura organizacional */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="col-span-m-3 col-span-t-5 bg-white rounded-3xl p-6 md:p-8"
              >
                <div className="flex justify-center mb-6">
                  <div className="relative flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-emova-primary absolute"
                      style={{ top: '0', left: '50%', transform: 'translateX(-50%)' }}
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-emova-primary absolute"
                      style={{ bottom: '0', left: '20%' }}
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.7 }}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-emova-primary absolute"
                      style={{ bottom: '0', right: '20%' }}
                    />
                    <div className="w-24 h-24 md:w-28 md:h-28"></div>
                  </div>
                </div>
                <h3 className="font-bold mb-3 font-playfair text-emova-grey text-xl md:text-2xl lg:text-3xl text-center">
                  Radiografía de cultura organizacional
                </h3>
                <p className="font-noto text-emova-grey text-sm md:text-base leading-relaxed">
                  • Analizamos rituales, dinámicas y patrones relacionales tóxicos<br/>
                  • Identificamos tóxicas emocionalmente desconectadas<br/>
                  • Evaluamos nivel de seguridad psicológica en equipos
                </p>
              </motion.div>

              {/* Sección 4: Impacto financiero real */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="col-span-m-3 col-span-t-5 bg-white rounded-3xl p-6 md:p-8"
              >
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-emova-primary"
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.7 }}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-emova-grey absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                </div>
                
                <h3 className="font-bold mb-3 font-playfair text-emova-grey text-xl md:text-2xl lg:text-3xl text-center">
                  Impacto financiero real
                </h3>
                <p className="font-noto text-emova-grey text-sm md:text-base leading-relaxed">
                  • Calculamos el costo exacto de cada carencia detectada<br/>
                  • Proyectamos pérdidas futuras si no se actúa<br/>
                  • Cuantificamos el ROI potencial de activar la inteligencia emocional
                </p>
              </motion.div>

              <motion.div className="col-span-m-3 col-span-t-5 rounded-3xl p-6 md:p-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                  className="text-white uppercase font-playfair"
                  style={{
                    left: '0px',
                    top: '0px',
                    fontSize: '23px',
                    lineHeight: '20px',
                    letterSpacing: '1.68px',
                    fontWeight: 500
                  }}
                >
                  Lo que recibes al final
                </motion.p>
              </motion.div>
            </div>

          </div>

        </div>
      </div>

      {/* Sección con burbuja final */}
      <div className="w-full py-8 md:py-12 lg:py-16 relative bg-[#F5F5F5]" style={{ zIndex: 10 }}>
        
        {/* Versión Desktop */}
        <div className="hidden lg:block relative mx-auto" style={{ maxWidth: '1440px', minHeight: '800px' }}>
          
          {/* SVG Burbuja de fondo */}
          <div className="absolute" style={{ left: '-50px', top: '-450px', width: '938px', height: '938px', zIndex: 1 }}>
            <img 
              src="/assets/burbuja_final2.svg" 
              alt="Burbuja decorativa" 
              style={{ width: '100%', height: '100%'}}
            />
          </div>

          {/* Contenido sobre la burbuja */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute z-10"
            style={{ left: '125px', top: '-200px', width: '650px' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-emova-grey text-left font-playfair" style={{ lineHeight: '1.2' }}>
              Reporte ejecutivo completo
              <br />
              <span className="text-emova-primary">(valor $2,000)</span>
            </h2>
          </motion.div>

          {/* Botón al lado de la burbuja */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute z-10"
            style={{ right: '100px', top: '-200px' }}
          >
            <a
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emova-primary font-semibold rounded-full hover:bg-emova-secondary transition-colors"
            >
              Agenda tu diagnóstico neuroemocional gratuito
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>

        </div>

        {/* Versión Móvil y Tablet */}
        <div className="lg:hidden container mx-auto px-4 md:px-6 relative py-8">
          {/* Burbuja decorativa de fondo */}
          <div className="absolute left-10 top-[-75] w-100 h-100 md:w-[500px] md:h-[500px] -translate-x-12 -translate-y-24 md:-translate-y-32 opacity-100 pointer-events-none z-0">
            <img 
              src="/assets/burbuja_final2.svg" 
              alt="Burbuja decorativa" 
              className="w-full h-full object-contain"
            />
          </div>

          <div className="grid-sistema gap-6 md:gap-8 relative z-10">
            
            {/* Título con decoración */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-m-3 col-span-t-5 text-left"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-emova-grey font-playfair mb-2">
                Reporte ejecutivo completo
              </h2>
              <p className="text-xl md:text-2xl font-bold text-emova-primary font-playfair mb-6">
                (valor $2,000)
              </p>
            </motion.div>

            {/* Botón CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="col-span-m-3 col-span-t-5 flex justify-center md:justify-start"
            >
              <a
                href="/diagnostico"
                className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white text-emova-primary font-semibold rounded-full hover:bg-gray-50 transition-colors text-sm md:text-base"
              >
                Agenda tu diagnóstico neuroemocional gratuito
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>

          </div>
        </div>

      </div>

      {/* Sección de tarjetas */}
      <div className="w-full bg-emova-primary relative lg:mt-[-550px]" style={{ zIndex: 20 }}>
        <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-7xl">

          {/* Grid sistema responsivo para las tarjetas */}
          <div className="grid-sistema gap-6 md:gap-8 pb-16 md:pb-24 relative top-[-50] lg:top-[-300px] h-auto lg:h-[200px]">
            
            {/* Tarjeta 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-m-3 col-span-t-5 col-span-d-4 bg-white rounded-3xl p-6 md:p-8 lg:py-28"
            >
              <h3 className="text-lg md:text-xl font-bold text-emova-grey mb-3 md:mb-4 font-playfair">Sección 1</h3>
              <p className="text-emova-grey mb-4 md:mb-6 font-noto text-sm md:text-base">Estado Actual de tu Infraestructura Humana</p>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emova-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-emova-grey font-noto text-sm md:text-base">Dashboard visual de fortalezas y carencias por área</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emova-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-emova-grey font-noto text-sm md:text-base">Índice de Inteligencia Emocional Organizacional (IIEO)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emova-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-emova-grey font-noto text-sm md:text-base">Mapa de riesgos emocionales por equipos</span>
                </li>
              </ul>
            </motion.div>

            {/* Tarjeta 2 - Destacada */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="col-span-m-3 col-span-t-5 col-span-d-4 bg-emova-tertiary rounded-3xl p-6 md:p-8 lg:py-28"
            >
              <h3 className="text-lg md:text-xl font-bold text-emova-secondary mb-3 md:mb-4 font-playfair">Sección 2</h3>
              <p className="text-emova-secondary mb-4 md:mb-6 font-noto text-sm md:text-base">Análisis de Impacto Financiero</p>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emova-secondary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-emova-secondary font-noto text-sm md:text-base">Costo actual de las carencias detectadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emova-secondary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-emova-secondary font-noto text-sm md:text-base">Proyección de pérdidas a 12 meses sin intervención</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emova-secondary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-emova-secondary font-noto text-sm md:text-base">ROI estimado de plan de activación</span>
                </li>
              </ul>
            </motion.div>

            {/* Tarjeta 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="col-span-m-3 col-span-t-5 col-span-d-4 bg-white rounded-3xl p-6 md:p-8 lg:py-28"
            >
              <h3 className="text-lg md:text-xl font-bold text-emova-grey mb-3 md:mb-4 font-playfair">Sección 3</h3>
              <p className="text-emova-grey mb-4 md:mb-6 font-noto text-sm md:text-base">Plan de Acción de Activación de Humanidad</p>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emova-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-emova-grey font-noto text-sm md:text-base">Las 3 palancas de mayor impacto para tu organización</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emova-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-emova-grey font-noto text-sm md:text-base">Roadmap de implementación en 90 días</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emova-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-emova-grey font-noto text-sm md:text-base">Métricas específicas para medir progreso</span>
                </li>
              </ul>
            </motion.div>

          </div>

          {/* Título dentro de la sección de tarjetas */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl lg:text-6xl font-bold font-playfair text-center mt-1 md:mt-1 lg:mt-24"
          >
            <span className="text-white">¿Por qué este diagnóstico es </span>
            <span className="text-emova-secondary">diferente?</span>
          </motion.h2>

          {/* Contenido con mano y burbujas - Desktop */}
          <div className="hidden lg:block relative mt-16 md:mt-24" style={{ minHeight: '1000px' }}>
            
            {/* Imagen de la mano - Desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute"
              style={{ width: '675px', height: '1050px', left: '-350px', zIndex: 3, transform: 'rotate(-35deg)' }}
            >
              <img 
                src="/assets/like.png" 
                alt="Like" 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </motion.div>

            {/* Burbuja 1 - Arriba derecha */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute bg-emova-secondary rounded-full"
              style={{ 
                width: '280px', 
                height: '280px',
                top: '20px',
                left: '80px',
                zIndex: 2
              }}
            >
            </motion.div>

            {/* Texto Burbuja 1 */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute flex flex-col items-start"
              style={{ 
                top: '80px',
                left: '520px',
                zIndex: 2
              }}
            >
              <div className="flex items-start gap-2 mb-2">
                <span className="text-emova-secondary text-3xl">✱</span>
                <h3 className="text-white font-bold text-2xl font-playfair">No es una encuesta genérica</h3>
              </div>
              <p className="text-white text-lg font-noto" style={{ maxWidth: '500px' }}>
                Utilizamos neurociencia aplicada y metodologías propias desarrolladas en 12 años de experiencia.
              </p>
            </motion.div>

            {/* Burbuja 2 - Derecha grande */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bg-emova-secondary rounded-full flex flex-col items-start justify-center p-10"
              style={{ 
                width: '380px', 
                height: '380px',
                top: '355px',
                right: '100px',
                zIndex: 2
              }}
            >
              <div className="flex items-start gap-2 mb-2">
                <span className="text-emova-tertiary text-3xl">✱</span>
                <h3 className="text-emova-tertiary font-bold text-2xl font-playfair">No son opiniones subjetivas</h3>
              </div>
              <p className="text-emova-tertiary text-xl font-noto">
                Medimos indicadores específicos de inteligencia emocional con herramientas científicamente validadas.
              </p>
            </motion.div>

            {/* Burbuja 3 - Abajo izquierda */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute bg-emova-secondary rounded-full"
              style={{ 
                width: '280px', 
                height: '280px',
                bottom: '100px',
                left: '120px',
                zIndex: 2
              }}
            >
            </motion.div>

            {/* Texto Burbuja 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute flex flex-col items-start"
              style={{ 
                bottom: '150px',
                left: '520px',
                zIndex: 2
              }}
            >
              <div className="flex items-start gap-2 mb-2">
                <span className="text-emova-secondary text-3xl">✱</span>
                <h3 className="text-white font-bold text-2xl font-playfair">No es sólo un reporte</h3>
              </div>
              <p className="text-white text-lg font-noto" style={{ maxWidth: '500px' }}>
                Incluye plan de acción específico y sesión estratégica para implementarlo.
              </p>
            </motion.div>

          </div>

          {/* Contenido con mano y burbujas - Tablet */}
          <div className="hidden md:block lg:hidden relative mt-16 md:mt-24" style={{ minHeight: '1000px' }}>
            
            {/* Imagen de la mano - Tablet (más pequeña y completa) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute"
              style={{ width: '450px', height: '700px', left: '-100px', top: '50px', zIndex: 3, transform: 'rotate(-35deg)' }}
            >
              <img 
                src="/assets/like.png" 
                alt="Like" 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </motion.div>

            {/* Burbuja 1 - Arriba derecha */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute bg-emova-secondary rounded-full"
              style={{ 
                width: '200px', 
                height: '200px',
                top: '20px',
                left: '50px',
                zIndex: 2
              }}
            >
            </motion.div>

            {/* Texto Burbuja 1 */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute flex flex-col items-start"
              style={{ 
                top: '60px',
                left: '340px',
                zIndex: 2
              }}
            >
              <div className="flex items-start gap-2 mb-2">
                <span className="text-emova-secondary text-2xl">✱</span>
                <h3 className="text-white font-bold text-xl font-playfair">No es una encuesta genérica</h3>
              </div>
              <p className="text-white text-base font-noto" style={{ maxWidth: '350px' }}>
                Utilizamos neurociencia aplicada y metodologías propias desarrolladas en 12 años de experiencia.
              </p>
            </motion.div>

            {/* Burbuja 2 - Derecha grande */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bg-emova-secondary rounded-full flex flex-col items-start justify-center p-8"
              style={{ 
                width: '300px', 
                height: '300px',
                top: '355px',
                right: '50px',
                zIndex: 2
              }}
            >
              <div className="flex items-start gap-2 mb-2">
                <span className="text-emova-tertiary text-2xl">✱</span>
                <h3 className="text-emova-tertiary font-bold text-xl font-playfair">No son opiniones subjetivas</h3>
              </div>
              <p className="text-emova-tertiary text-base font-noto">
                Medimos indicadores específicos de inteligencia emocional con herramientas científicamente validadas.
              </p>
            </motion.div>

            {/* Burbuja 3 - Abajo izquierda */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute bg-emova-secondary rounded-full"
              style={{ 
                width: '200px', 
                height: '200px',
                bottom: '100px',
                left: '80px',
                zIndex: 2
              }}
            >
            </motion.div>

            {/* Texto Burbuja 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute flex flex-col items-start"
              style={{ 
                bottom: '150px',
                left: '340px',
                zIndex: 2
              }}
            >
              <div className="flex items-start gap-2 mb-2">
                <span className="text-emova-secondary text-2xl">✱</span>
                <h3 className="text-white font-bold text-xl font-playfair">No es sólo un reporte</h3>
              </div>
              <p className="text-white text-base font-noto" style={{ maxWidth: '350px' }}>
                Incluye plan de acción específico y sesión estratégica para implementarlo.
              </p>
            </motion.div>

          </div>

          {/* Versión Móvil - Grid Sistema */}
          <div className="md:hidden mt-12">
            <div className="grid-sistema gap-8">
              
              {/* Tarjeta 1 - No es una encuesta genérica */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="col-span-m-3 bg-emova-secondary rounded-3xl p-6 relative overflow-hidden"
              >
                {/* Círculo decorativo */}
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-2 mb-3">
                    <span className="text-emova-primary text-2xl">✱</span>
                    <h3 className="text-white font-bold text-xl font-playfair">No es una encuesta genérica</h3>
                  </div>
                  <p className="text-white font-noto text-sm leading-relaxed">
                    Utilizamos neurociencia aplicada y metodologías propias desarrolladas en 12 años de experiencia.
                  </p>
                </div>
              </motion.div>

              {/* Tarjeta 2 - No son opiniones subjetivas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="col-span-m-3 bg-emova-secondary rounded-3xl p-6 relative overflow-hidden"
              >
                {/* Círculo decorativo más grande */}
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-emova-tertiary opacity-30 rounded-full"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-2 mb-3">
                    <span className="text-emova-tertiary text-2xl">✱</span>
                    <h3 className="text-emova-tertiary font-bold text-xl font-playfair">No son opiniones subjetivas</h3>
                  </div>
                  <p className="text-white font-noto text-sm leading-relaxed">
                    Medimos indicadores específicos de inteligencia emocional con herramientas científicamente validadas.
                  </p>
                </div>
              </motion.div>

              {/* Tarjeta 3 - No es sólo un reporte */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="col-span-m-3 bg-emova-secondary rounded-3xl p-6 relative overflow-hidden"
              >
                {/* Círculo decorativo */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-emova-tertiary opacity-20 rounded-full"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-2 mb-3">
                    <span className="text-emova-tertiary text-2xl">✱</span>
                    <h3 className="text-white font-bold text-xl font-playfair">No es sólo un reporte</h3>
                  </div>
                  <p className="text-white font-noto text-sm leading-relaxed">
                    Incluye plan de acción específico y sesión estratégica para implementarlo.
                  </p>
                </div>
              </motion.div>

              {/* Imagen de like decorativa */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="col-span-m-3 flex justify-center mt-4"
              >
                <img 
                  src="/assets/like.png" 
                  alt="Like" 
                  className="relative w-80 h-80 top-12 left-[-90] object-contain opacity-100"
                />
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}
