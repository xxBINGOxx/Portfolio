import { useEffect, useRef, useState } from 'react';
import { X, ArrowUpRight, CheckCircle2, ShieldAlert, Cpu } from 'lucide-react';
import { siteContent } from '../data/content.ts';

type CaseStudy = (typeof siteContent.projects.caseStudies)[number];

interface ProjectModalProps {
  project: CaseStudy | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [project]);

  // Handle Escape key and focus trapping
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      modalRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  // Derive SVG fallback path if PNG fails
  const svgFallbackPath = project.image.replace('.png', '.svg');

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0A0A0B]/80 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative w-full max-w-2xl bg-[#1B1B1F] border border-[rgba(242,240,234,0.18)] rounded-2xl shadow-2xl p-6 sm:p-8 outline-none text-[#F2F0EA] my-8"
      >
        {/* Header with Number, Title, and Close Button */}
        <div className="flex items-start justify-between gap-4 border-b border-[rgba(242,240,234,0.1)] pb-6 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs text-[#86B6C4]">CASE {project.num}</span>
              <span className="font-mono text-[10px] bg-[#131316] text-[#C8F53C] border border-[#C8F53C]/40 px-2 py-0.5 rounded">
                {project.badge}
              </span>
            </div>
            <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-[#F2F0EA]">
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2 text-[#9A9A94] hover:text-[#F2F0EA] hover:bg-[#131316] rounded-lg transition-colors focus-visible:ring-1 focus-visible:ring-[#C8F53C]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Workflow Diagram Preview Slot */}
        <div className="mb-6 rounded-xl overflow-hidden bg-[#131316] border border-[rgba(242,240,234,0.1)] aspect-video relative flex items-center justify-center">
          <img
            src={!imageError ? project.image : svgFallbackPath}
            alt={project.alt}
            onError={() => {
              if (!imageError) setImageError(true);
            }}
            className="w-full h-full object-contain"
          />
          <div className="absolute top-2 right-2 bg-[#0A0A0B]/80 font-mono text-[10px] text-[#9A9A94] px-2 py-0.5 rounded border border-[rgba(242,240,234,0.1)]">
            n8n canvas
          </div>
        </div>

        {/* 3 Strict Bullets (Problem / Build / Result, max 14 words each) */}
        <div className="space-y-4 mb-6">
          <div className="p-3.5 bg-[#131316] border border-[rgba(242,240,234,0.08)] rounded-xl flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-[#86B6C4] shrink-0 mt-0.5" />
            <div>
              <span className="font-mono text-xs uppercase text-[#86B6C4] font-semibold block mb-0.5">
                Problem
              </span>
              <p className="text-sm text-[#F2F0EA] leading-relaxed">
                {project.modal.problem}
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-[#131316] border border-[rgba(242,240,234,0.08)] rounded-xl flex items-start gap-3">
            <Cpu className="w-5 h-5 text-[#C8F53C] shrink-0 mt-0.5" />
            <div>
              <span className="font-mono text-xs uppercase text-[#C8F53C] font-semibold block mb-0.5">
                Build
              </span>
              <p className="text-sm text-[#F2F0EA] leading-relaxed">
                {project.modal.build}
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-[#131316] border border-[rgba(242,240,234,0.08)] rounded-xl flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#C8F53C] shrink-0 mt-0.5" />
            <div>
              <span className="font-mono text-xs uppercase text-[#C8F53C] font-semibold block mb-0.5">
                Result
              </span>
              <p className="text-sm text-[#F2F0EA] leading-relaxed">
                {project.modal.result}
              </p>
            </div>
          </div>
        </div>

        {/* Tags and CTA */}
        <div className="pt-4 border-t border-[rgba(242,240,234,0.1)] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs text-[#9A9A94] bg-[#131316] px-2.5 py-1 rounded border border-[rgba(242,240,234,0.08)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href="#contact"
            onClick={() => onClose()}
            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#0A0A0B] bg-[#C8F53C] hover:bg-[#b5e22e] px-4 py-2 rounded-lg transition-colors"
          >
            <span>Request similar workflow</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
