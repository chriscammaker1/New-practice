export type ViewportMode = 'desktop' | 'tablet' | 'mobile' | 'fluid';
export type ThemeMode = 'dark' | 'light';
export type PageMode = 'home' | 'services' | 'about' | 'faq';

export interface FrameConfig {
  id: string;
  name: string;
  brandName: string;
  headline: string;
  subhead: string;
  primaryCta: string;
  secondaryCta: string;
  accentColor: string; // Tailwind color class or hex
  accentHex: string;
  kpiStats: {
    metric: string;
    label: string;
    context: string;
  }[];
  heroImage: string;
  showcaseCards: {
    id: string;
    number: string;
    title: string;
    description: string;
    image: string;
    aspectRatio: string;
    spanClass: string;
    tag: string;
  }[];
  caseStudies: {
    id: string;
    client: string;
    year: string;
    impact: string;
    description: string;
    deliverables: string[];
  }[];
}
