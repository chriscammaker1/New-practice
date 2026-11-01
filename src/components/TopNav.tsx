import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone, ShieldCheck, HelpCircle, User, Layers, Route, MessageSquare, Calendar } from 'lucide-react';
import { BrighthouseLogo } from './BrighthouseLogo.tsx';
import { PRACTICE_PHONE_DISPLAY, PRACTICE_PHONE_RAW, PRACTICE_SMS_PREFILL } from '../data/presets.ts';
import { PageMode, ThemeMode } from '../types.ts';

interface TopNavProps {
  currentPage: PageMode;
  onSelectPage: (page: PageMode) => void;
  onPrimaryCtaClick: () => void;
  onNavigateSection: (sectionId: string) => void;
  isScrolled: boolean;
  theme: ThemeMode;
  isMobileViewport?: boolean;
}

export const TopNav: React.FC<TopNavProps> = ({
  currentPage,
  onSelectPage,
  onPrimaryCtaClick,
  onNavigateSection,
  isScrolled,
  theme,
  isMobileViewport = false,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (target: 'home' | 'approach' | 'services' | 'about' | 'faq' | 'consultation') => {
    setMobileMenuOpen(false);

    if (target === 'home') {
      onSelectPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'approach') {
      if (currentPage !== 'home') {
        onSelectPage('home');
        setTimeout(() => onNavigateSection('approach'), 100);
      } else {
        onNavigateSection('approach');
      }
    } else if (target === 'services') {
      onSelectPage('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'about') {
      onSelectPage('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'faq') {
      onSelectPage('faq');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'consultation') {
      if (currentPage !== 'home') {
        onSelectPage('home');
        setTimeout(() => onNavigateSection('consultation'), 100);
      } else {
        onNavigateSection('consultation');
      }
    }
  };

  const handleConsultationClick = () => {
    setMobileMenuOpen(false);
    onPrimaryCtaClick();
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
          theme === 'dark'
            ? isScrolled
              ? 'bg-neutral-950/95 backdrop-blur-md border-neutral-800 shadow-xs'
              : 'bg-neutral-950/90 backdrop-blur-sm border-neutral-800/80'
            : isScrolled
              ? 'bg-white/95 backdrop-blur-md border-[#E8EEF3] shadow-xs'
              : 'bg-white/90 backdrop-blur-sm border-[#E8EEF3]/60'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-3">
          {/* Brand Lockup on Left */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="transition-opacity hover:opacity-90 cursor-pointer shrink-0"
            aria-label="CAM Child & Family Psychology Home"
          >
            <BrighthouseLogo theme={theme} />
          </a>

          {/* Desktop Navigation Links */}
          {!isMobileViewport && (
            <nav className="hidden md:flex items-center gap-6 text-xs font-semibold font-sans tracking-wide">
              {/* Home */}
              <button
                type="button"
                onClick={() => handleNavClick('home')}
                className={`whitespace-nowrap py-1 px-1.5 transition-colors cursor-pointer relative ${
                  currentPage === 'home'
                    ? 'text-[#1B2A4A] dark:text-white font-bold'
                    : 'text-[#486581] dark:text-neutral-300 hover:text-[#1B2A4A] dark:hover:text-white'
                }`}
              >
                <span>Home</span>
                {currentPage === 'home' && (
                  <span className="absolute bottom-0 left-1 right-1 h-0.5 bg-[#C59B27] rounded-full" />
                )}
              </button>

              {/* Approach (smooth scroll to #approach on Home) */}
              <button
                type="button"
                onClick={() => handleNavClick('approach')}
                className="whitespace-nowrap py-1 px-1.5 text-[#486581] dark:text-neutral-300 hover:text-[#1B2A4A] dark:hover:text-white transition-colors cursor-pointer"
              >
                Approach
              </button>

              {/* Services (dedicated page) */}
              <button
                type="button"
                onClick={() => handleNavClick('services')}
                className={`whitespace-nowrap py-1 px-1.5 transition-colors cursor-pointer relative ${
                  currentPage === 'services'
                    ? 'text-[#1B2A4A] dark:text-white font-bold'
                    : 'text-[#486581] dark:text-neutral-300 hover:text-[#1B2A4A] dark:hover:text-white'
                }`}
              >
                <span>Services</span>
                {currentPage === 'services' && (
                  <span className="absolute bottom-0 left-1 right-1 h-0.5 bg-[#C59B27] rounded-full" />
                )}
              </button>

              {/* About Dr. McNulty (dedicated page) */}
              <button
                type="button"
                onClick={() => handleNavClick('about')}
                className={`whitespace-nowrap py-1 px-1.5 transition-colors cursor-pointer relative ${
                  currentPage === 'about'
                    ? 'text-[#1B2A4A] dark:text-white font-bold'
                    : 'text-[#486581] dark:text-neutral-300 hover:text-[#1B2A4A] dark:hover:text-white'
                }`}
              >
                <span>About Dr. McNulty</span>
                {currentPage === 'about' && (
                  <span className="absolute bottom-0 left-1 right-1 h-0.5 bg-[#C59B27] rounded-full" />
                )}
              </button>

              {/* FAQ (dedicated page) */}
              <button
                type="button"
                onClick={() => handleNavClick('faq')}
                className={`whitespace-nowrap py-1 px-1.5 transition-colors cursor-pointer relative ${
                  currentPage === 'faq'
                    ? 'text-[#1B2A4A] dark:text-white font-bold'
                    : 'text-[#486581] dark:text-neutral-300 hover:text-[#1B2A4A] dark:hover:text-white'
                }`}
              >
                <span>FAQ</span>
                {currentPage === 'faq' && (
                  <span className="absolute bottom-0 left-1 right-1 h-0.5 bg-[#C59B27] rounded-full" />
                )}
              </button>
            </nav>
          )}

          {/* Right Actions: Phone + Consultation Button + Hamburger Menu */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Direct Clinical Phone (Desktop) */}
            {!isMobileViewport && (
              <a
                href={`tel:${PRACTICE_PHONE_RAW}`}
                className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-sans font-medium text-[#486581] hover:text-[#1B2A4A] dark:text-neutral-300 dark:hover:text-white transition-colors"
                title="Direct Practice Line"
              >
                <Phone size={13} className="text-[#7A9A8B]" />
                <span>{PRACTICE_PHONE_DISPLAY}</span>
              </a>
            )}

            {/* Consultation Details Button */}
            <button
              type="button"
              onClick={handleConsultationClick}
              className={`px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs font-semibold rounded-xl tracking-tight transition-all active:scale-[0.98] shadow-xs cursor-pointer flex items-center gap-1.5 ${
                theme === 'dark'
                  ? 'bg-sky-600 hover:bg-sky-500 text-white'
                  : 'bg-[#1B2A4A] hover:bg-[#253961] text-white'
              }`}
            >
              <Calendar size={13} className="text-[#C59B27]" />
              <span>Consult Details</span>
            </button>

            {/* Mobile Hamburger Menu Button (≡) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className={`${
                isMobileViewport ? 'flex' : 'md:hidden'
              } p-2 rounded-xl border border-[#8FA590]/40 text-[#1B2A4A] dark:text-white bg-white/80 dark:bg-neutral-900 hover:bg-[#F8FAFB] transition-colors cursor-pointer`}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer & Backdrop */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-start">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-200"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative z-10 w-full bg-white dark:bg-neutral-950 border-b border-[#E8EEF3] dark:border-neutral-800 shadow-2xl p-5 space-y-4 animate-in slide-in-from-top-4 duration-200">
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#E8EEF3] dark:border-neutral-800">
              <BrighthouseLogo theme={theme} size="sm" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-[#627D98] hover:text-[#1B2A4A] dark:hover:text-white hover:bg-[#F8FAFB] transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-1.5 font-sans">
              <button
                type="button"
                onClick={() => handleNavClick('home')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer text-left ${
                  currentPage === 'home'
                    ? 'bg-[#F0F6FA] dark:bg-neutral-800 text-[#1B2A4A] dark:text-white'
                    : 'text-[#486581] dark:text-neutral-300 hover:bg-[#F8FAFB]'
                }`}
              >
                <span>Home</span>
                <ChevronRight size={15} className="text-[#8FA590]" />
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('approach')}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-[#486581] dark:text-neutral-300 hover:bg-[#F8FAFB] transition-colors cursor-pointer text-left"
              >
                <span className="flex items-center gap-2.5">
                  <Route size={16} className="text-[#C59B27]" />
                  <span>Our Approach</span>
                </span>
                <ChevronRight size={15} className="text-[#8FA590]" />
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('services')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer text-left ${
                  currentPage === 'services'
                    ? 'bg-[#F0F6FA] dark:bg-neutral-800 text-[#1B2A4A] dark:text-white'
                    : 'text-[#486581] dark:text-neutral-300 hover:bg-[#F8FAFB]'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Layers size={16} className="text-[#7A9A8B]" />
                  <span>Services Page</span>
                </span>
                <ChevronRight size={15} className="text-[#8FA590]" />
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('about')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer text-left ${
                  currentPage === 'about'
                    ? 'bg-[#F0F6FA] dark:bg-neutral-800 text-[#1B2A4A] dark:text-white'
                    : 'text-[#486581] dark:text-neutral-300 hover:bg-[#F8FAFB]'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <User size={16} className="text-[#334E68]" />
                  <span>About Dr. McNulty</span>
                </span>
                <ChevronRight size={15} className="text-[#8FA590]" />
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('faq')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer text-left ${
                  currentPage === 'faq'
                    ? 'bg-[#F0F6FA] dark:bg-neutral-800 text-[#1B2A4A] dark:text-white'
                    : 'text-[#486581] dark:text-neutral-300 hover:bg-[#F8FAFB]'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <HelpCircle size={16} className="text-[#7A9A8B]" />
                  <span>FAQ</span>
                </span>
                <ChevronRight size={15} className="text-[#8FA590]" />
              </button>
            </nav>

            {/* Quick Contact & Action Buttons */}
            <div className="pt-2 space-y-2">
              <button
                type="button"
                onClick={handleConsultationClick}
                className="w-full py-3 px-4 rounded-xl bg-[#1B2A4A] hover:bg-[#253961] text-white text-sm font-semibold shadow-sm transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar size={15} className="text-[#C59B27]" />
                <span>Consultation Details &amp; Inquiry</span>
                <ChevronRight size={15} className="opacity-70" />
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${PRACTICE_PHONE_RAW}`}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-[#E8EEF3] dark:border-neutral-800 bg-white dark:bg-neutral-900 text-xs font-semibold text-[#1B2A4A] dark:text-white text-center"
                >
                  <Phone size={13} className="text-[#7A9A8B]" />
                  <span>Call Line</span>
                </a>
                <a
                  href={`sms:${PRACTICE_PHONE_RAW}?body=${encodeURIComponent(PRACTICE_SMS_PREFILL)}`}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-[#E8EEF3] dark:border-neutral-800 bg-white dark:bg-neutral-900 text-xs font-semibold text-[#1B2A4A] dark:text-white text-center"
                >
                  <MessageSquare size={13} className="text-[#C59B27]" />
                  <span>Text / SMS</span>
                </a>
              </div>

              <div className="mt-2 text-center text-[11px] text-[#627D98] font-sans">
                Greenwich, CT · Telehealth across CT &amp; NY
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
