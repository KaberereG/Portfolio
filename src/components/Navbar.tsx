import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onConnectClick: () => void;
}

export default function Navbar({ onConnectClick }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('hub');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background change on scroll
      setScrolled(window.scrollY > 50);

      // Simple intersection tracker
      const sections = ['hub', 'stack', 'journey'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b ${
          scrolled ? 'bg-[#F5F2ED]/95 py-3 border-[#1A1A1A]/10 backdrop-blur-md' : 'bg-transparent py-5 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center w-full">
          {/* Logo */}
          <button onClick={() => scrollToSection('hub')} className="flex flex-col items-start leading-none group text-left cursor-pointer">
            <span className="font-syne text-xl font-extrabold tracking-tighter text-[#1A1A1A] uppercase group-hover:text-primary transition-colors">
              GK
            </span>
            <span className="font-mono text-[9px] text-primary tracking-widest uppercase">
              Portfolio
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {['hub', 'stack', 'journey'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`font-mono text-xs uppercase tracking-[0.25em] transition-all duration-300 relative py-1 cursor-pointer ${
                  activeSection === section
                    ? 'text-primary font-semibold'
                    : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
                }`}
              >
                {section}
                {activeSection === section && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-primary" />
                )}
              </button>
            ))}

            <button
              onClick={onConnectClick}
              className="group font-mono text-xs uppercase tracking-[0.2em] text-white bg-primary hover:bg-[#1A1A1A] hover:text-white px-5 py-2.5 transition-all duration-300 cursor-pointer active:scale-95 flex items-center gap-1.5"
            >
              Connect
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-primary hover:text-[#1A1A1A] p-1 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-30 bg-[#F5F2ED] border-l border-[#1A1A1A]/10 transition-transform duration-500 transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col justify-between p-8 pt-24`}
      >
        <div className="flex flex-col gap-6">
          {['hub', 'stack', 'journey'].map((section, idx) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-left py-4 border-b border-[#1A1A1A]/10 flex justify-between items-center group cursor-pointer"
            >
              <span className="font-syne text-3xl font-bold uppercase tracking-tight text-[#1A1A1A] group-hover:text-primary transition-colors">
                <span className="font-mono text-xs text-primary/60 mr-4">0{idx + 1}</span>
                {section}
              </span>
              <ArrowUpRight size={20} className="text-[#1A1A1A]/30 group-hover:text-primary transition-colors" />
            </button>
          ))}
        </div>

        <button
          onClick={() => {
            setMobileMenuOpen(false);
            onConnectClick();
          }}
          className="w-full text-center font-mono text-sm uppercase tracking-[0.25em] text-white bg-primary py-4 font-bold active:scale-95 transition-transform cursor-pointer hover:bg-[#1A1A1A]"
        >
          Initialize Connection
        </button>
      </div>
    </>
  );
}
