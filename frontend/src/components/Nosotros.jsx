import React from 'react';
import { Target, Cpu, Eye, Sparkles } from 'lucide-react';
import stock1 from '../assets/stock1.jpg';

export default function Nosotros() {
  return (
    <section id="nosotros" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 border-t border-white/05 bg-[#050b14]/50">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <span className="text-[#26d9d0] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            NOSOTROS
          </span>
          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-bold text-[#f4f7fb] tracking-tight">
            Soluciones que nacen de una <span className="text-[#26d9d0]">necesidad real</span>
          </h2>
        </div>

        {/* Bloque superior: Texto explicativo + Tarjeta visual con imagen stock1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Texto explicativo sin adornos ni promesas exageradas */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <p className="glass-card p-6 sm:p-8 rounded-2xl border border-white/05 text-[#8fa3b8] text-base sm:text-lg leading-relaxed font-normal">
              Cada operación tiene desafíos propios. En <strong className="text-[#f4f7fb] font-semibold">Tensiva</strong> combinamos ingeniería, dispositivos conectados y software para abordar necesidades de monitoreo y supervisión.
            </p>

            <p className="glass-card p-6 sm:p-8 rounded-2xl border border-white/05 text-[#8fa3b8] text-base sm:text-lg leading-relaxed font-normal">
              Nuestro trabajo comienza por entender qué necesitas medir, observar o controlar. A partir de esa necesidad, desarrollamos soluciones que entregan información relevante para apoyar las decisiones de tu equipo.
            </p>
          </div>

          {/* Tarjeta fotográfica decorativa (stock1 - Hardware y electrónica) */}
          <div className="lg:col-span-5 glass-card glass-card-hover rounded-2xl border border-[#26d9d0]/25 p-3 overflow-hidden group flex flex-col justify-between relative shadow-lg shadow-[#050b14]">
            <div className="relative h-64 sm:h-full min-h-[220px] rounded-xl overflow-hidden">
              <img
                src={stock1}
                alt="Ingeniería y hardware electrónico Tensiva"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-[#050b14]/40 to-transparent" />
              
              {/* Badge superior */}
              <div className="absolute top-3.5 left-3.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#050b14]/85 backdrop-blur-md border border-[#26d9d0]/40 text-[#26d9d0] text-xs font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#26d9d0] shadow-[0_0_8px_#26d9d0] animate-pulse" />
                  HARDWARE & DISPOSITIVOS
                </span>
              </div>

              {/* Información al pie de la imagen */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5">
                <p className="text-[11px] font-mono text-[#26d9d0] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ingeniería Aplicada</span>
                </p>
                <p className="text-xs sm:text-sm text-[#f4f7fb] font-medium leading-snug">
                  Integración directa entre electrónica de adquisición de datos y plataformas de supervisión.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Tarjetas de enfoque técnico: 3 columnas de progresión */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl glass-card flex flex-col justify-between hover:border-[#26d9d0]/40 transition-all group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#26d9d0]/10 text-[#26d9d0] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-[#f4f7fb] font-semibold text-lg mb-2">1. Entender la necesidad</h3>
              <p className="text-[#8fa3b8] text-sm leading-relaxed">
                Identificamos la variable o parámetro específico que tu equipo necesita medir o supervisar en faena.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/05 text-[11px] font-mono text-[#26d9d0]">
              Paso inicial de diagnóstico
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-card flex flex-col justify-between hover:border-[#26d9d0]/40 transition-all group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#26d9d0]/10 text-[#26d9d0] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-[#f4f7fb] font-semibold text-lg mb-2">2. Dispositivos & Software</h3>
              <p className="text-[#8fa3b8] text-sm leading-relaxed">
                Integramos hardware de terreno con sistemas de consulta para centralizar datos confiables.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/05 text-[11px] font-mono text-[#26d9d0]">
              Desarrollo e integración
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-card flex flex-col justify-between hover:border-[#26d9d0]/40 transition-all group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#26d9d0]/10 text-[#26d9d0] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-[#f4f7fb] font-semibold text-lg mb-2">3. Información Relevante</h3>
              <p className="text-[#8fa3b8] text-sm leading-relaxed">
                Transformamos las lecturas técnicas en información clara para apoyar las decisiones operativas.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/05 text-[11px] font-mono text-[#26d9d0]">
              Soporte a la toma de decisiones
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
