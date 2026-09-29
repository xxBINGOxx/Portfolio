import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteContent } from '../data/content.ts';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = siteContent.contact.navLinks.map((link) => link.href.replace('#', ''));
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-40 px-4 pointer-events-none">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Floating Pill Container: solid #131316, thin border, no blur */}
        <div className="w-full bg-[#131316] border border-[rgba(242,240,234,0.12)] rounded-full px-4 py-2.5 shadow-2xl flex items-center justify-between pointer-events-auto">
          {/* Left: AM mark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            aria-label="Abdallah Mohamed - Home"
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8F53C] rounded-full p-1"
          >
            <div className="w-8 h-8 rounded-full bg-[#1B1B1F] border border-[rgba(242,240,234,0.15)] flex items-center justify-center text-xs font-mono font-bold text-[#C8F53C] group-hover:border-[#C8F53C] transition-colors">
              {siteContent.personal.initials}
            </div>
            <span className="hidden sm:inline font-mono text-xs text-[#9A9A94] group-hover:text-[#F2F0EA] transition-colors">
              n8n.BINGO
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 text-xs font-mono"
          >
            {siteContent.contact.navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-full transition-colors ${
                    isActive
                      ? 'text-[#0A0A0B] bg-[#C8F53C] font-semibold'
                      : 'text-[#9A9A94] hover:text-[#F2F0EA] hover:bg-[#1B1B1F]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Let's talk CTA + Mobile hamburger */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1 bg-[#C8F53C] text-[#0A0A0B] text-xs font-mono font-bold px-3.5 py-1.5 rounded-full hover:bg-[#b5e22e] transition-colors"
            >
              <span>Let's talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="md:hidden p-1.5 text-[#9A9A94] hover:text-[#F2F0EA] rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8F53C]"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-screen Dark Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed inset-0 z-50 bg-[#0A0A0B] flex flex-col justify-between p-6 pointer-events-auto md:hidden"
        >
          <div className="flex items-center justify-between border-b border-[rgba(242,240,234,0.12)] pb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#131316] border border-[#C8F53C] flex items-center justify-center font-mono font-bold text-xs text-[#C8F53C]">
                {siteContent.personal.initials}
              </div>
              <span className="font-mono text-xs text-[#9A9A94]">Menu</span>
            </div>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 text-[#9A9A94] hover:text-[#F2F0EA] rounded-full focus-visible:ring-1 focus-visible:ring-[#C8F53C]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-5 my-auto">
            {siteContent.contact.navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-baseline justify-between text-2xl font-bold text-[#F2F0EA] hover:text-[#C8F53C] transition-colors py-2 border-b border-[rgba(242,240,234,0.06)]"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-[#9A9A94]">0{idx + 1}</span>
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-[rgba(242,240,234,0.12)] flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#9A9A94]">
              <span className="w-2 h-2 rounded-full bg-[#C8F53C] animate-pulse" />
              <span>{siteContent.personal.availability}</span>
            </div>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full text-center py-3 bg-[#C8F53C] text-[#0A0A0B] font-mono font-bold text-sm rounded-lg"
            >
              Let's talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
