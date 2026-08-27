import { forwardRef } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useInView } from '../../hooks/useInView';
import shared from '../../styles/shared.module.css';
import styles from './Hero.module.css';

export const Hero = forwardRef<HTMLElement>(function Hero(_props, forwardedRef) {
  const { t } = useLanguage();
  const { ref, inView } = useInView<HTMLElement>();
  const cls = (base: string) => [base, inView ? shared.inView : ''].filter(Boolean).join(' ');

  return (
    <section
      id="hero"
      className={styles.hero}
      ref={(node) => {
        ref.current = node;
        if (typeof forwardedRef === 'function') forwardedRef(node);
        else if (forwardedRef) forwardedRef.current = node;
      }}
    >
      <div className={cls(styles.mark)}>{t('hero.mark')}</div>
      <h1 className={cls(styles.title)}>
        FEDERICO
        <br />
        RUFRANCOS
      </h1>
      <p className={cls(styles.role)}>{t('hero.role')}</p>
      <div className={cls(styles.coords)}>
        <span>
          <b>{t('hero.base.label')}</b>
          {t('hero.base.value')}
        </span>
        <span>
          <b>{t('hero.loc.label')}</b>
          {t('hero.loc.value')}
        </span>
        <span>
          <b>{t('hero.avail.label')}</b>
          {t('hero.avail.value')}
        </span>
      </div>
      <div className={styles.scrollCue}>
        <span>{t('hero.scroll')}</span>
        <div className={styles.stem} />
      </div>
    </section>
  );
});
