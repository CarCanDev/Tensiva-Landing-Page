import React, { useState, useEffect, useRef } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  RotateCcw,
  Bot,
  ExternalLink,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { BOT_INFO, INITIAL_SUGGESTIONS } from './chatbotData';
import { sendMessageToAssistant } from './chatService';

export default function Chatbot({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      text: BOT_INFO.welcomeMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      action: null,
      suggestions: INITIAL_SUGGESTIONS,
    },
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto scroll al final de los mensajes
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Enfocar el input al abrir
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isLoading]);



  // Manejador para ejecutar la acción visual en la página
  const executePageAction = (action) => {
    if (!action || !action.section) return;

    if (onNavigate) {
      onNavigate(action.section, action.motivo || null);
    } else {
      const el = document.getElementById(action.section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Efecto de resaltado visual temporal
    const targetEl = document.getElementById(action.section);
    if (targetEl) {
      targetEl.classList.remove('highlight-section-active');
      // Forzar reflujo para reiniciar la animación
      void targetEl.offsetWidth;
      targetEl.classList.add('highlight-section-active');

      setTimeout(() => {
        targetEl.classList.remove('highlight-section-active');
      }, 2600);
    }
  };

  // Enviar mensaje
  const handleSend = async (textToSend) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    setInputMessage('');

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const response = await sendMessageToAssistant(text, messages);

      const botMsg = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: response.text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        action: response.action || null,
        suggestions: response.suggestions || [],
      };

      setMessages((prev) => [...prev, botMsg]);

      // Si la respuesta incluye una acción de navegación, ejecutarla suavemente
      if (response.action && response.action.section) {
        executePageAction(response.action);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-err-${Date.now()}`,
          sender: 'bot',
          text: 'Lo siento, ocurrió un error momentáneo. Por favor intenta de nuevo o escríbenos a través del formulario de contacto.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          suggestions: INITIAL_SUGGESTIONS,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'bot',
        text: 'Conversación reiniciada. 🔄 ¿En qué puedo ayudarte ahora?',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        action: null,
        suggestions: INITIAL_SUGGESTIONS,
      },
    ]);
  };

  // Formateador simple de texto markdown (negritas y saltos de línea)
  const renderFormattedText = (text) => {
    if (!text) return null;

    const lines = text.split('\n');
    return lines.map((line, idx) => {
      // Reemplazo básico de **texto**
      const parts = line.split(/(\*\*.*?\*\*)/g);

      return (
        <p key={idx} className={line.startsWith('•') ? 'pl-2 my-0.5' : 'my-1'}>
          {parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={pIdx} className="text-[#c8f7f4] font-semibold">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <aside aria-label="Asistente virtual de Tensiva" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-auto select-none">


      {/* Ventana de Chat Flotante */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2.5rem)] sm:w-[410px] h-[550px] max-h-[82vh] rounded-2xl glass-card border border-[#26d9d0]/35 shadow-[0_12px_45px_rgba(0,0,0,0.7)] flex flex-col overflow-hidden animate-chat-open">
          {/* Header */}
          <div className="px-4 py-3.5 border-b border-white/10 bg-[#060e1a]/80 backdrop-blur-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#26d9d0] to-[#0d6e6a] flex items-center justify-center p-0.5 shadow-md shadow-[#26d9d0]/30">
                  <div className="w-full h-full bg-[#050b14] rounded-[10px] flex items-center justify-center">
                    <Bot className="w-5 h-5 text-[#26d9d0]" />
                  </div>
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-[#050b14] rounded-full shadow-[0_0_8px_#34d399]" />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-[#f4f7fb] tracking-wide">
                    {BOT_INFO.name}
                  </span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#26d9d0]/15 text-[#26d9d0] border border-[#26d9d0]/30 font-medium">
                    Asistente
                  </span>
                </div>
                <span className="text-[11px] text-[#8fa3b8] flex items-center gap-1">
                  Interactúa con la página en vivo
                </span>
              </div>
            </div>

            {/* Acciones del Header */}
            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                title="Reiniciar conversación"
                className="p-1.5 text-[#8fa3b8] hover:text-[#26d9d0] hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                aria-label="Reiniciar conversación"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Minimizar chat"
                className="p-1.5 text-[#8fa3b8] hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                aria-label="Cerrar chat"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Historial de Mensajes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 chat-scrollbar">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'
                  }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed ${msg.sender === 'user'
                      ? 'bg-gradient-to-r from-[#26d9d0] to-[#1cb5ad] text-[#050b14] font-medium rounded-tr-xs shadow-md shadow-[#26d9d0]/15'
                      : 'bg-[#0a1526]/90 border border-white/10 text-[#e4edf7] rounded-tl-xs shadow-md backdrop-blur-md'
                    }`}
                >
                  {renderFormattedText(msg.text)}

                  {/* Botón de acción interactiva si el mensaje lo provee */}
                  {msg.action && (
                    <div className="mt-3 pt-2 border-t border-white/10 flex flex-wrap gap-2">
                      <button
                        onClick={() => executePageAction(msg.action)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#26d9d0]/15 hover:bg-[#26d9d0]/30 border border-[#26d9d0]/40 text-[#26d9d0] font-medium text-xs transition-all cursor-pointer shadow-sm hover:shadow-[#26d9d0]/20"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-[#26d9d0]" />
                        <span>{msg.action.label || 'Ver sección'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Hora del mensaje */}
                <span className="text-[10px] text-[#8fa3b8]/70 mt-1 px-1">
                  {msg.time}
                </span>

                {/* Chips de sugerencias del bot para el último mensaje */}
                {msg.sender === 'bot' &&
                  msg.suggestions &&
                  msg.suggestions.length > 0 &&
                  msg === messages[messages.length - 1] &&
                  !isLoading && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-full">
                      {msg.suggestions.map((sug, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={() => handleSend(sug)}
                          className="text-left text-[11px] px-2.5 py-1.5 rounded-xl bg-white/5 hover:bg-[#26d9d0]/15 text-[#8fa3b8] hover:text-[#26d9d0] border border-white/10 hover:border-[#26d9d0]/40 transition-all cursor-pointer flex items-center gap-1"
                        >
                          <span>{sug}</span>
                        </button>
                      ))}
                    </div>
                  )}
              </div>
            ))}

            {/* Indicador de escritura animado */}
            {isLoading && (
              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-[#0a1526]/90 border border-white/10 w-fit rounded-tl-xs">
                <span className="w-2 h-2 rounded-full bg-[#26d9d0] animate-pulse" />
                <span
                  className="w-2 h-2 rounded-full bg-[#26d9d0] animate-pulse"
                  style={{ animationDelay: '200ms' }}
                />
                <span
                  className="w-2 h-2 rounded-full bg-[#26d9d0] animate-pulse"
                  style={{ animationDelay: '400ms' }}
                />
                <span className="text-[11px] text-[#8fa3b8] ml-2">TensiBot está escribiendo...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div className="p-3 border-t border-white/10 bg-[#060e1a]/95 backdrop-blur-md">
            <div className="relative flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Pregunta o pide ir a una sección..."
                disabled={isLoading}
                className="w-full pl-3.5 pr-11 py-2.5 text-xs sm:text-sm bg-[#0a1526] border border-white/15 focus:border-[#26d9d0] rounded-xl text-[#f4f7fb] placeholder-[#8fa3b8]/60 focus:outline-none focus:ring-1 focus:ring-[#26d9d0]/50 transition-all"
              />
              <button
                onClick={() => handleSend()}
                disabled={!inputMessage.trim() || isLoading}
                className="absolute right-1.5 p-2 rounded-lg bg-[#26d9d0] text-[#050b14] disabled:opacity-30 disabled:hover:bg-[#26d9d0] hover:bg-[#1ebcb4] transition-all cursor-pointer disabled:cursor-not-allowed shadow-sm"
                aria-label="Enviar mensaje"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-1.5 flex items-center justify-between px-1 text-[10px] text-[#8fa3b8]/70">
              <span>Presiona Enter para enviar</span>
              <span className="text-[#26d9d0]/80">Tensiva Assistant</span>
            </div>
          </div>
        </div>
      )}

      {/* Botón Flotante Principal (FAB) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#26d9d0] to-[#128b85] text-[#050b14] shadow-[0_0_25px_rgba(38,217,208,0.4)] hover:shadow-[0_0_35px_rgba(38,217,208,0.6)] transform hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label={isOpen ? 'Cerrar asistente virtual' : 'Abrir asistente virtual de Tensiva'}
      >
        {isOpen ? (
          <X className="w-6 h-6 transition-transform group-hover:rotate-90 duration-200" />
        ) : (
          <>
            <MessageSquare className="w-6 h-6" />
            {/* Indicador brillante superior */}
            <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-[#050b14] flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
            </span>
          </>
        )}
      </button>
    </aside>
  );
}
