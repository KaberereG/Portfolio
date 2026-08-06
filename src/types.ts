export interface Skill {
  id: string;
  number: string;
  name: string;
  category: string;
  masteryLevel: number; // 0-100
  experienceYears: number;
  description: string;
  highlights: string[];
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  company?: string;
  description: string;
  details: string[];
  technologies: string[];
}

export interface WizardState {
  platform: 'web' | 'android' | 'fullstack' | '';
  scope: 'mvp' | 'scaling' | 'enterprise' | '';
  designStyle: 'minimalist' | 'brutalist' | 'immersive' | '';
  timeline: 'urgent' | 'standard' | 'flexible' | '';
  clientEmail: string;
  clientMessage: string;
  website: string; // Honeypot field
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export interface Project {
  id: string;
  name: string;
  images: string[];
  description: string;
  link:string;
  technologies:string
}
