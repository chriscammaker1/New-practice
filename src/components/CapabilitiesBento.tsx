import React, { useState } from 'react';
import { Brain, Heart, Sparkles, BookOpen, ShieldCheck, CheckCircle2, User } from 'lucide-react';
import { FrameConfig, ThemeMode } from '../types.ts';
import { THERAPY_SPACE, HERO_OFFICE } from '../data/presets.ts';

interface CapabilitiesBentoProps {
  config: FrameConfig;
  theme: ThemeMode;
  onSelectProject: (id: string) => void;
}

export const CapabilitiesBento: React.FC<CapabilitiesBentoProps> = ({
  config,
  theme,
  onSelectProject,
}) => {
  // Interactive state for Anxiety tool demo
  const [activeIntervention, setActiveIntervention] = useState<'grounding' | 'defusion' | 'nervous_system'>('grounding');

  const interventions = {
    grounding: {
      title: '5-4-3-2-1 Sensory Orienting',
      detail: 'Re-anchors high acute amygdala reactivity to immediate room presence through tactile and visual environmental cues.',
      cadence: 'Used during panic onsets & intrusive freeze states',
    },
    defusion: {
      title: 'Cognitive Defusion (ACT)',
      detail: 'Transforms sticky, catastrophizing thoughts ("I am failing") into observed mental events ("I notice I am having the thought that...").',
      cadence: 'Daily journal practice and in-session reframing',
    },
    nervous_system: {
      title: 'Physiological Sigh & Vagal Tone',
      detail: 'Two brief nasal inhalations followed by an extended sighing exhalation, instantly triggering parasympathetic heart-rate deceleration.',
      cadence: 'Sub-60-second biological reset for physiological agitation',
    },
  };

  return (
    <section id="specialties" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header with Natural Editorial Numbering */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-semibold tracking-wide uppercase text-stone-500 mb-2">
              Clinical Specializations & Focus Areas
            </div>
            <h2
              className={`text-3xl sm:text-4xl font-bold tracking-tight font-display ${
                theme === 'dark' ? 'text-white' : 'text-stone-900'
              }`}
            >
              Integrative, Evidence-Based Psychotherapy
            </h2>
          </div>
          <p
            className={`text-sm sm:text-base max-w-md ${
              theme === 'dark' ? 'text-neutral-400' : 'text-stone-600'
            }`}
          >
            Therapy tailored to high-functioning adults navigating internal overwhelm, career demands, grief, and relational patterns.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Anxiety & Nervous System (col-span-2) */}
          <div
            className={`lg:col-span-2 rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
              theme === 'dark'
                ? 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700'
                : 'bg-white border-stone-200 hover:border-stone-300'
            }`}
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">01. Primary Specialty</span>
                <div className="flex items-center gap-2">
                  <span>CBT & ACT Protocols</span>
                  <span aria-hidden="true">·</span>
                  <span>Adult Care</span>
                </div>
              </div>
              <h3
                className={`text-2xl font-bold font-display ${
                  theme === 'dark' ? 'text-white' : 'text-stone-900'
                }`}
              >
                Anxiety, Panic & Nervous System Dysregulation
              </h3>
              <p
                className={`text-sm mt-2 max-w-xl leading-relaxed ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-stone-600'
                }`}
              >
                Chronic anxiety often feels like an relentless background alarm. We work collaboratively to understand your body’s nervous system triggers, dismantle avoidance cycles, and build resilient emotional flexibility.
              </p>

              {/* Interactive Tool Switcher */}
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="text-xs text-stone-500">Therapeutic Tool:</span>
                <div className="flex items-center p-0.5 bg-neutral-950/40 rounded-lg border border-neutral-800">
                  <button
                    onClick={() => setActiveIntervention('grounding')}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                      activeIntervention === 'grounding'
                        ? 'bg-emerald-700 text-white shadow-xs'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Sensory Grounding
                  </button>
                  <button
                    onClick={() => setActiveIntervention('defusion')}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                      activeIntervention === 'defusion'
                        ? 'bg-emerald-700 text-white shadow-xs'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Defusion (ACT)
                  </button>
                  <button
                    onClick={() => setActiveIntervention('nervous_system')}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                      activeIntervention === 'nervous_system'
                        ? 'bg-emerald-700 text-white shadow-xs'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Vagal Reset
                  </button>
                </div>
              </div>

              {/* Dynamic Tool Card Detail */}
              <div className="mt-4 p-4 rounded-xl bg-stone-100/80 dark:bg-neutral-950/60 border border-stone-200 dark:border-neutral-800 text-xs">
                <div className="font-semibold text-stone-900 dark:text-emerald-400 text-sm">
                  {interventions[activeIntervention].title}
                </div>
                <div className="mt-1 text-stone-600 dark:text-neutral-300 leading-relaxed">
                  {interventions[activeIntervention].detail}
                </div>
                <div className="mt-2 text-stone-400 dark:text-neutral-500 font-mono text-[11px]">
                  Clinical Application: {interventions[activeIntervention].cadence}
                </div>
              </div>
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-950">
              <img
                src={HERO_OFFICE}
                alt="Psychologist therapy session space"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Card 2: Meet Dr. Catherine McNulty, PhD (col-span-1) */}
          <div
            id="about"
            className={`rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
              theme === 'dark'
                ? 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700'
                : 'bg-white border-stone-200 hover:border-stone-300'
            }`}
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">02. Psychologist</span>
                <span>Credentials</span>
              </div>
              <h3
                className={`text-xl font-bold font-display ${
                  theme === 'dark' ? 'text-white' : 'text-stone-900'
                }`}
              >
                Dr. Catherine McNulty, PhD
              </h3>
              <p
                className={`text-xs mt-2 leading-relaxed ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-stone-600'
                }`}
              >
                Licensed Clinical Psychologist and former Director of Special Services with 20+ years of pediatric clinical experience and school advocacy.
              </p>

              {/* Credentials Checklist */}
              <div className="mt-4 space-y-2 text-xs">
                <div className="flex items-start gap-2 text-stone-700 dark:text-neutral-300">
                  <CheckCircle2 size={13} className="text-emerald-500 mt-0.5 shrink-0" />
                  <span><strong>Ph.D. in Clinical Psychology</strong> — Child &amp; Adolescent Focus</span>
                </div>
                <div className="flex items-start gap-2 text-stone-700 dark:text-neutral-300">
                  <CheckCircle2 size={13} className="text-emerald-500 mt-0.5 shrink-0" />
                  <span><strong>Licensed in CT &amp; NY</strong> — Greenwich &amp; Tri-State Area</span>
                </div>
                <div className="flex items-start gap-2 text-stone-700 dark:text-neutral-300">
                  <CheckCircle2 size={13} className="text-emerald-500 mt-0.5 shrink-0" />
                  <span><strong>Former Director of Special Services</strong> — Westchester, NY</span>
                </div>
                <div className="flex items-start gap-2 text-stone-700 dark:text-neutral-300">
                  <CheckCircle2 size={13} className="text-emerald-500 mt-0.5 shrink-0" />
                  <span><strong>Member</strong> — American Psychological Association (APA)</span>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950">
              <img
                src={HERO_OFFICE}
                alt="Therapeutic consulting environment"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Card 3: Therapeutic Environment & Sanctuary (col-span-1) */}
          <div
            className={`rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
              theme === 'dark'
                ? 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700'
                : 'bg-white border-stone-200 hover:border-stone-300'
            }`}
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">03. The Setting</span>
                <span>Calm & Confidential</span>
              </div>
              <h3
                className={`text-xl font-bold font-display ${
                  theme === 'dark' ? 'text-white' : 'text-stone-900'
                }`}
              >
                A Sanctuary for Real Conversation
              </h3>
              <p
                className={`text-xs mt-2 leading-relaxed ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-stone-600'
                }`}
              >
                Thoughtfully designed with natural textures, filtered sunlight, acoustic sound masking, and an unhurried atmosphere.
              </p>

              {/* Office features */}
              <div className="mt-4 pt-3 border-t border-stone-200 dark:border-neutral-800/60 flex items-center justify-between text-xs font-mono text-stone-500 dark:text-neutral-400">
                <span>Sound Isolation 48dB</span>
                <span>·</span>
                <span>Strict HIPAA Privacy</span>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950">
              <img
                src={THERAPY_SPACE}
                alt="Quiet therapy consultation armchair with warm morning light"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Card 4: Burnout & Career Perfectionism (col-span-2) */}
          <div
            className={`lg:col-span-2 rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
              theme === 'dark'
                ? 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700'
                : 'bg-white border-stone-200 hover:border-stone-300'
            }`}
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">04. Professional Well-Being</span>
                <div className="flex items-center gap-2">
                  <span>Founders & Creatives</span>
                  <span aria-hidden="true">·</span>
                  <span>Life Transitions</span>
                </div>
              </div>
              <h3
                className={`text-2xl font-bold font-display ${
                  theme === 'dark' ? 'text-white' : 'text-stone-900'
                }`}
              >
                Burnout, Perfectionism & Identity Shifts
              </h3>
              <p
                className={`text-sm mt-2 max-w-xl leading-relaxed ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-stone-600'
                }`}
              >
                High achievers frequently shoulder severe silent exhaustion. We address the root patterns of imposter syndrome, chronic self-criticism, over-functioning, and values misalignment.
              </p>

              {/* 3 Pillars */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-stone-50 dark:bg-neutral-950/40 border border-stone-200 dark:border-neutral-800/80">
                  <div className="font-semibold text-stone-900 dark:text-white">Uncoupling Self-Worth</div>
                  <div className="text-stone-500 dark:text-neutral-400 text-[11px] mt-0.5">Untangling human worth from productivity outputs</div>
                </div>
                <div className="p-3 rounded-lg bg-stone-50 dark:bg-neutral-950/40 border border-stone-200 dark:border-neutral-800/80">
                  <div className="font-semibold text-stone-900 dark:text-white">Firm Boundary Architecture</div>
                  <div className="text-stone-500 dark:text-neutral-400 text-[11px] mt-0.5">Cultivating guilt-free boundaries with work and family</div>
                </div>
                <div className="p-3 rounded-lg bg-stone-50 dark:bg-neutral-950/40 border border-stone-200 dark:border-neutral-800/80">
                  <div className="font-semibold text-stone-900 dark:text-white">Authentic Values Clarity</div>
                  <div className="text-stone-500 dark:text-neutral-400 text-[11px] mt-0.5">Realigning calendar commitments with personal meaning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
