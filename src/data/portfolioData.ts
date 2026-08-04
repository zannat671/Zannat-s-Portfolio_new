import { Project, ExperienceItem, AwardItem, AccentColor } from '../types';

export const ACCENT_COLORS: AccentColor[] = [
  { id: 'electric-blue', name: 'Electric Blue (Default)', hex: '#3B82F6' },
  { id: 'warm-gold', name: 'Warm Gold', hex: '#E8B44C' },
  { id: 'sage-green', name: 'Sage Green', hex: '#10B981' },
  { id: 'sunset-coral', name: 'Sunset Coral', hex: '#F97316' },
  { id: 'mono-white', name: 'Pure Monolithic', hex: '#FFFFFF' },
];

export const PROJECTS: Project[] = [
  {
    id: 'eraf-arch',
    title: 'AURA ARCHITECTURE',
    subtitle: 'Monolithic Spatial Design & Digital Archive',
    category: 'Digital Products',
    year: '2026',
    client: 'Aura Studio Tokyo',
    role: 'Lead Interactive Architect',
    description: 'A dark, typographic luxury digital archive showcasing experimental Scandinavian architecture through high-contrast imagery and fluid page choreography.',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85'
    ],
    metrics: [
      { label: 'Session Duration', value: '+320%' },
      { label: 'Design Index Score', value: '99/100' },
      { label: 'Awwwards SOTD', value: 'Winner' }
    ],
    tags: ['Interactive WebGL', 'Space Grotesk', 'Editorial Layout', 'Design Systems'],
    featured: true,
    link: 'https://aura-architects.example.com',
    caseStudy: {
      overview: 'Aura Architecture needed a bespoke digital experience that mirrored their physical architectural philosophy: stark geometry, warm lighting, and deliberate spatial rhythm.',
      challenge: 'Standard portfolio grid systems failed to capture the tactile scale and shadow play of concrete and timber construction.',
      solution: 'We engineered an oversized typographic hierarchy paired with infinite inertia scrolling, seamless WebGL image transitions, and fluid light/dark mode adaptation.',
      impact: 'Secured international architectural press coverage and generated $4.2M in qualified project inquiries within 60 days of launch.',
      typographyUsed: 'Space Grotesk Display & Inter Variable',
      colorPalette: ['#0D0D0D', '#F5F4EF', '#3B82F6', '#2A2A26'],
      testimonial: {
        quote: 'The editorial precision of ERAF turned our digital presence into an artwork in its own right. Prospective clients immediately grasp our caliber.',
        author: 'Kenzo Takahashi',
        role: 'Founder & Principal Architect',
        company: 'Aura Studio Tokyo'
      }
    }
  },
  {
    id: 'chronos-timepiece',
    title: 'CHRONOS HOROLOGY',
    subtitle: 'Luxury Swiss Watchmaker Brand Identity & E-Commerce',
    category: 'Brand Systems',
    year: '2025',
    client: 'Chronos SA, Geneva',
    role: 'Creative & Brand Director',
    description: 'Complete visual repositioning, custom typography suite, and immersive e-commerce experience for an independent haute horlogerie atelier.',
    coverImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=85'
    ],
    metrics: [
      { label: 'E-Commerce Conversion', value: '+142%' },
      { label: 'Average Order Value', value: '€28,500' },
      { label: 'Brand Perception Index', value: 'Top 3 Global' }
    ],
    tags: ['Brand Identity', 'Custom Typography', 'E-Commerce', '3D Configurator'],
    featured: true,
    link: 'https://chronos-geneva.example.com',
    caseStudy: {
      overview: 'Chronos required a transition from traditional heritage horology into the digital avant-garde without sacrificing Swiss precision.',
      challenge: 'Connecting ultra-high net worth collectors with digital purchasing flows that feel as intimate as a private appointment in Geneva.',
      solution: 'Constructed an editorial magazine layout interwoven with 3D mechanical watch rotators and a warm gold metallic accent hierarchy.',
      impact: 'Sold out the initial edition of 50 bespoke timepieces in under 18 minutes during digital pre-orders.',
      typographyUsed: 'Custom Chronos Display & Inter Mono',
      colorPalette: ['#0A0A0A', '#F5F4EF', '#3B82F6', '#1C1B18'],
      testimonial: {
        quote: 'An incredible mastery of editorial elegance. ERAF delivered a digital flagship that feels as crafted as a tourbillon movement.',
        author: 'Elena Vance-Borel',
        role: 'Chief Marketing Officer',
        company: 'Chronos SA'
      }
    }
  },
  {
    id: 'kanso-sound',
    title: 'KANSO ACOUSTICS',
    subtitle: 'Minimalist Hi-Fi Audio Interface & Motion System',
    category: 'Motion & Spatial',
    year: '2025',
    client: 'Kanso Labs Stockholm',
    role: 'Lead UI/UX & Motion Designer',
    description: 'An acoustic wave visualization interface and brand language designed for audiophiles seeking raw purity in digital sound sculpture.',
    coverImage: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=85'
    ],
    metrics: [
      { label: 'Active Monthly Listeners', value: '1.2M+' },
      { label: 'User Rating', value: '4.9/5.0' },
      { label: 'Red Dot Design Award', value: 'Best of Best' }
    ],
    tags: ['Audio Processing', 'Motion Choreography', 'Dark Minimalist UI', 'iOS & Web App'],
    featured: true,
    caseStudy: {
      overview: 'Kanso Sound engineered hi-fidelity physical speakers and wanted an accompanying digital suite that reacts in real-time to room acoustic resonance.',
      challenge: 'Visualizing subtle frequency dynamics on low-power mobile OLED screens while maintaining ultra-low latency.',
      solution: 'Created an adaptive canvas engine that converts audio spectrums into fluid, gold-accented vector waves using custom shaders.',
      impact: 'Featured on Apple Design Awards shortlist and adopted by over 200 pro audio mastering studios.',
      typographyUsed: 'Space Grotesk & Inter Light',
      colorPalette: ['#0D0D0D', '#F5F4EF', '#3B82F6', '#33322E'],
      testimonial: {
        quote: 'ERAF brought visual soul to high-end audio engineering. Their work set the standard for modern music interface design.',
        author: 'Lars Lindqvist',
        role: 'Head of Sound Engineering',
        company: 'Kanso Labs'
      }
    }
  },
  {
    id: 'nordic-monograph',
    title: 'NORDIC MONOGRAPH',
    subtitle: 'Printed Editorial Publication & Digital Companion',
    category: 'Art Direction',
    year: '2024',
    client: 'Copenhagen Press',
    role: 'Art Director & Editorial Designer',
    description: 'A hardcover 400-page monograph documenting 20th-century Nordic furniture design alongside a synchronized digital specimen web magazine.',
    coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=85'
    ],
    metrics: [
      { label: 'Copies Sold', value: '25,000+' },
      { label: 'Tokyo TDC Award', value: 'Excellence' },
      { label: 'Web Traffic', value: '450k Reads' }
    ],
    tags: ['Editorial Publishing', 'Grid Architecture', 'Typography Specimen', 'Print & Screen'],
    featured: false,
    caseStudy: {
      overview: 'Translating the tactile weight of uncoated Scandinavian paper into a responsive screen experience with zero compromise on typographical grid fidelity.',
      challenge: 'Balancing multi-column layout flows across desktop and mobile devices without losing graphic balance.',
      solution: 'Designed a variable column grid engine in CSS with fluid baseline typography and modular footnotes.',
      impact: 'Received international acclaim from Eye Magazine and It’s Nice That.',
      typographyUsed: 'Space Grotesk Editorial & Inter Regular',
      colorPalette: ['#0F0E0C', '#F5F4EF', '#3B82F6'],
      testimonial: {
        quote: 'A masterpiece of typography. ERAF respects print craftsmanship while elevating digital publishing.',
        author: 'Astrid Møller',
        role: 'Publisher',
        company: 'Copenhagen Press'
      }
    }
  },
  {
    id: 'synapse-ai',
    title: 'SYNAPSE NEURAL',
    subtitle: 'Enterprise AI Intelligence Dashboard & Command Suite',
    category: 'Digital Products',
    year: '2026',
    client: 'Synapse Inc, San Francisco',
    role: 'Principal Design System Architect',
    description: 'A dark-mode high-density telemetry platform transforming complex LLM parameters into effortless intuitive data landscapes.',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85'
    ],
    metrics: [
      { label: 'Task Execution Speed', value: '3.4x Faster' },
      { label: 'User Fatigue Index', value: '-65%' },
      { label: 'Enterprise ARR Impact', value: '+$14M' }
    ],
    tags: ['AI Interface', 'Data Visualization', 'Dark Mode UI', 'Design System'],
    featured: true,
    caseStudy: {
      overview: 'Synapse provides real-time neural network diagnostics for autonomous systems, requiring a UI that remains strain-free over 12-hour monitoring shifts.',
      challenge: 'Preventing cognitive overload when rendering millions of concurrent neural pathways and log outputs.',
      solution: 'Applied editorial typography principles with gold spatial markers, collapsible modular drawers, and ultra-high contrast dark accents.',
      impact: 'Adopted by aerospace and robotic engineering teams across 18 Fortune 500 companies.',
      typographyUsed: 'Space Grotesk Data & Inter Pro',
      colorPalette: ['#0A0A0B', '#F5F4EF', '#3B82F6', '#222228'],
      testimonial: {
        quote: 'ERAF made enterprise AI monitoring look like a sci-fi film while dramatically reducing operator errors.',
        author: 'Dr. Aris Vance',
        role: 'Chief Technology Officer',
        company: 'Synapse AI'
      }
    }
  },
  {
    id: 'solaris-spatial',
    title: 'SOLARIS PAVILION',
    subtitle: 'Interactive Solar Installation & Generative Identity',
    category: 'Art Direction',
    year: '2025',
    client: 'Venice Biennale of Architecture',
    role: 'Creative Technologist',
    description: 'An interactive pavilion responsive to real-time solar radiation data, pairing physical kinetic light columns with a dynamic identity system.',
    coverImage: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85'
    ],
    metrics: [
      { label: 'Visitors Experienced', value: '180,000+' },
      { label: 'Biennale Gold Lion', value: 'Nominee' }
    ],
    tags: ['Generative Identity', 'Installation Art', 'Data Art', 'Environmental'],
    featured: false,
    caseStudy: {
      overview: 'Representing solar thermodynamics through physical geometry and reactive digital projection at the Venice Biennale.',
      challenge: 'Synchronizing physical motor actuators with web-based real-time telemetry.',
      solution: 'Designed a unified visual language driven by light angles, translated into typography that expands and contracts with sunlight intensity.',
      impact: 'Featured as the top pavilion highlight by Frame Magazine and Architectural Digest.',
      typographyUsed: 'Space Grotesk Variable & Inter Medium',
      colorPalette: ['#0D0D0D', '#F5F4EF', '#3B82F6'],
      testimonial: {
        quote: 'Poetic, rigorous, and visually striking. ERAF transformed raw environmental data into pure emotion.',
        author: 'Giulia Romani',
        role: 'Curator',
        company: 'Venice Architecture Biennale'
      }
    }
  }
];

