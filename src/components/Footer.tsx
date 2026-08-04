import React from 'react';
import { ArrowUp } from 'lucide-react';
import { AccentColor } from '../types';

interface FooterProps {
  activeAccent: AccentColor;
}

export const Footer: React.FC<FooterProps> = ({ activeAccent }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { label: 'X (TWITTER)', url: 'https://twitter.com' },
    { label: 'READ.CV', url: 'https://read.cv' },
    { label: 'ARE.NA', url: 'https://are.na' },
    { label: 'DRIBBBLE', url: 'https://dribbble.com' },
    { label: 'GITHUB', url: 'https://github.com' },
    { label: 'LINKEDIN', url: 'https://linkedin.com' },
  ];

  return (
    <footer className="py-16 border-t border-theme bg-main relative text-xs">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-theme">
          <div>
            <span className="font-heading font-extrabold text-3xl tracking-tight text-main block mb-2">
              ERAF — STUDIO
            </span>
            <span className="text-muted-custom uppercase tracking-wider block">
              EDITORIAL UI/UX ARCHITECTURE & BRAND DIRECTION
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-5 py-3 border border-theme hover:border-accent-custom transition-all text-main uppercase font-bold tracking-wider"
              style={{ color: activeAccent.hex }}
            >
              <span>Back To Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-between text-muted-custom uppercase tracking-wider">
          <div className="flex flex-wrap items-center gap-6">
            {socialLinks.map((s, idx) => (
              <a
                key={idx}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-main transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>

          <div className="text-left md:text-right text-[11px]">
            © {new Date().getFullYear()} ERAF STUDIO. ALL RIGHTS RESERVED. <br />
            SET IN SPACE GROTESK & INTER.
          </div>
        </div>
      </div>
    </footer>
  );
};
