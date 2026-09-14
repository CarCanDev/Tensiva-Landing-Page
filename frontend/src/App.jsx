import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ConstellationCanvas from './components/ConstellationCanvas';
import Hero from './components/Hero';
import Nosotros from './components/Nosotros';
import Soluciones from './components/Soluciones';
import ComoFunciona from './components/ComoFunciona';
import Beneficios from './components/Beneficios';
import FAQ from './components/FAQ';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Chatbot from './components/Chatbot/Chatbot';

export default function App() {
  const [selectedMotivo, setSelectedMotivo] = useState('Proyecto de ingeniería');

  const handleNavigate = (sectionId, motivo = null) => {
    if (motivo) {
      setSelectedMotivo(motivo);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });

      // Efecto visual de resaltado momentáneo
      element.classList.remove('highlight-section-active');
      void element.offsetWidth;
      element.classList.add('highlight-section-active');
      setTimeout(() => {
        element.classList.remove('highlight-section-active');
      }, 2600);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050b14] text-[#f4f7fb] overflow-x-hidden">
      {/* Rejilla cibernética de fondo estilo tensiva.cl */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0 opacity-40" />

      {/* Fondo interactivo de constelaciones y nodos */}
      <ConstellationCanvas />

      {/* Barra de Navegación Flotante (Creada por Carlos) */}
      <Navbar onNavigate={handleNavigate} />

      {/* Contenido Principal */}
      <main className="relative z-10 pt-12">
        {/* Sección 1: Portada / Hero (Martín - Completado) */}
        <Hero onNavigate={handleNavigate} />

        {/* Sección 2: Nosotros (Martín - Completado) */}
        <Nosotros />

        {/* Sección 3: Nuestras Soluciones (Martín - Completado) */}
        <Soluciones onNavigate={handleNavigate} />

        {/* Sección 4: Plataforma CORDIA (Martín - Próximo paso) */}
        <section id="cordia" className="py-20 px-6 border-t border-white/05 max-w-5xl mx-auto text-center">
          <div className="glass-card p-8 rounded-2xl border border-[#26d9d0]/20">
            <span className="text-[#26d9d0] text-xs font-mono tracking-widest uppercase">Sección 4 · Asignado a Martín</span>
            <h3 className="text-2xl font-bold text-[#f4f7fb] mt-2 mb-3">Plataforma CORDIA</h3>
            <p className="text-[#8fa3b8] text-sm max-w-2xl mx-auto">
              Monitoreo de líneas de vida con detección de caídas y alertas automáticas. Integra mediciones de tensión y videomonitoreo para supervisar la operación.
            </p>
          </div>
        </section>

        {/* Sección 5: Funciones de CORDIA (Martín - Próximo paso) */}
        <section id="funciones-cordia" className="py-16 px-6 border-t border-white/05 max-w-5xl mx-auto text-center">
          <div className="glass-card p-8 rounded-2xl border border-white/10">
            <span className="text-[#26d9d0] text-xs font-mono tracking-widest uppercase">Sección 5 · Asignado a Martín</span>
            <h3 className="text-2xl font-bold text-[#f4f7fb] mt-2 mb-3">Funciones de CORDIA</h3>
            <p className="text-[#8fa3b8] text-sm max-w-2xl mx-auto">
              Grid de 6 funciones: Monitoreo de tensión, Detección automática de caídas, Cambios de tensión, Videomonitoreo, Consulta integrada y Evaluación de eventos.
            </p>
          </div>
        </section>

        {/* Sección 6: Cómo funciona CORDIA (Carlos - Completado) */}
        <ComoFunciona />

        {/* Sección 7: Beneficios de CORDIA (Carlos - Completado) */}
        <Beneficios onNavigate={handleNavigate} />

        {/* Sección 8: Cómo trabajamos en Tensiva (Martín - Próximo paso) */}
        <section id="metodologia" className="py-16 px-6 border-t border-white/05 max-w-5xl mx-auto text-center">
          <div className="glass-card p-8 rounded-2xl border border-white/10">
            <span className="text-[#26d9d0] text-xs font-mono tracking-widest uppercase">Sección 8 · Asignado a Martín</span>
            <h3 className="text-2xl font-bold text-[#f4f7fb] mt-2 mb-3">Cómo trabajamos en Tensiva</h3>
            <p className="text-[#8fa3b8] text-sm max-w-2xl mx-auto">
              Proceso de 4 etapas: Entendemos la necesidad ➔ Definimos el alcance ➔ Desarrollamos e integramos ➔ Verificamos su funcionamiento.
            </p>
          </div>
        </section>

        {/* Sección 9: Preguntas Frecuentes (Carlos - Completado) */}
        <FAQ onNavigate={handleNavigate} />

        {/* Sección 10: Formulario de Contacto (Carlos - Completado) */}
        <Contacto
          selectedMotivo={selectedMotivo}
          onMotivoChange={setSelectedMotivo}
        />

        {/* Sección 11: Pie de Página Corporativo (Carlos - Completado) */}
        <Footer onNavigate={handleNavigate} />
      </main>

      {/* Botón flotante permanente para volver arriba */}
      <ScrollToTop />

      {/* Asistente virtual y chatbot interactivo */}
      <Chatbot onNavigate={handleNavigate} />
    </div>
  );
}