export const MARQUEE_ITEMS = [
  'EDITORIAL UI/UX ARCHITECTURE',
  '•',
  'OVERSIZED TYPOGRAPHY',
  '•',
  'BRAND IDENTITIES',
  '•',
  'INTERACTIVE WEBGL',
  '•',
  'MINIMALIST SPATIAL DESIGN',
  '•',
  'DESIGN SYSTEMS',
  '•',
  'AWWWARDS & FWA WINNER',
  '•',
  'DIGITAL CRAFTSMANSHIP',
  '•',
  'DARK LUXURY AESTHETICS',
  '•'
];

export const PHILOSOPHY_MANIFESTO = [
  {
    num: '01',
    title: 'TYPOGRAPHY IS SPATIAL STRUCTURE',
    description: 'Letterforms are not merely vehicle for words; they are architectural elements that establish rhythm, density, and emotional weight.'
  },
  {
    num: '02',
    title: 'RADICAL RESTRAINT OVER NOISE',
    description: 'True visual luxury emerges from removing every unnecessary line until only pure form and intentional negative space remain.'
  },
  {
    num: '03',
    title: 'FLUID LIGHT & SHADOW DRAMA',
    description: 'A modern digital surface should react seamlessly to environment—transitioning from deep dark void to crisp editorial paper without breaking hierarchy.'
  },
  {
    num: '04',
    title: 'FULL-STACK CRAFTSMANSHIP',
    description: 'Designing without technical mastery is like drawing architecture without understanding gravity. Precision code is the final brushstroke.'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: '2023 — PRESENT',
    role: 'Principal Creative Director & Designer',
    company: 'ERAF Design Studio',
    location: 'Tokyo & Remote',
    description: 'Directing bespoke brand identities, interactive digital experiences, and design systems for global luxury, architecture, and technology clients.',
    highlights: [
      'Led digital transformation for 12+ luxury & architectural brands',
      'Awarded 4x Awwwards Site of the Day and 2x FWA of the Month',
      'Established signature typographic design system framework'
    ]
  },
  {
    period: '2021 — 2023',
    role: 'Lead Interaction Designer',
    company: 'Blacklead Creative Berlin',
    location: 'Berlin, Germany',
    description: 'Spearheaded key digital campaigns and web products for high-profile European fashion houses and audio tech pioneers.',
    highlights: [
      'Architected design system scaled across 14 European markets',
      'Mentored a team of 8 junior & senior interactive designers',
      'Increased average client engagement time by 180%'
    ]
  },
  {
    period: '2019 — 2021',
    role: 'Senior Brand & UI Designer',
    company: 'Kyu Atelier Kyoto',
    location: 'Kyoto, Japan',
    description: 'Crafted minimalist identities and e-commerce platforms rooted in Japanese aesthetic principles (Wabi-sabi & Ma).',
    highlights: [
      'Designed Tokyo TDC winning monograph book and web companion',
      'Pioneered dark-mode editorial layout patterns for high-end retail'
    ]
  }
];

export const AWARDS: AwardItem[] = [
  { year: '2026', title: 'Site of the Day', organization: 'Awwwards', projectTitle: 'Aura Architecture Archive' },
  { year: '2025', title: 'Best of Best (Design Systems)', organization: 'Red Dot Awards', projectTitle: 'Kanso Acoustics UI' },
  { year: '2025', title: 'FWA of the Month', organization: 'FWA Awards', projectTitle: 'Chronos Horology Geneva' },
  { year: '2024', title: 'Excellence in Typography', organization: 'Tokyo TDC', projectTitle: 'Nordic Monograph' },
  { year: '2024', title: 'Studio of the Year Nominee', organization: 'CSS Design Awards', projectTitle: 'ERAF Portfolio Suite' }
];

export const STATS = [
  { label: 'Years of Practice', value: '08+' },
  { label: 'Global Design Awards', value: '16' },
  { label: 'High-Impact Projects', value: '42' },
  { label: 'Client Satisfaction Index', value: '100%' }
];
