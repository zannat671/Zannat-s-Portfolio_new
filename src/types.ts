export type ThemeMode = 'dark' | 'light';

export type AccentColor = {
  id: string;
  name: string;
  hex: string;
};

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Digital Products' | 'Brand Systems' | 'Art Direction' | 'Motion & Spatial';
  year: string;
  client: string;
  role: string;
  description: string;
  coverImage: string;
  galleryImages: string[];
  metrics?: { label: string; value: string }[];
  tags: string[];
  featured: boolean;
  link?: string;
  caseStudy: {
    overview: string;
    challenge: string;
    solution: string;
    impact: string;
    typographyUsed?: string;
    colorPalette?: string[];
    testimonial?: {
      quote: string;
      author: string;
      role: string;
      company: string;
    };
  };
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface AwardItem {
  year: string;
  title: string;
  organization: string;
  projectTitle: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  budget: string;
  service: string;
  message: string;
}
