import React from 'react';
import { Search, Compass, Cpu, CheckCircle2 } from 'lucide-react';

export default function Metodologia() {
  const etapas = [
    {
      num: '01',
      icon: Search,
      title: 'Entendemos la necesidad',
      description: 'Revisamos contigo el problema, el entorno de trabajo y la información que necesitas obtener.',
    },
    {
      num: '02',
      icon: Compass,
      title: 'Definimos el alcance',
      description: 'Establecemos los requisitos del proyecto y los equipos, sensores o plataformas necesarios.',
    },
    {
      num: '03',
      icon: Cpu,
      title: 'Desarrollamos e integramos',
      description: 'Trabajamos en la solución de ingeniería y en la conexión de sus componentes según los requisitos acordados.',
    },
    {
      num: '04',
      icon: CheckCircle2,
      title: 'Verificamos su funcionamiento',
      description: 'Comprobamos el comportamiento de la solución frente al alcance definido para el proyecto.',
    },
  ];

  return (
    <section id="metodologia" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 border-t border-white/05 bg-[#050b14]/60">
      <div className="max-w-6xl mx-auto">

        {/* Header de la sección */}
        <div className="text-center mb-16">
          <span className="text-[#26d9d0] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            CÓMO TRABAJAMOS EN TENSIVA
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#f4f7fb] tracking-tight">
            Una solución definida a partir de <span className="text-[#26d9d0]">tu operación</span>
          </h2>
        </div>

        {/* Grid de 4 Etapas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {etapas.map((etapa, index) => {
            const Icon = etapa.icon;
            return (
              <div
                key={index}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-white/05 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#26d9d0]/10 text-[#26d9d0] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-bold font-mono text-[#26d9d0]/40 group-hover:text-[#26d9d0] transition-colors">
                      {etapa.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-[#f4f7fb] mb-3">
                    {etapa.title}
                  </h3>

                  <p className="text-[#8fa3b8] text-sm leading-relaxed font-normal">
                    {etapa.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/05 flex items-center justify-between text-[11px] text-[#26d9d0] font-mono">
                  <span>Etapa {index + 1} de 4</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#26d9d0]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
