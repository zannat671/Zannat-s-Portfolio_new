import React, { useState, useEffect } from 'react';
import { Sun, Moon, Palette, Menu, X, ArrowUpRight, Clock } from 'lucide-react';
import { ThemeMode, AccentColor } from '../types';

interface HeaderProps {
  themeMode: ThemeMode;
  toggleTheme: () => void;
  activeAccent: AccentColor;
  openCustomizer: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  themeMode,
  toggleTheme,
  activeAccent,
  openCustomizer,
  activeSection,
  setActiveSection,
}) => {
  const [time, setTime] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format as Tokyo time or Local time with seconds
      const timeString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Tokyo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setTime(`TYO ${timeString}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'works', label: 'Works [01]' },
    { id: 'philosophy', label: 'Philosophy [02]' },
    { id: 'experience', label: 'Experience [03]' },
    { id: 'contact', label: 'Contact [04]' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-4 backdrop-blur-md bg-opacity-80 border-b border-theme bg-main'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Mark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-3"
        >
          <span className="font-heading font-extrabold text-2xl tracking-tighter text-main group-hover:text-accent-custom transition-colors">
            ERAF <span style={{ color: activeAccent.hex }}>.</span>
          </span>
          <span className="hidden sm:inline-block text-xs uppercase tracking-[0.2em] text-muted-custom border-l border-theme pl-3 py-0.5">
            Studio
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm tracking-wider uppercase transition-colors relative py-1 ${
                activeSection === item.id
                  ? 'text-accent-custom font-medium'
                  : 'text-muted-custom hover:text-main'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-custom"
                  style={{ backgroundColor: activeAccent.hex }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Right Status & Controls */}
        <div className="flex items-center gap-4">
          {/* Live Clock & Availability */}
          <div className="hidden lg:flex items-center gap-3 px-3 py-1.5 rounded-full border border-theme bg-card-custom text-xs">
            <span className="flex items-center gap-1.5 text-muted-custom">
              <Clock className="w-3.5 h-3.5 text-accent-custom" style={{ color: activeAccent.hex }} />
              {time || 'TYO 12:00 PM'}
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-custom opacity-40"></span>
            <span className="flex items-center gap-1.5 font-medium text-main">
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: activeAccent.hex }}
                ></span>
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ backgroundColor: activeAccent.hex }}
                ></span>
              </span>
              Available Q3/Q4
            </span>
          </div>

          {/* Theme Color Picker Button */}
          <button
            onClick={openCustomizer}
            title="Customize Accent Color"
            className="p-2.5 rounded-full border border-theme bg-card-custom text-muted-custom hover:text-main hover:border-accent-custom transition-all"
            aria-label="Customize Accent Color"
          >
            <Palette className="w-4 h-4" style={{ color: activeAccent.hex }} />
          </button>

          {/* Dark / Light Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-theme bg-card-custom text-muted-custom hover:text-main hover:border-accent-custom transition-all flex items-center justify-center"
            title={`Switch to ${themeMode === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Theme"
          >
            {themeMode === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-800" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full border border-theme bg-card-custom text-main"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-main border-b border-theme shadow-2xl py-6 px-6 transition-all duration-300">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between py-2 border-b border-theme text-xs text-muted-custom">
              <span className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-accent-custom" style={{ color: activeAccent.hex }} />
                {time}
              </span>
              <span className="flex items-center gap-1.5 font-medium text-main">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: activeAccent.hex }}
                />
                Available Q3/Q4
              </span>
            </div>

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left font-heading text-xl uppercase font-bold py-2 text-main hover:text-accent-custom flex items-center justify-between border-b border-theme/50"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-5 h-5 text-muted-custom" />
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
