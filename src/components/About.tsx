import { motion } from 'framer-motion';
import { siteContent } from '../data/content.ts';

export default function About() {
  const { about } = siteContent;

  return (
    <section
      id="about"
      className="py-20 md:py-28 border-b border-[rgba(242,240,234,0.12)] relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Number & Label */}
        <div className="mb-4 overflow-hidden">
          <motion.span
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs text-[#86B6C4] uppercase tracking-widest inline-block"
          >
            {about.sectionNum}
          </motion.span>
        </div>

        {/* Section Heading with masked slide-up */}
        <div className="mb-8 overflow-hidden">
          <motion.h2
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F2F0EA] tracking-tight"
          >
            {about.title}
          </motion.h2>
        </div>

        {/* About Paragraphs (max 60 words, 2 short paragraphs) */}
        <div className="space-y-4 mb-8 text-[#9A9A94] text-base sm:text-lg leading-relaxed font-normal">
          {about.paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Quick Facts Line in JetBrains Mono */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-6 border-t border-[rgba(242,240,234,0.08)] flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-[#C8F53C]" />
          <span className="font-mono text-xs sm:text-sm text-[#F2F0EA] tracking-wide">
            {about.quickFacts}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
