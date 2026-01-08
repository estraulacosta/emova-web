export default function DiagnosticoResultados() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 bg-[#F7F7F7]" style={{marginTop: '-150px'}}>
      <h2 className="text-emova-primary text-xl md:text-2xl font-semibold mb-12 text-center">
        Solo para empresas comprometidas con resultados reales
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl mx-auto items-center justify-center">
        {/* 0% Inversión */}
        <div className="flex flex-col items-center">
          <span className="text-emova-primary text-6xl md:text-7xl font-bold mb-2">0%</span>
          <span className="text-emova-secondary text-base">Inversión</span>
        </div>
        {/* Asterisco */}
        <div className="flex flex-col items-center">
          <span className="text-emova-primary text-7xl md:text-8xl font-extrabold">*</span>
        </div>
        {/* 1+1 */}
        <div className="flex flex-col items-center">
          <span className="text-emova-primary text-6xl md:text-7xl font-bold mb-2">1+1</span>
          <span className="text-emova-secondary text-base text-center">1 semana de evaluación + 1<br />sesión de presentación de resultados</span>
        </div>
      </div>
      {/* Requisito */}
      <div className="flex flex-col items-center mt-16">
        <span className="text-emova-primary text-2xl font-bold mb-2">Requisito</span>
        <span className="text-emova-secondary text-sm text-center max-w-xs">
          Compromiso de gerencia para implementar plan de acción si los resultados lo justifican
        </span>
      </div>
    </section>
  );
}
