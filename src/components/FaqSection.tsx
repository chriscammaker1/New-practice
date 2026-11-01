import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, Calendar } from 'lucide-react';
import { ThemeMode } from '../types.ts';

interface FaqSectionProps {
  theme: ThemeMode;
  onRequestConsultation: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  theme,
  onRequestConsultation,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Do you accept insurance or are you private pay?',
      answer:
        'CAM Child & Family Psychology operates as a specialized fee-for-service (private pay) practice. This ensures your child’s diagnostic care and therapy remain completely confidential, unconstrained by arbitrary insurance session limits or pre-authorizations. We provide comprehensive, itemized superbills monthly with appropriate CPT diagnostic codes, which most families successfully submit for out-of-network reimbursement or pay via pre-tax Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA).',
    },
    {
      question: 'Why choose Dr. McNulty over a clinic or non-clinical school advocate?',
      answer:
        'Most advocates are either lawyers or former teachers without doctorate-level clinical training, while most clinical psychologists have never sat on the administrative side of a public school district. Dr. McNulty brings both: a PhD in Clinical Psychology and over a decade of experience as a public school District Director of Special Services and certified School Psychologist. She understands exactly how PPT teams think, write, and approve accommodations.',
    },
    {
      question: 'How does the "One Dedicated Provider" model work in practice?',
      answer:
        'At large hospital centers and group clinics, children often see a testing technician for evaluations, a separate doctor for diagnostic feedback, an unfamiliar junior therapist for weekly sessions, and are left on their own for school meetings. At CAM, Dr. Catherine McNulty personally administers every test, leads every therapy session, and attends every school conference table, ensuring unbroken clinical depth.',
    },
    {
      question: 'What schools do you frequently collaborate with?',
      answer:
        'Dr. McNulty has deep familiarity collaborating with both independent and public school systems throughout Fairfield County, CT and Westchester County, NY. This includes Greenwich Public Schools (and local independent schools such as Brunswick, Greenwich Academy, Greenwich Country Day, Sacred Heart), as well as neighboring districts in Darien, New Canaan, Westport, Rye, Scarsdale, and Bedford.',
    },
    {
      question: 'What age groups and childhood challenges do you support?',
      answer:
        'Our clinical practice is dedicated to children, adolescents, and teens from ages 4 through transition into college. Core specializations include child OCD (Exposure and Response Prevention / ERP), anxiety disorders, panic, tic disorders (CBIT), ADHD and executive functioning challenges, dyslexia/learning differences, and complex school refusal.',
    },
    {
      question: 'How do we take the first step?',
      answer:
        'We begin with a brief, confidential introductory phone call. This gives Dr. McNulty the opportunity to understand your family’s immediate concerns and ensure our practice is the ideal clinical fit before scheduling an initial in-person consultation or evaluation.',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="py-14 sm:py-20 lg:py-24 bg-white dark:bg-neutral-900 border-t border-[#E8E4DA] dark:border-neutral-800 transition-colors"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="w-fit mx-auto inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFB] dark:bg-neutral-800 border border-[#8FA590]/40 text-xs font-bold uppercase tracking-wider text-[#1B2A4A] dark:text-sky-200 font-sans mb-3 shadow-2xs">
            <HelpCircle size={14} className="text-[#C59B27]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2
            className={`text-2xl sm:text-4xl font-bold tracking-tight leading-[1.18] font-display mb-3 ${
              theme === 'dark' ? 'text-white' : 'text-[#1B2A4A]'
            }`}
          >
            Clear answers for parents seeking specialized care.
          </h2>
          <p
            className={`text-xs sm:text-sm lg:text-base leading-relaxed font-sans ${
              theme === 'dark' ? 'text-neutral-400' : 'text-[#486581]'
            }`}
          >
            Have additional questions about evaluations, advocacy, or weekly therapy? Dr. McNulty is happy to speak directly with your family.
          </p>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-3.5 mb-12">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? theme === 'dark'
                      ? 'bg-neutral-950 border-neutral-700 shadow-xs'
                      : 'bg-white border-[#8FA590]/70 shadow-xs'
                    : theme === 'dark'
                      ? 'bg-neutral-950/40 border-neutral-800 hover:border-neutral-700'
                      : 'bg-[#F8FAFB] border-[#E8EEF3] hover:border-[#8FA590]/50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-sm sm:text-base font-semibold font-display tracking-tight ${
                      isOpen
                        ? theme === 'dark'
                          ? 'text-white font-bold'
                          : 'text-[#1B2A4A] font-bold'
                        : theme === 'dark'
                          ? 'text-neutral-300'
                          : 'text-[#1B2A4A]'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-[#1B2A4A] text-white'
                        : 'bg-white text-[#627D98] border border-[#E8EEF3]'
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm leading-relaxed text-[#486581] dark:text-neutral-300 font-sans border-t border-[#E8EEF3] dark:border-neutral-800/60 mt-1">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Reassurance Card */}
        <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#F8FAFB] dark:bg-neutral-950 border border-[#8FA590]/40 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-[#1B2A4A] dark:text-white font-display">
              Ready to discuss your child’s needs?
            </h4>
            <p className="text-xs sm:text-sm text-[#486581] dark:text-neutral-400 mt-1 font-sans">
              Schedule a confidential 15-minute phone consultation directly with Dr. Catherine McNulty, PhD.
            </p>
          </div>
          <button
            type="button"
            onClick={onRequestConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1B2A4A] hover:bg-[#253961] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs cursor-pointer shrink-0"
          >
            <Calendar size={15} className="text-[#C59B27]" />
            <span>Schedule an Introductory Call</span>
          </button>
        </div>
      </div>
    </section>
  );
};
