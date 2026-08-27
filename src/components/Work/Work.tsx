import { forwardRef } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import { useInView } from "../../hooks/useInView";
import shared from "../../styles/shared.module.css";
import styles from "./Work.module.css";

interface WorkItemData {
  num: string;
  titleKey: "work.1.title" | "work.2.title" | "work.3.title" | "work.4.title" | "work.5.title" | "work.6.title" | "work.7.title" | "work.8.title" | "work.9.title";
  descKey: "work.1.desc" | "work.2.desc" | "work.3.desc" | "work.4.desc" | "work.5.desc" | "work.6.desc" | "work.7.desc" | "work.8.desc" | "work.9.desc";
  tags: string[];
  delayClass?: string;
}

const ITEMS: WorkItemData[] = [
  {
    num: "01",
    titleKey: "work.1.title",
    descKey: "work.1.desc",
    tags: ["React", "Node.js", "Next.js", "GCP", "Claude"],
  },
  {
    num: "02",
    titleKey: "work.2.title",
    descKey: "work.2.desc",
    tags: ["Node.js", "Express", "Kibana", "Swagger"],
    delayClass: styles.itemDelay1,
  },
  {
    num: "03",
    titleKey: "work.3.title",
    descKey: "work.3.desc",
    tags: ["React", "Typescript", "Microsoft Power Apps"],
    delayClass: styles.itemDelay2,
  },
  {
    num: "04",
    titleKey: "work.4.title",
    descKey: "work.4.desc",
    tags: ["React", "Jest", "React testing library", "Storybook", "TailwindCSS", "Mapbox"],
    delayClass: styles.itemDelay2,
  },
  {
    num: "05",
    titleKey: "work.5.title",
    descKey: "work.5.desc",
    tags: ["React", "Cypress", "Typescript", "Ant Design", "Material UI"],
    delayClass: styles.itemDelay2,
  },
  {
    num: "06",
    titleKey: "work.6.title",
    descKey: "work.6.desc",
    tags: ["React", "Javascript", "AWS"],
    delayClass: styles.itemDelay2,
  },
  {
    num: "07",
    titleKey: "work.7.title",
    descKey: "work.7.desc",
    tags: ["React", "Node.js", "MongoDB"],
    delayClass: styles.itemDelay2,
  },
  {
    num: "08",
    titleKey: "work.8.title",
    descKey: "work.8.desc",
    tags: ["React", "Node.js", "Java Spring", "MongoDB", "GraphQL", "MySQL", "PostgreSQL", "Angular"],
    delayClass: styles.itemDelay2,
  },
  {
    num: "09",
    titleKey: "work.9.title",
    descKey: "work.9.desc",
    tags: ["Java Spring", "AngularJS", "Sybase"],
    delayClass: styles.itemDelay2,
  },
];

export const Work = forwardRef<HTMLElement>(
  function Work(_props, forwardedRef) {
    const { t } = useLanguage();
    const { ref, inView } = useInView<HTMLElement>();
    const cls = (base: string) =>
      [base, inView ? shared.inView : ""].filter(Boolean).join(" ");

    return (
      <section
        id="work"
        ref={(node) => {
          ref.current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) forwardedRef.current = node;
        }}
      >
        <div className={cls(shared.eyebrow)}>{t("work.eyebrow")}</div>
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
