import { useLanguage } from '../../i18n/LanguageContext';
import styles from './LanguageToggle.module.css';

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className={styles.toggle}>
      <button
        type="button"
        className={lang === 'es' ? styles.active : undefined}
        onClick={() => setLang('es')}
        aria-pressed={lang === 'es'}
      >
        ES
      </button>
      <button
        type="button"
        className={lang === 'en' ? styles.active : undefined}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
    </div>
  );
}
