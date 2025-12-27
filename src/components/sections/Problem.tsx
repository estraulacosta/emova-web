"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const problems = [
  {
    lines: [
      "Las organizaciones han caído en",
      "la trampa de la eficiencia",
      "despersonalizada."
    ],
  },
  {
    lines: [
      "Equipos técnicamente brillantes",
      "se fragmentan por falta de",
      "conexión humana real."
    ],
  },
];

export default function Problem() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth - 48; // px-6 = 24px * 2 = 48px
      const targetWidth = Math.min(width, 1024); // max-w-5xl = 1024px
      const newScale = targetWidth / 832;
      setScale(newScale);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const topMargin = 50 + (150 * Math.pow(scale, 1.2));

  return (
    <section className="pt-24 pb-8 md:pb-12 bg-[#F7F7F7] overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-emova-primary mb-6">
            Problema
          </h2>
          <p className="text-xl md:text-2xl text-emova-grey/80 font-libre">
            El Costo Oculto de la Deshumanización Tecnológica
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto mb-16">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`flex items-start gap-4 ${index === 1 ? "md:justify-end text-left" : ""}`}
            >
              <div className="flex-shrink-0 mt-1">
                <motion.div
                  initial={{ rotate: 0, scale: 1 }}
                  whileInView={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + (index * 0.2) }}
                >
                  <Image
                    src="/assets/Icono Estrella.svg"
                    alt="Icono"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </motion.div>
              </div>
              <div className="text-lg md:text-xl text-emova-grey font-libre leading-relaxed">
                {item.lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div 
          className="w-full flex justify-center px-4" 
          style={{ 
            marginTop: `${topMargin}px`,
            height: `${416 * scale}px`
          }}
        >
          <div 
            className="relative origin-top"
            style={{ 
              transform: `scale(${scale})`,
              width: '832px'
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex gap-0 justify-start relative"
            >
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-52 h-52 rounded-full bg-emova-primary flex-shrink-0"
                />
              ))}
              
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.5, ease: "backOut" }}
                className="absolute"
                style={{ 
                  left: '0',
                  top: '0',
                  width: '600px',
                  height: '600px',
                  marginLeft: '-196px',
                  marginTop: '-280px',
                  zIndex: 10 
                }}
              >
                <Image
                  src="/assets/señor pixelado.svg"
                  alt="Señor pixelado"
                  width={600}
                  height={600}
                  className="w-full h-full object-contain"
                  priority
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex gap-0 justify-start"
            >
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-52 h-52 rounded-full bg-emova-primary flex-shrink-0"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}