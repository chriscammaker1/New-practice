import React, { useState } from 'react';
import { X, Check, Link2, Sparkles, Sliders, RefreshCw } from 'lucide-react';
import { FrameConfig } from '../types.ts';
import { FRAME_PRESETS } from '../data/presets.ts';

interface FrameBridgeModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: FrameConfig;
  onUpdateConfig: (updated: Partial<FrameConfig>) => void;
  onSelectPreset: (id: string) => void;
  framerUrl: string;
  onUpdateFramerUrl: (url: string) => void;
}

export const FrameBridgeModal: React.FC<FrameBridgeModalProps> = ({
  isOpen,
  onClose,
  config,
  onUpdateConfig,
  onSelectPreset,
  framerUrl,
  onUpdateFramerUrl,
}) => {
  const [activeTab, setActiveTab] = useState<'content' | 'source' | 'presets'>('source');
  const [customUrlInput, setCustomUrlInput] = useState(framerUrl);
  const [pastePayload, setPastePayload] = useState('');
  const [bridgeNotice, setBridgeNotice] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleApplyUrl = () => {
    onUpdateFramerUrl(customUrlInput);
    setBridgeNotice('Framer project bridge connected successfully.');
    setTimeout(() => setBridgeNotice(null), 3000);
  };

  const handleParseCustomPayload = () => {
    if (!pastePayload.trim()) return;

    // Check if user pasted JSON tokens or text
    try {
      const parsed = JSON.parse(pastePayload);
      if (parsed.headline) onUpdateConfig({ headline: parsed.headline });
      if (parsed.brandName) onUpdateConfig({ brandName: parsed.brandName });
      if (parsed.subhead) onUpdateConfig({ subhead: parsed.subhead });
      setBridgeNotice('Custom JSON tokens imported and applied to the frame!');
    } catch {
      // Natural language extract
      const lines = pastePayload.split('\n').filter((l) => l.trim().length > 0);
      if (lines.length > 0) {
        onUpdateConfig({ headline: lines[0] });
        if (lines.length > 1) {
          onUpdateConfig({ subhead: lines[1] });
        }
      }
      setBridgeNotice('Extracted content mapped to hero section.');
    }
    setTimeout(() => setBridgeNotice(null), 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-neutral-100">
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sliders size={18} className="text-amber-500" />
            <h3 className="text-base font-bold text-white font-display">Framer Project Bridge</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Tab navigation */}
        <div className="px-6 pt-3 border-b border-neutral-800 flex gap-4 text-xs font-medium">
          <button
            onClick={() => setActiveTab('source')}
            className={`pb-2.5 transition-colors border-b-2 ${
              activeTab === 'source'
                ? 'border-amber-500 text-white font-semibold'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Framer Link & Paste
          </button>
          <button
            onClick={() => setActiveTab('content')}
            className={`pb-2.5 transition-colors border-b-2 ${
              activeTab === 'content'
                ? 'border-amber-500 text-white font-semibold'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Live Copy & Attributes
          </button>
          <button
            onClick={() => setActiveTab('presets')}
            className={`pb-2.5 transition-colors border-b-2 ${
              activeTab === 'presets'
                ? 'border-amber-500 text-white font-semibold'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Switch Archetype
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs">
          {bridgeNotice && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Check size={14} />
              <span>{bridgeNotice}</span>
            </div>
          )}

          {activeTab === 'source' && (
            <div className="space-y-5">
              <div>
                <label className="block text-neutral-300 font-semibold mb-2">
                  Connected Framer Project URL:
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="url"
                      value={customUrlInput}
                      onChange={(e) => setCustomUrlInput(e.target.value)}
                      placeholder="https://framer.com/projects/..."
                      className="w-full pl-9 pr-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-white font-mono text-xs focus:outline-none focus:border-amber-500"
                    />
                    <Link2 size={14} className="absolute left-3 top-2.5 text-neutral-500" />
                  </div>
                  <button
                    onClick={handleApplyUrl}
                    className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-lg transition-colors whitespace-nowrap"
                  >
                    Sync
                  </button>
                </div>
                <p className="mt-1.5 text-neutral-500 text-[11px]">
                  Directly linked to your active project <code className="font-mono text-neutral-300">Brighthouse--bciCiCzcwmD1WC8bw3mC-9eHlZ</code>.
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800">
                <label className="block text-neutral-300 font-semibold mb-2">
                  Paste Custom Frame Content or JSON Tokens:
                </label>
                <textarea
                  rows={4}
                  value={pastePayload}
                  onChange={(e) => setPastePayload(e.target.value)}
                  placeholder="Paste your exported Framer text, headlines, or JSON design tokens here..."
                  className="w-full p-3 bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-200 font-mono text-xs focus:outline-none focus:border-amber-500"
                />
                <div className="mt-2 flex justify-end">
                  <button
                    onClick={handleParseCustomPayload}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg transition-colors"
                  >
                    <Sparkles size={13} className="text-amber-400" />
                    <span>Apply Pasted Content</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'content' && (
            <div className="space-y-4">
              <div>
                <label className="block text-neutral-300 font-semibold mb-1">Brand Name:</label>
                <input
                  type="text"
                  value={config.brandName}
                  onChange={(e) => onUpdateConfig({ brandName: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-white font-display focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-neutral-300 font-semibold mb-1">Hero Headline:</label>
                <input
                  type="text"
                  value={config.headline}
                  onChange={(e) => onUpdateConfig({ headline: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-neutral-300 font-semibold mb-1">Subhead Description:</label>
                <textarea
                  rows={3}
                  value={config.subhead}
                  onChange={(e) => onUpdateConfig({ subhead: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-300 font-semibold mb-1">Primary Button:</label>
                  <input
                    type="text"
                    value={config.primaryCta}
                    onChange={(e) => onUpdateConfig({ primaryCta: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-neutral-300 font-semibold mb-1">Secondary Button:</label>
                  <input
                    type="text"
                    value={config.secondaryCta}
                    onChange={(e) => onUpdateConfig({ secondaryCta: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'presets' && (
            <div className="space-y-3">
              <div className="text-neutral-400 mb-2">
                Choose a pre-configured architecture and aesthetic archetype:
              </div>
              {FRAME_PRESETS.map((preset) => (
                <div
                  key={preset.id}
                  onClick={() => {
                    onSelectPreset(preset.id);
                    setBridgeNotice(`Switched to "${preset.name}"`);
                    setTimeout(() => setBridgeNotice(null), 2500);
                  }}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    config.id === preset.id
                      ? 'bg-neutral-800/80 border-amber-500/80 shadow-sm'
                      : 'bg-neutral-950 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">{preset.name}</span>
                    {config.id === preset.id && (
                      <span className="text-[11px] font-semibold text-amber-400 flex items-center gap-1">
                        <Check size={12} /> Active
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-neutral-400 text-xs line-clamp-2">{preset.subhead}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-neutral-800 bg-neutral-950/60 flex items-center justify-between text-xs">
          <span className="text-neutral-500">Live Framer preview synchronized</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white hover:bg-neutral-200 text-neutral-950 font-semibold rounded-lg transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
