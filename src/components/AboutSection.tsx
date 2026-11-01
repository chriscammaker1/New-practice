import React from 'react';
import { GraduationCap, ShieldCheck, Award, HeartHandshake, MapPin, ChevronRight } from 'lucide-react';
import { ThemeMode } from '../types.ts';

interface AboutSectionProps {
  theme: ThemeMode;
  onRequestConsultation: () => void;
  onViewFullBio?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  theme,
  onViewFullBio,
}) => {
  return (
    <section
      id="about"
      className="py-14 sm:py-20 border-t border-[#E8EEF3] bg-[#F8FAFB] dark:bg-neutral-900 dark:border-neutral-800 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Practice Profile Monogram & Distinctions */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="w-full max-w-[280px] sm:max-w-sm rounded-2xl overflow-hidden shadow-xs border border-[#E8EEF3] dark:border-neutral-800 bg-white dark:bg-neutral-950">
              {/* Monogram Crest block */}
              <div className="p-6 sm:p-7 flex flex-col items-center justify-center text-center bg-[#F1F5F8] dark:bg-neutral-900 border-b border-[#E8EEF3] dark:border-neutral-800">
                <div className="w-20 h-20 rounded-full bg-[#1B2A4A] dark:bg-neutral-800 text-white flex items-center justify-center shadow-sm ring-4 ring-[#8FA590]/20 mb-3">
                  <span className="font-display font-bold text-2xl tracking-tight text-white">
                    CM
                  </span>
                </div>
                <h3 className="font-bold text-base sm:text-lg text-[#1B2A4A] dark:text-white font-display">
                  Dr. Catherine McNulty, PhD
                </h3>
                <p className="text-xs text-[#7A9A8B] font-sans font-medium mt-0.5">
                  Licensed Clinical Psychologist
                </p>
                <div className="text-[11px] text-[#627D98] dark:text-stone-400 mt-1">
                  Connecticut &amp; New York · Tri-State Area
                </div>
              </div>

              {/* Location & Practice Details */}
              <div className="p-4 space-y-2 text-xs font-sans">
                <div className="flex items-center gap-1.5 text-xs text-[#2C4B68] dark:text-stone-300">
                  <MapPin size={13} className="shrink-0 text-[#C59B27]" />
                  <span>Greenwich, CT Office &amp; Telehealth</span>
                </div>
                <div className="text-[11px] text-[#627D98] dark:text-stone-400 pt-2 border-t border-[#E8EEF3] dark:border-neutral-800 leading-relaxed">
                  Specialized private pediatric psychology, psychoeducational evaluations, and educational advocacy.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Credential Cards */}
          <div className="lg:col-span-8 space-y-5">
            <div className="w-fit inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-neutral-800 border border-[#8FA590]/40 text-xs font-bold uppercase tracking-wider text-[#1B2A4A] dark:text-sky-200 font-sans shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#C59B27]" />
              About Dr. McNulty
            </div>

            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight font-display leading-[1.2] ${
                theme === 'dark' ? 'text-white' : 'text-[#1B2A4A]'
              }`}
            >
              Over two decades of clinical child psychology and school district leadership.
            </h2>

            <div className="space-y-3.5 text-xs sm:text-sm lg:text-base leading-relaxed text-[#486581] dark:text-neutral-300 font-sans">
              <p>
                Dr. Catherine McNulty brings over two decades of dedicated experience to pediatric and adolescent psychology. She specializes in evaluating and treating young people with <strong>anxiety disorders, obsessive-compulsive disorder (OCD), and tic disorders</strong>, as well as conducting comprehensive psychoeducational assessments and formulating individualized education plans (IEPs).
              </p>
              <p>
                Prior to founding CAM Child &amp; Family Psychology, Dr. McNulty practiced at a leading private psychology practice in Greenwich and served as an executive educational leader in Westchester County, NY as <strong>Special Education Supervisor and Director of Special Services</strong>. In that role, she oversaw district therapeutic programming and led a multidisciplinary team supporting students with disabilities.
              </p>
              <p>
                Her dual background as a clinical psychologist, certified school psychologist, and <strong>mother of three school-aged children</strong> gives her an unparalleled insider understanding of school systems. She knows precisely how PPT and 504 committees evaluate accommodations, bridge clinical insight into classroom routines, and partner compassionately with parents.
              </p>
            </div>

            {/* Credential Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-sans">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white dark:bg-neutral-950 border border-[#E8EEF3] dark:border-neutral-800 shadow-2xs">
                <GraduationCap size={16} className="text-[#1B2A4A] dark:text-sky-300 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#1B2A4A] dark:text-white">Doctorate in Clinical Psychology (PhD)</div>
                  <div className="text-[#627D98] text-[11px]">Child &amp; Adolescent Specialization</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white dark:bg-neutral-950 border border-[#E8EEF3] dark:border-neutral-800 shadow-2xs">
                <Award size={16} className="text-[#C59B27] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#1B2A4A] dark:text-white">Former Westchester Special Ed Director</div>
                  <div className="text-[#627D98] text-[11px]">Executive school district special services leadership</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white dark:bg-neutral-950 border border-[#E8EEF3] dark:border-neutral-800 shadow-2xs">
                <ShieldCheck size={16} className="text-[#7A9A8B] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#1B2A4A] dark:text-white">Licensed in CT &amp; NY</div>
                  <div className="text-[#627D98] text-[11px]">Greenwich office &amp; Tri-State telehealth</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white dark:bg-neutral-950 border border-[#E8EEF3] dark:border-neutral-800 shadow-2xs">
                <HeartHandshake size={16} className="text-[#1B2A4A] dark:text-sky-300 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#1B2A4A] dark:text-white">Mother of Three &amp; School Psychologist</div>
                  <div className="text-[#627D98] text-[11px]">Lived understanding of family and academic realities</div>
                </div>
              </div>
            </div>

            {onViewFullBio && (
              <div className="pt-1">
                <button
                  type="button"
                  onClick={onViewFullBio}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B2A4A] hover:text-[#253961] dark:text-sky-300 transition-colors cursor-pointer"
                >
                  <span>Read Full Biography &amp; District Leadership Background</span>
                  <ChevronRight size={14} className="text-[#C59B27]" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
