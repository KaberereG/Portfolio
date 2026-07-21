import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS } from '../data';
import { Skill } from '../types';
import { Cpu, Terminal, Layers, Star, X, Briefcase } from 'lucide-react';

export default function Stack() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  return (
    <section id="stack" className="py-24 border-t border-[#1A1A1A]/10 bg-transparent overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="space-y-3">
            <h2 className="font-syne text-4xl md:text-5xl font-extrabold uppercase text-[#1A1A1A] tracking-tight">
              The Stack
            </h2>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary font-semibold">
              Technical Mastery & Tooling
            </p>
          </div>
          <div className="h-[1px] flex-grow bg-[#1A1A1A]/10 mx-12 hidden md:block self-center" />
          <div className="font-sans text-[#1A1A1A]/60 text-sm md:text-base max-w-sm text-left md:text-right font-light leading-relaxed">
            A curated selection of technologies used to build resilient, scalable digital ecosystems. Click any card to inspect technical depth.
          </div>
        </div>

        {/* 12-Grid of Skills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-l border-t border-[#1A1A1A]/10">
          {SKILLS.map((skill) => (
            <button
              key={skill.id}
              onClick={() => setSelectedSkill(skill)}
              className="skill-card text-left p-8 md:p-10 border-r border-b border-[#1A1A1A]/10 transition-all duration-300 group relative overflow-hidden bg-white/30 hover:bg-white text-[#1A1A1A] cursor-pointer"
            >
              {/* Subtle hover terracotta bar on the left */}
              <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300" />
              
              <span className="absolute top-4 right-4 font-mono text-[10px] text-[#1A1A1A]/30 group-hover:text-primary transition-colors">
                {skill.number}
              </span>

              <h3 className="font-mono text-xs md:text-sm uppercase tracking-widest mb-1 group-hover:text-primary transition-colors font-semibold">
                {skill.name}
              </h3>
              
              <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider group-hover:text-[#1A1A1A] transition-colors">
                {skill.category}
              </p>

              {/* Little status indicator */}
              <div className="mt-4 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="w-1 h-1 rounded-full bg-primary" />
                <span className="font-mono text-[8px] uppercase tracking-widest text-primary">Inspect Node</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Side Slide-out Skill Inspector Panel */}
      <AnimatePresence>
        {selectedSkill && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
              className="fixed inset-0 bg-black/60 z-50 cursor-pointer backdrop-blur-xs"
            />

            {/* Sliding Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-lg bg-[#F5F2ED] border-l border-[#1A1A1A]/10 z-50 p-8 md:p-10 flex flex-col justify-between overflow-y-auto"
            >
              {/* Top Panel Actions */}
              <div className="space-y-8 text-[#1A1A1A]">
                <div className="flex justify-between items-center border-b border-[#1A1A1A]/10 pb-5">
                  <div className="flex items-center gap-2">
                    <Terminal size={16} className="text-primary" />
                    <span className="font-mono text-xs uppercase tracking-widest text-[#1A1A1A]/60">
                      System // Skill_Inspector
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="p-1 text-[#1A1A1A]/60 hover:text-primary transition-colors cursor-pointer"
                    aria-label="Close panel"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Skill Header */}
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="font-mono text-xs text-primary">{selectedSkill.category}</span>
                    <span className="font-mono text-[10px] text-neutral-500">ID: {selectedSkill.id.toUpperCase()}_{selectedSkill.number}</span>
                  </div>
                  <h3 className="font-syne text-3xl font-extrabold uppercase text-[#1A1A1A] tracking-tight">
                    {selectedSkill.name}
                  </h3>
                </div>

                {/* Mastery metrics */}
                <div className="grid grid-cols-2 gap-4 border border-[#1A1A1A]/10 p-4 bg-white/60">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase text-neutral-500 block">Experience</span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-syne text-2xl font-bold text-[#1A1A1A]">{selectedSkill.experienceYears}</span>
                      <span className="font-mono text-xs text-neutral-500">Years</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase text-neutral-500 block">Expertise Level</span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-syne text-2xl font-bold text-primary">{selectedSkill.masteryLevel}%</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase text-primary tracking-widest block">Core Competency</span>
                  <p className="font-sans text-[#1A1A1A]/80 text-sm leading-relaxed font-light">
                    {selectedSkill.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-4">
                  <span className="font-mono text-[10px] uppercase text-primary tracking-widest block">Key Engineering Outcomes</span>
                  <ul className="space-y-3">
                    {selectedSkill.highlights.map((highlight, index) => (
                      <li key={index} className="flex gap-3 text-xs leading-relaxed text-[#1A1A1A]/70">
                        <span className="text-primary mt-1 font-mono font-bold">{index + 1}.</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Details Footer */}
              <div className="border-t border-[#1A1A1A]/10 pt-6 mt-8">
                <div className="flex items-center gap-3 text-neutral-500 font-mono text-[9px] uppercase tracking-widest">
                  <Briefcase size={12} className="text-neutral-500" />
                  <span>Verified via live system deployments</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
