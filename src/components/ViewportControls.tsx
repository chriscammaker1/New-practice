import React from 'react';
import { Monitor, Tablet, Smartphone, Maximize2, Sliders, Code2, Sun, Moon, Grid, ExternalLink, Layers } from 'lucide-react';
import { ViewportMode, ThemeMode, PageMode } from '../types.ts';

interface ViewportControlsProps {
  viewport: ViewportMode;
  onViewportChange: (mode: ViewportMode) => void;
  theme: ThemeMode;
  onThemeToggle: () => void;
  showGrid: boolean;
  onToggleGrid: () => void;
  currentPage: PageMode;
  onSelectPage: (page: PageMode) => void;
  onOpenBridge: () => void;
  onOpenExport: () => void;
  framerUrl?: string;
}

export const ViewportControls: React.FC<ViewportControlsProps> = ({
  viewport,
  onViewportChange,
  theme,
  onThemeToggle,
  showGrid,
  onToggleGrid,
  currentPage,
  onSelectPage,
  onOpenBridge,
  onOpenExport,
  framerUrl = 'https://framer.com/projects/Brighthouse--bciCiCzcwmD1WC8bw3mC-9eHlZ',
}) => {
  return (
    <div className="hidden md:block w-full bg-neutral-900 border-b border-neutral-800 text-neutral-200 text-xs py-2 px-4 select-none shrink-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Source Framer Reference */}
        <div className="flex items-center gap-3">
          <span className="font-semibold text-white tracking-wide">Framer Canvas</span>
          <span className="text-neutral-500" aria-hidden="true">·</span>
          <a
            href={framerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-neutral-400 hover:text-sky-300 transition-colors group"
            title="Open Framer source project in new tab"
          >
            <span className="truncate max-w-[150px] sm:max-w-[220px] font-mono text-[11px]">
              Brighthouse--bciCiCzcwmD1...
            </span>
            <ExternalLink size={12} className="shrink-0 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Center: Framer Pages Switcher (Home, /services, /about) + Viewport Mode */}
        <div className="flex items-center gap-2">
          {/* Framer Pages from project sidebar */}
          <div className="flex items-center p-0.5 bg-neutral-950 rounded-lg border border-neutral-800">
            <span className="text-[10px] uppercase font-mono px-2 text-neutral-500 flex items-center gap-1 hidden sm:flex">
              <Layers size={11} /> Pages:
            </span>
            <button
              onClick={() => onSelectPage('home')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                currentPage === 'home'
                  ? 'bg-[#102A43] text-white shadow-xs font-semibold'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onSelectPage('services')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                currentPage === 'services'
                  ? 'bg-[#102A43] text-white shadow-xs font-semibold'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              /services
            </button>
            <button
              onClick={() => onSelectPage('about')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                currentPage === 'about'
                  ? 'bg-[#102A43] text-white shadow-xs font-semibold'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              /about
            </button>
            <button
              onClick={() => onSelectPage('faq')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                currentPage === 'faq'
                  ? 'bg-[#102A43] text-white shadow-xs font-semibold'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              /faq
            </button>
          </div>

          {/* Viewport Frame Mode Buttons */}
          <div className="flex items-center p-0.5 bg-neutral-950 rounded-lg border border-neutral-800">
            <button
              onClick={() => onViewportChange('desktop')}
              className={`p-1.5 rounded-md transition-colors ${
                viewport === 'desktop' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'
              }`}
              title="Desktop (1440px wide canvas)"
            >
              <Monitor size={14} />
            </button>
            <button
              onClick={() => onViewportChange('tablet')}
              className={`p-1.5 rounded-md transition-colors ${
                viewport === 'tablet' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'
              }`}
              title="Tablet Frame (768px)"
            >
              <Tablet size={14} />
            </button>
            <button
              onClick={() => onViewportChange('mobile')}
              className={`p-1.5 rounded-md transition-colors ${
                viewport === 'mobile' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'
              }`}
              title="Mobile Frame (390px)"
            >
              <Smartphone size={14} />
            </button>
            <button
              onClick={() => onViewportChange('fluid')}
              className={`p-1.5 rounded-md transition-colors ${
                viewport === 'fluid' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'
              }`}
              title="Full Window Viewport"
            >
              <Maximize2 size={14} />
            </button>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={onToggleGrid}
            className={`p-1.5 rounded-md border transition-colors ${
              showGrid
                ? 'bg-neutral-800 text-sky-300 border-neutral-700'
                : 'text-neutral-400 hover:text-white border-transparent'
            }`}
            title="Toggle Alignment Grid"
          >
            <Grid size={14} />
          </button>

          <button
            onClick={onThemeToggle}
            className="p-1.5 rounded-md text-neutral-400 hover:text-white transition-colors"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Canvas Theme`}
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          <button
            onClick={onOpenBridge}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white font-medium transition-colors whitespace-nowrap"
          >
            <Sliders size={13} />
            <span>Customize Frame</span>
          </button>

          <button
            onClick={onOpenExport}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-white hover:bg-neutral-200 text-neutral-950 font-semibold transition-colors whitespace-nowrap shadow-xs"
          >
            <Code2 size={13} />
            <span>Export Code</span>
          </button>
        </div>
      </div>
    </div>
  );
};
