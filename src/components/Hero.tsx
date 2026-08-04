import React from 'react';
import { ArrowDownRight, Sparkles, Award, Globe, ArrowUpRight } from 'lucide-react';
import { AccentColor } from '../types';
import { STATS } from '../data/portfolioData';

interface HeroProps {
  activeAccent: AccentColor;
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ activeAccent, onExploreClick, onContactClick }) => {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Index Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-theme pb-6 mb-12 gap-4">
          <div className="flex items-center gap-3">
            <span
              className="text-xs font-mono px-2.5 py-1 rounded-sm border uppercase tracking-widest font-semibold"
              style={{
                borderColor: `${activeAccent.hex}40`,
                backgroundColor: `${activeAccent.hex}10`,
                color: activeAccent.hex,
              }}
            >
              [ INDEX — 2026 ]
            </span>
            <span className="text-xs tracking-widest uppercase text-muted-custom">
              ERAF / BLACKLEAD STUDIO INSPIRED
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-muted-custom">
            <span>TOKYO • BERLIN • STOCKHOLM</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">EDITORIAL UI & BRAND ARCHITECTURE</span>
          </div>
        </div>

        {/* Oversized Headline */}
        <div className="mb-12">
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.92] uppercase text-main">
            CREATIVE DIRECTION <br />
            <span className="flex flex-wrap items-center gap-x-4 md:gap-x-8">
              <span>& DIGITAL</span>
              <span
                className="italic font-light text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-normal text-muted-custom font-serif"
                style={{ color: activeAccent.hex }}
              >
                Architecture
              </span>
            </span>
          </h1>
        </div>

        {/* Grid Content Paragraph, CTAs & Visual Badge Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-6">
            <p className="text-lg md:text-xl text-muted-custom leading-relaxed font-light max-w-2xl mb-8">
              We craft haute digital experiences where oversized typography, radical restraint, and high-contrast editorial rhythm intersect to establish commanding brand presence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onExploreClick}
                className="group relative inline-flex items-center justify-between gap-4 px-8 py-4 uppercase tracking-wider text-xs font-bold text-main border border-theme bg-card-custom hover:border-accent-custom transition-all duration-300"
              >
                <span>Explore Selected Works</span>
                <ArrowDownRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                  style={{ color: activeAccent.hex }}
                />
              </button>

              <button
                onClick={onContactClick}
                className="group relative inline-flex items-center justify-between gap-4 px-8 py-4 uppercase tracking-wider text-xs font-bold transition-all duration-300 text-slate-950 shadow-lg"
                style={{ backgroundColor: activeAccent.hex }}
              >
                <span>Initiate Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>

          {/* Interactive Card / Visual Element from Editorial Aesthetic */}
          <div className="lg:col-span-6 flex lg:justify-end">
            <div className="relative w-full max-w-[380px] h-[220px] bg-card-custom rounded-xl border border-theme accent-glow flex items-center justify-center overflow-hidden p-6 group transition-all duration-500 hover:scale-[1.02]">
              <div
                className="absolute inset-0 bg-gradient-to-tr via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity"
                style={{
                  backgroundImage: `linear-gradient(to top right, ${activeAccent.hex}25, transparent)`,
                }}
              />
              <div className="relative text-center z-10">
                <p className="text-[44px] sm:text-[52px] font-heading font-extrabold leading-none tracking-tighter text-main">
                  EST. 2026
                </p>
                <p className="text-[11px] tracking-[0.35em] uppercase text-muted-custom mt-2 font-mono">
                  EDITORIAL ARCHIVE & STUDIO
                </p>
              </div>
              {/* Decorative Geometric Rings */}
              <div
                className="absolute -bottom-10 -right-10 w-36 h-36 border rounded-full opacity-30 transition-transform duration-700 group-hover:scale-110"
                style={{ borderColor: activeAccent.hex }}
              />
              <div
                className="absolute -top-10 -left-10 w-24 h-24 border border-theme rounded-full opacity-40"
              />
            </div>
          </div>
        </div>

        {/* Key Metrics / Index Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-theme">
          {STATS.map((stat, idx) => (
            <div key={idx} className="group border-r border-theme/40 last:border-r-0 pr-4">
              <div
                className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-main mb-1 group-hover:text-accent-custom transition-colors"
              >
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-custom">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
