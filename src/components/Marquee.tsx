export function BigOutlineMarquee() {
  const phrase = 'AUTOMATE · SECURE · SHIP · ';
  const repeated = Array(6).fill(phrase).join('');

  return (
    <div
      aria-hidden="true"
      className="w-full overflow-hidden py-10 select-none pointer-events-none border-y border-[rgba(242,240,234,0.08)] bg-[#0A0A0B]"
    >
      <div className="flex whitespace-nowrap animate-[marquee_45s_linear_infinite]">
        <span
          className="font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight text-transparent font-heading uppercase"
          style={{
            WebkitTextStroke: '1px rgba(242, 240, 234, 0.18)',
          }}
        >
          {repeated}
        </span>
        <span
          className="font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight text-transparent font-heading uppercase"
          style={{
            WebkitTextStroke: '1px rgba(242, 240, 234, 0.18)',
          }}
        >
          {repeated}
        </span>
      </div>
    </div>
  );
}

export function ToolChipsMarquee() {
  const tools = [
    'n8n',
    'Webhooks',
    'REST APIs',
    'Google Sheets',
    'Shopify',
    'WooCommerce',
    'Telegram',
    'Slack',
    'PayMob',
    'Stripe',
  ];

  return (
    <div
      aria-label="Supported Integrations and Protocols"
      className="w-full overflow-hidden py-3 bg-[#131316] border-y border-[rgba(242,240,234,0.08)] select-none"
    >
      <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
        <div className="flex items-center gap-8 shrink-0">
          {tools.concat(tools).map((tool, idx) => (
            <div key={`${tool}-${idx}`} className="flex items-center gap-2 font-mono text-xs text-[#9A9A94]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#86B6C4]" />
              <span className="tracking-wide text-[#F2F0EA]">{tool}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-8 shrink-0 ml-8">
          {tools.concat(tools).map((tool, idx) => (
            <div key={`dup-${tool}-${idx}`} className="flex items-center gap-2 font-mono text-xs text-[#9A9A94]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#86B6C4]" />
              <span className="tracking-wide text-[#F2F0EA]">{tool}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
