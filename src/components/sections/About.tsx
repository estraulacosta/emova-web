"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-full overflow-hidden relative z-10 border-8 border-gray-50">
               <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                  Imagen Equipo/Fundadora
               </div>
            </div>
            <div className="absolute top-10 -left-10 w-full h-full bg-emova-secondary/10 rounded-full -z-0 blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-playfair font-bold text-emova-grey mb-6">
              Nosotros
            </h2>
            <h3 className="text-2xl font-libre text-emova-primary mb-6">
              Donde La Tecnología Termina, Nosotros Empezamos
            </h3>
            <div className="space-y-6 text-emova-grey/80 font-noto leading-relaxed">
              <p>
                En la era de la Inteligencia Artificial y automatización masiva, las organizaciones cayeron en la trampa de la eficiencia despersonalizada.
              </p>
              <p>
                Como fundadora de EMOVA, descubrí esta crisis durante mi transición del mundo de la educación física al corporativo. Observé cómo equipos técnicamente brillantes se fragmentaban por falta de conexión humana real.
              </p>
              <blockquote className="border-l-4 border-emova-primary pl-6 italic text-lg text-emova-grey my-8">
                &ldquo;Los líderes, obsesionados con métricas y procesos automatizados, olvidaron que las organizaciones exitosas son ecosistemas de relaciones humanas, no redes de algoritmos.&rdquo;
              </blockquote>
              <p>
                En EMOVA creemos que el valor real de una empresa está en las personas. Por eso creamos experiencias vivenciales que activan la inteligencia emocional, fortalecen equipos y convierten el bienestar humano en productividad sostenible.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
