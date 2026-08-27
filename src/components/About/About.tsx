import { forwardRef } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useInView } from '../../hooks/useInView';
import shared from '../../styles/shared.module.css';
import styles from './About.module.css';

export const About = forwardRef<HTMLElement>(function About(_props, forwardedRef) {
  const { t } = useLanguage();
  const { ref, inView } = useInView<HTMLElement>();
  const cls = (base: string) => [base, inView ? shared.inView : ''].filter(Boolean).join(' ');

  return (
    <section
      id="about"
      ref={(node) => {
        ref.current = node;
        if (typeof forwardedRef === 'function') forwardedRef(node);
        else if (forwardedRef) forwardedRef.current = node;
      }}
    >
      <div className={cls(shared.eyebrow)}>{t('about.eyebrow')}</div>
      <div className={styles.grid}>
        <div className={styles.text}>
          <p className={cls(styles.p1)}>{t('about.p1')}</p>
          <p className={cls(styles.p2)}>{t('about.p2')}</p>
        </div>
        <div className={cls(styles.specList)}>
          <div className={styles.specRow}>
            <span>{t('about.spec.stack')}</span>
            <span>{t('about.spec.stack.value')}</span>
          </div>
          <div className={styles.specRow}>
            <span>{t('about.spec.exp')}</span>
            <span>{t('about.spec.exp.value')}</span>
          </div>
          <div className={styles.specRow}>
            <span>{t('about.spec.focus')}</span>
            <span>{t('about.spec.focus.value')}</span>
          </div>
          <div className={styles.specRow}>
            <span>{t('about.spec.mode')}</span>
            <span>{t('about.spec.mode.value')}</span>
          </div>
        </div>
      </div>
    </section>
  );
});
