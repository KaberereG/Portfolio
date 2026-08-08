"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { JOURNEY } from '../../data';
import { ChevronDown, Calendar, Award, Code, CheckSquare } from 'lucide-react';

export default function Journey() {
  const [expandedId, setExpandedId] = useState<string | null>('role-1');

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="journey" className="py-24 bg-[#F5F2ED] relative overflow-hidden border-t border-[#1A1A1A]/10">
     
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-tight">
            The Journey
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto" />
          <p className="font-sans text-[#1A1A1A]/60 text-sm max-w-md mx-auto mt-4 font-light">
            An overview of architectural growth, tech leadership, and native mobile specialization.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central bar (Desktop: centered; Mobile: left-aligned) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#1A1A1A]/10 md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {JOURNEY.map((item, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedId === item.id;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-stretch justify-between w-full ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content card container */}
                  <div className={`w-full md:w-[45%] pl-10 md:pl-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div
                      onClick={() => toggleExpand(item.id)}
                      className="group cursor-pointer border border-[#1A1A1A]/10 bg-white/30 p-6 md:p-8 hover:border-primary/30 hover:bg-white transition-all duration-300 relative rounded-sm"
                    >
                      {/* Interactive indicator bar */}
                      <span className={`absolute top-0 bottom-0 w-[3px] bg-primary transition-transform duration-300 ${
                        isExpanded ? 'scale-y-100' : 'scale-y-0'
                      } ${isEven ? 'right-0' : 'left-0'}`} />

                      <div className={`flex items-center gap-2 mb-3 text-primary font-mono text-xs tracking-widest ${
                        isEven ? 'md:justify-end' : 'md:justify-start'
                      }`}>
                        <Calendar size={12} />
                        <span>{item.period}</span>
                      </div>

                      <h3 className="font-syne text-xl md:text-2xl font-bold text-[#1A1A1A] mb-1 uppercase tracking-tight group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      
                      {item.company && (
                        <p className="font-mono text-xs text-primary/80 tracking-wider mb-4 font-semibold">
                          {item.company.toUpperCase()}
                        </p>
                      )}

                      <p className="font-sans text-[#1A1A1A]/70 text-sm font-light leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Expandable detailed outcomes */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="border-t border-[#1A1A1A]/10 pt-4 mt-4 space-y-3">
                              <span className={`font-mono text-[10px] text-primary tracking-widest uppercase block ${
                                isEven ? 'md:text-right' : 'md:text-left'
                              }`}>
                                Core Contributions
                              </span>
                              <ul className="space-y-2 text-left">
                                {item.details.map((detail, idx) => (
                                  <li key={idx} className="flex gap-2.5 text-xs text-[#1A1A1A]/70 leading-relaxed font-light">
                                    <CheckSquare size={13} className="text-primary mt-1 shrink-0" />
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Tech stack tags */}
                      <div className={`flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#1A1A1A]/10 ${
                        isEven ? 'md:justify-end' : 'md:justify-start'
                      }`}>
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[9px] uppercase tracking-wider bg-white/50 border border-[#1A1A1A]/10 text-[#1A1A1A]/60 px-2.5 py-1"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Expand Chevron */}
                      <div className="flex mt-3 justify-center text-neutral-400 group-hover:text-primary transition-colors">
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={16} />
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Absolute Timeline Pulse Node */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#F5F2ED] border-2 border-primary rounded-full transform -translate-x-1/2 z-10 top-8 md:top-10 transition-all duration-300 group-hover:scale-125" />

                  {/* Empty Spacer column on opposite side on desktop */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
