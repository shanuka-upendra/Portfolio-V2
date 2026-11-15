import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Briefcase,
  Cpu,
  GraduationCap,
  Lightbulb,
  MapPin,
  Sparkles,
} from 'lucide-react';
import profileImage from '../assets/profile.jpg';

const PERSONA_PILLS = [
  { label: 'System Architect', rotate: '-rotate-3' },
  { label: 'Full-Stack Builder', rotate: 'rotate-2' },
  { label: 'Clean Code', rotate: '-rotate-2' },
  { label: 'Fast Learner', rotate: 'rotate-3' },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-xs font-mono uppercase tracking-[0.22em] text-emerald-400 mb-2">
            01. Beyond Portfolio
          </h2>
          <p className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Engineering with{' '}
            <span className="font-editorial italic font-normal text-emerald-300">Purpose</span>
          </p>
        </div>

        {/* Personalfolio-Inspired Asymmetric Bento Grid */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Main Story Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 glass-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <img
                  src={profileImage}
                  alt="Shanuka Upendra"
                  className="w-12 h-12 rounded-2xl object-cover border border-emerald-500/30"
                />
                <div>
                  <h3 className="text-lg font-bold text-white">Architecting Modular Systems</h3>
                  <span className="text-xs font-mono text-emerald-400">
                    SWE Intern @ SYIGEN
                  </span>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I am an Undergraduate Software Engineering student enrolled concurrently at{' '}
                <strong className="text-white">ICET</strong> and the{' '}
                <strong className="text-white">
                  University of Colombo School of Computing (UCSC)
                </strong>
                . At <strong className="text-white">SYIGEN</strong>, I engineer production desktop
                features, full-stack web apps, and modular point-of-sale systems.
              </p>

              <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
                Driven by curiosity, I specialize in full-stack backend patterns, modern React
                clients, scalable relational databases, and intelligent cloud solutions.
              </p>
            </div>

            <div className="pt-5 border-t border-white/10 flex items-center justify-between gap-4">
              <div className="flex gap-6">
                <div>
                  <span className="text-2xl font-bold text-emerald-400">02+</span>
                  <p className="text-[11px] text-slate-400 font-mono">Academic Programs</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-emerald-400">06+</span>
                  <p className="text-[11px] text-slate-400 font-mono">Case Studies</p>
                </div>
              </div>

              <a
                href="#experience"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.06] hover:bg-white text-white hover:text-slate-950 border border-white/10 text-xs font-semibold transition-all"
              >
                Career Track <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: 2 Stacked Bento Blocks */}
          <div className="lg:col-span-7 grid gap-6">
            {/* Top Bento: 4 Engineering Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {[
                {
                  icon: <GraduationCap className="w-5 h-5" />,
                  title: 'Academic Excellence',
                  desc: 'Diploma in Software Engineering (ICET) & Foundation Degree in IT (UCSC).',
                },
                {
                  icon: <Briefcase className="w-5 h-5" />,
                  title: 'Industry Experience',
                  desc: 'Hands-on engineering at SYIGEN with Next.js, Django, Laravel, Tauri & TypeScript.',
                },
                {
                  icon: <Cpu className="w-5 h-5" />,
                  title: 'Modern Stack Focus',
                  desc: 'Spring Boot microservices, React frontends, cloud engineering & AI integrations.',
                },
                {
                  icon: <Lightbulb className="w-5 h-5" />,
                  title: 'Continuous Learning',
                  desc: 'Exploring low-level Rust architectures, Kubernetes, and cloud DevOps tooling.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="glass-card rounded-2xl p-5 flex items-start gap-3.5"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Bottom Bento: Location + Persona Tags (Personalfolio-inspired) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-12 gap-4"
            >
              <div className="sm:col-span-5 glass-card rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <MapPin className="w-4 h-4" />
                  <span>Based In</span>
                </div>
                <div className="mt-4">
                  <div className="text-lg font-bold text-white">Sri Lanka</div>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">
                    UTC +05:30 • Remote Ready
                  </div>
                </div>
              </div>

              <div className="sm:col-span-7 glass-card rounded-2xl p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs font-mono text-emerald-400 mb-3">
                  <span className="inline-flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Engineering Persona
                  </span>
                  <span className="text-[10px] text-slate-500">Mindset</span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {PERSONA_PILLS.map((pill) => (
                    <span
                      key={pill.label}
                      className={`px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-xs font-medium text-slate-200 ${pill.rotate} hover:rotate-0 hover:border-emerald-400/50 hover:text-emerald-300 transition-all cursor-default`}
                    >
                      {pill.label}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
