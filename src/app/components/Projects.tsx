"use client";
import React from 'react';
import { PROJECTS } from '../../data';

export default function Projects() {
    return (
        <section id="projects" className="py-24 border-t border-[#1A1A1A]/10 bg-transparent overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <h2 className="font-syne text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-4 uppercase tracking-tight">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Project items will be mapped here */}
                    {PROJECTS.map((project) => (
                        <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={project.images[0]} alt={project.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="font-bold text-lg">{project.name}</h3>
                                <p className="text-gray-600">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}