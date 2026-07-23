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

export default function App() {
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  const openConnect = () => setIsConnectOpen(true);
  const closeConnect = () => setIsConnectOpen(false);

  return (
    <div className="bg-[#F5F2ED] text-[#1A1A1A] relative min-h-screen selection:bg-primary selection:text-white overflow-x-hidden">
      {/* Sticky Top Navigation */}
      <Navbar onConnectClick={openConnect} />

      {/* Main Page Layout */}
      <main className="w-full">
        {/* Hero fold with ambient glow matrices */}
        <Hero />

        <Projects />

        {/* 12-grid skills layout */}
        <Stack />

        {/* Dual-sided chronological journey timeline */}
        <Journey />

        {/* Project configuration wizard */}
        <ProjectWizard />
      </main>

      {/* Sophisticated symmetrical footer */}
      <Footer onConnectClick={openConnect} />

      {/* Sliding Direct Connection Modal Portal */}
      <ConnectModal isOpen={isConnectOpen} onClose={closeConnect} />
    </div>
  );
}
