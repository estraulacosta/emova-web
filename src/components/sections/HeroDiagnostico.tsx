"use client";

import { motion } from "framer-motion";

export default function HeroDiagnostico() {
  return (
    <>
      {/* Header Section - Green Background */}
      <section className="bg-emova-primary pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-playfair font-bold text-white text-center"
          >
            Diagnóstico
          </motion.h1>
        </div>
      </section>

      {/* Sección de círculos */}
      <section className="relative w-full bg-[#F5F5F5] py-12 md:py-16 lg:py-20 px-4" style={{ overflow: 'visible' }}>
        <div className="container mx-auto max-w-6xl" style={{ overflow: 'visible' }}>
          
          {/* Subtítulo - Grid sistema */}
          <div className="grid-sistema">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="col-span-m-3 col-span-t-5 col-span-d-12 text-xl md:text-2xl lg:text-3xl font-playfair text-emova-grey text-center mb-12 md:mb-16"
            >
              Neuroemocional gratuito
            </motion.p>
          </div>

          {/* Círculos superpuestos */}
          <div className="relative w-full flex items-center justify-center mb-12 md:mb-16">
            <div className="relative w-full max-w-[400px] md:max-w-[550px] lg:max-w-[650px] h-[280px] md:h-[380px] lg:h-[450px] flex items-center justify-center">
              {/* Círculo izquierdo - Verde primario */}
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ 
                  duration: 1, 
                  delay: 0.3,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
                className="absolute w-[260px] h-[260px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px] rounded-full bg-emova-primary left-0"
                style={{ mixBlendMode: 'multiply' }}
              />
              
              {/* Círculo derecho - Verde secundario */}
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ 
                  duration: 1, 
                  delay: 0.5,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
                className="absolute w-[260px] h-[260px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px] rounded-full bg-emova-secondary right-0"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
          </div>

          {/* Flecha apuntando hacia abajo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 1.5,
              ease: "easeOut"
            }}
            className="flex justify-center mb-8 md:mb-10"
          >
            <motion.svg 
              width="15" 
              height="96" 
              viewBox="0 0 15 96" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-24 md:w-5 md:h-28 lg:w-6 lg:h-32"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <motion.path
                d="M6.65666 95.7071C7.04718 96.0976 7.68035 96.0976 8.07087 95.7071L14.4348 89.3431C14.8254 88.9526 14.8254 88.3195 14.4348 87.9289C14.0443 87.5384 13.4111 87.5384 13.0206 87.9289L7.36377 93.5858L1.70691 87.9289C1.31639 87.5384 0.683222 87.5384 0.292698 87.9289C-0.0978265 88.3195 -0.0978266 88.9526 0.292698 89.3431L6.65666 95.7071ZM7.36377 0L6.36377 -4.37114e-08L6.36377 3.39286L7.36377 3.39286L8.36377 3.39286L8.36377 4.37114e-08L7.36377 0ZM7.36377 10.1786L6.36377 10.1786L6.36377 16.9643L7.36377 16.9643L8.36377 16.9643L8.36377 10.1786L7.36377 10.1786ZM7.36377 23.75L6.36377 23.75L6.36377 30.5357L7.36377 30.5357L8.36377 30.5357L8.36377 23.75L7.36377 23.75ZM7.36377 37.3214L6.36377 37.3214L6.36377 44.1071L7.36377 44.1071L8.36377 44.1071L8.36377 37.3214L7.36377 37.3214ZM7.36377 50.8929L6.36377 50.8929L6.36377 57.6786L7.36377 57.6786L8.36377 57.6786L8.36377 50.8929L7.36377 50.8929ZM7.36377 64.4643L6.36377 64.4643L6.36377 71.25L7.36377 71.25L8.36377 71.25L8.36377 64.4643L7.36377 64.4643ZM7.36377 78.0357L6.36377 78.0357L6.36377 84.8214L7.36377 84.8214L8.36377 84.8214L8.36377 78.0357L7.36377 78.0357ZM7.36377 91.6071L6.36377 91.6071L6.36377 95L7.36377 95L8.36377 95L8.36377 91.6071L7.36377 91.6071Z"
                fill="#575756"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1.7, ease: "easeInOut" }}
              />
            </motion.svg>
          </motion.div>

          {/* Texto descriptivo */}
          <div className="grid-sistema">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 1.8,
                ease: "easeOut"
              }}
              className="col-span-m-3 col-span-t-5 col-span-d-12 text-center"
            >
              <p className="text-base md:text-lg lg:text-xl text-emova-grey font-noto leading-relaxed max-w-3xl mx-auto">
                Descubre la infraestructura humana real de tu organización
              </p>
            </motion.div>
          </div>

          {/* Sección de empresa perdiendo dinero - Grid sistema */}
          <div className="relative mt-16 md:mt-20 lg:mt-24 pb-8 md:pb-16 lg:pb-40" style={{ overflow: 'visible' }}>
            <div className="grid-sistema items-start">
              
              {/* Columna izquierda - Texto */}
              {/* Móvil: 2 de 3 cols | Tablet: 3 de 5 cols | Desktop: 5 de 12 cols */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="col-span-m-2 col-span-t-3 col-span-d-5 space-y-4 md:space-y-5 z-40 relative"
              >
                <h2 className="text-lg md:text-xl lg:text-3xl font-playfair font-bold text-emova-grey leading-tight">
                  ¿Tu Empresa está perdiendo millones sin saberlo?
                </h2>
                
                <p className="text-xs md:text-sm lg:text-base text-emova-grey font-noto leading-relaxed">
                  Cada renuncia de talento clave te cuesta entre $50,000 y $200,000 USD en reclutamiento, entrenamiento y pérdida de productividad.
                </p>
                
                <p className="text-xs md:text-sm lg:text-base text-emova-grey font-noto leading-relaxed">
                  Pero el verdadero costo está oculto: la desconexión emocional que genera un efecto dominó de baja productividad, conflictos internos e innovación limitada.
                </p>
              </motion.div>

              {/* Columna derecha - Espacio para gráficos */}
              {/* Móvil: 1 de 3 cols | Tablet: 2 de 5 cols | Desktop: 7 de 12 cols */}
              <div className="col-span-m-1 col-span-t-2 col-span-d-7 relative min-h-[100px] md:min-h-[150px] lg:min-h-[200px]">
              </div>

            </div>

            {/* DINERO - Desktop: posición original */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block absolute w-[450px] xl:w-[550px] z-40"
              style={{ top: '-200px', right: '-450px' }}
            >
              <img 
                src="/assets/Dinero.png" 
                alt="Dinero volando" 
                className="w-full h-auto drop-shadow-2xl"
              />
            </motion.div>

            {/* CÍRCULOS Desktop - SVG original */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="hidden lg:block absolute w-[280px] xl:w-[350px] z-20"
              style={{ right: '-170px', bottom: '-10px' }}
            >
              <svg 
                width="446" 
                height="462" 
                viewBox="0 0 446 462" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
              >
                <g clipPath="url(#clip0_118_10264)">
                  <path
                    d="M161.218 252.05C161.218 205.822 198.711 168.342 244.971 168.342C291.231 168.342 328.724 205.814 328.724 252.05C328.724 268.255 324.11 283.391 316.132 296.209C343.014 264.828 359.252 224.08 359.252 179.526C359.244 80.3769 278.824 0 179.622 0C80.4198 0 0 80.3769 0 179.526C0 278.676 80.4198 359.053 179.622 359.053C217.445 359.053 252.53 347.361 281.481 327.406C270.444 332.757 258.061 335.758 244.971 335.758C198.719 335.758 161.218 298.285 161.218 252.05Z"
                    fill="#B9C85E"
                  />
                  <path
                    d="M362.255 462C408.511 462 446.008 424.523 446.008 378.292C446.008 332.061 408.511 294.584 362.255 294.584C316 294.584 278.502 332.061 278.502 378.292C278.502 424.523 316 462 362.255 462Z"
                    fill="#9FB350"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_118_10264">
                    <rect width="446" height="462" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </motion.div>

            {/* Versión móvil/tablet de gráficos */}
            <div className="block lg:hidden absolute top-0 right-0 bottom-0 w-1/3 md:w-2/5 z-20" style={{ overflow: 'visible' }}>
              {/* Dinero móvil/tablet */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute z-30 w-[170px] sm:w-[200px] md:w-[270px]"
                style={{ 
                  top: '-40px', 
                  right: '-55px'
                }}
              >
                <img 
                  src="/assets/Dinero.png" 
                  alt="Dinero volando" 
                  className="w-full h-auto drop-shadow-2xl"
                />
              </motion.div>

              {/* CÍRCULOS móvil/tablet - mismo SVG que desktop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute w-[110px] sm:w-[140px] md:w-[180px] z-10"
                style={{ right: '-35px', top: '35px' }}
              >
                <svg 
                  width="446" 
                  height="462" 
                  viewBox="0 0 446 462" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                >
                  <g clipPath="url(#clip0_mobile)">
                    <path
                      d="M161.218 252.05C161.218 205.822 198.711 168.342 244.971 168.342C291.231 168.342 328.724 205.814 328.724 252.05C328.724 268.255 324.11 283.391 316.132 296.209C343.014 264.828 359.252 224.08 359.252 179.526C359.244 80.3769 278.824 0 179.622 0C80.4198 0 0 80.3769 0 179.526C0 278.676 80.4198 359.053 179.622 359.053C217.445 359.053 252.53 347.361 281.481 327.406C270.444 332.757 258.061 335.758 244.971 335.758C198.719 335.758 161.218 298.285 161.218 252.05Z"
                      fill="#B9C85E"
                    />
                    <path
                      d="M362.255 462C408.511 462 446.008 424.523 446.008 378.292C446.008 332.061 408.511 294.584 362.255 294.584C316 294.584 278.502 332.061 278.502 378.292C278.502 424.523 316 462 362.255 462Z"
                      fill="#9FB350"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_mobile">
                      <rect width="446" height="462" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </motion.div>
            </div>

          </div>

        </div>

        {/* Sección El Problema - FUERA del contenedor para que la mano salga del borde */}
        <div className="relative mt-0 pb-16 md:pb-20 lg:pb-24" style={{ overflow: 'visible' }}>
          
          {/* DESKTOP: Mano y SVG */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 z-20" style={{ overflow: 'visible' }}>
            {/* Mano dedos - Desktop */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute z-20 w-[400px]"
              style={{ left: '-40px', top: '-140px' }}
            >
              <img 
                src="/assets/Mano dedos1.png" 
                alt="Mano señalando" 
                className="w-full h-auto"
              />
            </motion.div>

            {/* SVG del gráfico circular - Desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute z-10 w-[270px]"
              style={{ left: '135px', top: '-25px' }}
            >
              <svg 
                width="380" 
                height="362" 
                viewBox="0 0 380 362" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
              >
                <path d="M211.384 166.75H380C380 120.211 361.129 78.0759 330.611 47.5813L211.384 166.75Z" fill="#B9C85E"/>
                <path d="M195.347 193.468V362C288.471 362 363.963 286.545 363.963 193.468H195.347Z" fill="#9FB350"/>
                <path d="M168.616 0C75.4921 0 0 75.4548 0 168.532C0 215.071 18.8711 257.206 49.3884 287.701C79.8982 318.203 122.054 337.065 168.616 337.065V168.532L287.844 49.364C257.334 18.8618 215.178 0 168.616 0Z" fill="#B9C85E"/>
              </svg>
            </motion.div>
          </div>

          {/* MÓVIL/TABLET: Mano y SVG */}
          <div className="lg:hidden absolute left-0 top-0 bottom-0 z-20" style={{ overflow: 'visible' }}>
            {/* Mano dedos - Móvil/Tablet */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
                className="absolute z-20 w-[130px] sm:w-[170px] md:w-[230px]"
                style={{ left: '-35px', top: '-30px' }}
            >
              <img 
                src="/assets/Mano dedos1.png" 
                alt="Mano señalando" 
                className="w-full h-auto"
              />
            </motion.div>

            {/* SVG del gráfico circular - Móvil/Tablet */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute z-10 w-[85px] sm:w-[110px] md:w-[160px]"
                style={{ left: '28px', top: '10px' }}
            >
              <svg 
                width="380" 
                height="362" 
                viewBox="0 0 380 362" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
              >
                <path d="M211.384 166.75H380C380 120.211 361.129 78.0759 330.611 47.5813L211.384 166.75Z" fill="#B9C85E"/>
                <path d="M195.347 193.468V362C288.471 362 363.963 286.545 363.963 193.468H195.347Z" fill="#9FB350"/>
                <path d="M168.616 0C75.4921 0 0 75.4548 0 168.532C0 215.071 18.8711 257.206 49.3884 287.701C79.8982 318.203 122.054 337.065 168.616 337.065V168.532L287.844 49.364C257.334 18.8618 215.178 0 168.616 0Z" fill="#B9C85E"/>
              </svg>
            </motion.div>
          </div>

          {/* Contenedor centrado para el texto */}
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid-sistema items-center">
              
              {/* Columna izquierda - Espacio para gráficos */}
              <div className="col-span-m-1 col-span-t-2 col-span-d-5 relative min-h-[80px] sm:min-h-[100px] md:min-h-[150px] lg:min-h-[250px]">
              </div>

              {/* Columna derecha - Texto */}
              {/* Móvil: 2 de 3 cols | Tablet: 3 de 5 cols | Desktop: 7 de 12 cols */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="col-span-m-2 col-span-t-3 col-span-d-7 space-y-3 md:space-y-4 z-40 relative"
              >
                <h3 className="text-base md:text-lg lg:text-xl font-playfair font-semibold text-emova-primary">
                  El problema:
                </h3>
                
                <h2 className="text-lg md:text-xl lg:text-3xl font-playfair font-bold text-emova-grey leading-tight">
                  No sabes Qué está realmente roto
                </h2>
                
                <p className="text-xs md:text-sm lg:text-base text-emova-grey font-noto leading-relaxed">
                  La mayoría de las empresas intentan solucionar síntomas (alta rotación, mal clima, baja productividad) sin diagnosticar la causa raíz: las carencias en la infraestructura humana de la organización.
                </p>
              </motion.div>

            </div>
          </div>
        </div>

      </section>
    </>
  );
}
