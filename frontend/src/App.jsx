import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ConstellationCanvas from './components/ConstellationCanvas';
import Hero from './components/Hero';
import Nosotros from './components/Nosotros';
import Soluciones from './components/Soluciones';
import CordiaIntro from './components/CordiaIntro';
import CordiaFunciones from './components/CordiaFunciones';
import Metodologia from './components/Metodologia';

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
        
        {/* Sección 4: Plataforma CORDIA (Martín - Completado) */}
        <CordiaIntro onNavigate={handleNavigate} />

        {/* Sección 5: Funciones de CORDIA (Martín - Completado) */}
        <CordiaFunciones />

        {/* Sección 6: Cómo funciona CORDIA (Carlos - Próximo paso) */}
        <section id="como-funciona" className="py-16 px-6 border-t border-white/05 max-w-5xl mx-auto text-center">
          <div className="glass-card p-8 rounded-2xl border border-white/10">
            <span className="text-[#26d9d0] text-xs font-mono tracking-widest uppercase">Sección 6 · Asignado a Carlos</span>
            <h3 className="text-2xl font-bold text-[#f4f7fb] mt-2 mb-3">Cómo funciona CORDIA</h3>
            <p className="text-[#8fa3b8] text-sm max-w-2xl mx-auto">
              Flujo paso a paso: 1. Monitorea la línea de vida ➔ 2. Detecta eventos automáticamente ➔ 3. Facilita la revisión del operador.
            </p>
          </div>
        </section>

        {/* Sección 7: Beneficios de CORDIA (Carlos - Próximo paso) */}
        <section id="beneficios" className="py-16 px-6 border-t border-white/05 max-w-5xl mx-auto text-center">
          <div className="glass-card p-8 rounded-2xl border border-white/10">
            <span className="text-[#26d9d0] text-xs font-mono tracking-widest uppercase">Sección 7 · Asignado a Carlos</span>
            <h3 className="text-2xl font-bold text-[#f4f7fb] mt-2 mb-3">Beneficios de CORDIA</h3>
            <p className="text-[#8fa3b8] text-sm max-w-2xl mx-auto">
              Supervisión con mediciones, Avisos automáticos, Información visual complementaria e Información reunida en un solo lugar.
            </p>
          </div>
        </section>

        {/* Sección 8: Cómo trabajamos en Tensiva (Martín - Completado) */}
        <Metodologia />

        {/* Sección 9: Preguntas Frecuentes (Carlos - Próximo paso) */}
        <section id="faq" className="py-16 px-6 border-t border-white/05 max-w-5xl mx-auto text-center">
          <div className="glass-card p-8 rounded-2xl border border-white/10">
            <span className="text-[#26d9d0] text-xs font-mono tracking-widest uppercase">Sección 9 · Asignado a Carlos</span>
            <h3 className="text-2xl font-bold text-[#f4f7fb] mt-2 mb-3">Preguntas frecuentes (FAQ)</h3>
            <p className="text-[#8fa3b8] text-sm max-w-2xl mx-auto">
              Acordeón interactivo desplegable con las 7 preguntas frecuentes sobre Tensiva y CORDIA.
            </p>
          </div>
        </section>

        {/* Sección 10: Contacto (Carlos - Próximo paso) */}
        <section id="contacto" className="py-20 px-6 border-t border-white/05 max-w-5xl mx-auto text-center">
          <div className="glass-card p-8 rounded-2xl border border-[#26d9d0]/30">
            <span className="text-[#26d9d0] text-xs font-mono tracking-widest uppercase">Sección 10 · Asignado a Carlos</span>
            <h3 className="text-2xl font-bold text-[#f4f7fb] mt-2 mb-3">Contacto</h3>
            <p className="text-[#8fa3b8] text-sm max-w-2xl mx-auto mb-4">
              Formulario interactivo completo conectado con la API de Node.js en `/api/contacto`.
            </p>
            <div className="inline-block px-4 py-2 rounded-lg bg-[#26d9d0]/10 text-[#26d9d0] text-xs font-mono">
              Motivo preseleccionado actual: <span className="font-bold text-white">{selectedMotivo}</span>
            </div>
          </div>
        </section>

        {/* Sección 11: Pie de Página (Carlos - Próximo paso) */}
        <footer className="py-12 px-6 border-t border-white/10 text-center text-[#8fa3b8] text-xs">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <strong className="text-white font-bold">TENSIVA</strong> · Soluciones de ingeniería, IoT y servicios.
            </div>
            <div>
              © {new Date().getFullYear()} Tensiva. Todos los derechos reservados.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
