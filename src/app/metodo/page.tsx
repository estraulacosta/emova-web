import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Method from "@/components/sections/Method";

export default function MetodoPage() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Method />
      <div className="relative z-30">
        <Footer />
      </div>
    </main>
  );
}
