import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, MapPin, Sparkles, Terminal } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import profileImage from '../assets/profile.jpg';

const CORE_STACK = [
  'Java',
  'Spring Boot',
  'React',
  'TypeScript',
  'Next.js',
  'Python',
  'Django',
  'Rust & Tauri',
  'PostgreSQL',
  'Docker',
];

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

export const Hero: React.FC = () => {
  const typedText = useTypewriter([
    'Software Engineer',
    'Full Stack Developer',
    'Exploring AI Solutions',
    'Learning Cloud Technologies',
  ]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-16 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Personalfolio-inspired Orbital Rings & Emerald Radial Spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full bg-emerald-500/12 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] sm:w-[680px] sm:h-[680px] rounded-full border border-emerald-500/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] sm:w-[940px] sm:h-[940px] rounded-full border border-white/[0.04]"
      />

      {/* Floating Sparkle Accents */}
      <Sparkles
        aria-hidden="true"
        className="hidden sm:block pointer-events-none absolute top-40 right-[18%] w-6 h-6 text-emerald-400/50 animate-pulse"
      />
      <Sparkles
        aria-hidden="true"
        className="hidden sm:block pointer-events-none absolute bottom-44 left-[16%] w-5 h-5 text-emerald-300/40 animate-pulse"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center space-y-6"
        >
          {/* Centered Avatar + Availability Pill */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-emerald-400 via-teal-300 to-emerald-600 shadow-xl shadow-emerald-950/50">
              <img
                src={profileImage}
                alt="Shanuka Upendra"
                width="80"
                height="80"
                loading="eager"
                decoding="async"
                className="w-full h-full rounded-full object-cover border-2 border-[#080c0d]"
              />
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for full-time opportunities
            </div>
          </div>

          {/* Editorial Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Hello, I&apos;m{' '}
              <span className="font-editorial italic font-normal text-emerald-300">
                Shanuka Upendra
              </span>
            </h1>

            <div className="h-9 flex items-center justify-center text-base sm:text-xl font-mono text-slate-300">
              <Terminal className="w-4 h-4 text-emerald-400 mr-2.5 shrink-0" />
              <span>{typedText}</span>
              <span className="w-2 h-5 bg-emerald-400 ml-1 animate-pulse" />
            </div>
          </div>

          <p className="text-slate-400 text-sm sm:text-lg max-w-2xl leading-relaxed">
            Full-Stack Software Engineer &amp; SWE Intern at{' '}
            <span className="text-slate-200 font-medium">SYIGEN</span>. I architect resilient
            enterprise backends, fast desktop apps, and clean web interfaces with Java, React,
            TypeScript, and Cloud technologies.
          </p>

          {/* Personalfolio High-Contrast Pill CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-950 font-semibold text-sm hover:bg-emerald-300 transition-colors shadow-lg"
            >
              Let&apos;s Talk <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] hover:bg-white/10 border border-white/15 text-white font-medium text-sm transition-colors"
            >
              View Case Studies
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 font-mono text-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" /> Resume
            </a>
          </div>

          {/* Meta & Social Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs font-mono text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Sri Lanka
            </span>
            <span className="text-white/15">•</span>
            <div className="flex items-center gap-2.5">
              <a
                href="https://github.com/shanuka-upendra"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:text-emerald-300 hover:border-emerald-500/40 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/shanukaupendraofficial/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:text-emerald-300 hover:border-emerald-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Core Tech Strip (mirrors Personalfolio's brand strip under hero) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500 mb-5">
            Core Engineering Stack
          </p>

          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <div className="animate-marquee flex items-center">
              {[...CORE_STACK, ...CORE_STACK, ...CORE_STACK, ...CORE_STACK].map((item, idx) => (
                <span
                  key={`${item}-${idx}`}
                  className="inline-flex items-center gap-3 px-4 py-1.5 text-xs sm:text-sm font-mono text-slate-400/85 hover:text-emerald-300 transition-colors whitespace-nowrap cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
