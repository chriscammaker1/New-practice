import React from 'react';

interface GoldenSunriseVisualProps {
  className?: string;
}

export const GoldenSunriseVisual: React.FC<GoldenSunriseVisualProps> = ({
  className = '',
}) => {
  return (
    <div
      className={`relative w-full aspect-[4/5] sm:aspect-square md:aspect-[4/5] max-w-md mx-auto rounded-xl overflow-hidden shadow-xl border border-stone-200/80 dark:border-neutral-800 ${className}`}
    >
      {/* Golden Sunrise Ocean Graphic */}
      <svg
        viewBox="0 0 600 750"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Sky Gradient */}
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e28555" />
            <stop offset="25%" stopColor="#ec9b67" />
            <stop offset="45%" stopColor="#f5b27e" />
            <stop offset="60%" stopColor="#fdce99" />
            <stop offset="65%" stopColor="#ffe4b8" />
          </linearGradient>

          {/* Sun Glow */}
          <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="35%" stopColor="#fff5cc" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#ffd276" stopOpacity="0.75" />
            <stop offset="85%" stopColor="#fca758" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f58e47" stopOpacity="0" />
          </radialGradient>

          {/* Water Base Gradient */}
          <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d48248" />
            <stop offset="20%" stopColor="#c16a3a" />
            <stop offset="50%" stopColor="#aa542d" />
            <stop offset="80%" stopColor="#8d3d23" />
            <stop offset="100%" stopColor="#6e2b19" />
          </linearGradient>

          {/* Glistening Reflection Gradient */}
          <linearGradient id="reflectionGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff8e1" stopOpacity="0.9" />
            <stop offset="25%" stopColor="#fed776" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#f9aa52" stopOpacity="0.6" />
            <stop offset="90%" stopColor="#ec7838" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#c55325" stopOpacity="0" />
          </linearGradient>

          {/* Horizon Mist Glow */}
          <linearGradient id="horizonGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff2cf" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#f49b5c" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 1. Sky */}
        <rect x="0" y="0" width="600" height="490" fill="url(#skyGrad)" />

        {/* Atmospheric Sky Rays */}
        <ellipse cx="300" cy="485" rx="220" ry="80" fill="url(#horizonGlow)" />

        {/* 2. The Rising Golden Sun */}
        <circle cx="300" cy="480" r="140" fill="url(#sunGlow)" />
        <circle cx="300" cy="480" r="46" fill="#ffffff" />
        <circle cx="300" cy="480" r="54" fill="#fff9d6" fillOpacity="0.8" />

        {/* Horizon Line */}
        <line x1="0" y1="490" x2="600" y2="490" stroke="#f69550" strokeWidth="1.5" />

        {/* 3. Ocean Water Field */}
        <rect x="0" y="490" width="600" height="260" fill="url(#waterGrad)" />

        {/* 4. Golden Sun Reflection Path down the water */}
        <polygon points="265,490 335,490 395,750 205,750" fill="url(#reflectionGrad)" />

        {/* 5. Realistic gentle ocean wave ripple lines */}
        <g stroke="#ffffff" strokeOpacity="0.75" strokeWidth="1.5" strokeLinecap="round">
          {/* Near Horizon Ripples */}
          <line x1="285" y1="494" x2="315" y2="494" />
          <line x1="278" y1="498" x2="322" y2="498" />
          <line x1="272" y1="503" x2="328" y2="503" strokeWidth="1.8" />
          <line x1="268" y1="508" x2="332" y2="508" />
          <line x1="260" y1="514" x2="340" y2="514" strokeWidth="2" />
          <line x1="255" y1="521" x2="345" y2="521" />
          <line x1="250" y1="529" x2="350" y2="529" strokeWidth="2.2" />

          {/* Mid-Water Swells */}
          <line x1="242" y1="540" x2="358" y2="540" />
          <line x1="235" y1="552" x2="365" y2="552" strokeWidth="2.5" />
          <line x1="228" y1="566" x2="372" y2="566" />
          <line x1="220" y1="582" x2="380" y2="582" strokeWidth="2.8" />
          <line x1="212" y1="600" x2="388" y2="600" strokeWidth="3" />
          <line x1="205" y1="620" x2="395" y2="620" strokeWidth="3.2" />

          {/* Foreground Broad Waves */}
          <line x1="195" y1="645" x2="405" y2="645" strokeWidth="3.5" />
          <line x1="185" y1="672" x2="415" y2="672" strokeWidth="3.8" />
          <line x1="175" y1="702" x2="425" y2="702" strokeWidth="4" />
          <line x1="160" y1="735" x2="440" y2="735" strokeWidth="4.2" />
        </g>

        {/* Ambient Dark Ocean Waves outside reflection */}
        <g stroke="#e27c42" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round">
          <line x1="50" y1="510" x2="180" y2="510" />
          <line x1="420" y1="515" x2="560" y2="515" />
          <line x1="30" y1="545" x2="160" y2="545" />
          <line x1="440" y1="550" x2="570" y2="550" />
          <line x1="40" y1="610" x2="150" y2="610" strokeWidth="2" />
          <line x1="450" y1="615" x2="580" y2="615" strokeWidth="2" />
          <line x1="20" y1="680" x2="140" y2="680" strokeWidth="2.5" />
          <line x1="460" y1="690" x2="590" y2="690" strokeWidth="2.5" />
        </g>
      </svg>

      {/* Subtle Frame Vignette */}
      <div className="absolute inset-0 ring-1 ring-inset ring-black/10 pointer-events-none rounded-xl" />
    </div>
  );
};
