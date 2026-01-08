"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Result() {
  return (
    <section className="pt-0 md:pt-20 pb-20 bg-emova-primary relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-playfair font-bold text-emova-secondary mb-8"
        >
          Resultado:
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-2xl font-libre text-emova-grey mb-12 leading-relaxed max-w-3xl mx-auto font-medium"
        >
          Equipos que colaboran naturalmente, permanecen en la empresa y generan climas donde todos quieren trabajar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16 relative z-20"
        >
          <Link href="/metodo" className="bg-white hover:bg-emova-secondary text-emova-primary font-libre font-bold px-8 py-4 rounded-full text-lg transition-colors flex items-center gap-2 mx-auto">
            Descubre cómo lo hacemos realidad
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>

        <div className="relative flex justify-center items-center mt-10 pb-10">
            {/* Circles Background */}
            <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "backOut" }}
                className="absolute flex justify-center items-center gap-4 z-0 top-1/2 -translate-y-1/2"
            >
                <div className="w-40 h-40 md:w-72 md:h-72 rounded-full bg-white" />
                <div className="w-40 h-40 md:w-72 md:h-72 rounded-full bg-white" />
            </motion.div>

            {/* Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="relative z-10"
            >
                <img 
                    src="/assets/SeñoresMano.png" 
                    alt="Colaboración" 
                    className="w-full max-w-xl mx-auto object-contain"
                />
            </motion.div>
        </div>


      </div>
    </section>
  );
}
