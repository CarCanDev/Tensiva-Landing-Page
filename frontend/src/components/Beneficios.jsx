import React from 'react';
import { Gauge, BellRing, Video, Layers, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Beneficios({ onNavigate }) {
  const beneficiosList = [
    {
      icono: Gauge,
      titulo: 'Supervisión con mediciones',
      resumen: 'Datos objetivos y continuos de tensión en la línea de vida.',
      descripcion:
        'Sustituye la incertidumbre de revisiones visuales esporádicas por un registro cuantitativo en tiempo real. Monitorea el esfuerzo mecánico soportado por el cable y detecta aflojamientos o sobrecargas antes de que representen un riesgo.',
      destacado: 'Trazabilidad continua',
    },
    {
      icono: BellRing,
      titulo: 'Avisos automáticos',
      resumen: 'Alertas en segundos ante caídas o incidentes de carga.',
      descripcion:
        'Al producirse una variación abrupta de tensión atribuible a una caída, CORDIA dispara avisos automáticos e inmediatos a los supervisores de seguridad, optimizando drásticamente los tiempos de activación de los planes de rescate.',
      destacado: 'Respuesta inmediata',
    },
    {
      icono: Video,
      titulo: 'Información visual complementaria',
      resumen: 'Video-verificación asociada a la ocurrencia del evento.',
      descripcion:
        'Complementa la lectura del sensor con la captura o acceso directo a cámaras de faena en el momento exacto de la alerta. Permite al personal de control dimensionar la situación real antes de enviar asistencia a terreno.',
      destacado: 'Inspección certera',
    },
    {
      icono: Layers,
      titulo: 'Información reunida en un solo lugar',
      resumen: 'Gestión unificada de múltiples líneas de vida y faenas.',
      descripcion:
        'Visualiza el estado operativo, las alertas históricas y los reportes de mantenimiento de todas tus instalaciones en un único panel centralizado, facilitando la toma de decisiones gerenciales y auditorías de seguridad.',
      destacado: 'Panel centralizado',
    },
  ];

  return (
    <section id="beneficios" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 border-t border-white/05">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado de la Sección 7 */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#26d9d0]/10 border border-[#26d9d0]/25 text-[#26d9d0] text-xs font-mono tracking-widest uppercase mb-4">
            <ShieldCheck className="w-4 h-4 text-[#26d9d0]" />
            <span>BENEFICIOS DE CORDIA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-[#f4f7fb] tracking-tight leading-tight mb-4">
            Ventajas operativas para la{' '}
            <span className="text-[#26d9d0] inline-block">
              seguridad en altura
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#8fa3b8] max-w-2xl mx-auto font-normal leading-relaxed">
            Diseñado para dar certeza técnica a los prevencionistas y tranquilidad a los trabajadores que operan sobre líneas de vida.
          </p>
        </div>

        {/* Grid de 4 Beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {beneficiosList.map((beneficio, index) => {
            const Icon = beneficio.icono;
            return (
              <div
                key={index}
                className="glass-card glass-card-hover p-8 rounded-2xl border border-white/10 flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#26d9d0]/10 border border-[#26d9d0]/20 text-[#26d9d0] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#26d9d0]/20 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="px-3 py-1 rounded-full bg-white/05 border border-white/10 text-[11px] font-mono text-[#26d9d0]">
                      {beneficio.destacado}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#f4f7fb] mb-2 group-hover:text-[#26d9d0] transition-colors">
                    {beneficio.titulo}
                  </h3>

                  <p className="text-xs font-mono text-[#26d9d0]/90 mb-3">
                    {beneficio.resumen}
                  </p>

                  <p className="text-sm text-[#8fa3b8] leading-relaxed font-normal">
                    {beneficio.descripcion}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/05 flex items-center justify-between">
                  <span className="text-xs text-[#8fa3b8] font-mono">
                    Plataforma CORDIA · Tensiva
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bloque CTA al final de la sección */}
        <div className="glass-card p-8 sm:p-10 rounded-2xl border border-white/10 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-lg sm:text-xl font-bold text-[#f4f7fb] mb-1">
              ¿Quieres evaluar CORDIA en las líneas de vida de tu empresa?
            </h4>
            <p className="text-xs sm:text-sm text-[#8fa3b8]">
              Coordinamos una sesión técnica para revisar la factibilidad de tu faena y requerimientos de supervisión.
            </p>
          </div>

          <button
            onClick={() => onNavigate && onNavigate('contacto', 'Monitoreo CORDIA')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#26d9d0] text-[#050b14] font-semibold text-sm inline-flex items-center justify-center gap-2.5 hover:bg-[#1ebcb4] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer shrink-0"
          >
            <span>Consultar por CORDIA</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
