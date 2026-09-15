import React from 'react';
import { Shield, Activity, Camera, BellRing, ArrowRight, Sparkles } from 'lucide-react';

export default function CordiaIntro({ onNavigate }) {
  return (
    <section id="cordia" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 border-t border-white/05 bg-[#050b14]/70">
      <div className="max-w-6xl mx-auto">

        {/* Badge e Introducción de CORDIA */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-[#26d9d0]/30 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#26d9d0] animate-pulse" />
            <span className="text-xs font-semibold tracking-[0.2em] text-[#c8f7f4] uppercase">
              PLATAFORMA CORDIA
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-[#f4f7fb] tracking-tight max-w-4xl mx-auto leading-tight">
            Monitoreo de líneas de vida con{' '}
            <span className="text-[#26d9d0] inline-block">
              detección de caídas y alertas automáticas
            </span>
          </h2>
        </div>

        {/* Grid de 2 Columnas: Explicación + Representación Visual del Ecosistema */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">

          {/* Columna Izquierda: Texto Descriptivo Verificado */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card p-8 rounded-2xl border border-white/05 space-y-5">
              <p className="text-[#8fa3b8] text-base sm:text-lg leading-relaxed font-normal">
                <strong className="text-[#f4f7fb] font-semibold">CORDIA</strong> es la plataforma de Tensiva que integra mediciones de tensión y videomonitoreo para supervisar líneas de vida.
              </p>
              
              <div className="w-full h-px bg-white/05" />

              <p className="text-[#8fa3b8] text-base sm:text-lg leading-relaxed font-normal">
                Detecta automáticamente caídas y cambios de tensión, y genera alertas para informar al personal encargado. El operador puede consultar las mediciones y el video para evaluar lo ocurrido y apoyar la respuesta ante un incidente.
              </p>
            </div>

            {/* Botones CTA de CORDIA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('contacto', 'Plataforma CORDIA')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#26d9d0] text-[#050b14] font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#1ebcb4] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer group"
              >
                <span>Solicitar una demostración</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onNavigate('contacto', 'Plataforma CORDIA')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl glass-card text-[#f4f7fb] font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#08111f] hover:border-[#26d9d0]/30 transition-all duration-300 border border-white/10 cursor-pointer group"
              >
                <span>Consultar por CORDIA</span>
                <Sparkles className="w-4 h-4 text-[#26d9d0] transition-all duration-300 transform group-hover:-translate-y-1.5 group-hover:scale-125 group-hover:rotate-12" />
              </button>
            </div>
          </div>

          {/* Columna Derecha: Diagrama Visual del Ecosistema (Línea de Vida ➔ Sensores ➔ Cámara ➔ CORDIA) */}
          <div className="lg:col-span-6">
            <div className="glass-card p-8 rounded-2xl border border-[#26d9d0]/20 relative overflow-hidden">
              
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/05">
                <span className="text-xs font-mono uppercase text-[#26d9d0] tracking-wider">
                  Ecosistema de Monitoreo CORDIA
                </span>
                <span className="text-[10px] px-2.5 py-1 rounded bg-[#26d9d0]/10 text-[#26d9d0] font-mono">
                  Supervisión Activa
                </span>
              </div>

              {/* Conexión Gráfica de Componentes */}
              <div className="space-y-4">
                
                {/* 1. Línea de Vida & Tensión */}
                <div className="p-4 rounded-xl bg-[#08111f] border border-white/05 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#26d9d0]/10 text-[#26d9d0] flex items-center justify-center shrink-0">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[#f4f7fb] font-medium text-sm">Medición de Tensión</h4>
                    <p className="text-[#8fa3b8] text-xs">Supervisión constante de esfuerzo en líneas de vida.</p>
                  </div>
                </div>

                {/* 2. Videomonitoreo */}
                <div className="p-4 rounded-xl bg-[#08111f] border border-white/05 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#26d9d0]/10 text-[#26d9d0] flex items-center justify-center shrink-0">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[#f4f7fb] font-medium text-sm">Videomonitoreo Integrado</h4>
                    <p className="text-[#8fa3b8] text-xs">Referencia visual directa del área supervisada.</p>
                  </div>
                </div>

                {/* 3. Detección & Alerta */}
                <div className="p-4 rounded-xl bg-[#08111f] border border-white/05 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#26d9d0]/10 text-[#26d9d0] flex items-center justify-center shrink-0">
                    <BellRing className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[#f4f7fb] font-medium text-sm">Detección Automática & Alertas</h4>
                    <p className="text-[#8fa3b8] text-xs">Aviso ante eventos de caída o variaciones de tensión.</p>
                  </div>
                </div>

                {/* 4. Plataforma CORDIA */}
                <div className="p-4 rounded-xl bg-[#26d9d0]/10 border border-[#26d9d0]/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-[#26d9d0]" />
                    <span className="text-[#f4f7fb] font-semibold text-sm">Consola del Operador CORDIA</span>
                  </div>
                  <span className="text-xs text-[#26d9d0] font-mono">Tensiva OS</span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
