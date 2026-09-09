import React, { useState } from 'react';
import ConstellationCanvas from './components/ConstellationCanvas';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

export default function App() {
  const [selectedMotivo, setSelectedMotivo] = useState('Proyecto de ingeniería');

  const handleNavigate = (sectionId, motivo = null) => {
    if (motivo) {
      setSelectedMotivo(motivo);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050b14] text-[#f4f7fb] overflow-x-hidden">
      {/* Rejilla cibernética de fondo estilo tensiva.cl */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0 opacity-40" />

      {/* Fondo interactivo de constelaciones y nodos */}
      <ConstellationCanvas />

      {/* Header flotante global */}
      <Navbar onNavigate={handleNavigate} />

      {/* Contenido Principal */}
      <main className="relative z-10">
        <Hero onNavigate={handleNavigate} />
        
        {/* Placeholder para las secciones restantes */}
        <section id="nosotros" className="py-24 px-6 text-center border-t border-white/5 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#26d9d0] mb-4">Sección 2: Nosotros (Martín)</h2>
          <p className="text-[#8fa3b8]">Soluciones que nacen de una necesidad real...</p>
        </section>

        <section id="soluciones" className="py-24 px-6 text-center border-t border-white/5 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#26d9d0] mb-4">Sección 3: Nuestras Soluciones (Martín)</h2>
          <p className="text-[#8fa3b8]">4 Pilares: Ingeniería aplicada, Tecnología IoT, Plataformas de monitoreo y Servicios.</p>
        </section>

        <section id="cordia" className="py-24 px-6 text-center border-t border-white/5 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#26d9d0] mb-4">Secciones 4-7: CORDIA (Martín & Carlos)</h2>
          <p className="text-[#8fa3b8]">Monitoreo de líneas de vida con detección de caídas, flujo 1-2-3 y beneficios...</p>
        </section>

        <section id="faq" className="py-24 px-6 text-center border-t border-white/5 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#26d9d0] mb-4">Sección 9: Preguntas Frecuentes (Carlos)</h2>
          <p className="text-[#8fa3b8]">Acordeón con las 7 dudas más recurrentes sobre Tensiva y CORDIA.</p>
        </section>

        <section id="contacto" className="py-24 px-6 text-center border-t border-white/5 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#26d9d0] mb-4">Sección 10: Formulario de Contacto (Carlos)</h2>
          <p className="text-[#8fa3b8]">Formulario preseleccionado actualmente en: <span className="text-[#26d9d0] font-bold">{selectedMotivo}</span></p>
        </section>
      </main>
    </div>
  );
}
