import React from 'react';
import { ArrowLeft, GraduationCap, ShieldCheck, Award, HeartHandshake, CheckCircle2, Clock, MapPin, Sparkles, UserCheck } from 'lucide-react';
import { ThemeMode } from '../types.ts';

interface AboutPageProps {
  theme: ThemeMode;
  onNavigateHome: () => void;
  onRequestConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  theme,
  onNavigateHome,
  onRequestConsultation,
}) => {
  const clinicalSpecialties = [
    { title: 'Obsessive-Compulsive Disorder (OCD)', desc: 'Evidence-based cognitive-behavioral and exposure-focused treatment tailored to children and teens.' },
    { title: 'Anxiety Disorders', desc: 'Practical coping strategies for generalized anxiety, social anxiety, school phobia, and acute panic.' },
    { title: 'Tic Disorders', desc: 'Specialized behavioral interventions and supportive regulation for motor and vocal tic conditions.' },
    { title: 'Psychoeducational Evaluations', desc: 'In-depth cognitive, academic, and neurodevelopmental assessments that provide diagnostic clarity.' },
    { title: '504 / IEP Advocacy & Development', desc: 'Insider school district knowledge ensuring accommodations and IEP services are written and implemented effectively.' },
  ];

  return (
    <div className="bg-white min-h-screen text-[#102A43]">
      {/* Header Banner */}
      <div className="border-b border-[#E2ECF3] bg-[#F7FAFD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#486581] hover:text-[#102A43] mb-4 transition-colors cursor-pointer"
          >
            <ArrowLeft size={14} /> Back to Home Overview
          </button>
          
          <div className="inline-flex items-center px-3 py-1 rounded-md bg-[#EBF3F9] border border-[#D5E5F2] text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#335C80] mb-3 font-mono">
            /about · Dr. Catherine McNulty, PhD
          </div>
          
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display text-[#102A43] mb-3 sm:mb-4">
            About Dr. Catherine McNulty, PhD
          </h1>
          
          <p className="text-sm sm:text-base lg:text-lg text-[#244F75] max-w-3xl leading-relaxed">
            A trusted clinical child psychologist with over two decades of clinical experience and extensive leadership running special education at a premier public school district in Westchester County, NY.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Profile Crest & Quick Facts Column */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-[#D5E5F2] bg-[#F0F6FA] shadow-xs">
              <div className="p-8 sm:p-10 flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#E8F2F8] to-[#F7FAFD] border-b border-[#D5E5F2]">
                <div className="w-24 h-24 rounded-full bg-[#102A43] text-white flex items-center justify-center shadow-md ring-4 ring-[#BCD6E8]/50 mb-4">
                  <span className="font-display font-bold text-3xl tracking-tight text-white">
                    CM
                  </span>
                </div>
                <h3 className="font-bold text-xl text-[#102A43] font-display mb-1">
                  Dr. Catherine McNulty, PhD
                </h3>
                <p className="text-xs text-[#165664] font-mono font-medium">
                  Licensed Clinical Psychologist
                </p>
                <div className="text-xs text-[#627D98] mt-1.5">
                  Connecticut & New York · Serving the Tri-State Area
                </div>
              </div>
              <div className="p-5 bg-white border-t border-[#D5E5F2]">
                <div className="flex items-center gap-1.5 text-xs text-[#627D98]">
                  <MapPin size={13} className="shrink-0 text-[#1B365D]" />
                  <span>Specialized Private Practice · Greenwich, CT</span>
                </div>
                <div className="text-[11px] text-[#486581] mt-1.5">
                  In-person sessions in Greenwich, CT & secure telehealth across CT & NY
                </div>
              </div>
            </div>

            {/* Leadership Distinction Box */}
            <div className="mt-6 p-5 rounded-xl bg-[#F7FAFD] border border-[#E2ECF3] space-y-3.5 text-xs">
              <div className="font-bold text-[#102A43] font-mono uppercase tracking-wider text-[11px]">
                Distinguished Background
              </div>
              <div className="flex items-start gap-2.5 text-[#486581]">
                <Award size={15} className="text-[#1B365D] shrink-0 mt-0.5" />
                <span><strong>Former Director of Special Services</strong> and Special Education Supervisor at Katonah-Lewisboro Union Free School District (Westchester, NY).</span>
              </div>
              <div className="flex items-start gap-2.5 text-[#486581]">
                <Clock size={15} className="text-[#1B365D] shrink-0 mt-0.5" />
                <span><strong>Over Two Decades Experience</strong> leading teams of 75+ professionals, overseeing therapeutic programs, and developing IEPs.</span>
              </div>
              <div className="flex items-start gap-2.5 text-[#486581]">
                <HeartHandshake size={15} className="text-[#1B365D] shrink-0 mt-0.5" />
                <span><strong>Mother of Three</strong> school-aged children, offering an empathetic lived perspective on academic and family pressures.</span>
              </div>
              <div className="flex items-start gap-2.5 text-[#486581]">
                <ShieldCheck size={15} className="text-[#1B365D] shrink-0 mt-0.5" />
                <span><strong>Solo Caseload</strong> providing discreet, uninterrupted one-on-one attention for every client.</span>
              </div>
            </div>
          </div>

          {/* Detailed Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#102A43] mb-4">
                Clinical Expertise & District Leadership
              </h2>
              <p className="text-base text-[#244F75] leading-relaxed mb-4">
                Dr. Catherine McNulty is a dedicated practitioner in pediatric and adolescent psychology, bringing with her over two decades of experience. She specializes in evaluating and treating young people with <strong>anxiety disorders, obsessive-compulsive disorder (OCD), and tic disorders</strong>, as well as conducting in-depth psychoeducational assessments and formulating individualized education programs (IEPs).
              </p>
              <p className="text-sm text-[#486581] leading-relaxed mb-4">
                Alongside her private practice work in Greenwich, Dr. McNulty served as a prominent leader in the Special Services department at the <strong>Katonah-Lewisboro Union Free School District in Katonah, NY</strong>. Throughout her tenure in the district, she collaborated extensively with children, parents, district administration, private treatment providers, classroom teachers, and clinical teams to engineer tailored academic and emotional supports.
              </p>
              <p className="text-sm text-[#486581] leading-relaxed">
                In her administrative roles—including <strong>Special Education Supervisor and Director of Special Services</strong>—she was responsible for developing individualized educational plans, overseeing district-wide therapeutic programs, and managing a team of over <strong>75 professionals</strong> dedicated to supporting students with disabilities. This rare combination of high-level school administrative authority and direct clinical practice allows her to advocate for children with unmatched effectiveness.
              </p>
            </div>

            {/* Clinical Specialties Grid */}
            <div className="pt-6 border-t border-[#E2ECF3]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#102A43] font-mono mb-4">
                Core Clinical Specialties
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {clinicalSpecialties.map((spec, i) => (
                  <div key={i} className="p-3.5 rounded-xl border border-[#D5E5F2] bg-[#F7FAFD]">
                    <div className="font-bold text-xs text-[#102A43] mb-1 font-display">
                      {spec.title}
                    </div>
                    <p className="text-[11px] text-[#486581] leading-relaxed">
                      {spec.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* The Three Guiding Principles */}
            <div className="pt-6 border-t border-[#E2ECF3]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#102A43] font-mono mb-4">
                Guiding Principles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl border border-[#D5E5F2] bg-[#F7FAFD] flex flex-col justify-between">
                  <div>
                    <div className="min-h-[2.5rem] flex items-start mb-1">
                      <h4 className="font-bold text-sm text-[#102A43] font-display">Continuity in Care</h4>
                    </div>
                    <p className="text-xs text-[#486581] leading-relaxed">
                      From initial evaluation through school implementation and lasting classroom advocacy.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-[#D5E5F2] bg-[#F7FAFD] flex flex-col justify-between">
                  <div>
                    <div className="min-h-[2.5rem] flex items-start mb-1">
                      <h4 className="font-bold text-sm text-[#102A43] font-display">Accessible Provider</h4>
                    </div>
                    <p className="text-xs text-[#486581] leading-relaxed">
                      Direct, unhurried access to Dr. McNulty with responsive communication and care.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-[#D5E5F2] bg-[#F7FAFD] flex flex-col justify-between">
                  <div>
                    <div className="min-h-[2.5rem] flex items-start mb-1">
                      <h4 className="font-bold text-sm text-[#102A43] font-display">Actionable Insights</h4>
                    </div>
                    <p className="text-xs text-[#486581] leading-relaxed">
                      Built on developmental science paired with practical, real-world school solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* District & Clinical Foundations */}
            <div className="pt-6 border-t border-[#E2ECF3]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#102A43] font-mono mb-4">
                Dr. McNulty’s Integrated Foundations
              </h3>
              
              <div className="space-y-3.5 text-xs">
                <div className="p-4 rounded-xl border border-[#D5E5F2] bg-white">
                  <div className="font-bold text-sm text-[#102A43] mb-1 flex items-center gap-2">
                    <Award size={15} className="text-[#1B365D]" />
                    <span>Special Education Leadership (Westchester, NY)</span>
                  </div>
                  <p className="text-[#486581] leading-relaxed">
                    Distinguished leadership supervising special services in Katonah-Lewisboro. Dr. McNulty chaired CSE/PPT committees, directed therapeutic programs, and managed 75+ educators and clinicians—giving her insider expertise on how schools make accommodation determinations.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-[#D5E5F2] bg-white">
                  <div className="font-bold text-sm text-[#102A43] mb-1 flex items-center gap-2">
                    <Sparkles size={15} className="text-[#1B365D]" />
                    <span>Evidence-Based Child & Adolescent Psychotherapy</span>
                  </div>
                  <p className="text-[#486581] leading-relaxed">
                    Prior to establishing CAM Child &amp; Family Psychology, Dr. McNulty practiced at a leading private psychology practice in Greenwich, providing specialized evidence-based care for children and adolescents with OCD, anxiety disorders, and tic disorders. Therapy is active, goal-oriented, and deeply compassionate.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-[#D5E5F2] bg-white">
                  <div className="font-bold text-sm text-[#102A43] mb-1 flex items-center gap-2">
                    <UserCheck size={15} className="text-[#1B365D]" />
                    <span>Mother of Three & School Psychologist Perspective</span>
                  </div>
                  <p className="text-[#486581] leading-relaxed">
                    Combining clinical science with the real-world experience of raising three school-aged children, Dr. McNulty understands family schedules, homework battles, and emotional dynamics from both sides of the table.
                  </p>
                </div>
              </div>
            </div>

            {/* Credentials & Memberships */}
            <div className="pt-6 border-t border-[#E2ECF3]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#102A43] font-mono mb-4">
                Credentials & Professional Affiliations
              </h3>
              <ul className="space-y-2 text-xs text-[#486581]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#1B365D] shrink-0" />
                  <span>Doctor of Philosophy (PhD) in Clinical Psychology, Child & Adolescent Specialization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#1B365D] shrink-0" />
                  <span>Licensed Clinical Psychologist, State of Connecticut & State of New York (Serving the Tri-State Area)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#1B365D] shrink-0" />
                  <span>Former Director of Special Services & Special Education Supervisor, Katonah-Lewisboro UFSD</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#1B365D] shrink-0" />
                  <span>Member, American Psychological Association (APA) - Division 53 (Child & Adolescent)</span>
                </li>
              </ul>
            </div>

            {/* Action */}
            <div className="pt-6">
              <button
                onClick={onRequestConsultation}
                className="px-6 py-3 rounded-lg text-xs font-semibold bg-[#102A43] hover:bg-[#1B365D] text-white transition-all shadow-xs cursor-pointer"
              >
                Request a Private Consultation with Dr. McNulty
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
