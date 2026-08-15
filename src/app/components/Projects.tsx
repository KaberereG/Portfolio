"use client";
import React from 'react';
import { PROJECTS } from '../../data';
import Image from 'next/image';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Project } from '../../types';


interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-transparent border-t border-[#1A1A1A]/10 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1A1A1A]/10 pb-8">
          <div className="space-y-2">
            <h2 className="font-syne text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight uppercase">
              PROJECTS
            </h2>
          </div>

          <p className="font-sans text-[#1A1A1A]/70 text-sm max-w-md font-light leading-relaxed">
            A showcase of production systems, architecture decisions, and core features engineered for global platforms and mobile deployments.
          </p>
        </div>

        {/* Projects Grid (2 Columns matching user screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              onClick={() => onSelectProject(project)}
              className="bg-white/40 border border-[#1A1A1A]/10 hover:border-primary/50 transition-all duration-300 p-6 md:p-8 flex flex-col justify-between space-y-6 group cursor-pointer relative shadow-2xs hover:shadow-md"
            >
              <div className="space-y-6">
                {/* Screenshot & Top Action Frame */}
                <div className="relative border border-[#1A1A1A]/10 bg-white/60 p-3 rounded-xs overflow-hidden group-hover:border-primary/30 transition-colors">
                    <div className="relative cursor-pointer w-full h-64 ">
                        <Image
                            src={project.images[0]}
                            alt={project.title}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 400px"
                        />
                    </div>

                  {/* Top Right External Link Trigger */}
                  <div className="absolute top-4 right-4 p-2 bg-white/90 border border-[#1A1A1A]/15 text-[#1A1A1A]/70 group-hover:text-primary group-hover:border-primary transition-all shadow-xs">
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Project Title & Category */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-primary uppercase tracking-widest font-bold">
                      {project.subtitle}
                    </span>
                    <span className="font-mono text-[9px] text-[#1A1A1A]/50 uppercase border border-[#1A1A1A]/10 px-2 py-0.5 rounded-xs">
                      {project.period}
                    </span>
                  </div>

                  <h3 className="font-syne text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight uppercase group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Exact Description Text from Prompt */}
                <p className="font-sans text-[#1A1A1A]/75 text-xs sm:text-sm leading-relaxed font-light">
                  {project.summary}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.slice(0, 5).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[10px] uppercase bg-[#E2DED6]/60 text-[#1A1A1A]/80 px-2.5 py-1 rounded-xs border border-[#1A1A1A]/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="font-mono text-[10px] uppercase bg-primary/10 text-primary px-2 py-1 font-bold">
                      +{project.techStack.length - 5} MORE
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Trigger CTA */}
              <div className="pt-4 border-t border-[#1A1A1A]/10 flex items-center justify-between text-xs font-mono">
                <span className="text-primary font-bold uppercase tracking-wider group-hover:underline flex items-center gap-1">
                  View Full Case Study & Code Details
                  <ArrowUpRight size={13} />
                </span>
                <span className="text-[#1A1A1A]/40 text-[10px]">
                  CLICK TO EXPLORE
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
