import React from 'react';
import { Brain, Heart, GraduationCap, ArrowRight, ShieldCheck } from 'lucide-react';
import { ThemeMode } from '../types.ts';

interface ThreePillarsSectionProps {
  theme: ThemeMode;
  onSelectPillar: (pillarTitle: string) => void;
}

export const ThreePillarsSection: React.FC<ThreePillarsSectionProps> = ({
  theme,
  onSelectPillar,
}) => {
  const pillars = [
    {
      step: '01',
      title: 'Comprehensive Assessment',
      subtitle: 'Diagnostic Testing & Cognitive Profiling',
      icon: Brain,
      iconColor: 'text-[#C59B27]',
      bgAccent: 'bg-[#FAF3E0] dark:bg-amber-950/30',
      description:
        'Thorough neuropsychological and psychoeducational evaluations to understand executive functioning, attention, learning differences, and anxiety.',
      differentiatedApproach:
        'Administered and interpreted entirely 1-on-1 by Dr. McNulty—no psychometrist handoffs or generic templates.',
      cta: 'Assessment Inquiries',
    },
    {
      step: '02',
      title: 'Individualized Therapy',
      subtitle: 'Pediatric CBT, ERP & Regulation',
      icon: Heart,
      iconColor: 'text-[#7A9A8B]',
      bgAccent: 'bg-[#EEF4F0] dark:bg-emerald-950/30',
      description:
        'Targeted, compassionate psychotherapy for child and adolescent OCD, anxiety disorders, and tics, combined with actionable parent coaching.',
      differentiatedApproach:
        'Rooted in developmental science and clinical warmth, equipping children with lifelong self-regulation and resilience.',
      cta: 'Therapy Inquiries',
    },
    {
      step: '03',
      title: 'School Advocacy',
      subtitle: '504 Plans, IEPs & District Collaboration',
      icon: GraduationCap,
      iconColor: 'text-[#1B2A4A] dark:text-sky-300',
      bgAccent: 'bg-[#E8F0F7] dark:bg-sky-950/30',
      description:
        'Translating clinical findings into legally enforceable classroom accommodations across Greenwich and Westchester public and independent schools.',
      differentiatedApproach:
        'Backed by Dr. McNulty’s direct experience as a former public school District Director of Special Services.',
      cta: 'Advocacy Inquiries',
    },
  ];

  return (
    <section
      id="services"
      className="py-14 sm:py-20 bg-[#F8FAFB] dark:bg-neutral-900 border-t border-[#E8EEF3] dark:border-neutral-800 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="w-fit inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-neutral-800 border border-[#8FA590]/40 text-xs font-bold uppercase tracking-wider text-[#1B2A4A] dark:text-sky-200 font-sans mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#C59B27]" />
            Three Pillars of Care
          </div>
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.18] font-display mb-3 ${
              theme === 'dark' ? 'text-white' : 'text-[#1B2A4A]'
            }`}
          >
            Integrated clinical care across every stage of development.
          </h2>
          <p
            className={`text-xs sm:text-sm lg:text-base leading-relaxed font-sans ${
              theme === 'dark' ? 'text-neutral-400' : 'text-[#486581]'
            }`}
          >
            Rather than splitting your child’s needs across disconnected practices, Dr. McNulty provides an unbroken continuum from diagnostic clarity to classroom advocacy.
          </p>
        </div>

        {/* 3-Column Clean Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.step}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 border shadow-xs hover:shadow-md ${
                  theme === 'dark'
                    ? 'bg-neutral-950 border-neutral-800'
                    : 'bg-white border-[#E8EEF3] hover:border-[#8FA590]/70'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#C59B27] font-sans">
                      Pillar {pillar.step}
                    </span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${pillar.bgAccent}`}>
                      <Icon size={20} className={pillar.iconColor} />
                    </div>
                  </div>

                  <h3
                    className={`text-lg sm:text-xl font-bold font-display tracking-tight mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-[#1B2A4A]'
                    }`}
                  >
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-medium text-[#7A9A8B] mb-3">
                    {pillar.subtitle}
                  </div>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-5 font-sans ${
                      theme === 'dark' ? 'text-neutral-400' : 'text-[#486581]'
                    }`}
                  >
                    {pillar.description}
                  </p>
                </div>

                {/* CAM Differentiated Approach block */}
                <div className="pt-4 border-t border-[#E8EEF3] dark:border-neutral-800/80 mt-auto space-y-3">
                  <div className="p-3 rounded-xl bg-[#F8FAFB] dark:bg-neutral-900 border border-[#E8EEF3] dark:border-neutral-800 text-xs">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#1B2A4A] dark:text-sky-200 mb-1 flex items-center gap-1.5">
                      <ShieldCheck size={12} className="text-[#8FA590]" />
                      <span>CAM Differentiated Approach</span>
                    </div>
                    <p className="text-[#486581] dark:text-neutral-300 text-[11px] leading-relaxed">
                      {pillar.differentiatedApproach}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectPillar(pillar.title)}
                    className="w-full inline-flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#1B2A4A] hover:bg-[#253961] text-white transition-colors cursor-pointer group"
                  >
                    <span>{pillar.cta}</span>
                    <ArrowRight size={13} className="text-[#C59B27] group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
