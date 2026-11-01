import { FrameConfig } from '../types.ts';
import { PRACTICE_CONTACT_CONFIG } from '../config/practiceContact.ts';

export const SUNSET_ORIGINAL = '/public/assets/sunset_original_upscaled.png';
export const HERO_OFFICE = '/src/assets/images/psychology_hero_office_1793058351701.jpg';
export const THERAPY_SPACE = '/src/assets/images/therapy_session_space_1793058350700.jpg';

// Dedicated Practice Communication (Centralized in src/config/practiceContact.ts)
export const PRACTICE_PHONE_DISPLAY = PRACTICE_CONTACT_CONFIG.phone.display;
export const PRACTICE_PHONE_RAW = PRACTICE_CONTACT_CONFIG.phone.raw;
export const PRACTICE_SMS_PREFILL = PRACTICE_CONTACT_CONFIG.phone.smsPrefill;
export const PRACTICE_INQUIRY_EMAIL = PRACTICE_CONTACT_CONFIG.email.inquiryRecipient;
export const ZOOM_CHAT_LINK = 'https://zoom.us/chat';

// Cycling Tagline Options for Hero Section
export const HERO_TAGLINES = [
  'Where Deep Clinical Insight Meets Decisive School Advocacy.',
  'The Intersection of Testing, Therapy, and School Advocacy.',
  'Holistic Support for Your Child and Family.',
];

export const FRAME_PRESETS: FrameConfig[] = [
  {
    id: 'cam_greenwich',
    name: 'CAM Child & Family Psychology · Greenwich, CT',
    brandName: 'CAM Child & Family Psychology',
    headline: HERO_TAGLINES[0],
    subhead: 'Specialized pediatric psychology, assessment, and school advocacy with Dr. Catherine McNulty, PhD · Greenwich, CT & Tri-State Area',
    primaryCta: 'Connect with Dr. McNulty',
    secondaryCta: 'Our Approach',
    accentColor: 'stone',
    accentHex: '#1F242B',
    heroImage: SUNSET_ORIGINAL,
    kpiStats: [
      { metric: 'Greenwich & NY', label: 'Specialized Private Practice', context: 'serving Fairfield County & Westchester independent & public school families' },
      { metric: 'Ph.D.', label: 'Doctorate in Clinical Psychology', context: 'pediatric & adolescent developmental specialization' },
      { metric: '1-on-1', label: 'Dedicated Solo Practitioner', context: 'every session, assessment, and school call led directly by Dr. McNulty' },
      { metric: '20+ Yrs', label: 'Clinical & School Psychology', context: 'spanning private practice clinical psychology & public school district leadership' },
    ],
    showcaseCards: [
      {
        id: 'serv1',
        number: '01 / CONNECT',
        title: 'Psychotherapy',
        description: 'A supportive, confidential sanctuary to understand feelings, develop emotional regulation, and navigate the pressures of childhood and adolescence.',
        image: HERO_OFFICE,
        aspectRatio: '16:9',
        spanClass: 'lg:col-span-2',
        tag: '01 / CONNECT',
      },
      {
        id: 'serv2',
        number: '02 / REGULATE',
        title: 'Neurotherapy',
        description: 'A gentle, individualized approach exploring brain-based self-regulation for attention, impulsivity, and executive functioning.',
        image: THERAPY_SPACE,
        aspectRatio: '4:3',
        spanClass: 'lg:col-span-1',
        tag: '02 / REGULATE',
      },
      {
        id: 'serv3',
        number: '03 / UNDERSTAND',
        title: 'Testing & assessment',
        description: 'A clearer picture of your child’s cognitive strengths, learning profile, and emotional needs—with practical, non-jargon next steps.',
        image: SUNSET_ORIGINAL,
        aspectRatio: '4:3',
        spanClass: 'lg:col-span-1',
        tag: '03 / UNDERSTAND',
      },
      {
        id: 'serv4',
        number: '04 / ADVOCATE',
        title: 'Educational advocacy',
        description: 'Collaborative partnership for Greenwich and Connecticut school conversations, 504/IEP accommodations, and an educational environment that fits.',
        image: SUNSET_ORIGINAL,
        aspectRatio: '16:9',
        spanClass: 'lg:col-span-2',
        tag: '04 / ADVOCATE',
      },
    ],
    caseStudies: [
      {
        id: 'schools_pillar',
        client: 'In the Schools · Collaborative Advocacy',
        year: 'Educational System',
        impact: 'Bridging Clinical Insight with Real-World Classrooms',
        description: 'Decades of experience collaborating with teachers, learning specialists, and admissions teams across Greenwich independent schools and Fairfield County public districts. We translate neuropsychological insights into workable accommodations.',
        deliverables: ['PPT & 504 Plan Guidance', 'Direct Educator Collaboration', 'Classroom Accommodation Plans'],
      },
      {
        id: 'testing_pillar',
        client: 'In Comprehensive Testing & Assessment',
        year: 'Diagnostic Clarity',
        impact: 'Actionable Roadmaps, Not Heavy Jargon',
        description: 'Uncovering the underlying reasons behind school hurdles, executive functioning challenges, or sudden behavioral shifts. Testing is conducted in an unhurried, encouraging environment designed to keep your child comfortable.',
        deliverables: ['Neuropsychological Evaluations', 'ADHD & Executive Functioning', 'Learning Differences (Dyslexia)'],
      },
      {
        id: 'therapy_pillar',
        client: 'In Clinical Psychotherapy & Regulation',
        year: 'Emotional Resilience',
        impact: 'Individualized Evidence-Based Care',
        description: 'Supporting high-achieving students, anxious children, and teens with individualized cognitive-behavioral and mindfulness tools that fit their authentic life and family environment.',
        deliverables: ['Anxiety & Perfectionism', 'Neurotherapy / Self-Regulation', 'Family Guidance & Communication'],
      },
    ],
  },
];
