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
      categoria: 'Tensiva',
      pregunta: '¿A qué se dedica Tensiva?',
      respuesta:
        'Tensiva desarrolla soluciones de ingeniería e IoT y presta servicios asociados a las necesidades técnicas de sus clientes.',
    },
    {
      numero: '02',
      categoria: 'CORDIA',
      pregunta: '¿Qué es CORDIA?',
      respuesta:
        'Es una plataforma de Tensiva para supervisar líneas de vida mediante monitoreo de tensión, detección automática de caídas, alertas y video.',
    },
    {
      numero: '03',
      categoria: 'Detección de Caídas',
      pregunta: '¿CORDIA detecta caídas automáticamente?',
      respuesta:
        'Sí. El sistema cuenta con detección automática de caídas y genera alertas para informar al personal encargado.',
    },
    {
      numero: '04',
      categoria: 'Monitoreo de Tensión',
      pregunta: '¿También detecta cambios de tensión?',
      respuesta:
        'Sí. CORDIA monitorea la tensión de la línea, identifica cambios y genera alertas para su revisión.',
    },
    {
      numero: '05',
      categoria: 'Videomonitoreo',
      pregunta: '¿Para qué sirve el videomonitoreo?',
      respuesta:
        'Permite al operador observar el área supervisada y complementar las mediciones al evaluar un evento.',
    },
    {
      numero: '06',
      categoria: 'Implementación',
      pregunta: '¿Cómo se implementa CORDIA en mi operación?',
      respuesta:
        'El equipo de Tensiva evalúa las líneas de vida y las condiciones del lugar para definir la configuración y el alcance de la solución.',
    },
    {
      numero: '07',
      categoria: 'Proyectos a Medida',
      pregunta: '¿Puedo consultar por un proyecto distinto de CORDIA?',
      respuesta:
        'Sí. Cuéntanos qué necesitas medir, monitorear o resolver para evaluar una solución de ingeniería.',
    },
  ];

  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 border-t border-white/05">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado de la Sección 9 */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#26d9d0]/10 border border-[#26d9d0]/25 text-[#26d9d0] text-xs font-mono tracking-widest uppercase mb-4">
            <HelpCircle className="w-4 h-4 text-[#26d9d0]" />
            <span>PREGUNTAS FRECUENTES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-[#f4f7fb] tracking-tight leading-tight mb-4">
            Sobre Tensiva y{' '}
          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-bold text-[#f4f7fb] tracking-tight leading-tight mb-4">
            Respuestas claras a tus{' '}
            <span className="text-[#26d9d0] inline-block">
              CORDIA
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#8fa3b8] max-w-2xl mx-auto font-normal leading-relaxed">
            Resolvemos las principales dudas sobre nuestra empresa, el funcionamiento de la plataforma CORDIA y el desarrollo de proyectos de ingeniería.
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
