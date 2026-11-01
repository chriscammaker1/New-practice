import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, ShieldCheck, Phone, MessageSquare, CreditCard, Receipt, MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';
import { ThemeMode } from '../types.ts';
import { PRACTICE_PHONE_DISPLAY, PRACTICE_PHONE_RAW, PRACTICE_SMS_PREFILL } from '../data/presets.ts';
import { PRACTICE_CONTACT_CONFIG } from '../config/practiceContact.ts';

interface FrameIntakeFormProps {
  theme: ThemeMode;
  initialService?: string;
}

export const FrameIntakeForm: React.FC<FrameIntakeFormProps> = ({
  theme,
  initialService = '',
}) => {
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [childAge, setChildAge] = useState('');
  const [serviceFocus, setServiceFocus] = useState(initialService || 'Testing & assessment');
  const [schoolContext, setSchoolContext] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }
    if (!parentName.trim()) {
      setStatus('error');
      setErrorMessage('Please provide your name.');
      return;
    }

    setStatus('submitting');

    if (PRACTICE_CONTACT_CONFIG.formEndpointUrl) {
      fetch(PRACTICE_CONTACT_CONFIG.formEndpointUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          recipient: PRACTICE_CONTACT_CONFIG.email.inquiryRecipient,
          parentName,
          email,
          phone,
          childAge,
          schoolContext,
          serviceFocus,
          message,
          submittedAt: new Date().toISOString(),
        }),
      })
        .then((res) => {
          if (res.ok) {
            setStatus('success');
            setErrorMessage('');
          } else {
            setStatus('error');
            setErrorMessage('Unable to send inquiry at this time. Please call or text our office directly.');
          }
        })
        .catch(() => {
          setStatus('error');
          setErrorMessage('Unable to connect. Please call or text our practice line directly.');
        });
    } else {
      setTimeout(() => {
        setStatus('success');
        setErrorMessage('');
      }, 600);
    }
  };

  const consultSteps = [
    {
      step: '01',
      title: '15-Minute Introductory Call',
      desc: 'A complimentary phone conversation directly with Dr. McNulty to share your child’s history, discuss your primary questions, and ensure our specialized practice is the ideal clinical fit.',
    },
    {
      step: '02',
      title: 'Individualized Clinical Plan',
      desc: 'Scheduling your child’s comprehensive psychoeducational evaluation or weekly psychotherapy sessions in our peaceful Greenwich office or via secure telehealth across CT & NY.',
    },
    {
      step: '03',
      title: 'Actionable Care & School Advocacy',
      desc: 'Actionable diagnostic reports, tailored therapeutic interventions (CBT, ERP, CBIT), and Dr. McNulty’s direct presence alongside your family at school 504 and PPT tables.',
    },
  ];

  return (
    <section
      id="consultation"
      className={`py-14 sm:py-20 border-t transition-colors ${
        theme === 'dark'
          ? 'bg-neutral-950 border-neutral-800 text-white'
          : 'bg-white border-[#E8EEF3] text-[#1B2A4A]'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFB] dark:bg-neutral-900 border border-[#8FA590]/40 text-xs font-bold uppercase tracking-wider text-[#1B2A4A] dark:text-sky-200 font-sans mb-3 shadow-2xs">
            <Calendar size={14} className="text-[#C59B27]" />
            <span>Consultation &amp; Practice Details</span>
          </div>
          
          <h2
            className={`text-2xl sm:text-4xl font-bold tracking-tight font-display ${
              theme === 'dark' ? 'text-white' : 'text-[#1B2A4A]'
            }`}
          >
            How Consultations Work &amp; Next Steps
          </h2>
          
          <p
            className={`mt-3 text-xs sm:text-sm lg:text-base max-w-lg mx-auto leading-relaxed font-sans ${
              theme === 'dark' ? 'text-neutral-400' : 'text-[#486581]'
            }`}
          >
            Dr. McNulty welcomes inquiries from parents seeking thoughtful, individualized psychological support. Inquiries are reviewed confidentially, and our office responds directly within 1 to 2 business days.
          </p>
        </div>

        {/* 3-Step Consultation Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {consultSteps.map((s, idx) => (
            <div
              key={idx}
              className={`p-5 sm:p-6 rounded-2xl border transition-all ${
                theme === 'dark'
                  ? 'bg-neutral-900/60 border-neutral-800'
                  : 'bg-[#F8FAFB] border-[#E8EEF3]'
              }`}
            >
              <div className="font-mono text-xs font-bold text-[#C59B27] mb-2">
                STEP {s.step}
              </div>
              <h3 className="text-sm sm:text-base font-bold font-display text-[#1B2A4A] dark:text-white mb-2">
                {s.title}
              </h3>
              <p className="text-xs text-[#486581] dark:text-neutral-300 leading-relaxed font-sans">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Practice Line & Direct Text Card */}
        <div className={`mb-6 p-5 sm:p-6 rounded-2xl border ${
          theme === 'dark'
            ? 'bg-neutral-900 border-neutral-800'
            : 'bg-[#F0F6FA] border-[#D5E5F2] shadow-2xs'
        }`}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-white dark:bg-neutral-800 border border-[#BCD6E8] dark:border-neutral-700 text-[10px] font-mono font-semibold uppercase text-[#1B2A4A] dark:text-sky-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7A9A8B] dark:bg-sky-300" />
                <span>Practice Line · Call or Text</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold font-display text-[#1B2A4A] dark:text-white">
                Direct Practice Line &amp; Text Messaging
              </h3>
              <p className="text-xs text-[#486581] dark:text-neutral-300 leading-relaxed max-w-xl font-sans">
                Parents are welcome to call or text the practice line directly. Dr. McNulty's office reviews all messages personally and will reach out to schedule an initial consultation.
              </p>
            </div>

            <div className="text-left md:text-right shrink-0">
              <a
                href={`tel:${PRACTICE_PHONE_RAW}`}
                className="text-xl sm:text-2xl font-bold font-mono text-[#1B2A4A] dark:text-white tracking-tight hover:underline"
              >
                {PRACTICE_PHONE_DISPLAY}
              </a>
              <div className="text-[10px] text-[#627D98] font-mono mt-0.5">
                Greenwich, CT · Direct Line &amp; SMS
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 pt-4 border-t border-[#D5E5F2] dark:border-neutral-800">
            <a
              href={`tel:${PRACTICE_PHONE_RAW}`}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-800 border border-[#BCD6E8] dark:border-neutral-700 text-[#1B2A4A] dark:text-white hover:bg-[#EBF3F9] dark:hover:bg-neutral-700 text-xs font-semibold transition-all shadow-2xs cursor-pointer"
            >
              <Phone size={14} className="text-[#7A9A8B]" />
              <span>Call Practice Line ({PRACTICE_PHONE_DISPLAY})</span>
            </a>

            <a
              href={`sms:${PRACTICE_PHONE_RAW}?body=${encodeURIComponent(PRACTICE_SMS_PREFILL)}`}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-800 border border-[#BCD6E8] dark:border-neutral-700 text-[#1B2A4A] dark:text-white hover:bg-[#EBF3F9] dark:hover:bg-neutral-700 text-xs font-semibold transition-all shadow-2xs cursor-pointer"
            >
              <MessageSquare size={14} className="text-[#C59B27]" />
              <span>Send Text / SMS Message</span>
            </a>
          </div>
        </div>

        {/* Practice Logistics & Fees Card */}
        <div className={`mb-8 p-5 sm:p-6 rounded-2xl border ${
          theme === 'dark'
            ? 'bg-neutral-900 border-neutral-800'
            : 'bg-[#F8FAFB] border-[#E8EEF3] shadow-2xs'
        }`}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3.5 border-b border-[#E8EEF3] dark:border-neutral-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white dark:bg-neutral-800 border border-[#E8EEF3] dark:border-neutral-700 flex items-center justify-center text-[#1B2A4A] dark:text-sky-300 shrink-0">
                <CreditCard size={16} />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#1B2A4A] dark:text-white font-display">
                  Practice Logistics &amp; Fee-for-Service Details
                </h4>
                <p className="text-xs text-[#486581] dark:text-neutral-400">
                  Greenwich office &amp; Telehealth across CT &amp; NY · Monthly Superbills for Insurance
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-neutral-800 border border-[#E8EEF3] dark:border-neutral-700 text-[11px] font-mono text-[#1B2A4A] dark:text-sky-300 shrink-0">
              <Receipt size={12} />
              <span>HSA / FSA Accepted</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-3.5 text-xs font-sans">
            <div className="space-y-1">
              <div className="font-bold text-[#1B2A4A] dark:text-neutral-200 font-mono text-[11px] uppercase tracking-wider">
                Greenwich &amp; Telehealth
              </div>
              <p className="text-[#486581] dark:text-neutral-400 text-[11px] leading-relaxed">
                Quiet in-person office in Greenwich, CT with dedicated parking, plus encrypted telehealth throughout CT &amp; NY.
              </p>
            </div>

            <div className="space-y-1">
              <div className="font-bold text-[#1B2A4A] dark:text-neutral-200 font-mono text-[11px] uppercase tracking-wider">
                Monthly Superbills
              </div>
              <p className="text-[#486581] dark:text-neutral-400 text-[11px] leading-relaxed">
                Itemized statements with CPT diagnostic and treatment codes provided each month for out-of-network claims.
              </p>
            </div>

            <div className="space-y-1">
              <div className="font-bold text-[#1B2A4A] dark:text-neutral-200 font-mono text-[11px] uppercase tracking-wider">
                Individualized Care
              </div>
              <p className="text-[#486581] dark:text-neutral-400 text-[11px] leading-relaxed">
                Standard psychotherapy sessions are 45 minutes; evaluations are thoughtfully paced over 2–3 morning sessions.
              </p>
            </div>
          </div>
        </div>

        {/* Confidential Consultation Request Form Card */}
        <div
          className={`rounded-2xl border p-5 sm:p-10 transition-all ${
            theme === 'dark'
              ? 'bg-neutral-900 border-neutral-800'
              : 'bg-white border-[#E8EEF3] shadow-sm'
          }`}
        >
          {status === 'success' ? (
            <div className="py-10 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FAF3E0] text-[#1B2A4A] mb-4 border border-[#C59B27]/40">
                <CheckCircle2 size={24} className="text-[#C59B27]" />
              </div>
              <h3
                className={`text-2xl font-bold font-display ${
                  theme === 'dark' ? 'text-white' : 'text-[#1B2A4A]'
                }`}
              >
                Thank you, {parentName}.
              </h3>
              <p
                className={`mt-2 text-sm max-w-md mx-auto leading-relaxed ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-[#486581]'
                }`}
              >
                Your inquiry has been received. Dr. McNulty's office will review your note regarding {serviceFocus} and reply to {email} within 1 to 2 business days.
              </p>

              <div className="mt-5 p-4 rounded-xl bg-[#F8FAFB] dark:bg-neutral-800 border border-[#E8EEF3] dark:border-neutral-700 max-w-md mx-auto text-xs text-[#486581] dark:text-neutral-300 text-left">
                <div className="font-semibold text-[#1B2A4A] dark:text-white mb-1">
                  Direct Practice Phone &amp; Text
                </div>
                <div>
                  You may also reach our office by phone or text at{' '}
                  <a
                    href={`sms:${PRACTICE_PHONE_RAW}?body=${encodeURIComponent(PRACTICE_SMS_PREFILL)}`}
                    className="font-mono font-bold text-[#1B2A4A] dark:text-sky-300 underline"
                  >
                    {PRACTICE_PHONE_DISPLAY}
                  </a>.
                </div>
              </div>

              <button
                onClick={() => {
                  setStatus('idle');
                  setParentName('');
                  setEmail('');
                  setPhone('');
                  setChildAge('');
                  setSchoolContext('');
                  setMessage('');
                }}
                className="mt-6 px-4 py-2 text-xs font-semibold rounded-md border border-[#8FA590] text-[#1B2A4A] hover:bg-[#F8FAFB] transition-colors cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex items-center justify-between pb-2 border-b border-[#E8EEF3] dark:border-neutral-800">
                <h4 className="text-sm font-bold text-[#1B2A4A] dark:text-white font-display">
                  Confidential Consultation Request Form
                </h4>
                <div className="text-[11px] text-[#627D98] font-mono">
                  Dr. McNulty's Office
                </div>
              </div>

              {status === 'error' && errorMessage && (
                <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                  <AlertCircle size={15} />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1B2A4A] dark:text-neutral-200 mb-1.5 font-sans">
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8EEF3] dark:border-neutral-700 bg-white dark:bg-neutral-800 text-xs text-[#1B2A4A] dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#8FA590]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1B2A4A] dark:text-neutral-200 mb-1.5 font-sans">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. sarah@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8EEF3] dark:border-neutral-700 bg-white dark:bg-neutral-800 text-xs text-[#1B2A4A] dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#8FA590]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1B2A4A] dark:text-neutral-200 mb-1.5 font-sans">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(203) 555-0199"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8EEF3] dark:border-neutral-700 bg-white dark:bg-neutral-800 text-xs text-[#1B2A4A] dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#8FA590]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1B2A4A] dark:text-neutral-200 mb-1.5 font-sans">
                    Child's Age &amp; Grade
                  </label>
                  <input
                    type="text"
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    placeholder="e.g. 10 years old / 5th grade"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8EEF3] dark:border-neutral-700 bg-white dark:bg-neutral-800 text-xs text-[#1B2A4A] dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#8FA590]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1B2A4A] dark:text-neutral-200 mb-1.5 font-sans">
                    Current School (Optional)
                  </label>
                  <input
                    type="text"
                    value={schoolContext}
                    onChange={(e) => setSchoolContext(e.target.value)}
                    placeholder="e.g. Greenwich Public / Independent"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8EEF3] dark:border-neutral-700 bg-white dark:bg-neutral-800 text-xs text-[#1B2A4A] dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#8FA590]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1B2A4A] dark:text-neutral-200 mb-1.5 font-sans">
                  Primary Area of Focus / Clinical Service
                </label>
                <select
                  value={serviceFocus}
                  onChange={(e) => setServiceFocus(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8EEF3] dark:border-neutral-700 bg-white dark:bg-neutral-800 text-xs text-[#1B2A4A] dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#8FA590]"
                >
                  <option value="Testing & assessment">Comprehensive Psychoeducational &amp; Diagnostic Evaluation</option>
                  <option value="Psychotherapy for OCD & Anxiety">Pediatric Psychotherapy (OCD / ERP, Anxiety, Tic Disorders)</option>
                  <option value="504 / IEP School Advocacy">504 Plan / IEP Advocacy &amp; PPT School Representation</option>
                  <option value="Neurotherapy & Self-Regulation">Brain-Based Neurotherapy &amp; Self-Regulation</option>
                  <option value="General Consultation">General Consultation / Unsure of exact needs</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1B2A4A] dark:text-neutral-200 mb-1.5 font-sans">
                  What would be most helpful for Dr. McNulty to know about your child?
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share a brief overview of your child’s challenges, previous evaluations, school dynamics, or immediate concerns..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8EEF3] dark:border-neutral-700 bg-white dark:bg-neutral-800 text-xs text-[#1B2A4A] dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#8FA590] resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[11px] text-[#627D98] font-sans">
                  <ShieldCheck size={14} className="text-[#7A9A8B] shrink-0" />
                  <span>Confidential HIPAA-compliant clinical transmission</span>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1B2A4A] hover:bg-[#253961] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <span>Submitting inquiry...</span>
                  ) : (
                    <>
                      <Send size={14} className="text-[#C59B27]" />
                      <span>Request Private Consultation</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
