"use client";

import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-[#9FB350] text-white pt-8 pb-4 px-4 md:px-0 font-noto">
      <div className="max-w-7xl mx-auto">
        {/* Bloque superior: logo y redes */}
        <div className="flex items-center justify-between pb-4 border-b border-white/30">
          <Link href="/" className="flex items-center">
            <Image src="/assets/logo_blanco.svg" alt="Emova Logo" width={160} height={40} className="h-12 w-auto" />
          </Link>
          <div className="flex items-center gap-4">
            <span className="font-playfair font-bold text-lg mr-2">Síguenos</span>
            <a href="#" aria-label="Facebook" className="hover:scale-110 transition-transform">
              <img src="/assets/Facebook.svg" alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:scale-110 transition-transform" id="footer-instagram-icon">
              <img src="/assets/Instagram.svg" alt="Instagram" className="w-8 h-8" />
            </a>
          </div>
        </div>
        {/* Bloque medio: columnas en una sola línea */}
        <div className="py-8 border-b border-white/20">
          <div className="footer-sections-row grid grid-cols-1 lg:grid-cols-5 gap-8 w-full">
            {/* Links */}
            <div className="footer-section min-w-[140px]">
              <h4 className="font-playfair font-bold mb-2 text-lg">Links</h4>
              <ul className="space-y-1 text-white/90">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/nosotros" className="hover:underline">Nosotros</Link></li>
                <li><Link href="/evidencia" className="hover:underline">Evidencia</Link></li>
                <li><Link href="/metodo" className="hover:underline">Método</Link></li>
                <li><Link href="/diagnostico" className="hover:underline">Diagnóstico</Link></li>
                <li><Link href="/contacto" className="hover:underline">Contacto</Link></li>
              </ul>
            </div>
            {/* Soporte */}
            <div className="footer-section min-w-[140px]">
              <h4 className="font-playfair font-bold mb-2 text-lg">Soporte</h4>
              <ul className="space-y-1 text-white/90">
                <li><a href="#" className="hover:underline">Ayuda</a></li>
                <li><a href="#" className="hover:underline">Condiciones</a></li>
                <li><a href="#" className="hover:underline">Privacidad</a></li>
                <li><a href="#" className="hover:underline">Políticas</a></li>
              </ul>
            </div>
            {/* Servicios */}
            <div className="footer-section min-w-[140px]">
              <h4 className="font-playfair font-bold mb-2 text-lg">Servicios</h4>
              <ul className="space-y-1 text-white/90">
                <li><Link href="/metodo" className="hover:underline">Métodos</Link></li>
                <li><Link href="/evidencia" className="hover:underline">Evidencia</Link></li>
                <li><Link href="/diagnostico" className="hover:underline">Diagnóstico</Link></li>
              </ul>
            </div>
            {/* Contacto */}
            <div className="footer-contact min-w-[180px]">
              <h4 className="font-playfair font-bold mb-2 text-lg">Contacto</h4>
              <ul className="space-y-1 text-white/90">
                <li className="flex items-center gap-3">
                  <span className="inline-block w-8 h-8 flex-shrink-0">
                    <img src="/assets/Telefono.svg" alt="Teléfono" className="w-8 h-8" />
                  </span>
                  +56 9 9349 8688
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-block w-8 h-8 flex-shrink-0">
                    <img src="/assets/Correo.svg" alt="Correo" className="w-8 h-8" />
                  </span>
                  contacto@emova.com
                </li>
              </ul>
            </div>
            {/* Suscríbete */}
            <div className="footer-suscribe min-w-[220px] max-w-[320px]">
              <h4 className="font-playfair font-bold mb-2 text-lg">Suscríbete</h4>
              <div className="flex flex-col gap-2">
                <span className="text-white/90 text-sm font-noto leading-tight">
                  Mantente informado y listo para<br />revolucionar el mundo.
                </span>
                <Link href="/contacto" className="relative w-full mt-2 flex items-center h-12 rounded-lg px-4 pr-12 text-gray-500 bg-white hover:bg-gray-50 transition-colors group">
                  <span className="font-noto">Email</span>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9FB350] font-bold flex items-center group-hover:text-[#7a8c36] transition-colors text-xl">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Bloque inferior: copyright */}
        <div className="text-center text-white/80 text-xs mt-4 font-noto">
          Copyright © 2025 Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
