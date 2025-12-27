"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Diseño Experiencial Personalizado",
    desc: "Creamos experiencias multisensoriales específicas para los patrones emocionales de tu equipo.",
  },
  {
    number: "02",
    title: "Activación Neuroplástica",
    desc: "Generamos nuevas conexiones neuronales a través de vivencias de alto impacto emocional.",
  },
  {
    number: "03",
    title: "Consolidación Grupal",
    desc: "Transformamos la experiencia individual en una cultura colectiva resiliente.",
  },
  {
    number: "04",
    title: "Seguimiento Transformacional",
    desc: "Medimos el impacto y aseguramos la sostenibilidad del cambio en el tiempo.",
  },
];

export default function Method() {
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
            Método
          </h2>
          <p className="text-xl text-emova-grey/70 font-libre">
            Modelo de Transformación Neuroemocional™
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-emova-primary/30 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div
                    className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border-l-4 border-emova-primary ${
                      index % 2 === 0 ? "md:text-right md:border-l-0 md:border-r-4" : ""
                    }`}
                  >
                    <span className="text-6xl font-playfair font-bold text-emova-primary/10 block mb-4">
                      {step.number}
                    </span>
                    <h3 className="text-2xl font-playfair font-bold text-emova-grey mb-3">
                      {step.title}
                    </h3>
                    <p className="text-emova-grey/80 font-noto">
                      {step.desc}
                    </p>
                  </div>
                </div>
                
                <div className="relative z-10 w-4 h-4 bg-emova-primary rounded-full ring-4 ring-white shadow-sm" />
                
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
