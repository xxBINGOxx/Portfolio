import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { siteContent } from '../data/content.ts';
import ProjectModal from './ProjectModal.tsx';

type CaseStudy = (typeof siteContent.projects.caseStudies)[number];

export default function Projects() {
  const { projects } = siteContent;
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="py-20 md:py-28 border-b border-[rgba(242,240,234,0.12)] relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-4 overflow-hidden">
          <motion.span
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs text-[#86B6C4] uppercase tracking-widest inline-block"
          >
            {projects.sectionNum}
          </motion.span>
        </div>

        <div className="mb-14 overflow-hidden max-w-2xl">
          <motion.h2
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F2F0EA] tracking-tight"
          >
            {projects.title}
          </motion.h2>
        </div>

        {/* PART A: Automation Case Studies (Full-Width List Rows) */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6 pb-3 border-b border-[rgba(242,240,234,0.08)]">
            <h3 className="font-mono text-sm uppercase text-[#C8F53C] tracking-wider font-semibold">
              {projects.caseStudiesHeader}
            </h3>
            <span className="font-mono text-xs text-[#9A9A94]">
              {projects.caseStudiesSub}
            </span>
          </div>

          <div className="space-y-3 relative">
            {projects.caseStudies.map((study) => (
              <div
                key={study.id}
                role="button"
                tabIndex={0}
                aria-label={`View case study: ${study.title}`}
                onClick={() => setSelectedProject(study)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(study);
                  }
                }}
                onMouseEnter={() => setHoveredProjectId(study.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                className="w-full text-left bg-[#131316] border border-[rgba(242,240,234,0.12)] hover:border-[#C8F53C] rounded-2xl p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6 transition-all duration-200 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F53C] relative overflow-hidden"
              >
                {/* Left zone: Number, Title, Badge, One-line */}
                <div className="flex items-start gap-4 sm:gap-6 max-w-2xl">
                  <span className="font-mono text-xl sm:text-2xl font-bold text-[#86B6C4] group-hover:text-[#C8F53C] transition-colors shrink-0">
                    {study.num}
                  </span>

                  <div>
                    <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                      <h4 className="text-xl sm:text-2xl font-bold text-[#F2F0EA] group-hover:text-[#C8F53C] transition-colors">
                        {study.title}
                      </h4>
                      <span className="font-mono text-[10px] bg-[#1B1B1F] text-[#86B6C4] border border-[rgba(242,240,234,0.12)] px-2 py-0.5 rounded">
                        {study.badge}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-[#9A9A94] leading-relaxed">
                      {study.oneLiner}
                    </p>
                  </div>
                </div>

                {/* Right zone: Tags and Interactive Arrow */}
                <div className="flex items-center justify-between lg:justify-end gap-4 shrink-0 pl-10 lg:pl-0">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs text-[#9A9A94] bg-[#1B1B1F] border border-[rgba(242,240,234,0.08)] px-2.5 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="w-10 h-10 rounded-full bg-[#1B1B1F] border border-[rgba(242,240,234,0.12)] group-hover:bg-[#C8F53C] group-hover:border-[#C8F53C] flex items-center justify-center text-[#F2F0EA] group-hover:text-[#0A0A0B] transition-all duration-200 shrink-0">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Floating Screenshot Preview Tooltip on Desktop hover */}
                {hoveredProjectId === study.id && (
                  <div
                    aria-hidden="true"
                    className="hidden xl:block absolute right-20 top-1/2 -translate-y-1/2 pointer-events-none z-20 w-64 h-36 bg-[#1B1B1F] border border-[#C8F53C] rounded-lg shadow-2xl p-1 overflow-hidden"
                  >
                    <img
                      src={study.image.replace('.png', '.svg')}
                      alt=""
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* PART B: "Also Built" (Smaller Rows with GitHub links) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6 pb-3 border-b border-[rgba(242,240,234,0.08)]">
            <h3 className="font-mono text-sm uppercase text-[#86B6C4] tracking-wider font-semibold">
              {projects.alsoBuiltHeader}
            </h3>
            <span className="font-mono text-xs text-[#9A9A94]">
              {projects.alsoBuiltSub}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {projects.alsoBuilt.map((item) => (
              <a
                key={item.id}
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#131316] border border-[rgba(242,240,234,0.1)] hover:border-[#86B6C4] rounded-xl p-5 flex items-start justify-between gap-4 transition-all duration-200 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#86B6C4]"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <h4 className="text-base font-bold text-[#F2F0EA] group-hover:text-[#86B6C4] transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#9A9A94] mb-3 leading-relaxed">
                    {item.oneLiner}
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] text-[#9A9A94] bg-[#1B1B1F] px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-2 text-[#9A9A94] group-hover:text-[#F2F0EA] rounded-md transition-colors shrink-0">
                  <Github className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Accessible Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
