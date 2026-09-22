import React from 'react';
import icono1 from '../assets/Icono1.svg';

export default function TensivaLogo({ className = "w-10 h-12", showGlow = true }) {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      {showGlow && (
        <div className="absolute inset-0 rounded-full bg-[#26d9d0]/20 blur-md pointer-events-none" />
      )}
      <img
        src={icono1}
        alt="Tensiva Logo"
        className="w-full h-full object-contain relative"
        draggable={false}
      />
    </div>
  );
}
