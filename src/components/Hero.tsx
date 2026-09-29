import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { siteContent } from '../data/content.ts';
import NodePipeline from './NodePipeline.tsx';

export default function Hero() {
  const { personal } = siteContent;
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const headlineWords = [
    { text: 'I', highlight: false, isAccent: false },
    { text: 'automate', highlight: false, isAccent: false },
    { text: 'the', highlight: false, isAccent: false },
    { text: 'busy', highlight: false, isAccent: true },
    { text: 'work.', highlight: false, isAccent: true },
    { text: 'Securely.', highlight: true, isAccent: false },
  ];

  const handleScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-[rgba(242,240,234,0.12)]">
      {/* Background subtle micro-grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#F2F0EA 1px, transparent 1px), linear-gradient(90deg, #F2F0EA 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Availability Chip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#131316] border border-[rgba(242,240,234,0.12)] mb-6 text-xs font-mono text-[#9A9A94]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8F53C] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C8F53C]" />
              </span>
              <span>{personal.availability}</span>
            </motion.div>

            {/* Mono Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-mono text-xs text-[#86B6C4] tracking-widest uppercase mb-3"
            >
              {personal.eyebrow}
            </motion.p>

            {/* H1 with word-by-word reveal */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold leading-[1.08] tracking-tight text-[#F2F0EA] mb-6">
              <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                {headlineWords.map((word, index) => (
                  <span key={index} className="inline-block overflow-hidden pb-1">
                    <motion.span
                      initial={{ y: '100%', opacity: 0 }}
                      animate={{ y: '0%', opacity: 1 }}
                      transition={{
                        duration: 0.55,
                        delay: 0.15 + index * 0.08,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={`inline-block ${
                        word.isAccent
                          ? 'text-[#C8F53C]'
                          : word.highlight
                          ? 'relative text-[#F2F0EA]'
                          : 'text-[#F2F0EA]'
                      }`}
                    >
                      {word.text}
                      {word.highlight && (
                        /* Hand-drawn SVG animated underline */
                        <motion.svg
                          className="absolute -bottom-1.5 left-0 w-full h-[6px] text-[#C8F53C] overflow-visible"
                          viewBox="0 0 100 8"
                          fill="none"
                          preserveAspectRatio="none"
                        >
                          <motion.path
                            d="M 1 5 Q 50 1, 99 5"
                            stroke="#C8F53C"
                            strokeWidth="3"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                              duration: 0.8,
                              delay: 0.75,
                              ease: 'easeOut',
                            }}
                          />
                        </motion.svg>
                      )}
                    </motion.span>
                  </span>
                ))}
              </span>
            </h1>

            {/* Hero Supporting Line (strictly <= 15 words) */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="text-base sm:text-lg text-[#9A9A94] max-w-xl mb-8 leading-relaxed font-normal"
            >
              {personal.heroSub}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
            >
              <button
                type="button"
                onClick={() => handleScrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 bg-[#C8F53C] text-[#0A0A0B] font-mono font-bold text-sm px-6 py-3.5 rounded-lg hover:bg-[#b5e22e] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F53C]"
              >
                <span>{personal.ctaPrimary}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 bg-[#131316] text-[#F2F0EA] border border-[rgba(242,240,234,0.12)] font-mono text-sm px-6 py-3.5 rounded-lg hover:border-[#C8F53C] hover:text-[#C8F53C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F53C]"
              >
                <span>{personal.ctaSecondary}</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Architectural Arch Portrait & Rotating Ring (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative pt-6 lg:pt-0">
            <div className="relative w-[280px] sm:w-[320px] aspect-[4/5]">
              {/* Offset Accent Outline behind the photo */}
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-t-[140px] rounded-b-2xl border border-[#C8F53C]/40 -z-10 pointer-events-none"
              />

              {/* Main ARCH Container */}
              <div className="w-full h-full rounded-t-[140px] rounded-b-2xl bg-[#131316] border border-[rgba(242,240,234,0.12)] overflow-hidden relative flex items-center justify-center shadow-2xl">
                {!imageError ? (
                  <img
                    src={personal.photo.src}
                    alt={personal.photo.alt}
                    style={{
                      objectFit: personal.photo.objectFit as 'cover' | 'contain',
                      objectPosition: personal.photo.objectPosition,
                    }}
                    className={`w-full h-full transition-opacity duration-300 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                  />
                ) : null}

                {/* Elegant AM Letter-mark Fallback until photo is added */}
                {(!imageLoaded || imageError) && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#131316] text-[#F2F0EA] p-6 text-center">
                    <div className="w-24 h-24 rounded-full bg-[#1B1B1F] border border-[rgba(242,240,234,0.15)] flex items-center justify-center mb-4">
                      <span className="font-mono text-3xl font-extrabold text-[#C8F53C] tracking-tighter">
                        {personal.initials}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-[#9A9A94] uppercase tracking-wider">
                      Abdallah Mohamed
                    </span>
                    <span className="font-mono text-[11px] text-[#86B6C4] mt-1">
                      DevSecOps · n8n
                    </span>
                  </div>
                )}

                {/* Soft gradient bottom vignette */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/80 via-transparent to-transparent pointer-events-none"
                />
              </div>

              {/* Rotating Circular Text Ring */}
              <div
                aria-hidden="true"
                className="absolute -top-6 -right-6 w-28 h-28 pointer-events-none select-none"
              >
                <div className="w-full h-full animate-[spin_24s_linear_infinite]">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-[#86B6C4]">
                    <path
                      id="circleTextPath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="font-mono text-[8.5px] uppercase tracking-[2.2px] fill-[#86B6C4]">
                      <textPath href="#circleTextPath" startOffset="0%">
                        {personal.photo.rotatingBadgeText}
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>

              {/* Floating Status Chip */}
              <div className="absolute -bottom-3 left-4 right-4 bg-[#1B1B1F] border border-[rgba(242,240,234,0.16)] px-3.5 py-2 rounded-lg flex items-center gap-2 shadow-xl">
                <span className="w-2 h-2 rounded-full bg-[#C8F53C]" />
                <span className="font-mono text-[11px] text-[#F2F0EA] tracking-tight truncate">
                  {personal.photo.statusChip}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Small Animated Node Chain under the Hero */}
        <div className="mt-16 md:mt-20 pt-8 border-t border-[rgba(242,240,234,0.08)]">
          <NodePipeline />
        </div>
      </div>
    </section>
  );
}
