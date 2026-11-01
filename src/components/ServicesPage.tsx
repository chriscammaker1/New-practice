import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Brain, FileText, School, ChevronRight, CheckCircle2, CreditCard, ShieldCheck, Receipt, HelpCircle, Lock, Calendar } from 'lucide-react';
import { ThemeMode } from '../types.ts';

interface ServicesPageProps {
  theme: ThemeMode;
  onNavigateHome: () => void;
  onRequestConsultation: (service?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  theme,
  onNavigateHome,
  onRequestConsultation,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'psychotherapy' | 'neurotherapy' | 'testing' | 'advocacy' | 'fees'>('all');

  const detailedServices = [
    {
      id: 'psychotherapy',
      code: '01 / CONNECT',
      title: 'Pediatric & Adolescent Psychotherapy',
      shortTitle: 'Psychotherapy',
      summary: 'Specialized evidence-based psychotherapy for children and adolescents navigating obsessive-compulsive disorder (OCD), anxiety disorders, and tic disorders, alongside emotional resilience building.',
      icon: Sparkles,
      whoItsFor: [
        'Children and teens experiencing Obsessive-Compulsive Disorder (OCD) and intrusive thoughts',
        'Youth dealing with generalized anxiety, social phobia, acute panic, or separation distress',
        'Children with motor and vocal tic disorders seeking behavioral regulation strategies',
        'High-achieving students struggling with perfectionism, test anxiety, or academic burnout',
        'Youth coping with family transitions, school avoidance, or social peer friction',
      ],
      methodology: 'Integrative evidence-based modalities including Cognitive Behavioral Therapy (CBT), Exposure and Response Prevention (ERP) frameworks for OCD, Comprehensive Behavioral Intervention for Tics (CBIT principles), and supportive family collaboration.',
      deliverables: 'Individual 45-minute clinical sessions tailored to your child, paired with ongoing parent collaboration and coordination with outside specialists when helpful.',
    },
    {
      id: 'neurotherapy',
      code: '02 / REGULATE',
      title: 'Brain-Based Neurotherapy & Self-Regulation',
      shortTitle: 'Neurotherapy',
      summary: 'An individualized, non-invasive approach utilizing neurofeedback principles to explore and strengthen brain-based self-regulation for sustained attention, emotional equilibrium, and restorative sleep.',
      icon: Brain,
      whoItsFor: [
        'Children with ADHD or attention inconsistencies who struggle with classroom focus',
        'Young people with sensory sensitivity or frequent emotional dysregulation',
        'Students experiencing bedtime restlessness, racing thoughts, or sleep-onset delay',
        'Teens dealing with cognitive fatigue and stress-induced brain fog',
        'Families seeking non-pharmacological, neurological skill-building interventions',
      ],
      methodology: 'Gentle, sensor-based protocols providing real-time feedback that trains brainwaves toward optimal regulation patterns in a comfortable, relaxed setting.',
      deliverables: 'Structured weekly sessions focused on brain-based self-regulation and personalized developmental goals.',
    },
    {
      id: 'testing',
      code: '03 / UNDERSTAND',
      title: 'Comprehensive Psychoeducational & Diagnostic Evaluations',
      shortTitle: 'Psychoeducational Evaluations',
      summary: 'A definitive diagnostic picture of your child’s cognitive architecture, learning profile, and emotional profile—yielding actionable, clear next steps rather than confusing jargon.',
      icon: FileText,
      whoItsFor: [
        'Students requiring comprehensive psychoeducational evaluations for learning and attention profiles',
        'Students struggling with reading (dyslexia), math (dyscalculia), or written expression (dysgraphia)',
        'Unclear learning bottlenecks: distinguishing between ADHD, OCD, anxiety, processing speed, or working memory hurdles',
        'Gifted and twice-exceptional (2e) students with uneven cognitive or emotional profiles',
        'Documentation for school accommodations, 504 plans, IEP services, SAT/ACT timing, or ISEE/SSAT testing',
      ],
      methodology: 'Comprehensive psychometric battery evaluating cognitive functioning (IQ), phonological processing, memory retrieval, executive functions, and emotional-social inventories.',
      deliverables: 'Thoughtfully paced evaluation sessions, followed by a collaborative parent feedback conference and a clear diagnostic report with practical recommendations.',
    },
    {
      id: 'advocacy',
      code: '04 / ADVOCATE',
      title: '504 / IEP Advocacy & School Collaboration',
      shortTitle: '504 / IEP Advocacy',
      summary: 'Led by a former Westchester Director of Special Services. Dr. McNulty brings nearly 20 years of school district leadership and IEP authoring experience to ensure accommodations are genuinely implemented.',
      icon: School,
      whoItsFor: [
        'Families seeking individualized Section 504 plans or formalized Individualized Education Programs (IEPs)',
        'Parents needing experienced clinical leadership during Planning and Placement Team (PPT) or CSE meetings',
        'Students transitioning between elementary, middle, high school, or independent preparatory environments',
        'Bridging communication between private clinicians, executive function coaches, and school advisors',
        'Ensuring testing accommodations (extended time, quiet setting, sensory breaks, modified curriculum) are honored in practice',
      ],
      methodology: 'Collaborative, collegial advocacy grounded in Dr. McNulty’s distinguished leadership directing Special Services at Katonah-Lewisboro in Westchester County, NY. We focus on constructive, durable solutions that schools can realistically adopt.',
      deliverables: 'Individualized family strategy consultations, school team coordination, and direct PPT / 504 meeting support.',
    },
  ];

  const filteredServices = activeTab === 'all'
    ? detailedServices
    : detailedServices.filter((s) => s.id === activeTab);

  return (
    <div className="bg-white min-h-screen text-[#102A43]">
      {/* Top Banner & Breadcrumb */}
      <div className="border-b border-[#E2ECF3] bg-[#F7FAFD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#486581] hover:text-[#102A43] mb-4 transition-colors cursor-pointer"
          >
            <ArrowLeft size={14} /> Back to Home Overview
          </button>
          
          <div className="inline-flex items-center px-3 py-1 rounded-md bg-[#EBF3F9] border border-[#D5E5F2] text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#335C80] mb-3 font-mono">
            /services · Specialized Clinical Offerings
          </div>
          
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display text-[#102A43] mb-3 sm:mb-4">
            Specialized Care for Every Dimension of Your Child’s World
          </h1>
          
          <p className="text-sm sm:text-base lg:text-lg text-[#244F75] max-w-3xl leading-relaxed">
            From evidence-based psychotherapy (anxiety, OCD, tics) and psychoeducational assessments to PPT/IEP school advocacy—Dr. Catherine McNulty provides an integrated continuum of pediatric psychological support across Connecticut, New York, and the Tri-State area.
          </p>

          {/* Service Filter Tabs (Smooth horizontal swipe on mobile, wrapped on desktop) */}
          <div className="flex items-center gap-2 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#E2ECF3] overflow-x-auto pb-2 scrollbar-none flex-nowrap sm:flex-wrap">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === 'all'
                  ? 'bg-[#102A43] text-white shadow-xs'
                  : 'bg-white text-[#486581] hover:text-[#102A43] border border-[#D5E5F2]'
              }`}
            >
              All Clinical Services (4)
            </button>
            {detailedServices.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id as any)}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeTab === service.id
                    ? 'bg-[#102A43] text-white shadow-xs'
                    : 'bg-white text-[#486581] hover:text-[#102A43] border border-[#D5E5F2]'
                }`}
              >
                {service.shortTitle}
              </button>
            ))}
            <button
              onClick={() => setActiveTab('fees')}
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeTab === 'fees'
                  ? 'bg-[#165664] text-white shadow-xs'
                  : 'bg-[#F0F6FA] text-[#165664] hover:bg-[#E2ECF3] border border-[#BCD6E8]'
              }`}
            >
              <CreditCard size={13} />
              <span>Fees & Insurance (Private Pay)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 space-y-12">
        {/* Render Clinical Services if not exclusively viewing fees */}
        {activeTab !== 'fees' && (
          <div className="space-y-8 sm:space-y-12">
            {filteredServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <article
                  key={service.id}
                  id={service.id}
                  className="p-5 sm:p-10 rounded-2xl border border-[#D5E5F2] bg-white shadow-xs hover:border-[#BCD6E8] transition-all"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                    <div>
                      <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#486581] tracking-wider uppercase mb-2">
                        <IconComponent size={16} className="text-[#1B365D]" />
                        <span>{service.code}</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#102A43]">
                        {service.title}
                      </h2>
                    </div>

                    <button
                      onClick={() => onRequestConsultation(service.shortTitle)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold bg-[#102A43] hover:bg-[#1B365D] text-white transition-all shadow-xs shrink-0 self-start cursor-pointer"
                    >
                      <span>Inquire About {service.shortTitle}</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>

                  <p className="text-base text-[#244F75] leading-relaxed mb-8 max-w-3xl">
                    {service.summary}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#EAF2F8]">
                    {/* Who It's For */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#102A43] font-mono mb-4">
                        Clinical Focus & Common Needs
                      </h3>
                      <ul className="space-y-2.5 text-xs text-[#486581]">
                        {service.whoItsFor.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                            <CheckCircle2 size={15} className="text-[#1B365D] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Clinical Framework & Deliverables */}
                    <div className="space-y-6">
                      <div className="p-4 rounded-xl bg-[#F7FAFD] border border-[#E2ECF3]">
                        <h4 className="text-xs font-bold text-[#102A43] mb-1 font-mono uppercase tracking-wider">
                          Clinical Methodology
                        </h4>
                        <p className="text-xs text-[#486581] leading-relaxed">
                          {service.methodology}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#F7FAFD] border border-[#E2ECF3]">
                        <h4 className="text-xs font-bold text-[#102A43] mb-1 font-mono uppercase tracking-wider">
                          Session Format &amp; Collaboration
                        </h4>
                        <p className="text-xs text-[#486581] leading-relaxed">
                          {service.deliverables}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* FEES & INSURANCE / CASH PAY EXPECTATIONS SECTION */}
        {(activeTab === 'all' || activeTab === 'fees') && (
          <section id="fees-insurance" className="p-6 sm:p-10 rounded-2xl border-2 border-[#BCD6E8] bg-[#F7FAFD] space-y-8">
            {/* Header */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#BCD6E8] text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#165664] mb-3 font-mono">
                <Receipt size={13} />
                <span>Practice Fees &amp; Out-of-Network Coverage</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#102A43] mb-3">
                Practice Fees &amp; Insurance Information
              </h2>
              <p className="text-sm sm:text-base text-[#244F75] leading-relaxed">
                CAM Child &amp; Family Psychology operates as an independent out-of-network practice. Psychotherapy sessions are 45 minutes in duration. Payment is collected at the time of each session, and itemized monthly Superbills are provided for families seeking out-of-network insurance reimbursement.
              </p>
            </div>

            {/* How Out-of-Network Reimbursement Works */}
            <div className="p-6 sm:p-8 rounded-xl bg-white border border-[#D5E5F2] space-y-4">
              <h3 className="text-base font-bold text-[#102A43] font-display flex items-center gap-2">
                <Receipt size={17} className="text-[#165664]" />
                <span>Out-of-Network Reimbursement via Monthly Superbills</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#486581] leading-relaxed">
                Many families with PPO or out-of-network benefits receive substantial reimbursement from their health insurance plans. While payment is collected directly from you at the time of service, we provide a detailed, itemized monthly receipt known as a <strong>Superbill</strong>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
                <div className="p-3.5 rounded-lg bg-[#F7FAFD] border border-[#E2ECF3]">
                  <div className="font-bold text-[#102A43] mb-1 font-mono uppercase tracking-wider text-[11px]">
                    1. Direct Payment
                  </div>
                  <p className="text-[#486581] text-[11px] leading-relaxed">
                    Fees are settled at each session or assessment phase using credit card, check, or pre-tax HSA/FSA cards.
                  </p>
                </div>
                <div className="p-3.5 rounded-lg bg-[#F7FAFD] border border-[#E2ECF3]">
                  <div className="font-bold text-[#102A43] mb-1 font-mono uppercase tracking-wider text-[11px]">
                    2. Detailed Superbill
                  </div>
                  <p className="text-[#486581] text-[11px] leading-relaxed">
                    At month’s end, you receive an itemized statement with standard diagnostic (ICD-10) and procedure (CPT) billing codes.
                  </p>
                </div>
                <div className="p-3.5 rounded-lg bg-[#F7FAFD] border border-[#E2ECF3]">
                  <div className="font-bold text-[#102A43] mb-1 font-mono uppercase tracking-wider text-[11px]">
                    3. Direct Reimbursement
                  </div>
                  <p className="text-[#486581] text-[11px] leading-relaxed">
                    Submit the Superbill via your insurance portal or app; your insurer sends reimbursement directly to you.
                  </p>
                </div>
              </div>
            </div>

            {/* Questions to Ask Your Insurance Provider */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#F0F6FA] border border-[#D5E5F2] space-y-3">
              <h4 className="text-xs sm:text-sm font-bold text-[#102A43] font-display flex items-center gap-2">
                <HelpCircle size={15} className="text-[#165664]" />
                <span>Helpful Questions When Calling Your Insurance Carrier</span>
              </h4>
              <p className="text-xs text-[#486581] leading-relaxed">
                Prior to your first consultation, we recommend calling the customer service number on the back of your insurance card and asking:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#335C80]">
                <li className="flex items-start gap-2 bg-white p-2.5 rounded-md border border-[#D5E5F2]">
                  <CheckCircle2 size={14} className="shrink-0 mt-0.5 text-[#165664]" />
                  <span>“Do I have out-of-network behavioral/mental health benefits for my child?”</span>
                </li>
                <li className="flex items-start gap-2 bg-white p-2.5 rounded-md border border-[#D5E5F2]">
                  <CheckCircle2 size={14} className="shrink-0 mt-0.5 text-[#165664]" />
                  <span>“What is my out-of-network deductible, and how much has been satisfied this year?”</span>
                </li>
                <li className="flex items-start gap-2 bg-white p-2.5 rounded-md border border-[#D5E5F2]">
                  <CheckCircle2 size={14} className="shrink-0 mt-0.5 text-[#165664]" />
                  <span>“What percentage is reimbursed for outpatient psychotherapy (CPT code 90834 / 90837)?”</span>
                </li>
                <li className="flex items-start gap-2 bg-white p-2.5 rounded-md border border-[#D5E5F2]">
                  <CheckCircle2 size={14} className="shrink-0 mt-0.5 text-[#165664]" />
                  <span>“What coverage or pre-authorization is required for psychological testing (CPT 96130 / 96136)?”</span>
                </li>
              </ul>
            </div>

            {/* Payment Methods & No Surprises Act */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#486581]">
              <div className="p-4 rounded-xl bg-white border border-[#D5E5F2]">
                <div className="font-bold text-[#102A43] mb-1 font-mono uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <CreditCard size={13} className="text-[#165664]" />
                  <span>Accepted Payment Methods</span>
                </div>
                <p className="leading-relaxed">
                  We accept major credit cards, debit cards, check, ACH bank transfer, as well as <strong>Health Savings Account (HSA)</strong> and <strong>Flexible Spending Account (FSA)</strong> cards for all clinical services and evaluations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#D5E5F2]">
                <div className="font-bold text-[#102A43] mb-1 font-mono uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-[#165664]" />
                  <span>Good Faith Estimates (No Surprises Act)</span>
                </div>
                <p className="leading-relaxed">
                  In compliance with the federal No Surprises Act, all self-pay patients receive a clear, written Good Faith Estimate outlining anticipated service costs before beginning evaluations or clinical treatment.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Local Greenwich & Westchester Schools Context */}
        <section className="p-8 sm:p-10 rounded-2xl bg-[#F0F6FA] border border-[#D5E5F2] text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#D5E5F2] text-[11px] font-semibold tracking-wider uppercase text-[#335C80] mb-3 font-mono">
            Greenwich, Fairfield County & Westchester Familiarity
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-[#102A43] mb-3">
            Experienced with Local Independent & Public School Environments
          </h3>
          <p className="text-xs sm:text-sm text-[#486581] max-w-2xl mx-auto leading-relaxed mb-6">
            Dr. McNulty collaborates regularly with educators, counselors, and learning specialists across Greenwich Public Schools, Brunswick School, Greenwich Academy, Greenwich Country Day School, Sacred Heart Greenwich, Eagle Hill, as well as Darien, New Canaan, and Westchester County districts.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onRequestConsultation()}
              className="px-6 py-3 rounded-lg text-xs font-semibold bg-[#102A43] hover:bg-[#1B365D] text-white transition-all shadow-xs cursor-pointer"
            >
              Request a Private Consultation
            </button>
            <button
              onClick={onNavigateHome}
              className="px-6 py-3 rounded-lg text-xs font-semibold bg-white border border-[#D5E5F2] text-[#102A43] hover:bg-[#F7FAFD] transition-all cursor-pointer"
            >
              Return to Landing Page
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
