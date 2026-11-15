import { useEffect, useState } from 'react';
import { projects as staticProjects, type ProjectCaseStudy } from '../data/projects';
import { isSupabaseConfigured, supabase } from '../lib/supabase';

interface SupabaseProjectRow {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  headline: string;
  summary: string;
  highlights: string[];
  tech: string[];
  category: ProjectCaseStudy['category'];
  device_type: ProjectCaseStudy['deviceType'];
  hero_image: string | null;
  github: string;
  demo: string | null;
  case_study: ProjectCaseStudy['caseStudy'];
  sort_order: number;
  is_published: boolean;
  views_count: number;
}

export function mapRowToProject(row: SupabaseProjectRow): ProjectCaseStudy {
  return {
    slug: row.slug,
    title: row.title,
    eyebrow: row.eyebrow,
    headline: row.headline,
    summary: row.summary,
    highlights: Array.isArray(row.highlights) ? row.highlights : [],
    tech: Array.isArray(row.tech) ? row.tech : [],
    category: row.category || 'Full-Stack',
    deviceType: row.device_type || 'browser',
    heroImage: row.hero_image ?? undefined,
    github: row.github,
    demo: row.demo ?? undefined,
    caseStudy: {
      role: row.case_study?.role ?? 'Full-Stack Developer',
      timeline: row.case_study?.timeline ?? '',
      team: row.case_study?.team ?? 'Solo',
      status: row.case_study?.status ?? 'Completed',
      problem: row.case_study?.problem ?? '',
      solution: row.case_study?.solution ?? '',
      targetUsers: row.case_study?.targetUsers ?? '',
      architecture: Array.isArray(row.case_study?.architecture) ? row.case_study.architecture : [],
      technicalDecisions: Array.isArray(row.case_study?.technicalDecisions)
        ? row.case_study.technicalDecisions
        : [],
      uiBreakdown: Array.isArray(row.case_study?.uiBreakdown) ? row.case_study.uiBreakdown : [],
      challenges: Array.isArray(row.case_study?.challenges) ? row.case_study.challenges : [],
      outcomes: Array.isArray(row.case_study?.outcomes) ? row.case_study.outcomes : [],
    },
  };
}

export function useProjects() {
  const [projects, setProjects] = useState<ProjectCaseStudy[]>(staticProjects);
  const [loading, setLoading] = useState<boolean>(isSupabaseConfigured);

  useEffect(() => {
    const client = supabase;
    if (!client) return;

    let cancelled = false;

    const load = async () => {
      try {
        const { data, error } = await client
          .from('projects')
          .select('*')
          .eq('is_published', true)
          .order('sort_order', { ascending: true });

        if (!cancelled && !error && data && data.length > 0) {
          setProjects((data as SupabaseProjectRow[]).map(mapRowToProject));
        }
      } catch {
        // Keep staticProjects fallback on network error
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return { projects, loading };
}

export async function trackProjectView(slug: string) {
  if (!supabase) return;
  try {
    await supabase.rpc('increment_project_view', { project_slug: slug });
  } catch {
    // Non-blocking analytics
  }
}
