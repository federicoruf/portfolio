import { useEffect, useState, type RefObject } from 'react';
import type { SectionId } from '../config/sections';

/**
 * Observa un conjunto de secciones y devuelve el id de la que está
 * actualmente más visible en el viewport. Alimenta el bloque de título
 * y la regla de navegación lateral.
 */
export function useActiveSection(
  refs: Record<SectionId, RefObject<HTMLElement>>,
  defaultId: SectionId
) {
  const [activeId, setActiveId] = useState<SectionId>(defaultId);

  useEffect(() => {
    const entries = Object.entries(refs) as [SectionId, RefObject<HTMLElement>][];
    const elements = entries.filter(([, ref]) => ref.current);

    const observer = new IntersectionObserver(
      (observed) => {
        observed.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = entries.find(([, ref]) => ref.current === entry.target);
            if (match) setActiveId(match[0]);
          }
        });
      },
      { threshold: 0.5 }
    );

    elements.forEach(([, ref]) => ref.current && observer.observe(ref.current));
    return () => observer.disconnect();
  }, [refs]);

  return activeId;
}
