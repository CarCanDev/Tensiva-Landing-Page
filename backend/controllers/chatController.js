/**
 * Controlador para el Asistente / Chatbot de Tensiva
 */

// Base de conocimiento y reglas de intención en el backend
const procesarIntencion = (mensajeRaw) => {
    const texto = (mensajeRaw || '').toLowerCase().trim();

    // 1. Saludos
    if (/^(hola|buenos d[ií]as|buenas tardes|buenas noches|hey|qu[eé] tal|saludos|holi)/i.test(texto)) {
        return {
            respuesta: "¡Hola! 👋 Soy **TensiBot**, tu asistente virtual en Tensiva. Puedo explicarte sobre nuestras soluciones de ingeniería e IoT, presentarte la plataforma **CORDIA** o llevarte a cualquier sección de la página. ¿En qué puedo ayudarte hoy?",
            accion: null,
            sugerencias: [
                "¿Qué es la plataforma CORDIA?",
                "¿Qué soluciones ofrece Tensiva?",
                "Quiero cotizar un proyecto",
                "Preguntas frecuentes"
            ]
        };
    }

    // 2. Contacto / Cotización / Precios / Hablar con un asesor (prioridad alta)
    if (/(contact|cotiz|precio|presupuesto|reuni[oó]n|hablar|agendar|asesor|correo|tel[eé]fono|formulario|mensaje|contratar)/i.test(texto)) {
        const esCordia = /cordia/i.test(texto);
        const motivo = esCordia ? 'Monitoreo CORDIA' : 'Proyecto de ingeniería';

        return {
            respuesta: `📩 ¡Excelente! Puedes enviarnos un mensaje directamente a través de nuestro formulario de contacto. Te llevaré allí de inmediato con el motivo preseleccionado en **"${motivo}"**.`,
            accion: {
                tipo: 'navegar',
                seccion: 'contacto',
                motivo: motivo,
                etiqueta: 'Ir al Formulario de Contacto'
            },
            sugerencias: [
                "Completar formulario",
                "Ver soluciones antes",
                "Volver al inicio"
            ]
        };
    }

    // 3. CORDIA (Monitoreo de líneas de vida, caídas, sensores de tensión)
    if (/(cordia|linea[s]? de vida|l[ií]nea[s]? de vida|ca[ií]da[s]?|tensi[oó]n|sensor[es]* de tensi[oó]n|arn[eé]s)/i.test(texto)) {
        return {
            respuesta: "⚡ **CORDIA** es nuestra plataforma insignia de monitoreo continuo para **líneas de vida industriales**. \n\nIntegra sensores de tensión IoT, detección inmediata de caídas en tiempo real, registro de eventos y compatibilidad con video-verificación para garantizar la máxima seguridad laboral en trabajos en altura.\n\n¿Te gustaría que te lleve a la sección de CORDIA para ver más detalles?",
            accion: {
                tipo: 'navegar',
                seccion: 'cordia',
                motivo: 'Monitoreo CORDIA',
                etiqueta: 'Ver sección CORDIA'
            },
            sugerencias: [
                "Ir a la sección CORDIA",
                "¿Cómo detecta las caídas?",
                "Cotizar CORDIA para mi empresa"
            ]
        };
    }

    // 4. Soluciones / Servicios de Tensiva
    if (/(soluci[oó]n|soluciones|servicio[s]?|qu[eé] hacen|qu[eé] ofrece[n]?|iot|sensores|hardware|software|plataforma[s]?|ingenier[ií]a)/i.test(texto)) {
        return {
            respuesta: "En **Tensiva** conectamos equipos, sensores y plataformas para transformar datos de terreno en decisiones operativas. Nuestros 4 pilares son:\n\n1. **Ingeniería Aplicada:** Diseño y desarrollo a medida de soluciones técnicas.\n2. **Tecnología IoT:** Sensores industriales, telemetría y conectividad de campo.\n3. **Plataformas de Monitoreo:** Paneles de control y visualización de datos en tiempo real.\n4. **Servicios & Soporte:** Acompañamiento técnico continuo en terreno.",
            accion: {
                tipo: 'navegar',
                seccion: 'soluciones',
                etiqueta: 'Explorar Soluciones'
            },
            sugerencias: [
                "Ver Soluciones en la página",
                "¿Cómo funciona CORDIA?",
                "Cuéntame sobre el equipo"
            ]
        };
    }

    // 5. Nosotros / Equipo / Quiénes son
    if (/(qui[eé]n(es)? son|nosotros|empresa|historia|equipo|mart[ií]n|carlos|fundador)/i.test(texto)) {
        return {
            respuesta: "🏢 **Tensiva** nace de la necesidad real de modernizar la supervisión y seguridad industrial mediante tecnología confiable. \n\nNuestro equipo combina experiencia en ingeniería eléctrica, mecánica, desarrollo de software e IoT para entregar herramientas de alto impacto operativo y de protección a las personas.",
            accion: {
                tipo: 'navegar',
                seccion: 'nosotros',
                etiqueta: 'Conocer más sobre nosotros'
            },
            sugerencias: [
                "Ir a Nosotros",
                "Ver Soluciones de Tensiva",
                "Contactar al equipo"
            ]
        };
    }

    // 6. Preguntas Frecuentes (FAQ)
    if (/(faq|pregunta[s]?|duda[s]?|frecuente[s]?|garant[ií]a|instalaci[oó]n|mantenimiento)/i.test(texto)) {
        return {
            respuesta: "📋 Tenemos una sección de **Preguntas Frecuentes** donde resolvemos dudas típicas sobre conectividad, mantenimiento de sensores, instalación en faena y compatibilidad de la plataforma CORDIA.",
            accion: {
                tipo: 'navegar',
                seccion: 'faq',
                etiqueta: 'Ver Preguntas Frecuentes'
            },
            sugerencias: [
                "Ir a FAQ",
                "Preguntar sobre CORDIA",
                "Contactar a Tensiva"
            ]
        };
    }

    // 7. Navegación directa a Inicio o subir
    if (/(inicio|arriba|home|portada|comienzo|subir)/i.test(texto)) {
        return {
            respuesta: "🚀 ¡Entendido! Te llevo al inicio de la página.",
            accion: {
                tipo: 'navegar',
                seccion: 'inicio',
                etiqueta: 'Ir a Inicio'
            },
            sugerencias: [
                "Ver soluciones",
                "Conocer CORDIA",
                "Contáctanos"
            ]
        };
    }

    // Respuesta por defecto (intención no identificada con asistencia guiada)
    return {
        respuesta: "Comprendo tu consulta. En Tensiva nos especializamos en **soluciones de ingeniería, supervisión IoT y la plataforma CORDIA** para monitoreo de líneas de vida. \n\nPuedo llevarte a explorar nuestras soluciones, consultar las dudas frecuentes o ponerte en contacto directo con uno de nuestros especialistas técnicos.",
        accion: null,
        sugerencias: [
            "Conocer CORDIA",
            "Ver nuestras soluciones",
            "Preguntas frecuentes",
            "Ir al formulario de contacto"
        ]
    };
};

/**
 * Endpoint POST /api/chat
 */
const responderChat = async (req, res) => {
    try {
        const { mensaje, historial = [] } = req.body;

        if (!mensaje || typeof mensaje !== 'string') {
            return res.status(400).json({
                ok: false,
                mensaje: 'El campo "mensaje" es obligatorio y debe ser una cadena de texto.'
            });
        }

        // Si existe una API key de LLM (ej. Gemini o OpenAI), se podría consultar aquí
        // Por defecto utilizamos el procesador semántico contextual de Tensiva
        const resultado = procesarIntencion(mensaje);

        return res.status(200).json({
            ok: true,
            respuesta: resultado.respuesta,
            accion: resultado.accion,
            sugerencias: resultado.sugerencias,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Error en responderChat:', error);
        return res.status(500).json({
            ok: false,
            mensaje: 'Error interno en el asistente de chat.'
        });
    }
};

module.exports = {
    responderChat
};
