import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { type ProjectCaseStudy, type ProjectCategory } from '../data/projects';
import { useProjects, trackProjectView } from '../hooks/useProjects';
import { ProjectMockup } from './ProjectMockup';
import { CaseStudyModal } from './CaseStudyModal';

const CATEGORIES: ('All' | ProjectCategory)[] = [
  'All',
  'Full-Stack',
  'Desktop & Systems',
  'Frontend',
];

const MARQUEE_ITEMS = [
  'CLEAN ARCHITECTURE',
  'FULL-STACK SYSTEMS',
  'UI/UX ENGINEERING',
  'TYPE-SAFE CODE',
  'ACCESSIBILITY',
  'SCALABLE APIS',
];

const CARD_TONES = [
  'from-[#1c2b26] via-[#15221e] to-[#0f1816]',
  'from-[#141f1e] via-[#101919] to-[#0b1212]',
  'from-[#192824] via-[#13201d] to-[#0d1614]',
  'from-[#121d1c] via-[#0e1717] to-[#0a1010]',
];

interface StackedCardProps {
  project: ProjectCaseStudy;
  idx: number;
  total: number;
  progress: MotionValue<number>;
  onOpen: (project: ProjectCaseStudy) => void;
}

const StackedProjectCard: React.FC<StackedCardProps> = ({
  project,
  idx,
  total,
  progress,
  onOpen,
}) => {
  const targetScale = 1 - (total - idx - 1) * 0.035;
  const rangeStart = idx / Math.max(total, 1);
  const scale = useTransform(progress, [rangeStart, 1], [1, targetScale]);
  const tone = CARD_TONES[idx % CARD_TONES.length];

  return (
    <div
      className="md:sticky flex items-start justify-center"
      style={{ top: `${88 + idx * 18}px`, zIndex: idx + 1 }}
    >
      <motion.article
        style={{ scale }}
        className={`group relative w-full rounded-3xl bg-gradient-to-br ${tone} border border-white/12 hover:border-emerald-400/40 transition-colors duration-300 overflow-hidden shadow-[0_-24px_60px_-15px_rgba(0,0,0,0.75)] origin-top`}
      >
        {/* Subtle matte grain texture */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 card-grain" />

        <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Ultra-Clean Editorial Content */}
          <div className="lg:col-span-6 p-8 sm:p-12 space-y-5">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-300/90">
              {project.title} • {project.category}
            </div>

            <h3 className="text-2xl sm:text-4xl font-bold text-white leading-[1.15] tracking-tight">
              {project.headline}
            </h3>

            <p className="text-slate-300/85 text-sm sm:text-base leading-relaxed max-w-md">
              {project.summary}
            </p>

            <div className="pt-3">
              <button
                type="button"
                onClick={() => onOpen(project)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-950 font-semibold text-xs sm:text-sm hover:bg-emerald-300 transition-colors shadow-md cursor-pointer"
              >
                View Case Study
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Clean Cropped Device Preview */}
          <div className="lg:col-span-6 pt-2 lg:pt-10 pl-6 lg:pl-0 self-end flex items-end justify-end">
            <div className="w-full translate-x-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <ProjectMockup
                slug={project.slug}
                deviceType={project.deviceType}
                variant="card"
                imageSrc={project.heroImage}
                imageAlt={`${project.title} UI preview`}
              />
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

export const Projects: React.FC = () => {
  const { projects } = useProjects();
  const [selectedCategory, setSelectedCategory] = useState<'All' | ProjectCategory>('All');
  const [activeSlug, setActiveSlug] = useState<string | null>(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('project');
  });
  const stackContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: stackContainerRef,
    offset: ['start start', 'end end'],
  });

  const activeProject = activeSlug
    ? projects.find((p) => p.slug === activeSlug) ?? null
    : null;

  const openCaseStudy = (project: ProjectCaseStudy) => {
    setActiveSlug(project.slug);
    trackProjectView(project.slug);
    const url = new URL(window.location.href);
    url.searchParams.set('project', project.slug);
    window.history.replaceState({}, '', url.toString());
  };

  const closeCaseStudy = () => {
    setActiveSlug(null);
    const url = new URL(window.location.href);
    url.searchParams.delete('project');
    window.history.replaceState({}, '', url.toString());
  };

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-white/5 overflow-x-clip">
      {/* Ambient Emerald Spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 -left-40 w-[520px] h-[520px] rounded-full bg-emerald-500/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-40 -right-40 w-[460px] h-[460px] rounded-full bg-teal-500/10 blur-[130px]"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-xs font-mono uppercase tracking-[0.22em] text-emerald-400 mb-2">
            05. Curated Work
          </h2>
          <p className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Featured{' '}
            <span className="font-editorial italic font-normal text-emerald-300">
              Case Studies
            </span>
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Scroll through the stacked showcase cards or open any case study for full architecture
            and UI docs.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                selectedCategory === category
                  ? 'bg-white text-slate-950 font-semibold shadow-md'
                  : 'bg-white/[0.04] text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Sticky Stacking Cards Container */}
        <div ref={stackContainerRef} className="relative space-y-10 pb-8">
          {filteredProjects.map((project, idx) => (
            <StackedProjectCard
              key={project.slug}
              project={project}
              idx={idx}
              total={filteredProjects.length}
              progress={scrollYProgress}
              onOpen={openCaseStudy}
            />
          ))}
        </div>
      </div>

      {/* Personalfolio-Inspired Angled Marquee Divider */}
      <div className="mt-20 -mx-4 rotate-[-1.2deg] bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-slate-950 py-3 border-y border-emerald-200/40 shadow-lg overflow-hidden">
        <div className="animate-marquee">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center gap-4 px-5 text-xs sm:text-sm font-mono font-bold tracking-widest uppercase whitespace-nowrap"
            >
              <span>✦</span>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Detailed Case Study Reader Modal */}
      <CaseStudyModal
        project={activeProject}
        onClose={closeCaseStudy}
        onSelectProject={openCaseStudy}
        allProjects={projects}
      />
    </section>
  );
};
