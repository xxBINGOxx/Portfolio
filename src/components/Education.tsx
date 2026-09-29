import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { siteContent } from '../data/content.ts';

export default function Education() {
  const { education } = siteContent;

  return (
    <section
      id="education"
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
            {education.sectionNum}
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
            {education.title}
          </motion.h2>
        </div>

        {/* Two Compact Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Column */}
          <div className="bg-[#131316] border border-[rgba(242,240,234,0.12)] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 pb-4 mb-6 border-b border-[rgba(242,240,234,0.08)]">
              <div className="w-8 h-8 rounded-lg bg-[#1B1B1F] flex items-center justify-center text-[#C8F53C]">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="font-mono text-sm uppercase tracking-wider font-semibold text-[#F2F0EA]">
                Academic Education
              </h3>
            </div>

            <div className="space-y-6">
              {education.educationList.map((item, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h4 className="text-base font-bold text-[#F2F0EA] group-hover:text-[#C8F53C] transition-colors">
                      {item.institution}
                    </h4>
                    <span className="font-mono text-xs text-[#86B6C4] shrink-0">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-[#9A9A94]">
                    {item.degree}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="bg-[#131316] border border-[rgba(242,240,234,0.12)] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 pb-4 mb-6 border-b border-[rgba(242,240,234,0.08)]">
              <div className="w-8 h-8 rounded-lg bg-[#1B1B1F] flex items-center justify-center text-[#86B6C4]">
                <Award className="w-4 h-4" />
              </div>
              <h3 className="font-mono text-sm uppercase tracking-wider font-semibold text-[#F2F0EA]">
                Certifications &amp; Tracks
              </h3>
            </div>

            <div className="space-y-4">
              {education.certificationsList.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between gap-3 pb-3 border-b border-[rgba(242,240,234,0.05)] last:border-b-0 last:pb-0 group"
                >
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#F2F0EA] group-hover:text-[#C8F53C] transition-colors">
                      {cert.name}
                    </h4>
                    <span className="text-xs text-[#9A9A94]">
                      {cert.issuer}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#86B6C4] shrink-0">
                    {cert.period}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
