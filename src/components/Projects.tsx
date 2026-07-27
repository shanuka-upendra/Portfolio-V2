import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, Newspaper, Radar, Shield, Smartphone, Swords } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    tech: string[];
    icon: React.ReactNode;
    github: string;
    demo: string;
}

const projects: Project[] = [
    {
        title: 'SecureLaw',
        description: 'Full-stack legal-tech platform built as part of the PrimeSprint team sprint, with a dedicated frontend and backend architecture for secure case and document handling.',
        tech: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'PostgreSQL', 'JWT'],
        icon: <Shield className="w-6 h-6 text-emerald-400" />,
        github: 'https://github.com/iCET-Computer-Engineering-Technology/PrimeSprint-T1-SecureLaw-Frontend',
        demo: 'https://securelaw.vercel.app/',
    },
    {
        title: 'Skill Duel',
        description: '1v1 real-time quiz battle platform featuring live trivia matches, auto-scoring, winner detection, duel inbox, answer breakdown and a global leaderboard with rank progression.',
        tech: ['Python', 'Django', 'PostgreSQL', 'Railway', 'OpenTrivia DB API'],
        icon: <Swords className="w-6 h-6 text-emerald-400" />,
        github: 'https://github.com/shanuka-upendra/Skill-Duel-Django',
        demo: 'https://skill-duel-django-production.up.railway.app/',
    },
    {
        title: 'Folio',
        description: 'A modern blogging platform built with the team at SYIGEN, helping creators publish, monetize, and manage content while giving readers a fast, seamless experience. Supports five role-based access levels with tailored permissions, from Normal Users to Admins.',
        tech: ['Next.js', 'Supabase', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'Vercel'],
        icon: <Newspaper className="w-6 h-6 text-emerald-400" />,
        github: 'https://github.com/SYIGEN-TRAINING/blog-next',
        demo: 'https://demo.com',
    },
    {
        title: 'Phonecare POS',
        description: 'A desktop point-of-sale application built with the team at SYIGEN for a mobile phone shop and repair business, covering project setup, authentication, dashboards, and user management as part of a the team.',
        tech: ['React', 'TypeScript', 'Rust', 'Tauri', 'SQLite'],
        icon: <Smartphone className="w-6 h-6 text-emerald-400" />,
        github: 'https://github.com/SYIGEN-TRAINING/pos-team-b',
        demo: 'https://demo.com',
    },
    {
        title: 'Defence System',
        description: 'Java-based Defense Management System simulation demonstrating coordinated multi-unit command through real-time communication principles, built as an academic showcase of OOP and the Observer Design Pattern.',
        tech: ['Java', 'OOP', 'Java Swing', 'Observer Pattern'],
        icon: <Radar className="w-6 h-6 text-emerald-400" />,
        github: 'https://github.com/shanuka-upendra/DefenceSystem-SMD',
        demo: 'https://demo.com',
    },
    {
        title: 'Portfolio Website',
        description: 'Modern developer portfolio engineered with sleek glassmorphism dynamics, particle system backdrops, micro-animations, and fast performance metrics.',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        icon: <Globe className="w-6 h-6 text-emerald-400" />,
        github: 'https://github.com/shanuka-upendra/SMD-Portfolio',
        demo: 'https://demo.com',
    }
];

const Github: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
    <svg
        className={className}
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
    </svg>
);

export const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-24 relative z-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">05. Case Studies</h2>
                    <p className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group"
                        >
                            <div className="p-6 space-y-4">
                                {/* Visual Header Placeholder */}
                                <div className="h-44 rounded-xl bg-gradient-to-br from-slate-900 via-emerald-950/30 to-slate-900 border border-white/5 flex items-center justify-center group-hover:border-emerald-500/30 transition-colors">
                                    <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 group-hover:scale-110 transition-transform">
                                        {project.icon}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5 pt-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-2.5 py-1 rounded-md bg-white/[0.04] text-[11px] font-mono text-emerald-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Footer */}
                            <div className="p-6 pt-0 flex items-center gap-3 border-t border-white/5 mt-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg glass-card text-xs font-mono text-slate-300 hover:text-white hover:bg-white/10 transition-all"
                                >
                                    <Github className="w-3.5 h-3.5" /> Repository
                                </a>
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-xs font-mono text-emerald-300 hover:bg-emerald-900/80 transition-all"
                                >
                                    <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};