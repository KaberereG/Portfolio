"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WizardState } from '../../types';
import { Terminal, Check, ArrowRight, Play, Server, Laptop, Smartphone, FileText, Send, Sparkles } from 'lucide-react';

export default function ProjectWizard() {
  const [isActive, setIsActive] = useState(false);
  const [step, setStep] = useState<number>(1);
  const [config, setConfig] = useState<WizardState>({
    platform: '',
    scope: '',
    designStyle: '',
    timeline: '',
    clientEmail: '',
    clientMessage: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (key: keyof WizardState, value: string) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const getSystemBlueprint = () => {
    const { platform, scope, designStyle } = config;
    let arch = 'Modular Serverless Architecture';
    let database = 'PostgreSQL + Redis Caching';
    let devops = 'Docker containers on AWS ECS';
    let estimate = '6-8 Weeks';

    if (platform === 'android') {
      arch = 'Clean Architecture with Jetpack Compose & Repository Pattern';
      database = 'SQLite (Room) with encrypted SQLCipher';
      devops = 'Automated CI/CD with GitHub Actions & Play Console deployment';
    } else if (platform === 'fullstack') {
      arch = 'FastAPI REST/WebSockets + React 19 SPA Microservices';
      database = 'PostgreSQL (Read-replica pools) + Redis cluster';
      devops = 'Docker Compose + AWS ECS + Terraform IaC';
    }

    if (scope === 'enterprise') {
      estimate = '12-16 Weeks';
      devops = 'Kubernetes (EKS) orchestration + AWS multi-region failover';
    } else if (scope === 'mvp') {
      estimate = '3-4 Weeks';
      devops = 'Docker container on Cloud Run with automated serverless scaling';
    }

    return { arch, database, devops, estimate };
  };

  const submitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!config.clientEmail) return;

    // Simulate inquiry submission to localStorage
    const savedInquiries = JSON.parse(localStorage.getItem('gk_inquiries') || '[]');
    savedInquiries.push({
      ...config,
      blueprint: getSystemBlueprint(),
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('gk_inquiries', JSON.stringify(savedInquiries));

    setSubmitted(true);
  };

  const resetWizard = () => {
    setConfig({
      platform: '',
      scope: '',
      designStyle: '',
      timeline: '',
      clientEmail: '',
      clientMessage: ''
    });
    setStep(1);
    setSubmitted(false);
    setIsActive(false);
  };

  const blueprint = getSystemBlueprint();

  return (
    <section className="py-24 px-6 md:px-12 bg-transparent relative overflow-hidden border-t border-[#1A1A1A]/10 flex flex-col items-center justify-center text-center">
      {/* Glow backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,93,59,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full">
        <AnimatePresence mode="wait">
          {!isActive ? (
            /* Intro Section */
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8 py-12"
            >
              <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
                Ready to build something <span className="font-display italic font-normal text-primary">lasting?</span>
              </h2>
              <p className="font-sans text-[#1A1A1A]/60 text-sm md:text-base max-w-md mx-auto font-light leading-relaxed">
                Configure your system preferences, compute resources, and project timelines to instantly generate an architectural roadmap.
              </p>
              <div>
                <button
                  onClick={() => setIsActive(true)}
                  className="font-mono text-xs uppercase tracking-[0.3em] font-extrabold text-white bg-primary hover:bg-[#1A1A1A] px-10 py-5 transition-all duration-300 cursor-pointer active:scale-95 inline-flex items-center gap-2"
                >
                  <Play size={12} fill="currentColor" />
                  Initialize Project
                </button>
              </div>
            </motion.div>
          ) : (
            /* Interactive Workspace Card */
            <motion.div
              key="workspace"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="border border-[#1A1A1A]/10 bg-white/30 p-6 md:p-10 text-left relative overflow-hidden"
            >
              {/* Terminal Header bar */}
              <div className="flex justify-between items-center border-b border-[#1A1A1A]/10 pb-5 mb-8">
                <div className="flex items-center gap-2.5">
                  <Terminal size={14} className="text-primary animate-pulse" />
                  <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-[#1A1A1A]/60">
                    System_Provisioner // Step_0{step}_of_04
                  </span>
                </div>
                <button
                  onClick={resetWizard}
                  className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 hover:text-primary transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </div>

              {/* Steps Progress bar */}
              <div className="w-full h-[1px] bg-[#1A1A1A]/10 relative mb-8">
                <div
                  className="absolute left-0 top-0 h-full bg-primary transition-all duration-500"
                  style={{ width: `${(step / 4) * 100}%` }}
                />
              </div>

              {/* Forms / Options based on current step */}
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: -10, x: -10 }}
                    className="space-y-6"
                  >
                    <h3 className="font-syne text-xl md:text-2xl font-bold text-[#1A1A1A] uppercase tracking-tight">
                      [01] TARGET PLATFORM
                    </h3>
                    <p className="font-sans text-[#1A1A1A]/60 text-xs md:text-sm font-light">
                      Define the target operating environment for this infrastructure setup.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { id: 'web', label: 'Web Platform', desc: 'Sleek, responsive SPA interfaces', icon: Laptop },
                        { id: 'android', label: 'Android Native', desc: 'Offline-first, Kotlin devices', icon: Smartphone },
                        { id: 'fullstack', label: 'Full-Stack System', desc: 'Integrated API cores + databases', icon: Server }
                      ].map(opt => (
                        <button
                          key={opt.id}
                          onClick={() => handleSelect('platform', opt.id as any)}
                          className={`p-6 border text-left flex flex-col gap-3 group relative cursor-pointer transition-all duration-200 ${
                            config.platform === opt.id
                              ? 'border-primary bg-primary/5'
                              : 'border-[#1A1A1A]/10 bg-white/40 hover:border-[#1A1A1A]/30'
                          }`}
                        >
                          {config.platform === opt.id && (
                            <span className="absolute top-3 right-3 text-primary"><Check size={14} /></span>
                          )}
                          <opt.icon size={20} className={config.platform === opt.id ? 'text-primary' : 'text-neutral-400'} />
                          <div>
                            <h4 className="font-mono text-xs uppercase tracking-wider text-[#1A1A1A] font-semibold">{opt.label}</h4>
                            <p className="text-[10px] text-neutral-500 font-light mt-1">{opt.desc}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: -10, x: -10 }}
                    className="space-y-6"
                  >
                    <h3 className="font-syne text-xl md:text-2xl font-bold text-[#1A1A1A] uppercase tracking-tight">
                      [02] SCALING REQUIREMENTS
                    </h3>
                    <p className="font-sans text-[#1A1A1A]/60 text-xs md:text-sm font-light">
                      Determine the structural scale, telemetry needs, and capability tiers.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { id: 'mvp', label: 'MVP Bootstrap', desc: 'Fast turnaround, streamlined footprint' },
                        { id: 'scaling', label: 'Scaling Product', desc: 'Medium weight, ready for load spikes' },
                        { id: 'enterprise', label: 'Enterprise Core', desc: 'Highly available, fully redundant, IaC' }
                      ].map(opt => (
                        <button
                          key={opt.id}
                          onClick={() => handleSelect('scope', opt.id as any)}
                          className={`p-6 border text-left flex flex-col justify-between h-28 relative cursor-pointer transition-all duration-200 ${
                            config.scope === opt.id
                              ? 'border-primary bg-primary/5'
                              : 'border-[#1A1A1A]/10 bg-white/40 hover:border-[#1A1A1A]/30'
                          }`}
                        >
                          {config.scope === opt.id && (
                            <span className="absolute top-3 right-3 text-primary"><Check size={14} /></span>
                          )}
                          <div>
                            <h4 className="font-mono text-xs uppercase tracking-wider text-[#1A1A1A] font-semibold">{opt.label}</h4>
                            <p className="text-[10px] text-neutral-500 font-light mt-1">{opt.desc}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: -10, x: -10 }}
                    className="space-y-6"
                  >
                    <h3 className="font-syne text-xl md:text-2xl font-bold text-[#1A1A1A] uppercase tracking-tight">
                      [03] DESIGN MATRICES & VELOCITY
                    </h3>
                    <p className="font-sans text-[#1A1A1A]/60 text-xs md:text-sm font-light">
                      Balance release timelines against visual themes and custom styles.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <label className="font-mono text-[10px] uppercase text-[#1A1A1A]/60 tracking-wider">AESTHETIC VIBE</label>
                        <div className="flex flex-col gap-2">
                          {[
                            { id: 'minimalist', label: 'Sharp Minimalist' },
                            { id: 'brutalist', label: 'Industrial Brutalist' },
                            { id: 'immersive', label: 'Fluid Dark Immersive' }
                          ].map(opt => (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => handleSelect('designStyle', opt.id as any)}
                              className={`p-3 border text-left font-mono text-[11px] uppercase tracking-wider relative cursor-pointer transition-all ${
                                config.designStyle === opt.id
                                  ? 'border-primary text-primary bg-primary/5'
                                  : 'border-[#1A1A1A]/10 text-[#1A1A1A]/70 hover:border-primary/40 bg-white/40'
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="font-mono text-[10px] uppercase text-[#1A1A1A]/60 tracking-wider">TIMELINE PRIORITY</label>
                        <div className="flex flex-col gap-2">
                          {[
                            { id: 'urgent', label: 'Urgent Target (1-2w)' },
                            { id: 'standard', label: 'Standard Sprint (1-2m)' },
                            { id: 'flexible', label: 'Long-term Roadmap (3m+)' }
                          ].map(opt => (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => handleSelect('timeline', opt.id as any)}
                              className={`p-3 border text-left font-mono text-[11px] uppercase tracking-wider relative cursor-pointer transition-all ${
                                config.timeline === opt.id
                                  ? 'border-primary text-primary bg-primary/5'
                                  : 'border-[#1A1A1A]/10 text-[#1A1A1A]/70 hover:border-primary/40 bg-white/40'
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: -10, x: -10 }}
                    className="space-y-6"
                  >
                    <h3 className="font-syne text-xl md:text-2xl font-bold text-[#1A1A1A] uppercase tracking-tight">
                      [04] ARCHITECTURE BLUEPRINT GENERATED
                    </h3>

                    {!submitted ? (
                      <div className="space-y-6">
                        {/* Blueprint Board */}
                        <div className="border border-[#1A1A1A]/10 bg-[#E2DED6]/40 p-5 space-y-4 font-mono text-xs">
                          <div className="flex items-center gap-2 border-b border-[#1A1A1A]/10 pb-2 text-primary font-bold">
                            <FileText size={13} />
                            <span>BLUEPRINT // INITIAL_PROPOSAL_CONFIG</span>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <span className="text-neutral-500 uppercase text-[9px] tracking-wider block">SYSTEM PATTERN</span>
                              <span className="text-[#1A1A1A] font-medium">{blueprint.arch}</span>
                            </div>
                            <div>
                              <span className="text-neutral-500 uppercase text-[9px] tracking-wider block">ESTIMATED LAUNCH</span>
                              <span className="text-primary font-bold">{blueprint.estimate}</span>
                            </div>
                            <div>
                              <span className="text-neutral-500 uppercase text-[9px] tracking-wider block">PERSISTENT CACHING</span>
                              <span className="text-[#1A1A1A] font-medium">{blueprint.database}</span>
                            </div>
                            <div>
                              <span className="text-neutral-500 uppercase text-[9px] tracking-wider block">INFRASTRUCTURE RUNTIME</span>
                              <span className="text-[#1A1A1A] font-medium">{blueprint.devops}</span>
                            </div>
                          </div>
                        </div>

                        {/* Submit Email inquiry */}
                        <form onSubmit={submitInquiry} className="space-y-4">
                          <div className="space-y-2">
                            <label className="font-mono text-[10px] uppercase text-[#1A1A1A]/60 tracking-wider block text-left">
                              Inquirer Connection Email
                            </label>
                            <input
                              type="email"
                              required
                              value={config.clientEmail}
                              onChange={(e) => handleSelect('clientEmail', e.target.value)}
                              placeholder="e.g. developer@enterprise.com"
                              className="w-full bg-white border border-[#1A1A1A]/15 px-4 py-3.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-primary font-mono placeholder-[#1A1A1A]/35 rounded-none"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="font-mono text-[10px] uppercase text-[#1A1A1A]/60 tracking-wider block text-left">
                              Specific Integration Directives (Optional)
                            </label>
                            <textarea
                              rows={3}
                              value={config.clientMessage}
                              onChange={(e) => handleSelect('clientMessage', e.target.value)}
                              placeholder="Describe critical logic dependencies, specific SDKs, or database schemas..."
                              className="w-full bg-white border border-[#1A1A1A]/15 px-4 py-3 text-xs text-[#1A1A1A] focus:outline-none focus:border-primary font-mono placeholder-[#1A1A1A]/35 rounded-none resize-none"
                            />
                          </div>

                          <button
                            type="submit"
                            className="w-full font-mono text-xs uppercase tracking-[0.25em] bg-primary hover:bg-[#1A1A1A] text-white font-bold py-4 transition-all duration-300 cursor-pointer active:scale-95 flex items-center justify-center gap-2"
                          >
                            <Send size={13} />
                            Submit Inquiry & Lock Blueprint
                          </button>
                        </form>
                      </div>
                    ) : (
                      /* Success response */
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-8 space-y-6"
                      >
                        <div className="w-12 h-12 bg-primary/10 border border-primary text-primary rounded-full flex items-center justify-center mx-auto animate-bounce">
                          <Check size={24} />
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-syne text-lg font-bold text-[#1A1A1A] uppercase tracking-tight">
                            Blueprint Logged Successfully
                          </h4>
                          <p className="font-sans text-[#1A1A1A]/70 text-xs max-w-sm mx-auto font-light leading-relaxed">
                            Grace has been notified. The system has recorded configuration parameters under schema: <span className="text-primary font-mono font-semibold">GK_INQ_SECURE</span>.
                          </p>
                        </div>
                        <button
                          onClick={resetWizard}
                          className="font-mono text-[10px] uppercase tracking-widest text-white border border-transparent hover:bg-[#1A1A1A] px-5 py-2.5 bg-primary transition-all cursor-pointer"
                        >
                          Deploy New Blueprint
                        </button>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Step Navigation Controls */}
              {step < 4 && (
                <div className="flex justify-between items-center border-t border-[#1A1A1A]/10 pt-6 mt-8">
                  <button
                    type="button"
                    disabled={step === 1}
                    onClick={() => setStep(prev => prev - 1)}
                    className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 hover:text-[#1A1A1A] transition-colors disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    disabled={
                      (step === 1 && !config.platform) ||
                      (step === 2 && !config.scope) ||
                      (step === 3 && (!config.designStyle || !config.timeline))
                    }
                    onClick={() => setStep(prev => prev + 1)}
                    className="font-mono text-[10px] uppercase tracking-widest text-primary hover:text-[#1A1A1A] transition-colors disabled:opacity-30 disabled:pointer-events-none cursor-pointer flex items-center gap-1 font-bold"
                  >
                    Next
                    <ArrowRight size={12} />
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
