import { forwardRef } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import { useInView } from "../../hooks/useInView";
import shared from "../../styles/shared.module.css";
import styles from "./Education.module.css";
import { trackPortfolioLinkClick, type PortfolioLinkType } from "../../analytics/analytics";

interface EducationItemData {
  num: string;
  titleKey: "education.1.title" | "education.2.title" | "education.3.title";
  descKey: "education.1.desc" | "education.2.desc" | "education.3.desc";
  url?: string;
  linkKey?: "education.1.link" | "education.2.link";
  linkType?: PortfolioLinkType;
  delayClass?: string;
}

const ITEMS: EducationItemData[] = [
  {
    num: "01",
    titleKey: "education.1.title",
    descKey: "education.1.desc",
    url: "https://sedici.unlp.edu.ar/handle/10915/58933",
    linkKey: "education.1.link",
    linkType: "thesis",
  },
  {
    num: "02",
    titleKey: "education.2.title",
    descKey: "education.2.desc",
    url: "https://graduados.info.unlp.edu.ar/2017/12/12/la-tesis-de-federico-rufrancos-y-mauro-alvarez-gano-el-concurso-de-la-union-internacional-de-telecomunicaciones-itu/",
    linkKey: "education.2.link",
    linkType: "itu-article",
    delayClass: styles.itemDelay1,
  },
  {
    num: "03",
    titleKey: "education.3.title",
    descKey: "education.3.desc",
    delayClass: styles.itemDelay2,
  },
];

export const Education = forwardRef<HTMLElement>(
  function Education(_props, forwardedRef) {
    const { t } = useLanguage();
    const { ref, inView } = useInView<HTMLElement>();

    return (
      <section
        id="education"
        ref={(node) => {
          ref.current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) forwardedRef.current = node;
        }}
      >
        <div
          className={[shared.eyebrow, inView ? shared.inView : ""]
            .filter(Boolean)
            .join(" ")}
        >
          {t("education.eyebrow")}
        </div>
        <div className={styles.list}>
          {ITEMS.map((item) => (
            <div
              key={item.num}
              className={[
                styles.item,
                item.delayClass,
                inView ? shared.inView : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className={styles.num}>{item.num}</div>
              <div>
                <div className={styles.title}>{t(item.titleKey)}</div>
                <div className={styles.desc}>{t(item.descKey)}</div>
                {item.url && item.linkKey && (
                  <a
                    className={styles.link}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() =>
                      item.linkType && trackPortfolioLinkClick(item.linkType)
                    }
                  >
                    {t(item.linkKey)} ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  },
);
