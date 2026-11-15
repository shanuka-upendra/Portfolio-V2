import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Send,
  CheckCircle,
  Loader2,
  AlertCircle,
  ArrowUpRight,
} from 'lucide-react';
import { supabase } from '../lib/supabase';

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

export const Contact: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();
    formData.append('access_key', '70718087-a8ad-4b9b-ab72-e98bc7407442');

    try {
      if (supabase && name && email && message) {
        supabase.from('contact_messages').insert([{ name, email, message }]).then(() => {});
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setErrorMsg(data.message || 'Failed to send message. Please try again.');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Personalfolio-Inspired Highlight CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-emerald-950/80 via-[#0e1e1c] to-emerald-950/70 border border-emerald-500/25 p-7 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl"
        >
          <div className="space-y-1.5">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-400">
              08. Reach Out
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Let&apos;s Connect and{' '}
              <span className="font-editorial italic font-normal text-emerald-300">
                Build Something Amazing
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Reach out for full-stack roles, collaborations, or engineering inquiries.
            </p>
          </div>

          <a
            href="mailto:shanukaupendra@gmail.com"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-950 font-semibold text-sm hover:bg-emerald-300 transition-colors shadow-md"
          >
            Email Directly <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-5">
            <h3 className="text-2xl font-bold text-white">Start a Conversation</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Whether you want to discuss full-stack software development, software engineering
              opportunities, or complex system challenges, drop a message anytime.
            </p>

            <div className="space-y-3.5 pt-2">
              <a
                href="mailto:shanukaupendra@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl glass-card text-slate-300 hover:text-emerald-300 transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-xs min-w-0">
                  <span className="block text-slate-400 font-mono">Email</span>
                  <span className="font-semibold text-white truncate block">
                    shanukaupendra@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="https://wa.me/+94775456105"
                className="flex items-center gap-4 p-4 rounded-2xl glass-card text-slate-300 hover:text-emerald-300 transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <span className="block text-slate-400 font-mono">Phone / WhatsApp</span>
                  <span className="font-semibold text-white">
                    +94 77 545 6105 | +94 70 421 1133
                  </span>
                </div>
              </a>

              <div className="flex gap-3 pt-1">
                <a
                  href="https://www.linkedin.com/in/shanukaupendraofficial/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-full glass-card text-xs font-mono text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  <LinkedinIcon /> LinkedIn
                </a>
                <a
                  href="https://github.com/shanuka-upendra"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-full glass-card text-xs font-mono text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  <GithubIcon /> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card rounded-3xl p-7 sm:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  placeholder="Let's build something..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                />
              </div>

              {errorMsg && (
                <div className="flex items-center gap-2 text-xs text-red-400 font-mono bg-red-950/40 border border-red-500/20 p-3 rounded-xl">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting || submitted}
                className="w-full py-3.5 rounded-full bg-white text-slate-950 font-semibold text-sm hover:bg-emerald-300 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-md"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                  </>
                ) : submitted ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-emerald-700" /> Sent Successfully
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
