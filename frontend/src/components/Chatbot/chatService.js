/**
 * Servicio de comunicación con el asistente (Backend con fallback inmediato a motor local)
 */
import { processUserMessageLocally } from './chatbotData';

const API_BASE_URL = 'http://localhost:3000/api';

export async function sendMessageToAssistant(message, history = []) {
  // Simular un pequeño retardo natural de respuesta (500ms)
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500); // 2.5s timeout

    const res = await fetch(`${API_BASE_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mensaje: message,
        historial: history.slice(-6).map((h) => ({
          emisor: h.sender,
          texto: h.text,
        })),
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      await delay(400);
      return {
        text: data.respuesta,
        action: data.accion ? {
          type: data.accion.tipo,
          section: data.accion.seccion,
          motivo: data.accion.motivo,
          label: data.accion.etiqueta,
        } : null,
        suggestions: data.sugerencias || [],
      };
    }
  } catch (err) {
    // Si el backend no está encendido o responde con error, usamos el procesador local
    console.info('[Chatbot] Servidor backend no alcanzable o sin respuesta, utilizando motor local inteligente.');
  }

  // Fallback local garantizado
  await delay(550);
  return processUserMessageLocally(message);
}
