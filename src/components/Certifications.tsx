import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, ShieldCheck } from 'lucide-react';

const certs = [
  {
    name: 'Kubernetes For Absolute Beginners',
    issuer: 'KodeKloud',
    badge: 'K8s',
    credentialUrl:
      'https://learn.kodekloud.com/certificate/4d523d51-d8cb-4656-874e-7545f1dd1b42',
  },
  {
    name: 'Docker For Absolute Beginners',
    issuer: 'KodeKloud',
    badge: 'Docker',
    credentialUrl:
      'https://learn.kodekloud.com/certificate/48e7953c-88e0-4e22-a51b-ecdd5aa13ccf',
  },
  {
    name: 'AWS Basics',
    issuer: 'KodeKloud',
    badge: 'AWS',
    credentialUrl:
      'https://learn.kodekloud.com/certificate/16f13572-b56c-4ed0-a277-127180e34c5f',
  },
  {
    name: 'MS Champs – Month of February',
    issuer: 'Microsoft',
    badge: 'Azure',
    credentialUrl:
      'https://www.linkedin.com/in/shanukaupendraofficial/overlay/Certifications/276597248/treasury/?profileId=ACoAADgBZRUBP4j8fcY9Df-I4xAUaGQmzVmsT2A',
  },
];

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-xs font-mono uppercase tracking-[0.22em] text-emerald-400 mb-2">
            06. Credentials
          </h2>
          <p className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Verified{' '}
            <span className="font-editorial italic font-normal text-emerald-300">
              Certifications
            </span>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((cert, idx) => (
            <motion.a
              key={cert.name}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="group glass-card rounded-3xl p-6 space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-emerald-950/70 border border-emerald-500/30 text-emerald-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/25">
                    {cert.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-white text-base leading-snug group-hover:text-emerald-300 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-slate-400 text-xs font-mono mt-1">{cert.issuer}</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-emerald-400 pt-3 border-t border-white/10">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Credential
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
