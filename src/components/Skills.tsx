import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Database, Toolbox, Microchip } from 'lucide-react';

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    subtitle: 'Core programming & querying',
    icon: <Code className="w-5 h-5 text-emerald-400" />,
    skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'PHP', 'Rust', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Frontend',
    subtitle: 'Interactive client architectures',
    icon: <Layout className="w-5 h-5 text-emerald-400" />,
    skills: ['React', 'Angular', 'Next.js', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Backend',
    subtitle: 'APIs, auth & business logic',
    icon: <Server className="w-5 h-5 text-emerald-400" />,
    skills: ['Spring Boot', 'Node.js', 'Django', 'Laravel', 'REST API'],
  },
  {
    title: 'Database',
    subtitle: 'Relational & document stores',
    icon: <Database className="w-5 h-5 text-emerald-400" />,
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Supabase', 'SQLite'],
  },
  {
    title: 'Tools & Ecosystem',
    subtitle: 'Workflow & collaboration',
    icon: <Toolbox className="w-5 h-5 text-emerald-400" />,
    skills: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code', 'Figma', 'Jira', 'MS Teams'],
  },
  {
    title: 'Learning & Cloud',
    subtitle: 'Infrastructure & AI exploration',
    icon: <Microchip className="w-5 h-5 text-emerald-400" />,
    skills: ['AWS Cloud Basics', 'Kubernetes', 'CI/CD Pipelines', 'AI/ML Fundamentals'],
  },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-xs font-mono uppercase tracking-[0.22em] text-emerald-400 mb-2">
            02. Technical Capabilities
          </h2>
          <p className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Skills &amp;{' '}
            <span className="font-editorial italic font-normal text-emerald-300">Ecosystem</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-6 space-y-5"
            >
              <div className="flex items-center gap-3.5 border-b border-white/10 pb-4">
                <div className="p-2.5 rounded-xl bg-emerald-950/70 border border-emerald-500/30">
                  {category.icon}
                </div>
                <div>
                  <h3 className="font-bold text-base text-white">{category.title}</h3>
                  <p className="text-[11px] font-mono text-slate-400">{category.subtitle}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-emerald-300 hover:border-emerald-500/40 hover:bg-emerald-950/30 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
