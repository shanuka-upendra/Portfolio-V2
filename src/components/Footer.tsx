export const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-white/5 relative z-10 text-center">
      <p className="text-xs font-mono text-slate-500">
        Designed & Developed by <span className="text-emerald-400 font-semibold">Shanuka Upendra</span> © {new Date().getFullYear()}
      </p>
    </footer>
  );
};