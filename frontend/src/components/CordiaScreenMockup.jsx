import React, { useState } from 'react';
import { 
  Activity, 
  Camera, 
  AlertTriangle, 
  Layers, 
  FileSearch, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  Radio,
  Sliders
} from 'lucide-react';
import { CORDIA_SCREENS } from '../assets/cordia/screens';

// Detecta automáticamente imágenes locales dentro de src/assets/cordia/
const localAssets = import.meta.glob('../assets/cordia/*.{png,jpg,jpeg,svg,webp}', {
  eager: true,
  import: 'default',
});

export default function CordiaScreenMockup({
  screenKey = 'dashboard',
  customSrc = null,
  className = '',
  aspectRatio = 'aspect-video',
  showFooterHint = true,
}) {
  const screen = CORDIA_SCREENS[screenKey] || CORDIA_SCREENS.dashboard;

  // Intenta encontrar la imagen en src/assets/cordia/ si fue colocada ahí, de lo contrario usa screen.path o /cordia/
  const resolvedLocalAsset =
    localAssets[`../assets/cordia/${screen.fileName}`] ||
    localAssets[`../assets/cordia/${screen.path?.split('/').pop()}`];

  const imageSrc =
    customSrc ||
    resolvedLocalAsset ||
    (screen.path?.startsWith('src/') ? `/${screen.path}` : screen.path);

  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Renderiza una simulación técnica de UI CORDIA cuando aún no existe el archivo PNG físico
  const renderSimulatedUI = () => {
    switch (screen.id) {
      case 'tension':
        return (
          <div className="w-full h-full bg-[#050b14] p-5 flex flex-col justify-between select-none relative overflow-hidden">
            {/* Grid de fondo */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#26d9d008_1px,transparent_1px),linear-gradient(to_bottom,#26d9d008_1px,transparent_1px)] bg-[size:24px_24px]" />
            
            <div className="relative z-10 flex items-center justify-between border-b border-white/05 pb-3">
              <div className="flex items-center gap-2.5">
                <Activity className="w-4 h-4 text-[#26d9d0] animate-pulse" />
                <span className="text-xs font-mono text-[#f4f7fb] font-semibold">LINEA_VIDA_FAENA_SUR #04</span>
              </div>
              <div className="flex items-center gap-4 text-[11px] font-mono">
                <span className="text-[#8fa3b8]">TENSIÓN ACTUAL:</span>
                <span className="text-[#26d9d0] font-bold text-sm">4.82 kN</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px]">NOMINAL</span>
              </div>
            </div>

            {/* Curva de tensión SVG */}
            <div className="relative z-10 my-auto py-2">
              <div className="flex justify-between text-[10px] font-mono text-[#8fa3b8] mb-1">
                <span>10.0 kN (LÍMITE ALERTA)</span>
                <span>TASA: 100 Hz</span>
              </div>
              <div className="w-full h-24 relative flex items-center">
                <div className="absolute top-0 left-0 right-0 border-b border-dashed border-red-500/30" />
                <div className="absolute bottom-6 left-0 right-0 border-b border-dashed border-[#26d9d0]/20" />
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 100">
                  <path
                    d="M 0 65 Q 40 60, 80 62 T 160 58 T 240 64 T 300 55 T 350 59 T 400 60"
                    fill="none"
                    stroke="#26d9d0"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M 0 65 Q 40 60, 80 62 T 160 58 T 240 64 T 300 55 T 350 59 T 400 60 L 400 100 L 0 100 Z"
                    fill="url(#tension-gradient)"
                    opacity="0.15"
                  />
                  <defs>
                    <linearGradient id="tension-gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#26d9d0" />
                      <stop offset="100%" stopColor="#050b14" />
                    </linearGradient>
                  </defs>
                  {/* Puntos de muestreo */}
                  <circle cx="240" cy="64" r="4" fill="#26d9d0" />
                  <circle cx="350" cy="59" r="4" fill="#26d9d0" className="animate-ping" />
                </svg>
              </div>
              <div className="flex justify-between text-[9px] font-mono text-[#8fa3b8] mt-1">
                <span>-60s</span>
                <span>-45s</span>
                <span>-30s</span>
                <span>-15s</span>
                <span className="text-[#26d9d0]">AHORA</span>
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-3 gap-2 pt-2 border-t border-white/05 text-[10px] font-mono">
              <div className="p-2 rounded bg-white/05">
                <span className="text-[#8fa3b8] block">MÍN:</span>
                <span className="text-[#f4f7fb] font-semibold">4.10 kN</span>
              </div>
              <div className="p-2 rounded bg-white/05">
                <span className="text-[#8fa3b8] block">MÁX:</span>
                <span className="text-[#f4f7fb] font-semibold">5.30 kN</span>
              </div>
              <div className="p-2 rounded bg-white/05">
                <span className="text-[#8fa3b8] block">PROMEDIO:</span>
                <span className="text-[#26d9d0] font-semibold">4.75 kN</span>
              </div>
            </div>
          </div>
        );

      case 'caidas':
        return (
          <div className="w-full h-full bg-[#08111f] p-5 flex flex-col justify-between select-none relative overflow-hidden">
            <div className="absolute inset-0 bg-red-950/10" />
            <div className="relative z-10 flex items-center justify-between border-b border-red-500/20 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider">
                  DISPARO DE ALARMA INMEDIATA
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/20 text-red-300 font-bold">
                CÓDIGO: EVENTO-FALL-09
              </span>
            </div>

            <div className="relative z-10 my-auto p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#f4f7fb]">Pico de Tensión Crítico Detectado</h4>
                <p className="text-xs text-[#8fa3b8] mt-0.5">
                  Variación súbita de +8.4 kN en 120 ms compatible con caída de operario. Protocolo de aviso activado.
                </p>
                <div className="flex items-center gap-4 mt-2 text-[10px] font-mono text-red-300">
                  <span>HORA: 10:14:02 UTC-3</span>
                  <span>UBICACIÓN: TRAMO B-3 (TECHO NORTE)</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/05 text-[11px] font-mono">
              <span className="text-[#8fa3b8]">Notificación enviada a 3 supervisores</span>
              <span className="text-[#26d9d0] flex items-center gap-1">
                <Camera className="w-3.5 h-3.5" /> Video anexo guardado (15s pre / 30s post)
              </span>
            </div>
          </div>
        );

      case 'videomonitoreo':
        return (
          <div className="w-full h-full bg-[#050b14] p-4 flex flex-col justify-between select-none relative overflow-hidden">
            {/* Cabecera de cámara */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[11px] font-mono">
              <div className="flex items-center gap-2 text-[#26d9d0]">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                <span className="text-white font-semibold">CAM-01 [PANORÁMICA LÍNEA SUR]</span>
              </div>
              <div className="flex items-center gap-3 text-[#8fa3b8]">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> REC
                </span>
                <span>1080p · 30 FPS</span>
                <span>LATENCIA: 65ms</span>
              </div>
            </div>

            {/* Simulador de visor de video con retícula */}
            <div className="relative flex-1 my-3 rounded-lg border border-white/10 bg-[#08111f] flex items-center justify-center overflow-hidden">
              {/* Retícula visual y mira */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#26d9d0_1px,transparent_1px)] bg-[size:16px_16px]" />
              <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
              <div className="absolute inset-y-0 left-1/2 w-px bg-white/10" />
              <div className="w-28 h-28 border border-[#26d9d0]/40 rounded-lg flex items-center justify-center relative">
                <span className="absolute -top-3 text-[9px] font-mono text-[#26d9d0] bg-[#08111f] px-1">
                  ZONA SUPERVISADA
                </span>
                <Camera className="w-8 h-8 text-[#26d9d0]/60" />
              </div>
              <div className="absolute bottom-3 left-3 bg-black/70 px-2 py-1 rounded text-[10px] font-mono text-white/80">
                LÍNEA DE ANCLAJE ACTIVA · OPERARIOS DETECTADOS: 2
              </div>
            </div>

            {/* Barra de controles de reproducción */}
            <div className="flex items-center justify-between text-[10px] font-mono text-[#8fa3b8] pt-1">
              <div className="flex items-center gap-2">
                <button className="px-2 py-0.5 rounded bg-white/10 text-white hover:bg-white/20">LIVE</button>
                <button className="px-2 py-0.5 rounded bg-white/05 hover:bg-white/10">-10s</button>
                <button className="px-2 py-0.5 rounded bg-white/05 hover:bg-white/10">+10s</button>
              </div>
              <span className="text-[#26d9d0]">SINCRONIZADO CON SENSOR DE TENSIÓN</span>
            </div>
          </div>
        );

      case 'dashboard':
      default:
        return (
          <div className="w-full h-full bg-[#050b14] p-5 flex flex-col justify-between select-none relative overflow-hidden">
            {/* Grid decorativo */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#26d9d005_1px,transparent_1px),linear-gradient(to_bottom,#26d9d005_1px,transparent_1px)] bg-[size:20px_20px]" />

            {/* Cabecera del Dashboard */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/05 pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#26d9d0] animate-pulse" />
                  <span className="text-xs font-mono font-bold text-[#f4f7fb]">CORDIA CONTROL CENTER</span>
                </div>
                <span className="text-[10px] font-mono text-[#8fa3b8]">FAENA CENTRAL · SECTOR 02</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2 py-1 rounded bg-[#26d9d0]/10 text-[#26d9d0] border border-[#26d9d0]/20">
                  SISTEMA OPERATIVO 100%
                </span>
              </div>
            </div>

            {/* Tarjetas resumen */}
            <div className="relative z-10 grid grid-cols-3 gap-3 my-auto">
              <div className="p-3 rounded-xl bg-[#08111f] border border-white/05">
                <span className="text-[10px] font-mono text-[#8fa3b8] block mb-1">LÍNEAS ACTIVAS</span>
                <span className="text-xl font-bold text-[#f4f7fb]">12 / 12</span>
                <span className="text-[9px] text-emerald-400 block mt-0.5">● Todas supervisadas</span>
              </div>
              <div className="p-3 rounded-xl bg-[#08111f] border border-white/05">
                <span className="text-[10px] font-mono text-[#8fa3b8] block mb-1">TENSIÓN MEDIA</span>
                <span className="text-xl font-bold text-[#26d9d0]">4.6 kN</span>
                <span className="text-[9px] text-[#8fa3b8] block mt-0.5">Rango normal 3-6 kN</span>
              </div>
              <div className="p-3 rounded-xl bg-[#08111f] border border-white/05">
                <span className="text-[10px] font-mono text-[#8fa3b8] block mb-1">ALERTAS HOY</span>
                <span className="text-xl font-bold text-emerald-400">0 CRÍTICAS</span>
                <span className="text-[9px] text-[#8fa3b8] block mt-0.5">1 aviso preventivo</span>
              </div>
            </div>

            {/* Vista previa combinada (Gráfica + Cámaras) */}
            <div className="relative z-10 grid grid-cols-12 gap-3 pt-2 border-t border-white/05 text-[10px] font-mono">
              <div className="col-span-8 p-2 rounded bg-white/05 flex items-center justify-between">
                <span className="text-[#8fa3b8]">TELEMETRÍA EN VIVO:</span>
                <span className="text-[#26d9d0]">CABLE #01: 4.8kN · CABLE #02: 4.5kN</span>
              </div>
              <div className="col-span-4 p-2 rounded bg-white/05 flex items-center justify-center gap-1 text-[#8fa3b8]">
                <Camera className="w-3.5 h-3.5 text-[#26d9d0]" /> 4 CAMS ONLINE
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div 
      className={`glass-card rounded-2xl border border-[#26d9d0]/25 shadow-[0_15px_35px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col transition-all duration-300 hover:border-[#26d9d0]/50 ${className}`}
    >
      {/* Barra superior estilo ventana de aplicación industrial */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#050b14]/90 backdrop-blur-md">
        {/* Controles de ventana */}
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>

        {/* Título central */}
        <div className="text-xs font-mono font-medium text-[#c8f7f4] tracking-wide truncate max-w-[200px] sm:max-w-none">
          {screen.title}
        </div>

        {/* Estado en vivo */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#26d9d0]/10 text-[#26d9d0] text-[10px] font-mono font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#26d9d0] animate-pulse" />
            <span className="hidden sm:inline">24/7 EN VIVO</span>
          </span>
        </div>
      </div>

      {/* Contenedor de la Imagen o Placeholder Simulado */}
      <div 
        className={`relative w-full ${aspectRatio} bg-[#050b14] overflow-hidden flex items-center justify-center`}
      >
        {/* Si existe imagen real y no ha dado error, se muestra */}
        {!hasError && (
          <img
            src={imageSrc}
            alt={screen.title}
            onLoad={() => {
              setIsLoaded(true);
              setHasError(false);
            }}
            onError={() => {
              setHasError(true);
              setIsLoaded(false);
            }}
            className={`w-full h-full object-cover object-top transition-transform duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0 absolute'
            }`}
          />
        )}

        {/* Si la imagen aún no está en la carpeta o falló su carga, se dibuja la UI simulada */}
        {(hasError || !isLoaded) && renderSimulatedUI()}
      </div>
    </div>
  );
}

