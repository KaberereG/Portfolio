"use client";
import React from 'react';
import { motion, type Variants } from 'motion/react';
import { ChevronDown, Sparkles, Linkedin, Github, Download } from 'lucide-react';

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

  const viewResume = () => {
    const resumeUrl = '/Grace_Waithera_Kaberere_CV.pdf'; // Path to your resume file in the public folder
    window.open(resumeUrl, '_blank');
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
          Software developer focused on building reliable, maintainable solutions using clean architecture and engineering best practices—from robust backend systems to intuitive user interfaces
        </motion.p>
         <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3 sm:gap-4 pt-3"
        >
          {/* Download Resume Button */}
          <button
            id="hero-download-resume"
            onClick={viewResume}
            className="font-mono text-xs  tracking-[0.2em] font-bold text-black bg-white hover:bg-primary px-7 py-3.5 sm:px-8 sm:py-4 rounded-xs transition-all duration-300 cursor-pointer active:scale-95 inline-flex items-center gap-2.5 shadow-sm group"
          >
            <span>View Resume</span>
          </button>

          {/* GitHub Logo Button */}
          <a
            id="hero-github-link"
            href="https://github.com/KaberereG"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            title="GitHub Profile & Repositories"
            className="p-3.5 sm:p-4 bg-white/80 hover:bg-[#1A1A1A] border border-[#1A1A1A]/15 hover:border-[#1A1A1A] text-[#1A1A1A] hover:text-white rounded-xs transition-all duration-300 cursor-pointer active:scale-95 inline-flex items-center justify-center shadow-2xs group"
          >
            <Github size={18} className="transition-transform group-hover:scale-110" />
          </a>

          {/* LinkedIn Logo Button */}
          <a
            id="hero-linkedin-link"
            href="https://www.linkedin.com/in/grace-kaberere-21512b167/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile & Network"
            className="p-3.5 sm:p-4 bg-white/80 hover:bg-[#0A66C2] border border-[#1A1A1A]/15 hover:border-[#0A66C2] text-[#1A1A1A] hover:text-white rounded-xs transition-all duration-300 cursor-pointer active:scale-95 inline-flex items-center justify-center shadow-2xs group"
          >
            <Linkedin size={18} className="transition-transform group-hover:scale-110" />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="pt-12"
        >
          <button
            onClick={scrollToProjects}
            className="group inline-flex items-center gap-3
    font-mono text-sm font-medium uppercase tracking-[0.18em]
    text-white bg-primary
    px-7 py-4
    rounded-sm
    shadow-lg shadow-primary/20
    hover:bg-[#1A1A1A]
    hover:shadow-xl hover:shadow-black/10
    transition-all duration-300
    cursor-pointer
    active:scale-95"
          >
            <span>View Featured Projects</span>

            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.4,
                ease: "easeInOut",
              }}
            >
              <ChevronDown
                size={18}
                strokeWidth={2}
                className="group-hover:translate-y-0.5 transition-transform"
              />
            </motion.div>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
