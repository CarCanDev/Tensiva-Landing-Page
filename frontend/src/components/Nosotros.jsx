import React from 'react';
import { Target, Cpu, Eye } from 'lucide-react';

export default function Nosotros() {
  return (
    <section id="nosotros" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 border-t border-white/05 bg-[#050b14]/50">
      <div className="max-w-5xl mx-auto">
        
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <span className="text-[#26d9d0] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            NOSOTROS
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#f4f7fb] tracking-tight">
            Soluciones que nacen de una <span className="text-[#26d9d0]">necesidad real</span>
          </h2>
        </div>

        {/* Bloque principal de contenido */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Texto explicativo sin adornos ni promesas exageradas */}
          <div className="md:col-span-7 space-y-6 text-[#8fa3b8] text-base sm:text-lg leading-relaxed font-normal">
            <p className="glass-card p-6 rounded-2xl border border-white/05">
              Cada operación tiene desafíos propios. En <strong className="text-[#f4f7fb] font-semibold">Tensiva</strong> combinamos ingeniería, dispositivos conectados y software para abordar necesidades de monitoreo y supervisión.
            </p>

            <p className="glass-card p-6 rounded-2xl border border-white/05">
              Nuestro trabajo comienza por entender qué necesitas medir, observar o controlar. A partir de esa necesidad, desarrollamos soluciones que entregan información relevante para apoyar las decisiones de tu equipo.
            </p>
          </div>

          {/* Tarjetas de enfoque técnico */}
          <div className="md:col-span-5 space-y-4">
            <div className="p-5 rounded-xl glass-card flex items-start gap-4 hover:border-[#26d9d0]/30 transition-all">
              <div className="p-3 rounded-lg bg-[#26d9d0]/10 text-[#26d9d0] shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[#f4f7fb] font-semibold text-base mb-1">1. Entender la necesidad</h3>
                <p className="text-[#8fa3b8] text-sm">Identificamos la variable o parámetro específico que tu equipo necesita medir o supervisar.</p>
              </div>
            </div>

            <div className="p-5 rounded-xl glass-card flex items-start gap-4 hover:border-[#26d9d0]/30 transition-all">
              <div className="p-3 rounded-lg bg-[#26d9d0]/10 text-[#26d9d0] shrink-0">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[#f4f7fb] font-semibold text-base mb-1">2. Dispositivos & Software</h3>
                <p className="text-[#8fa3b8] text-sm">Integramos hardware de terreno con sistemas de consulta para centralizar datos.</p>
              </div>
            </div>

            <div className="p-5 rounded-xl glass-card flex items-start gap-4 hover:border-[#26d9d0]/30 transition-all">
              <div className="p-3 rounded-lg bg-[#26d9d0]/10 text-[#26d9d0] shrink-0">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[#f4f7fb] font-semibold text-base mb-1">3. Información Relevante</h3>
                <p className="text-[#8fa3b8] text-sm">Transformamos las lecturas técnicas en información clara para apoyar las decisiones.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
