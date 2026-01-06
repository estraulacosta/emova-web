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

      <div className="w-full bg-[#B9C85E] py-16 md:py-24" style={{ paddingBottom: '250px' }}>
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
              d="M896 469 L1280 469 Q1320 469 1320 509 L1320 1106 Q1320 1146 1280 1146 L1150 1146"
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
              d="M 90 1146 L 360 1146 M 580 1146 L 920 1146 M 90 1146 Q 50 1146 50 1186 L 50 1720"
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
              points="50,1730 43,1715 57,1715"
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

      {/* Sección con burbuja final */}
      <div className="w-full py-16 md:py-24 relative" style={{ backgroundColor: '#f7f7f7', zIndex: 10, minHeight: '800px' }}>
        <div className="relative mx-auto" style={{ maxWidth: '1440px' }}>
          
          {/* SVG Burbuja de fondo */}
          <div className="absolute" style={{ left: '-50px', top: '-450px', width: '938px', height: '938px', zIndex: 1 }}>
            <img 
              src="/assets/burbuja_final2.svg" 
              alt="Burbuja decorativa" 
              style={{ width: '100%', height: '100%' }}
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#575756] text-left" style={{ lineHeight: '1.2' }}>
              Reporte ejecutivo completo
              <br />
              <span className="text-[#B9C85E]">(valor $2,000)</span>
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#B9C85E] font-semibold rounded-full hover:bg-gray-50 transition-colors"
            >
              Agenda tu diagnóstico neuroemocional gratuito
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>

        </div>
      </div>

      {/* Sección de tarjetas */}
      <div className="w-full bg-[#B9C85E] py-16 md:py-24 relative" style={{ marginTop: '-400px', zIndex: 20 }}>
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ marginTop: '-325px' }}>
            
            {/* Tarjeta 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8"
              style={{ paddingTop: '112px', paddingBottom: '112px' }}
            >
              <h3 className="text-xl font-bold text-[#575756] mb-4">Sección 1</h3>
              <p className="text-[#575756] mb-6">Estado Actual de tu Infraestructura Humana</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B9C85E] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-[#575756]">Dashboard visual de fortalezas y carencias por área</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B9C85E] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-[#575756]">Índice de Inteligencia Emocional Organizacional (IIEO)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B9C85E] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-[#575756]">Mapa de riesgos emocionales por equipos</span>
                </li>
              </ul>
            </motion.div>

            {/* Tarjeta 2 - Destacada */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#E8F5CB] rounded-3xl p-8"
              style={{ paddingTop: '112px', paddingBottom: '112px' }}
            >
              <h3 className="text-xl font-bold text-[#B9C85E] mb-4">Sección 2</h3>
              <p className="text-[#B9C85E] mb-6">Análisis de Impacto Financiero</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B9C85E] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-[#B9C85E]">Costo actual de las carencias detectadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B9C85E] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-[#B9C85E]">Proyección de pérdidas a 12 meses sin intervención</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B9C85E] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-[#B9C85E]">ROI estimado de plan de activación</span>
                </li>
              </ul>
            </motion.div>

            {/* Tarjeta 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-8"
              style={{ paddingTop: '112px', paddingBottom: '112px' }}
            >
              <h3 className="text-xl font-bold text-[#575756] mb-4">Sección 3</h3>
              <p className="text-[#575756] mb-6">Plan de Acción de Activación de Humanidad</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B9C85E] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-[#575756]">Las 3 palancas de mayor impacto para tu organización</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B9C85E] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-[#575756]">Roadmap de implementación en 90 días</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B9C85E] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-[#575756]">Métricas específicas para medir progreso</span>
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-16 md:mt-24"
          >
            <span className="text-white">¿Por qué este diagnóstico es </span>
            <span className="text-[#E8F5CB]">diferente?</span>
          </motion.h2>

          {/* Contenido con mano y burbujas */}
          <div className="relative mt-16 md:mt-24" style={{ minHeight: '1200px' }}>
            
            {/* Imagen de la mano */}
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
              className="absolute bg-[#E8F5CB] rounded-full"
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
                <span className="text-[#E8F5CB] text-3xl">✱</span>
                <h3 className="text-white font-bold text-2xl">No es una encuesta genérica</h3>
              </div>
              <p className="text-white text-lg" style={{ maxWidth: '500px' }}>
                Utilizamos neurociencia aplicada y metodologías propias desarrolladas en 12 años de experiencia.
              </p>
            </motion.div>

            {/* Burbuja 2 - Derecha grande */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bg-[#E8F5CB] rounded-full flex flex-col items-start justify-center p-10"
              style={{ 
                width: '380px', 
                height: '380px',
                top: '355px',
                right: '100px',
                zIndex: 2
              }}
            >
              <div className="flex items-start gap-2 mb-2">
                <span className="text-[#B9C85E] text-3xl">✱</span>
                <h3 className="text-[#575756] font-bold text-2xl">No son opiniones subjetivas</h3>
              </div>
              <p className="text-[#575756] text-xl">
                Medimos indicadores específicos de inteligencia emocional con herramientas científicamente validadas.
              </p>
            </motion.div>

            {/* Burbuja 3 - Abajo izquierda */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute bg-[#E8F5CB] rounded-full"
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
                <span className="text-[#E8F5CB] text-3xl">✱</span>
                <h3 className="text-white font-bold text-2xl">No es sólo un reporte</h3>
              </div>
              <p className="text-white text-lg" style={{ maxWidth: '500px' }}>
                Incluye plan de acción específico y sesión estratégica para implementarlo.
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </>
  );
}
