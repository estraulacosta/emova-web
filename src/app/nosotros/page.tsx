import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroNosotros from "@/components/sections/nosotros/HeroNosotros";

export default function NosotrosPage() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <HeroNosotros />
      {/* Aquí se agregarán las demás secciones */}
      <div className="relative z-50">
        <Footer />
      </div>
    </main>
  );
}
