import React from 'react';
import iconoSvg from '../assets/icono.svg';

export default function TensivaLogo({ className = "w-12 h-16" }) {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <img
        src={iconoSvg}
        alt="Isotipo Tensiva"
        className="w-full h-full object-contain"
      />
    </div>
  );
}
