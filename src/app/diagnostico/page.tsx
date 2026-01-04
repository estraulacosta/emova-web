"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroDiagnostico from "@/components/sections/HeroDiagnostico";
import DecorativeRules from "@/components/ui/DecorativeRules";

export default function DiagnosticoPage() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <HeroDiagnostico />
      <DecorativeRules />
      <div className="relative z-50">
        <Footer />
      </div>
    </main>
  );
}
