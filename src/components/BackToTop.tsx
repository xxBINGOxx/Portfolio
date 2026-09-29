import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2 }}
          aria-label="Back to top of page"
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#C8F53C] text-[#0A0A0B] shadow-2xl flex items-center justify-center hover:bg-[#b5e22e] hover:scale-105 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F53C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
