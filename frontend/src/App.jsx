import React, { useState } from 'react';
import ConstellationCanvas from './components/ConstellationCanvas';
import Hero from './components/Hero';

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

      {/* Contenido Principal */}
      <main className="relative z-10">
        <Hero onNavigate={handleNavigate} />
        
        {/* Placeholder para las secciones restantes que completarán Martín y Carlos */}
        <section id="nosotros" className="py-20 px-6 text-center border-t border-white/5 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#26d9d0] mb-4">Sección 2: Nosotros (Próximo paso de Martín)</h2>
          <p className="text-[#8fa3b8]">Soluciones que nacen de una necesidad real...</p>
        </section>

        <section id="cordia" className="py-20 px-6 text-center border-t border-white/5 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#26d9d0] mb-4">Sección 4: CORDIA (Próximo paso de Martín)</h2>
          <p className="text-[#8fa3b8]">Monitoreo de líneas de vida con detección de caídas...</p>
        </section>

        <section id="contacto" className="py-20 px-6 text-center border-t border-white/5 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#26d9d0] mb-4">Sección 10: Contacto (Asignado a Carlos)</h2>
          <p className="text-[#8fa3b8]">Formulario preseleccionado actualmente en: <span className="text-white font-bold">{selectedMotivo}</span></p>
        </section>
      </main>
    </div>
  );
}
