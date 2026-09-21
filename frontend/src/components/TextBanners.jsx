import React from 'react';

/**
 * Banner 1: Manifiesto / Declaración tipográfica de alta jerarquía
 * Posicionado entre Soluciones y CORDIA
 */
export function ManifestoBanner() {
  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 z-10 border-t border-white/05 overflow-hidden">
      {/* Resplandor decorativo de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[260px] bg-[#26d9d0]/05 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        <div className="glass-card p-8 sm:p-12 md:p-14 rounded-3xl border border-[#26d9d0]/20 relative overflow-hidden text-center shadow-xl shadow-[#050b14]/80">

          {/* Detalle decorativo sutil en esquinas */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#26d9d0]/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#26d9d0]/10 to-transparent pointer-events-none" />

          {/* Badge superior del manifiesto */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#26d9d0]/10 border border-[#26d9d0]/30 text-[#26d9d0] text-xs font-mono uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-[#26d9d0] animate-ping shrink-0" />
            <span>FILOSOFÍA OPERACIONAL TENSIVA</span>
          </div>

          {/* Frase principal de impacto */}
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#f4f7fb] leading-relaxed tracking-tight max-w-4xl mx-auto mb-6">
            «En Tensiva combinamos electrónica, software y terreno para convertir datos invisibles en{' '}
            <span className="text-[#26d9d0] text-glow-primary">
              decisiones operativas certeras
            </span>
            : ingeniería precisa al servicio de la seguridad de las personas.»
          </blockquote>

          {/* Subtítulo explicativo referente a la empresa */}
          <p className="text-sm sm:text-base text-[#8fa3b8] max-w-2xl mx-auto leading-relaxed font-normal">
            No desarrollamos tecnología teórica. Desarrollamos soluciones hechas para resistir las condiciones reales de tu faena y prevenir fallas críticas antes de que ocurran.
          </p>

          {/* Línea divisoria y firma corporativa */}
          <div className="mt-8 pt-6 border-t border-white/05 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#8fa3b8]">
            <span className="text-[#f4f7fb] font-semibold tracking-wider">TENSIVA</span>
            <span className="text-[#26d9d0]">•</span>
            <span>SUPERVISIÓN TECNOLÓGICA PARA OPERACIONES CRÍTICAS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Banner 2: Declaración de Compromiso y Certeza Operacional
 * Posicionado antes de Contacto
 */
export function CommitmentBanner() {
  return (
    <section className="relative py-14 px-4 sm:px-6 lg:px-8 z-10 border-t border-white/05 bg-gradient-to-b from-[#050b14] via-[#08111f]/60 to-[#050b14]">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card p-8 sm:p-10 rounded-2xl border border-white/10 relative overflow-hidden">

          <div className="flex flex-col items-center justify-center text-center">

            <div className="space-y-4 max-w-4xl mx-auto flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#26d9d0]/10 border border-[#26d9d0]/25 text-[#26d9d0] text-xs font-mono tracking-widest uppercase">
                <span>ESTÁNDAR DE TRABAJO TENSIVA</span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#f4f7fb] tracking-tight leading-snug">
                «De la medición en terreno a la tranquilidad operacional: tu equipo seguro, tus datos claros y tu operación bajo control.»
              </h3>

              <p className="text-sm sm:text-base text-[#8fa3b8] font-normal leading-relaxed max-w-2xl mx-auto">
                Supervisión industrial donde el rigor técnico y la ingeniería chilena se unen para crear soluciones confiables sin margen de error.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
