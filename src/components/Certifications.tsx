import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';

const certs = [
  {
    name: 'Kubernetes For Absolute Beginners',
    issuer: 'KodeKloud',
    badge: 'K8s',
    credentialUrl: 'https://learn.kodekloud.com/certificate/4d523d51-d8cb-4656-874e-7545f1dd1b42',
  },
  {
    name: 'Docker For Absolute Beginners',
    issuer: 'KodeKloud',
    badge: 'Docker',
    credentialUrl: 'https://learn.kodekloud.com/certificate/48e7953c-88e0-4e22-a51b-ecdd5aa13ccf',
  },
  {
    name: 'AWS Basics',
    issuer: 'KodeKloud',
    badge: 'AWS',
    credentialUrl: 'https://learn.kodekloud.com/certificate/16f13572-b56c-4ed0-a277-127180e34c5f',
  },
  {
    name: 'MS Champs – Month of February',
    issuer: 'Microsoft',
    badge: 'Azure',
    credentialUrl: 'https://www.linkedin.com/in/shanukaupendraofficial/overlay/Certifications/276597248/treasury/?profileId=ACoAADgBZRUBP4j8fcY9Df-I4xAUaGQmzVmsT2A',
  },
];

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">06. Credentials</h2>
          <p className="text-3xl sm:text-4xl font-bold text-white">Certifications</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/20">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="font-bold text-white text-base leading-snug">{cert.name}</h3>
                <p className="text-slate-400 text-xs">{cert.issuer}</p>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 pt-2 border-t border-white/5">
                <ShieldCheck className="w-3.5 h-3.5" />
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                    Verified Credential
                  </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};