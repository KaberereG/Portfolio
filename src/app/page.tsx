"use client";

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stack from './components/Stack';
import Journey from './components/Journey';
import Projects from './components/Projects';
import ProjectWizard from './components/ProjectWizard';
import ConnectModal from './components/ConnectModal';
import Footer from './components/Footer';
import { Project } from '../types';
import ProjectDetailModal from './components/ProjectDetailModal';
import { PROJECTS } from '../data';

export default function App() {
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openConnect = () => setIsConnectOpen(true);
  const closeConnect = () => setIsConnectOpen(false);

  return (
    <div className="bg-[#F5F2ED] text-[#1A1A1A] relative min-h-screen selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar onConnectClick={openConnect} />

      <main className="w-full">
        <Hero />

        <Projects onSelectProject={setSelectedProject} />

        <Stack />

        <Journey />

        <ProjectWizard />
      </main>

      <Footer onConnectClick={openConnect} />

      <ConnectModal isOpen={isConnectOpen} onClose={closeConnect} />

      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        onConnectClick={openConnect}
        onSelectProject={setSelectedProject}
        allProjects={PROJECTS}
      />
    </div>
  );
}
