import React from 'react';
import { Wrench, Network, LayoutDashboard, Settings2, ArrowRight } from 'lucide-react';

export default function Soluciones({ onNavigate }) {
  const solucionesList = [
    {
      icon: Wrench,
      title: 'Soluciones de ingeniería',
      description: 'Desarrollamos soluciones técnicas para necesidades específicas, definiendo los componentes y el alcance de cada proyecto según su entorno de aplicación.',
      motivo: 'Proyecto de ingeniería',
    },
    {
      icon: Network,
      title: 'Tecnología IoT',
      description: 'Conectamos sensores y dispositivos con plataformas que permiten consultar variables y visualizar información de los equipos monitoreados.',
      motivo: 'Solución IoT',
    },
    {
      icon: LayoutDashboard,
      title: 'Plataformas de monitoreo',
      description: 'Reunimos datos de terreno en interfaces que facilitan su consulta y ayudan a comprender lo que ocurre en la operación.',
      motivo: 'Plataforma CORDIA',
    },
    {
      icon: Settings2,
      title: 'Servicios de ingeniería',
      description: 'Abordamos los requerimientos técnicos de cada cliente con servicios definidos según las necesidades y objetivos del proyecto.',
      motivo: 'Servicios',
    },
  ];

  return (
    <section id="soluciones" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 border-t border-white/05">
      <div className="max-w-6xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="text-[#26d9d0] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            NUESTRAS SOLUCIONES
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#f4f7fb] tracking-tight">
            Ingeniería aplicada a tu <span className="text-[#26d9d0]">operación</span>
          </h2>
        </div>

        {/* Grid de 4 Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {solucionesList.map((solucion, index) => {
            const Icon = solucion.icon;
            return (
              <div
                key={index}
                className="glass-card glass-card-hover p-8 rounded-2xl border border-white/05 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#26d9d0]/10 text-[#26d9d0] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#f4f7fb] mb-3">
                    {solucion.title}
                  </h3>
                  <p className="text-[#8fa3b8] text-base leading-relaxed font-normal">
                    {solucion.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/05 flex items-center justify-between">
                  <span className="text-xs text-[#26d9d0] font-mono uppercase tracking-wider">
                    Tensiva IoT & Engineering
                  </span>
                  <button
                    onClick={() => onNavigate('contacto', solucion.motivo)}
                    className="text-xs font-semibold text-[#f4f7fb] hover:text-[#26d9d0] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Consultar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Botón CTA General */}
        <div className="text-center">
          <button
            onClick={() => onNavigate('contacto', 'Solución IoT')}
            className="px-8 py-4 rounded-xl bg-[#26d9d0] text-[#050b14] font-semibold text-base inline-flex items-center gap-3 hover:bg-[#1ebcb4] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Consultar por una solución</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
