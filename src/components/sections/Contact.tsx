"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <footer className="bg-emova-grey text-white pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-playfair font-bold mb-6">Contacto</h2>
            <p className="text-xl font-libre mb-8 opacity-80">
              La revolución humana comienza ahora.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-emova-primary" />
                </div>
                <div>
                  <p className="text-sm opacity-60">Email</p>
                  <a href="mailto:contacto@emova.cl" className="hover:text-emova-primary transition-colors">contacto@emova.cl</a>
                  <br />
                  <a href="mailto:cecilia.rivera@emova.cl" className="hover:text-emova-primary transition-colors">cecilia.rivera@emova.cl</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-emova-primary" />
                </div>
                <div>
                  <p className="text-sm opacity-60">Teléfono</p>
                  <a href="tel:+56993498688" className="hover:text-emova-primary transition-colors">+56 9 9349 8688</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 bg-white/5 p-8 rounded-2xl backdrop-blur-sm"
          >
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium mb-2 opacity-80">Nombre</label>
              <input id="contact-name" name="name" type="text" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-emova-primary transition-colors" placeholder="Tu nombre" />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium mb-2 opacity-80">Email</label>
              <input id="contact-email" name="email" type="email" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-emova-primary transition-colors" placeholder="tu@email.com" />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium mb-2 opacity-80">Mensaje</label>
              <textarea id="contact-message" name="message" rows={4} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-emova-primary transition-colors" placeholder="¿Cómo podemos ayudarte?" />
            </div>
            <button className="w-full bg-emova-primary hover:bg-emova-secondary text-white font-bold py-4 rounded-lg transition-colors">
              Enviar Mensaje
            </button>
          </motion.form>
        </div>

        <div className="border-t border-white/10 pt-12 grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="relative w-32 h-10 mb-6">
               <span className="text-2xl font-playfair font-bold">EMOVA</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-emova-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-emova-primary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-emova-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Links</h4>
            <ul className="space-y-2 opacity-70 text-sm">
              <li><Link href="/" className="hover:text-emova-primary">Home</Link></li>
              <li><Link href="#nosotros" className="hover:text-emova-primary">Nosotros</Link></li>
              <li><Link href="#servicios" className="hover:text-emova-primary">Servicios</Link></li>
              <li><Link href="#contacto" className="hover:text-emova-primary">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Soporte</h4>
            <ul className="space-y-2 opacity-70 text-sm">
              <li><Link href="#" className="hover:text-emova-primary">Ayuda</Link></li>
              <li><Link href="#" className="hover:text-emova-primary">Condiciones</Link></li>
              <li><Link href="#" className="hover:text-emova-primary">Privacidad</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Suscríbete</h4>
            <p className="text-sm opacity-70 mb-4">Mantente informado y listo para revolucionar el mundo.</p>
            <div className="flex gap-2">
              <label htmlFor="subscribe-email" className="sr-only">Email para suscripción</label>
              <input id="subscribe-email" name="subscribe-email" type="email" placeholder="Email" className="bg-white/10 rounded px-3 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-emova-primary" />
              <button className="bg-emova-primary px-3 py-2 rounded hover:bg-emova-secondary transition-colors">→</button>
            </div>
          </div>
        </div>

        <div className="text-center text-sm opacity-40 mt-12">
          Copyright © 2025 Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
