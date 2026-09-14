import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight, MessageSquare } from 'lucide-react';

export default function FAQ({ onNavigate }) {
  const [openIndex, setOpenIndex] = useState(0); // Primera pregunta abierta por defecto

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const preguntas = [
    {
      numero: '01',
      categoria: 'Ecosistema CORDIA',
      pregunta: '¿Qué es CORDIA y en qué se diferencia de una línea de vida tradicional?',
      respuesta:
        'CORDIA es una solución tecnológica integral que complementa las líneas de vida existentes mediante sensores IoT de tensión mecánica, algoritmos de detección inmediata de caídas y un panel de control centralizado. A diferencia de un cable pasivo tradicional que solo actúa físicamente al momento del impacto sin avisar a nadie, CORDIA monitorea de forma continua el esfuerzo mecánico del cable y emite alertas en tiempo real ante sobrecargas, aflojamientos o caídas en faena.',
    },
    {
      numero: '02',
      categoria: 'Detección & Algoritmos',
      pregunta: '¿Cómo diferencian los sensores una caída de las tensiones normales de trabajo?',
      respuesta:
        'Nuestros algoritmos analizan la curva dinámica de carga en milisegundos. Las labores rutinarias de faena (desplazamiento del trabajador, tracción leve, vibraciones o ráfagas de viento) generan patrones de esfuerzo progresivos y controlados. En contraste, una caída libre provoca un gradiente de aceleración y sobretensión brusco con una firma espectral inconfundible, lo que permite disparar la alarma de emergencia automáticamente sin falsos positivos.',
    },
    {
      numero: '03',
      categoria: 'Compatibilidad en Terreno',
      pregunta: '¿Es compatible con líneas de vida e infraestructura ya instaladas en nuestra empresa?',
      respuesta:
        'Sí, absolutamente. El hardware de CORDIA ha sido diseñado con un enfoque no invasivo: los sensores de tensión se instalan directamente en los anclajes o terminales del cable de acero existente. No es necesario reemplazar la línea de vida actual ni alterar sus certificaciones estructurales originales, lo que minimiza drásticamente los costos y tiempos de implementación.',
    },
    {
      numero: '04',
      categoria: 'Conectividad & Faenas Aisladas',
      pregunta: '¿Cómo opera la conectividad en faenas remotas o sectores con señal intermitente?',
      respuesta:
        'Cada nodo sensor opera con arquitectura "Edge Computing" y memoria local protegida. Si la faena sufre una pérdida temporal de cobertura celular o enlace inalámbrico industrial, los sensores continúan registrando y analizando datos localmente en tiempo real. En cuanto se restablece el enlace, sincronizan de forma transparente todo el registro de eventos con el panel central sin pérdida de información.',
    },
    {
      numero: '05',
      categoria: 'Video-verificación',
      pregunta: '¿Se integra la plataforma con las cámaras de seguridad o CCTV existentes en el sitio?',
      respuesta:
        'Sí. CORDIA puede vincularse con sistemas de videovigilancia en faena para sincronizar la marca temporal exacta de un evento de tensión o caída con el registro visual de la cámara más cercana. De este modo, el supervisor en la sala de control puede verificar visualmente la situación en segundos antes de enviar asistencia o activar planes de rescate.',
    },
    {
      numero: '06',
      categoria: 'Mantenimiento & Batería',
      pregunta: '¿Qué requerimientos de mantenimiento y calibración tienen los sensores de tensión?',
      respuesta:
        'Los sensores cuentan con encapsulado de grado industrial (norma IP67/IP68), resistentes a la intemperie, polvo, humedad y vibraciones severas. Su electrónica de ultra bajo consumo ofrece una autonomía prolongada. Para garantizar la máxima precisión técnica, recomendamos una inspección periódica y una calibración anual supervisada por el equipo de ingeniería de Tensiva.',
    },

  ];

  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 border-t border-white/05">
      <div className="max-w-4xl mx-auto">
        {/* Encabezado de la Sección 9 */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#26d9d0]/10 border border-[#26d9d0]/25 text-[#26d9d0] text-xs font-mono tracking-widest uppercase mb-4">
            <HelpCircle className="w-4 h-4 text-[#26d9d0]" />
            <span>PREGUNTAS FRECUENTES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-[#f4f7fb] tracking-tight leading-tight mb-4">
            Respuestas claras a tus{' '}
            <span className="text-[#26d9d0] inline-block">
              dudas técnicas
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#8fa3b8] max-w-2xl mx-auto font-normal leading-relaxed">
            Conoce en detalle cómo la plataforma CORDIA y las soluciones de Tensiva transforman la seguridad y la supervisión de tus faenas.
          </p>
        </div>

        {/* Acordeón de 7 Preguntas */}
        <div className="space-y-4 mb-16">
          {preguntas.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.numero}
                className={`rounded-2xl transition-all duration-300 border ${isOpen
                    ? 'bg-[#08111f]/90 border-[#26d9d0]/40'
                    : 'glass-card border-white/10 hover:border-white/20'
                  }`}
              >
                {/* Botón Cabecera de la Pregunta */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start sm:items-center gap-4">
                    {/* Número con tipografía mono */}
                    <span
                      className={`text-sm font-mono font-bold px-2.5 py-1 rounded-lg transition-colors shrink-0 ${isOpen
                          ? 'bg-[#26d9d0]/20 text-[#26d9d0] border border-[#26d9d0]/30'
                          : 'bg-white/05 text-[#8fa3b8] border border-white/05'
                        }`}
                    >
                      {item.numero}
                    </span>

                    <div>
                      {/* Categoría */}
                      <span className="text-[11px] font-mono tracking-wider text-[#26d9d0]/80 uppercase block mb-1">
                        {item.categoria}
                      </span>
                      {/* Título de la pregunta */}
                      <h3
                        className={`text-base sm:text-lg font-semibold transition-colors leading-snug ${isOpen ? 'text-[#f4f7fb]' : 'text-[#c8d4e4]'
                          }`}
                      >
                        {item.pregunta}
                      </h3>
                    </div>
                  </div>

                  {/* Icono de flecha giratoria */}
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen
                        ? 'bg-[#26d9d0] text-[#050b14] rotate-180'
                        : 'bg-white/05 text-[#8fa3b8] hover:text-[#f4f7fb]'
                      }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Contenido Desplegable */}
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-sm sm:text-base text-[#8fa3b8] leading-relaxed border-t border-white/05">
                    <p className="mt-2 pl-0 sm:pl-12 font-normal">
                      {item.respuesta}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Tarjeta de Apoyo / ¿Más preguntas? */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#26d9d0]/10 border border-[#26d9d0]/20 flex items-center justify-center text-[#26d9d0] shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#f4f7fb] mb-1">
                ¿Tienes requerimientos técnicos particulares?
              </h4>
              <p className="text-xs sm:text-sm text-[#8fa3b8] m-0">
                Podemos evaluar la factibilidad de tu faena y adaptar la solución a tus normativas internas.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate && onNavigate('contacto', 'Proyecto de ingeniería')}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/05 hover:bg-[#26d9d0]/15 border border-white/10 hover:border-[#26d9d0]/40 text-[#f4f7fb] hover:text-[#26d9d0] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shrink-0"
          >
            <span>Hacer una consulta</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
