"use client";

import { forwardRef, useEffect, useRef } from "react";
import styles from "./Contact.module.css";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "amerkussad5@gmail.com",
    href: "mailto:amerkussad5@gmail.com",
    cursor: "EMAIL",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/amer-qussad-727a6a199",
    href: "https://www.linkedin.com/in/amer-qussad-727a6a199",
    cursor: "VISIT",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/amerqussad2-ai",
    href: "https://github.com/amerqussad2-ai",
    cursor: "CODE",
    external: true,
  },
];

// Breaks long emails/URLs only after "@" or "/" — avoids the browser's
// default mid-word wrap inside the narrow contact columns.
function withBreaks(value: string) {
  return value.split(/(?<=[@/])/).map((part, index) => (
    <span key={index}>
      {part}
      <wbr />
    </span>
  ));
}

const Contact = forwardRef<HTMLElement, { revealed: boolean }>(
  function Contact({ revealed }, ref) {
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
      const root = sectionRef.current;
      if (!root) return;

      const scenes = Array.from(
        root.querySelectorAll<HTMLElement>("[data-scene]")
      );
      if (!scenes.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(styles.sceneRevealed);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
      );

      scenes.forEach((scene) => observer.observe(scene));
      return () => observer.disconnect();
    }, []);

    const year = new Date().getFullYear();

    return (
      <section
        id="contact"
        ref={(node) => {
          sectionRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        className={`${styles.contact}${revealed ? ` ${styles.contactRevealed}` : ""}`}
      >
        <span className={styles.topRule} aria-hidden="true" />

        <div className={`${styles.scene} ${styles.closing}`} data-scene>
          <div className={styles.sceneInner}>
            <div className={styles.grid}>
              <div className={styles.intro}>
                <span className={styles.label}>Contact</span>
                <h2 className={styles.heading}>
                  Let&rsquo;s build
                  <br />
                  something great.
                </h2>
                <p className={styles.copy}>
                  Open to front-end opportunities, interesting web projects
                  and conversations about building thoughtful digital
                  experiences.
                </p>
              </div>

              <div className={styles.linkRow}>
                {CONTACT_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={styles.linkItem}
                    data-cursor={link.cursor}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <span className={styles.linkLabel}>{link.label}</span>
                    <span className={styles.linkValue}>
                      {withBreaks(link.value)}
                    </span>
                  </a>
                ))}

                <div
                  className={`${styles.linkItem} ${styles.linkItemDisabled}`}
                  data-cursor="RESUME"
                >
                  <span className={styles.linkLabel}>Resume</span>
                  <span className={styles.linkValue}>Unavailable</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className={styles.footer}>
          <span className={styles.footerCopy}>&copy; {year} Amer Kussad</span>
          <span className={styles.footerRole}>Front-End Developer</span>
        </footer>
      </section>
    );
  }
);

export default Contact;
