import { motion } from 'framer-motion';
import { siteContent } from '../data/content.ts';

export default function Experience() {
  const { experience } = siteContent;

  return (
    <section
      id="experience"
      className="py-20 md:py-28 border-b border-[rgba(242,240,234,0.12)] relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-4 overflow-hidden">
          <motion.span
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs text-[#86B6C4] uppercase tracking-widest inline-block"
          >
            {experience.sectionNum}
          </motion.span>
        </div>

        <div className="mb-12 overflow-hidden">
          <motion.h2
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F2F0EA] tracking-tight"
          >
            {experience.title}
          </motion.h2>
        </div>

        {/* Compact Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-[rgba(242,240,234,0.12)] space-y-8">
          {experience.timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#131316] border-2 border-[rgba(242,240,234,0.3)] group-hover:border-[#C8F53C] group-hover:bg-[#C8F53C] transition-colors" />

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                <h3 className="text-base sm:text-lg font-bold text-[#F2F0EA] group-hover:text-[#C8F53C] transition-colors">
                  {item.role}
                </h3>
                <span className="font-mono text-xs text-[#86B6C4] shrink-0">
                  {item.period}
                </span>
              </div>

              {/* Detail line: strictly <= 12 words */}
              <p className="text-sm text-[#9A9A94] leading-relaxed">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
