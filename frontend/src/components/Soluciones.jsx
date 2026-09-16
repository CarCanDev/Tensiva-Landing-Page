import React from 'react';
import { Wrench, Network, LayoutDashboard, Settings2, ArrowRight, Cpu, Activity, ShieldCheck } from 'lucide-react';
import stock2 from '../assets/stock2.jpg';
import stock4 from '../assets/stock4.jpg';

export default function Soluciones({ onNavigate }) {
  return (
    <section id="soluciones" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 border-t border-white/05">
      <div className="max-w-6xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-[#26d9d0]/30 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#26d9d0]" />
            <span className="text-xs font-semibold tracking-[0.2em] text-[#c8f7f4] uppercase">
              NUESTRAS SOLUCIONES
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#f4f7fb] tracking-tight">
            Ingeniería aplicada a tu <span className="text-[#26d9d0]">operación</span>
          </h2>
        </div>

        {/* Bento Grid Layout (12 Columnas Asimétricas) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-14">
          
          {/* Card 1 Bento Destacada: Soluciones de Ingeniería (7 Cols) */}
          <div className="md:col-span-7 glass-card glass-card-hover p-8 sm:p-10 rounded-3xl border border-white/05 flex flex-col justify-between relative overflow-hidden group">
            
            {/* Fondo / Detalle gráfico decorativo Bento */}
            <div className="absolute right-[-20px] bottom-[-20px] w-48 h-48 bg-[#26d9d0]/05 rounded-full blur-2xl pointer-events-none group-hover:bg-[#26d9d0]/10 transition-colors" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#26d9d0]/10 text-[#26d9d0] flex items-center justify-center border border-[#26d9d0]/20">
                  <Wrench className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#26d9d0]/10 text-[#26d9d0] tracking-wider uppercase">
                  BENTO 01 · DESARROLLO TÉCNICO
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#f4f7fb] mb-4">
                Soluciones de ingeniería
              </h3>
              <p className="text-[#8fa3b8] text-base leading-relaxed font-normal mb-6">
                Desarrollamos soluciones técnicas para necesidades específicas, definiendo los componentes y el alcance de cada proyecto según su entorno de aplicación.
              </p>
            </div>

            <div className="pt-6 border-t border-white/05 flex items-center justify-between">
              <span className="text-xs text-[#8fa3b8] font-mono flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#26d9d0]" />
                <span>Diseño y Alcance a Medida</span>
              </span>
              <button
                onClick={() => onNavigate('contacto', 'Proyecto de ingeniería')}
                className="text-xs font-semibold text-[#26d9d0] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Consultar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2 Bento: Tecnología IoT (5 Cols) */}
          <div className="md:col-span-5 glass-card glass-card-hover p-8 rounded-3xl border border-white/05 flex flex-col justify-between relative group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#26d9d0]/10 text-[#26d9d0] flex items-center justify-center border border-[#26d9d0]/20">
                  <Network className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#26d9d0]/10 text-[#26d9d0] uppercase">
                  BENTO 02 · IoT
                </span>
              </div>

              {/* Imagen decorativa stock4 (Sensores IoT y hardware conectado) */}
              <div className="relative h-36 sm:h-40 w-full rounded-2xl overflow-hidden mb-5 border border-white/10 group-hover:border-[#26d9d0]/30 transition-all">
                <img
                  src={stock4}
                  alt="Instalación de sensores IoT y hardware técnico Tensiva"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08111f] via-[#08111f]/30 to-transparent" />
                <span className="absolute bottom-2.5 left-3 text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-[#050b14]/85 text-[#26d9d0] border border-[#26d9d0]/30 backdrop-blur-md">
                  Hardware & Sensores
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#f4f7fb] mb-3">
                Tecnología IoT
              </h3>
              <p className="text-[#8fa3b8] text-sm leading-relaxed font-normal mb-6">
                Conectamos sensores y dispositivos con plataformas que permiten consultar variables y visualizar información de los equipos monitoreados.
              </p>
            </div>

            <div className="pt-6 border-t border-white/05 flex items-center justify-between">
              <span className="text-xs text-[#8fa3b8] font-mono flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-[#26d9d0]" />
                <span>Sensores Conectados</span>
              </span>
              <button
                onClick={() => onNavigate('contacto', 'Solución IoT')}
                className="text-xs font-semibold text-[#26d9d0] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Consultar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3 Bento: Plataformas de Monitoreo (5 Cols) */}
          <div className="md:col-span-5 glass-card glass-card-hover p-8 rounded-3xl border border-white/05 flex flex-col justify-between relative group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#26d9d0]/10 text-[#26d9d0] flex items-center justify-center border border-[#26d9d0]/20">
                  <LayoutDashboard className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#26d9d0]/10 text-[#26d9d0] uppercase">
                  BENTO 03 · MONITOREO
                </span>
              </div>

              {/* Imagen decorativa stock2 (Laptop con código / software de monitoreo) */}
              <div className="relative h-36 sm:h-40 w-full rounded-2xl overflow-hidden mb-5 border border-white/10 group-hover:border-[#26d9d0]/30 transition-all">
                <img
                  src={stock2}
                  alt="Desarrollo de software y código de monitoreo Tensiva"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08111f] via-[#08111f]/30 to-transparent" />
                <span className="absolute bottom-2.5 left-3 text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-[#050b14]/85 text-[#26d9d0] border border-[#26d9d0]/30 backdrop-blur-md">
                  Software & Datos
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#f4f7fb] mb-3">
                Plataformas de monitoreo
              </h3>
              <p className="text-[#8fa3b8] text-sm leading-relaxed font-normal mb-6">
                Reunimos datos de terreno en interfaces que facilitan su consulta y ayudan a comprender lo que ocurre en la operación.
              </p>
            </div>

            <div className="pt-6 border-t border-white/05 flex items-center justify-between">
              <span className="text-xs text-[#8fa3b8] font-mono flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#26d9d0]" />
                <span>Datos de Terreno</span>
              </span>
              <button
                onClick={() => onNavigate('contacto', 'Plataforma CORDIA')}
                className="text-xs font-semibold text-[#26d9d0] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Consultar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 4 Bento Destacada Ancha: Servicios de Ingeniería (7 Cols) */}
          <div className="md:col-span-7 glass-card glass-card-hover p-8 sm:p-10 rounded-3xl border border-white/05 flex flex-col justify-between relative overflow-hidden group">
            
            {/* Detalle decorativo Bento */}
            <div className="absolute left-[-20px] top-[-20px] w-48 h-48 bg-[#26d9d0]/05 rounded-full blur-2xl pointer-events-none group-hover:bg-[#26d9d0]/10 transition-colors" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#26d9d0]/10 text-[#26d9d0] flex items-center justify-center border border-[#26d9d0]/20">
                  <Settings2 className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#26d9d0]/10 text-[#26d9d0] tracking-wider uppercase">
                  BENTO 04 · SERVICIOS TÉCNICOS
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#f4f7fb] mb-4">
                Servicios de ingeniería
              </h3>
              <p className="text-[#8fa3b8] text-base leading-relaxed font-normal mb-6">
                Abordamos los requerimientos técnicos de cada cliente con servicios definidos según las necesidades y objetivos del proyecto.
              </p>
            </div>

            <div className="pt-6 border-t border-white/05 flex items-center justify-between">
              <span className="text-xs text-[#8fa3b8] font-mono flex items-center gap-1.5">
                <Wrench className="w-4 h-4 text-[#26d9d0]" />
                <span>Atención y Requerimientos</span>
              </span>
              <button
                onClick={() => onNavigate('contacto', 'Servicios')}
                className="text-xs font-semibold text-[#26d9d0] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Consultar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

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
