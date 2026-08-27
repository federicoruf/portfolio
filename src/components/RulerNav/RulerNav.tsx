import { SECTIONS, type SectionId } from '../../config/sections';
import styles from './RulerNav.module.css';

interface RulerNavProps {
  activeId: SectionId;
  onNavigate: (id: SectionId) => void;
}

export function RulerNav({ activeId, onNavigate }: RulerNavProps) {
  return (
    <nav className={styles.ruler}>
      {SECTIONS.map((section) => (
        <button
          key={section.id}
          type="button"
          className={[styles.tick, section.id === activeId ? styles.active : '']
            .filter(Boolean)
            .join(' ')}
          onClick={() => onNavigate(section.id)}
        >
          <span className={styles.bar} />
          {section.sheet}
        </button>
      ))}
    </nav>
  );
}
