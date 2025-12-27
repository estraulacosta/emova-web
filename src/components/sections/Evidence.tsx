"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "80%", label: "Del éxito proviene de lo humano" },
  { value: "21%", label: "Más productividad en equipos conectados" },
  { value: "$4.2", label: "Retorno por cada $1 invertido" },
];

export default function Evidence() {
  return (
    <section className="py-24 bg-[#F7F7F7]">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-playfair font-bold text-emova-grey mb-4">
            Evidencia
          </h2>
          <p className="text-xl text-emova-grey/70 font-libre">
            La Ciencia Respalda Nuestra Aproximación
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center p-8 border border-gray-100 rounded-2xl hover:border-emova-primary/30 transition-colors"
            >
              <div className="text-5xl font-bold text-emova-secondary mb-2 font-playfair">
                {stat.value}
              </div>
              <p className="text-emova-grey font-noto font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
        >
          <span className="text-2xl font-bold font-serif text-gray-400">HARVARD</span>
          <span className="text-2xl font-bold font-serif text-gray-400">GALLUP</span>
          <span className="text-2xl font-bold font-serif text-gray-400">MIT</span>
          <span className="text-2xl font-bold font-serif text-gray-400">WHO</span>
        </motion.div>
      </div>
    </section>
  );
}
