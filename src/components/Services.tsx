import { motion } from 'framer-motion';
import {
  Workflow,
  ShoppingBag,
  FileSpreadsheet,
  PlugZap,
  Bell,
  ShieldCheck,
  LucideIcon,
} from 'lucide-react';
import { siteContent } from '../data/content.ts';

const iconMap: Record<string, LucideIcon> = {
  Workflow,
  ShoppingBag,
  Sheet: FileSpreadsheet,
  PlugZap,
  Bell,
  ShieldCheck,
};

export default function Services() {
  const { services } = siteContent;

  return (
    <section
      id="services"
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
            {services.sectionNum}
          </motion.span>
        </div>

        <div className="mb-12 overflow-hidden max-w-2xl">
          <motion.h2
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F2F0EA] tracking-tight"
          >
            {services.title}
          </motion.h2>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.items.map((item, index) => {
            const Icon = iconMap[item.icon] || Workflow;
            const isWide = item.gridClass.includes('col-span-2');

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className={`bg-[#131316] border border-[rgba(242,240,234,0.12)] hover:border-[#C8F53C] rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 group relative ${
                  isWide ? 'md:col-span-2' : 'col-span-1'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#1B1B1F] border border-[rgba(242,240,234,0.1)] flex items-center justify-center text-[#C8F53C] group-hover:bg-[#C8F53C] group-hover:text-[#0A0A0B] transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-[#9A9A94]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#F2F0EA] mb-3 group-hover:text-[#C8F53C] transition-colors">
                    {item.title}
                  </h3>

                  {/* Strictly <= 10 words line */}
                  <p className="text-sm sm:text-base text-[#9A9A94] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[rgba(242,240,234,0.06)] flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#86B6C4] uppercase tracking-wider">
                    n8n node pipeline
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8F53C] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
