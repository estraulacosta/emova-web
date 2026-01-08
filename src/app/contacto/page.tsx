"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactoPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <motion.div
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="w-full bg-[#B9C85E] flex justify-center items-center py-6 sm:py-8 md:py-12 lg:h-[220px] mt-20 sm:mt-24 md:mt-12"
        style={{ zIndex: 10, position: 'relative' }}
      >
        <motion.h1
          initial={false}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="text-2xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-playfair font-bold text-white text-center px-4 mt-[60px] sm:mt-[65px] md:mt-[65px] lg:mt-[40px]"
        >
          Contáctanos
        </motion.h1>
      </motion.div>

      {/* Contact Content Section */}
      <section className="w-full bg-white pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-4">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          {/* Contact Info - Horizontal Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            {/* Layout móvil/tablet: dos filas */}
            <div className="lg:hidden space-y-4 sm:space-y-6">
              {/* Primera fila: Fundadora */}
              <div className="flex items-center justify-center gap-2 sm:gap-6">
                <div className="bg-[#B9C85E]/10 p-2 sm:p-6 md:p-2 rounded-full">
                  <svg className="w-5 h-5 sm:w-16 sm:h-16 md:w-5 md:h-5 text-[#B9C85E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-[#575756] font-noto text-sm sm:text-5xl md:text-sm font-semibold">Cecilia Rivera - Fundadora</p>
                  <a 
                    href="mailto:cecilia.rivera@altogrado.cl" 
                    className="text-[#575756] hover:text-[#B9C85E] transition-colors font-noto text-xs sm:text-4xl md:text-xs"
                  >
                    cecilia.rivera@altogrado.cl
                  </a>
                </div>
              </div>

              {/* Segunda fila: Email de contacto y WhatsApp */}
              <div className="flex flex-row items-center justify-center gap-4 sm:gap-16">
                {/* Email */}
                <div className="flex items-center gap-2 sm:gap-6">
                  <div className="bg-[#B9C85E]/10 p-2 sm:p-6 md:p-2 rounded-full">
                    <Mail className="w-5 h-5 sm:w-16 sm:h-16 md:w-5 md:h-5 text-[#B9C85E]" />
                  </div>
                  <a 
                    href="mailto:contacto@altogrado.cl" 
                    className="text-[#575756] hover:text-[#B9C85E] transition-colors font-noto text-sm sm:text-5xl md:text-sm"
                  >
                    contacto@altogrado.cl
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-2 sm:gap-6">
                  <div className="bg-[#B9C85E]/10 p-2 sm:p-6 md:p-2 rounded-full">
                    <svg className="w-5 h-5 sm:w-16 sm:h-16 md:w-5 md:h-5 text-[#B9C85E]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <a 
                    href="https://wa.me/56993498688" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#575756] hover:text-[#B9C85E] transition-colors font-noto text-sm sm:text-5xl md:text-sm"
                  >
                    +56 9 9349 8688
                  </a>
                </div>
              </div>
            </div>

            {/* Layout desktop: una sola fila con los 3 elementos */}
            <div className="hidden lg:flex items-center justify-center gap-8 lg:gap-12">
              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="bg-[#B9C85E]/10 p-2 rounded-full">
                  <Mail className="w-5 h-5 text-[#B9C85E]" />
                </div>
                <a 
                  href="mailto:contacto@altogrado.cl" 
                  className="text-[#575756] hover:text-[#B9C85E] transition-colors font-noto text-sm"
                >
                  contacto@altogrado.cl
                </a>
              </div>

              {/* Fundadora */}
              <div className="flex items-center gap-3">
                <div className="bg-[#B9C85E]/10 p-2 rounded-full">
                  <svg className="w-5 h-5 text-[#B9C85E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-[#575756] font-noto text-sm font-semibold">Cecilia Rivera - Fundadora</p>
                  <a 
                    href="mailto:cecilia.rivera@altogrado.cl" 
                    className="text-[#575756] hover:text-[#B9C85E] transition-colors font-noto text-xs"
                  >
                    cecilia.rivera@altogrado.cl
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-3">
                <div className="bg-[#B9C85E]/10 p-2 rounded-full">
                  <svg className="w-5 h-5 text-[#B9C85E]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <a 
                  href="https://wa.me/56993498688" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#575756] hover:text-[#B9C85E] transition-colors font-noto text-sm"
                >
                  +56 9 9349 8688
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
              <form 
                action="https://formspree.io/f/YOUR_FORM_ID" 
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm sm:text-2xl md:text-sm font-semibold text-[#575756] mb-2 sm:mb-3 md:mb-2 font-noto">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 sm:px-6 sm:py-6 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:border-[#B9C85E] focus:ring-2 focus:ring-[#B9C85E]/20 outline-none transition-all font-noto bg-white text-[#575756] text-base sm:text-2xl md:text-base"
                    placeholder=""
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm sm:text-2xl md:text-sm font-semibold text-[#575756] mb-2 sm:mb-3 md:mb-2 font-noto">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 sm:px-6 sm:py-6 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:border-[#B9C85E] focus:ring-2 focus:ring-[#B9C85E]/20 outline-none transition-all font-noto bg-white text-[#575756] text-base sm:text-2xl md:text-base"
                    placeholder=""
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm sm:text-2xl md:text-sm font-semibold text-[#575756] mb-2 sm:mb-3 md:mb-2 font-noto">
                    Escribe Tu Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 sm:px-6 sm:py-6 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:border-[#B9C85E] focus:ring-2 focus:ring-[#B9C85E]/20 outline-none transition-all resize-none font-noto bg-white text-[#575756] text-base sm:text-2xl md:text-base"
                    placeholder=""
                  />
                </div>

                <input type="hidden" name="_subject" value="Nuevo mensaje desde Emova Web" />
                <input type="hidden" name="_next" value="/contacto?success=true" />

                <div className="flex justify-start">
                  <button
                    type="submit"
                    className="bg-[#B9C85E] text-white px-10 py-3 sm:px-20 sm:py-6 md:px-12 md:py-3 rounded-full font-semibold hover:bg-[#9FB350] transition-colors flex items-center justify-center gap-2 sm:gap-4 md:gap-3 font-libre text-lg sm:text-3xl md:text-lg"
                  >
                    Enviar
                    <span className="text-2xl sm:text-5xl md:text-2xl font-bold">+</span>
                  </button>
                </div>
              </form>
            </motion.div>
        </div>
      </section>

      {/* Arrow Section */}
      <section className="w-full bg-white py-4 sm:py-6">
        <div className="flex justify-center">
          <motion.img 
            src="/assets/FlechaAbajo.png" 
            alt="Flecha"
            className="w-12 sm:w-20 md:w-20 h-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </section>

      {/* Info Section - Bubble with Text */}
      <section className="w-full bg-[#9FB350] py-10 sm:py-12 md:py-16 lg:py-20 mt-10 sm:mt-12 md:mt-16 lg:mt-20 relative overflow-visible">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          {/* Hands positioned above background */}
          <motion.div 
            className="relative -mt-[80px] sm:-mt-[100px] md:-mt-[180px] lg:-mt-[150px] mb-4 sm:mb-6 md:mb-8"
            initial={{ scale: 0, opacity: 0, y: 100 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          >
            <div className="flex justify-center">
              <img 
                src="/assets/ManosFuerza.png" 
                alt="Manos"
                className="w-64 sm:w-80 md:w-[28rem] lg:w-[28rem] xl:w-[32rem] h-auto relative z-10"
              />
            </div>
          </motion.div>

          <div className="relative flex justify-center items-center -mt-[180px] sm:-mt-[220px] md:-mt-[380px] lg:-mt-[345px]">
            {/* Bubble SVG */}
            <motion.div 
              className="relative w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl z-20"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <img 
                src="/assets/burbuja_final.svg" 
                alt="Burbuja"
                className="w-full h-auto"
              />
              
              {/* Text inside bubble */}
              <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16">
                <motion.p
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center text-[#575756] font-noto text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed"
                >
                  "La era de la automatización ha llegado. Las organizaciones que inviertan en factor humano tendrán la ventaja competitiva del futuro: equipos más innovadores, culturas más resilientes y relaciones que ningún algoritmo puede reemplazar."
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Revolution Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-8 sm:mt-10 md:mt-12 lg:mt-16 px-4"
          >
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-playfair font-bold text-gray-300">
              La <span className="text-white">revolución humana</span> comienza ahora
            </h2>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
