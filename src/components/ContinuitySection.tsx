import React from 'react';
import { ShieldCheck, UserCheck, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ThemeMode } from '../types.ts';

interface ContinuitySectionProps {
  theme: ThemeMode;
  onRequestConsultation: () => void;
}

export const ContinuitySection: React.FC<ContinuitySectionProps> = ({
  theme,
  onRequestConsultation,
}) => {
  const differentiators = [
    {
      title: 'Direct Clinician Access from Day One',
      description:
        'Instead of administrative intake gatekeepers or rotating triage staff, every initial inquiry, testing session, and parent consult is conducted directly with Dr. Catherine McNulty, PhD.',
    },
    {
      title: 'Immediate Diagnostic Translation',
      description:
        'Testing data never gets lost in institutional handoffs. Insights from cognitive and psychoeducational evaluations directly shape weekly therapy and self-regulation protocols without delay.',
    },
    {
      title: 'Clinical Presence at the School Table',
      description:
        'Rather than handing parents a dense testing report to defend alone, Dr. McNulty attends PPT and 504 meetings alongside you, leveraging her background as a former District Director of Special Services.',
    },
    {
      title: 'Longitudinal Therapeutic Trust',
      description:
        'Your child never has to rebuild rapport or retell difficult stories to new providers. One consistent clinician understands their nuances, celebrates their growth, and supports them over time.',
    },
  ];

  return (
    <section
      id="continuity"
      className="relative py-14 sm:py-20 bg-white dark:bg-neutral-950 border-t border-[#E8EEF3] dark:border-neutral-800 transition-colors"
    >
      <div id="approach" className="absolute -top-20" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="w-fit inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFB] dark:bg-neutral-900 border border-[#8FA590]/40 text-xs font-bold uppercase tracking-wider text-[#1B2A4A] dark:text-sky-200 font-sans mb-3 shadow-2xs">
            <UserCheck size={14} className="text-[#C59B27]" />
            <span>Our Approach · The Integrated Model</span>
          </div>
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.18] font-display mb-3 ${
              theme === 'dark' ? 'text-white' : 'text-[#1B2A4A]'
            }`}
          >
            How our practice differs: one provider from evaluation to the school table.
          </h2>
          <p
            className={`text-xs sm:text-sm lg:text-base leading-relaxed font-sans ${
              theme === 'dark' ? 'text-neutral-400' : 'text-[#486581]'
            }`}
          >
            Institutional care often fragments a child’s journey across multiple evaluators, therapists, and outside advocates. CAM is built intentionally around clinical continuity, ensuring your child is deeply known at every step.
          </p>
        </div>

        {/* 4 Core Differentiators in 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-10">
          {differentiators.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl border transition-all ${
                theme === 'dark'
                  ? 'bg-neutral-900/60 border-neutral-800'
                  : 'bg-[#F8FAFB] border-[#E8EEF3] shadow-2xs hover:border-[#8FA590]/70'
              }`}
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#7A9A8B] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#1B2A4A] dark:text-white font-display mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#486581] dark:text-neutral-300 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Calm Reassurance Banner */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFB] dark:bg-neutral-900 border border-[#8FA590]/40 dark:border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-0.5">
            <h4 className="text-sm sm:text-base font-bold text-[#1B2A4A] dark:text-white font-display">
              A personal practice. A collaborative partnership.
            </h4>
            <p className="text-xs text-[#627D98] dark:text-neutral-400 font-sans">
              Serving Greenwich, CT, Fairfield County, and Westchester County, NY families.
            </p>
          </div>
          <button
            type="button"
            onClick={onRequestConsultation}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1B2A4A] hover:bg-[#253961] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer shrink-0"
          >
            <Calendar size={14} className="text-[#C59B27]" />
            <span>Schedule an Introductory Call</span>
            <ArrowRight size={13} className="opacity-70" />
          </button>
        </div>
      </div>
    </section>
  );
};
