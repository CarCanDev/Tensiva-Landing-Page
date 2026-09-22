import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';
import icono3 from '../assets/Tinclinadav1.svg';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (sectionId, motivo = null) => {
    if (onNavigate) {
      onNavigate(sectionId, motivo);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#03070d] text-[#8fa3b8] border-t border-white/10 pt-16 pb-12 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grilla Principal del Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Columna 1 y 2: Identidad Tensiva */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <img src={icono3} alt="Tensiva" className="w-12 h-16 object-contain" draggable={false} />
              <div className="flex flex-col text-left">
                <span className="text-xl font-bold tracking-wider text-[#f4f7fb]">
                  TENSIVA
                </span>
                <span className="text-[9px] tracking-[0.2em] text-[#8fa3b8] -mt-1 uppercase font-medium">
                  Ingeniería & IoT
                </span>
              </div>
            </div>

            <p className="text-sm text-[#8fa3b8] max-w-sm leading-relaxed">
              Desarrollamos soluciones de ingeniería e IoT para supervisar tu operación. Conectamos equipos, sensores mecánicos y plataformas analíticas para transformar datos de terreno en decisiones oportunas.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#26d9d0]/05 border border-[#26d9d0]/15 text-[11px] font-mono text-[#26d9d0]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Plataforma CORDIA · Monitoreo de Líneas de Vida</span>
            </div>
          </div>

          {/* Columna 3: Navegación Rápida */}
          <div>
            <h4 className="text-xs font-mono font-semibold tracking-widest text-[#f4f7fb] uppercase mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('inicio')}
                  className="hover:text-[#26d9d0] transition-colors cursor-pointer text-left"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('nosotros')}
                  className="hover:text-[#26d9d0] transition-colors cursor-pointer text-left"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('soluciones')}
                  className="hover:text-[#26d9d0] transition-colors cursor-pointer text-left"
                >
                  Soluciones de Ingeniería
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('cordia')}
                  className="hover:text-[#26d9d0] transition-colors cursor-pointer text-left"
                >
                  Plataforma CORDIA
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('como-funciona')}
                  className="hover:text-[#26d9d0] transition-colors cursor-pointer text-left"
                >
                  Cómo Funciona
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('beneficios')}
                  className="hover:text-[#26d9d0] transition-colors cursor-pointer text-left"
                >
                  Beneficios
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('faq')}
                  className="hover:text-[#26d9d0] transition-colors cursor-pointer text-left"
                >
                  Preguntas Frecuentes
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 4: Soluciones & Pilares */}
          <div>
            <h4 className="text-xs font-mono font-semibold tracking-widest text-[#f4f7fb] uppercase mb-4">
              Soluciones
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('soluciones', 'Proyecto de ingeniería')}
                  className="hover:text-[#26d9d0] transition-colors cursor-pointer text-left"
                >
                  Ingeniería Aplicada
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('soluciones', 'Solución IoT')}
                  className="hover:text-[#26d9d0] transition-colors cursor-pointer text-left"
                >
                  Dispositivos IoT en Terreno
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('cordia', 'Monitoreo CORDIA')}
                  className="hover:text-[#26d9d0] transition-colors cursor-pointer text-left"
                >
                  Monitoreo de Líneas de Vida
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('cordia', 'Monitoreo CORDIA')}
                  className="hover:text-[#26d9d0] transition-colors cursor-pointer text-left"
                >
                  Detección Instantánea de Caídas
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contacto', 'Servicios')}
                  className="hover:text-[#26d9d0] transition-colors cursor-pointer text-left"
                >
                  Servicios y Calibración
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 5: Datos de Contacto */}
          <div>
            <h4 className="text-xs font-mono font-semibold tracking-widest text-[#f4f7fb] uppercase mb-4">
              Contacto Técnico
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#26d9d0] shrink-0" />
                <a
                  href="mailto:contacto@tensiva.cl"
                  className="hover:text-[#26d9d0] transition-colors"
                >
                  contacto@tensiva.cl
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#26d9d0] shrink-0" />
                <a
                  href="tel:+56935118116"
                  className="hover:text-[#26d9d0] transition-colors"
                >
                  +56 9 3511 8116
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#26d9d0] shrink-0 mt-0.5" />
                <span>Santiago, Chile (Cobertura nacional de faenas)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="pt-8 border-t border-white/05 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs">
          <p className="text-[#8fa3b8] m-0 text-center">
            © {new Date().getFullYear()} <strong className="text-white">Tensiva SpA</strong>. Todos los derechos reservados. Tecnología y Supervisión para Operaciones Críticas.
          </p>
        </div>
      </div>
    </footer>
  );
}
