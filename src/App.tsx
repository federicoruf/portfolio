import { useMemo, useRef } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { useActiveSection } from './hooks/useActiveSection';
import type { SectionId } from './config/sections';
import { LanguageToggle } from './components/LanguageToggle/LanguageToggle';
import { TitleBlock } from './components/TitleBlock/TitleBlock';
import { RulerNav } from './components/RulerNav/RulerNav';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Work } from './components/Work/Work';
import { Approach } from './components/Approach/Approach';
import { Contact } from './components/Contact/Contact';

function PortfolioContent() {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const workRef = useRef<HTMLElement>(null);
  const approachRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const sectionRefs = useMemo(
    () => ({
      hero: heroRef,
      about: aboutRef,
      work: workRef,
      approach: approachRef,
      contact: contactRef,
    }),
    []
  );

  const activeId = useActiveSection(sectionRefs, 'hero');

  const handleNavigate = (id: SectionId) => {
    sectionRefs[id].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="grid-bg" />
      <LanguageToggle />
      <TitleBlock activeId={activeId} />
      <RulerNav activeId={activeId} onNavigate={handleNavigate} />

      <Hero ref={heroRef} />
      <About ref={aboutRef} />
      <Work ref={workRef} />
      <Approach ref={approachRef} />
      <Contact ref={contactRef} />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}
