import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit, Code2, Flame } from 'lucide-react';

const stats = [
  {
    icon: <GitCommit className="w-5 h-5" />,
    value: '500+',
    label: 'Contributions This Year',
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    value: 'Java & Python',
    label: 'Primary Engineering Languages',
  },
  {
    icon: <Flame className="w-5 h-5" />,
    value: '100%',
    label: 'Continuous Delivery Focus',
  },
];

export const GitHubStats: React.FC = () => {
  return (
    <section className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-xs font-mono uppercase tracking-[0.22em] text-emerald-400 mb-2">
            07. Open Source Metrics
          </h2>
          <p className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            GitHub{' '}
            <span className="font-editorial italic font-normal text-emerald-300">Activity</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-7 text-center space-y-3"
            >
              <div className="w-11 h-11 rounded-2xl bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                {stat.icon}
              </div>
              <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono">
                {stat.value}
              </span>
              <span className="block text-xs text-slate-400 font-mono">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
