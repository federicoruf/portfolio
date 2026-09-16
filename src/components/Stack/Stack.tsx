import { forwardRef } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import { useInView } from "../../hooks/useInView";
import shared from "../../styles/shared.module.css";
import styles from "./Stack.module.css";

interface CategoryData {
  num: string;
  labelKey:
    | "stack.cat.ai"
    | "stack.cat.frontend"
    | "stack.cat.backend"
    | "stack.cat.db"
    | "stack.cat.testing"
    | "stack.cat.cloud"
    | "stack.cat.arch";
  items: string[];
}

const CATEGORIES: CategoryData[] = [
  {
    num: "01",
    labelKey: "stack.cat.ai",
    items: ["Claude", "Cursor"],
  },
  {
    num: "02",
    labelKey: "stack.cat.frontend",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Redux",
      "Redux Toolkit",
      "Zustand",
      "Context API",
      "Angular",
      "AngularJS",
      "jQuery",
      "HTML5",
      "CSS3",
      "TailwindCSS",
      "Material UI",
      "Bootstrap",
      "Storybook",
      "Formik",
      "Zod",
      "React Router",
      "Ag Grid",
      "Chart.js",
      "SheetJS",
      "Figma",
    ],
  },
  {
    num: "03",
    labelKey: "stack.cat.backend",
    items: [
      "Node.js",
      "Express",
      "Java Spring",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "OAuth",
      "PHP",
      "JWT",
      "Firebase",
    ],
  },
  {
    num: "04",
    labelKey: "stack.cat.db",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Oracle", "Redis"],
  },
  {
    num: "05",
    labelKey: "stack.cat.testing",
    items: ["Jest", "React Testing Library", "Cypress", "Enzyme", "TDD"],
  },
  {
    num: "06",
    labelKey: "stack.cat.cloud",
    items: [
      "GCP",
      "Azure",
      "Docker",
      "Terraform",
      "Jenkins",
      "Heroku",
      "OpenShift",
      "GitHub Actions",
      "GitLab CI",
      "Swagger/OpenAPI",
      "Kibana",
      "JIRA",
    ],
  },
  {
    num: "07",
    labelKey: "stack.cat.arch",
    items: [
      "Frontend Architecture",
      "Hexagonal Architecture",
      "Design Systems",
      "Clean Code",
      "Code Reviews",
      "Agile (Scrum/Kanban)",
      "Event-Driven Architectures",
    ],
  },
];

export const Stack = forwardRef<HTMLElement>(function Stack(
  _props,
  forwardedRef
) {
  const { t } = useLanguage();
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section
      id="stack"
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
        {t("stack.eyebrow")}
      </div>
      <div className={styles.grid}>
        {CATEGORIES.map((cat, i) => (
          <div
            key={cat.num}
            className={[
              styles.category,
              i % 3 === 1 ? styles.delay1 : i % 3 === 2 ? styles.delay2 : "",
              inView ? shared.inView : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <div className={styles.num}>{cat.num}</div>
            <div className={styles.label}>{t(cat.labelKey)}</div>
            <div className={styles.tags}>
              {cat.items.map((item) => (
                <span key={item} className={styles.tag}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
