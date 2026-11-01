import React from 'react';

interface BrighthouseLogoProps {
  className?: string;
  theme?: 'dark' | 'light';
  size?: 'sm' | 'default' | 'lg';
}

export const BrighthouseLogo: React.FC<BrighthouseLogoProps> = ({
  className = '',
  theme = 'light',
  size = 'default',
}) => {
  const circleSize = {
    sm: 'h-6 w-6',
    default: 'h-7 sm:h-8 w-7 sm:w-8',
    lg: 'h-9 sm:h-10 w-9 sm:w-10',
  }[size];

  const camTextSize = {
    sm: 'text-xl sm:text-2xl',
    default: 'text-2xl sm:text-[28px]',
    lg: 'text-3xl sm:text-4xl',
  }[size];

  const sublineTextSize = {
    sm: 'text-[9px] sm:text-[10px]',
    default: 'text-[10.5px] sm:text-[11.5px]',
    lg: 'text-xs sm:text-sm',
  }[size];

  const dividerHeight = {
    sm: 'h-7 sm:h-8',
    default: 'h-8 sm:h-10',
    lg: 'h-11 sm:h-12',
  }[size];

  return (
    <div className={`inline-flex items-center select-none text-left ${className}`}>
      {/* Symbol + CAM mark */}
      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
        <div className="relative shrink-0 flex items-center justify-center">
          <img
            src="/assets/cam_circles_symbol.png"
            alt="CAM Symbol"
            className={`${circleSize} object-contain shrink-0`}
          />
        </div>

        <span
          className={`font-sans font-black tracking-tight leading-none ${camTextSize} ${
            theme === 'dark' ? 'text-white' : 'text-[#1B2A4A]'
          }`}
        >
          CAM
        </span>
      </div>

      {/* Architectural Pipe Divider */}
      <div
        className={`${dividerHeight} w-[1.5px] ${
          theme === 'dark' ? 'bg-neutral-700' : 'bg-[#7A9A8B]/60'
        } shrink-0 mx-2 sm:mx-2.5 self-center`}
      />

      {/* Right Column: 2-Line Descriptor without provider or location */}
      <div className="flex flex-col justify-center text-left leading-[1.12]">
        <span
          className={`font-sans font-extrabold uppercase tracking-wider ${sublineTextSize} ${
            theme === 'dark' ? 'text-white' : 'text-[#1B2A4A]'
          }`}
        >
          CHILD &amp; FAMILY
        </span>
        <span
          className={`font-sans font-extrabold uppercase tracking-wider ${sublineTextSize} ${
            theme === 'dark' ? 'text-white' : 'text-[#1B2A4A]'
          }`}
        >
          PSYCHOLOGY
        </span>
      </div>
    </div>
  );
};

export const CAMLogo = BrighthouseLogo;
