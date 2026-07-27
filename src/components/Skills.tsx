import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Database, Toolbox, Microchip} from 'lucide-react';

interface SkillCategory {
    title: string;
    icon: React.ReactNode;
    skills: string[];
}

const skillCategories: SkillCategory[] = [
    {
        title: 'Languages',
        icon: <Code className="w-5 h-5 text-emerald-400" />,
        skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'PHP','Rust', 'SQL', 'HTML', 'CSS'],
    },
    {
        title: 'Frontend',
        icon: <Layout className="w-5 h-5 text-emerald-400" />,
        skills: ['React','Angular','Next.js', 'Tailwind CSS', 'Vite'],
    },
    {
        title: 'Backend',
        icon: <Server className="w-5 h-5 text-emerald-400" />,
        skills: ['Spring Boot', 'Node.js','Django','Laravel', 'REST API'],
    },
    {
        title: 'Database',
        icon: <Database className="w-5 h-5 text-emerald-400" />,
        skills: ['MySQL','PostgreSQL', 'MongoDB', 'Supabase', 'SQLite'],
    },
    {
        title: 'Tools & Technologies',
        icon: <Toolbox className="w-5 h-5 text-emerald-400" />,
        skills: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code' , 'Figma' , 'Jira' , 'Ms Teams'],
    },
    {
        title: 'Learning & Interests',
        icon: <Microchip className="w-5 h-5 text-emerald-400" />,
        skills: ['AWS Cloud Basics', 'Kubernetes' , 'CI/CD Pipelines' , 'AI/ML Fundamentals'],
    },
];

export const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-24 relative z-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">02. Technical Capabilities</h2>
                    <p className="text-3xl sm:text-4xl font-bold text-white">Skills & Ecosystem</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card rounded-2xl p-6 space-y-4"
                        >
                            <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                                <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-500/20">
                                    {category.icon}
                                </div>
                                <h3 className="font-semibold text-lg text-white">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all cursor-default"
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