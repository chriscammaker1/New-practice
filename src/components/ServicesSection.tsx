import React, { useState } from 'react';
import { ChevronRight, X, CheckCircle2, CreditCard } from 'lucide-react';
import { ThemeMode } from '../types.ts';

interface ServicesSectionProps {
  theme: ThemeMode;
  onSelectService: (serviceName: string) => void;
  onViewAllServices?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  theme,
  onSelectService,
  onViewAllServices,
}) => {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const services = [
    {
      index: '01 / CONNECT',
      title: 'Psychotherapy',
      summary: 'Specialized evidence-based care for anxiety disorders, OCD, and tic disorders, fostering enduring coping skills.',
      modalDetails: {
        subtitle: 'Pediatric & Adolescent Psychotherapy',
        description: 'Dr. McNulty specializes in evaluating and treating young people with obsessive-compulsive disorder (OCD), anxiety disorders, and tic disorders. Therapy provides a structured, compassionate sanctuary where children and adolescents learn concrete, evidence-based strategies tailored to their specific therapeutic goals.',
        areas: [
          'Obsessive-Compulsive Disorder (OCD) & exposure response strategies',
          'Anxiety disorders, generalized worries, and social phobia',
          'Tic disorders & behavioral regulation protocols',
          'School stress, perfectionism, and acute performance anxiety',
          'Emotional regulation, self-advocacy, and resilience tools for home and life',
        ],
        format: 'Individual 45-minute clinical sessions tailored to your child, paired with ongoing parent collaboration.',
      },
    },
    {
      index: '02 / REGULATE',
      title: 'Neurotherapy',
      summary: 'An individualized approach to exploring brain-based support for attention, focus, and self-regulation.',
      modalDetails: {
        subtitle: 'Brain-Based Regulation & Neurofeedback',
        description: 'Neurotherapy offers non-invasive, brain-based interventions that support attention, focus, sleep, and emotional regulation. By exploring brainwave patterns, children learn self-regulation from a neurobiological foundation without pharmaceuticals.',
        areas: [
          'ADHD, impulsivity, and executive functioning support',
          'Sensory and emotional dysregulation',
          'Sleep onset and restlessness challenges',
          'Stress-induced cognitive fatigue and brain fog',
          'Complementary, non-pharmacological brain training',
        ],
        format: 'Structured assessment baseline followed by targeted, gentle training protocols.',
      },
    },
    {
      index: '03 / UNDERSTAND',
      title: 'Psychoeducational evaluations',
      summary: 'In-depth diagnostic assessments that decode learning, cognitive, and attention profiles with actionable next steps.',
      modalDetails: {
        subtitle: 'Comprehensive Psychoeducational & Cognitive Testing',
        description: 'Testing provides definitive diagnostic clarity when a child is struggling in school or emotionally. We evaluate cognitive processing, memory, executive functioning, academic achievement, and emotional well-being to construct an accurate, humane roadmap for growth.',
        areas: [
          'Comprehensive psychoeducational evaluations for learning and attention',
          'Learning differences (Dyslexia, Dyscalculia, Processing Speed)',
          'Attention Deficit / Hyperactivity Disorder (ADHD)',
          'Differential diagnosis for anxiety vs OCD vs attention bottlenecks',
          'Detailed, actionable reports with concrete 504 and IEP accommodations',
        ],
        format: 'Multi-session clinical testing battery, school observations, parent interview, and thorough feedback conference.',
      },
    },
    {
      index: '04 / ADVOCATE',
      title: '504 / IEP advocacy & development',
      summary: 'Led by a former Westchester Director of Special Services. Expert insider guidance for PPT meetings, 504s, and IEPs.',
      modalDetails: {
        subtitle: 'Former District Special Ed Director · 504 / IEP Advocacy',
        description: 'Drawing upon her distinguished leadership directing the Special Services department at Katonah-Lewisboro in Westchester County, NY—overseeing therapeutic programs and managing 75+ professionals—Dr. McNulty brings unmatched administrative authority to PPT meetings and school collaboration.',
        areas: [
          'Direct PPT and 504 meeting participation and advocacy',
          'Translating clinical findings into defensible, high-impact IEP goals',
          'Evaluating district accommodations and specialized instruction services',
          'Collaboration with school administrators, teachers, and speech/OT specialists',
          'Transition planning between elementary, middle, high school, and independent schools',
        ],
        format: 'Consultative meetings, school team calls, and PPT meeting attendance as requested.',
      },
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-20 border-t border-[#E2ECF3] bg-white dark:bg-neutral-950 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow in soft light blue badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-md bg-[#F0F6FA] border border-[#D5E5F2] text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#335C80] mb-3 font-mono">
          Individual needs. Connected care.
        </div>

        {/* Section Heading in deep blue */}
        <h2
          className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight font-display mb-8 sm:mb-14 ${
            theme === 'dark' ? 'text-white' : 'text-[#102A43]'
          }`}
        >
          Support for every part of their world.
        </h2>

        {/* 4-Column Service Grid matching Framer layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between pt-5 border-t border-[#E2ECF3] dark:border-neutral-800 group"
            >
              <div>
                {/* Index / Category in soft light blue */}
                <div className="text-[11px] font-mono tracking-wider font-semibold text-[#587B9C] mb-3">
                  {item.index}
                </div>

                {/* Service Title in deep blue */}
                <h3
                  className={`text-xl font-bold font-display mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-[#102A43]'
                  }`}
                >
                  {item.title}
                </h3>

                {/* Summary Description in soft blue */}
                <p
                  className={`text-sm leading-relaxed ${
                    theme === 'dark' ? 'text-stone-400' : 'text-[#486581]'
                  }`}
                >
                  {item.summary}
                </p>
              </div>

              {/* Read details button */}
              <div className="mt-6 pt-4">
                <button
                  onClick={() => setActiveModal(idx)}
                  className={`inline-flex items-center gap-1 text-xs font-semibold tracking-tight transition-colors ${
                    theme === 'dark'
                      ? 'text-sky-300 hover:text-white'
                      : 'text-[#102A43] hover:text-[#244F75]'
                  }`}
                >
                  <span>Learn more</span>
                  <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Fee-for-Service & Private Pay Expectations Bar */}
        <div className="mt-10 p-4 sm:p-5 rounded-xl border border-[#D5E5F2] bg-[#F7FAFD] dark:bg-neutral-900/60 dark:border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <CreditCard size={18} className="text-[#165664] dark:text-sky-300 shrink-0 mt-0.5" />
            <div className="text-xs text-[#486581] dark:text-stone-300 leading-relaxed max-w-2xl">
              <span className="font-bold text-[#102A43] dark:text-white">Sessions &amp; Practice Fees: </span>
              CAM Child &amp; Family Psychology is an out-of-network practice providing 45-minute clinical sessions. Detailed monthly Superbills are provided for families seeking out-of-network insurance reimbursement, and HSA/FSA cards are accepted.
            </div>
          </div>
          {onViewAllServices && (
            <button
              onClick={onViewAllServices}
              className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-white dark:bg-neutral-800 border border-[#BCD6E8] dark:border-neutral-700 text-[#165664] dark:text-sky-200 hover:bg-[#EBF3F9] transition-all cursor-pointer whitespace-nowrap"
            >
              <span>View Full Services & Fee Policy</span>
              <ChevronRight size={13} />
            </button>
          )}
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeModal !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#102A43]/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-white dark:bg-neutral-900 border border-[#D5E5F2] dark:border-neutral-800 rounded-2xl shadow-xl p-5 sm:p-8 text-[#102A43] dark:text-neutral-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-1.5 rounded-lg text-[#627D98] hover:text-[#102A43] dark:hover:text-white"
            >
              <X size={20} />
            </button>

            <div className="inline-block px-2.5 py-0.5 rounded bg-[#F0F6FA] text-xs font-mono font-semibold text-[#244F75] mb-2 border border-[#D5E5F2]">
              {services[activeModal].index}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display mb-1.5 text-[#102A43] dark:text-white">
              {services[activeModal].title}
            </h3>
            <p className="text-xs text-[#486581] mb-4 font-medium">
              {services[activeModal].modalDetails.subtitle}
            </p>

            <p className="text-xs sm:text-sm leading-relaxed text-[#486581] dark:text-stone-300 mb-6">
              {services[activeModal].modalDetails.description}
            </p>

            <div className="space-y-2 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#335C80] font-mono">
                Key Areas of Support
              </div>
              {services[activeModal].modalDetails.areas.map((area, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#486581] dark:text-stone-300">
                  <CheckCircle2 size={13} className="text-[#1B365D] dark:text-sky-300 mt-0.5 shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-lg bg-[#F0F6FA] dark:bg-neutral-950 border border-[#D5E5F2] dark:border-neutral-800 text-xs text-[#486581] dark:text-stone-400 mb-6 font-mono">
              <strong>Structure:</strong> {services[activeModal].modalDetails.format}
            </div>

            <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
              <button
                onClick={() => setActiveModal(null)}
                className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-[#627D98] hover:text-[#102A43] text-center"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const sName = services[activeModal].title;
                  setActiveModal(null);
                  onSelectService(sName);
                }}
                className="w-full sm:w-auto px-5 py-3 sm:py-2 text-xs font-semibold bg-[#102A43] hover:bg-[#1B365D] text-white rounded-md transition-colors shadow-2xs text-center"
              >
                Inquire About {services[activeModal].title}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
