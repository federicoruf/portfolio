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
import { Stack } from './components/Stack/Stack';
import { Contact } from './components/Contact/Contact';
import { PersonalProjects } from './components/PersonalProjects/PersonalProjects';
import { Education } from './components/Education/Education';

function PortfolioContent() {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const workRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLElement>(null);
  const personalProjectsRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const sectionRefs = useMemo(
    () => ({
      hero: heroRef,
      about: aboutRef,
      work: workRef,
      stack: stackRef,
      personalProjects: personalProjectsRef,
      education: educationRef,
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
      <Stack ref={stackRef} />
      <PersonalProjects ref={personalProjectsRef} />
      <Education ref={educationRef} />
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
