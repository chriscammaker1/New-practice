import React, { useState, useEffect } from 'react';
import { GoldenSunriseVisual } from './GoldenSunriseVisual.tsx';
import { ThemeMode, PageMode } from '../types.ts';
import { Calendar, ShieldCheck, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { HERO_TAGLINES } from '../data/presets.ts';

interface HeroSectionProps {
  theme: ThemeMode;
  onRequestConsultation: () => void;
  onExploreApproach: () => void;
  onNavigatePage?: (page: PageMode) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  theme,
  onRequestConsultation,
  onExploreApproach,
  onNavigatePage,
}) => {
  const [imageError, setImageError] = useState(false);
  const [cropError, setCropError] = useState(false);
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle through the curated practice taglines
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setTaglineIndex((prev) => (prev + 1) % HERO_TAGLINES.length);
        setIsFading(false);
      }, 250);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="hero"
      className="relative pt-[72px] pb-12 sm:pb-16 lg:pb-20 bg-white dark:bg-neutral-950 overflow-hidden transition-colors"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start text-left">
        {/* 1. Top Badge: One Dedicated Provider | Assessment • Therapy • Advocacy */}
        {/* w-fit (not stretched full-width) with clean sans-serif typography & left alignment */}
        <div className="w-fit mb-4 sm:mb-5">
          <div className="w-fit inline-flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-2xl bg-[#F8FAFB] dark:bg-neutral-900 border border-[#8FA590]/40 dark:border-[#8FA590]/40 shadow-2xs font-sans text-left">
            {/* Dedicated Provider Pill */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C59B27] ring-4 ring-[#C59B27]/25 animate-pulse shrink-0" />
              <span className="text-xs sm:text-[13px] font-bold tracking-wide uppercase text-[#1B2A4A] dark:text-sky-100 font-sans">
                One Dedicated Provider
              </span>
            </div>
            {/* Divider on desktop */}
            <span className="hidden sm:inline text-[#8FA590] font-bold">|</span>
            {/* Assessment • Therapy • Advocacy */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-[13px] font-medium text-[#486581] dark:text-sky-300/90 font-sans">
              <span className="text-[#1B2A4A] dark:text-sky-200 font-semibold">Assessment</span>
              <span className="text-[#8FA590] dark:text-neutral-500 font-bold">•</span>
              <span className="text-[#1B2A4A] dark:text-sky-200 font-semibold">Therapy</span>
              <span className="text-[#8FA590] dark:text-neutral-500 font-bold">•</span>
              <span className="text-[#1B2A4A] dark:text-sky-200 font-semibold">Advocacy</span>
            </div>
          </div>
        </div>

        {/* 2. Main Tagline (H1) with Cycling Editorial Serif Options */}
        <div
          className="max-w-4xl mb-3 sm:mb-4 text-left w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <h1
            className={`text-3xl sm:text-5xl lg:text-[3.35rem] font-medium tracking-tight leading-[1.14] sm:leading-[1.12] font-editorial transition-all duration-300 min-h-[4.25rem] sm:min-h-[5.5rem] lg:min-h-[7rem] flex items-center ${
              isFading ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'
            } ${theme === 'dark' ? 'text-white' : 'text-[#1B2A4A]'}`}
            style={{ textWrap: 'balance' }}
          >
            {HERO_TAGLINES[taglineIndex]}
          </h1>

          {/* Tagline Cycling Dots Selector */}
          <div className="flex items-center gap-2 mt-2">
            {HERO_TAGLINES.map((tagline, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setIsFading(true);
                  setTimeout(() => {
                    setTaglineIndex(idx);
                    setIsFading(false);
                  }, 180);
                }}
                aria-label={`View tagline: ${tagline}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  taglineIndex === idx
                    ? 'w-7 bg-[#C59B27]'
                    : 'w-2 bg-[#BCD6E8] dark:bg-neutral-700 hover:bg-[#8FA590]'
                }`}
                title={tagline}
              />
            ))}
            <span className="text-[10px] text-[#627D98] font-mono ml-1.5 hidden sm:inline">
              Core Practice Tenets (Cycles automatically · Click to select)
            </span>
          </div>
        </div>

        {/* 3. Clinician Name & Practice Location (Prominently sized between tagline and description for transitioning families) */}
        <div className="mb-2 sm:mb-2.5">
          <h2
            className={`text-xl sm:text-2xl lg:text-[1.75rem] font-bold font-display tracking-tight leading-snug ${
              theme === 'dark' ? 'text-white' : 'text-[#1B2A4A]'
            }`}
          >
            Dr. Catherine McNulty, PhD · Greenwich, CT &amp; Tri-State Area
          </h2>
        </div>

        {/* 4. Sub-headline sentence in deep slate */}
        <p
          className={`text-sm sm:text-base lg:text-lg font-medium mb-5 sm:mb-6 max-w-3xl leading-snug font-sans text-left ${
            theme === 'dark' ? 'text-sky-200' : 'text-[#2C4B68]'
          }`}
        >
          Specialized pediatric psychology, comprehensive psychoeducational evaluations, and decisive 504/IEP school advocacy.
        </p>

        {/* 4. Primary CTA Button (Ordered ABOVE the photo on mobile so parents see it immediately) */}
        <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <button
            type="button"
            onClick={onRequestConsultation}
            className={`inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all active:scale-[0.98] shadow-sm hover:shadow cursor-pointer group ${
              theme === 'dark'
                ? 'bg-sky-600 hover:bg-sky-500 text-white'
                : 'bg-[#1B2A4A] hover:bg-[#253961] text-white'
            }`}
          >
            <Calendar size={16} className="text-[#C59B27] group-hover:scale-110 transition-transform" />
            <span>Request a Private Consultation</span>
            <ArrowRight size={14} className="opacity-70 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            type="button"
            onClick={onExploreApproach}
            className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-medium transition-colors border cursor-pointer ${
              theme === 'dark'
                ? 'border-neutral-800 text-sky-200 hover:bg-neutral-900'
                : 'border-[#8FA590]/50 bg-white text-[#1B2A4A] hover:bg-[#F8FAFB]'
            }`}
          >
            <span>Our Approach</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6 sm:mb-7 text-xs text-[#627D98] dark:text-neutral-400 font-sans">
          <span className="inline-flex items-center gap-1.5 font-medium text-[#1B2A4A] dark:text-sky-200">
            <ShieldCheck size={14} className="text-[#8FA590]" />
            Licensed in CT &amp; NY
          </span>
          <span className="text-[#8FA590]">•</span>
          <span className="font-medium text-[#1B2A4A] dark:text-sky-200">
            PhD Psychologist &amp; Former District Director of Special Services
          </span>
          <span className="text-[#8FA590]">•</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={13} className="text-[#C59B27]" />
            Greenwich Office &amp; Telehealth
          </span>
        </div>

        {/* 5. Serene Woodland Visual Banner (Narrowed to match editorial reading width) */}
        <div className="w-full max-w-2xl sm:max-w-3xl relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E8EEF3] dark:border-neutral-800 bg-[#F8FAFB] dark:bg-neutral-900 shadow-sm mb-6 sm:mb-8">
          <div className="relative aspect-[16/8] sm:aspect-[2.1/1] w-full max-h-[260px] sm:max-h-[300px]">
            {!imageError ? (
              <img
                src="/assets/connecticut_woodland_hero.jpg"
                alt="Early morning Connecticut woodland trail with soft golden sunlight filtering through oak, maple, and birch trees"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-opacity duration-300"
                onError={() => setImageError(true)}
              />
            ) : !cropError ? (
              <img
                src="/assets/adirondack_chairs_field.jpg"
                alt="Peaceful sunlit nature landscape in Greenwich, CT"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
                onError={() => setCropError(true)}
              />
            ) : (
              <GoldenSunriseVisual className="w-full h-full" />
            )}

            {/* Subtle gentle gradient vignette at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />

            {/* Credential caption pill anchored neatly inside bottom corner */}
            <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 right-2.5 sm:right-auto flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-white/80 dark:border-neutral-700 shadow-xs text-[10px] sm:text-xs text-[#1B2A4A] dark:text-white font-medium font-sans">
              <span className="w-2 h-2 rounded-full bg-[#C59B27] shrink-0" />
              <span>Dr. Catherine McNulty, PhD · CAM Child &amp; Family Psychology · Greenwich, CT</span>
            </div>
          </div>
        </div>

        {/* 6. Intro Paragraph (Placed right below the 16:10 image, matching user spec) */}
        <div
          className={`text-xs sm:text-sm lg:text-base leading-relaxed max-w-4xl space-y-3 font-sans text-left ${
            theme === 'dark' ? 'text-sky-300/80' : 'text-[#486581]'
          }`}
        >
          <p>
            Thoughtful psychological care tailored to how your child learns, grows, and thrives. Grounded in developmental science and clinical warmth, Dr. McNulty provides an individualized partnership designed around your family’s values and goals.
          </p>
          <p>
            By integrating psychotherapy, neuropsychological testing, and collaborative school guidance, CAM Child &amp; Family Psychology offers parents a trusted sounding board and children an empowering space to build enduring confidence, emotional resilience, and lifelong potential.
          </p>

          {onNavigatePage && (
            <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold font-sans">
              <span className="text-[#627D98] dark:text-neutral-400">Explore dedicated pages:</span>
              <button
                type="button"
                onClick={() => onNavigatePage('services')}
                className="text-[#1B2A4A] dark:text-sky-300 hover:text-[#C59B27] dark:hover:text-[#C59B27] underline underline-offset-4 cursor-pointer transition-colors"
              >
                Services &amp; Evaluations →
              </button>
              <button
                type="button"
                onClick={() => onNavigatePage('about')}
                className="text-[#1B2A4A] dark:text-sky-300 hover:text-[#C59B27] dark:hover:text-[#C59B27] underline underline-offset-4 cursor-pointer transition-colors"
              >
                About Dr. McNulty →
              </button>
              <button
                type="button"
                onClick={() => onNavigatePage('faq')}
                className="text-[#1B2A4A] dark:text-sky-300 hover:text-[#C59B27] dark:hover:text-[#C59B27] underline underline-offset-4 cursor-pointer transition-colors"
              >
                Frequently Asked Questions →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
