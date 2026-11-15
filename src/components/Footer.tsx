import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 border-t border-white/10 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
        <p>
          Designed &amp; Developed by{' '}
          <span className="text-emerald-400 font-semibold">Shanuka Upendra</span> ©{' '}
          {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-5">
          <a href="#about" className="hover:text-emerald-300 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-emerald-300 transition-colors">
            Case Studies
          </a>
          <a
            href="https://github.com/shanuka-upendra"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shanukaupendraofficial/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-300 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
