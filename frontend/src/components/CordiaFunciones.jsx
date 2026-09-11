import React from 'react';
import { Activity, AlertTriangle, Gauge, Video, Layers, FileSearch } from 'lucide-react';

export default function CordiaFunciones() {
  const funciones = [
    {
      icon: Activity,
      title: 'Monitoreo de tensión',
      description: 'Supervisa la tensión de las líneas de vida y consulta sus mediciones desde la plataforma.',
    },
    {
      icon: AlertTriangle,
      title: 'Detección automática de caídas',
      description: 'Identifica eventos de caída y genera alertas para dar aviso al personal encargado de la supervisión.',
    },
    {
      icon: Gauge,
      title: 'Detección de cambios de tensión',
      description: 'Reconoce variaciones de tensión en la línea y genera alertas que permiten revisar la condición detectada.',
    },
    {
      icon: Video,
      title: 'Videomonitoreo',
      description: 'Accede a las imágenes del área supervisada para complementar las mediciones con una referencia visual de lo que ocurre.',
    },
    {
      icon: Layers,
      title: 'Consulta integrada',
      description: 'Reúne información de tensión, alertas y video en una misma plataforma para facilitar el trabajo del operador.',
    },
    {
      icon: FileSearch,
      title: 'Evaluación de eventos',
      description: 'Utiliza las mediciones y las imágenes para comprender la situación ante una alerta y apoyar la evaluación del incidente.',
    },
  ];

  return (
    <section id="funciones-cordia" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 border-t border-white/05">
      <div className="max-w-6xl mx-auto">

        {/* Header de la sección */}
        <div className="text-center mb-16">
          <span className="text-[#26d9d0] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            FUNCIONES DE CORDIA
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#f4f7fb] tracking-tight">
            Información y alertas para <span className="text-[#26d9d0]">apoyar la supervisión</span>
          </h2>
        </div>

        {/* Grid de 6 Tarjetas Funcionales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {funciones.map((func, index) => {
            const Icon = func.icon;
            return (
              <div
                key={index}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-white/05 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#26d9d0]/10 text-[#26d9d0] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#f4f7fb] mb-2.5">
                    {func.title}
                  </h3>
                  <p className="text-[#8fa3b8] text-sm leading-relaxed font-normal">
                    {func.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/05 flex items-center justify-between text-[11px] text-[#26d9d0] font-mono">
                  <span>Módulo CORDIA</span>
                  <span>0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
