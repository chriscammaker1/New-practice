import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, HelpCircle, Phone, MessageSquare, Calendar, ShieldCheck, CreditCard, Sparkles, School, FileText, CheckCircle2 } from 'lucide-react';
import { ThemeMode } from '../types.ts';
import { PRACTICE_PHONE_DISPLAY, PRACTICE_PHONE_RAW, PRACTICE_SMS_PREFILL } from '../data/presets.ts';

interface FaqPageProps {
  theme: ThemeMode;
  onNavigateHome: () => void;
  onRequestConsultation: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({
  theme,
  onNavigateHome,
  onRequestConsultation,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'fees' | 'testing' | 'advocacy' | 'therapy'>('all');

  const allFaqs = [
    {
      category: 'fees',
      question: 'Do you accept insurance or are you a private pay practice?',
      answer:
        'CAM Child & Family Psychology operates as a specialized fee-for-service (private pay) practice. This ensures your child’s diagnostic care, evaluation pace, and therapy remain completely confidential and unconstrained by arbitrary insurance session limits or pre-authorizations. We provide comprehensive, itemized superbills monthly with standard CPT diagnostic codes, which most families successfully submit for out-of-network reimbursement or pay via pre-tax Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA).',
      highlight: 'Itemized monthly superbills provided for out-of-network reimbursement; HSA & FSA accepted.',
    },
    {
      category: 'therapy',
      question: 'How does the "One Dedicated Provider" model work in practice?',
      answer:
        'At large medical centers and group clinics, children are often handed off: a technician administers testing, a separate doctor interprets the results, a junior therapist conducts weekly sessions, and parents must attend school PPT meetings alone. At CAM, Dr. Catherine McNulty personally administers every test, leads every therapy session, and attends school meetings alongside you. This eliminates lost clinical nuances and builds deep, longitudinal trust.',
      highlight: 'No handoffs, no rotating trainees—direct doctoral-level care at every stage.',
    },
    {
      category: 'testing',
      question: 'What is involved in a Comprehensive Psychoeducational Evaluation?',
      answer:
        'A comprehensive evaluation typically spans 2 to 3 unhurried morning testing sessions. Dr. McNulty assesses cognitive functioning (IQ), phonological processing, academic achievement (reading, writing, mathematics), working memory, executive functions, and emotional-behavioral regulation. Following testing, parents receive a comprehensive written report and an in-depth feedback conference detailing clear diagnostic insights and tailored classroom accommodations.',
      highlight: 'Actionable diagnostic reports completed promptly without months of waiting.',
    },
    {
      category: 'advocacy',
      question: 'Why choose Dr. McNulty for 504 and IEP school advocacy?',
      answer:
        'Most non-clinical educational advocates have never administered psychological tests, and most clinical psychologists have never sat on the administrative side of a public school district. Dr. McNulty brings both: a PhD in Clinical Psychology and nearly two decades of public school leadership, including serving as District Director of Special Services at Katonah-Lewisboro in Westchester County, NY. She understands exactly how school teams think, evaluate data, and authorize accommodations.',
      highlight: 'Former public school District Director of Special Services in Westchester, NY.',
    },
    {
      category: 'therapy',
      question: 'What age groups and challenges do you specialize in?',
      answer:
        'Dr. McNulty works with children, adolescents, and teens from ages 4 through transition into college. Core clinical specializations include Pediatric Obsessive-Compulsive Disorder (OCD) using Exposure and Response Prevention (ERP), Anxiety Disorders (generalized, social phobia, panic, school avoidance), Tic Disorders and Tourette syndrome (CBIT principles), ADHD/executive dysfunction, and twice-exceptional (2e) learner profiles.',
      highlight: 'Specialized in Child OCD (ERP), Anxiety, Tic Disorders (CBIT), and ADHD.',
    },
    {
      category: 'testing',
      question: 'What schools do you frequently collaborate with?',
      answer:
        'Dr. McNulty has deep familiarity collaborating with both independent and public school systems throughout Fairfield County, CT and Westchester County, NY. This includes Greenwich Public Schools (and independent schools such as Brunswick, Greenwich Academy, Greenwich Country Day, Sacred Heart, Whitby), as well as neighboring districts in Darien, New Canaan, Westport, Wilton, Ridgefield, Rye, Scarsdale, Chappaqua, and Bedford.',
      highlight: 'Extensive public and independent school relationships across CT and NY.',
    },
    {
      category: 'fees',
      question: 'What are the steps to schedule an introductory consultation?',
      answer:
        'We begin with a confidential 15-to-20-minute introductory phone call. This gives Dr. McNulty the opportunity to understand your child’s history, your family’s immediate goals, and verify that our specialized practice is the ideal clinical fit before scheduling an in-person intake or evaluation.',
      highlight: 'Direct introductory phone call directly with Dr. McNulty.',
    },
    {
      category: 'therapy',
      question: 'Do you offer in-person sessions, telehealth, or a hybrid model?',
      answer:
        'Both formats are available. In-person sessions take place at our peaceful, private office in Greenwich, CT. For therapy sessions, parent consultations, and school PPT representation, secure encrypted telehealth is available to families residing anywhere in Connecticut or New York State.',
      highlight: 'In-person Greenwich office and telehealth across Connecticut & New York.',
    },
  ];

  const filteredFaqs = selectedCategory === 'all'
    ? allFaqs
    : allFaqs.filter((f) => f.category === selectedCategory);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={`min-h-screen transition-colors ${theme === 'dark' ? 'bg-neutral-950 text-white' : 'bg-white text-[#1B2A4A]'}`}>
      {/* Top Banner & Breadcrumb */}
      <div className={`border-b ${theme === 'dark' ? 'bg-neutral-900/60 border-neutral-800' : 'bg-[#F8FAFB] border-[#E8EEF3]'}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <button
            onClick={onNavigateHome}
            className={`inline-flex items-center gap-2 text-xs font-mono font-medium mb-4 transition-colors cursor-pointer ${
              theme === 'dark' ? 'text-sky-300 hover:text-white' : 'text-[#486581] hover:text-[#1B2A4A]'
            }`}
          >
            <ArrowLeft size={14} /> Back to Home Overview
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-neutral-800 border border-[#8FA590]/40 text-xs font-bold uppercase tracking-wider text-[#1B2A4A] dark:text-sky-200 font-sans mb-3 shadow-2xs">
            <HelpCircle size={14} className="text-[#C59B27]" />
            <span>Frequently Asked Questions</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display mb-3">
            Common Questions &amp; Practice Details
          </h1>

          <p className={`text-sm sm:text-base lg:text-lg max-w-3xl leading-relaxed ${theme === 'dark' ? 'text-neutral-400' : 'text-[#486581]'}`}>
            Transparent guidance on evaluations, out-of-network insurance reimbursement, school 504/IEP advocacy, and our one-provider clinical model.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10">
          {[
            { id: 'all', label: 'All Questions' },
            { id: 'fees', label: 'Fees & Insurance (Superbills)' },
            { id: 'testing', label: 'Psychoeducational Testing' },
            { id: 'advocacy', label: '504 & IEP School Advocacy' },
            { id: 'therapy', label: 'Therapy & Solo Practice Model' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold font-sans transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#1B2A4A] text-white shadow-xs'
                  : theme === 'dark'
                    ? 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
                    : 'bg-[#F8FAFB] text-[#486581] hover:bg-[#E8EEF3] border border-[#E8EEF3]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-4 mb-14">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? theme === 'dark'
                      ? 'bg-neutral-900 border-neutral-700 shadow-xs'
                      : 'bg-white border-[#8FA590]/70 shadow-xs'
                    : theme === 'dark'
                      ? 'bg-neutral-900/40 border-neutral-800 hover:border-neutral-700'
                      : 'bg-[#F8FAFB] border-[#E8EEF3] hover:border-[#8FA590]/50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 px-6 sm:px-7 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-sm sm:text-base font-bold font-display ${
                      isOpen
                        ? theme === 'dark'
                          ? 'text-sky-300'
                          : 'text-[#1B2A4A]'
                        : theme === 'dark'
                          ? 'text-neutral-200'
                          : 'text-[#1B2A4A]'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-[#1B2A4A] text-white'
                        : theme === 'dark'
                          ? 'bg-neutral-800 text-neutral-400'
                          : 'bg-white border border-[#E8EEF3] text-[#486581]'
                    }`}
                  >
                    <ChevronDown size={14} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-xs sm:text-sm leading-relaxed border-t border-[#E8EEF3]/60 dark:border-neutral-800/60 font-sans space-y-3">
                    <p className={theme === 'dark' ? 'text-neutral-300' : 'text-[#486581]'}>
                      {faq.answer}
                    </p>
                    {faq.highlight && (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FAF3E0] dark:bg-neutral-800 border border-[#C59B27]/40 text-[#1B2A4A] dark:text-sky-200 text-xs font-medium">
                        <CheckCircle2 size={13} className="text-[#C59B27] shrink-0" />
                        <span>{faq.highlight}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Banner */}
        <div className={`p-6 sm:p-8 rounded-2xl border ${theme === 'dark' ? 'bg-neutral-900 border-neutral-800' : 'bg-[#F8FAFB] border-[#8FA590]/40'} flex flex-col md:flex-row items-start md:items-center justify-between gap-6`}>
          <div className="space-y-1.5">
            <h3 className="text-base sm:text-lg font-bold font-display">
              Have a specific question about your child?
            </h3>
            <p className={`text-xs sm:text-sm max-w-xl ${theme === 'dark' ? 'text-neutral-400' : 'text-[#486581]'}`}>
              Dr. McNulty personally reviews all incoming family inquiries and is glad to discuss your child’s educational or emotional profile.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${PRACTICE_PHONE_RAW}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#E8EEF3] dark:border-neutral-700 bg-white dark:bg-neutral-800 text-xs font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
            >
              <Phone size={14} className="text-[#7A9A8B]" />
              <span>{PRACTICE_PHONE_DISPLAY}</span>
            </a>

            <button
              onClick={onRequestConsultation}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1B2A4A] hover:bg-[#253961] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <Calendar size={14} className="text-[#C59B27]" />
              <span>Request Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
