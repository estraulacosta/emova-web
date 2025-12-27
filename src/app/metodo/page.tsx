
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Method from "@/components/sections/Method";
import MetodoHero from "@/components/sections/MetodoHero";

export default function MetodoPage() {
  return (
    <main className="min-h-screen">
      {/* Header siempre visible */}
      <Navbar />
      {/* Bloque verde con título blanco, más separado del header */}
      <div className="w-full bg-[#B9C85E] flex justify-center items-center" style={{height: '220px', marginTop: '48px'}}>
        <h1 className="text-base sm:text-xl md:text-6xl font-playfair font-bold text-white text-center">Método</h1>
      </div>
      <div>
        <MetodoHero />
        <Method />
      </div>
      <Footer />
    </main>
  );
}
