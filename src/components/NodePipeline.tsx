import { motion } from 'framer-motion';
import { Zap, Cpu, BellRing } from 'lucide-react';

export default function NodePipeline() {
  const nodes = [
    {
      id: 'trigger',
      label: 'Trigger',
      sub: 'Webhook / Store Event',
      icon: Zap,
      accent: '#C8F53C',
    },
    {
      id: 'process',
      label: 'Process',
      sub: 'Validate & Transform',
      icon: Cpu,
      accent: '#86B6C4',
    },
    {
      id: 'notify',
      label: 'Notify',
      sub: 'CRM, DB & Alerts',
      icon: BellRing,
      accent: '#C8F53C',
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      <div className="text-center mb-6">
        <span className="font-mono text-[11px] uppercase tracking-widest text-[#9A9A94]">
          Live Node Simulation · Security Hardened
        </span>
      </div>

      <div className="w-full relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 px-4 py-6 bg-[#131316] border border-[rgba(242,240,234,0.12)] rounded-2xl">
        {/* Animated Connecting Line on Desktop */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute top-1/2 left-24 right-24 -translate-y-1/2 h-[2px] bg-[rgba(242,240,234,0.1)] pointer-events-none"
        >
          {/* Pulsing travelling dot */}
          <motion.div
            className="w-3 h-3 rounded-full bg-[#C8F53C] -mt-[5px] shadow-[0_0_8px_#C8F53C]"
            animate={{
              left: ['0%', '100%'],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ position: 'absolute' }}
          />
        </div>

        {/* Nodes */}
        {nodes.map((node, index) => {
          const Icon = node.icon;
          return (
            <div
              key={node.id}
              className="relative z-10 flex flex-col sm:flex-row items-center gap-3 bg-[#1B1B1F] border border-[rgba(242,240,234,0.15)] hover:border-[#C8F53C] transition-colors rounded-xl p-3.5 w-full md:w-auto min-w-[200px]"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: 'rgba(200, 245, 60, 0.08)',
                  color: node.accent,
                }}
              >
                <Icon className="w-5 h-5" />
              </div>

              <div className="flex flex-col text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5">
                  <span className="font-mono text-[10px] text-[#9A9A94]">Node 0{index + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8F53C]" />
                </div>
                <span className="font-mono text-sm font-bold text-[#F2F0EA]">{node.label}</span>
                <span className="text-[11px] text-[#9A9A94] font-mono">{node.sub}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
