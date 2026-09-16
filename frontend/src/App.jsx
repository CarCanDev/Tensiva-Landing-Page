import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ConstellationCanvas from './components/ConstellationCanvas';
import Hero from './components/Hero';
import Nosotros from './components/Nosotros';
import Soluciones from './components/Soluciones';
import CordiaIntro from './components/CordiaIntro';
import CordiaFunciones from './components/CordiaFunciones';
import Metodologia from './components/Metodologia';
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

        {/* Sección 6: Cómo funciona CORDIA (Carlos - Completado) */}
        <ComoFunciona />

        {/* Sección 7: Beneficios de CORDIA (Carlos - Completado) */}
        <Beneficios onNavigate={handleNavigate} />

        {/* Sección 8: Cómo trabajamos en Tensiva (Martín - Completado) */}
        <Metodologia />

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
