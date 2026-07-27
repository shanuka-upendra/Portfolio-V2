import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit, Code2, Flame } from 'lucide-react';

export const GitHubStats: React.FC = () => {
    return (
        <section className="py-24 relative z-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">07. Open Source Metrics</h2>
                    <p className="text-3xl sm:text-4xl font-bold text-white">GitHub Activity</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card rounded-2xl p-6 text-center space-y-2"
                    >
                        <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                            <GitCommit className="w-5 h-5" />
                        </div>
                        <span className="block text-3xl font-extrabold text-white font-mono">500+</span>
                        <span className="text-xs text-slate-400 font-mono">Contributions This Year</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card rounded-2xl p-6 text-center space-y-2"
                    >
                        <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                            <Code2 className="w-5 h-5" />
                        </div>
                        <span className="block text-3xl font-extrabold text-white font-mono">Java & Python</span>
                        <span className="text-xs text-slate-400 font-mono">Top Tech Stack Languages</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="glass-card rounded-2xl p-6 text-center space-y-2"
                    >
                        <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                            <Flame className="w-5 h-5" />
                        </div>
                        <span className="block text-3xl font-extrabold text-white font-mono">100%</span>
                        <span className="text-xs text-slate-400 font-mono">Continuous Delivery Goal</span>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};