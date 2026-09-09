import React from 'react';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

export default function Hero({ onNavigate }) {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 z-10">
      {/* Detalle visual orbital decorativo (idéntico a tensiva.cl) */}
      <div className="absolute right-[-100px] top-[-50px] w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] border border-[#26d9d0]/15 rounded-full pointer-events-none -z-10 animate-pulse">
        <div className="absolute inset-12 border border-[#26d9d0]/10 rounded-full" />
        <div className="absolute inset-24 border border-[#26d9d0]/05 rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Badge superior estilo Tensiva */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card border border-[#26d9d0]/30 mb-8 backdrop-blur-md shadow-lg shadow-[#26d9d0]/10 hover:border-[#26d9d0]/50 transition-colors">
          <span className="w-2.5 h-2.5 rounded-full bg-[#26d9d0] shadow-[0_0_12px_#26d9d0] animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#c8f7f4] uppercase">
            TENSIVA
          </span>
        </div>

        {/* Titular Principal */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#f4f7fb] leading-[1.1] mb-6">
          Ingeniería y tecnología para{' '}
          <span className="text-[#26d9d0] text-glow-primary inline-block">
            supervisar tu operación
          </span>
        </h1>

        {/* Descripción de la portada */}
        <p className="text-base sm:text-xl text-[#8fa3b8] max-w-3xl leading-relaxed mb-10 font-normal">
          Desarrollamos soluciones de ingeniería e IoT que conectan equipos, sensores y plataformas para transformar los datos de terreno en información útil. Acompañamos a las empresas con soluciones y servicios adaptados a sus necesidades técnicas y operativas.
        </p>

        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => onNavigate('contacto', 'Proyecto de ingeniería')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#26d9d0] text-[#050b14] font-semibold text-base flex items-center justify-center gap-3 hover:bg-[#1ebcb4] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Cuéntanos tu proyecto</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => onNavigate('cordia')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card text-[#f4f7fb] font-medium text-base flex items-center justify-center gap-2 hover:bg-[#08111f] hover:border-[#26d9d0]/40 transition-all duration-300 border border-white/10 cursor-pointer"
          >
            <span>Conocer CORDIA</span>
            <Sparkles className="w-4 h-4 text-[#26d9d0]" />
          </button>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => onNavigate('nosotros')}>
        <span className="text-xs uppercase tracking-widest text-[#8fa3b8] mb-2">Desplazar</span>
        <ChevronDown className="w-5 h-5 text-[#26d9d0] animate-bounce" />
      </div>
    </section>
  );
}
