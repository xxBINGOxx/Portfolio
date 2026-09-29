import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Copy, Check, Linkedin, Github, MessageCircle, ArrowUp } from 'lucide-react';
import { siteContent } from '../data/content.ts';

export default function Contact() {
  const { contact } = siteContent;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback if clipboard API is restricted
      const textarea = document.createElement('textarea');
      textarea.value = contact.email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-20 md:pt-28 pb-12 bg-[#0A0A0B] relative">
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
            {contact.sectionNum}
          </motion.span>
        </div>

        {/* Large Accent-colored Headline */}
        <div className="mb-6 overflow-hidden">
          <motion.h2
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#C8F53C] tracking-tight leading-[1.08]"
          >
            {contact.headline}
          </motion.h2>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl font-bold text-[#F2F0EA] mb-4"
        >
          {contact.tagline}
        </motion.p>

        {/* Prompt line */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base text-[#9A9A94] max-w-xl mb-10 leading-relaxed"
        >
          {contact.promptLine}
        </motion.p>

        {/* Action Buttons Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center gap-3.5 mb-16 relative"
        >
          {/* Primary: Email Me */}
          <a
            href={`mailto:${contact.email}?subject=${encodeURIComponent(contact.emailSubject)}`}
            className="inline-flex items-center gap-2 bg-[#C8F53C] text-[#0A0A0B] font-mono font-bold text-sm px-6 py-3.5 rounded-lg hover:bg-[#b5e22e] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F53C]"
          >
            <Mail className="w-4 h-4" />
            <span>Email me</span>
          </a>

          {/* Secondary: Copy Email with Toast */}
          <button
            type="button"
            onClick={handleCopyEmail}
            aria-label="Copy email address to clipboard"
            className="inline-flex items-center gap-2 bg-[#131316] text-[#F2F0EA] border border-[rgba(242,240,234,0.12)] hover:border-[#C8F53C] font-mono text-sm px-5 py-3.5 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F53C]"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#C8F53C]" />
                <span className="text-[#C8F53C]">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#9A9A94]" />
                <span>Copy email</span>
              </>
            )}
          </button>

          {/* Social Links */}
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex items-center gap-2 bg-[#131316] text-[#F2F0EA] border border-[rgba(242,240,234,0.12)] hover:border-[#86B6C4] hover:text-[#86B6C4] font-mono text-sm px-5 py-3.5 rounded-lg transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="inline-flex items-center gap-2 bg-[#131316] text-[#F2F0EA] border border-[rgba(242,240,234,0.12)] hover:border-[#86B6C4] hover:text-[#86B6C4] font-mono text-sm px-5 py-3.5 rounded-lg transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          {/* Gracefully hidden WhatsApp button if link is empty */}
          {Boolean(contact.whatsapp) && (
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp conversation"
              className="inline-flex items-center gap-2 bg-[#131316] text-[#F2F0EA] border border-[rgba(242,240,234,0.12)] hover:border-[#25D366] font-mono text-sm px-5 py-3.5 rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
          )}

          {/* Toast Notification */}
          <AnimatePresence>
            {copied && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute -top-12 left-0 sm:left-auto bg-[#1B1B1F] border border-[#C8F53C] text-[#F2F0EA] px-3.5 py-1.5 rounded-md text-xs font-mono shadow-xl flex items-center gap-2 pointer-events-none"
              >
                <span className="w-2 h-2 rounded-full bg-[#C8F53C]" />
                <span>{contact.email} copied to clipboard</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Footer Area */}
        <div className="pt-8 border-t border-[rgba(242,240,234,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9A9A94]">
          <p>
            © {contact.footer.copyrightYear} {contact.footer.name}. {contact.footer.rights}
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#C8F53C] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8F53C] p-1 rounded"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
