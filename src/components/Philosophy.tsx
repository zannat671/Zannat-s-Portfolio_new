import React, { useState } from 'react';
import { AccentColor } from '../types';
import { PHILOSOPHY_MANIFESTO } from '../data/portfolioData';
import { Compass, Cpu, Layers, Sparkles, Check } from 'lucide-react';

interface PhilosophyProps {
  activeAccent: AccentColor;
}

export const Philosophy: React.FC<PhilosophyProps> = ({ activeAccent }) => {
  const [activeCapability, setActiveCapability] = useState<number>(0);

  const capabilities = [
    {
      title: '01 / UI & INTERACTIVE ARCHITECTURE',
      description: 'Designing high-density interfaces with modular grid hierarchies, responsive dark/light color systems, and seamless state choreography.',
      deliverables: ['Custom Web Applications', 'OLED Dark Mode Interfaces', 'Design System Infrastructure', 'Complex Dashboard Telemetry']
    },
    {
      title: '02 / BRAND SYSTEMS & TYPOGRAPHY',
      description: 'Establishing enduring visual identities anchored by bespoke typographic selection, mathematical scales, and high-contrast editorial guidelines.',
      deliverables: ['Brand Architecture & Guidelines', 'Custom Display Typography', 'Print & Digital Monograph Layouts', 'Art Direction & Curation']
    },
    {
      title: '03 / MOTION & SPATIAL INTERACTION',
      description: 'Bringing digital surfaces to life through micro-interactions, inertia scrolling physics, WebGL visual shaders, and spatial audio feedback.',
      deliverables: ['WebGL Shaders & Canvas', 'Micro-Interaction Choreography', '3D Product Configurators', 'Interactive Installation Art']
    }
  ];

  return (
    <section id="philosophy" className="py-24 md:py-32 relative border-t border-theme">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="border-b border-theme pb-8 mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono tracking-widest text-muted-custom uppercase">
              [02] STUDIO MANIFESTO & CAPABILITIES
            </span>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeAccent.hex }} />
          </div>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase text-main">
            PHILOSOPHY OF RESTRAINT
          </h2>
        </div>

        {/* Manifesto Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-24">
          {PHILOSOPHY_MANIFESTO.map((item) => (
            <div
              key={item.num}
              className="p-8 border border-theme bg-card-custom hover:border-accent-custom transition-all duration-300 relative group"
            >
              <div
                className="font-mono text-2xl font-bold mb-4"
                style={{ color: activeAccent.hex }}
              >
                [{item.num}]
              </div>
              <h3 className="font-heading font-extrabold text-2xl uppercase tracking-tight text-main mb-4 group-hover:text-accent-custom transition-colors">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-muted-custom font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Capability Matrix Section */}
        <div className="border border-theme bg-card-custom p-8 md:p-12">
          <div className="mb-8 border-b border-theme pb-6">
            <span className="text-xs font-mono tracking-widest text-muted-custom uppercase block mb-2">
              CORE CAPABILITY MATRIX
            </span>
            <h3 className="font-heading font-extrabold text-2xl md:text-3xl uppercase tracking-tight text-main">
              TECHNICAL & CREATIVE CAPABILITIES
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Selector List */}
            <div className="lg:col-span-5 space-y-3">
              {capabilities.map((cap, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCapability(idx)}
                  className={`w-full text-left p-5 transition-all border ${
                    activeCapability === idx
                      ? 'border-accent-custom bg-card-hover text-main font-semibold'
                      : 'border-theme/40 text-muted-custom hover:text-main hover:border-theme'
                  }`}
                  style={{
                    borderColor: activeCapability === idx ? activeAccent.hex : undefined,
                  }}
                >
                  <div className="font-heading font-bold text-sm tracking-wider uppercase mb-1">
                    {cap.title}
                  </div>
                  <div className="text-xs text-muted-custom line-clamp-1">
                    {cap.description}
                  </div>
                </button>
              ))}
            </div>

            {/* Right Active Capability Detail */}
            <div className="lg:col-span-7 p-6 md:p-8 border border-theme bg-main space-y-6">
              <div>
                <h4 className="font-heading font-bold text-2xl uppercase tracking-tight text-main mb-3">
                  {capabilities[activeCapability].title}
                </h4>
                <p className="text-sm text-muted-custom leading-relaxed font-light">
                  {capabilities[activeCapability].description}
                </p>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-muted-custom block mb-3">
                  PRIMARY DELIVERABLES
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {capabilities[activeCapability].deliverables.map((deliv, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-center gap-2.5 text-xs text-main p-3 border border-theme/60 bg-card-custom"
                    >
                      <Check className="w-4 h-4 shrink-0" style={{ color: activeAccent.hex }} />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
