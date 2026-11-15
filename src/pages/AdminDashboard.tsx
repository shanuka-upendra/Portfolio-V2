import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  CheckCircle2,
  Database,
  Edit3,
  Eye,
  EyeOff,
  ExternalLink,
  FolderKanban,
  Loader2,
  LogOut,
  Mail,
  MailOpen,
  Plus,
  Save,
  Trash2,
  Upload,
  X,
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import { projects as staticProjects, type DeviceType, type ProjectCategory } from '../data/projects';

interface AdminProjectRow {
  id?: string;
  slug: string;
  title: string;
  eyebrow: string;
  headline: string;
  summary: string;
  highlights: string[];
  tech: string[];
  category: ProjectCategory;
  device_type: DeviceType;
  hero_image: string;
  github: string;
  demo: string;
  sort_order: number;
  is_published: boolean;
  views_count: number;
  case_study: {
    role: string;
    timeline: string;
    team: string;
    status: string;
    problem: string;
    solution: string;
    targetUsers: string;
    architecture: { layer: string; tech: string; responsibility: string }[];
    technicalDecisions: string[];
    uiBreakdown: {
      id: string;
      title: string;
      subtitle: string;
      uxRationale: string;
      keyElements: string[];
      image?: string;
    }[];
    challenges: { challenge: string; solution: string }[];
    outcomes: string[];
  };
}

