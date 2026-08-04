import React from 'react';
import { X, Check, Sparkles, Palette } from 'lucide-react';
import { AccentColor } from '../types';
import { ACCENT_COLORS } from '../data/portfolioData';

interface CustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeAccent: AccentColor;
  onSelectAccent: (accent: AccentColor) => void;
}

export const CustomizerModal: React.FC<CustomizerModalProps> = ({
  isOpen,
  onClose,
  activeAccent,
  onSelectAccent,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div className="relative w-full max-w-md bg-main border border-theme text-main p-6 sm:p-8 shadow-2xl space-y-6">
        <div className="flex items-center justify-between border-b border-theme pb-4">
          <div className="flex items-center gap-2">
            <Palette className="w-5 h-5" style={{ color: activeAccent.hex }} />
            <h3 className="font-heading font-extrabold text-xl uppercase tracking-tight text-main">
              ACCENT PALETTE
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 border border-theme hover:border-accent-custom text-muted-custom hover:text-main"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-muted-custom font-light leading-relaxed">
          Select an accent highlight tone to customize the editorial palette across all components:
        </p>

        <div className="space-y-3">
          {ACCENT_COLORS.map((accent) => (
            <button
              key={accent.id}
              onClick={() => {
                onSelectAccent(accent);
                onClose();
              }}
              className={`w-full flex items-center justify-between p-3 border transition-all ${
                activeAccent.id === accent.id
                  ? 'border-accent-custom bg-card-hover font-bold'
                  : 'border-theme/60 bg-card-custom hover:border-theme'
              }`}
              style={{
                borderColor: activeAccent.id === accent.id ? activeAccent.hex : undefined,
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-5 h-5 rounded-full border border-white/20 inline-block shadow-sm"
                  style={{ backgroundColor: accent.hex }}
                />
                <span className="text-xs uppercase tracking-wider font-mono text-main">
                  {accent.name}
                </span>
              </div>

              {activeAccent.id === accent.id && (
                <Check className="w-4 h-4" style={{ color: activeAccent.hex }} />
              )}
            </button>
          ))}
        </div>

        <div className="pt-4 border-t border-theme flex items-center justify-between text-xs text-muted-custom">
          <span>DEFAULT: ELECTRIC BLUE (#3B82F6)</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-card-custom border border-theme hover:border-accent-custom text-main font-bold uppercase tracking-wider"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};
