import Image from "next/image";
import DiagnosticoResultados from "@/components/sections/DiagnosticoResultados.tsx";

export default function PreguntaSimple() {
  return (
    <section className="relative flex flex-col items-center justify-center py-20" style={{background: '#E8F5CB'}}>
      {/* Título arriba */}
      <div className="absolute top-10 left-0 w-full flex justify-end pr-16" style={{transform: 'translateX(-500px)'}}>
        <span className="text-[#9FB350] text-2xl font-semibold">La pregunta es simple</span>
      </div>
      {/* Burbuja SVG y personas con texto dentro */}
      <div className="relative w-full flex justify-center items-center" style={{height: 420, marginTop: '75px'}}>
        <div style={{transform: 'rotate(180deg)'}} className="z-10">
          <Image
            src="/assets/burbuja_final.svg"
            alt="Burbuja"
            width={700}
            height={400}
          />
        </div>
        {/* Texto dentro de la burbuja */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[520px] w-full flex flex-col items-center z-20 px-4">
          <h3 className="text-[#9FB350] text-[1.971rem] md:text-[2.957rem] font-extrabold mb-4 text-center leading-tight break-words" style={{paddingLeft: '5px', paddingRight: '5px', wordBreak: 'break-word'}}>¿Cuánto te está costando<br /><span className="text-black font-extrabold">NO saber qué está roto en tu infraestructura humana?</span></h3>
        </div>
        {/* Persona sentada centrada */}
        <div className="absolute left-1/2 bottom-8 z-20" style={{transform: 'translateX(-50%)'}}>
          <Image
            src="/assets/Personas Sentadas.png"
            alt="Persona Sentada"
            width={750}
            height={750}
            style={{objectFit: 'contain'}}
          />
        </div>
      </div>
      {/* Texto debajo de la burbuja */}
      <section className="w-full flex flex-col items-center justify-center py-40 min-h-[500px]" style={{background: '#F7F7F7', marginTop: '-92.5px'}}>
        <p className="text-black text-base text-center max-w-xl mb-6">
          Cada día que esperas, pierdes más talento, más productividad y más oportunidades de convertir tu factor humano en ventaja competitiva.
        </p>
        <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#B9C85E] text-white font-semibold rounded-full hover:bg-[#9FB350] transition-colors">
          Agenda tu diagnóstico neuroemocional gratuito
          <span className="bg-white text-[#B9C85E] rounded-full px-2 py-1 font-bold">+</span>
        </button>
      </section>
      <DiagnosticoResultados />
      {/* Elimina el espacio verde debajo de la última sección ajustando el margen inferior */}
    </section>
  );
}
