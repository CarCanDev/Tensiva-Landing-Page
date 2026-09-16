import React from 'react';
import { Activity, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import CordiaScreenMockup from './CordiaScreenMockup';

export default function ComoFunciona() {
  const pasos = [
    {
      numero: '01',
      icono: Activity,
      titulo: 'Monitorea la línea de vida',
      resumen: 'Adquisición y lectura continua de tensión mecánica.',
      descripcion:
        'Sensores IoT de alta resistencia instalados en los anclajes de la línea de vida miden constantemente la tensión del cable y registran los esfuerzos mecánicos sin interferir en la labor de faena.',
      tag: 'Adquisición en tiempo real',
      indicador: 'Sensores activos',
    },
    {
      numero: '02',
      icono: Zap,
      titulo: 'Detecta eventos automáticamente',
      resumen: 'Algoritmos que diferencian trabajo habitual de caídas.',
      descripcion:
        'El sistema analiza las variaciones bruscas de carga en milisegundos. Si ocurre una caída o sobretensión crítica, genera un evento de alarma inmediata sin depender de la mirada continua de un operador.',
      tag: 'Procesamiento en milisegundos',
      indicador: 'Alertas automáticas',
    },
    {
      numero: '03',
      icono: CheckCircle2,
      titulo: 'Facilita la revisión del operador',
      resumen: 'Video-verificación y panel de control centralizado.',
      descripcion:
        'La plataforma CORDIA despliega la alerta georreferenciada junto con el registro visual del evento. El operador evalúa la situación en segundos y activa los protocolos de rescate con información certera.',
      tag: 'Respuesta inmediata',
      indicador: 'Decisión respaldada',
    },
  ];

  return (
    <section id="como-funciona" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 border-t border-white/05 bg-[#050b14]/40">
      <div className="max-w-[1400px] mx-auto">
        {/* Encabezado de la Sección 6 */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#26d9d0]/10 border border-[#26d9d0]/25 text-[#26d9d0] text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#26d9d0] shadow-[0_0_8px_#26d9d0] animate-pulse" />
            <span>CÓMO FUNCIONA CORDIA</span>
          </div>

          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-bold text-[#f4f7fb] tracking-tight leading-tight mb-4">
            Un flujo continuo de{' '}
            <span className="text-[#26d9d0] inline-block">
              detección y supervisión
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#8fa3b8] max-w-2xl mx-auto font-normal leading-relaxed">
            De la señal física en la línea de vida al panel de control en faena. Tres etapas sincronizadas para actuar cuando cada segundo cuenta.
          </p>
        </div>

        {/* Flujo 1-2-3 con tarjetas conectadas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-16">
          {/* Línea conectora visual visible en pantallas desktop */}
          <div className="hidden md:block absolute top-1/2 left-[18%] right-[18%] h-[2px] bg-gradient-to-r from-[#26d9d0]/40 via-[#26d9d0]/20 to-[#26d9d0]/40 -translate-y-12 -z-0" />

          {pasos.map((paso, index) => {
            const Icon = paso.icono;
            return (
              <div
                key={paso.numero}
                className="relative z-10 flex flex-col justify-between glass-card glass-card-hover rounded-2xl p-7 border border-white/10 group transition-all duration-300"
              >
                {/* Cabecera de la tarjeta: Número de paso + Ícono */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#26d9d0]/20 to-[#08111f] border border-white/10 flex items-center justify-center text-[#26d9d0] group-hover:scale-105 group-hover:border-[#26d9d0]/40 transition-all">
                      <Icon className="w-6 h-6 text-[#26d9d0]" />
                    </div>

                    <span className="text-2xl font-black font-mono text-[#26d9d0]/40 group-hover:text-[#26d9d0] transition-colors">
                      {paso.numero}
                    </span>
                  </div>

                  {/* Título y subtítulo */}
                  <h3 className="text-xl font-bold text-[#f4f7fb] mb-2 group-hover:text-[#26d9d0] transition-colors">
                    {paso.titulo}
                  </h3>

                  <p className="text-xs font-mono text-[#26d9d0] mb-4">
                    {paso.resumen}
                  </p>

                  <p className="text-sm text-[#8fa3b8] leading-relaxed font-normal mb-6">
                    {paso.descripcion}
                  </p>
                </div>

                {/* Pie de tarjeta con indicador técnico */}
                <div className="pt-4 border-t border-white/05 flex items-center justify-between text-xs">
                  <span className="text-[#8fa3b8] font-mono">{paso.indicador}</span>
                  <div className="flex items-center gap-1.5 text-[#26d9d0] font-semibold">
                    <span>{paso.tag}</span>
                    {index < pasos.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 hidden md:block" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Showcase de Pantalla: Consola del Operador en Acción */}
        <div className="max-w-4xl mx-auto my-12">
          <div className="text-center mb-6">
            <span className="text-xs font-mono uppercase text-[#26d9d0] tracking-wider">
              Paso 03 en Pantalla
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#f4f7fb] mt-1">
              Consola de Despacho y Respuesta Inmediata
            </h3>
            <p className="text-sm text-[#8fa3b8] max-w-xl mx-auto mt-1">
              El operador visualiza la alerta, reproduce los segundos críticos de video y confirma el estado en tiempo real.
            </p>
          </div>

          <CordiaScreenMockup
            screenKey="caidas"
            aspectRatio="aspect-[16/9]"
            className="shadow-2xl border-[#26d9d0]/30"
          />
        </div>

        {/* Resumen de integración al pie del flujo */}
        <div className="mt-12 p-5 rounded-xl glass-card border border-white/10 max-w-3xl mx-auto text-center flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#26d9d0] animate-pulse shrink-0" />
          <p className="text-xs sm:text-sm text-[#8fa3b8] m-0">
            <strong className="text-[#f4f7fb] font-semibold">Arquitectura sin interrupciones:</strong>{' '}
            Los sensores continúan registrando y almacenando datos localmente incluso ante pérdidas transitorias de conectividad.
          </p>
        </div>
      </div>
    </section>
  );
}

