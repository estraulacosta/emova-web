"use client";

import { motion } from "framer-motion";

export default function Paradox() {
  return (
    <section className="relative z-20 pt-8 pb-32 md:pt-12 md:pb-48 overflow-hidden bg-[#F7F7F7]">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto items-center">
          {/* Texto de la paradoja */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="space-y-4 z-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-emova-primary leading-tight">
              La paradoja devastadora:
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 font-libre leading-relaxed">
              Mientras automatizan procesos, pierden el factor<br className="hidden sm:block" />
              humano que genera verdadera productividad, innovación y lealtad.
            </p>
          </motion.div>

          {/* Señora arrastrando círculo */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="relative flex items-end justify-center md:justify-end h-[200px] sm:h-[250px] md:h-[300px]"
          >
            <div className="relative flex items-end">
              {/* Imagen de la señora - adelante */}
              <div className="relative z-20">
                <img
                  src="/assets/Se%C3%B1ora.png"
                  alt="Señora arrastrando círculo"
                  className="w-20 h-auto sm:w-28 md:w-32 lg:w-36 object-contain drop-shadow-2xl"
                />
              </div>

              {/* Círculo verde rodando - detrás */}
              <motion.div
                initial={{ rotate: 0 }}
                whileInView={{ rotate: 360 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full bg-emova-tertiary flex items-center justify-center shadow-lgz-0 -ml-1 sm:-ml-2 md:-ml-3"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
