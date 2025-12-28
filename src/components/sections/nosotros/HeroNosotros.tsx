"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroNosotros() {
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
      <section className="relative bg-[#F7F7F7] pt-20 pb-[550px] overflow-visible">
        {/* Green Circle SVG Background - At the very back, bottom */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none overflow-hidden z-0" style={{ transform: 'translateY(60%)' }}>
          <img 
            src="/assets/nosotros/circulo-fondo.svg" 
            alt="" 
            className="w-full h-auto"
          />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-7xl mx-auto">
            
            {/* Top section: Person on left, Title on right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
              
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
              className="relative z-20 max-w-4xl mx-auto text-center space-y-5 px-6 pt-24 md:pt-22"
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
    </>
  );
}
