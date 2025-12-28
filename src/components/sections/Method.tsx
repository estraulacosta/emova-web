import Image from "next/image";

export default function Method() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[700px] bg-white">
      {/* SVG gráfico principal */}
      <div className="relative w-full flex justify-center items-center z-10" style={{ minHeight: 600, marginTop: '20px' }}>
        <svg width="966" height="795" viewBox="0 0 966 795" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-[80vw] md:max-w-[850px] w-full h-auto" style={{ transform: 'translateX(-25px)' }}>
          <g clipPath="url(#clip0_105_7205)">
            <path d="M965.41 393.12C964.22 267.26 911.64 153.69 827.63 72.39L506.9 393.12L832.03 718.25C914.42 636.32 965.43 522.86 965.43 397.48C965.43 396.03 965.42 394.58 965.4 393.12H965.41Z" stroke="#B9C85E" strokeWidth="2" strokeMiterlimit="10"/>
            <path d="M149.71 35.92C58.43 127.66 1.66 253.76 0.5 393.12H506.9L149.71 35.92Z" stroke="#B9C85E" strokeWidth="2" strokeMiterlimit="10"/>
            <path d="M851.07 397.47C851.07 396.01 851.03 394.57 851.01 393.11H734.79C734.82 394.56 734.85 396.01 734.85 397.47C734.85 459.17 709.65 514.98 668.98 555.18L751.16 637.36C812.86 576.12 851.07 491.26 851.07 397.47Z" fill="#9FB350"/>
            <path d="M746.75 153.28C686.05 95.18 603.73 59.48 513.07 59.48C511.01 59.48 508.96 59.52 506.91 59.56C415.56 61.19 333.07 99.05 273.18 159.39L355.36 241.57C394.22 202.26 447.66 177.4 506.91 175.79C508.96 175.73 511.01 175.7 513.07 175.7C571.64 175.7 624.89 198.41 664.54 235.5C706.82 275.05 733.6 330.95 734.8 393.12H851.02C849.83 298.85 810.06 213.88 746.76 153.28H746.75Z" fill="#D9D9D9"/>
            <path d="M668.98 555.18C628.92 594.79 573.85 619.25 513.07 619.25C511.01 619.25 508.96 619.22 506.91 619.16C445.46 617.48 390.26 590.81 351.09 548.94C314 509.3 291.29 456.04 291.29 397.47C291.29 396.01 291.32 394.56 291.35 393.11C292.49 334.05 316.7 280.66 355.36 241.56L273.18 159.38C213.49 219.52 176.28 301.97 175.13 393.11C175.11 394.56 175.07 396.01 175.07 397.47C175.07 488.13 210.77 570.45 268.87 631.15C329.08 694.05 413.36 733.72 506.91 735.39C508.96 735.43 511.01 735.47 513.07 735.47C605.95 735.47 690.07 698 751.16 637.36L668.98 555.18Z" fill="#B9C85E"/>
            <path d="M231.72 117.41C303.61 45.2 403.12 0.5 513.07 0.5C623.02 0.5 717.01 42.76 788.38 111.48" stroke="#B9C85E" strokeWidth="2" strokeMiterlimit="10"/>
            <path d="M792.81 679.13C721.05 750.4 622.2 794.44 513.07 794.44C293.83 794.44 116.1 616.71 116.1 397.47C116.1 395.97 116.1 394.48 116.12 392.99" stroke="#B9C85E" strokeWidth="2" strokeMiterlimit="10"/>
            <path d="M514.12 621.05C637.34 621.05 737.23 521.16 737.23 397.94C737.23 274.72 637.34 174.83 514.12 174.83C390.9 174.83 291.01 274.72 291.01 397.94C291.01 521.16 390.9 621.05 514.12 621.05Z" fill="#F9FAFB"/>
          </g>
          <defs>
            <clipPath id="clip0_105_7205">
              <rect width="965.94" height="794.94" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        {/* Contenido centrado dentro del gráfico */}
        <div className="absolute top-1/2 left-1/2 z-20 flex flex-col items-center justify-center" style={{transform: 'translate(-50%, -50%)', maxWidth: '420px'}}>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#7A7A7A] text-center mb-2">Modelo de<br/>transformación <span className="text-[#9FB350]">neuroemocional™</span></h2>
          <p className="text-base md:text-lg text-emova-grey/80 text-center font-noto mb-2">El único método que garantiza<br/>cambios neurológicos reales y medibles</p>
        </div>
      </div>
      {/* Manos decorativas posicionadas como el prototipo azul */}
      {/* Mano izquierda: ajustada y rotada para que los dedos toquen el extremo superior izquierdo del gráfico */}
      <Image
        src="/assets/Mano%20C.png"
        alt="Mano C"
        width={700}
        height={700}
        className="absolute left-[-200px] top-[-40px] md:left-[-320px] md:top-[-80px] w-[420px] md:w-[700px] pointer-events-none select-none"
        style={{ zIndex: 50, transform: 'scaleX(-1) rotate(-18deg)' }}
      />
      {/* Mano derecha: ajustada y rotada para que los dedos toquen el extremo inferior derecho del gráfico */}
      <Image
        src="/assets/Mano%20dedos.png"
        alt="Mano dedos"
        width={700}
        height={700}
        className="absolute right-[-200px] bottom-[-40px] md:right-[-320px] md:bottom-[-80px] w-[420px] md:w-[700px] pointer-events-none select-none"
        style={{ zIndex: 50, transform: 'scaleX(-1) rotate(16deg)' }}
      />
      {/* Asterisco decorativo */}
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-16 bottom-32 md:left-32 md:bottom-40 z-0">
        <text x="0" y="48" fontFamily="Playfair Display" fontSize="60" fill="#B9C85E">*</text>
      </svg>
    </section>
  );
}
