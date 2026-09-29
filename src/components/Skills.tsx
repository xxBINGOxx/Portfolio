import { motion } from 'framer-motion';
import { siteContent } from '../data/content.ts';

export default function Skills() {
  const { skills } = siteContent;

  return (
    <section
      id="skills"
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
            {skills.sectionNum}
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
            {skills.title}
          </motion.h2>
        </div>

        {/* 5 Groups of Mono Tag Chips */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.categories.map((category, idx) => (
            <div
              key={category.name}
              className="bg-[#131316] border border-[rgba(242,240,234,0.12)] rounded-2xl p-6 hover:border-[rgba(242,240,234,0.24)] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[rgba(242,240,234,0.06)]">
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#C8F53C]">
                    {category.name}
                  </h3>
                  <span className="font-mono text-[10px] text-[#9A9A94]">
                    0{idx + 1}
                  </span>
                </div>

                {/* Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs text-[#F2F0EA] bg-[#1B1B1F] border border-[rgba(242,240,234,0.1)] px-3 py-1.5 rounded-lg hover:border-[#C8F53C] hover:text-[#C8F53C] transition-colors select-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft skills as ONE line */}
        <div className="pt-6 border-t border-[rgba(242,240,234,0.08)] flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#86B6C4] shrink-0" />
          <p className="font-mono text-xs sm:text-sm text-[#9A9A94]">
            <span className="text-[#F2F0EA] font-semibold">Core approach:</span>{' '}
            {skills.softSkills}
          </p>
        </div>
      </div>
    </section>
  );
}
