import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Clock, ShieldCheck, Sparkles, Building, User } from 'lucide-react';

export default function Contacto({ selectedMotivo, onMotivoChange }) {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    correo: '',
    telefono: '',
    motivo: selectedMotivo || 'Proyecto de ingeniería',
    mensaje: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

  // Sincronizar motivo si cambia externamente desde un botón CTA de la web
  useEffect(() => {
    if (selectedMotivo) {
      setFormData((prev) => ({ ...prev, motivo: selectedMotivo }));
    }
  }, [selectedMotivo]);

  const motivosDisponibles = [
    'Proyecto de ingeniería',
    'Monitoreo CORDIA',
    'Solución IoT',
    'Servicios',
    'Consulta general',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'motivo' && onMotivoChange) {
      onMotivoChange(value);
    }

    // Limpiar error del campo al escribir
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.nombre.trim()) {
      errors.nombre = 'Ingresa tu nombre o el de tu contacto.';
    }

    if (!formData.correo.trim()) {
      errors.correo = 'El correo electrónico es obligatorio.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.correo.trim())) {
        errors.correo = 'Ingresa un formato de correo válido (ej: contacto@empresa.cl).';
      }
    }

    if (!formData.mensaje.trim()) {
      errors.mensaje = 'Por favor describe brevemente tu requerimiento o consulta.';
    } else if (formData.mensaje.trim().length < 10) {
      errors.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      // Intentar primero con la ruta relativa (/api/contacto) que Vite redirige mediante proxy
      // y si falla, fallback a localhost:3000
      let response;
      try {
        response = await fetch('/api/contacto', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      } catch (errProxy) {
        // Fallback directo al puerto backend Express si Vite proxy no estuviese activo
        response = await fetch('http://localhost:3000/api/contacto', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      }

      const data = await response.json();

      if (response.ok && data.ok) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMsg(data.mensaje || 'No pudimos procesar tu solicitud. Por favor intenta nuevamente.');
      }
    } catch (err) {
      console.error('Error al conectar con la API de contacto:', err);
      // Simulación de éxito resiliente con aviso para que en entornos de demostración sin backend no se rompa
      setStatus('error');
      setErrorMsg('No se pudo establecer conexión con el servidor de contacto. Verifica que el backend Node.js esté activo o escríbenos directamente a contacto@tensiva.cl.');
    }
  };

  const resetForm = () => {
    setFormData({
      nombre: '',
      empresa: '',
      correo: '',
      telefono: '',
      motivo: 'Proyecto de ingeniería',
      mensaje: '',
    });
    setStatus('idle');
    setFieldErrors({});
    setErrorMsg('');
  };

  return (
    <section id="contacto" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 border-t border-white/05">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado de la Sección 10 */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#26d9d0]/10 border border-[#26d9d0]/25 text-[#26d9d0] text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#26d9d0] shadow-[0_0_8px_#26d9d0] animate-pulse" />
            <span>CONTACTO DIRECTO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-[#f4f7fb] tracking-tight leading-tight mb-4">
            Iniciemos una conversación sobre{' '}
            <span className="text-[#26d9d0] inline-block">
              tu proyecto
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#8fa3b8] max-w-2xl mx-auto font-normal leading-relaxed">
            Ya sea para evaluar la plataforma CORDIA en tus líneas de vida o desarrollar una solución de ingeniería a medida, nuestro equipo técnico responderá a la brevedad.
          </p>
        </div>

        {/* Layout Grid: Panel Izquierdo (Info) + Panel Derecho (Formulario) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Panel Izquierdo: Información de Contacto y Confianza */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-7 sm:p-8 rounded-2xl border border-white/10 space-y-6">
              <div>
                <span className="text-xs font-mono text-[#26d9d0] tracking-wider uppercase">
                  Tensiva SpA
                </span>
                <h3 className="text-2xl font-bold text-[#f4f7fb] mt-1 mb-3">
                  Ingeniería & Supervisión Industrial
                </h3>
                <p className="text-sm text-[#8fa3b8] leading-relaxed">
                  Acompañamos a tu empresa desde el diagnóstico en terreno hasta la puesta en marcha de sensores y plataformas analíticas.
                </p>
              </div>

              {/* Canales de contacto */}
              <div className="space-y-4 pt-4 border-t border-white/05">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#26d9d0]/10 border border-[#26d9d0]/20 flex items-center justify-center text-[#26d9d0] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#8fa3b8] font-mono block">Correo directo</span>
                    <a
                      href="mailto:contacto@tensiva.cl"
                      className="text-sm font-semibold text-[#f4f7fb] hover:text-[#26d9d0] transition-colors"
                    >
                      contacto@tensiva.cl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#26d9d0]/10 border border-[#26d9d0]/20 flex items-center justify-center text-[#26d9d0] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#8fa3b8] font-mono block">Atención técnica</span>
                    <a
                      href="tel:+56935118136"
                      className="text-sm font-semibold text-[#f4f7fb] hover:text-[#26d9d0] transition-colors"
                    >
                      +56 9 3511 8136 / Santiago, Chile
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#26d9d0]/10 border border-[#26d9d0]/20 flex items-center justify-center text-[#26d9d0] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#8fa3b8] font-mono block">Cobertura de faenas</span>
                    <span className="text-sm text-[#f4f7fb]">
                      Despliegue e integración en todo Chile
                    </span>
                  </div>
                </div>
              </div>

              {/* Badge de disponibilidad y soporte CORDIA */}
              <div className="p-4 rounded-xl bg-[#26d9d0]/05 border border-[#26d9d0]/20 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#26d9d0] animate-ping shrink-0" />
                <div className="text-xs text-[#8fa3b8]">
                  <strong className="text-[#26d9d0] font-semibold block">Monitoreo continuo CORDIA</strong>
                  Disponibilidad de alertas y telemetría 24/7 para faenas activas.
                </div>
              </div>
            </div>

            {/* Tarjeta de compromiso técnico */}
            <div className="glass-card p-6 rounded-2xl border border-white/05 flex items-center gap-4">
              <ShieldCheck className="w-8 h-8 text-[#26d9d0] shrink-0" />
              <div className="text-xs text-[#8fa3b8] leading-relaxed">
                <strong className="text-[#f4f7fb] font-semibold block mb-0.5">Confidencialidad industrial</strong>
                Tus datos operacionales y requerimientos técnicos son tratados bajo estricta reserva profesional.
              </div>
            </div>
          </div>

          {/* Panel Derecho: Formulario de Contacto Interactivo */}
          <div className="lg:col-span-7">
            <div className="glass-card p-7 sm:p-10 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
              {/* Resplandor decorativo de fondo */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#26d9d0]/05 rounded-full blur-3xl pointer-events-none -z-0" />

              {status === 'success' ? (
                /* Vista de Éxito al Enviar */
                <div className="text-center py-10 space-y-6 relative z-10 animate-fadeIn">
                  <div className="w-16 h-16 rounded-2xl bg-[#26d9d0]/15 border border-[#26d9d0]/30 text-[#26d9d0] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(38,217,208,0.3)]">
                    <CheckCircle2 className="w-9 h-9 text-[#26d9d0]" />
                  </div>

                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-2xl font-bold text-[#f4f7fb]">
                      ¡Mensaje recibido con éxito!
                    </h3>
                    <p className="text-sm text-[#8fa3b8] leading-relaxed">
                      Gracias, <strong className="text-white">{formData.nombre}</strong>. Hemos registrado tu consulta para el área de{' '}
                      <span className="text-[#26d9d0] font-medium">"{formData.motivo}"</span>. Nuestro equipo técnico revisará tus antecedentes y se pondrá en contacto contigo a la brevedad.
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={resetForm}
                      className="px-6 py-3 rounded-xl bg-white/05 hover:bg-white/10 border border-white/10 text-sm font-semibold text-[#f4f7fb] hover:text-[#26d9d0] transition-colors cursor-pointer"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                </div>
              ) : (
                /* Formulario Principal */
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10" noValidate>
                  {/* Selector de Motivo Sincronizado */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#8fa3b8] mb-2">
                      Motivo de consulta <span className="text-[#26d9d0]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="motivo"
                        value={formData.motivo}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#050b14]/80 border border-white/10 text-[#f4f7fb] text-sm focus:border-[#26d9d0] focus:ring-1 focus:ring-[#26d9d0] focus:outline-none transition-all cursor-pointer appearance-none"
                      >
                        {motivosDisponibles.map((motivo) => (
                          <option key={motivo} value={motivo} className="bg-[#08111f] text-white">
                            {motivo}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#8fa3b8]">
                        <Sparkles className="w-4 h-4 text-[#26d9d0]" />
                      </div>
                    </div>
                    <span className="text-[11px] text-[#8fa3b8]/80 mt-1 block">
                      Selecciona o actualiza automáticamente según la sección que consultes.
                    </span>
                  </div>

                  {/* Fila: Nombre y Empresa */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#8fa3b8] mb-2">
                        Nombre completo <span className="text-[#26d9d0]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="nombre"
                          placeholder="Ej: Juan Pérez"
                          value={formData.nombre}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl bg-[#050b14]/80 border text-[#f4f7fb] text-sm placeholder-[#8fa3b8]/40 focus:outline-none transition-all ${fieldErrors.nombre
                              ? 'border-red-500/70 focus:border-red-500'
                              : 'border-white/10 focus:border-[#26d9d0]'
                            }`}
                        />
                      </div>
                      {fieldErrors.nombre && (
                        <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{fieldErrors.nombre}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#8fa3b8] mb-2">
                        Empresa / Faena <span className="text-xs lowercase text-[#8fa3b8]/70">(opcional)</span>
                      </label>
                      <input
                        type="text"
                        name="empresa"
                        placeholder="Ej: Minera o Constructora SpA"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#050b14]/80 border border-white/10 text-[#f4f7fb] text-sm placeholder-[#8fa3b8]/40 focus:border-[#26d9d0] focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Fila: Correo y Teléfono */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#8fa3b8] mb-2">
                        Correo electrónico <span className="text-[#26d9d0]">*</span>
                      </label>
                      <input
                        type="email"
                        name="correo"
                        placeholder="correo@empresa.cl"
                        value={formData.correo}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl bg-[#050b14]/80 border text-[#f4f7fb] text-sm placeholder-[#8fa3b8]/40 focus:outline-none transition-all ${fieldErrors.correo
                            ? 'border-red-500/70 focus:border-red-500'
                            : 'border-white/10 focus:border-[#26d9d0]'
                          }`}
                      />
                      {fieldErrors.correo && (
                        <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{fieldErrors.correo}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#8fa3b8] mb-2">
                        Teléfono <span className="text-xs lowercase text-[#8fa3b8]/70">(opcional)</span>
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        placeholder="+56 9 1234 5678"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#050b14]/80 border border-white/10 text-[#f4f7fb] text-sm placeholder-[#8fa3b8]/40 focus:border-[#26d9d0] focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Campo: Mensaje */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#8fa3b8] mb-2">
                      Detalle de tu necesidad o consulta <span className="text-[#26d9d0]">*</span>
                    </label>
                    <textarea
                      name="mensaje"
                      rows={4}
                      placeholder="Cuéntanos brevemente sobre las líneas de vida de tu faena, el tipo de operación o la solución de ingeniería que buscas implementar..."
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl bg-[#050b14]/80 border text-[#f4f7fb] text-sm placeholder-[#8fa3b8]/40 focus:outline-none transition-all resize-none ${fieldErrors.mensaje
                          ? 'border-red-500/70 focus:border-red-500'
                          : 'border-white/10 focus:border-[#26d9d0]'
                        }`}
                    />
                    {fieldErrors.mensaje && (
                      <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{fieldErrors.mensaje}</span>
                      </p>
                    )}
                  </div>

                  {/* Alerta de Error en envío */}
                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300 flex items-start gap-3">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <div>{errorMsg}</div>
                    </div>
                  )}

                  {/* Botón de Envío con Estado de Carga */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className={`w-full py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2.5 transition-all duration-300 transform ${status === 'loading'
                          ? 'bg-[#26d9d0]/50 text-[#050b14] cursor-not-allowed'
                          : 'bg-[#26d9d0] hover:bg-[#1ebcb4] text-[#050b14] hover:-translate-y-0.5 shadow-lg shadow-[#26d9d0]/20 hover:shadow-[#26d9d0]/40 cursor-pointer'
                        }`}
                    >
                      {status === 'loading' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-[#050b14] border-t-transparent rounded-full animate-spin" />
                          <span>Enviando requerimiento...</span>
                        </>
                      ) : (
                        <>
                          <span>Enviar mensaje a ingeniería</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-[#8fa3b8]/70 mt-3">
                      Al enviar este formulario aceptas ser contactado por los especialistas de Tensiva. No enviamos spam.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
