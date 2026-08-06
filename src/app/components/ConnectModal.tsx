"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactMessage } from '../../types';
import { X, Send, Github, Linkedin, Briefcase, Mail, MapPin, Terminal, Check } from 'lucide-react';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConnectModal({ isOpen, onClose }: ConnectModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: ''
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [logs, setLogs] = useState<ContactMessage[]>([]);
  const [error, setError]= useState<string | null>(null);

  // Load inquiries from localStorage on mount
  useEffect(() => {
    const loaded = JSON.parse(localStorage.getItem('gk_messages') || '[]');
    setLogs(loaded);
  }, [sent]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSending(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error('Failed to send message');
      }

    const newMessage: ContactMessage = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject || 'General Connection',
      message: formData.message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    

    const updated = [newMessage, ...logs];
    localStorage.setItem('gk_messages', JSON.stringify(updated));
    setLogs(updated);

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      website: ''
    });
    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 4000);
  } catch (error) {
    console.error('Error sending message:', error);
    setError('Failed to send message. Please try again later.');
  } finally{
    setSending(false);
  }}

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#F5F2ED]/70 backdrop-blur-sm flex items-center justify-center p-4">
          {/* Main Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-5xl border border-[#1A1A1A]/10 bg-[#F5F2ED] grid grid-cols-1 md:grid-cols-12 relative shadow-xl"
          >
            {/* Close trigger */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-[#1A1A1A]/60 hover:text-[#1A1A1A] p-2 border border-[#1A1A1A]/10 bg-white/60 hover:border-primary cursor-pointer transition-all z-10"
              aria-label="Close panel"
            >
              <X size={18} />
            </button>

            {/* Left Column: Direct Contacts & Logs (5 Cols) */}
            <div className="col-span-1 md:col-span-5 border-b md:border-b-0 md:border-r border-[#1A1A1A]/10 p-8 flex flex-col justify-between space-y-12 bg-[#E2DED6]/20">
              <div className="space-y-6">
                <div className="space-y-1">
                  <h3 className="font-syne text-2xl font-extrabold uppercase tracking-tight text-[#1A1A1A]">
                    Connect with me
                  </h3>
                </div>

                <p className="font-sans text-[#1A1A1A]/70 text-xs leading-relaxed font-light">
                  I am always open to new opportunities, collaborations, and discussions. Whether you have a project in mind, want to discuss potential partnerships, or simply wish to connect, feel free to reach out. Your message will be received securely and will be responded to promptly.
                </p>

                {/* Info List */}
                <div className="space-y-4 pt-4 font-mono text-[11px] uppercase tracking-wider text-[#1A1A1A]/80">
                  <div className="flex items-center gap-3">
                    <Mail size={14} className="text-primary" />
                    <span className="text-[#1A1A1A]/40">EMAIL //</span>
                    <a href="mailto:waitkabz@gmail.com" className="hover:text-primary transition-colors font-medium">
                      waitkabz@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={14} className="text-primary" />
                    <span className="text-[#1A1A1A]/40">COORD //</span>
                    <span>Nairobi, Kenya</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase size={14} className="text-[#1A1A1A]/60" />
                    <span className="text-[#1A1A1A]/40">STATUS //</span>
                    <span className="text-primary font-bold">Ready to Build</span>
                  </div>
                </div>
              </div>

              {/* Connection Telemetry Logs */}
              <div className="space-y-4 border-t border-[#1A1A1A]/10 pt-6">
                <div className="flex items-center gap-2">
                  <Terminal size={12} className="text-primary animate-pulse" />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#1A1A1A]/50">
                    Live_Connection_Feed
                  </span>
                </div>

                <div className="h-36 overflow-y-auto bg-white/50 border border-[#1A1A1A]/10 p-3 font-mono text-[10px] space-y-3.5 scrollbar-thin">
                  {logs.length === 0 ? (
                    <p className="text-[#1A1A1A]/40 italic">No connections established yet in this session. Dispatch yours to initiate.</p>
                  ) : (
                    logs.map((log, idx) => (
                      <div key={idx} className="border-l border-primary/30 pl-2 space-y-0.5">
                        <div className="flex justify-between text-[9px] text-[#1A1A1A]/40">
                          <span className="font-semibold text-[#1A1A1A]/70">{log.name}</span>
                          <span>{log.timestamp}</span>
                        </div>
                        <p className="text-[#1A1A1A]/60 truncate">{log.message}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Contact form (7 Cols) */}
            <div className="col-span-1 md:col-span-7 p-8 md:p-12 space-y-6">
              <div className="space-y-1">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">Channel_GK_01</span>
                <h3 className="font-syne text-xl md:text-2xl font-bold uppercase tracking-tight text-[#1A1A1A]">
                  Dispatch Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-[9px] uppercase tracking-wider text-[#1A1A1A]/50">NAME // REQUIRED</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="e.g. Grace Waithera"
                      className="w-full bg-white border border-[#1A1A1A]/15 px-4 py-3 text-xs text-[#1A1A1A] focus:outline-none focus:border-primary font-mono placeholder-[#1A1A1A]/35 rounded-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-mono text-[9px] uppercase tracking-wider text-[#1A1A1A]/50">EMAIL // REQUIRED</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="e.g. dev@endpoint.com"
                      className="w-full bg-white border border-[#1A1A1A]/15 px-4 py-3 text-xs text-[#1A1A1A] focus:outline-none focus:border-primary font-mono placeholder-[#1A1A1A]/35 rounded-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[9px] uppercase tracking-wider text-[#1A1A1A]/50">SUBJECT // OPTIONAL</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    placeholder="e.g. Enterprise Infrastructure Project"
                    className="w-full bg-white border border-[#1A1A1A]/15 px-4 py-3 text-xs text-[#1A1A1A] focus:outline-none focus:border-primary font-mono placeholder-[#1A1A1A]/35 rounded-none"
                  />
                </div>

                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                  style={{ position: 'absolute', left: '-9999px', opacity: 0 }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                

                <div className="space-y-1.5">
                  <label className="font-mono text-[9px] uppercase tracking-wider text-[#1A1A1A]/50">MESSAGE BODY // REQUIRED</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Detail core requirements, system scale, budget caps, or stack constraints..."
                    className="w-full bg-white border border-[#1A1A1A]/15 p-4 text-xs text-[#1A1A1A] focus:outline-none focus:border-primary font-mono placeholder-[#1A1A1A]/35 rounded-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full font-mono text-xs uppercase tracking-[0.25em] bg-[#1A1A1A] text-white font-extrabold py-4 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Send size={12} />
                    Send Message
                  </button>
                </div>
              </form>

              {/* Success Banner */}
              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="bg-primary/5 border border-primary/30 p-3.5 flex items-center gap-3 text-xs font-mono text-primary"
                  >
                    <Check size={14} className="shrink-0 animate-bounce" />
                    <span>Signal Dispatched. Live feed telemetry has been updated successfully.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Social Channels */}
              <div className="flex gap-4 pt-4 border-t border-[#1A1A1A]/10">
                <a
                  href="https://github.com/KaberereG"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 border border-[#1A1A1A]/10 hover:border-primary hover:text-primary text-[#1A1A1A]/60 transition-all cursor-pointer"
                  title="GitHub"
                >
                  <Github size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/grace-kaberere-21512b167"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 border border-[#1A1A1A]/10 hover:border-primary hover:text-primary text-[#1A1A1A]/60 transition-all cursor-pointer"
                  title="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
