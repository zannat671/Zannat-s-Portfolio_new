import React from 'react';
import { AccentColor } from '../types';
import { MARQUEE_ITEMS } from '../data/portfolioData';

interface MarqueeProps {
  activeAccent: AccentColor;
  reverse?: boolean;
  speed?: 'normal' | 'fast';
  variant?: 'standard' | 'highlight';
}

export const Marquee: React.FC<MarqueeProps> = ({
  activeAccent,
  reverse = false,
  speed = 'normal',
  variant = 'highlight',
}) => {
  // Multiply items for infinite seamless scroll
  const marqueeList = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  const animationClass = reverse
    ? 'animate-marquee-reverse'
    : speed === 'fast'
    ? 'animate-marquee-fast'
    : 'animate-marquee';

  const isHighlight = variant === 'highlight';

  return (
    <section className={`relative py-4 my-2 overflow-hidden select-none z-10 transition-transform ${
      isHighlight
        ? 'rotate-[-1deg] scale-[1.02] shadow-2xl text-black'
        : 'bg-card-custom border-y border-theme'
    }`}
    style={{
      backgroundColor: isHighlight ? activeAccent.hex : undefined,
    }}>
      <div className="flex overflow-hidden">
        <div className={`${animationClass} flex items-center gap-8`}>
          {marqueeList.map((item, idx) => (
            <span
              key={idx}
              className={`font-heading font-extrabold text-xl sm:text-2xl md:text-3xl tracking-wider uppercase whitespace-nowrap ${
                isHighlight
                  ? item === '•' ? 'text-black/40 text-2xl' : 'text-black font-extrabold'
                  : item === '•' ? 'text-2xl' : 'text-main opacity-90'
              }`}
              style={{
                color: !isHighlight && item === '•' ? activeAccent.hex : undefined,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
