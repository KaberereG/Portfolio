"use client";
import React from 'react';
import { motion, type Variants } from 'motion/react';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  const scrollToProjects = () => {
    const projectsElement = document.getElementById('projects');
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const resumeDownload = () => {
    const resumeUrl = '/Grace_Waithera_Kaberere_CV.pdf'; // Path to your resume file in the public folder
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Grace_Waithera_Kaberere_CV.pdf'; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <section
      id="hub"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 overflow-hidden bg-[#F5F2ED] py-20"
    >
      {/* Decorative Warm Terracotta/Beige Glow Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,93,59,0.06)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[650px] h-[350px] md:h-[650px] bg-primary/4 rounded-full blur-[100px] md:blur-[180px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />

      {/* Architect-style grid pattern backdrop */}
      <div className="absolute inset-0 opacity-40 pointer-events-none" 
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(26,26,26,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,26,26,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 space-y-8 max-w-5xl w-full flex flex-col items-center"
      >
        {/* Availability Capsule */}
        {/* <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 py-1.5 px-4 border border-primary/25 rounded-full bg-primary/5 hover:border-primary/40 transition-all"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-primary font-semibold">
            Available for projects
          </span>
        </motion.div> */}

        {/* Big Headline in Playfair Display (Serif) & Syne */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="font-syne text-5xl sm:text-7xl md:text-[95px] font-bold tracking-tight text-[#1A1A1A] leading-[0.95] select-none uppercase">
            Grace
            <br />
            <span className="font-display italic font-normal text-primary relative inline-block normal-case">
              Kaberere
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary/40" />
            </span>
          </h1>
          
          <p className="font-mono text-xs md:text-sm text-[#1A1A1A]/60 tracking-[0.3em] uppercase font-semibold flex items-center justify-center gap-2 pt-2">
            <Sparkles size={14} className="text-primary animate-pulse" />
            Full Stack Developer
            <Sparkles size={14} className="text-primary animate-pulse" />
          </p>
        </motion.div>

        {/* Bio Copy */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-[#1A1A1A]/70 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-light"
        >
          Developer who builds software solutions with an emphasis on clean architecture, maintainability, and best practices — from backend systems to the interfaces people actually use.
        </motion.p>
        {/* <motion.div variants={itemVariants} className="space-y-4">
          <button
            onClick={() => {resumeDownload()}}
            className="w-full text-center font-mono text-sm uppercase tracking-[0.25em] text-white bg-primary p-4 font-bold active:scale-95 transition-transform cursor-pointer hover:bg-[#1A1A1A]"
          >
            Read CV
          </button>
        </motion.div> */}

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="pt-12"
        >
          <button
            onClick={scrollToProjects}
            className="inline-flex flex-col items-center gap-3 group cursor-pointer"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/40 group-hover:text-primary transition-colors">
              Explore Capabilities
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="p-2 border border-[#1A1A1A]/10 rounded-full group-hover:border-primary group-hover:bg-primary/5 transition-colors"
            >
              <ChevronDown size={16} className="text-primary" />
            </motion.div>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
