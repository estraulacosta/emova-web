"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function HeroEvidencia() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Header Section - Primary Color Background */}
      <section className="bg-emova-primary pt-32 pb-9">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-playfair font-bold text-white text-center"
          >
            Evidencia
          </motion.h1>
        </div>
      </section>

      {/* Evidence Grid Section - 2x3 Grid */}
      <section className="relative bg-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold text-emova-grey mb-4 text-center md:text-left"
          >
            La Ciencia{" "}
            <span className="text-emova-primary">Respalda</span>{" "}
            Nuestra Aproximación
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-emova-grey/70 mb-12 md:mb-16 text-center md:text-left"
          >
            Por qué la Inteligencia Emocional es la ventaja competitiva del futuro
          </motion.p>

          {/* 2x3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {/* Card 1 - Harvard Business Review */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-lg"
            >
              <div className="mb-4 h-12 flex items-center">
                <img src="/assets/harvard.png" alt="Harvard Business Review" className="h-14 object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-emova-grey mb-4">
                El 80% del éxito proviene de lo humano
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-emova-grey">
                <li>• Las habilidades técnicas explican solo el 20% del éxito laboral</li>
                <li>• La inteligencia emocional y relaciones interpersonales determinan el 80% restante</li>
                <li>• Implicación: Invertir en tecnología sin desarrollar lo humano limita la potencial al 20%</li>
              </ul>
            </motion.div>

            {/* Card 2 - GALLUP */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-lg"
            >
              <div className="mb-4 h-12 flex items-center">
                <img src="/assets/gallup.png" alt="Gallup" className="h-10 object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-emova-grey mb-4">
                El impacto financiero de los equipos emocionalmente competentes
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-emova-grey">
                <li>• Equipos con alto bienestar emocional son 21% más productivos</li>
                <li>• Tienen 41% menos rotación de personal</li>
                <li>• Traducción financiera: Por cada $1 invertido en inteligencia emocional, recuperas $4.2 en productividad y retención</li>
              </ul>
            </motion.div>

            {/* Card 3 - Daniel Goleman */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-lg"
            >
              <div className="mb-4 h-12 flex items-center">
                <img src="/assets/daniel golleman.png" alt="Daniel Goleman" className="h-10 object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-emova-grey mb-4">
                Liderazgo emocional = resultados medibles
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-emova-grey">
                <li>• Las habilidades técnicas explican solo el 20% del éxito laboral</li>
                <li>• La inteligencia emocional y relaciones interpersonales determinan el 80% restante</li>
                <li>• Implicación: Invertir en tecnología sin desarrollar lo humano limita la potencial al 20%</li>
              </ul>
            </motion.div>

            {/* Card 4 - MIT Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-lg"
            >
              <div className="mb-4 h-12 flex items-center">
                <img src="/assets/MIT.png" alt="MIT Management" className="h-10 object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-emova-grey mb-4">
                La colaboración es la clave de la innovación
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-emova-grey">
                <li>• En entornos altamente digitalizados, las habilidades blandas son críticas para innovación sostenible</li>
                <li>• Paradoja: Mientras más tecnología, más necesita la humanidad para el éxito</li>
              </ul>
            </motion.div>

            {/* Card 5 - OMS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-lg"
            >
              <div className="mb-4 h-12 flex items-center">
                <img src="/assets/OMS.png" alt="Organización Mundial de la Salud" className="h-12 object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-emova-grey mb-4">
                ROI financiero comprobado
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-emova-grey">
                <li>• Por cada dólar invertido en salud mental laboral, las empresas reciben retorno de $4</li>
                <li>• Dato clave: La inversión en bienestar emocional no es gasto, es la inversión más rentable</li>
              </ul>
            </motion.div>

            {/* Card 6 - Circle with Newspaper Image - Coming from right */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative flex justify-center md:justify-end items-center overflow-visible"
            >
              <div className="relative w-[310px] h-[310px] md:w-90 md:h-89 lg:w-[450px] lg:h-[450px]">
                {/* Green Circle */}
                <div className="absolute inset-0 rounded-full w-full h-full md:w-90 md:h-89 lg:w-[450px] lg:h-[450px] bg-emova-tertiary shadow-2xl overflow-visible flex items-center justify-center">
                  <img
                    src="/assets/Periodico.png"
                    alt="Periódico"
                    className="relative w-[85%] h-[85%] md:w-[110%] md:h-[110%] lg:w-[500px] lg:h-[500px] left-14 top-0 md:left-30 md:top-0 lg:left-31 lg:top-0 object-contain"
                    style={{ transform: 'translateX(15%)' }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-emova-primary text-white p-4 rounded-full shadow-lg hover:bg-emova-secondary transition-all duration-300"
          aria-label="Volver arriba"
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </>
  );
}
