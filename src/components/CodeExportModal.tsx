import React, { useState } from 'react';
import { X, Copy, Check, Code2 } from 'lucide-react';
import { FrameConfig } from '../types.ts';

interface CodeExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: FrameConfig;
}

export const CodeExportModal: React.FC<CodeExportModalProps> = ({
  isOpen,
  onClose,
  config,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Ensure function name is valid JavaScript without invalid & or special characters
  // CAMChild&FamilyPsychologyLandingPage -> CAMChildAndFamilyPsychology
  const validFunctionName = 'CAMChildAndFamilyPsychology';

  const codeSnippet = `/**
 * @license
 * Dr. Catherine McNulty, PhD · CAM Child & Family Psychology
 * Specialized Pediatric & Adolescent Clinical Psychology · Greenwich, CT
 * (CAM: Catherine A. McNulty / Connected • Aligned • Meaningful)
 */

import React from 'react';

export default function ${validFunctionName}() {
  return (
    <div className="min-h-screen bg-white text-[#1B2A4A] selection:bg-[#E8EFF5] selection:text-[#1B2A4A] antialiased">
      {/* Top Header */}
      <header className="sticky top-0 z-40 w-full border-b border-[#E8EEF3] bg-white/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-[#1B2A4A] font-display">
              CAM Child &amp; Family Psychology
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#486581]">
            <a href="#services" className="hover:text-[#1B2A4A] transition-colors">Services</a>
            <a href="#approach" className="hover:text-[#1B2A4A] transition-colors">Our Approach</a>
            <a href="#about" className="hover:text-[#1B2A4A] transition-colors">About Dr. McNulty</a>
            <a href="#consultation" className="hover:text-[#1B2A4A] transition-colors">Consultation</a>
          </nav>
          <a
            href="#consultation"
            className="px-5 py-2.5 text-xs font-semibold rounded-lg bg-[#1B2A4A] text-white hover:bg-[#253961] transition-colors"
          >
            Schedule an Introductory Call
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-12 pb-16 px-6 max-w-5xl mx-auto">
        {/* Top Badge: One Dedicated Provider above Assessment • Therapy • Advocacy */}
        <div className="mb-6">
          <div className="inline-flex flex-col items-start gap-1 px-4 py-2 rounded-2xl bg-[#F8FAFB] border border-[#8FA590]/40 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C59B27] animate-pulse" />
              <span className="text-xs font-bold tracking-wide uppercase text-[#1B2A4A]">
                One Dedicated Provider
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-[#486581]">
              <span>Assessment</span>
              <span className="text-[#8FA590]">•</span>
              <span>Therapy</span>
              <span className="text-[#8FA590]">•</span>
              <span>Advocacy</span>
            </div>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.12] text-[#1B2A4A] max-w-4xl font-display">
          A thoughtful, tailored approach for your child and family.
        </h1>
        <p className="mt-4 text-lg text-[#2C4B68] max-w-3xl leading-relaxed">
          Specialized pediatric psychology, assessment, and school advocacy with Dr. Catherine McNulty, PhD · Greenwich, CT &amp; Tri-State Area
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="#consultation"
            className="px-7 py-3.5 text-sm font-semibold rounded-xl bg-[#1B2A4A] text-white hover:bg-[#253961] shadow-sm transition-all"
          >
            Schedule an Introductory Call
          </a>
        </div>

        {/* 16:10 Hero Image Frame */}
        <div className="mt-8 w-full aspect-[16/10] rounded-2xl overflow-hidden border border-[#E8EEF3] shadow-md relative bg-[#F8FAFB]">
          <img
            src="/assets/connecticut_woodland_hero.jpg"
            alt="Connecticut woodland morning trail with gentle sunlight"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/80 text-xs text-[#1B2A4A] font-medium">
            Dr. Catherine McNulty, PhD · CAM Child &amp; Family Psychology · Greenwich, CT
          </div>
        </div>
      </section>
    </div>
  );
}
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white border border-[#E8EEF3] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-[#1B2A4A]">
        <div className="px-6 py-4 border-b border-[#E8EEF3] bg-[#F8FAFB] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 size={18} className="text-[#C59B27]" />
            <h3 className="text-base font-bold text-[#1B2A4A] font-display">
              Production React Component ({validFunctionName})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#627D98] hover:text-[#1B2A4A] hover:bg-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto bg-white">
          <div className="flex items-center justify-between mb-3 text-xs text-[#627D98]">
            <span>Framework: React 19 + Tailwind CSS</span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1B2A4A] hover:bg-[#253961] text-white font-medium transition-colors"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-[#8FA590]" />
                  <span className="text-white">Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>

          <pre className="p-4 rounded-xl bg-[#F8FAFB] border border-[#E8EEF3] font-mono text-xs text-[#1B2A4A] overflow-x-auto leading-relaxed shadow-2xs">
            <code>{codeSnippet}</code>
          </pre>
        </div>

        <div className="px-6 py-3 border-t border-[#E8EEF3] bg-[#F8FAFB] flex items-center justify-between text-xs">
          <span className="text-[#627D98]">Crisp white clinical aesthetic · Dr. Catherine McNulty, PhD · Greenwich, CT</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#1B2A4A] hover:bg-[#253961] text-white font-medium rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
