import { forwardRef } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import { useInView } from "../../hooks/useInView";
import shared from "../../styles/shared.module.css";
import styles from "./Contact.module.css";
import { trackPortfolioLinkClick } from "../../analytics/analytics";
import { useCopyToClipboard } from "../../hooks/useCopyToClipboard";

function CopyIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="9"
        y="9"
        width="12"
        height="12"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M5 15H4.5C3.67157 15 3 14.3284 3 13.5V4.5C3 3.67157 3.67157 3 4.5 3H13.5C14.3284 3 15 3.67157 15 4.5V5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 12.5L9.5 18L20 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const Contact = forwardRef<HTMLElement>(
  function Contact(_props, forwardedRef) {
    const { t } = useLanguage();
    const { ref, inView } = useInView<HTMLElement>();
    const { copied, copy } = useCopyToClipboard();
    const cls = (base: string) =>
      [base, inView ? shared.inView : ""].filter(Boolean).join(" ");
    const email = t("contact.email");

    return (
      <section
        id="contact"
        className={styles.contact}
        ref={(node) => {
          ref.current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) forwardedRef.current = node;
        }}
      >
        <div className={cls(shared.eyebrow)}>{t("contact.eyebrow")}</div>
        <h2 className={cls(styles.title)}>{t("contact.title")}</h2>
        <div className={cls(styles.links)}>
          <span className={styles.emailGroup}>
            <a href={`mailto:${email}`}>{email}</a>
            <button
              type="button"
              className={styles.copyBtn}
              onClick={() => copy(email)}
              aria-label={copied ? t("contact.copied") : t("contact.copy")}
              title={copied ? t("contact.copied") : t("contact.copy")}
            >
              {copied ? <CheckIcon /> : <CopyIcon />}
            </button>
          </span>
          <a
            href="https://www.linkedin.com/in/federico-rufrancos/"
            target="_blank"
            rel="noreferrer"
            onClick={() => trackPortfolioLinkClick("linkedin")}
          >
            {t("contact.linkedin")}
          </a>
          <a
            href="https://github.com/federicoruf"
            target="_blank"
            rel="noreferrer"
            onClick={() => trackPortfolioLinkClick("github")}
          >
            {t("contact.github")}
          </a>
        </div>
      </section>
    );
  },
);
