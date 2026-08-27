import { forwardRef } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useInView } from '../../hooks/useInView';
import shared from '../../styles/shared.module.css';
import styles from './Contact.module.css';

export const Contact = forwardRef<HTMLElement>(function Contact(_props, forwardedRef) {
  const { t } = useLanguage();
  const { ref, inView } = useInView<HTMLElement>();
  const cls = (base: string) => [base, inView ? shared.inView : ''].filter(Boolean).join(' ');

  return (
    <section
      id="contact"
      className={styles.contact}
      ref={(node) => {
        ref.current = node;
        if (typeof forwardedRef === 'function') forwardedRef(node);
        else if (forwardedRef) forwardedRef.current = node;
      }}
    >
      <div className={cls(shared.eyebrow)}>{t('contact.eyebrow')}</div>
      <h2 className={cls(styles.title)}>{t('contact.title')}</h2>
      <div className={cls(styles.links)}>
        <a href={`mailto:${t('contact.email')}`}>{t('contact.email')}</a>
        <a href="https://www.linkedin.com/in/federico-rufrancos/" target="_blank" rel="noreferrer">
          {t('contact.linkedin')}
        </a>
        <a href="https://github.com/federicoruf" target="_blank" rel="noreferrer">
          {t('contact.github')}
        </a>
      </div>
    </section>
  );
});
