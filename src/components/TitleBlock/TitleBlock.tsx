import { useLanguage } from '../../i18n/LanguageContext';
import { SECTIONS, type SectionId } from '../../config/sections';
import styles from './TitleBlock.module.css';

export function TitleBlock({ activeId }: { activeId: SectionId }) {
  const { lang, t } = useLanguage();
  const active = SECTIONS.find((s) => s.id === activeId) ?? SECTIONS[0];
  const name = lang === 'es' ? active.nameEs : active.nameEn;

  return (
    <div className={styles.block}>
      <div className={styles.row}>
        <span>{t('tb.sheet')}</span>
        <span>{active.sheet}</span>
      </div>
      <div className={styles.row}>
        <span>{t('tb.section')}</span>
        <span>{name}</span>
      </div>
      <div className={styles.row}>
        <span>{t('tb.scale')}</span>
        <span>1:1</span>
      </div>
    </div>
  );
}
