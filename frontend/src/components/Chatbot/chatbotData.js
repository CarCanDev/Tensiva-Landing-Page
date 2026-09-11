/**
 * Base de conocimiento, reglas semánticas y acciones sobre la página para TensiBot
 */

export const INITIAL_SUGGESTIONS = [
  "¿Qué es la plataforma CORDIA?",
  "¿Qué soluciones ofrece Tensiva?",
  "Quiero cotizar un proyecto",
  "Preguntas Frecuentes",
  "¿Quiénes forman Tensiva?"
];

export const BOT_INFO = {
  name: "TensiBot",
  title: "Asistente Inteligente Tensiva",
  status: "En línea",
  avatarText: "TB",
  welcomeMessage: "¡Hola! 👋 Soy **TensiBot**, tu asistente técnico en Tensiva. Puedo explicarte sobre nuestras soluciones de ingeniería e IoT, mostrarte cómo funciona la plataforma **CORDIA** o guiarte directamente por las secciones de nuestra web.\n\n¿Qué te gustaría descubrir hoy?"
};

/**
 * Función que procesa el mensaje del usuario y devuelve respuesta + acción sobre la página
 */
export function processUserMessageLocally(messageText) {
  const query = (messageText || '').toLowerCase().trim();

  // 1. Saludos
  if (/^(hola|buenos d[ií]as|buenas tardes|buenas noches|hey|qu[eé] tal|saludos|holi|hi|hello)/i.test(query)) {
    return {
      text: "¡Hola! Un gusto saludarte. 👋 Estoy aquí para ayudarte a conocer más sobre la tecnología y servicios de Tensiva, o guiarte a cualquier sección que necesites.",
      action: null,
      suggestions: [
        "¿Qué es la plataforma CORDIA?",
        "¿Qué soluciones ofrece Tensiva?",
        "Quiero cotizar un proyecto",
        "Preguntas frecuentes"
      ]
    };
  }

  // 2. Contacto / Cotizaciones / Agendar reunión / Precios (prioridad alta)
  if (/(contact|cotiz|precio|presupuesto|reuni[oó]n|hablar|agendar|asesor|correo|tel[eé]fono|formulario|mensaje|contratar)/i.test(query)) {
    const isCordia = /cordia/i.test(query);
    const motivo = isCordia ? 'Monitoreo CORDIA' : 'Proyecto de ingeniería';

    return {
      text: `📩 ¡Perfecto! Vamos directo al **formulario de contacto**. He preseleccionado el motivo **"${motivo}"** para que puedas enviar tu mensaje rápidamente y nuestro equipo técnico se comunique contigo.`,
      action: {
        type: 'navigate',
        section: 'contacto',
        motivo: motivo,
        label: 'Ir a Contacto'
      },
      suggestions: [
        "Preguntas frecuentes antes de contactar",
        "Ver información de CORDIA",
        "Volver al inicio"
      ]
    };
  }

  // 3. Plataforma CORDIA (Monitoreo de líneas de vida, sensores, caídas)
  if (/(cordia|linea[s]? de vida|l[ií]nea[s]? de vida|ca[ií]da[s]?|tensi[oó]n|sensor[es]* de tensi[oó]n|arn[eé]s|altura|monitoreo)/i.test(query)) {
    return {
      text: "⚡ **CORDIA** es nuestra plataforma especializada en el **monitoreo inteligente de líneas de vida**.\n\n• **Detección continua de tensión:** Alerta en caso de sobrecargas o aflojamientos.\n• **Detección de caídas en tiempo real:** Activa protocolos inmediatos de rescate y seguridad.\n• **Video-verificación:** Registro visual sincronizado ante eventos críticos.\n\n¡Te desplazo a la sección de CORDIA para que veas todos los detalles!",
      action: {
        type: 'navigate',
        section: 'cordia',
        motivo: 'Monitoreo CORDIA',
        label: 'Ver CORDIA en la página'
      },
      suggestions: [
        "Ir al formulario de cotización",
        "¿Qué sensores utiliza CORDIA?",
        "Ver otras soluciones de ingeniería"
      ]
    };
  }

  // 4. Soluciones / Servicios de Tensiva (4 pilares, IoT, ingeniería)
  if (/(soluci[oó]n|soluciones|servicio[s]?|qu[eé] hacen|qu[eé] ofrece[n]?|iot|sensores|hardware|software|plataforma[s]?|ingenier[ií]a|pilares)/i.test(query)) {
    return {
      text: "En **Tensiva** conectamos equipos, sensores y plataformas para transformar datos de terreno en información útil. Trabajamos en **4 pilares**:\n\n1. **Ingeniería Aplicada:** Desarrollo de soluciones a la medida de tu operación.\n2. **Tecnología IoT:** Conectividad y adquisición de señales en faena.\n3. **Plataformas de Monitoreo:** Visualización y analítica en tiempo real.\n4. **Servicios Especializados:** Puesta en marcha, calibración y soporte continuo.\n\nTe llevo a la sección de Soluciones:",
      action: {
        type: 'navigate',
        section: 'soluciones',
        label: 'Explorar Soluciones'
      },
      suggestions: [
        "Conocer CORDIA",
        "Quiero cotizar un proyecto",
        "Ver quiénes forman el equipo"
      ]
    };
  }

  // 5. Nosotros / Quiénes son / Equipo / Martín / Carlos
  if (/(qui[eé]n(es)? son|nosotros|empresa|historia|equipo|mart[ií]n|carlos|fundador|fundadores)/i.test(query)) {
    return {
      text: "🏢 **Tensiva** nació para resolver problemáticas reales de supervisión y seguridad operacional mediante ingeniería práctica e IoT.\n\nNuestro equipo está liderado por ingenieros con trayectoria en diseño electrónico, telemetría y desarrollo de software industrial. Te muestro la sección **Nosotros**:",
      action: {
        type: 'navigate',
        section: 'nosotros',
        label: 'Ir a Nosotros'
      },
      suggestions: [
        "Ver soluciones técnicas",
        "Conocer la plataforma CORDIA",
        "Contactar al equipo"
      ]
    };
  }

  // 6. Preguntas Frecuentes (FAQ)
  if (/(faq|pregunta[s]?|duda[s]?|frecuente[s]?|garant[ií]a|instalaci[oó]n|normativa|duraci[oó]n|bater[ií]a)/i.test(query)) {
    return {
      text: "📋 En nuestra sección de **Preguntas Frecuentes** abordamos las dudas más recurrentes sobre tiempos de despliegue, mantenimiento de sensores, protocolos de alerta y compatibilidad con líneas de vida existentes.",
      action: {
        type: 'navigate',
        section: 'faq',
        label: 'Ver Preguntas Frecuentes'
      },
      suggestions: [
        "Ir a FAQ",
        "Preguntar por la plataforma CORDIA",
        "Hablar con un asesor"
      ]
    };
  }

  // 7. Navegación directa al inicio / arriba
  if (/(inicio|arriba|home|portada|comienzo|subir|volver)/i.test(query)) {
    return {
      text: "🚀 Te llevo al **inicio** de la página.",
      action: {
        type: 'navigate',
        section: 'inicio',
        label: 'Ir a Inicio'
      },
      suggestions: [
        "¿Qué es CORDIA?",
        "Ver soluciones de ingeniería",
        "Contactar a Tensiva"
      ]
    };
  }

  // 8. Respuestas de agradecimiento o despedida
  if (/(gracias|muchas gracias|genial|excelente|vale|ok|adi[oó]s|chao|hasta luego)/i.test(query)) {
    return {
      text: "¡Con mucho gusto! 😊 Si necesitas algo más, aquí estaré. También puedes contactar al equipo en cualquier momento desde el formulario inferior.",
      action: null,
      suggestions: [
        "¿Qué es la plataforma CORDIA?",
        "Ver soluciones",
        "Ir a Contacto"
      ]
    };
  }

  // Fallback con opciones guiadas
  return {
    text: "Disculpa, no logré entender con precisión tu consulta. 🤔 Puedo ayudarte con:\n\n• **CORDIA:** Nuestra plataforma para líneas de vida y detección de caídas.\n• **Soluciones de Ingeniería:** Proyectos a medida y sensores IoT.\n• **Contacto directo:** Para cotizar o coordinar una demostración técnica.\n\n¿Sobre qué te gustaría conocer más?",
    action: null,
    suggestions: [
      "¿Qué es la plataforma CORDIA?",
      "Nuestras soluciones IoT",
      "Quiero cotizar un proyecto",
      "Preguntas frecuentes"
    ]
  };
}
