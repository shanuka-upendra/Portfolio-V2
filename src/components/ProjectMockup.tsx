import React from 'react';
import {
  CheckCircle2,
  FileText,
  Lock,
  Newspaper,
  Radar,
  Shield,
  Smartphone,
  Sparkles,
  Swords,
  Trophy,
} from 'lucide-react';
import type { DeviceType } from '../data/projects';

interface ProjectMockupProps {
  slug: string;
  deviceType: DeviceType;
  variant?: 'card' | 'modal';
  imageSrc?: string;
  imageAlt?: string;
}

const ScreenContent: React.FC<{ slug: string }> = ({ slug }) => {
  switch (slug) {
    case 'securelaw':
      return (
        <div className="p-4 space-y-3 text-left">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <span className="text-xs font-semibold text-white">SecureLaw Portal</span>
            </div>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 text-[10px] font-mono text-emerald-300 border border-emerald-500/30">
              <Lock className="w-2.5 h-2.5" /> JWT Guarded
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="p-2 rounded-lg bg-white/[0.04] border border-white/5">
              <div className="text-[9px] text-slate-400 font-mono">ACTIVE CASES</div>
              <div className="text-sm font-bold text-white mt-0.5">24</div>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.04] border border-white/5">
              <div className="text-[9px] text-slate-400 font-mono">VAULT DOCS</div>
              <div className="text-sm font-bold text-emerald-300 mt-0.5">148</div>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.04] border border-white/5">
              <div className="text-[9px] text-slate-400 font-mono">HEARINGS</div>
              <div className="text-sm font-bold text-white mt-0.5">05</div>
            </div>
          </div>

          <div className="space-y-1.5">
            {[
              { id: 'SL-204', title: 'IP & Licensing Dispute', status: 'In Review' },
              { id: 'SL-198', title: 'Corporate NDA Filing', status: 'Verified' },
              { id: 'SL-191', title: 'Civil Arbitration Brief', status: 'Active' },
            ].map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between px-2.5 py-2 rounded-lg bg-white/[0.03] border border-white/5"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <FileText className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-[11px] text-slate-200 truncate">{item.title}</span>
                </div>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 shrink-0">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      );

    case 'skill-duel':
      return (
        <div className="p-4 space-y-3 text-left">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-300 uppercase tracking-wider">
              <Swords className="w-3 h-3" /> Live Duel #42
            </span>
            <span className="px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-[9px] font-mono text-amber-300">
              Q 6/10
            </span>
          </div>

          <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
            <div>
              <div className="text-[9px] text-slate-400 font-mono">YOU</div>
              <div className="text-sm font-bold text-emerald-400">680 pts</div>
            </div>
            <div className="text-[10px] font-mono text-slate-500">VS</div>
            <div className="text-right">
              <div className="text-[9px] text-slate-400 font-mono">RIVAL</div>
              <div className="text-sm font-bold text-white">540 pts</div>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/20">
            <p className="text-[11px] font-medium text-white leading-snug">
              Which HTTP status code indicates a resource was successfully created?
            </p>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {['200 OK', '201 Created', '204 No Content', '302 Found'].map((opt, i) => (
              <div
                key={opt}
                className={`px-2.5 py-2 rounded-lg text-[10px] font-mono border ${
                  i === 1
                    ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-200 font-semibold'
                    : 'bg-white/[0.03] border-white/10 text-slate-300'
                }`}
              >
                {opt}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-1 text-[10px] font-mono text-slate-400">
            <span className="inline-flex items-center gap-1 text-emerald-300">
              <Trophy className="w-3 h-3" /> Global Rank #4
            </span>
            <span>Auto-Scored</span>
          </div>
        </div>
      );

    case 'folio':
      return (
        <div className="p-4 space-y-3 text-left">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-2">
              <Newspaper className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-semibold text-white">Folio Studio</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-[9px] font-mono text-emerald-300">
              5-Tier RBAC
            </span>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-mono text-emerald-300 uppercase">Published Story</span>
              <span className="text-[9px] font-mono text-slate-400">Stripe Pro</span>
            </div>
            <div className="text-xs font-bold text-white">
              Designing Scalable Multi-Tenant Schemas
            </div>
            <div className="h-1.5 w-3/4 rounded-full bg-white/10" />
            <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
          </div>

          <div className="flex flex-wrap gap-1.5">
            {['Admin', 'Editor', 'Moderator', 'Creator', 'Reader'].map((role, idx) => (
              <span
                key={role}
                className={`px-2 py-1 rounded-md text-[9px] font-mono border ${
                  idx === 0
                    ? 'bg-emerald-500/20 border-emerald-400/40 text-emerald-200'
                    : 'bg-white/[0.03] border-white/10 text-slate-400'
                }`}
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      );

    case 'phonecare-pos':
      return (
        <div className="p-4 space-y-3 text-left">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-semibold text-white">Phonecare POS</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-white/10 text-[9px] font-mono text-slate-300">
              SQLite • Offline Ready
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/5">
              <div className="text-[9px] font-mono text-slate-400">REPAIR QUEUE</div>
              <div className="text-sm font-bold text-white mt-0.5">12 Active</div>
              <div className="text-[9px] text-emerald-400 mt-0.5">4 Ready for Pickup</div>
            </div>
            <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/20">
              <div className="text-[9px] font-mono text-emerald-300">TODAY&apos;S POS</div>
              <div className="text-sm font-bold text-white mt-0.5">$1,480.00</div>
              <div className="text-[9px] text-slate-300 mt-0.5">19 Invoices</div>
            </div>
          </div>

          <div className="space-y-1.5">
            {[
              { item: 'iPhone 14 Screen Replacement', price: '$189.00' },
              { item: 'USB-C Fast Charger 30W', price: '$29.00' },
            ].map((row) => (
              <div
                key={row.item}
                className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-[10px]"
              >
                <span className="text-slate-200 truncate">{row.item}</span>
                <span className="font-mono text-emerald-300">{row.price}</span>
              </div>
            ))}
          </div>
        </div>
      );

    case 'defence-system':
      return (
        <div className="p-4 space-y-3 text-left">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-2">
              <Radar className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-semibold text-white">Main Command HUD</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-[9px] font-mono text-emerald-300">
              Observer Active
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-300">
              <span>Signal Strength</span>
              <span className="text-emerald-400">75%</span>
            </div>
            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1.5">
            {['Tank', 'Helicopter', 'Submarine'].map((unit) => (
              <div
                key={unit}
                className="p-2 rounded-lg bg-white/[0.04] border border-emerald-500/20 text-center"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 mx-auto mb-1 animate-pulse" />
                <div className="text-[10px] font-mono text-white">{unit}</div>
                <div className="text-[8px] font-mono text-emerald-300">SYNCED</div>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return (
        <div className="p-4 space-y-3 text-left">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-semibold text-white">Portfolio Design System</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-[9px] font-mono text-emerald-300">
              React 19
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/5">
              <div className="text-[9px] font-mono text-slate-400">CASE STUDIES</div>
              <div className="text-sm font-bold text-white mt-0.5">6 Docs</div>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/5">
              <div className="text-[9px] font-mono text-slate-400">UI MOTION</div>
              <div className="text-sm font-bold text-emerald-400 mt-0.5">60 FPS</div>
            </div>
          </div>

          <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-[10px] text-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Glassmorphic Tokens &amp; URL-Synced Case Studies</span>
          </div>
        </div>
      );
  }
};

export const ProjectMockup: React.FC<ProjectMockupProps> = ({
  slug,
  deviceType,
  variant = 'card',
  imageSrc,
  imageAlt,
}) => {
  const isMobile = deviceType === 'mobile';

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center ${
        variant === 'card' ? 'pt-4 pl-4 sm:pt-6 sm:pl-6' : ''
      }`}
    >
      {/* Subtle emerald ambient glow behind device */}
      <div className="absolute -inset-4 bg-emerald-500/10 blur-2xl rounded-full pointer-events-none" />

      {isMobile ? (
        <div className="relative w-full max-w-[270px] rounded-[28px] bg-[#0b1012] border-2 border-white/15 shadow-2xl overflow-hidden">
          {/* Phone notch */}
          <div className="flex justify-center pt-2 pb-1 bg-[#0d1416]">
            <div className="w-16 h-3.5 rounded-full bg-black border border-white/10" />
          </div>
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt || `${slug} preview`}
              className="w-full aspect-[9/16] object-cover object-top"
            />
          ) : (
            <ScreenContent slug={slug} />
          )}
        </div>
      ) : (
        <div className="relative w-full rounded-2xl bg-[#0b1012] border border-white/15 shadow-2xl overflow-hidden">
          {/* Browser / Desktop Window Chrome */}
          <div className="flex items-center justify-between px-3.5 py-2.5 bg-white/[0.03] border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
            </div>
            <div className="px-3 py-0.5 rounded-md bg-black/40 border border-white/5 text-[10px] font-mono text-slate-400">
              {deviceType === 'desktop' ? `${slug}.app` : `app.${slug}.dev`}
            </div>
            <div className="w-8" />
          </div>
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt || `${slug} preview`}
              className="w-full aspect-[16/10] object-cover object-top"
            />
          ) : (
            <ScreenContent slug={slug} />
          )}
        </div>
      )}
    </div>
  );
};

