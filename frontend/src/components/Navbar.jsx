import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import tbordeado from '../assets/Tinclinadav1.svg';

export default function Navbar({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  // Detectar scroll para ajustar el estilo de la barra flotante
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', target: 'inicio' },
    { label: 'Nosotros', target: 'nosotros' },
    { label: 'Soluciones', target: 'soluciones' },
    { label: 'Plataforma CORDIA', target: 'cordia' },
    { label: 'Preguntas Frecuentes', target: 'faq' },
  ];

  const handleLinkClick = (target, motivo = null) => {
    setIsOpen(false);
    setActiveSection(target);
    if (onNavigate) {
      onNavigate(target, motivo);
    } else {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <nav
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 border ${
          isScrolled
            ? 'bg-[#060e1a]/90 backdrop-blur-xl border-[#26d9d0]/30 shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-3 px-5 sm:px-7'
            : 'bg-[#08111f]/60 backdrop-blur-lg border-white/10 shadow-lg py-4 px-5 sm:px-7'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo Tensiva Oficial */}
          <button
            onClick={() => handleLinkClick('inicio')}
            className="flex items-center gap-3 group focus:outline-none cursor-pointer"
          >
            <img src={tbordeado} alt="Tensiva" className="w-14 h-[4.5rem] sm:w-16 sm:h-20 object-contain group-hover:scale-105 transition-transform" draggable={false} />
            <div className="flex flex-col text-left">
              <span className="text-xl font-bold tracking-wider text-[#f4f7fb] group-hover:text-[#26d9d0] transition-colors">
                TENSIVA
              </span>
              <span className="text-[9px] tracking-[0.2em] text-[#8fa3b8] -mt-1 uppercase font-medium">
                Ingeniería & IoT
              </span>
            </div>
          </button>

          {/* Navegación Desktop */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleLinkClick(link.target)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeSection === link.target
                    ? 'text-[#26d9d0] bg-[#26d9d0]/10'
                    : 'text-[#8fa3b8] hover:text-[#f4f7fb] hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Botón CTA y Botón Menú Móvil */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('contacto', 'Consulta general')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#26d9d0] text-[#050b14] font-semibold text-sm hover:bg-[#1ebcb4] transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Contacto</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Toggle Menú Hamburguesa en Móviles */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl text-[#8fa3b8] hover:text-white hover:bg-white/5 border border-white/5 focus:outline-none transition-colors"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-6 h-6 text-[#26d9d0]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menú Desplegable Móvil */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-2 pb-2 animate-fadeIn">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleLinkClick(link.target)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  activeSection === link.target
                    ? 'text-[#26d9d0] bg-[#26d9d0]/10'
                    : 'text-[#8fa3b8] hover:text-[#f4f7fb] hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            <div className="pt-2">
              <button
                onClick={() => handleLinkClick('contacto', 'Consulta general')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#26d9d0] text-[#050b14] font-semibold text-sm hover:bg-[#1ebcb4] transition-all cursor-pointer"
              >
                <span>Contacto</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
