import React from 'react';

export default function TensivaLogo({ className = "w-10 h-12", showGlow = true }) {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <svg
        viewBox="400 450 2680 3350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ fillRule: 'evenodd', clipRule: 'evenodd' }}
      >
        {showGlow && (
          <defs>
            <filter id="tensivaGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="18" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
        )}

        <g filter={showGlow ? "url(#tensivaGlow)" : undefined}>
          {/* Barra horizontal superior izquierda */}
          <path
            d="M2620.178,1338.744l207.074,207.074l0,0.001l-2277.256,0l0,-0.001l207.074,-207.074l1863.108,0Z"
            fill="#26d9d0"
          />
          {/* Barra horizontal central */}
          <path
            d="M2914.146,1632.226l103.416,103.416l0,0.001l-103.658,103.658l-2448.785,-0l-102.898,-102.898l0,-3.457l100.72,-100.72l2451.206,0Z"
            fill="#26d9d0"
          />
          {/* Bloque L izquierdo inferior */}
          <path
            d="M1482.979,1926.094l0,207.075l-725.909,0l-207.074,-207.074l-0,-0.001l932.983,0Z"
            fill="#26d9d0"
          />
          {/* Bloque L derecho inferior */}
          <path
            d="M2827.252,1926.094l0,0.001l-207.074,207.074l-725.997,0l0,-207.075l933.071,0Z"
            fill="#26d9d0"
          />
          {/* Pilar derecho vertical */}
          <path
            d="M2094.285,3536.605l-196.39,197.287c-0,0 -0.001,0 -0.001,0l-3.713,-1629.568l196.839,-0.448c0,0 2.276,999.167 3.264,1432.729Z"
            fill="#26d9d0"
          />
          {/* Pilar central vertical */}
          <path
            d="M1786.911,3762.963l-196.84,0l0,-1956.949l196.84,0l-0,1956.949Z"
            fill="#26d9d0"
          />
          {/* Pilar izquierdo vertical */}
          <path
            d="M1482.979,3733.892l-0.001,0l-196.839,-196.839l0,-1433.177l196.84,0l0,1630.016Z"
            fill="#26d9d0"
          />
          {/* Nodo punto derecho */}
          <ellipse cx="2942.991" cy="948.96" rx="110.187" ry="116.688" fill="#26d9d0" />
          {/* Nodo punto izquierdo */}
          <ellipse cx="543.975" cy="832.272" rx="110.187" ry="116.688" fill="#26d9d0" />
          {/* Onda de tensión superior */}
          <path
            d="M590.018,865.559l737.883,-335.328l577.423,452.017l561.36,-512.968l451.173,512.968"
            fill="none"
            stroke="#26d9d0"
            strokeWidth="72.06"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </g>
      </svg>
    </div>
  );
}
