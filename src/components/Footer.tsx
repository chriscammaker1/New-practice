import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { BrighthouseLogo } from './BrighthouseLogo.tsx';
import { ThemeMode } from '../types.ts';
import { PRACTICE_PHONE_DISPLAY, PRACTICE_PHONE_RAW, PRACTICE_SMS_PREFILL } from '../data/presets.ts';

interface FooterProps {
  theme: ThemeMode;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  theme,
  onNavigate,
}) => {
  return (
    <footer
      className={`border-t py-14 transition-colors ${
        theme === 'dark'
          ? 'bg-neutral-950 border-neutral-900 text-stone-400'
          : 'bg-[#F8FAFB] border-[#E8EEF3] text-[#486581]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <BrighthouseLogo theme={theme} size="lg" />
            <p className="text-xs sm:text-sm leading-relaxed max-w-sm text-[#334E68] dark:text-neutral-400 font-sans">
              Specialized pediatric and adolescent psychological care that sees the whole child—providing complete continuity from diagnostic evaluations to classroom advocacy.
            </p>
            <div className="text-xs font-sans text-[#627D98] space-y-1">
              <div>Dr. Catherine McNulty, PhD · Licensed Clinical Psychologist</div>
              <div>Greenwich, CT &amp; Telehealth across CT &amp; NY</div>
            </div>

            {/* Direct Clinical Line & SMS Pill */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <a
                href={`tel:${PRACTICE_PHONE_RAW}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-neutral-900 border border-[#8FA590]/40 text-[#1B2A4A] dark:text-white font-sans text-xs font-semibold hover:border-[#8FA590] transition-colors"
                title="Call Dr. McNulty"
              >
                <Phone size={13} className="text-[#7A9A8B]" />
                <span>{PRACTICE_PHONE_DISPLAY}</span>
              </a>

              <a
                href={`sms:${PRACTICE_PHONE_RAW}?body=${encodeURIComponent(PRACTICE_SMS_PREFILL)}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-neutral-900 border border-[#8FA590]/40 text-[#1B2A4A] dark:text-white font-sans text-xs font-semibold hover:border-[#8FA590] transition-colors"
                title="Text / SMS practice line"
              >
                <MessageSquare size={13} className="text-[#C59B27]" />
                <span>Text / SMS</span>
              </a>
            </div>
          </div>

          {/* Core Services Column */}
          <div className="md:col-span-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1B2A4A] dark:text-stone-200 mb-3 font-sans">
              Core Clinical Services
            </div>
            <ul className="space-y-2 text-xs font-sans text-[#334E68] dark:text-neutral-300">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:underline underline-offset-4 transition-colors hover:text-[#1B2A4A] dark:hover:text-white text-left cursor-pointer"
                >
                  01 / Comprehensive Assessment &amp; Testing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:underline underline-offset-4 transition-colors hover:text-[#1B2A4A] dark:hover:text-white text-left cursor-pointer"
                >
                  02 / Individualized Pediatric Psychotherapy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:underline underline-offset-4 transition-colors hover:text-[#1B2A4A] dark:hover:text-white text-left cursor-pointer"
                >
                  03 / School Advocacy &amp; PPT / 504 Representation
                </button>
              </li>
            </ul>
          </div>

          {/* Practice Navigation */}
          <div className="md:col-span-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1B2A4A] dark:text-stone-200 mb-3 font-sans">
              Practice
            </div>
            <ul className="space-y-2 text-xs font-sans text-[#334E68] dark:text-neutral-300">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('continuity')}
                  className="hover:underline underline-offset-4 transition-colors hover:text-[#1B2A4A] dark:hover:text-white text-left cursor-pointer"
                >
                  Why One Dedicated Provider
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:underline underline-offset-4 transition-colors hover:text-[#1B2A4A] dark:hover:text-white text-left cursor-pointer"
                >
                  About Dr. Catherine McNulty, PhD
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('faq')}
                  className="hover:underline underline-offset-4 transition-colors hover:text-[#1B2A4A] dark:hover:text-white text-left cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('consultation')}
                  className="hover:underline underline-offset-4 transition-colors hover:text-[#1B2A4A] dark:hover:text-white text-left cursor-pointer font-semibold text-[#C59B27]"
                >
                  Schedule an Introductory Call
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Emergency Crisis Disclosure */}
        <div className="py-3.5 px-4 rounded-xl bg-white dark:bg-neutral-900 border border-[#E8EEF3] dark:border-neutral-800 text-[11px] text-[#486581] leading-normal mb-8 font-sans shadow-2xs">
          <strong>Emergency notice:</strong> If you or your child are in immediate mental health crisis or danger, please dial or text <strong>988</strong> (Suicide &amp; Crisis Lifeline) or go to the nearest emergency department. This website and consultation form are not monitored for medical emergencies.
        </div>

        <div className="pt-6 border-t border-[#E8EEF3] dark:border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-[#627D98] gap-4 font-sans">
          <div>
            &copy; {new Date().getFullYear()} CAM Child &amp; Family Psychology · Dr. Catherine McNulty, PhD. All rights reserved.
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span>Greenwich, Connecticut</span>
            <span>·</span>
            <span>Pediatric &amp; Adolescent Psychology</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
