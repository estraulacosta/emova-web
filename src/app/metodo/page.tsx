

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Method from "@/components/sections/Method";
import MotionHeader from "@/components/sections/MotionHeader";
import { motion } from "framer-motion";

export default function MetodoPage() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      {/* Header siempre visible */}
      <Navbar />
      {/* Sección principal: solo Method, que ya incluye el header animado */}
      <div className="relative w-full flex-grow" style={{zIndex: 1}}>
        <Method />
      </div>
      <div style={{ position: 'relative', zIndex: 10, marginTop: 'auto' }}>
        <Footer />
      </div>
    </main>
  );
}
