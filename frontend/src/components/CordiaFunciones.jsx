import React, { useState } from 'react';
import { Activity, AlertTriangle, Gauge, Video, Layers, FileSearch, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CordiaFunciones() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const funciones = [
    {
      id: '01',
      icon: Activity,
      title: 'Monitoreo de tensión',
      description: 'Supervisa la tensión de las líneas de vida y consulta sus mediciones desde la plataforma.',
      badge: 'SENSORES CABLE',
      detail: 'Lectura continua de esfuerzo mecánico en tiempo real',
    },
    {
      id: '02',
      icon: AlertTriangle,
      title: 'Detección automática de caídas',
      description: 'Identifica eventos de caída y genera alertas para dar aviso al personal encargado de la supervisión.',
      badge: 'ALERTA INMEDIATA',
      detail: 'Activación automática de protocolos de aviso',
    },
    {
      id: '03',
      icon: Gauge,
      title: 'Detección de cambios de tensión',
      description: 'Reconoce variaciones de tensión en la línea y genera alertas que permiten revisar la condición detectada.',
      badge: 'VARIACIÓN CABLE',
      detail: 'Monitoreo preventivo de fluctuaciones físicas',
    },
    {
      id: '04',
      icon: Video,
      title: 'Videomonitoreo',
      description: 'Accede a las imágenes del área supervisada para complementar las mediciones con una referencia visual de lo que ocurre.',
      badge: 'CAM FEED 24/7',
      detail: 'Verificación visual simultánea del entorno',
    },
    {
      id: '05',
      icon: Layers,
      title: 'Consulta integrada',
      description: 'Reúne información de tensión, alertas y video en una misma plataforma para facilitar el trabajo del operador.',
      badge: 'CONSOLA UNIFICADA',
      detail: 'Centralización de variables operativas en un solo panel',
    },
    {
      id: '06',
      icon: FileSearch,
      title: 'Evaluación de eventos',
      description: 'Utiliza las mediciones y las imágenes para comprender la situación ante una alerta y apoyar la evaluación del incidente.',
      badge: 'REVISIÓN DE INCIDENTES',
      detail: 'Datos objetivos para el análisis posterior al evento',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % funciones.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + funciones.length) % funciones.length);
  };

  return (
    <section id="funciones-cordia" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 border-t border-white/05 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">

        {/* Encabezado */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-[#26d9d0]/30 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#26d9d0]" />
            <span className="text-xs font-semibold tracking-[0.2em] text-[#c8f7f4] uppercase">
              FUNCIONES DE CORDIA
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#f4f7fb] tracking-tight">
            Información y alertas para <span className="text-[#26d9d0]">apoyar la supervisión</span>
          </h2>
        </div>

        {/* Contenedor del Carrusel Ultra-Suave 60 FPS */}
        <div className="relative min-h-[400px] sm:min-h-[350px] flex items-center justify-center my-8 perspective-1000">
          {funciones.map((func, index) => {
            const Icon = func.icon;
            
            // Offset circular respecto al índice activo
            let offset = index - currentIndex;
            if (offset > funciones.length / 2) offset -= funciones.length;
            if (offset < -funciones.length / 2) offset += funciones.length;

            const absOffset = Math.abs(offset);
            const isCurrent = offset === 0;

            // Transiciones con aceleración por hardware (GPU)
            const translateX = offset * 280; // Desplazamiento horizontal fluido en píxeles
            const scale = Math.max(0.75, 1 - absOffset * 0.12);
            const opacity = isCurrent ? 1 : Math.max(0, 0.45 - (absOffset - 1) * 0.35);
            const zIndex = 30 - absOffset * 10;
            const blur = isCurrent ? 0 : 3;

            return (
              <div
                key={func.id}
                onClick={() => setCurrentIndex(index)}
                style={{
                  transform: `translate3d(${translateX}px, 0, 0) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                  filter: `blur(${blur}px)`,
                  willChange: 'transform, opacity, filter',
                  transition: 'transform 750ms cubic-bezier(0.16, 1, 0.3, 1), opacity 750ms cubic-bezier(0.16, 1, 0.3, 1), filter 750ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className={`absolute w-full max-w-xl glass-card p-8 sm:p-10 rounded-3xl border text-left cursor-pointer select-none ${
                  isCurrent 
                    ? 'border-[#26d9d0]/50 bg-[#08111f]/95 shadow-[0_20px_50px_rgba(0,0,0,0.6)]' 
                    : 'border-white/10 bg-[#050b14]/80'
                }`}
              >
                {/* Header de la Tarjeta */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-colors duration-500 ${
                    isCurrent ? 'bg-[#26d9d0]/15 text-[#26d9d0] border-[#26d9d0]/30' : 'bg-white/5 text-[#8fa3b8] border-white/10'
                  }`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs px-3 py-1 rounded-full bg-[#26d9d0]/10 text-[#26d9d0] font-mono tracking-wider">
                      {func.badge}
                    </span>
                    <span className="text-sm font-mono text-[#8fa3b8]">
                      [{func.id}/06]
                    </span>
                  </div>
                </div>

                {/* Título & Descripción */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#f4f7fb] mb-3">
                    {func.title}
                  </h3>
                  <p className="text-[#8fa3b8] text-base leading-relaxed font-normal">
                    {func.description}
                  </p>
                </div>

                {/* Footer de Tarjeta Activa */}
                <div className="pt-5 border-t border-white/05 flex items-center justify-between text-xs font-mono text-[#26d9d0]">
                  <span>{func.detail}</span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>CORDIA PLATFORM</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controles de Navegación Manual */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full glass-card border border-white/10 flex items-center justify-center text-[#f4f7fb] hover:text-[#26d9d0] hover:border-[#26d9d0]/40 transition-all duration-300 cursor-pointer active:scale-95"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Indicadores / Puntos de Página */}
          <div className="flex items-center gap-2">
            {funciones.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-500 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? 'w-9 h-2.5 bg-[#26d9d0]'
                    : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Ir a tarjeta ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full glass-card border border-white/10 flex items-center justify-center text-[#f4f7fb] hover:text-[#26d9d0] hover:border-[#26d9d0]/40 transition-all duration-300 cursor-pointer active:scale-95"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
}
