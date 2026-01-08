"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroDiagnostico from "@/components/sections/HeroDiagnostico";
import DecorativeRules from "@/components/ui/DecorativeRules";
import PreguntaSimple from "@/components/sections/PreguntaSimple";

export default function DiagnosticoPage() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <HeroDiagnostico />
      <DecorativeRules />
      <PreguntaSimple />
      <div className="relative z-50">
        <Footer />
      </div>
    </main>
  );
}
