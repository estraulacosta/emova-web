"use client";

import { motion } from "framer-motion";

export default function ConvergenciaSection() {
  return (
    <section className="relative bg-emova-primary py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Grid System: 12 columns desktop, 5 tablet, 3 mobile */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-12 gap-4 md:gap-6 items-center">
          
          {/* Left Content - Title */}
          <div className="col-span-3 md:col-span-5 lg:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold text-white mb-0"
            >
              La convergencia científica{" "}
              <span className="text-emova-secondary">apunta a una realidad</span>
            </motion.h2>
          </div>

          {/* Right Content - Description Text */}
          <div className="col-span-3 md:col-span-5 lg:col-span-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base md:text-lg lg:text-xl text-white leading-relaxed"
            >
              En la era de la IA, lo únicamente humano. Inteligencia Emocional, empatía, creatividad colaborativa, se convierte en el recurso más valioso y diferenciador.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
