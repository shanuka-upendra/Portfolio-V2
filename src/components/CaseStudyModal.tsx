import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, Maximize2, X } from 'lucide-react';
import type { ProjectCaseStudy } from '../data/projects';
import { ProjectMockup } from './ProjectMockup';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onSelectProject: (project: ProjectCaseStudy) => void;
  allProjects: ProjectCaseStudy[];
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects,
}) => {
  const [screenSelection, setScreenSelection] = useState<{ slug: string; idx: number }>({
    slug: '',
    idx: 0,
  });
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null);

  const activeScreenIdx =
    project && screenSelection.slug === project.slug ? screenSelection.idx : 0;

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (zoomedImage) {
          setZoomedImage(null);
        } else {
          onClose();
        }
      }
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, zoomedImage]);

  if (!project) return null;

  const currentIdx = allProjects.findIndex((p) => p.slug === project.slug);
  const prevProject = allProjects[(currentIdx - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIdx + 1) % allProjects.length];
  const activeScreen =
    project.caseStudy.uiBreakdown[activeScreenIdx] ?? project.caseStudy.uiBreakdown[0];

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="case-study-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-0 sm:p-6"
        onClick={onClose}
      >
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl h-full sm:h-auto sm:max-h-[90vh] bg-[#0a1011] border border-white/10 sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Clean Top Bar */}
          <div className="shrink-0 px-6 sm:px-10 py-4 bg-[#0a1011]/95 border-b border-white/8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-sm sm:text-base font-bold text-white truncate">
                {project.title}
              </span>
              <span className="hidden sm:inline-block text-white/20">•</span>
              <span className="hidden sm:inline-block text-xs font-mono text-emerald-400">
                {project.category}
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/12 text-xs font-mono text-slate-200 transition-colors"
              >
                GitHub <ExternalLink className="w-3 h-3" />
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-slate-950 hover:bg-emerald-300 text-xs font-semibold transition-colors"
                >
                  Live Demo <ExternalLink className="w-3 h-3" />
                </a>
              )}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close case study"
                className="p-2 rounded-full bg-white/[0.06] hover:bg-white/12 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Spacious Editorial Body */}
          <div className="flex-1 overflow-y-auto px-6 sm:px-12 py-10 space-y-12">
            {/* Hero */}
            <header className="space-y-5 max-w-3xl">
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-400">
                {project.eyebrow}
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-[1.15]">
                {project.headline}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.summary}
              </p>

              {/* Minimal Inline Metadata */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs font-mono text-slate-400">
                <span>
                  <strong className="text-slate-200 font-medium">Role:</strong>{' '}
                  {project.caseStudy.role}
                </span>
                <span>
                  <strong className="text-slate-200 font-medium">Team:</strong>{' '}
                  {project.caseStudy.team}
                </span>
                <span>
                  <strong className="text-slate-200 font-medium">Status:</strong>{' '}
                  <span className="text-emerald-400">{project.caseStudy.status}</span>
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full bg-white/[0.05] text-[11px] font-mono text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </header>

            {/* UI Gallery & Screen Breakdown (Visual First) */}
            <section className="space-y-5 pt-8 border-t border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-white">UI &amp; Screen Walkthrough</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.caseStudy.uiBreakdown.map((screen, idx) => (
                    <button
                      key={screen.id}
                      type="button"
                      onClick={() =>
                        setScreenSelection({ slug: project.slug, idx })
                      }
                      className={`px-3 py-1 rounded-full text-[11px] font-mono transition-all cursor-pointer ${
                        idx === activeScreenIdx
                          ? 'bg-white text-slate-950 font-semibold'
                          : 'bg-white/[0.05] text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      {screen.title}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative group">
                <ProjectMockup
                  slug={project.slug}
                  deviceType={project.deviceType}
                  variant="modal"
                  imageSrc={activeScreen?.image ?? project.heroImage}
                  imageAlt={activeScreen?.title ?? project.title}
                />
                {(activeScreen?.image ?? project.heroImage) && (
                  <button
                    type="button"
                    onClick={() =>
                      setZoomedImage({
                        src: (activeScreen?.image ?? project.heroImage)!,
                        alt: activeScreen?.title ?? project.title,
                      })
                    }
                    className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 hover:bg-black border border-white/15 text-[11px] font-mono text-white opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    <Maximize2 className="w-3 h-3 text-emerald-400" />
                    Expand
                  </button>
                )}
              </div>

              {activeScreen && (
                <div className="grid sm:grid-cols-12 gap-6 pt-2">
                  <div className="sm:col-span-7 space-y-1.5">
                    <h4 className="text-sm font-semibold text-white">{activeScreen.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {activeScreen.uxRationale}
                    </p>
                  </div>
                  <ul className="sm:col-span-5 space-y-1.5">
                    {activeScreen.keyElements.map((el) => (
                      <li key={el} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{el}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            {/* Problem & Solution */}
            <section className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div className="space-y-2">
                <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400">
                  The Problem
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.caseStudy.problem}
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-mono uppercase tracking-wider text-emerald-400">
                  The Solution
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {project.caseStudy.solution}
                </p>
              </div>
            </section>

            {/* System Architecture */}
            <section className="space-y-5 pt-8 border-t border-white/10">
              <h3 className="text-lg font-bold text-white">System Architecture</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                {project.caseStudy.architecture.map((arch) => (
                  <div key={arch.layer} className="space-y-1.5">
                    <div className="text-xs font-mono text-emerald-400">{arch.tech}</div>
                    <h4 className="text-sm font-bold text-white">{arch.layer}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{arch.responsibility}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Challenges & Outcomes */}
            <section className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Key Challenges</h3>
                <div className="space-y-4">
                  {project.caseStudy.challenges.map((item) => (
                    <div key={item.challenge} className="space-y-1">
                      <p className="text-xs font-semibold text-white">{item.challenge}</p>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.solution}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Outcomes</h3>
                <ul className="space-y-2.5">
                  {project.caseStudy.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Clean Bottom Navigation */}
          <div className="shrink-0 px-6 sm:px-10 py-3.5 bg-[#0a1011] border-t border-white/8 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => onSelectProject(prevProject)}
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{prevProject.title}</span>
            </button>
            <button
              type="button"
              onClick={() => onSelectProject(nextProject)}
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>{nextProject.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

        {/* Fullscreen Image Lightbox */}
        {zoomedImage && (
          <div
            onClick={(e) => {
              e.stopPropagation();
              setZoomedImage(null);
            }}
            className="fixed inset-0 z-[120] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8"
          >
            <button
              type="button"
              onClick={() => setZoomedImage(null)}
              aria-label="Close fullscreen preview"
              className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={zoomedImage.src}
              alt={zoomedImage.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-[88vh] rounded-2xl border border-white/15 shadow-2xl object-contain"
            />
          </div>
        )}
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};
