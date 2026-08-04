import React, { useState } from 'react';
import { X, ExternalLink, ArrowRight, Quote, CheckCircle2, ChevronLeft, ChevronRight, Layers, Sparkles } from 'lucide-react';
import { Project, AccentColor } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  activeAccent: AccentColor;
  onContactClick: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  activeAccent,
  onContactClick,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex justify-center p-4 md:p-10 animate-fade-in">
      <div className="relative w-full max-w-5xl bg-main border border-theme text-main shadow-2xl overflow-hidden my-auto my-6 flex flex-col max-h-[90vh]">
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-6 bg-main/95 backdrop-blur-md border-b border-theme">
          <div className="flex items-center gap-3">
            <span
              className="text-xs font-mono px-2.5 py-1 uppercase tracking-widest font-semibold border"
              style={{
                borderColor: `${activeAccent.hex}40`,
                backgroundColor: `${activeAccent.hex}15`,
                color: activeAccent.hex,
              }}
            >
              [ CASE STUDY ]
            </span>
            <span className="text-xs text-muted-custom uppercase tracking-wider hidden sm:inline">
              {project.category} • {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full border border-theme text-muted-custom hover:text-main hover:border-accent-custom transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 md:p-12 overflow-y-auto space-y-12 flex-1">
          {/* Main Title & Subtitle */}
          <div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-main mb-4">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-custom font-light leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Project Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 border border-theme bg-card-custom text-xs">
            <div>
              <span className="block text-muted-custom uppercase tracking-wider mb-1">CLIENT</span>
              <span className="font-bold text-main">{project.client}</span>
            </div>
            <div>
              <span className="block text-muted-custom uppercase tracking-wider mb-1">ROLE</span>
              <span className="font-bold text-main">{project.role}</span>
            </div>
            <div>
              <span className="block text-muted-custom uppercase tracking-wider mb-1">YEAR</span>
              <span className="font-bold text-main">{project.year}</span>
            </div>
            <div>
              <span className="block text-muted-custom uppercase tracking-wider mb-1">CATEGORY</span>
              <span className="font-bold text-main">{project.category}</span>
            </div>
          </div>

          {/* Image Showcase & Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[16/9] overflow-hidden border border-theme bg-black">
              <img
                src={project.galleryImages[activeImageIndex] || project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>

            {project.galleryImages.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {project.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 aspect-[16/10] overflow-hidden border transition-all ${
                      activeImageIndex === idx
                        ? 'border-accent-custom opacity-100 ring-1'
                        : 'border-theme opacity-50 hover:opacity-100'
                    }`}
                    style={{
                      borderColor: activeImageIndex === idx ? activeAccent.hex : undefined,
                    }}
                  >
                    <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Impact Metrics Banner */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 border border-theme bg-card-custom">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="text-center md:text-left">
                  <div
                    className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tight mb-1"
                    style={{ color: activeAccent.hex }}
                  >
                    {m.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-custom">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Detailed Narrative Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-theme">
            <div className="space-y-3">
              <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-main flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeAccent.hex }} />
                01. Overview
              </h3>
              <p className="text-sm text-muted-custom font-light leading-relaxed">
                {project.caseStudy.overview}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-main flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeAccent.hex }} />
                02. Challenge
              </h3>
              <p className="text-sm text-muted-custom font-light leading-relaxed">
                {project.caseStudy.challenge}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-main flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeAccent.hex }} />
                03. Solution & Impact
              </h3>
              <p className="text-sm text-muted-custom font-light leading-relaxed mb-2">
                {project.caseStudy.solution}
              </p>
              <p className="text-xs text-main font-semibold leading-relaxed p-3 border border-theme bg-card-hover">
                {project.caseStudy.impact}
              </p>
            </div>
          </div>

          {/* Design System & Typography Specimen */}
          {(project.caseStudy.typographyUsed || project.caseStudy.colorPalette) && (
            <div className="p-6 border border-theme bg-card-custom space-y-4">
              <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-muted-custom">
                DESIGN SYSTEM SPECIMENS
              </h4>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-muted-custom uppercase block">TYPOGRAPHY SUITE</span>
                  <span className="font-heading font-semibold text-lg text-main">
                    {project.caseStudy.typographyUsed || 'Space Grotesk & Inter'}
                  </span>
                </div>

                {project.caseStudy.colorPalette && (
                  <div>
                    <span className="text-xs text-muted-custom uppercase block mb-1">COLOR PALETTE</span>
                    <div className="flex items-center gap-2">
                      {project.caseStudy.colorPalette.map((color, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-1">
                          <span
                            className="w-6 h-6 rounded-sm border border-white/20 inline-block"
                            style={{ backgroundColor: color }}
                            title={color}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Testimonial Quote */}
          {project.caseStudy.testimonial && (
            <div className="p-8 border-l-2 border-theme bg-card-custom relative">
              <Quote className="w-8 h-8 text-muted-custom opacity-30 mb-4" />
              <p className="text-lg md:text-xl text-main font-light italic leading-relaxed mb-6">
                "{project.caseStudy.testimonial.quote}"
              </p>
              <div>
                <div className="font-heading font-bold text-sm text-main uppercase">
                  {project.caseStudy.testimonial.author}
                </div>
                <div className="text-xs text-muted-custom">
                  {project.caseStudy.testimonial.role}, {project.caseStudy.testimonial.company}
                </div>
              </div>
            </div>
          )}

          {/* Bottom Action Footer */}
          <div className="pt-8 border-t border-theme flex flex-col sm:flex-row items-center justify-between gap-4">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 uppercase tracking-wider text-xs font-bold border border-theme hover:border-accent-custom transition-all"
                style={{ color: activeAccent.hex }}
              >
                <span>Launch Live Project</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <span className="text-xs text-muted-custom uppercase">
                PRIVATE ENTERPRISE ARCHIVE
              </span>
            )}

            <button
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="inline-flex items-center gap-2 px-8 py-3 uppercase tracking-wider text-xs font-bold text-black transition-all"
              style={{ backgroundColor: activeAccent.hex }}
            >
              <span>Inquire Similar Scope</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
