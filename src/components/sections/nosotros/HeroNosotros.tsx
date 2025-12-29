"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function HeroNosotros() {
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
      {/* Header Section - Green Background */}
      <section className="bg-emova-primary pt-32 pb-16">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-playfair font-bold text-white text-center"
          >
            Nosotros
          </motion.h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative   overflow-visible">
        {/* Green Circle SVG Background - At the very back, bottom */}
        <div className="absolute bottom-0 pt-500 pb-100 left-0 w-full pointer-events-none overflow-hidden z-0" style={{ transform: 'translateY(50%)' }}>
          <img 
            src="/assets/nosotros/circulo-fondo.svg" 
            alt="" 
            className="w-full h-auto"
          />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-7xl mx-auto">
            
            {/* Top section: Person on left, Title on right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-23">
              
              {/* Person with Green Circle - Left side */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative flex justify-center items-center min-h-[400px]"
              >
                {/* Green Circle Background - Centered with person */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] md:w-[300px] md:h-[300px]">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full h-full rounded-full bg-emova-primary"
                  />
                </div>

                {/* Person Image */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative z-10"
                >
                  <img 
                    src="/assets/Persona sentada.png" 
                    alt="Persona sentada" 
                    className="w-full max-w-[250px] md:max-w-[320px] h-auto object-contain grayscale"
                  />
                </motion.div>
              </motion.div>

              {/* Title on right side - In white space */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative z-10"
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-emova-grey leading-tight">
                  Donde La Tecnología Termina,{" "}
                  <span className="text-emova-primary">Nosotros Empezamos</span>
                </h1>
              </motion.div>

            </div>

            {/* Text content - Inside the big green circle at bottom */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative z-20 max-w-3xl mx-auto text-left space-y-5 px-6 pt-10 md:pt-5"
            >
              <p className="text-emova-grey/80 font-libre text-base md:text-lg leading-relaxed">
                En la era de la Inteligencia Artificial y automatización masiva, 
                las organizaciones cayeron en la trampa de la eficiencia 
                despersonalizada.
              </p>
              <p className="text-emova-grey/80 font-libre text-base md:text-lg leading-relaxed">
                Meter foto de mujer y luego va Cecilia meta foto suya 
                como fundadora de Alto Grado, descubrí esta crisis durante 
                mi trayectoria en educación física en corporativo. Observé 
                cómo equipos técnicamente brillantes se fragmentaban por 
                falta de conexión humana real.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Paradoja Devastadora Section */}
      <section className="relative bg-emova-primary top-100 pb-80 overflow-hidden ">
        <div className="container mx-auto px-2">
          <div className="relative max-w-6xl mx-auto">
            
            {/* Arcos decorativos */}
            <div className="absolute left-0 top-1 w-32 md:w-40 lg:w-48 pointer-events-none z-0" style={{ transform: 'translateX(-25%)' }}>
              <svg viewBox="0 0 245 489" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M242.362 404.193C201.684 403.763 161.152 387.934 130.27 356.748C129.224 355.691 128.198 354.623 127.187 353.541C96.8265 321.157 82.4643 279.282 84.0462 237.91C85.5407 198.738 101.33 160.024 131.383 130.265C132.132 129.523 132.891 128.802 133.651 128.08C164.534 98.6572 204.23 83.9524 243.936 83.9228L244.348 0.000210577C183.161 -0.0705846 121.949 22.7289 74.6 68.4465C73.8459 69.173 73.0815 69.8892 72.3324 70.631C25.8138 116.695 1.71343 176.839 0.0878923 237.492C-1.59442 300.346 20.8727 363.747 67.548 412.597C68.569 413.669 69.5901 414.741 70.6368 415.798C117.829 463.456 179.796 487.58 241.95 488.116L242.362 404.193Z" fill="#d8e295ff"/>
              </svg>
            </div>

            <div className="absolute right-0 top-1 w-32 md:w-40 lg:w-48 pointer-events-none z-0" style={{ transform: 'translateX(25%)' }}>
              <svg viewBox="0 0 245 489" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.98559 404.193C42.6641 403.763 83.1956 387.934 114.078 356.748C115.124 355.691 116.15 354.623 117.161 353.541C147.522 321.157 161.884 279.282 160.302 237.91C158.807 198.738 143.018 160.024 112.965 130.265C112.216 129.523 111.457 128.802 110.697 128.08C79.8137 98.6572 40.1178 83.9524 0.412288 83.9228L2.13334e-05 0.000210577C61.1866 -0.0705846 122.399 22.7289 169.748 68.4465C170.502 69.173 171.266 69.8892 172.016 70.631C218.534 116.695 242.635 176.839 244.26 237.492C245.942 300.346 223.475 363.747 176.8 412.597C175.779 413.669 174.758 414.741 173.711 415.798C126.519 463.456 64.5523 487.58 2.39785 488.116L1.98559 404.193Z" fill="#d8e295ff"/>
              </svg>
            </div>

            {/* Contenido central */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 text-center px-1 md:px-12 lg:px-20"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-white mb-12">
                La paradoja devastadora
              </h2>
              
              <div className="space-y-6 text-white/90 font-libre text-base md:text-lg leading-relaxed">
                <p>
                  Mientras las empresas invierten millones en tecnología para 
                  "conectar" mejor, sus colaboradores están más desconectados 
                  que nunca.
                </p>
                
                <p>
                  Los líderes, obsesionados con métricas y procesos 
                  automatizados, olvidaron que las organizaciones exitosas son 
                  ecosistemas de relaciones humanas, no redes de algoritmos.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Nuestra Misión Section */}
      <section className="relative bg-emova-primary top-70 overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Título centrado arriba */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-white text-center mb-16"
          >
            Nuestra Misión
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            
            {/* Burbuja de texto a la izquierda */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                {/* SVG de la burbuja como fondo */}
                <svg viewBox="0 0 901 718" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto rotate-180">
                  <path d="M136.631 717.304C146.015 666.839 181.481 636.01 198.041 626.903L158.625 512.05C88.652 589.47 114.807 681.144 136.631 717.304Z" fill="#ffffffff"/>
                  <ellipse cx="450.5" cy="344.5" rx="450.5" ry="344.5" fill="#ffffffff"/>
                </svg>
                
                {/* Texto posicionado sobre la burbuja */}
                <div className="absolute top-[30%] left-[10%] right-[10%] space-y-4">
                  <p className="text-emova-grey/80 font-libre text-sm md:text-base leading-relaxed">
                    En Alto Grado® creemos que el valor real de una empresa 
                    está en las personas.
                  </p>
                  <p className="text-emova-grey/80 font-libre text-sm md:text-base leading-relaxed">
                    Por eso creamos experiencias vivenciales que activan la 
                    inteligencia emocional, fortalecen equipos y convierten el 
                    bienestar humano en productividad sostenible.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Imagen de la señora a la derecha */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <img 
                src="/assets/señora sentada.png" 
                alt="Nuestra Misión" 
                className="w-full max-w-[500px] h-auto object-contain"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* El Antídoto Científico Section */}
      <section className="relative bg-[#FFFFFF] top-60 pt-10 pb-80">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            
            {/* Imagen del cerebro con círculo morado a la izquierda */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center items-center"
            >
              <div className="relative w-full max-w-[450px] h-[450px] flex items-center justify-center">
                {/* Círculo de fondo morado */}
                <div className="absolute w-[350px] h-[350px] rounded-full bg-emova-primary" />
                
                {/* Imagen del cerebro */}
                <img 
                  src="/assets/cerebro perfil.png" 
                  alt="Cerebro" 
                  className="relative z-10 w-[320px] h-auto object-contain"
                />
              </div>
            </motion.div>

            {/* Texto y botón a la derecha */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-emova-secondary">
                El Antídoto Científico
              </h2>
              
              <div className="space-y-4 text-emova-grey/80 font-libre text-base md:text-lg leading-relaxed">
                <p>
                  Desarrollamos el Modelo de Transformación Neuroemocional™, 
                  el antídoto científico a la deshumanización organizacional.
                </p>
                <p>
                  No somos consultoras tradicionales. Somos la primera 
                  Activadora de Inteligencia Emocional Organizacional que 
                  transforma lo humano en ventaja competitiva.
                </p>
              </div>

              <button className="bg-emova-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-emova-secondary transition-colors font-noto inline-flex items-center gap-2">
                Conoce cómo activamos la humanidad en tu organización
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Botón flotante para volver arriba */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[9999] bg-emova-primary hover:bg-emova-secondary text-white p-4 rounded-full shadow-lg transition-colors"
          aria-label="Volver arriba"
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </>
  );
}
