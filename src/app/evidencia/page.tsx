import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroEvidencia from "@/components/sections/evidencia/HeroEvidencia";
import ConvergenciaSection from "@/components/sections/evidencia/ConvergenciaSection";
import ModeloSection from "@/components/sections/evidencia/ModeloSection";

export default function EvidenciaPage() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <HeroEvidencia />
      <ConvergenciaSection />
      <ModeloSection />
      {/* Aquí se agregarán las demás secciones */}
      <div className="relative z-40">
        <Footer />
      </div>
    </main>
  );
}
