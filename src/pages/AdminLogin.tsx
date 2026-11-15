import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AlertCircle, ArrowLeft, Lock, Loader2, ShieldCheck } from 'lucide-react';
import { isSupabaseConfigured, supabase } from '../lib/supabase';

export const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate('/admin', { replace: true });
    });
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) {
      setError('Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env.');
      return;
    }

    setLoading(true);
    setError('');

    const { error: authError } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    navigate('/admin', { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#080c0d] text-slate-100 flex items-center justify-center px-4 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-emerald-500/10 blur-[130px]"
      />

      <div className="relative z-10 w-full max-w-md space-y-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-300 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Portfolio
        </Link>

        <div className="glass-card rounded-3xl p-8 space-y-6">
          <div className="space-y-2">
            <div className="w-11 h-11 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Lock className="w-5 h-5" />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Portfolio Admin</h1>
            <p className="text-xs text-slate-400">
              Sign in with your Supabase Admin account to manage case studies and messages.
            </p>
          </div>

          {!isSupabaseConfigured && (
            <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/30 text-xs text-amber-200 space-y-1">
              <div className="font-semibold flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                Supabase Setup Required
              </div>
              <p className="text-amber-200/80">
                Copy <code className="font-mono">.env.example</code> to{' '}
                <code className="font-mono">.env</code> and run{' '}
                <code className="font-mono">supabase/schema.sql</code> in your Supabase SQL Editor.
              </p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">Admin Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="shanukaupendra@gmail.com"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-emerald-400"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 text-xs text-red-400 font-mono bg-red-950/40 border border-red-500/20 p-3 rounded-xl">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-full bg-white text-slate-950 font-semibold text-sm hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Signing in...
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" /> Sign In to Dashboard
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

