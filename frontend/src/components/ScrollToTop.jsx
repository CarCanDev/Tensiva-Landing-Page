import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Activa estado cuando se desplaza más de 100px
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-[5.4rem] right-5.5 sm:bottom-[5.8rem] sm:right-6.5 z-40">
      <button
        onClick={scrollToTop}
        aria-label="Volver arriba"
        title="Volver al inicio"
        className={`group relative flex items-center justify-center w-11 h-11 rounded-full backdrop-blur-md border transition-all duration-300 transform hover:-translate-y-1 active:scale-95 cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.5)] ${
          isScrolled
            ? 'bg-[#08111f]/90 border-[#26d9d0]/50 text-[#26d9d0] hover:bg-[#26d9d0] hover:text-[#050b14] hover:shadow-[0_0_20px_rgba(38,217,208,0.4)] opacity-100'
            : 'bg-[#08111f]/70 border-white/15 text-[#8fa3b8] hover:text-[#26d9d0] hover:border-[#26d9d0]/40 opacity-70 hover:opacity-100'
        }`}
      >
        <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />

        {/* Tooltip flotante al pasar el cursor */}
        <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-[#060e1a]/95 text-[#f4f7fb] text-[11px] font-medium border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Volver arriba
        </span>
      </button>
    </div>
  );
}
