import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Terminal } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import profileImage from '../assets/profile.jpg';

export const Hero: React.FC = () => {
    const typedText = useTypewriter([
        'Software Engineer',
        'Full Stack Developer',
        'Exploring AI Solutions',
        'Learning Cloud Technologies',
    ]);

    const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
    );

    const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
        </svg>
    );

    const FBIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
    );

    return (
        <section id="home" className="relative min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-20 flex items-center justify-center overflow-hidden">
            {/* Optimized Background Orbs - Reduced size & blur intensity on mobile */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-emerald-600/10 sm:bg-emerald-600/15 rounded-full blur-[60px] sm:blur-[120px] pointer-events-none transform-gpu" />
            <div className="absolute top-1/3 right-10 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-green-500/10 rounded-full blur-[50px] sm:blur-[100px] pointer-events-none transform-gpu" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* Main Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="lg:col-span-7 space-y-6 text-left transform-gpu"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-mono text-emerald-400 border-emerald-500/30">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            Available for full-time opportunities
                        </div>

                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight sm:leading-none">
                            Hello, I'm <br />
                            <span className="emerald-gradient-text">Shanuka Upendra</span>
                        </h1>

                        <div className="h-10 flex items-center text-lg sm:text-2xl font-mono text-slate-300">
                            <Terminal className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                            <span>{typedText}</span>
                            <span className="w-2 h-5 sm:h-6 bg-emerald-500 ml-1 animate-pulse" />
                        </div>

                        <p className="text-slate-400 text-sm sm:text-lg max-w-2xl leading-relaxed">
                            Full-Stack Software Engineer focused on building robust enterprise applications, high-performance web systems, and intelligent digital experiences with Java, React, and Cloud Architectures.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-800 text-white font-medium text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-transform"
                            >
                                View Projects <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl glass-card text-slate-200 font-medium text-sm hover:text-white active:scale-[0.98] transition-transform"
                            >
                                <Download className="w-4 h-4 text-emerald-400" /> Resume
                            </a>
                            <a
                                href="mailto:shanukaupendra@gmail.com"
                                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl glass-card text-slate-200 font-medium text-sm hover:text-white active:scale-[0.98] transition-transform"
                            >
                                <Mail className="w-4 h-4 text-emerald-400" /> Contact
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 pt-4 sm:pt-6 border-t border-white/5">
                            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Connect</span>
                            <div className="flex gap-3">
                                <a
                                    href="https://github.com/shanuka-upendra"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2.5 rounded-lg glass-card text-slate-400 hover:text-emerald-400 transition-colors"
                                    aria-label="GitHub"
                                >
                                    <GithubIcon className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/shanukaupendraofficial/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2.5 rounded-lg glass-card text-slate-400 hover:text-emerald-400 transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <LinkedinIcon className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://www.facebook.com/shanuka.upendra.5"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2.5 rounded-lg glass-card text-slate-400 hover:text-emerald-400 transition-colors"
                                    aria-label="Facebook"
                                >
                                    <FBIcon className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Profile Card Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-5 flex justify-center transform-gpu"
                    >
                        <div className="relative w-full max-w-md">
                            {/* Controlled background glow */}
                            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-600 to-green-600 opacity-20 blur-lg" />
                            <div className="relative glass-card rounded-3xl p-5 sm:p-6 space-y-5 sm:space-y-6">
                                <div className="aspect-square rounded-2xl bg-gradient-to-tr from-slate-900 via-emerald-950/40 to-slate-900 border border-emerald-500/20 flex flex-col items-center justify-center relative overflow-hidden">
                                    
                                    <div className="w-28 sm:w-32 h-28 sm:h-32 rounded-full bg-gradient-to-tr from-emerald-600 to-green-400 p-1 shadow-2xl mb-3 sm:mb-4">
                                        <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center font-extrabold text-3xl text-emerald-400 overflow-hidden">
                                            <img
                                                src={profileImage}
                                                alt="Shanuka Upendra"
                                                width="128"
                                                height="128"
                                                loading="eager"
                                                decoding="async"
                                                className="w-full h-full rounded-full object-cover border-2 border-slate-200 shadow-sm"
                                            />
                                        </div>
                                    </div>
                                    <span className="text-lg sm:text-xl font-bold text-white z-10">Shanuka Upendra</span>
                                    <span className="text-xs sm:text-sm text-emerald-400 font-mono z-10">SWE Intern @SYIGEN</span>
                                </div>

                                <div className="space-y-2 sm:space-y-3 font-mono text-xs">
                                    <div className="flex justify-between items-center py-2 border-b border-white/5 text-slate-400">
                                        <span>Primary Stack</span>
                                        <span className="text-slate-200 text-right">Java / Spring Boot / React</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-white/5 text-slate-400">
                                        <span>Location</span>
                                        <span className="text-slate-200">Sri Lanka</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 text-slate-400">
                                        <span>Status</span>
                                        <span className="text-emerald-400">Open to Engagements</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};