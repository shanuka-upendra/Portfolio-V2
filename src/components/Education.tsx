import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export const Education: React.FC = () => {
    return (
        <section className="py-24 relative z-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">04. Academic Background</h2>
                    <p className="text-3xl sm:text-4xl font-bold text-white">Education</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card rounded-2xl p-8 space-y-4"
                    >
                        <div className="p-3 w-fit rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                            <GraduationCap className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Diploma in Software Engineering</h3>
                        <p className="text-emerald-400 font-mono text-sm">Institute of Computer Engineering Technology (ICET)</p>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Comprehensive software engineering curriculum covering advanced Java patterns, database optimization, architectural design, and full-stack software development.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card rounded-2xl p-8 space-y-4"
                    >
                        <div className="p-3 w-fit rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                            <GraduationCap className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Foundation Degree in Information Technology</h3>
                        <p className="text-emerald-400 font-mono text-sm">University of Colombo School of Computing (UCSC)</p>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Foundational computer science principles, discrete mathematics, system structures, relational algorithms, and core computing methodologies.
                        </p>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};