import React from 'react';
import { School, Brain, HeartHandshake, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ThemeMode } from '../types.ts';

interface HolisticExperienceSectionProps {
  theme: ThemeMode;
  onRequestConsultation: (topic: string) => void;
}

export const HolisticExperienceSection: React.FC<HolisticExperienceSectionProps> = ({
  theme,
  onRequestConsultation,
}) => {
  const integratedPillars = [
    {
      icon: School,
      title: 'In the Schools',
      subtitle: 'Former Special Ed District Director',
      desc: 'Extensive executive leadership directing special services in Westchester County (Katonah-Lewisboro), managing 75+ professionals and authoring IEPs—giving families unparalleled insider expertise in school advocacy.',
    },
    {
      icon: HeartHandshake,
      title: 'In Clinical Therapy',
      subtitle: 'Anxiety, OCD & Tic Disorders',
      desc: 'Practiced at a leading private psychology practice in Greenwich before founding CAM Child and Family Psych. Specialized in evidence-based care for children and teens navigating anxiety, OCD, and tic disorders.',
    },
    {
      icon: Brain,
      title: 'In Testing & Assessment',
      subtitle: 'Psychoeducational Evaluations',
      desc: 'In-depth diagnostic evaluations that pinpoint cognitive processing, learning differences, and ADHD, translating clinical findings into actionable 504 and IEP accommodations.',
    },
  ];

  return (
    <section id="holistic" className="py-12 sm:py-20 border-t border-[#E2ECF3] bg-[#F7FAFD] dark:bg-neutral-950/40 dark:border-neutral-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Streamlined Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-md bg-[#E8F2F8] border border-[#BCD6E8] text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#1B365D] mb-3 font-mono">
            Integrated Practice Advantage
          </div>
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight font-display mb-3 ${
              theme === 'dark' ? 'text-white' : 'text-[#102A43]'
            }`}
          >
            Schools, Therapy & Testing — Connected in One Practice.
          </h2>
          <p
            className={`text-xs sm:text-base leading-relaxed ${
              theme === 'dark' ? 'text-stone-300' : 'text-[#486581]'
            }`}
          >
            Families are often forced to juggle three separate specialists who never speak to one another. Dr. McNulty integrates clinical psychotherapy, school advocacy, and diagnostic testing into one cohesive, deeply personal partnership.
          </p>
        </div>

        {/* 3 Unified Discipline Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {integratedPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`p-5 sm:p-6 rounded-xl border transition-all ${
                  theme === 'dark'
                    ? 'bg-neutral-900 border-neutral-800'
                    : 'bg-white border-[#D5E5F2] shadow-2xs hover:border-[#BCD6E8]'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#F0F6FA] dark:bg-neutral-800 border border-[#D5E5F2] dark:border-neutral-700 flex items-center justify-center text-[#1B365D] dark:text-sky-300 shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold font-display text-[#102A43] dark:text-white leading-tight">
                      {pillar.title}
                    </h3>
                    <div className="text-[11px] font-mono text-[#587B9C] dark:text-sky-300">
                      {pillar.subtitle}
                    </div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#486581] dark:text-stone-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Concise Single-Action Banner */}
        <div
          className={`p-5 sm:p-6 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
            theme === 'dark'
              ? 'bg-neutral-900/80 border-neutral-800 text-stone-200'
              : 'bg-white border-[#D5E5F2] text-[#102A43]'
          }`}
        >
          <div className="flex items-start gap-2.5">
            <CheckCircle2 size={16} className="text-[#1B365D] dark:text-sky-300 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#244F75] dark:text-stone-300">
              <span className="font-semibold text-[#102A43] dark:text-white">Ready to take the next step? </span>
              Dr. McNulty works directly with parents to evaluate your child’s history and establish a clear, tailored path forward.
            </div>
          </div>

          <button
            onClick={() => onRequestConsultation('Practice Consultation')}
            className={`w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              theme === 'dark'
                ? 'bg-sky-600 hover:bg-sky-500 text-white'
                : 'bg-[#102A43] hover:bg-[#1B365D] text-white shadow-xs'
            }`}
          >
            <span>Take the Next Step</span>
            <ArrowRight size={13} />
          </button>
        </div>

      </div>
    </section>
  );
};
