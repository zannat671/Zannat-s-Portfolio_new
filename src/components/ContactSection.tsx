import React, { useState } from 'react';
import { AccentColor, ContactFormData } from '../types';
import { Send, Copy, Check, Mail, Globe, ArrowUpRight, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  activeAccent: AccentColor;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ activeAccent }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    budget: '$25,000 — $50,000',
    service: 'Full Editorial UI/UX & Identity',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const budgetOptions = [
    '$10,000 — $25,000',
    '$25,000 — $50,000',
    '$50,000 — $100,000',
    '$100,000+',
  ];

  const serviceOptions = [
    'Full Editorial UI/UX & Identity',
    'Brand Architecture & Design System',
    'Interactive WebGL & Motion System',
    'Advisory & Creative Direction',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@eraf-studio.design');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative border-t border-theme">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="border-b border-theme pb-8 mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono tracking-widest text-muted-custom uppercase">
              [04] INITIATE DIALOGUE
            </span>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeAccent.hex }} />
          </div>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase text-main">
            LET’S CRAFT SOMETHING ENDURING
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Direct Information (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-lg text-muted-custom font-light leading-relaxed">
              We collaborate with visionary founders, architects, and luxury houses worldwide. Whether initiating a ground-up brand architecture or elevating an existing digital ecosystem, we respond to every inquiry within 24 hours.
            </p>

            {/* Direct Copy Email Box */}
            <div className="p-6 border border-theme bg-card-custom space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-custom block">
                DIRECT INQUIRIES
              </span>
              <div className="flex items-center justify-between gap-3">
                <span className="font-heading font-bold text-lg text-main">
                  hello@eraf-studio.design
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 border border-theme hover:border-accent-custom transition-colors text-muted-custom hover:text-main"
                  title="Copy Email Address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copiedEmail && (
                <span className="text-xs text-emerald-400 font-mono block">
                  ✓ Email copied to clipboard!
                </span>
              )}
            </div>

            {/* Studio Locations & Availability */}
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-4 border border-theme bg-card-custom">
                <span className="text-muted-custom uppercase block mb-1">TOKYO STUDIO</span>
                <span className="font-bold text-main">Minato City, Tokyo</span>
              </div>
              <div className="p-4 border border-theme bg-card-custom">
                <span className="text-muted-custom uppercase block mb-1">BERLIN HUB</span>
                <span className="font-bold text-main">Mitte, Berlin</span>
              </div>
            </div>
          </div>

          {/* Right Form (7 cols) */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-10 border border-theme bg-card-custom text-center space-y-6 animate-fade-in">
                <div
                  className="w-12 h-12 rounded-full mx-auto flex items-center justify-center border"
                  style={{ borderColor: activeAccent.hex }}
                >
                  <Check className="w-6 h-6" style={{ color: activeAccent.hex }} />
                </div>
                <h3 className="font-heading font-bold text-2xl uppercase text-main">
                  INQUIRY TRANSMITTED
                </h3>
                <p className="text-sm text-muted-custom font-light max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-main font-semibold">{formData.name}</span>. Our principal creative director will review your project requirements and connect via <span className="text-main font-semibold">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider border border-theme hover:border-accent-custom text-main"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-muted-custom mb-2">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Kenzo Takahashi"
                      className="w-full px-4 py-3 bg-card-custom border border-theme text-main text-sm focus:outline-none focus:border-accent-custom transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-muted-custom mb-2">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. kenzo@aura-studio.com"
                      className="w-full px-4 py-3 bg-card-custom border border-theme text-main text-sm focus:outline-none focus:border-accent-custom transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-muted-custom mb-2">
                      COMPANY / STUDIO
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Aura Architecture"
                      className="w-full px-4 py-3 bg-card-custom border border-theme text-main text-sm focus:outline-none focus:border-accent-custom transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-muted-custom mb-2">
                      PRIMARY SERVICE
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-card-custom border border-theme text-main text-sm focus:outline-none focus:border-accent-custom transition-colors"
                    >
                      {serviceOptions.map((srv, idx) => (
                        <option key={idx} value={srv} className="bg-main text-main">
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted-custom mb-2">
                    ESTIMATED BUDGET RANGE
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {budgetOptions.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`py-2.5 px-3 text-xs tracking-wider uppercase border transition-all ${
                          formData.budget === b
                            ? 'border-accent-custom text-main font-semibold bg-card-hover'
                            : 'border-theme text-muted-custom hover:text-main'
                        }`}
                        style={{
                          borderColor: formData.budget === b ? activeAccent.hex : undefined,
                        }}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted-custom mb-2">
                    PROJECT OBJECTIVES & TIMELINE
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your vision, target launch date, or specific challenges..."
                    className="w-full px-4 py-3 bg-card-custom border border-theme text-main text-sm focus:outline-none focus:border-accent-custom transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 uppercase font-bold text-xs tracking-widest text-black transition-all duration-300 flex items-center justify-center gap-2"
                  style={{ backgroundColor: activeAccent.hex }}
                >
                  <span>Transmit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
