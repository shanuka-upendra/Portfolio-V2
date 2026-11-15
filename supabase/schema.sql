-- ============================================================================
-- Portfolio-V2 Supabase Schema & Row Level Security (RLS)
-- Paste this into your Supabase Dashboard -> SQL Editor and run it once.
-- ============================================================================

-- 1. Projects & Case Studies Table
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  eyebrow text not null default '',
  headline text not null,
  summary text not null,
  highlights jsonb not null default '[]'::jsonb,
  tech jsonb not null default '[]'::jsonb,
  category text not null default 'Full-Stack',
  device_type text not null default 'browser',
  hero_image text,
  github text not null default '',
  demo text,
  case_study jsonb not null default '{}'::jsonb,
  sort_order integer not null default 0,
  is_published boolean not null default true,
  views_count integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 2. Contact Messages Inbox Table
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  is_read boolean not null default false,
  created_at timestamptz not null default now()
);

-- 3. Increment view counter safely from public visitors
create or replace function public.increment_project_view(project_slug text)
returns void
language plpgsql
security definer
as $$
begin
  update public.projects
  set views_count = views_count + 1
  where slug = project_slug;
end;
$$;

-- 4. Enable Row Level Security
alter table public.projects enable row level security;
alter table public.contact_messages enable row level security;

-- Public can read published projects
drop policy if exists "Public can read published projects" on public.projects;
create policy "Public can read published projects"
  on public.projects for select
  using (is_published = true);

-- Authenticated admin can do everything on projects
drop policy if exists "Admin full access on projects" on public.projects;
create policy "Admin full access on projects"
  on public.projects for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- Public can submit contact messages
drop policy if exists "Public can insert contact messages" on public.contact_messages;
create policy "Public can insert contact messages"
  on public.contact_messages for insert
  with check (true);

-- Authenticated admin can read/update/delete contact messages
drop policy if exists "Admin full access on contact_messages" on public.contact_messages;
create policy "Admin full access on contact_messages"
  on public.contact_messages for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- 5. Storage Bucket for Project UI Screenshots
insert into storage.buckets (id, name, public)
values ('project-images', 'project-images', true)
on conflict (id) do nothing;

drop policy if exists "Public can view project images" on storage.objects;
create policy "Public can view project images"
  on storage.objects for select
  using (bucket_id = 'project-images');

drop policy if exists "Authenticated admin can upload project images" on storage.objects;
create policy "Authenticated admin can upload project images"
  on storage.objects for insert
  with check (bucket_id = 'project-images' and auth.role() = 'authenticated');

drop policy if exists "Authenticated admin can update project images" on storage.objects;
create policy "Authenticated admin can update project images"
  on storage.objects for update
  using (bucket_id = 'project-images' and auth.role() = 'authenticated');

drop policy if exists "Authenticated admin can delete project images" on storage.objects;
drop policy if exists "Authenticated admin can update/delete project images" on storage.objects;
create policy "Authenticated admin can delete project images"
  on storage.objects for delete
  using (bucket_id = 'project-images' and auth.role() = 'authenticated');

