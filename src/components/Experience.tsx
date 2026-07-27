import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-24 relative z-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">03. Career Track</h2>
                    <p className="text-3xl sm:text-4xl font-bold text-white">Work Experience</p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative pl-8 border-l-2 border-emerald-500/30 space-y-8"
                    >
                        {/* Timeline Item */}
                        <div className="relative group">
                            <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-slate-950 border-2 border-emerald-500 group-hover:bg-emerald-500 transition-colors" />

                            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
                                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                            <Briefcase className="w-5 h-5 text-emerald-400" />
                                            Software Engineer Intern
                                        </h3>
                                        <span className="text-sm font-semibold text-emerald-400">SYIGEN</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/5">
                                        <Calendar className="w-3.5 h-3.5 text-emerald-400" /> Present
                                    </div>
                                </div>

                                <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                                        <span>Building cross-platform desktop applications with <strong>React, TypeScript, Rust, Tauri,</strong> and <strong>SQLite</strong> for fast, offline-capable data handling.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                                        <span>Developing scalable web applications with <strong>Next.js</strong>, backed by <strong>Laravel</strong> and <strong>Django</strong> for robust server-side logic.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                                        <span>Implementing core authentication modules, interactive data dashboards, CRUD workflows, and POS features end-to-end.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                                        <span>Collaborating across team repositories through <strong>Git</strong>, GitHub pull request reviews, and Agile development practices.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};