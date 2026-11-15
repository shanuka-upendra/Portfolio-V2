import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const educationList = [
  {
    degree: 'Diploma in Software Engineering',
    institution: 'Institute of Computer Engineering Technology (ICET)',
    badge: 'ICET',
    description:
      'Comprehensive software engineering curriculum covering advanced Java patterns, database optimization, architectural design, and full-stack software development.',
  },
  {
    degree: 'Foundation Degree in Information Technology',
    institution: 'University of Colombo School of Computing (UCSC)',
    badge: 'UCSC',
    description:
      'Foundational computer science principles, discrete mathematics, system structures, relational algorithms, and core computing methodologies.',
  },
];

export const Education: React.FC = () => {
  return (
    <section className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-xs font-mono uppercase tracking-[0.22em] text-emerald-400 mb-2">
            04. Academic Background
          </h2>
          <p className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Formal{' '}
            <span className="font-editorial italic font-normal text-emerald-300">Education</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-7 sm:p-8 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-emerald-950/70 border border-emerald-500/30 text-emerald-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-mono text-emerald-300">
                    {edu.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-emerald-400 font-mono text-xs sm:text-sm mt-1">
                    {edu.institution}
                  </p>
                </div>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
