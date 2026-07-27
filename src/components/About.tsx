import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Cpu, Lightbulb } from 'lucide-react';

export const About: React.FC = () => {
    return (
        <section id="about" className="py-24 relative z-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">01. Overview</h2>
                    <p className="text-3xl sm:text-4xl font-bold text-white">Engineering with Purpose</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-stretch">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card rounded-2xl p-8 space-y-6 flex flex-col justify-between"
                    >
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-white">Architecting Modular Systems</h3>
                            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                                I am an Undergraduate Software Engineering student enrolled concurrently at
                                <strong>ICET</strong> and the <strong>University of Colombo School of Computing (UCSC)</strong>
                                . Currently, I serve as a Software Engineer Intern at <strong>SYIGEN</strong>
                                , engineering production desktop features and modular point-of-sale systems.
                            </p>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Driven by curiosity, I specialize in full-stack backend patterns, modern React client setups, 
                                scalable database structures, and intelligent cloud solutions.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                            <div className="space-y-1">
                                <span className="text-2xl font-bold text-emerald-400">02+</span>
                                <p className="text-xs text-slate-400 font-mono">Academic Programs</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-2xl font-bold text-emerald-400">05+</span>
                                <p className="text-xs text-slate-400 font-mono">Core Projects Built</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid gap-4"
                    >
                        <div className="glass-card rounded-xl p-5 flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-base">Academic Excellence</h4>
                                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                                    Diploma in Software Engineering (ICET) & Foundation Degree in IT (UCSC).
                                </p>
                            </div>
                        </div>

                        <div className="glass-card rounded-xl p-5 flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                                <Briefcase className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-base">Industry Experience</h4>
                                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                                    Hands-on engineering at SYIGEN, building NextJS, Django, Laravel, Tauri & TypeScript applications.
                                </p>
                            </div>
                        </div>

                        <div className="glass-card rounded-xl p-5 flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                                <Cpu className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-base">Modern Stack Focus</h4>
                                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                                    Spring Boot microservices, React frontends, cloud engineering, and AI model integrations.
                                </p>
                            </div>
                        </div>

                        <div className="glass-card rounded-xl p-5 flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                                <Lightbulb className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-base">Continuous Learning</h4>
                                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                                    Always exploring new frameworks, low-level Rust architectures, and cloud DevOps tooling.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};