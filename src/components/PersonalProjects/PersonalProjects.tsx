import { forwardRef } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import { useInView } from "../../hooks/useInView";
import shared from "../../styles/shared.module.css";
import styles from "./PersonalProjects.module.css";
import { trackPortfolioLinkClick } from "../../analytics/analytics";

interface WorkItemData {
  num: string;
  titleKey: "personalProjects.1.title" | "personalProjects.2.title";
  descKey: "personalProjects.1.desc" | "personalProjects.2.desc";
  tags: string[];
  url?: string;
  linkKey?: "personalProjects.1.link";
  delayClass?: string;
}

const ITEMS: WorkItemData[] = [
  {
    num: "01",
    titleKey: "personalProjects.1.title",
    descKey: "personalProjects.1.desc",
    tags: ["Next.js", "React", "Geolocalización"],
    url: "https://gpx-mountain-guide.vercel.app/",
    linkKey: "personalProjects.1.link",
  },
  {
    num: "02",
    titleKey: "personalProjects.2.title",
    descKey: "personalProjects.2.desc",
    tags: ["React", "TypeScript", "RFID"],
    delayClass: styles.itemDelay1,
  },
];

export const PersonalProjects = forwardRef<HTMLElement>(
  function Work(_props, forwardedRef) {
    const { t } = useLanguage();
    const { ref, inView } = useInView<HTMLElement>();

    return (
      <section
        id="personalProjects"
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
          {t("personalProjects.eyebrow")}
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
                    onClick={() => trackPortfolioLinkClick("gpx-mountain-guide")}
                  >
                    {t(item.linkKey)} ↗
                  </a>
                )}
              </div>
              <div className={styles.tags}>
                {item.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  },
);
