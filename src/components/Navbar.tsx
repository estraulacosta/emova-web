"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Nosotros", href: "/nosotros" },
  { name: "Evidencia", href: "#evidencia" },
  { name: "Método", href: "#metodo" },
  { name: "Diagnóstico", href: "#diagnostico" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-4" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="relative w-72 h-24">
          <Image
            src={isScrolled ? "/assets/Logo.svg" : "/assets/logo_blanco.svg"}
            alt="EMOVA"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors font-medium font-noto ${
                isScrolled
                  ? "text-emova-grey hover:text-emova-primary"
                  : "text-white hover:text-white/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contacto"
            className="bg-emova-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-emova-secondary transition-colors font-noto"
          >
            Contáctanos
          </Link>
        </div>

        <button
          className={`md:hidden ${isScrolled ? "text-emova-grey" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-emova-grey hover:text-emova-primary font-medium font-noto"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contacto"
                className="bg-emova-primary text-white px-6 py-2 rounded-full font-semibold text-center hover:bg-emova-secondary font-noto"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contáctanos
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
