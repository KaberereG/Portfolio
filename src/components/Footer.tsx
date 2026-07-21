import React from 'react';
import { MapPin } from 'lucide-react';

interface FooterProps {
  onConnectClick: () => void;
}

export default function Footer({ onConnectClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#1A1A1A]/10 bg-transparent py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Large Brand Typography */}
        <div className="flex flex-col items-center md:items-start select-none">
          <span className="font-syne text-4xl font-extrabold tracking-tighter text-[#1A1A1A] uppercase leading-none">
            GK
          </span>
          <span className="font-mono text-[9px] text-primary tracking-widest uppercase mt-0.5">
            Architecture
          </span>
        </div>

        {/* Legal & Navigation links */}
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="font-mono text-[10px] tracking-tight text-[#1A1A1A]/50 uppercase">
            © {currentYear} GRACE WAITHERA KABERERE // ALL SYSTEMS SECURED
          </p>
          <div className="flex gap-6 text-[10px] font-mono uppercase tracking-wider">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#1A1A1A]/60 hover:text-primary transition-colors cursor-pointer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#1A1A1A]/60 hover:text-primary transition-colors cursor-pointer"
            >
              LinkedIn
            </a>
            <button
              onClick={onConnectClick}
              className="text-[#1A1A1A]/60 hover:text-primary transition-colors cursor-pointer bg-transparent border-none p-0 uppercase"
            >
              Read.cv
            </button>
          </div>
        </div>

        {/* Physical Coord Indicator */}
        <div className="flex items-center gap-2 text-[#1A1A1A]/70 border border-[#1A1A1A]/10 bg-white/40 px-4 py-2 font-mono text-[11px] uppercase tracking-wider">
          <MapPin size={13} className="text-primary animate-pulse" />
          <span>Nairobi, Kenya</span>
        </div>
      </div>
    </footer>
  );
}
