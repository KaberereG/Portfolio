"use client";
import React from 'react';
import { PROJECTS } from '../../data';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
    return (
        <section id="projects" className="py-24 border-t border-[#1A1A1A]/10 bg-transparent overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <h2 className="font-syne text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-4 uppercase tracking-tight">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                    {/* Project items will be mapped here */}
                    {PROJECTS.map((project) => (
                        <div onClick = {()=>{window.location.href = project.link}} key={project.id} className="group relative cursor-pointer border border-[#1A1A1A]/10 bg-white/30 p-6 md:p-8 hover:border-primary/30 hover:bg-white transition-all duration-300">
                            <ExternalLink
                                size={18}
                                className="absolute top-4 right-4 text-[#1A1A1A]/40 group-hover:text-primary transition-colors"
                                />
                            <Image src={project.images[0]} alt={project.name} className="w-full object-cover" width={400} height={200} />
                            <div className="p-4">
                                <h3 className="font-syne text-xl md:text-2xl font-bold text-[#1A1A1A] mb-1 uppercase tracking-tight group-hover:text-primary transition-colors">{project.name}</h3>
                                <p className="font-sans text-[#1A1A1A]/70 text-sm font-light leading-relaxed mb-4">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}