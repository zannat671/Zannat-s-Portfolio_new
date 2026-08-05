import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import heroVideo from './assets/hero-bg.mp4';
import smartParkingImg from './assets/images.jpg';
import aboutProfileImg from './assets/IMG-20260314-WA0006.jpg.jpeg';
import {
  Sun,
  Moon,
  ArrowUpRight,
  ArrowDownRight,
  GraduationCap,
  FolderGit2,
  Sparkles,
  FileCode,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Menu,
  X,
  Linkedin,
  Instagram,
  Facebook,
  MessageSquare,
  Maximize2,
  Minimize2,
  Monitor,
} from 'lucide-react';

// Fade-in & slide-up scroll reveal component
function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Typewriter text component with blinking code cursor that disappears when typing finishes
function TypewriterText({
  text,
  speed = 25,
  className = '',
}: {
  text: string;
  speed?: number;
  className?: string;
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!isStarted) return;
    let i = 0;
    setDisplayedText('');
    setIsFinished(false);
    const timer = setInterval(() => {
      if (i <= text.length) {
        setDisplayedText(text.slice(0, i));
        i++;
      } else {
        setIsFinished(true);
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed, isStarted]);

  return (
    <motion.p
      onViewportEnter={() => setIsStarted(true)}
      viewport={{ once: true, margin: '-20px' }}
      className={className}
    >
      <span>{displayedText}</span>
      {!isFinished && (
        <span className="inline-block w-[2px] h-[1.1em] bg-[#3B82F6] ml-0.5 align-middle animate-cursor" />
      )}
    </motion.p>
  );
}

// Custom aesthetic cursor component with smooth trailing ring and glow matching theme
function CustomCursor({ isDark }: { isDark: boolean }) {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.closest('button') ||
          target.closest('a') ||
          target.closest('.cursor-pointer') ||
          target.classList.contains('cursor-pointer'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Outer Glowing Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        animate={{
          x: mousePosition.x - (isHovered ? 28 : 18),
          y: mousePosition.y - (isHovered ? 28 : 18),
          width: isHovered ? 56 : 36,
          height: isHovered ? 56 : 36,
          scale: isClicked ? 0.75 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 26,
          stiffness: 320,
          mass: 0.2,
        }}
      >
        <div
          className={`w-full h-full rounded-full border transition-colors duration-200 ${
            isHovered
              ? 'border-[#3B82F6] bg-[#3B82F6]/20 shadow-[0_0_25px_rgba(59,130,246,0.85)]'
              : isDark
              ? 'border-[#60A5FA]/60 bg-[#3B82F6]/10 shadow-[0_0_15px_rgba(59,130,246,0.4)]'
              : 'border-[#2563EB]/70 bg-[#3B82F6]/15 shadow-[0_0_15px_rgba(37,99,235,0.4)]'
          }`}
        />
      </motion.div>

      {/* Inner Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] rounded-full"
        animate={{
          x: mousePosition.x - (isHovered ? 5 : 4),
          y: mousePosition.y - (isHovered ? 5 : 4),
          width: isHovered ? 10 : 8,
          height: isHovered ? 10 : 8,
          scale: isClicked ? 0.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 600,
          mass: 0.1,
        }}
      >
        <div
          className={`w-full h-full rounded-full shadow-lg ${
            isDark ? 'bg-[#60A5FA] shadow-[#3B82F6]' : 'bg-[#2563EB] shadow-[#2563EB]'
          }`}
        />
      </motion.div>
    </>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pcVideoMode, setPcVideoMode] = useState<'fit' | 'cover'>('fit');

  // Toggle dark/light class on document element and body
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [isDark]);

  // Track scroll position for navbar background effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const marqueeText = 'PROBLEM SOLVER ★ DETAIL ORIENTED ★ TEAM PLAYER ★ LIFELONG LEARNER ★ ';

  const education = [
    {
      title: 'B.Sc. in Software Engineering',
      institution: 'Daffodil International University',
      badge: 'Jun 2024 – Current',
    },
    {
      title: 'Higher Secondary Certificate (HSC)',
      institution: 'Mohammadpur Model School & College',
      badge: '2021 – 2023 · GPA 4.33',
    },
    {
      title: 'Secondary School Certificate (SSC)',
      institution: 'Model Academy, Dhaka',
      badge: 'GPA 5.00',
    },
  ];

  const skillGroups = [
    {
      title: 'Productivity & Tools',
      skills: [
        'Microsoft Word',
        'Microsoft Excel',
        'Microsoft PowerPoint',
        'Google Docs',
        'Google Drive',
        'Outlook',
        'Gmail',
        'Zoom',
      ],
    },
    {
      title: 'Core Strengths',
      skills: [
        'Organizational & Planning',
        'Team-work',
        'Decision-making',
        'Communication',
        'Reliability',
      ],
    },
    {
      title: 'Languages',
      skills: ['Bengali (Native)', 'English (Fluent)', 'Hindi (Basic)'],
    },
  ];

  const experiences = [
    {
      role: 'Moderator',
      organization: 'Her_Art_Gallery, Dhaka',
      period: 'Sep 2025 – Current',
      description:
        'Tracked posts and conversations to maintain a well-structured community. Mediated user disputes, handled content moderation, and reported issues to administrators.',
    },
    {
      role: 'Program Content Creator',
      organization: 'Data Summit, Daffodil International University',
      period: 'Event / Program',
      description:
        'Created content for marketing and educational objectives, supported digital post creation, and worked with the event team on program marketing.',
    },
    {
      role: 'Home Tutor',
      organization: 'Dhaka, Bangladesh',
      period: 'Jan 2023 – Current',
      description:
        'Tutored individual students, explained complex concepts in simple ways, designed tailored study plans, tracked progress, and communicated regularly with parents.',
    },
    {
      role: 'Member',
      organization: 'Data Science Club, Daffodil International University',
      period: 'Active Member',
      description:
        'Active volunteer member contributing to club activities and events.',
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-body overflow-x-hidden relative ${
        isDark ? 'bg-[#0D0D0D] text-[#F5F4EF]' : 'bg-[#F5F4EF] text-[#111111]'
      }`}
    >
      {/* Custom Theme-accented Interactive Cursor */}
      <CustomCursor isDark={isDark} />

      {/* Global Fixed Background Video for continuous glass effect across all sections */}
      <video
        key={`main-${heroVideo}`}
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover object-center pointer-events-none z-0 opacity-85"
        onCanPlay={(e) => e.currentTarget.play()}
        onError={(e) => {
          (e.currentTarget as HTMLElement).style.display = 'none';
        }}
      >
        <source src={heroVideo} type="video/mp4" />
        <source src="/assets/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Global Glass Overlay for Contrast */}
      <div
        className={`fixed inset-0 pointer-events-none z-0 transition-all duration-300 ${
          isDark ? 'bg-black/45' : 'bg-white/45'
        }`}
      />

      {/* Fixed Top Floating Centered Micro Navbar */}
      <header className="fixed top-2 inset-x-0 z-50 flex flex-col items-center px-2 pointer-events-none">
        <div
          className={`pointer-events-auto transition-all duration-300 rounded-full px-2.5 sm:px-3.5 py-1 flex items-center justify-between gap-2.5 sm:gap-4 w-auto border backdrop-blur-xl shadow-lg ${
            isDark
              ? 'bg-[#0D0D0D]/85 border-white/20 text-[#F5F4EF] shadow-black/80'
              : 'bg-[#F5F4EF]/90 border-black/15 text-[#111111] shadow-gray-400/30'
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="font-heading font-bold text-xs tracking-tight group flex items-center transition-opacity hover:opacity-80 shrink-0"
          >
            <span>ZF</span>
            <span className="text-[#3B82F6]">.</span>
          </a>

          {/* Desktop Nav Links (Micro) */}
          <nav className="hidden md:flex items-center gap-2.5 lg:gap-3.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[11px] font-medium tracking-wide transition-colors ${
                  isDark
                    ? 'text-[#9C9C94] hover:text-[#F5F4EF]'
                    : 'text-[#6B6B63] hover:text-[#111111]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions: Theme Switcher & Mobile Menu Button */}
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            {/* Sun / Moon Theme Switcher */}
            <button
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle theme"
              className={`p-1 rounded-full transition-all duration-300 border flex items-center justify-center ${
                isDark
                  ? 'bg-[#1A1A1A] border-[#2A2A2A] text-[#3B82F6] hover:border-[#3B82F6]/50 hover:bg-[#222222]'
                  : 'bg-[#EAE8E0] border-[#D0CEC4] text-[#111111] hover:border-[#3B82F6] hover:bg-[#E2E0D6]'
              }`}
            >
              {isDark ? (
                <Sun className="w-3 h-3 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-3 h-3 transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className={`md:hidden p-1 rounded-full border flex items-center justify-center transition-all ${
                isDark
                  ? 'bg-[#1A1A1A] border-[#2A2A2A] text-[#F5F4EF]'
                  : 'bg-[#EAE8E0] border-[#D0CEC4] text-[#111111]'
              }`}
            >
              {mobileMenuOpen ? <X className="w-3 h-3" /> : <Menu className="w-3 h-3" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className={`pointer-events-auto mt-2 w-full max-w-sm rounded-2xl border p-4 shadow-2xl backdrop-blur-2xl ${
                isDark
                  ? 'bg-[#0D0D0D]/95 border-[#262626] text-white'
                  : 'bg-[#F5F4EF]/95 border-[#E0DFD8] text-black'
              }`}
            >
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleNavClick(e, link.href);
                    }}
                    className={`text-sm font-medium py-2 px-3 rounded-lg transition-colors ${
                      isDark
                        ? 'hover:bg-white/10 text-white/90'
                        : 'hover:bg-black/5 text-black/90'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Full Window Hero Section */}
      <section
        id="home"
        className="relative w-full min-h-screen flex flex-col justify-between pt-24 pb-8 overflow-hidden scroll-mt-0 group z-10"
      >
        {/* Selective Top & Bottom Cinematic Gradients */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 via-black/25 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-[68%] bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10 pointer-events-none" />

        {/* Inner Content Constrained to max-w-[90rem] for Alignment */}
        <div className="max-w-[90rem] mx-auto px-2 sm:px-4 md:px-6 w-full flex-1 flex flex-col justify-between relative z-20">
          {/* Bottom Layout Stack: Display Name (Top) + Bio & Action Bar (Bottom), both on screen left */}
          <div className="w-full pt-12 sm:pt-20 pb-4 sm:pb-6 mt-auto">
            <Reveal className="flex flex-col items-start gap-4 sm:gap-6 w-full">
              {/* Top: Display Name (Made smaller as requested) */}
              <div className="flex flex-col justify-end text-left items-start w-full">
                <h1 className="font-heading font-semibold tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#F3F2EB] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] text-left m-0 p-0">
                  Zannatul Fardous
                </h1>
              </div>

              {/* Bottom: Bio Paragraph + Action Bar (Pill Button + Social Icons) */}
              <div className="flex flex-col justify-end items-start text-left gap-2 sm:gap-3 w-full">
                <div className="flex flex-col items-start gap-2.5 max-w-sm sm:max-w-md w-full">
                  {/* Bio Text (Typewriter Effect with blinking code cursor) */}
                  <TypewriterText
                    text="Full-Stack Web Developer, and intern passionate about building modern web applications and solving real-world challenges through technology."
                    speed={25}
                    className="text-[10px] sm:text-[11px] md:text-xs font-normal leading-relaxed text-[#DCDAD0] drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] text-left min-h-[2.5em]"
                  />

                  {/* Bottom Action Bar: Pill Button + Social Icons */}
                  <div className="flex items-center gap-2 flex-wrap justify-start w-full">
                  {/* Primary Cream Pill Button */}
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EAE7DC] text-black font-medium text-xs sm:text-sm tracking-tight transition-all duration-300 hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] active:scale-[0.98] shrink-0"
                  >
                    <span>Let's talk...</span>
                    <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </button>

                  {/* Circular Social Icons */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <a
                      href="https://www.linkedin.com/in/zannatul-ferdous-73600a427/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 hover:border-[#3B82F6] hover:bg-black/60 transition-all flex items-center justify-center text-white/90 hover:text-white shadow-md hover:scale-105 active:scale-95"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://www.instagram.com/_zfbrishti__?igsh=MXM5Zzljd3FrMDg3OQ=="
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 hover:border-[#3B82F6] hover:bg-black/60 transition-all flex items-center justify-center text-white/90 hover:text-white shadow-md hover:scale-105 active:scale-95"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://www.facebook.com/zannatul.ferdous.182827"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 hover:border-[#3B82F6] hover:bg-black/60 transition-all flex items-center justify-center text-white/90 hover:text-white shadow-md hover:scale-105 active:scale-95"
                    >
                      <Facebook className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('contact');
                      }}
                      aria-label="Chat"
                      className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 hover:border-[#3B82F6] hover:bg-black/60 transition-all flex items-center justify-center text-white/90 hover:text-white shadow-md hover:scale-105 active:scale-95"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Main Page Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* About Section */}
        <section
          id="about"
          className={`py-12 md:py-16 px-6 sm:px-10 md:px-12 my-12 rounded-3xl border backdrop-blur-xl shadow-2xl transition-all duration-300 scroll-mt-24 ${
            isDark
              ? 'bg-[#0D0D0D]/60 border-white/15 text-white shadow-black/80'
              : 'bg-[#F5F4EF]/75 border-black/15 text-black shadow-black/10'
          }`}
        >
          <Reveal>
            <div className="space-y-16">
              {/* Top: About Info & Profile Picture */}
              <div className="space-y-6">
                <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#3B82F6] font-heading">
                  ABOUT ME
                </p>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12">
                  {/* Profile Picture Card */}
                  <div className="relative group shrink-0">
                    <div
                      className={`relative w-52 h-64 sm:w-60 sm:h-72 lg:w-64 lg:h-80 rounded-2xl overflow-hidden border backdrop-blur-md transition-all duration-300 shadow-xl ${
                        isDark
                          ? 'bg-black/30 border-white/15 shadow-black/50 group-hover:border-[#3B82F6]/60'
                          : 'bg-white/40 border-black/10 shadow-gray-300/60 group-hover:border-[#3B82F6]'
                      }`}
                    >
                      <img
                        src={aboutProfileImg}
                        alt="Zannatul Ferdous"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Headline & Bio */}
                  <div className="space-y-5 flex-1 text-center md:text-left">
                    <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight">
                      Building skills, one problem at a time.
                    </h2>
                    <TypewriterText
                      text="I'm a Software Engineering student at Daffodil International University, currently in my 6th semester. I'm interested in learning modern technologies, improving my problem-solving skills, and gaining practical experience I can bring to real projects. Alongside my studies, I also work as a home tutor, which has strengthened my communication and organizational skills."
                      speed={15}
                      className={`text-base sm:text-lg leading-relaxed font-normal max-w-3xl ${
                        isDark ? 'text-[#9C9C94]' : 'text-[#6B6B63]'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Bottom: Education Timeline */}
              <div className="pt-6 border-t border-opacity-10" style={{ borderColor: isDark ? '#262626' : '#E0DFD8' }}>
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className={`p-2 rounded-lg ${
                      isDark ? 'bg-[#1A1A1A] text-[#3B82F6]' : 'bg-[#EAE8E0] text-[#111111]'
                    }`}
                  >
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl tracking-tight">
                    Education
                  </h3>
                </div>

                {/* Timeline Container */}
                <div
                  className="relative pl-6 sm:pl-8 space-y-8 border-l-2 transition-colors max-w-4xl"
                  style={{ borderColor: isDark ? '#262626' : '#E2E0D6' }}
                >
                  {education.map((item, idx) => (
                    <div key={idx} className="relative group">
                      {/* Timeline Dot */}
                      <span
                        className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#3B82F6] transition-transform duration-300 group-hover:scale-125 ${
                          isDark ? 'ring-4 ring-[#0D0D0D]' : 'ring-4 ring-[#F5F4EF]'
                        }`}
                      />

                      {/* Timeline Item Content */}
                      <div
                        className={`p-5 sm:p-6 rounded-xl border backdrop-blur-md transition-all duration-300 ${
                          isDark
                            ? 'bg-black/35 border-white/10 hover:border-[#3B82F6]/60'
                            : 'bg-white/45 border-black/10 hover:border-[#3B82F6]'
                        }`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <h4 className="font-heading font-bold text-lg sm:text-xl tracking-tight">
                            {item.title}
                          </h4>
                          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#3B82F6]/15 text-[#3B82F6] border border-[#3B82F6]/30">
                            {item.badge}
                          </span>
                        </div>

                        <p
                          className={`text-sm sm:text-base ${
                            isDark ? 'text-[#9C9C94]' : 'text-[#6B6B63]'
                          }`}
                        >
                          {item.institution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className={`py-12 md:py-16 px-6 sm:px-10 md:px-12 my-12 rounded-3xl border backdrop-blur-xl shadow-2xl transition-all duration-300 scroll-mt-24 ${
            isDark
              ? 'bg-[#0D0D0D]/60 border-white/15 text-white shadow-black/80'
              : 'bg-[#F5F4EF]/75 border-black/15 text-black shadow-black/10'
          }`}
        >
          <Reveal>
            <div className="space-y-12">
              {/* Header */}
              <div>
                <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#3B82F6] font-heading mb-3">
                  WHAT I WORK WITH
                </p>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
                  Skills & Tools
                </h2>
              </div>

              {/* Skill Groups */}
              <div className="space-y-10">
                {skillGroups.map((group, groupIdx) => (
                  <div key={groupIdx} className="space-y-4">
                    <h3 className="font-heading font-bold text-xl sm:text-2xl tracking-tight flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                      <span>{group.title}</span>
                    </h3>

                    <div className="flex flex-wrap gap-3">
                      {group.skills.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border backdrop-blur-md transition-all duration-200 cursor-default hover:scale-[1.02] ${
                            isDark
                              ? 'bg-black/35 border-white/10 text-[#F5F4EF] hover:border-[#3B82F6] hover:bg-black/50'
                              : 'bg-white/40 border-black/10 text-[#111111] hover:border-[#3B82F6] hover:bg-white/60'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className={`py-12 md:py-16 px-6 sm:px-10 md:px-12 my-12 rounded-3xl border backdrop-blur-xl shadow-2xl transition-all duration-300 scroll-mt-24 ${
            isDark
              ? 'bg-[#0D0D0D]/60 border-white/15 text-white shadow-black/80'
              : 'bg-[#F5F4EF]/75 border-black/15 text-black shadow-black/10'
          }`}
        >
          <Reveal>
            <div className="space-y-12">
              {/* Header */}
              <div>
                <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#3B82F6] font-heading mb-3">
                  WHERE I'VE WORKED
                </p>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
                  Experience & Involvement
                </h2>
              </div>

              {/* Vertical Timeline */}
              <div
                className="relative pl-6 sm:pl-8 space-y-10 border-l-2 transition-colors max-w-4xl"
                style={{ borderColor: isDark ? '#262626' : '#E2E0D6' }}
              >
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline Dot Marker */}
                    <span
                      className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#3B82F6] transition-transform duration-300 group-hover:scale-125 ${
                        isDark ? 'ring-4 ring-[#0D0D0D]' : 'ring-4 ring-[#F5F4EF]'
                      }`}
                    />

                    {/* Card Content */}
                    <div
                      className={`p-6 sm:p-7 rounded-xl border backdrop-blur-md transition-all duration-300 ${
                        isDark
                          ? 'bg-black/35 border-white/10 hover:border-[#3B82F6]/60'
                          : 'bg-white/45 border-black/10 hover:border-[#3B82F6]'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="font-heading font-bold text-xl sm:text-2xl tracking-tight">
                          {exp.role}
                        </h3>
                        {exp.period && (
                          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#3B82F6]/15 text-[#3B82F6] border border-[#3B82F6]/30">
                            {exp.period}
                          </span>
                        )}
                      </div>

                      <p
                        className={`text-sm sm:text-base font-semibold mb-3 ${
                          isDark ? 'text-[#3B82F6]/90' : 'text-[#2563EB]'
                        }`}
                      >
                        {exp.organization}
                      </p>

                      <TypewriterText
                        text={exp.description}
                        speed={20}
                        className={`text-sm sm:text-base leading-relaxed ${
                          isDark ? 'text-[#9C9C94]' : 'text-[#6B6B63]'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className={`py-12 md:py-16 px-6 sm:px-10 md:px-12 my-12 rounded-3xl border backdrop-blur-xl shadow-2xl transition-all duration-300 scroll-mt-24 ${
            isDark
              ? 'bg-[#0D0D0D]/60 border-white/15 text-white shadow-black/80'
              : 'bg-[#F5F4EF]/75 border-black/15 text-black shadow-black/10'
          }`}
        >
          <Reveal>
            <div className="space-y-12">
              {/* Header */}
              <div>
                <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#3B82F6] font-heading mb-3">
                  SELECTED WORK
                </p>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
                  Projects
                </h2>
              </div>

              {/* Featured Project Card (Full-Width Style) */}
              <div
                className={`group relative rounded-2xl border backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden ${
                  isDark
                    ? 'bg-black/35 border-white/10 hover:border-[#3B82F6]/60 hover:shadow-[#3B82F6]/10'
                    : 'bg-white/45 border-black/10 hover:border-[#3B82F6] hover:shadow-[#3B82F6]/15'
                }`}
              >
                <div className="p-6 sm:p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  {/* Left: Project Image Area */}
                  <div className="lg:col-span-5 order-1 lg:order-1">
                    <div
                      className={`relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-xl border flex flex-col items-center justify-center p-2 text-center overflow-hidden transition-all duration-300 group-hover:scale-[1.01] ${
                        isDark
                          ? 'bg-[#1C1C1C] border-[#2E2E2E]'
                          : 'bg-[#EAE8E0] border-[#D8D6CC]'
                      }`}
                    >
                      <img
                        src={smartParkingImg}
                        alt="Parking Lot Management System"
                        className="w-full h-full object-contain rounded-lg"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Right: Project Details */}
                  <div className="lg:col-span-7 order-2 lg:order-2 space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-[#3B82F6]/15 text-[#3B82F6] border border-[#3B82F6]/30">
                        <Sparkles className="w-3 h-3" />
                        Capstone Project · C Language
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight">
                      Parking Lot Management System
                    </h3>

                    <TypewriterText
                      text="Designed and developed a system to organize parking details and vehicle information. Implemented vehicle registration and slot availability tracking using file handling in C."
                      speed={20}
                      className={`text-base sm:text-lg leading-relaxed ${
                        isDark ? 'text-[#9C9C94]' : 'text-[#6B6B63]'
                      }`}
                    />

                    {/* Tech Stack Row */}
                    <div className="pt-2 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold tracking-wider uppercase text-[#3B82F6] mr-1 font-heading">
                        Tech:
                      </span>
                      {['C', 'File Handling', 'Data Structuring'].map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 text-xs font-medium rounded-md border ${
                            isDark
                              ? 'bg-[#1C1C1C] border-[#2A2A2A] text-[#F5F4EF]'
                              : 'bg-[#EAE8E0] border-[#D4D2C8] text-[#111111]'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Coming Soon Card */}
              <div
                className={`rounded-xl border-2 border-dashed p-8 sm:p-10 text-center transition-all duration-300 hover:-translate-y-0.5 ${
                  isDark
                    ? 'border-[#2D2D2D] bg-[#111111]/50 hover:border-[#3B82F6]/60 hover:bg-[#141414] hover:shadow-lg hover:shadow-[#3B82F6]/5'
                    : 'border-[#D0CEC4] bg-[#F5F4EF]/50 hover:border-[#3B82F6] hover:bg-[#FDFDFB] hover:shadow-lg hover:shadow-[#3B82F6]/10'
                }`}
              >
                <div className="flex flex-col items-center justify-center gap-3 max-w-lg mx-auto">
                  <FolderGit2 className="w-6 h-6 text-[#3B82F6]" />
                  <p
                    className={`text-sm sm:text-base font-medium leading-relaxed ${
                      isDark ? 'text-[#9C9C94]' : 'text-[#6B6B63]'
                    }`}
                  >
                    More projects coming soon — currently building my portfolio with new work.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className={`py-12 md:py-16 px-6 sm:px-10 md:px-12 my-12 rounded-3xl border backdrop-blur-xl shadow-2xl transition-all duration-300 scroll-mt-24 ${
            isDark
              ? 'bg-[#0D0D0D]/60 border-white/15 text-white shadow-black/80'
              : 'bg-[#F5F4EF]/75 border-black/15 text-black shadow-black/10'
          }`}
        >
          <Reveal>
            <div className="space-y-10 max-w-4xl">
              {/* Header & Label */}
              <div>
                <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#3B82F6] font-heading mb-3">
                  GET IN TOUCH
                </p>
                <h2 className="font-heading font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08]">
                  Let's work together.
                </h2>
              </div>

              {/* Subtext */}
              <TypewriterText
                text="Open to internships, tutoring opportunities, and collaborations. Feel free to reach out."
                speed={25}
                className={`text-lg sm:text-xl font-normal leading-relaxed max-w-2xl ${
                  isDark ? 'text-[#9C9C94]' : 'text-[#6B6B63]'
                }`}
              />



              {/* Contact Details & Social Links Row */}
              <div
                className={`pt-8 border-t flex flex-wrap items-center justify-between gap-6 ${
                  isDark ? 'border-[#222222]' : 'border-[#E2E0D6]'
                }`}
              >
                {/* Location */}
                <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm sm:text-base font-medium">
                  <div
                    className={`flex items-center gap-2.5 ${
                      isDark ? 'text-[#9C9C94]' : 'text-[#6B6B63]'
                    }`}
                  >
                    <MapPin className="w-4 h-4 text-[#3B82F6]" />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </div>

                {/* Social Icon Links */}
                <div className="flex items-center gap-3">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/zannatul-ferdous-73600a427/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className={`p-3 rounded-lg border transition-all duration-200 ${
                      isDark
                        ? 'bg-[#141414] border-[#262626] text-[#F5F4EF] hover:border-[#3B82F6] hover:text-[#3B82F6]'
                        : 'bg-[#EAE8E0] border-[#D8D6CC] text-[#111111] hover:border-[#3B82F6] hover:text-[#3B82F6]'
                    }`}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/zannatul.ferdous.182827"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className={`p-3 rounded-lg border transition-all duration-200 ${
                      isDark
                        ? 'bg-[#141414] border-[#262626] text-[#F5F4EF] hover:border-[#3B82F6] hover:text-[#3B82F6]'
                        : 'bg-[#EAE8E0] border-[#D8D6CC] text-[#111111] hover:border-[#3B82F6] hover:text-[#3B82F6]'
                    }`}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/_zfbrishti__?igsh=MXM5Zzljd3FrMDg3OQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className={`p-3 rounded-lg border transition-all duration-200 ${
                      isDark
                        ? 'bg-[#141414] border-[#262626] text-[#F5F4EF] hover:border-[#3B82F6] hover:text-[#3B82F6]'
                        : 'bg-[#EAE8E0] border-[#D8D6CC] text-[#111111] hover:border-[#3B82F6] hover:text-[#3B82F6]'
                    }`}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/8801827645591"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className={`p-3 rounded-lg border transition-all duration-200 ${
                      isDark
                        ? 'bg-[#141414] border-[#262626] text-[#F5F4EF] hover:border-[#3B82F6] hover:text-[#3B82F6]'
                        : 'bg-[#EAE8E0] border-[#D8D6CC] text-[#111111] hover:border-[#3B82F6] hover:text-[#3B82F6]'
                    }`}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      {/* Thin Glass Footer */}
      <footer
        className={`max-w-7xl mx-auto px-6 py-6 mb-8 rounded-2xl border backdrop-blur-xl shadow-xl transition-all text-xs sm:text-sm font-medium ${
          isDark
            ? 'border-white/15 bg-[#0D0D0D]/70 text-[#9C9C94]'
            : 'border-black/10 bg-[#F5F4EF]/80 text-[#6B6B63]'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Zannatul Ferdous. All rights reserved.</p>

          <button
            onClick={() => scrollToSection('home')}
            className="group inline-flex items-center gap-1.5 transition-colors hover:text-[#3B82F6]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </footer>
    </div>
  );
}