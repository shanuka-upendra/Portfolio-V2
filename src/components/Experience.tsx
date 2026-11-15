import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Software Engineer Intern',
    company: 'SYIGEN',
    period: 'Present',
    location: 'Sri Lanka',
    highlights: [
      'Building cross-platform desktop applications with React, TypeScript, Rust, Tauri, and SQLite for fast, offline-capable data handling.',
      'Developing scalable web applications with Next.js, backed by Laravel and Django for robust server-side logic.',
      'Implementing core authentication modules, interactive data dashboards, CRUD workflows, and POS features end-to-end.',
      'Collaborating across team repositories through Git, GitHub pull request reviews, and Agile development practices.',
    ],
    stack: ['React', 'TypeScript', 'Rust', 'Tauri', 'SQLite', 'Next.js', 'Django', 'Laravel'],
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header (Personalfolio-inspired) */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.22em] text-emerald-400 mb-2">
            03. My Experiences
          </h2>
          <p className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Where I&apos;ve Been{' '}
            <span className="font-editorial italic font-normal text-emerald-300">Employed</span>
          </p>
        </div>

        {/* Clean 2-Column Editorial Table Layout */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 divide-y divide-white/10">
          {experiences.map((exp) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-12 gap-6 md:gap-10 py-4 first:pt-0 last:pb-0"
            >
              {/* Left Column: Role, Company & Meta */}
              <div className="md:col-span-5 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
                  <Calendar className="w-3 h-3" /> {exp.period}
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-emerald-400 shrink-0" />
                    {exp.role}
                  </h3>
                  <div className="text-base font-semibold text-emerald-400 mt-1">{exp.company}</div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{exp.location}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Deliverables */}
              <div className="md:col-span-7 space-y-3">
                <ul className="space-y-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {exp.highlights.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
