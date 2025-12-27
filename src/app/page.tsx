import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Paradox from "@/components/sections/Paradox";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Result from "@/components/sections/Result";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="problema">
        <Problem />
      </div>
      <Paradox />
      <div id="solucion">
        <Solution />
      </div>
      <Result />
      <Footer />
    </main>
  );
}

