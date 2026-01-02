"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import EsferaDoble from "../ui/EsferaDoble";
import EsferasFase2 from "../ui/EsferasFase2";
import EsferasFase3 from "../ui/EsferasFase3";
import EsferasFase4 from "../ui/EsferasFase4";
import EsferasFase5 from "../ui/EsferasFase5";


export default function Method() {
  return (
    <>
      {/* Header animado */}
      <motion.div
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
        className="w-full bg-[#B9C85E] flex justify-center items-center py-6 sm:py-8 md:py-12 lg:h-[220px] mt-20 sm:mt-24 md:mt-12"
        style={{zIndex: 10, position: 'relative'}}
      >
        <motion.h1
          initial={false}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold text-white text-center px-4 mt-[15px] md:mt-[25px] lg:mt-0"
        >
          Método
        </motion.h1>
      </motion.div>
      <div className="relative flex flex-col items-center justify-center min-h-[350px] sm:min-h-[450px] md:min-h-[550px] lg:min-h-[650px] xl:min-h-[700px] bg-white px-2 sm:px-4 md:mt-8 lg:mt-0">
      {/* SVG gráfico principal */}
      <div className="relative w-full flex justify-center items-center z-10 -mt-[30px] sm:-mt-[10px] md:mt-0 lg:mt-5" style={{ minHeight: 350 }}>
        <motion.svg
          width="966"
          height="795"
          viewBox="0 0 966 795"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-w-[102vw] sm:max-w-[98vw] md:max-w-[90vw] lg:max-w-[75vw] xl:max-w-[850px] w-full h-auto -translate-x-[12px] sm:-translate-x-[20px] md:-translate-x-[25px] lg:translate-x-[-20px] xl:translate-x-[-25px]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <g clipPath="url(#clip0_105_7205)">
            <path d="M965.41 393.12C964.22 267.26 911.64 153.69 827.63 72.39L506.9 393.12L832.03 718.25C914.42 636.32 965.43 522.86 965.43 397.48C965.43 396.03 965.42 394.58 965.4 393.12H965.41Z" stroke="#B9C85E" strokeWidth="2" strokeMiterlimit="10"/>
            <path d="M149.71 35.92C58.43 127.66 1.66 253.76 0.5 393.12H506.9L149.71 35.92Z" stroke="#B9C85E" strokeWidth="2" strokeMiterlimit="10"/>
            <path d="M851.07 397.47C851.07 396.01 851.03 394.57 851.01 393.11H734.79C734.82 394.56 734.85 396.01 734.85 397.47C734.85 459.17 709.65 514.98 668.98 555.18L751.16 637.36C812.86 576.12 851.07 491.26 851.07 397.47Z" fill="#9FB350"/>
            <path d="M746.75 153.28C686.05 95.18 603.73 59.48 513.07 59.48C511.01 59.48 508.96 59.52 506.91 59.56C415.56 61.19 333.07 99.05 273.18 159.39L355.36 241.57C394.22 202.26 447.66 177.4 506.91 175.79C508.96 175.73 511.01 175.7 513.07 175.7C571.64 175.7 624.89 198.41 664.54 235.5C706.82 275.05 733.6 330.95 734.8 393.12H851.02C849.83 298.85 810.06 213.88 746.76 153.28H746.75Z" fill="#D9D9D9"/>
            <path d="M668.98 555.18C628.92 594.79 573.85 619.25 513.07 619.25C511.01 619.25 508.96 619.22 506.91 619.16C445.46 617.48 390.26 590.81 351.09 548.94C314 509.3 291.29 456.04 291.29 397.47C291.29 396.01 291.32 394.56 291.35 393.11C292.49 334.05 316.7 280.66 355.36 241.56L273.18 159.38C213.49 219.52 176.28 301.97 175.13 393.11C175.11 394.56 175.07 396.01 175.07 397.47C175.07 488.13 210.77 570.45 268.87 631.15C329.08 694.05 413.36 733.72 506.91 735.39C508.96 735.43 511.01 735.47 513.07 735.47C605.95 735.47 690.07 698 751.16 637.36L668.98 555.18Z" fill="#B9C85E"/>
            <path d="M231.72 117.41C303.61 45.2 403.12 0.5 513.07 0.5C623.02 0.5 717.01 42.76 788.38 111.48" stroke="#B9C85E" strokeWidth="2" strokeMiterlimit="10"/>
            <path d="M792.81 679.13C721.05 750.4 622.2 794.44 513.07 794.44C293.83 794.44 116.1 616.71 116.1 397.47C116.1 395.97 116.1 394.48 116.12 392.99" stroke="#B9C85E" strokeWidth="2" strokeMiterlimit="10"/>
            <path d="M514.12 621.05C637.34 621.05 737.23 521.16 737.23 397.94C737.23 274.72 637.34 174.83 514.12 174.83C390.9 174.83 291.01 274.72 291.01 397.94C291.01 521.16 390.9 621.05 514.12 621.05Z" fill="#F9FAFB"/>
          </g>
          <defs>
            <clipPath id="clip0_105_7205">
              <rect width="965.94" height="794.94" fill="white"/>
            </clipPath>
          </defs>
        </motion.svg>
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center z-20 px-[52px] sm:px-[60px] md:px-[70px] lg:px-6"
          style={{ maxWidth: '300px', margin: '0 auto' }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-playfair font-bold text-[#7A7A7A] text-center mb-1 sm:mb-2 md:mb-2 leading-tight md:leading-tight lg:leading-normal">Modelo de<br/>transformación <span className="text-[#9FB350]">neuroemocional™</span></h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-emova-grey/80 text-center font-noto mb-2 leading-tight md:leading-tight lg:leading-normal px-6 sm:px-5 md:px-6 lg:px-0">El único método que garantiza<br/>cambios neurológicos reales y medibles</p>
        </motion.div>
      </div>
      {/* Manos decorativas posicionadas como el prototipo azul */}
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.8 }}
        className="absolute left-[-125px] sm:left-[-85px] md:left-[-250px] lg:left-[-60px] xl:left-[-70px] top-[-5px] sm:top-[-25px] md:top-[-40px] lg:top-[-120px] xl:top-[-130px] w-[220px] sm:w-[320px] md:w-[420px] lg:w-[620px] xl:w-[700px] pointer-events-none select-none"
        style={{ zIndex: 50 }}
      >
        <Image
          src="/assets/Mano%20C.png"
          alt="Mano C"
          width={1000}
          height={1000}
          style={{ transform: 'scaleX(-1) rotate(-18deg)' }}
        />
      </motion.div>
      {/* Mano derecha: ajustada y rotada para que los dedos toquen el extremo inferior derecho del gráfico */}
      <motion.div
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.8 }}
        className="absolute right-[-185px] bottom-[-45px] sm:right-[-225px] sm:bottom-[-85px] md:right-[-350px] md:bottom-[-170px] lg:right-[-270px] lg:bottom-[-300px] xl:right-[-285px] xl:bottom-[-335px] w-[280px] sm:w-[380px] md:w-[550px] lg:w-[900px] xl:w-[1050px] pointer-events-none select-none"
        style={{ zIndex: 30 }}
      >
        <Image
          src="/assets/Mano%20dedos.png"
          alt="Mano dedos"
          width={1000}
          height={1000}
          style={{ transform: 'rotate(15deg) scaleY(-1)' }}
        />
      </motion.div>
      {/* Asterisco decorativo */}
      {/* Asterisco decorativo animado */}
      <motion.svg
        viewBox="0 0 350 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[5px] bottom-[-90px] sm:left-[75px] sm:bottom-[-120px] md:left-[30px] md:bottom-[-135px] lg:left-[350px] lg:bottom-[-170px] xl:left-[370px] xl:bottom-[-180px] w-[130px] h-[130px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] lg:w-[320px] lg:h-[320px] xl:w-[350px] xl:h-[350px] z-0"
        initial={{ rotate: 0, opacity: 0 }}
        animate={{ rotate: 360, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <text x="0" y="300" fontFamily="Playfair Display" fontSize="350" fill="#B9C85E">*</text>
      </motion.svg>
      </div>
      {/* Fases del método */}
      <section className="w-full flex flex-col items-center justify-center bg-white py-12 mt-8 sm:mt-12 md:mt-24 lg:mt-64">
        <div className="w-full max-w-5xl px-4 sm:px-6 md:px-12 lg:px-8">
          {/* Fase 1 */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 lg:gap-16">
              {/* Columna texto */}
              <div className="flex-1 min-w-0">
                <motion.div
                  initial={{ y: -60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#B9C85E]" />
                    <span className="text-[#B9C85E] font-medium text-sm tracking-wide">Fase 1</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#B9C85E] mb-4">Diagnóstico Neuroemocional</h2>
                  <p className="text-sm sm:text-base text-gray-700 mb-1">Identificamos exactamente dónde están las desconexiones emocionales que impactan tu negocio.</p>
                  <p className="text-xs sm:text-sm font-semibold text-[#1f1f1fff] mb-1">¿Qué ganas?</p>
                  <p className="text-sm sm:text-base text-gray-700">Sabes con precisión qué afecta tu retención de talento y clima laboral, sin adivinar.</p>
                </motion.div>
              </div>
              {/* Columna gráfico */}
              <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
                <div className="relative w-[120px] h-[120px] flex items-center justify-center">
                <motion.div
                  initial={{ x: -80, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                >
                  <EsferaDoble size={108} color1="#B9C85E" color2="#9FB350" opacity1={0.85} opacity2={0.85} />
                </motion.div>
              </div>
            </div>
            </div>
          </div>
          {/* Flecha entre Fase 1 y Fase 2 */}
          <div className="w-full flex justify-center items-center my-2">
            <motion.div
              initial={{ scaleX: 0.7, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ width: '100%' }}
            >
              <Image
                src="/assets/Flecha-DI.svg"
                alt="Flecha de derecha a izquierda"
                width={810}
                height={63}
                style={{ maxWidth: '88%', height: 'auto' }}
                priority={false}
              />
            </motion.div>
          </div>
          {/* Fase 2 */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
              {/* Columna texto */}
              <div className="flex-1 min-w-0 order-1 md:order-2">
                <motion.div
                  initial={{ y: -60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#B9C85E]" />
                    <span className="text-[#B9C85E] font-medium text-sm tracking-wide">Fase 2</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#B9C85E] mb-4">Diseño Experiencial Personalizado</h2>
                  <p className="text-sm sm:text-base text-gray-700 mb-1">Creamos experiencias multisensoriales específicas para los patrones emocionales de tu equipo.</p>
                  <p className="text-xs sm:text-sm font-semibold text-[#1f1f1fff] mb-1">¿Qué ganas?</p>
                  <p className="text-sm sm:text-base text-gray-700">Un programa único que habla el "idioma emocional" de tu organización, no una receta genérica.</p>
                </motion.div>
              </div>
              {/* Columna gráfico */}
              <div className="flex-shrink-0 flex justify-center w-full md:w-auto order-2 md:order-1">
                <motion.div
                  initial={{ x: -80, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                >
                  <EsferasFase2 size1={72} size2={144} color="#B9C85E" />
                </motion.div>
              </div>
            </div>
          </div>
          {/* Flecha entre Fase 2 y Fase 3 */}
          <div className="w-full flex justify-center items-center my-2">
            <motion.div
              initial={{ scaleX: 0.7, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ width: '100%' }}
            >
              <Image
                src="/assets/Flecha-ID.svg"
                alt="Flecha de derecha a izquierda"
                width={810}
                height={63}
                style={{ maxWidth: '88%', height: 'auto' }}
                priority={false}
              />
            </motion.div>
          </div>
          {/* Fase 3 */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
              {/* Columna texto */}
              <div className="flex-1 min-w-0 order-1">
                <motion.div
                  initial={{ y: -60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#B9C85E]" />
                    <span className="text-[#B9C85E] font-medium text-sm tracking-wide">Fase 3</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#B9C85E] mb-4">Activación Neuroplástica</h2>
                  <p className="text-sm sm:text-base text-gray-700 mb-1">Implementamos dinámicas que reorganizan el cerebro para crear nuevos hábitos relacionales.</p>
                  <p className="text-xs sm:text-sm font-semibold text-[#1f1f1fff] mb-1">¿Qué ganas?</p>
                  <p className="text-sm sm:text-base text-gray-700">Cambios estables y duraderos, no solo motivación temporal que se desvanece.</p>
                </motion.div>
              </div>
              {/* Columna gráfico */}
              <div className="flex-shrink-0 flex justify-center w-full md:w-auto order-2">
                <motion.div
                  initial={{ x: 80, rotate: 0, opacity: 0 }}
                  whileInView={{ x: 0, rotate: 360, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ x: { duration: 1.1, ease: "easeOut" }, rotate: { duration: 1, ease: "easeOut" }, opacity: { duration: 1.1 } }}
                >
                  <EsferasFase3 radius={81} sphereRadius={29} color="#B9C85E" />
                </motion.div>
              </div>
            </div>
          </div>
          {/* Flecha entre Fase 3 y Fase 4 */}
          <div className="w-full flex justify-center items-center my-2">
            <motion.div
              initial={{ scaleX: 0.7, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ width: '100%' }}
            >
              <Image
                src="/assets/Flecha-DI.svg"
                alt="Flecha de derecha a izquierda"
                width={810}
                height={63}
                style={{ maxWidth: '88%', height: 'auto' }}
                priority={false}
              />
            </motion.div>
          </div>
          {/* Fase 4 */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
              {/* Columna texto */}
              <div className="flex-1 min-w-0 order-1 md:order-2">
                <motion.div
                  initial={{ y: -60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#B9C85E]" />
                    <span className="text-[#B9C85E] font-medium text-sm tracking-wide">Fase 4</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#B9C85E] mb-4">Consolidación Grupal</h2>
                  <p className="text-sm sm:text-base text-gray-700 mb-1">Los equipos practican y refuerzan las nuevas formas de relacionarse.</p>
                  <p className="text-xs sm:text-sm font-semibold text-[#1f1f1fff] mb-1">¿Qué ganas?</p>
                  <p className="text-sm sm:text-base text-gray-700">La transformación se vuelve cultura organizacional, no esfuerzo individual que se pierde.</p>
                </motion.div>
              </div>
              {/* Columna gráfico */}
              <div className="flex-shrink-0 flex justify-center w-full md:w-auto order-2 md:order-1">
                <motion.div
                  initial={{ x: -60, y: 60, opacity: 0 }}
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                >
                  <EsferasFase4 sphereRadius={29} color="#B9C85E" />
                </motion.div>
              </div>
            </div>
          </div>
          {/* Flecha entre Fase 4 y Fase 5 */}
          <div className="w-full flex justify-center items-center my-2">
            <motion.div
              initial={{ scaleX: 0.7, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ width: '100%' }}
            >
              <Image
                src="/assets/Flecha-ID.svg"
                alt="Flecha de derecha a izquierda"
                width={810}
                height={63}
                style={{ maxWidth: '88%', height: 'auto' }}
                priority={false}
              />
            </motion.div>
          </div>
          {/* Fase 5 */}
          <div>
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              {/* Columna texto */}
              <div className="flex-1 min-w-0 order-1">
                <motion.div
                  initial={{ y: -60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#B9C85E]" />
                    <span className="text-[#B9C85E] font-medium text-sm tracking-wide">Fase 5</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#B9C85E] mb-4">Seguimiento transformacional</h2>
                  <p className="text-sm sm:text-base text-gray-700 mb-1">Medimos el progreso con indicadores específicos de clima laboral y retención.</p>
                  <p className="text-xs sm:text-sm font-semibold text-[#1f1f1fff] mb-1">¿Qué ganas?</p>
                  <p className="text-sm sm:text-base text-gray-700">Evidencia clara del ROI y garantía de cambios sostenidos.</p>
                </motion.div>
              </div>
              {/* Columna gráfico */}
              <div className="flex-shrink-0 flex justify-center w-full md:w-auto order-2">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <EsferasFase5 sphereRadius={29} color1="#9FB350" color2="#d6e288ff" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Los Autores */}
      <section className="w-full flex flex-col items-center justify-center bg-[#F9FAFB] py-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-16 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-12 lg:px-8">
          {/* Autor 1 */}
          <div className="flex flex-col items-center w-full md:w-1/2">
            {/* SVG decorativo detrás de la foto */}
            <div className="relative flex items-center justify-center mb-4">
              {/* SVG autor 1 grande, arriba a la izquierda animado */}
              <motion.div
                className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 md:-top-10 md:-left-10 lg:-top-12 lg:-left-12 z-0"
                initial={{ x: -80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <svg className="w-24 h-24 sm:w-32 sm:h-32 md:w-56 md:h-56 lg:w-56 lg:h-56 xl:w-64 xl:h-64" viewBox="0 0 295 295" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M73.4752 0L80.0692 28.2597C84.5436 47.335 99.6154 62.4068 118.691 66.8813L146.95 73.4752L118.691 80.0692C99.6154 84.5436 84.5436 99.6155 80.0692 118.691L73.4752 146.95L66.8813 118.691C62.4068 99.6155 47.335 84.5436 28.2597 80.0692L0 73.4752L28.2597 66.8813C47.335 62.4068 62.4068 47.335 66.8813 28.2597L73.4752 0Z" fill="#d6e288ff"/>
                  <path d="M220.661 0L227.255 28.2597C231.73 47.335 246.801 62.4068 265.877 66.8813L294.136 73.4752L265.877 80.0692C246.801 84.5436 231.73 99.6155 227.255 118.691L220.661 146.95L214.067 118.691C209.593 99.6155 194.521 84.5436 175.446 80.0692L147.186 73.4752L175.446 66.8813C194.521 62.4068 209.593 47.335 214.067 28.2597L220.661 0Z" fill="#d6e288ff"/>
                  <path d="M73.4752 147.186L80.0692 175.446C84.5436 194.521 99.6154 209.593 118.691 214.067L146.95 220.661L118.691 227.255C99.6154 231.73 84.5436 246.801 80.0692 265.877L73.4752 294.136L66.8813 265.877C62.4068 246.801 47.335 231.73 28.2597 227.255L0 220.661L28.2597 214.067C47.335 209.593 62.4068 194.521 66.8813 175.446L73.4752 147.186Z" fill="#d6e288ff"/>
                  <path d="M220.661 147.186L227.255 175.446C231.73 194.521 246.801 209.593 265.877 214.067L294.136 220.661L265.877 227.255C246.801 231.73 231.73 246.801 227.255 265.877L220.661 294.136L214.067 265.877C209.593 246.801 194.521 231.73 175.446 227.255L147.186 220.661L175.446 214.067C194.521 209.593 209.593 194.521 214.067 175.446L220.661 147.186Z" fill="#d6e288ff"/>
                </svg>
              </motion.div>
              <div className="relative z-10">
                <motion.div
                  className="rounded-full overflow-hidden w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 flex items-center justify-center bg-transparent"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  <Image
                    src="/assets/PersonaIzquierda.png"
                    alt="Foto autor 1"
                    width={384}
                    height={384}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </div>
            </div>
            <motion.p
              className="text-center text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 max-w-xs mt-4 px-2"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              De equipos técnicamente competentes, pero emocionalmente desconectados
            </motion.p>
          </div>
          {/* Flecha decorativa entre autores - horizontal para desktop */}
          <div className="hidden md:flex items-center justify-center h-full">
            <motion.span
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#303030ff]"
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
            >
              →
            </motion.span>
          </div>
          {/* Flecha decorativa entre autores - vertical para móvil/tablet */}
          <div className="flex md:hidden items-center justify-center w-full my-4">
            <motion.span
              className="text-4xl text-[#303030ff]"
              initial={{ y: -40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            >
              ↓
            </motion.span>
          </div>
          {/* Autor 2 */}
          <div className="flex flex-col items-center w-full md:w-1/2">
            {/* SVG decorativo detrás de la foto */}
            <div className="relative flex items-center justify-center mb-4">
              {/* SVG autor 2 grande, arriba a la derecha animado */}
              <motion.div
                className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 md:-top-10 md:-right-10 lg:-top-12 lg:-right-12 z-0"
                initial={{ x: 80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <svg className="w-24 h-24 sm:w-32 sm:h-32 md:w-56 md:h-56 lg:w-56 lg:h-56 xl:w-64 xl:h-64" viewBox="0 0 319 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M319 160C319 160 289.397 139.264 244.992 124.416C265.918 82.432 272.298 46.848 272.298 46.848C272.298 46.848 236.826 52.992 194.973 74.24C180.171 29.696 159.5 0 159.5 0C159.5 0 138.829 29.696 124.027 74.24C82.1744 53.248 46.7016 46.848 46.7016 46.848C46.7016 46.848 52.8264 82.432 74.008 124.416C29.6032 139.264 0 160 0 160C0 160 29.6032 180.736 74.008 195.584C53.0816 237.568 46.7016 273.152 46.7016 273.152C46.7016 273.152 82.1744 267.008 124.027 245.76C138.829 290.304 159.5 320 159.5 320C159.5 320 180.171 290.304 194.973 245.76C236.826 266.752 272.298 273.152 272.298 273.152C272.298 273.152 266.174 237.568 244.992 195.584C289.397 180.736 319 160 319 160ZM209.519 160C209.519 166.912 209.264 173.824 208.754 180.48C204.415 185.6 199.822 190.72 194.973 195.584C190.124 200.448 185.02 205.056 179.916 209.408C173.281 209.92 166.39 210.176 159.5 210.176C152.61 210.176 145.719 209.92 139.084 209.408C133.98 205.056 128.876 200.448 124.027 195.584C119.178 190.72 114.585 185.6 110.246 180.48C109.736 173.824 109.481 166.912 109.481 160C109.481 153.088 109.736 146.176 110.246 139.52C114.585 134.4 119.178 129.28 124.027 124.416C128.876 119.552 133.98 114.944 139.084 110.592C145.719 110.08 152.61 109.824 159.5 109.824C166.39 109.824 173.281 110.08 179.916 110.592C185.02 114.944 190.124 119.552 194.973 124.416C199.822 129.28 204.415 134.4 208.754 139.52C209.264 146.176 209.519 153.088 209.519 160Z" fill="#9FB350"/>
                </svg>
              </motion.div>
              <div className="relative z-10">
                <motion.div
                  className="rounded-full overflow-hidden w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 flex items-center justify-center bg-transparent"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  <Image
                    src="/assets/PersonaDerecha.png"
                    alt="Foto autor 2"
                    width={384}
                    height={384}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </div>
            </div>
            <motion.p
              className="text-center text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 max-w-xs mt-4 px-2"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              a equipos que colaboran naturalmente y generan clima donde todos quieren trabajar.
            </motion.p>
          </div>
        </div>
        {/* Botón CTA debajo de autores */}
      <div className="w-full flex flex-col items-center justify-center mt-10 mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-4 relative z-20"
        >
          <Link href="/nosotros" className="bg-[#9FB350] hover:bg-[#d6e288ff] text-white font-libre font-bold px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg transition-colors flex items-center gap-2 mx-auto">
            Descubre cómo lo hacemos realidad
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
      </section>
    </>
  );
}
