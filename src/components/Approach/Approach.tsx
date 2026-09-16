import { forwardRef } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useInView } from '../../hooks/useInView';
import shared from '../../styles/shared.module.css';
import styles from './Approach.module.css';

interface Phase {
  numKey: 'approach.1.num' | 'approach.2.num' | 'approach.3.num' | 'approach.4.num';
  titleKey: 'approach.1.title' | 'approach.2.title' | 'approach.3.title' | 'approach.4.title';
  descKey: 'approach.1.desc' | 'approach.2.desc' | 'approach.3.desc' | 'approach.4.desc';
  delayClass?: string;
}

const PHASES: Phase[] = [
  { numKey: 'approach.1.num', titleKey: 'approach.1.title', descKey: 'approach.1.desc' },
  {
    numKey: 'approach.2.num',
    titleKey: 'approach.2.title',
    descKey: 'approach.2.desc',
    delayClass: styles.stepDelay1,
  },
  {
    numKey: 'approach.3.num',
    titleKey: 'approach.3.title',
    descKey: 'approach.3.desc',
    delayClass: styles.stepDelay2,
  },
  {
    numKey: 'approach.4.num',
    titleKey: 'approach.4.title',
    descKey: 'approach.4.desc',
    delayClass: styles.stepDelay3,
  },
];

export const Approach = forwardRef<HTMLElement>(function Approach(_props, forwardedRef) {
  const { t } = useLanguage();
  const { ref, inView } = useInView<HTMLElement>();
  const cls = (base: string) => [base, inView ? shared.inView : ''].filter(Boolean).join(' ');

  return (
    <section
      id="approach"
      ref={(node) => {
        ref.current = node;
        if (typeof forwardedRef === 'function') forwardedRef(node);
        else if (forwardedRef) forwardedRef.current = node;
      }}
    >
      <div className={cls(shared.eyebrow)}>{t('approach.eyebrow')}</div>
      <h2 className={cls(styles.sectionTitle)}>{t('approach.title')}</h2>
      <div className={styles.grid}>
        {PHASES.map((phase) => (
          <div
            key={phase.numKey}
            className={[styles.step, phase.delayClass, inView ? shared.inView : '']
              .filter(Boolean)
              .join(' ')}
          >
            <span className={styles.num}>{t(phase.numKey)}</span>
            <h3>{t(phase.titleKey)}</h3>
            <p>{t(phase.descKey)}</p>
          </div>
        ))}
      </div>
    </section>
  );
});
