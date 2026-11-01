import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Clock, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { FrameConfig, ThemeMode } from '../types.ts';

interface CaseStudiesSectionProps {
  config: FrameConfig;
  theme: ThemeMode;
  onInquire: (projectName: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  config,
  theme,
  onInquire,
}) => {
  const [selectedModalityIndex, setSelectedModalityIndex] = useState(0);
  const activeModality = config.caseStudies[selectedModalityIndex] || config.caseStudies[0];

  return (
    <section id="modalities" className="py-20 border-t border-stone-200 dark:border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-semibold tracking-wide uppercase text-stone-500 mb-2">
              Clinical Modalities & Treatment Framework
            </div>
            <h2
              className={`text-3xl sm:text-4xl font-bold tracking-tight font-display ${
                theme === 'dark' ? 'text-white' : 'text-stone-900'
              }`}
            >
              How We Work Together
            </h2>
          </div>
          <p
            className={`text-sm sm:text-base max-w-md ${
              theme === 'dark' ? 'text-neutral-400' : 'text-stone-600'
            }`}
          >
            I integrate scientifically validated therapeutic models with deep emotional resonance to ensure your growth is sustainable and tangible.
          </p>
        </div>

        {/* Interactive Modality Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-stone-200 dark:border-neutral-800/80 mb-8">
          {config.caseStudies.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setSelectedModalityIndex(idx)}
              className={`px-4 py-2.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all ${
                selectedModalityIndex === idx
                  ? theme === 'dark'
                    ? 'bg-neutral-800 text-white shadow-sm border border-neutral-700'
                    : 'bg-stone-900 text-white shadow-sm'
                  : theme === 'dark'
                    ? 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              <span>{item.client}</span>
              <span className="ml-2 font-mono text-[11px] opacity-70">({item.year})</span>
            </button>
          ))}
        </div>

        {/* Modality Spotlight */}
        <div
          className={`rounded-2xl border p-8 lg:p-12 transition-all ${
            theme === 'dark' ? 'bg-neutral-900/40 border-neutral-800' : 'bg-white border-stone-200'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 text-xs text-stone-500 mb-4">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  {activeModality.year}
                </span>
                <span aria-hidden="true">·</span>
                <span>Evidence-Supported Clinical Protocol</span>
              </div>

              <h3
                className={`text-2xl sm:text-3xl font-bold font-display tracking-tight ${
                  theme === 'dark' ? 'text-white' : 'text-stone-900'
                }`}
              >
                {activeModality.client}
              </h3>

              {/* Clinical outcome highlight */}
              <div
                className={`mt-4 p-4 rounded-xl border text-sm font-medium ${
                  theme === 'dark'
                    ? 'bg-neutral-950 border-neutral-800 text-emerald-400'
                    : 'bg-emerald-50 border-emerald-200 text-emerald-950'
                }`}
              >
                <div className="font-mono text-xs uppercase tracking-wider text-stone-500 mb-1">
                  Primary Therapeutic Mechanism
                </div>
                {activeModality.impact}
              </div>

              <p
                className={`mt-6 text-base leading-relaxed ${
                  theme === 'dark' ? 'text-neutral-300' : 'text-stone-700'
                }`}
              >
                {activeModality.description}
              </p>

              {/* Concrete deliverables */}
              <div className="mt-8 pt-6 border-t border-stone-200 dark:border-neutral-800/80">
                <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-3">
                  Core In-Session Exercises
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeModality.deliverables.map((d, index) => (
                    <span
                      key={index}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border ${
                        theme === 'dark'
                          ? 'bg-neutral-950 border-neutral-800 text-neutral-300'
                          : 'bg-stone-50 border-stone-200 text-stone-800'
                      }`}
                    >
                      <CheckCircle2 size={12} className="text-emerald-600 dark:text-emerald-400" />
                      <span>{d}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Treatment Cadence Box */}
            <div
              className={`lg:col-span-5 rounded-xl p-6 border flex flex-col justify-between ${
                theme === 'dark' ? 'bg-neutral-950 border-neutral-800' : 'bg-stone-50 border-stone-200'
              }`}
            >
              <div>
                <div className="text-xs font-semibold tracking-wider uppercase text-stone-500 mb-4">
                  Standard Treatment Cadence
                </div>

                <div className="space-y-4 text-xs font-mono">
                  <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-neutral-800/60">
                    <span className="text-stone-500 flex items-center gap-1.5">
                      <Clock size={13} /> Session Duration
                    </span>
                    <span className="text-stone-900 dark:text-white font-medium">45 Minutes Weekly</span>
                  </div>

                  <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-neutral-800/60">
                    <span className="text-stone-500 flex items-center gap-1.5">
                      <ShieldCheck size={13} /> Evaluation Period
                    </span>
                    <span className="text-stone-900 dark:text-white font-medium">Initial 3 Sessions</span>
                  </div>

                  <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-neutral-800/60">
                    <span className="text-stone-500 flex items-center gap-1.5">
                      <Heart size={13} /> Care Delivery
                    </span>
                    <span className="text-stone-900 dark:text-white font-medium">Greenwich Office &amp; Telehealth (CT &amp; NY)</span>
                  </div>

                  <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-neutral-800/60">
                    <span className="text-stone-500">Superbill Reimbursement</span>
                    <span className="text-stone-900 dark:text-white font-medium">Provided Monthly</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  onClick={() => onInquire(activeModality.client)}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-semibold transition-all active:scale-[0.98] ${
                    theme === 'dark'
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                      : 'bg-stone-900 hover:bg-stone-800 text-white'
                  }`}
                >
                  <span>Book Consultation for {activeModality.client}</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
