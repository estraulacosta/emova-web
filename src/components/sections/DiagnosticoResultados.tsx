export default function DiagnosticoResultados() {
  return (
    <section className="z-10 w-full flex flex-col items-center justify-center pb-20 bg-[#F7F7F7]" style={{marginTop: '-50px'}}>
      <h2 className="text-emova-primary text-lg md:text-xl lg:text-2xl font-semibold font-noto mb-12 text-center px-4">
        Solo para empresas comprometidas con resultados reales
      </h2>

      {/* Versión Desktop */}
      <div className="hidden lg:grid grid-cols-3 gap-8 w-full max-w-3xl mx-auto items-center justify-center">
        {/* 0% Inversión */}
        <div className="flex flex-col items-center">
          <span className="text-emova-primary text-7xl font-bold font-playfair mb-2">0%</span>
          <span className="text-emova-secondary text-base font-noto">Inversión</span>
        </div>
        {/* Asterisco */}
        <div className="flex flex-col items-center">
          <span className="text-emova-primary text-8xl font-extrabold">*</span>
        </div>
        {/* 1+1 */}
        <div className="flex flex-col items-center">
          <span className="text-emova-primary text-7xl font-bold font-playfair mb-2">1+1</span>
          <span className="text-emova-secondary text-base font-noto text-center">1 semana de evaluación + 1<br />sesión de presentación de resultados</span>
        </div>
      </div>

      {/* Versión Tablet */}
      <div className="hidden md:grid lg:hidden grid-cols-3 gap-6 w-full max-w-2xl mx-auto items-center justify-center px-4">
        {/* 0% Inversión */}
        <div className="flex flex-col items-center">
          <span className="text-emova-primary text-6xl font-bold font-playfair mb-2">0%</span>
          <span className="text-emova-secondary text-sm font-noto">Inversión</span>
        </div>
        {/* Asterisco */}
        <div className="flex flex-col items-center">
          <span className="text-emova-primary text-7xl font-extrabold">*</span>
        </div>
        {/* 1+1 */}
        <div className="flex flex-col items-center">
          <span className="text-emova-primary text-6xl font-bold font-playfair mb-2">1+1</span>
          <span className="text-emova-secondary text-sm font-noto text-center">1 semana de evaluación + 1<br />sesión de presentación de<br />resultados</span>
        </div>
      </div>

      {/* Versión Móvil */}
      <div className="md:hidden grid grid-cols-3 gap-4 w-full max-w-sm mx-auto items-center justify-center px-4">
        {/* 0% Inversión */}
        <div className="flex flex-col items-center">
          <span className="text-emova-primary text-4xl font-bold font-playfair mb-1">0%</span>
          <span className="text-emova-secondary text-xs font-noto text-center">Inversión</span>
        </div>
        {/* Asterisco */}
        <div className="flex flex-col items-center">
          <span className="text-emova-primary text-5xl font-extrabold">*</span>
        </div>
        {/* 1+1 */}
        <div className="flex flex-col items-center">
          <span className="text-emova-primary text-4xl font-bold font-playfair mb-1">1+1</span>
          <span className="text-emova-secondary text-xs font-noto text-center leading-tight">1 semana de evaluación + 1 sesión de presentación de resultados</span>
        </div>
      </div>

      {/* Requisito */}
      <div className="flex flex-col items-center mt-12 md:mt-16 px-4">
        <span className="text-emova-primary text-xl md:text-2xl font-bold font-playfair mb-2">Requisito</span>
        <span className="text-emova-secondary text-xs md:text-sm font-noto text-center max-w-xs">
          Compromiso de gerencia para implementar plan de acción si los resultados lo justifican
        </span>
      </div>
    </section>
  );
}
