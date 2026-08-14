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

export interface ProjectContribution {
  title: string;
  description: string;
  impact?: string;
  tags?: string[];
}

export interface ProjectScreenshot {
  id: string;
  title: string;
  caption: string;
  type: 'dashboard' | 'mobile' | 'web';
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  company?: string;
  location?: string;
  category: string;
  images: string[];
  summary: string;
  fullDescription: string;
  imageType: 'treebula' | 'shaba' | 'telemetry';
  mockupType: 'dashboard' | 'mobile' | 'web';
  externalUrl?: string;
  metrics: { label: string; value: string; description?: string }[];
  keyContributions: ProjectContribution[];
  techStack: string[];
  screenshots: ProjectScreenshot[];
  challenges: { problem: string; solution: string }[];
}
