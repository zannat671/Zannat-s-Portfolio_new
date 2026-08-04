import React from 'react';
import { AccentColor } from '../types';
import { EXPERIENCES, AWARDS } from '../data/portfolioData';
import { Award, Briefcase, ChevronRight, Star } from 'lucide-react';

interface ExperienceProps {
  activeAccent: AccentColor;
}

export const Experience: React.FC<ExperienceProps> = ({ activeAccent }) => {
  return (
    <section id="experience" className="py-24 md:py-32 relative border-t border-theme">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="border-b border-theme pb-8 mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono tracking-widest text-muted-custom uppercase">
              [03] CHRONOLOGY & HONORS
            </span>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeAccent.hex }} />
          </div>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase text-main">
            EXPERIENCE & RECOGNITION
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Career Timeline (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-12">
            <h3 className="font-heading font-bold text-xl uppercase tracking-wider text-main flex items-center gap-3 mb-8">
              <Briefcase className="w-5 h-5" style={{ color: activeAccent.hex }} />
              Practice Timeline
            </h3>

            <div className="relative border-l border-theme ml-3 pl-8 space-y-12">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div
                    className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-2 border-main bg-main transition-transform group-hover:scale-125"
                    style={{ borderColor: activeAccent.hex }}
                  />

                  <div className="mb-2">
                    <span
                      className="font-mono text-xs uppercase font-bold tracking-widest px-2.5 py-0.5 border border-theme"
                      style={{ color: activeAccent.hex }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <h4 className="font-heading font-extrabold text-2xl uppercase text-main mt-3">
                    {exp.role}
                  </h4>

                  <div className="text-xs text-muted-custom uppercase tracking-wider mb-4">
                    {exp.company} • {exp.location}
                  </div>

                  <p className="text-sm text-muted-custom font-light leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="text-xs text-main flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full" style={{ backgroundColor: activeAccent.hex }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Press (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border border-theme bg-card-custom p-8">
              <h3 className="font-heading font-bold text-xl uppercase tracking-wider text-main flex items-center gap-3 mb-6">
                <Award className="w-5 h-5" style={{ color: activeAccent.hex }} />
                AWARDS INDEX
              </h3>

              <div className="divide-y divide-theme">
                {AWARDS.map((award, idx) => (
                  <div key={idx} className="py-4 flex items-center justify-between gap-4">
                    <div>
                      <div className="font-heading font-bold text-sm text-main uppercase">
                        {award.title}
                      </div>
                      <div className="text-xs text-muted-custom">
                        {award.organization} — <span className="text-main">{award.projectTitle}</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-muted-custom">
                      {award.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Press & Recognitions */}
            <div className="border border-theme bg-card-custom p-8 text-xs">
              <span className="font-mono uppercase tracking-widest text-muted-custom block mb-4">
                PRESS & FEATURED ON
              </span>
              <div className="flex flex-wrap gap-3">
                {['Awwwards', 'FWA', 'Site Inspire', 'Mindsparkle Mag', 'Typewolf', 'It’s Nice That', 'Eye Magazine', 'Brand New'].map((press, pIdx) => (
                  <span
                    key={pIdx}
                    className="px-3 py-1.5 border border-theme text-main font-mono uppercase hover:border-accent-custom transition-colors"
                  >
                    {press}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
