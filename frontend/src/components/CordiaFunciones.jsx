import React, { useState } from 'react';
import { Activity, AlertTriangle, Gauge, MapPin, Layers, FileSearch, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import CordiaScreenMockup from './CordiaScreenMockup';

export default function CordiaFunciones() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const funciones = [
    {
      id: '01',
      screenKey: 'tension',
      fileName: 'cordia-telemetria-tension.png',
      icon: Activity,
      title: 'Monitoreo de tensión en tiempo real',
      description: 'Supervisa la curva de esfuerzo mecánico y el reloj de carga (0-80 kg) de cada línea de vida con telemetría en vivo.',
      badge: 'TELEMETRÍA EN VIVO',
      detail: 'Gráfica de fuerza últimos 60s y límites de advertencia',
    },
    {
      id: '02',
      screenKey: 'caidas',
      fileName: 'cordia-alertas-caidas.png',
      icon: AlertTriangle,
      title: 'Detección automática de caídas',
      description: 'Identifica sobretensiones críticas de impacto, activa alertas sonoras/visuales y despliega el streaming de video del área.',
      badge: 'ALERTA INMEDIATA',
      detail: 'Videoverificación en directo y canal de emergencia de faena',
    },
    {
      id: '03',
      screenKey: 'cambiosTension',
      fileName: 'cordia-variaciones-tension.png',
      icon: Gauge,
      title: 'Detección de cambios de tensión',
      description: 'Reconoce variaciones sutiles, condiciones de cuerda floja, baja tensión o tirones continuos para prevenir fallas estructurales.',
      badge: 'VARIACIÓN MECÁNICA',
      detail: 'Clasificación de eventos de cuerda floja y sobrecarga',
    },
    {
      id: '04',
      screenKey: 'mapa',
      fileName: 'cordia-mapa-faena.png',
      icon: MapPin,
      title: 'Georreferenciación y mapa de faena',
      description: 'Visualiza la ubicación geográfica exacta de todas las líneas de vida en un mapa cartográfico con filtro de estado e incidencias.',
      badge: 'MAPA EN TIEMPO REAL',
      detail: 'Localización espacial inmediata para equipos de rescate',
    },
    {
      id: '05',
      screenKey: 'lineasDeVida',
      fileName: 'cordia-inventario-lineas.png',
      icon: Layers,
      title: 'Gestión unificada de líneas de vida',
      description: 'Consola central con el inventario completo de equipos instalados, estado de enlace PLC, potencia de señal de red y fuerza actual.',
      badge: 'CONSOLA UNIFICADA',
      detail: 'Monitoreo de disponibilidad IoT y estado por equipo',
    },
    {
      id: '06',
      screenKey: 'historial',
      fileName: 'cordia-historial-impactos.png',
      icon: FileSearch,
      title: 'Auditoría forense e historial de eventos',
      description: 'Registro histórico completo con trazabilidad de impactos (hasta 526 kg), fecha y duración para informes de prevención de riesgos.',
      badge: 'AUDITORÍA FORENSE',
      detail: 'Registro cronológico con más de 100 eventos documentados',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % funciones.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + funciones.length) % funciones.length);
  };

  return (
    <section id="funciones-cordia" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 border-t border-white/05 overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-center">

        {/* Encabezado */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-[#26d9d0]/30 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#26d9d0]" />
            <span className="text-xs font-semibold tracking-[0.2em] text-[#c8f7f4] uppercase">
              FUNCIONES DE CORDIA
            </span>
          </div>
          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-bold text-[#f4f7fb] tracking-tight">
            Información y alertas para <span className="text-[#26d9d0]">apoyar la supervisión</span>
          </h2>
        </div>

        {/* Contenedor del Carrusel Ultra-Suave 60 FPS con Mockups de Pantalla */}
        <div className="relative min-h-[700px] sm:min-h-[680px] flex items-center justify-center my-8 perspective-1000">
          {funciones.map((func, index) => {
            const Icon = func.icon;
            
            // Offset circular respecto al índice activo
            let offset = index - currentIndex;
            if (offset > funciones.length / 2) offset -= funciones.length;
            if (offset < -funciones.length / 2) offset += funciones.length;

            const absOffset = Math.abs(offset);
            const isCurrent = offset === 0;

            // Transiciones con aceleración por hardware (GPU)
            const translateX = offset * 320; // Desplazamiento horizontal fluido en píxeles
            const scale = Math.max(0.72, 1 - absOffset * 0.12);
            const opacity = isCurrent ? 1 : Math.max(0, 0.4 - (absOffset - 1) * 0.3);
            const zIndex = 30 - absOffset * 10;
            return (
              <div
                key={func.id}
                onClick={() => setCurrentIndex(index)}
                style={{
                  transform: `translate3d(${translateX}px, 0, 0) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                  willChange: 'transform, opacity',
                  transition: 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1), opacity 600ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className={`absolute w-full max-w-3xl sm:max-w-4xl glass-card p-6 sm:p-8 rounded-3xl border text-left cursor-pointer select-none ${
                  isCurrent 
                    ? 'border-[#26d9d0]/50 bg-[#08111f]/95 shadow-[0_25px_60px_rgba(0,0,0,0.7)]' 
                    : 'border-white/10 bg-[#050b14]/80'
                }`}
              >
                {/* Header de la Tarjeta */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-colors duration-500 ${
                      isCurrent ? 'bg-[#26d9d0]/15 text-[#26d9d0] border-[#26d9d0]/30' : 'bg-white/5 text-[#8fa3b8] border-white/10'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#f4f7fb]">
                        {func.title}
                      </h3>
                      <span className="text-xs font-mono text-[#26d9d0]">
                        {func.badge}
                      </span>
                    </div>
                  </div>

                  <span className="text-sm font-mono text-[#8fa3b8]">
                    [{func.id}/{String(funciones.length).padStart(2, '0')}]
                  </span>
                </div>

                {/* Descripción */}
                <p className="text-[#8fa3b8] text-sm sm:text-base leading-relaxed font-normal mb-4">
                  {func.description}
                </p>

                {/* Slot de Captura de Pantalla CORDIA */}
                <div className="my-4">
                  <CordiaScreenMockup
                    screenKey={func.screenKey}
                    aspectRatio="aspect-[16/9]"
                    className="border-white/10 bg-[#050b14]"
                  />
                </div>

                {/* Footer de Tarjeta Activa */}
                <div className="pt-4 border-t border-white/05 flex items-center justify-between text-xs font-mono text-[#26d9d0]">
                  <span>{func.detail}</span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>CORDIA PLATFORM</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controles de Navegación Manual */}
        <div className="relative z-10 flex items-center justify-center gap-6 mt-12">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full glass-card border border-white/10 flex items-center justify-center text-[#f4f7fb] hover:text-[#26d9d0] hover:border-[#26d9d0]/40 transition-all duration-300 cursor-pointer active:scale-95"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Indicadores / Puntos de Página */}
          <div className="flex items-center gap-2">
            {funciones.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-500 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? 'w-9 h-2.5 bg-[#26d9d0]'
                    : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Ir a tarjeta ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full glass-card border border-white/10 flex items-center justify-center text-[#f4f7fb] hover:text-[#26d9d0] hover:border-[#26d9d0]/40 transition-all duration-300 cursor-pointer active:scale-95"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
}
