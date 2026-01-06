"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const TypewriterText = ({ parts, delay = 0 }: { parts: { text: string; className?: string }[]; delay?: number }) => {
  const allLetters = parts.flatMap((part) =>
    Array.from(part.text).map((char) => ({ char, className: part.className }))
  );

  // Agrupar letras en palabras para evitar saltos de línea a mitad de palabra
  const words: { char: string; className?: string; index: number }[][] = [];
  let currentWord: { char: string; className?: string; index: number }[] = [];

  allLetters.forEach((item, index) => {
    if (item.char === " " || item.char === "\n") {
      if (currentWord.length > 0) {
        words.push(currentWord);
        currentWord = [];
      }
      words.push([{ ...item, index }]); // El espacio o salto de línea es su propia "palabra"
    } else {
      currentWord.push({ ...item, index });
    }
  });
  if (currentWord.length > 0) {
    words.push(currentWord);
  }

  return (
    <span className="inline-block text-center">
      {words.map((word, wordIndex) => {
        const isSpaceOrNewline = word.length === 1 && (word[0].char === " " || word[0].char === "\n");
        
        // Si es un salto de línea, renderizar un bloque de ancho completo
        if (word[0].char === "\n") {
          return (
            <motion.span
              key={`newline-${wordIndex}`}
              initial={{ opacity: 0, width: 0, display: "none" }}
              animate={{ opacity: 1, width: "100%", display: "block" }}
              transition={{ delay: delay + word[0].index * 0.05 }}
            />
          );
        }

        // Si es espacio, renderizar normal
        if (isSpaceOrNewline) {
          return (
            <motion.span
              key={`space-${wordIndex}`}
              initial={{ opacity: 0, width: 0, display: "none" }}
              animate={{ opacity: 1, width: "auto", display: "inline-block" }}
              transition={{ delay: delay + word[0].index * 0.05 }}
              className="overflow-hidden align-bottom"
            >
              &nbsp;
            </motion.span>
          );
        }

        // Si es una palabra, envolver en whitespace-nowrap
        return (
          <span key={`word-${wordIndex}`} className="inline-block whitespace-nowrap">
            {word.map((item) => (
              <motion.span
                key={item.index}
                initial={{ opacity: 0, width: 0, display: "none" }}
                animate={{ opacity: 1, width: "auto", display: "inline-block" }}
                transition={{ delay: delay + item.index * 0.05 }}
                className={`overflow-hidden align-bottom ${item.className || ""}`}
              >
                {item.char}
              </motion.span>
            ))}
          </span>
        );
      })}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="inline-block w-[3px] h-[1em] bg-emova-primary ml-1 align-middle"
      />
    </span>
  );
};

function HeroContent() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-60"
        >
          <source src="/assets/Video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-20">
        <div className="w-full mx-auto space-y-8 md:space-y-24">
          <div className="min-h-[180px] sm:min-h-[200px] md:min-h-[240px] flex items-center justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold text-white leading-[1.4] md:leading-[1.3] text-center">
              <TypewriterText
                parts={[
                  { text: "En la era de la IA, " },
                  { text: "lo humano es ", className: "text-emova-tertiary" },
                  { text: "tu única\n" },
                  { text: "ventaja competitiva " },
                  { text: "irreemplazable", className: "text-emova-tertiary" },
                ]}
                delay={0.3}
              />
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 8.5, ease: "easeOut" }}
            className="space-y-4 md:space-y-6 mb-8 md:mb-16 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-libre leading-relaxed">
                Activamos la Inteligencia Emocional de tus equipos para que retengas talento y mejores tu clima laboral de forma medible y sostenible.
              </p>
            </div>

            <div className="text-center">
              <p className="text-sm sm:text-base md:text-lg text-white/70 font-libre leading-relaxed">
                Mientras las empresas invierten millones en tecnología para &ldquo;conectar&rdquo; mejor, sus colaboradores están más desconectados que nunca.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 9.5, ease: "easeOut" }}
            className="flex justify-center px-4"
          >
            <Link
              href="#diagnostico"
              className="group inline-flex items-center justify-center text-center gap-2 md:gap-3 px-5 md:px-8 py-3 md:py-4 text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-black transition-all duration-300 bg-emova-primary rounded-full hover:bg-emova-secondary hover:shadow-2xl hover:shadow-emova-primary/50 hover:-translate-y-1 max-w-full"
            >
              <span className="text-center leading-tight">Agenda tu Diagnóstico Neuroemocional Gratuito</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <HeroContent />
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-emova-primary text-white p-4 rounded-full shadow-lg hover:bg-emova-secondary transition-all duration-300"
          aria-label="Volver arriba"
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </>
  );
}
