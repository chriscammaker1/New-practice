import React from 'react';
import { Route, Award, Map, CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake, Layers, User } from 'lucide-react';
import { ThemeMode, PageMode } from '../types.ts';

interface ApproachSectionProps {
  theme: ThemeMode;
  onRequestConsultation: () => void;
  onNavigatePage: (page: PageMode) => void;
}

export const ApproachSection: React.FC<ApproachSectionProps> = ({
  theme,
  onRequestConsultation,
  onNavigatePage,
}) => {
  const coreValues = [
    {
      id: 'connected',
      num: '01',
      title: 'Connected Care',
      tagline: 'Connecting evaluation, therapy, and classroom solutions',
      icon: Route,
      badgeText: null,
      description:
        'A seamless partnership that connects the dots across your child’s emotional, cognitive, and educational life. From initial assessment through direct school meetings and classroom implementation, Dr. McNulty provides dedicated follow-through every step of the way.',
      bulletPoints: [
        'Connecting diagnostic testing directly to classroom accommodations',
        'Direct collaboration with teachers, counselors, and advisors',
        'Active advocacy in 504 plan and IEP school accommodation meetings',
      ],
    },
    {
      id: 'experience',
      num: '02',
      title: 'Unmatched Provider Expertise',
      tagline: '20+ years in clinical and school psychology',
      icon: Award,
      badgeText: '20+ YEARS SUPPORTING FAMILIES',
      description:
        'A rare depth of expertise bridging clinical child psychology, neuropsychology, and school district administration. With 20+ years in clinical and school psychology—including nearly two decades directing special education in Westchester, NY—Dr. McNulty understands every angle of your child’s world.',
      bulletPoints: [
        'Doctorate in Clinical Psychology (PhD) with pediatric specialization',
        'Former public school District Director of Special Services (Westchester, NY)',
        'Comprehensive mastery across diagnostic testing, therapy, and school accommodation law',
      ],
    },
    {
      id: 'roadmap',
      num: '03',
      title: 'A Clear Roadmap',
      tagline: 'Clear answers, practical guidance, and real-world school solutions',
      icon: Map,
      badgeText: null,
      description:
        'Built on developmental science and clinical child psychology, translated into a step-by-step roadmap for your family. Every evaluation and session is paired with clear, jargon-free guidance that empowers parents, teachers, and children to take meaningful steps forward.',
      bulletPoints: [
        'A transparent roadmap paired with clear diagnostic answers',
        'Practical classroom accommodations schools readily adopt',
        'Concrete home routines that foster resilience and self-advocacy',
      ],
    },
  ];

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
      id="approach"
      className={`py-14 sm:py-20 border-t transition-colors ${
        theme === 'dark'
          ? 'bg-neutral-950 border-neutral-800 text-white'
          : 'bg-[#F8FAFB] border-[#E8EEF3] text-[#1B2A4A]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-neutral-900 border border-[#8FA590]/40 text-xs font-bold uppercase tracking-wider text-[#1B2A4A] dark:text-sky-200 font-sans mb-3 shadow-2xs">
            <ShieldCheck size={14} className="text-[#C59B27]" />
            <span>Our Core Values &amp; Philosophy</span>
          </div>

          <h2
            className={`text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.16] font-display mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-[#1B2A4A]'
            }`}
            style={{ textWrap: 'balance' }}
          >
            One dedicated psychologist from evaluation to the classroom.
          </h2>

          <p
            className={`text-sm sm:text-base lg:text-lg leading-relaxed font-sans ${
              theme === 'dark' ? 'text-neutral-400' : 'text-[#486581]'
            }`}
          >
            Finding the right clinical support can feel overwhelming. In our specialized solo practice, your family receives an integrated partnership guided by three core values—uniting doctorate-level clinical rigor with district-level educational leadership.
          </p>
        </div>

        {/* The Three Core Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16 items-stretch">
          {coreValues.map((val) => {
            const Icon = val.icon;
            const isFeatured = val.id === 'experience';
            return (
              <div
                key={val.id}
                className={`flex flex-col justify-between p-6 sm:p-7 rounded-2xl border transition-all duration-300 relative ${
                  isFeatured
                    ? theme === 'dark'
                      ? 'bg-neutral-900 border-[#8FA590] ring-1 ring-[#8FA590]/40 shadow-sm'
                      : 'bg-white border-[#8FA590] ring-1 ring-[#8FA590]/40 shadow-md'
                    : theme === 'dark'
                      ? 'bg-neutral-900/60 border-neutral-800'
                      : 'bg-white border-[#E8EEF3] shadow-xs hover:border-[#8FA590]/60'
                }`}
              >
                {val.badgeText && (
                  <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[#1B2A4A] text-white text-[10px] font-sans font-bold tracking-wider uppercase shadow-xs">
                    {val.badgeText}
                  </span>
                )}

                <div className="flex flex-col flex-1">
                  {/* Top card header: Number badge and Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-semibold text-[#8FA590] dark:text-sky-300 tracking-wider">
                      {val.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#F8FAFB] dark:bg-neutral-800 border border-[#E8EEF3] dark:border-neutral-700 flex items-center justify-center text-[#1B2A4A] dark:text-sky-200 shadow-2xs">
                      <Icon size={20} className="text-[#C59B27]" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-medium font-editorial text-[#1B2A4A] dark:text-white tracking-tight mb-1.5">
                    {val.title}
                  </h3>

                  <div className="text-xs font-semibold text-[#627D98] dark:text-sky-300/90 font-sans mb-4">
                    {val.tagline}
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed text-[#486581] dark:text-neutral-300 mb-6">
                    {val.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[#E8EEF3] dark:border-neutral-800 flex-1">
                    {val.bulletPoints.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#2C4B68] dark:text-neutral-300 font-sans">
                        <CheckCircle2 size={14} className="text-[#7A9A8B] shrink-0 mt-0.5" />
                        <span className="leading-snug">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8EEF3]/70 dark:border-neutral-800/80 flex items-center justify-between text-[11px] font-sans text-[#627D98] dark:text-neutral-400">
                  <span>Core Value</span>
                  <span className="text-[#8FA590]">●</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why One Provider: 4 Key Differentiators Grid */}
        <div className="mb-12 sm:mb-16">
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-[#1B2A4A] dark:text-white">
              The Solo Practice Difference
            </h3>
            <p className="text-xs sm:text-sm text-[#486581] dark:text-neutral-400 mt-1">
              How our intentional structure avoids the fragmentation common to large hospital networks and group practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {differentiators.map((diff, idx) => (
              <div
                key={idx}
                className={`p-5 sm:p-6 rounded-2xl border transition-all ${
                  theme === 'dark'
                    ? 'bg-neutral-900/60 border-neutral-800'
                    : 'bg-white border-[#E8EEF3] shadow-2xs hover:border-[#8FA590]/70'
                }`}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#7A9A8B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#1B2A4A] dark:text-white font-display mb-1">
                      {diff.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#486581] dark:text-neutral-300 leading-relaxed font-sans">
                      {diff.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Header Pages Quick Navigator Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-[#8FA590]/40 shadow-xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C59B27] font-sans">
              <ShieldCheck size={14} />
              <span>Explore Dedicated Practice Pages</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-[#1B2A4A] dark:text-white font-display">
              Detailed services, clinical credentials, and answers to common questions.
            </h4>
            <p className="text-xs sm:text-sm text-[#486581] dark:text-neutral-300 max-w-xl font-sans">
              Review full details about evaluations, psychotherapy, 504/IEP advocacy, or Dr. McNulty’s leadership history on their dedicated pages.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onNavigatePage('services')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E8EEF3] dark:border-neutral-700 bg-[#F8FAFB] dark:bg-neutral-800 hover:bg-[#EBF3F9] text-[#1B2A4A] dark:text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              <Layers size={14} className="text-[#7A9A8B]" />
              <span>View Services Page</span>
              <ArrowRight size={13} className="opacity-60" />
            </button>

            <button
              type="button"
              onClick={() => onNavigatePage('about')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E8EEF3] dark:border-neutral-700 bg-[#F8FAFB] dark:bg-neutral-800 hover:bg-[#EBF3F9] text-[#1B2A4A] dark:text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              <User size={14} className="text-[#334E68]" />
              <span>About Dr. McNulty</span>
              <ArrowRight size={13} className="opacity-60" />
            </button>

            <button
              type="button"
              onClick={onRequestConsultation}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1B2A4A] hover:bg-[#253961] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <span>Schedule Call</span>
              <ArrowRight size={13} className="text-[#C59B27]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
