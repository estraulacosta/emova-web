import Image from "next/image";
import DiagnosticoResultados from "@/components/sections/DiagnosticoResultados";

export default function PreguntaSimple() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-20 bg-emova-primary">
      {/* Título arriba - Desktop */}
      <div className="hidden lg:block absolute top-0 left-0 w-full flex justify-end pr-16" style={{transform: 'translateX(1000px)'}}>
        <span className="text-emova-secondary text-2xl font-semibold font-playfair">La pregunta es simple</span>
      </div>

      {/* Título arriba - Tablet y Móvil */}
      <div className="lg:hidden w-full flex justify-center mb-8">
        <span className="text-emova-secondary text-xl md:text-2xl font-semibold font-playfair">La pregunta es simple</span>
      </div>

      {/* Burbuja SVG y personas con texto dentro - Desktop */}
      <div className="hidden lg:block relative w-full flex justify-center items-center" style={{height: 420, marginTop: '75px'}}>
        <div style={{transform: 'rotate(180deg) translateX(560px) translateY(80px)'}} className="relative z-0">
          <Image
            src="/assets/burbuja_final.svg"
            alt="Burbuja"
            width={750}
            height={750}
          />
        </div>
        {/* Texto dentro de la burbuja */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[520px] w-full flex flex-col items-center z-20 px-4">
          <h3 className="text-emova-tertiary text-[1.971rem] md:text-[2.957rem] font-extrabold font-playfair mb-4 text-center leading-tight break-words" style={{paddingLeft: '5px', paddingRight: '5px', wordBreak: 'break-word'}}>¿Cuánto te está costando<br /><span className="text-black font-extrabold">NO saber qué está roto en tu infraestructura humana?</span></h3>
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

      {/* Burbuja SVG y personas con texto dentro - Tablet */}
      <div className="hidden md:block lg:hidden relative w-full flex justify-center items-center" style={{height: 350, marginTop: '20px'}}>
        <div style={{transform: 'rotate(180deg) translateX(180px) translateY(10px)'}} className="z-10">
          <Image
            src="/assets/burbuja_final.svg"
            alt="Burbuja"
            width={450}
            height={300}
          />
        </div>
        {/* Texto dentro de la burbuja */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[420px] w-full flex flex-col items-center z-20 px-4">
          <h3 className="text-emova-tertiary text-[1.5rem] font-extrabold font-playfair mb-3 text-center leading-tight break-words" style={{paddingLeft: '5px', paddingRight: '5px', wordBreak: 'break-word'}}>¿Cuánto te está costando<br /><span className="text-black font-extrabold">NO saber qué está roto en tu infraestructura humana?</span></h3>
        </div>
        {/* Persona sentada centrada */}
        <div className="relative left-1/2 bottom-6 z-20" style={{transform: 'translateX(-230px) translateY(-138px)'}}>
          <Image
            src="/assets/Personas Sentadas.png"
            alt="Persona Sentada"
            width={450}
            height={450}
            style={{objectFit: 'contain'}}
          />
        </div>
      </div>

      {/* Burbuja SVG y personas con texto dentro - Móvil */}
      <div className="md:hidden relative w-full flex justify-center items-center" style={{height: 300, marginTop: '10px'}}>
        <div style={{transform: 'rotate(180deg)'}} className="relative z-10">
          <Image
            src="/assets/burbuja_final.svg"
            alt="Burbuja"
            width={230}
            height={450}
          />
        </div>
        {/* Texto dentro de la burbuja */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[300px] w-full flex flex-col items-center z-20 px-3">
          <h3 className="text-emova-tertiary text-[1.1rem] font-extrabold font-playfair mb-2 text-center leading-tight break-words" style={{paddingLeft: '5px', paddingRight: '5px', wordBreak: 'break-word'}}>¿Cuánto te está costando<br /><span className="text-black font-extrabold">NO saber qué está roto en tu infraestructura humana?</span></h3>
        </div>
        {/* Persona sentada centrada */}
        <div className="absolute left-1/2 bottom-4 z-20" style={{transform: 'translateX(-50%) translateY(-60px)'}}>
          <Image
            src="/assets/Personas Sentadas.png"
            alt="Persona Sentada"
            width={320}
            height={20}
            style={{objectFit: 'contain'}}
          />
        </div>
      </div>

      {/* Texto debajo de la burbuja */}
      <section className="z-10 w-full flex flex-col items-center justify-center py-0 md:py-32 lg:py-40 min-h-[400px] md:min-h-[500px]" style={{background: '#F7F7F7', marginTop: '-92.5px'}}>
        <p className="text-black text-sm md:text-base font-noto text-center max-w-xl mb-6 px-4">
          Cada día que esperas, pierdes más talento, más productividad y más oportunidades de convertir tu factor humano en ventaja competitiva.
        </p>
  
        <a href="/contacto" 
        className="inline-flex items-center gap-2 px-2.5 md:px-8 py-3 md:py-4 bg-emova-primary text-white font-semibold font-noto rounded-full hover:bg-emova-secondary transition-colors text-sm md:text-base"
        >
          Agenda tu diagnóstico neuroemocional gratuito
          <span className="bg-white text-emova-primary rounded-full px-2 py-1 font-bold">+</span>
        </a>
      </section>
      <DiagnosticoResultados />
      {/* Elimina el espacio verde debajo de la última sección ajustando el margen inferior */}
    </section>
  );
}
