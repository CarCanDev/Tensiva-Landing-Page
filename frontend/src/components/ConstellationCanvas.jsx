import React, { useEffect, useRef } from 'react';

export default function ConstellationCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Configuración de Nodos/Estrellas IoT
    const particleCount = Math.floor(Math.min(width, height) / 18);
    const particles = [];

    const mouse = {
      x: null,
      y: null,
      radius: 140,
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.7 + 0.3,
      });
    }

    // Estado para la estrella fugaz ocasional
    let shootingStar = null;

    const createShootingStar = () => {
      const angle = (Math.PI / 4) + (Math.random() * 0.2 - 0.1); // ~45 grados hacia abajo a la derecha
      const speed = Math.random() * 8 + 10;
      return {
        x: Math.random() * width * 0.8,
        y: Math.random() * height * 0.5,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        length: Math.random() * 120 + 100,
        alpha: 1,
        fadeSpeed: Math.random() * 0.015 + 0.01,
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Actualizar y dibujar partículas estáticas/nodos
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Dibujar punto (nodo de sensor)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(38, 217, 208, ${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#26d9d0';
        ctx.fill();
        ctx.shadowBlur = 0; // reset

        // Dibujar conexiones (líneas de tensión) entre nodos cercanos
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const lineAlpha = (1 - dist / 120) * 0.25;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(38, 217, 208, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Conectar con el cursor si está cerca
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const lineAlpha = (1 - dist / mouse.radius) * 0.4;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(38, 217, 208, ${lineAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Lógica de la Estrella Fugaz ocasional
      if (!shootingStar) {
        // Probabilidad sutil de aparición (aprox. cada 8 a 15 segundos a 60fps)
        if (Math.random() < 0.0025) {
          shootingStar = createShootingStar();
        }
      } else {
        // Avanzar posición de la estrella fugaz
        shootingStar.x += shootingStar.dx;
        shootingStar.y += shootingStar.dy;
        shootingStar.alpha -= shootingStar.fadeSpeed;

        if (
          shootingStar.alpha <= 0 ||
          shootingStar.x > width + 200 ||
          shootingStar.y > height + 200
        ) {
          shootingStar = null;
        } else {
          // Calcular la cola de la estrella
          const tailX = shootingStar.x - (shootingStar.dx / Math.hypot(shootingStar.dx, shootingStar.dy)) * shootingStar.length;
          const tailY = shootingStar.y - (shootingStar.dy / Math.hypot(shootingStar.dx, shootingStar.dy)) * shootingStar.length;

          // Dibujar trazo en degradado de luz neón
          const gradient = ctx.createLinearGradient(
            shootingStar.x,
            shootingStar.y,
            tailX,
            tailY
          );
          gradient.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.alpha})`);
          gradient.addColorStop(0.3, `rgba(38, 217, 208, ${shootingStar.alpha * 0.8})`);
          gradient.addColorStop(1, 'rgba(38, 217, 208, 0)');

          ctx.beginPath();
          ctx.moveTo(shootingStar.x, shootingStar.y);
          ctx.lineTo(tailX, tailY);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.8;
          ctx.shadowBlur = 12;
          ctx.shadowColor = '#26d9d0';
          ctx.stroke();
          ctx.shadowBlur = 0; // reset

          // Cabeza brillante de la estrella fugaz
          ctx.beginPath();
          ctx.arc(shootingStar.x, shootingStar.y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${shootingStar.alpha})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
}
