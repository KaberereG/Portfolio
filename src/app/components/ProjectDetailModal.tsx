import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ExternalLink,
  Terminal,
  Zap,
  ChevronLeft,
  ChevronRight,
  Send
} from 'lucide-react';
import { Project } from '../../types';
import Image from 'next/image';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onConnectClick: () => void;
  onSelectProject?: (project: Project) => void;
  allProjects?: Project[];
}

export default function ProjectDetailModal({
  project,
  isOpen,
  onClose,
  onConnectClick,
  onSelectProject,
  allProjects = []
}: ProjectDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'contributions' | 'architecture' | 'screenshots' | 'challenges'>('contributions');
  const [selectedScreenshotIdx, setSelectedScreenshotIdx] = useState(0);

  if (!isOpen || !project) return null;

  const currentProjectIdx = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentProjectIdx > 0 ? allProjects[currentProjectIdx - 1] : null;
  const nextProject = currentProjectIdx < allProjects.length - 1 ? allProjects[currentProjectIdx + 1] : null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1A1A1A]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          className="w-full max-w-6xl bg-[#F5F2ED] text-[#1A1A1A] border border-[#1A1A1A]/20 shadow-2xl relative overflow-hidden my-auto max-h-[92vh] flex flex-col rounded-sm"
        >
          {/* Top Modal Navigation Control Bar */}
          <div className="sticky top-0 z-20 bg-[#F5F2ED]/95 backdrop-blur-md border-b border-[#1A1A1A]/10 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-bold">
                CASE STUDY // {project.id.toUpperCase()}
              </span>
              <span className="text-[#1A1A1A]/30">|</span>
              <span className="font-mono text-[10px] text-[#1A1A1A]/60 hidden sm:inline">
                {project.category}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {project.externalUrl && (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs uppercase tracking-wider text-primary border border-primary/30 hover:bg-primary hover:text-white px-3 py-1.5 transition-all flex items-center gap-1.5"
                >
                  <span>Company Site</span>
                  <ExternalLink size={12} />
                </a>
              )}

              <button
                onClick={onClose}
                className="p-2 text-[#1A1A1A]/60 hover:text-[#1A1A1A] border border-[#1A1A1A]/10 hover:border-primary transition-colors cursor-pointer bg-white/60"
                aria-label="Close Case Study"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-6 md:p-12 space-y-12 scrollbar-thin">
            {/* Hero Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-[#1A1A1A]/10 pb-10">
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="font-mono text-xs text-primary font-bold uppercase tracking-widest block">
                    {project.subtitle}
                  </span>
                  <h1 className="font-syne text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1A1A1A]">
                    {project.title}
                  </h1>
                </div>

                <p className="font-sans text-[#1A1A1A]/80 text-sm md:text-base font-light leading-relaxed">
                  {project.fullDescription}
                </p>

                {/* Role / Timeline Meta Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 font-mono text-xs border-t border-[#1A1A1A]/10">
                  <div>
                    <span className="text-[#1A1A1A]/50 text-[9px] uppercase tracking-wider block">ROLE & RESPONSIBILITY</span>
                    <span className="text-[#1A1A1A] font-semibold">{project.role}</span>
                  </div>
                  <div>
                    <span className="text-[#1A1A1A]/50 text-[9px] uppercase tracking-wider block">PERIOD</span>
                    <span className="text-[#1A1A1A] font-semibold">{project.period}</span>
                  </div>
                  <div>
                    <span className="text-[#1A1A1A]/50 text-[9px] uppercase tracking-wider block">LOCATION / SCOPE</span>
                    <span className="text-[#1A1A1A] font-semibold">{project.location || 'Global / Remote'}</span>
                  </div>
                </div>
              </div>

              {/* Interactive Visual Screenshot Preview */}
              <div className="lg:col-span-5 space-y-3">
                <div className="border border-[#1A1A1A]/15 bg-white/50 p-2 shadow-sm rounded-xs">
                  <div className="relative cursor-pointer w-full h-64 ">
                    <Image
                      src={project.images[1] || project.images[0]}
                      alt={project.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                </div>
                <p className="font-mono text-[10px] text-[#1A1A1A]/60 italic text-center">
                   {project.screenshots[selectedScreenshotIdx]?.title || project.title}
                </p>
              </div>
            </div>

            {/* Impact Metrics Grid */}
            <div className="space-y-4">
              <h3 className="font-syne text-xs uppercase tracking-[0.25em] text-[#1A1A1A]/60 font-bold">
                SYSTEM IMPACT & MEASURABLE OUTCOMES
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-white/70 border border-[#1A1A1A]/10 space-y-1 relative overflow-hidden group hover:border-primary/40 transition-colors"
                  >
                    <span className="font-syne text-2xl sm:text-3xl font-extrabold text-primary">
                      {metric.value}
                    </span>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-[#1A1A1A] font-bold">
                      {metric.label}
                    </h4>
                    {metric.description && (
                      <p className="font-sans text-[11px] text-[#1A1A1A]/60 leading-tight">
                        {metric.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Tabs for Deep Dive */}
            <div className="space-y-8">
              <div className="flex flex-wrap items-center gap-2 border-b border-[#1A1A1A]/10 pb-2">
                {[
                  { id: 'contributions', label: 'WHAT I ACTUALLY DID' },
                  { id: 'architecture', label: 'TECH STACK & ARCHITECTURE' },
                  { id: 'challenges', label: 'ENGINEERING CHALLENGES' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`font-mono text-xs uppercase tracking-wider px-5 py-2.5 transition-all cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-[#1A1A1A] text-white font-bold'
                        : 'bg-white/60 text-[#1A1A1A]/70 hover:bg-white hover:text-[#1A1A1A]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab 1: Detailed Contributions ("What I Actually Did") */}
              {activeTab === 'contributions' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.keyContributions.map((contrib, idx) => (
                      <div
                        key={idx}
                        className="p-6 bg-white/80 border border-[#1A1A1A]/10 space-y-4 hover:border-primary/40 transition-all flex flex-col justify-between"
                      >
                        <div className="space-y-2">
                          <div className="flex items-start justify-between gap-2">
                            <span className="font-mono text-[10px] text-primary font-bold uppercase tracking-widest">
                              0{idx + 1} // CONTRIBUTION
                            </span>
                          </div>
                          <h4 className="font-syne text-lg font-bold text-[#1A1A1A]">
                            {contrib.title}
                          </h4>
                          <p className="font-sans text-xs text-[#1A1A1A]/70 leading-relaxed font-light">
                            {contrib.description}
                          </p>
                        </div>

                        {contrib.impact && (
                          <div className="pt-3 border-t border-[#1A1A1A]/10 bg-primary/5 p-3 rounded-xs space-y-1">
                            <span className="font-mono text-[9px] uppercase tracking-wider text-primary font-bold block">
                              MEASURABLE IMPACT
                            </span>
                            <p className="font-sans text-xs text-[#1A1A1A] font-medium">
                              {contrib.impact}
                            </p>
                          </div>
                        )}

                        {/* {contrib.tags && (
                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {contrib.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="font-mono text-[9px] uppercase bg-[#EAE8E3] text-[#1A1A1A]/70 px-2 py-0.5 rounded-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )} */}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 2: Tech Stack & Architecture */}
              {activeTab === 'architecture' && (
                <div className="space-y-8 bg-white/60 border border-[#1A1A1A]/10 p-6 md:p-8">
                  <div className="space-y-3">
                    <h4 className="font-syne text-lg font-bold text-[#1A1A1A]">
                      Complete System Technology Matrix
                    </h4>
                    <p className="font-sans text-xs text-[#1A1A1A]/70 max-w-2xl font-light">
                      Every tool, framework, database engine, and integration selected to power this platform.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-xs uppercase tracking-wider bg-[#1A1A1A] text-white px-4 py-2 font-bold flex items-center gap-2"
                        >
                          <Zap size={12} className="text-primary" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* <div className="border-t border-[#1A1A1A]/10 pt-6 space-y-4">
                    <h5 className="font-mono text-xs uppercase tracking-wider text-[#1A1A1A]/60 font-bold">
                      ARCHITECTURAL BLUEPRINT SUMMARY
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
                      <div className="p-4 bg-white border border-[#1A1A1A]/10 space-y-1">
                        <span className="text-[9px] text-primary font-bold uppercase block">DATA LAYER & CACHING</span>
                        <p className="text-[#1A1A1A] font-medium">PostgreSQL with JSONB index queries + Redis session caching</p>
                      </div>
                      <div className="p-4 bg-white border border-[#1A1A1A]/10 space-y-1">
                        <span className="text-[9px] text-primary font-bold uppercase block">FRONTEND INTERFACE</span>
                        <p className="text-[#1A1A1A] font-medium">React 18, TypeScript, Tailwind CSS, Concurrent rendering</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              )}

              {/* Tab 3: Challenges & Solutions */}
              {activeTab === 'challenges' && (
                <div className="space-y-6">
                  {project.challenges.map((item, idx) => (
                    <div key={idx} className="p-6 bg-white/80 border border-[#1A1A1A]/10 space-y-4">
                      <div className="flex items-center gap-2 text-primary font-mono text-xs font-bold uppercase">
                        <Terminal size={14} />
                        <span>CHALLENGE 0{idx + 1}</span>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-syne text-base font-bold text-[#1A1A1A]">
                          Problem Statement:
                        </h4>
                        <p className="font-sans text-xs text-[#1A1A1A]/80 leading-relaxed font-light">
                          {item.problem}
                        </p>
                      </div>

                      <div className="space-y-2 pt-3 border-t border-[#1A1A1A]/10">
                        <h4 className="font-syne text-base font-bold text-primary">
                          Engineering Solution Implemented:
                        </h4>
                        <p className="font-sans text-xs text-[#1A1A1A]/90 leading-relaxed font-medium">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Call to Action banner */}
            <div className="p-8 bg-[#1A1A1A] text-white flex flex-col md:flex-row justify-between items-center gap-6 rounded-xs">
              <div className="space-y-1 text-center md:text-left">
                <h4 className="font-syne text-xl font-bold uppercase tracking-tight">
                  Need a similar platform architected?
                </h4>
                <p className="font-sans text-xs text-neutral-400 font-light max-w-md">
                  Grace is available for technical architecture, full-stack development, and team leading opportunities.
                </p>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onConnectClick();
                }}
                className="font-mono text-xs uppercase tracking-[0.25em] text-white bg-primary hover:bg-white hover:text-[#1A1A1A] px-8 py-4 font-bold transition-all duration-300 cursor-pointer active:scale-95 flex items-center gap-2 whitespace-nowrap"
              >
                <Send size={13} />
                Connect with me
              </button>
            </div>
          </div>

          {/* Modal Footer (Next/Prev Project Switcher) */}
          <div className="bg-[#EAE8E3] border-t border-[#1A1A1A]/10 px-6 py-3 flex justify-between items-center font-mono text-xs">
            {prevProject ? (
              <button
                onClick={() => onSelectProject?.(prevProject)}
                className="text-[#1A1A1A]/70 hover:text-primary flex items-center gap-1 cursor-pointer"
              >
                <ChevronLeft size={14} />
                <span>Prev: {prevProject.title}</span>
              </button>
            ) : (
              <span className="text-[#1A1A1A]/30">First Project</span>
            )}

            {nextProject ? (
              <button
                onClick={() => onSelectProject?.(nextProject)}
                className="text-[#1A1A1A]/70 hover:text-primary flex items-center gap-1 cursor-pointer font-bold"
              >
                <span>Next: {nextProject.title}</span>
                <ChevronRight size={14} />
              </button>
            ) : (
              <span className="text-[#1A1A1A]/30">End of Projects</span>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
