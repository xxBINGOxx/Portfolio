/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import ScrollProgress from './components/ScrollProgress.tsx';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import { BigOutlineMarquee, ToolChipsMarquee } from './components/Marquee.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Projects from './components/Projects.tsx';
import Skills from './components/Skills.tsx';
import Experience from './components/Experience.tsx';
import Education from './components/Education.tsx';
import Contact from './components/Contact.tsx';
import BackToTop from './components/BackToTop.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F2F0EA] relative selection:bg-[#C8F53C] selection:text-[#0A0A0B]">
      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Floating Pill Header Navigation */}
      <Navbar />

      {/* Main Content Sections (Strict Order) */}
      <main>
        {/* 1. HERO with Photo Arch & Animated Node Pipeline */}
        <Hero />

        {/* Dynamic Section Dividers */}
        <BigOutlineMarquee />
        <ToolChipsMarquee />

        {/* 2. ABOUT */}
        <About />

        {/* 3. SERVICES (Bento Grid) */}
        <Services />

        {/* 4. PROJECTS (Full-Width Rows & Accessible Modal) */}
        <Projects />

        {/* 5. SKILLS (5 Mono Tag Groups) */}
        <Skills />

        {/* 6. EXPERIENCE (Compact Timeline) */}
        <Experience />

        {/* 7. EDUCATION & CERTIFICATIONS (Two Columns) */}
        <Education />
      </main>

      {/* 8. CONTACT & FOOTER */}
      <Contact />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}