interface ContactMessageRow {
  id: string;
  name: string;
  email: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

const EMPTY_PROJECT: AdminProjectRow = {
  slug: '',
  title: '',
  eyebrow: 'FULL-STACK • REACT • SUPABASE',
  headline: '',
  summary: '',
  highlights: [''],
  tech: ['React', 'TypeScript'],
  category: 'Full-Stack',
  device_type: 'browser',
  hero_image: '',
  github: '',
  demo: '',
  sort_order: 0,
  is_published: true,
  views_count: 0,
  case_study: {
    role: 'Full-Stack Engineer',
    timeline: '2026',
    team: 'Solo',
    status: 'Live',
    problem: '',
    solution: '',
    targetUsers: '',
    architecture: [],
    technicalDecisions: [],
    uiBreakdown: [],
    challenges: [],
    outcomes: [],
  },
};

export const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [authChecked, setAuthChecked] = useState(false);
  const [activeTab, setActiveTab] = useState<'projects' | 'messages'>('projects');
  const [projects, setProjects] = useState<AdminProjectRow[]>([]);
  const [messages, setMessages] = useState<ContactMessageRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);
  const [editing, setEditing] = useState<AdminProjectRow | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [toast, setToast] = useState('');

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3500);
  };

  const fetchData = useCallback(async () => {
    if (!supabase) return;
    setLoading(true);
    const [projRes, msgRes] = await Promise.all([
      supabase.from('projects').select('*').order('sort_order', { ascending: true }),
      supabase.from('contact_messages').select('*').order('created_at', { ascending: false }),
    ]);

    if (projRes.data) setProjects(projRes.data as AdminProjectRow[]);
    if (msgRes.data) setMessages(msgRes.data as ContactMessageRow[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!supabase) {
      navigate('/admin/login', { replace: true });
      return;
    }

    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        navigate('/admin/login', { replace: true });
      } else {
        setAuthChecked(true);
        fetchData();
      }
    });
  }, [navigate, fetchData]);

  const handleSignOut = async () => {
    if (supabase) await supabase.auth.signOut();
    navigate('/admin/login', { replace: true });
  };

  const handleSeedDefaults = async () => {
    if (!supabase) return;
    setSeeding(true);
    const rows = staticProjects.map((p, idx) => ({
      slug: p.slug,
      title: p.title,
      eyebrow: p.eyebrow,
      headline: p.headline,
      summary: p.summary,
      highlights: p.highlights,
      tech: p.tech,
      category: p.category,
      device_type: p.deviceType,
      hero_image: p.heroImage ?? null,
      github: p.github,
      demo: p.demo ?? null,
      case_study: p.caseStudy,
      sort_order: idx,
      is_published: true,
    }));

    const { error } = await supabase.from('projects').upsert(rows, { onConflict: 'slug' });
    setSeeding(false);

    if (error) {
      showToast(`Seed error: ${error.message}`);
    } else {
      showToast('Synced all 6 portfolio projects to Supabase!');
      fetchData();
    }
  };

  const handleTogglePublish = async (proj: AdminProjectRow) => {
    if (!supabase || !proj.id) return;
    const { error } = await supabase
      .from('projects')
      .update({ is_published: !proj.is_published, updated_at: new Date().toISOString() })
      .eq('id', proj.id);

    if (!error) {
      setProjects((prev) =>
        prev.map((p) => (p.id === proj.id ? { ...p, is_published: !p.is_published } : p))
      );
      showToast(proj.is_published ? 'Moved to Draft' : 'Published to Portfolio');
    }
  };

  const handleDeleteProject = async (proj: AdminProjectRow) => {
    if (!supabase || !proj.id) return;
    if (!window.confirm(`Delete "${proj.title}" permanently?`)) return;
    const { error } = await supabase.from('projects').delete().eq('id', proj.id);
    if (!error) {
      setProjects((prev) => prev.filter((p) => p.id !== proj.id));
      showToast(`Deleted ${proj.title}`);
    }
  };

  const handleUploadHero = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!supabase || !editing || !e.target.files?.[0]) return;
    const file = e.target.files[0];
    const ext = file.name.split('.').pop() || 'png';
    const filePath = `${editing.slug || 'project'}-${Date.now()}.${ext}`;

    setUploadingImage(true);
    const { error } = await supabase.storage.from('project-images').upload(filePath, file);

    if (error) {
      showToast(`Upload failed: ${error.message}`);
      setUploadingImage(false);
      return;
    }

    const { data } = supabase.storage.from('project-images').getPublicUrl(filePath);
    const publicUrl = data.publicUrl;

    setEditing((prev) => (prev ? { ...prev, hero_image: publicUrl } : prev));

    // If editing an existing project, persist hero_image immediately so it's never lost
    if (editing.id) {
      await supabase
        .from('projects')
        .update({ hero_image: publicUrl, updated_at: new Date().toISOString() })
        .eq('id', editing.id);
      setProjects((prev) =>
        prev.map((p) => (p.id === editing.id ? { ...p, hero_image: publicUrl } : p))
      );
    }

    setUploadingImage(false);
    showToast('Screenshot uploaded & saved!');
  };

  const handleUploadScreenImage = async (
    screenIdx: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!supabase || !editing || !e.target.files?.[0]) return;
    const file = e.target.files[0];
    const ext = file.name.split('.').pop() || 'png';
    const filePath = `${editing.slug || 'project'}-screen-${screenIdx}-${Date.now()}.${ext}`;

    setUploadingImage(true);
    const { error } = await supabase.storage.from('project-images').upload(filePath, file);
    if (error) {
      showToast(`Screen upload failed: ${error.message}`);
      setUploadingImage(false);
      return;
    }

    const { data } = supabase.storage.from('project-images').getPublicUrl(filePath);
    const publicUrl = data.publicUrl;

    setEditing((prev) => {
      if (!prev) return prev;
      const updatedScreens = [...(prev.case_study.uiBreakdown ?? [])];
      if (updatedScreens[screenIdx]) {
        updatedScreens[screenIdx] = { ...updatedScreens[screenIdx], image: publicUrl };
      }
      return {
        ...prev,
        case_study: { ...prev.case_study, uiBreakdown: updatedScreens },
      };
    });

    setUploadingImage(false);
    showToast('Screen image uploaded! Click Save Project to apply.');
  };

  const handleSaveProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase || !editing) return;
    setSaving(true);

    try {
      const payload = {
        slug: (editing.slug ?? '').trim().toLowerCase().replace(/\s+/g, '-'),
        title: (editing.title ?? '').trim(),
        eyebrow: (editing.eyebrow ?? '').trim(),
        headline: (editing.headline ?? '').trim(),
        summary: (editing.summary ?? '').trim(),
        highlights: (editing.highlights ?? []).filter((h) => h.trim().length > 0),
        tech: (editing.tech ?? []).filter((t) => t.trim().length > 0),
        category: editing.category,
        device_type: editing.device_type,
        hero_image: (editing.hero_image ?? '').trim() || null,
        github: (editing.github ?? '').trim(),
        demo: (editing.demo ?? '').trim() || null,
        case_study: editing.case_study,
        sort_order: Number(editing.sort_order) || 0,
        is_published: editing.is_published,
        updated_at: new Date().toISOString(),
      };

      const query = editing.id
        ? supabase.from('projects').update(payload).eq('id', editing.id)
        : supabase.from('projects').insert([payload]);

      const { error } = await query;

      if (error) {
        showToast(`Save failed: ${error.message}`);
      } else {
        showToast(editing.id ? 'Project updated!' : 'Project created!');
        setEditing(null);
        fetchData();
      }
    } catch (err) {
      showToast(`Save error: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setSaving(false);
    }
  };

  const handleToggleMessageRead = async (msg: ContactMessageRow) => {
    if (!supabase) return;
    const { error } = await supabase
      .from('contact_messages')
      .update({ is_read: !msg.is_read })
      .eq('id', msg.id);

    if (!error) {
      setMessages((prev) =>
        prev.map((m) => (m.id === msg.id ? { ...m, is_read: !m.is_read } : m))
      );
    }
  };

  const handleDeleteMessage = async (id: string) => {
    if (!supabase) return;
    const { error } = await supabase.from('contact_messages').delete().eq('id', id);
    if (!error) setMessages((prev) => prev.filter((m) => m.id !== id));
  };

  if (!authChecked) {
    return (
      <div className="min-h-screen bg-[#080c0d] flex items-center justify-center">
        <Loader2 className="w-6 h-6 text-emerald-400 animate-spin" />
      </div>
    );
  }

  const totalViews = projects.reduce((sum, p) => sum + (p.views_count || 0), 0);
  const unreadCount = messages.filter((m) => !m.is_read).length;

  return (
    <div className="min-h-screen bg-[#080c0d] text-slate-100">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 bg-[#0a1011]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-bold text-white">
              Shanuka<span className="text-emerald-400">.admin</span>
            </span>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-[10px] font-mono text-emerald-300">
              Supabase Connected
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 transition-colors"
            >
              View Live Site <ExternalLink className="w-3 h-3" />
            </Link>
            <button
              type="button"
              onClick={handleSignOut}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-950/50 hover:bg-rose-900/60 border border-rose-500/30 text-xs font-mono text-rose-200 transition-colors cursor-pointer"
            >
              <LogOut className="w-3 h-3" /> Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Toast Banner */}
        {toast && (
          <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-2xl bg-emerald-950 border border-emerald-400/40 text-xs font-mono text-emerald-200 shadow-2xl">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{toast}</span>
          </div>
        )}

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Total Projects', value: projects.length },
            { label: 'Published', value: projects.filter((p) => p.is_published).length },
            { label: 'Case Study Views', value: totalViews },
            { label: 'Unread Messages', value: unreadCount },
          ].map((kpi) => (
            <div key={kpi.label} className="glass-card rounded-2xl p-5">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                {kpi.label}
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mt-1 font-mono">
                {kpi.value}
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('projects')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-colors cursor-pointer ${
                activeTab === 'projects'
                  ? 'bg-white text-slate-950 font-semibold'
                  : 'bg-white/[0.05] text-slate-300 hover:bg-white/10'
              }`}
            >
              <FolderKanban className="w-3.5 h-3.5" /> Projects ({projects.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('messages')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-colors cursor-pointer ${
                activeTab === 'messages'
                  ? 'bg-white text-slate-950 font-semibold'
                  : 'bg-white/[0.05] text-slate-300 hover:bg-white/10'
              }`}
            >
              <Mail className="w-3.5 h-3.5" /> Messages ({messages.length})
            </button>
          </div>

          {activeTab === 'projects' && (
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={handleSeedDefaults}
                disabled={seeding}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.05] hover:bg-white/10 border border-white/10 text-xs font-mono text-emerald-300 transition-colors cursor-pointer disabled:opacity-50"
              >
                {seeding ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Database className="w-3.5 h-3.5" />
                )}
                Sync Default 6 Projects
              </button>
              <button
                type="button"
                onClick={() => setEditing({ ...EMPTY_PROJECT, sort_order: projects.length })}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-slate-950 font-semibold text-xs hover:bg-emerald-300 transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" /> New Project
              </button>
            </div>
          )}
        </div>

        {/* Content */}
        {loading ? (
          <div className="py-16 flex justify-center">
            <Loader2 className="w-6 h-6 text-emerald-400 animate-spin" />
          </div>
        ) : activeTab === 'projects' ? (
          <div className="space-y-3">
            {projects.length === 0 ? (
              <div className="glass-card rounded-3xl p-10 text-center space-y-3">
                <p className="text-sm text-slate-300">
                  No projects in Supabase yet. Click <strong>Sync Default 6 Projects</strong> above
                  to import your existing portfolio projects in one click.
                </p>
              </div>
            ) : (
              projects.map((proj) => (
                <div
                  key={proj.id ?? proj.slug}
                  className="glass-card rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="text-base font-bold text-white">{proj.title}</span>
                      <span className="px-2 py-0.5 rounded-full bg-white/[0.05] text-[10px] font-mono text-slate-300">
                        {proj.category}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${
                          proj.is_published
                            ? 'bg-emerald-500/15 text-emerald-300'
                            : 'bg-amber-500/15 text-amber-300'
                        }`}
                      >
                        {proj.is_published ? 'Published' : 'Draft'}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {proj.views_count || 0} views
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 truncate">{proj.headline}</p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => handleTogglePublish(proj)}
                      title={proj.is_published ? 'Unpublish' : 'Publish'}
                      className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-slate-300 cursor-pointer"
                    >
                      {proj.is_published ? (
                        <Eye className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <EyeOff className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditing(proj)}
                      title="Edit Project"
                      className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-slate-200 cursor-pointer"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteProject(proj)}
                      title="Delete Project"
                      className="p-2 rounded-xl bg-rose-950/50 hover:bg-rose-900/60 text-rose-300 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="space-y-3">
            {messages.length === 0 ? (
              <div className="glass-card rounded-3xl p-10 text-center text-sm text-slate-400">
                No contact messages yet.
              </div>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`glass-card rounded-2xl p-5 space-y-2 ${
                    !msg.is_read ? 'border-emerald-500/40' : ''
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="font-bold text-white text-sm">{msg.name}</span>
                      <span className="text-xs font-mono text-emerald-400 ml-2">{msg.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-slate-500">
                        {new Date(msg.created_at).toLocaleDateString()}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleToggleMessageRead(msg)}
                        className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/10 text-slate-300 cursor-pointer"
                        title={msg.is_read ? 'Mark Unread' : 'Mark Read'}
                      >
                        {msg.is_read ? (
                          <MailOpen className="w-3.5 h-3.5 text-slate-400" />
                        ) : (
                          <Mail className="w-3.5 h-3.5 text-emerald-400" />
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteMessage(msg.id)}
                        className="p-1.5 rounded-lg bg-rose-950/50 hover:bg-rose-900/60 text-rose-300 cursor-pointer"
                        title="Delete"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{msg.message}</p>
                </div>
              ))
            )}
          </div>
        )}
      </main>

      {/* Project & Case Study Editor Modal */}
      {editing && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <form
            onSubmit={handleSaveProject}
            className="w-full max-w-3xl max-h-[90vh] bg-[#0a1011] border border-white/10 rounded-3xl flex flex-col overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <h2 className="font-bold text-white">
                {editing.id ? `Edit: ${editing.title}` : 'New Project & Case Study'}
              </h2>
              <button
                type="button"
                onClick={() => setEditing(null)}
                className="p-2 rounded-full bg-white/[0.05] text-slate-300 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-5 text-sm">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Title</label>
                  <input
                    required
                    value={editing.title}
                    onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Slug (URL)</label>
                  <input
                    required
                    value={editing.slug}
                    onChange={(e) => setEditing({ ...editing, slug: e.target.value })}
                    placeholder="skill-duel"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white font-mono"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Category</label>
                  <select
                    value={editing.category}
                    onChange={(e) =>
                      setEditing({ ...editing, category: e.target.value as ProjectCategory })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e1617] border border-white/10 text-white"
                  >
                    <option value="Full-Stack">Full-Stack</option>
                    <option value="Desktop & Systems">Desktop &amp; Systems</option>
                    <option value="Frontend">Frontend</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Device Frame</label>
                  <select
                    value={editing.device_type}
                    onChange={(e) =>
                      setEditing({ ...editing, device_type: e.target.value as DeviceType })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e1617] border border-white/10 text-white"
                  >
                    <option value="browser">Browser</option>
                    <option value="mobile">Mobile</option>
                    <option value="desktop">Desktop App</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Sort Order</label>
                  <input
                    type="number"
                    value={editing.sort_order}
                    onChange={(e) =>
                      setEditing({ ...editing, sort_order: Number(e.target.value) })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Headline</label>
                <input
                  required
                  value={editing.headline}
                  onChange={(e) => setEditing({ ...editing, headline: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Summary</label>
                <textarea
                  rows={2}
                  required
                  value={editing.summary}
                  onChange={(e) => setEditing({ ...editing, summary: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white"
                />
              </div>

              {/* Hero Screenshot Upload */}
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  Hero UI Screenshot URL (or upload)
                </label>
                <div className="flex gap-2">
                  <input
                    value={editing.hero_image || ''}
                    onChange={(e) => setEditing({ ...editing, hero_image: e.target.value })}
                    placeholder="https://... or /projects/..."
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs font-mono"
                  />
                  <label className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/12 border border-white/10 text-xs font-mono text-emerald-300 cursor-pointer shrink-0">
                    {uploadingImage ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Upload className="w-3.5 h-3.5" />
                    )}
                    Upload
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleUploadHero}
                      className="hidden"
                    />
                  </label>
                </div>
                {editing.hero_image && (
                  <div className="mt-2 rounded-xl overflow-hidden border border-white/10 bg-black/40 max-h-40">
                    <img
                      src={editing.hero_image}
                      alt="Hero preview"
                      className="w-full h-36 object-cover object-top"
                    />
                  </div>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">GitHub URL</label>
                  <input
                    value={editing.github}
                    onChange={(e) => setEditing({ ...editing, github: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    Live Demo URL (optional)
                  </label>
                  <input
                    value={editing.demo || ''}
                    onChange={(e) => setEditing({ ...editing, demo: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  Tech Stack (comma-separated)
                </label>
                <input
                  value={editing.tech.join(', ')}
                  onChange={(e) =>
                    setEditing({
                      ...editing,
                      tech: e.target.value.split(',').map((s) => s.trim()),
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs font-mono"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    Case Study Problem
                  </label>
                  <textarea
                    rows={3}
                    value={editing.case_study.problem}
                    onChange={(e) =>
                      setEditing({
                        ...editing,
                        case_study: { ...editing.case_study, problem: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    Case Study Solution
                  </label>
                  <textarea
                    rows={3}
                    value={editing.case_study.solution}
                    onChange={(e) =>
                      setEditing({
                        ...editing,
                        case_study: { ...editing.case_study, solution: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs"
                  />
                </div>
              </div>

              {/* UI Breakdown Screens Editor */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                    UI Breakdown Screens ({editing.case_study.uiBreakdown?.length ?? 0})
                  </label>
                  <button
                    type="button"
                    onClick={() =>
                      setEditing({
                        ...editing,
                        case_study: {
                          ...editing.case_study,
                          uiBreakdown: [
                            ...(editing.case_study.uiBreakdown ?? []),
                            {
                              id: `screen-${Date.now()}`,
                              title: 'New Screen',
                              subtitle: '',
                              uxRationale: '',
                              keyElements: [],
                              image: '',
                            },
                          ],
                        },
                      })
                    }
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/[0.06] hover:bg-white/12 text-[11px] font-mono text-emerald-300 cursor-pointer"
                  >
                    <Plus className="w-3 h-3" /> Add Screen
                  </button>
                </div>

                {(editing.case_study.uiBreakdown ?? []).map((screen, idx) => (
                  <div
                    key={screen.id || idx}
                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono text-slate-400">
                        Screen #{idx + 1}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          const next = [...(editing.case_study.uiBreakdown ?? [])];
                          next.splice(idx, 1);
                          setEditing({
                            ...editing,
                            case_study: { ...editing.case_study, uiBreakdown: next },
                          });
                        }}
                        className="text-[11px] font-mono text-rose-400 hover:text-rose-300 cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <input
                        value={screen.title}
                        placeholder="Screen Title"
                        onChange={(e) => {
                          const next = [...(editing.case_study.uiBreakdown ?? [])];
                          next[idx] = { ...next[idx], title: e.target.value };
                          setEditing({
                            ...editing,
                            case_study: { ...editing.case_study, uiBreakdown: next },
                          });
                        }}
                        className="px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs"
                      />
                      <div className="flex gap-2">
                        <input
                          value={screen.image || ''}
                          placeholder="Screenshot URL"
                          onChange={(e) => {
                            const next = [...(editing.case_study.uiBreakdown ?? [])];
                            next[idx] = { ...next[idx], image: e.target.value };
                            setEditing({
                              ...editing,
                              case_study: { ...editing.case_study, uiBreakdown: next },
                            });
                          }}
                          className="flex-1 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs font-mono"
                        />
                        <label className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-white/[0.06] hover:bg-white/12 border border-white/10 text-[11px] font-mono text-emerald-300 cursor-pointer shrink-0">
                          <Upload className="w-3 h-3" />
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleUploadScreenImage(idx, e)}
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>

                    <textarea
                      rows={2}
                      value={screen.uxRationale}
                      placeholder="UX Rationale / Explanation..."
                      onChange={(e) => {
                        const next = [...(editing.case_study.uiBreakdown ?? [])];
                        next[idx] = { ...next[idx], uxRationale: e.target.value };
                        setEditing({
                          ...editing,
                          case_study: { ...editing.case_study, uiBreakdown: next },
                        });
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="px-6 py-4 border-t border-white/10 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setEditing(null)}
                className="px-4 py-2 rounded-full bg-white/[0.06] text-xs font-mono text-slate-300 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-slate-950 font-semibold text-xs hover:bg-emerald-300 transition-colors cursor-pointer disabled:opacity-50"
              >
                {saving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                Save Project
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

