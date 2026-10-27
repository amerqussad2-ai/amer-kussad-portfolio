"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";

const NAV_ITEMS = [
  { label: "Work", cursor: "WORK", href: "#work" },
  { label: "About", cursor: "ABOUT", href: "#about" },
  {
    label: "Resume",
    cursor: "VIEW",
    href: "/Amer_Kussad_Frontend_Resume.pdf",
    external: true,
  },
  { label: "Contact", cursor: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  // Highlight the section currently reached while scrolling, not just the last clicked link.
  useEffect(() => {
    const sectionIds = ["work", "about", "contact"];
    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;
      const marker = window.innerHeight * 0.35;
      let current = "";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= marker) {
          current = id;
        }
      }

      setActiveSection((previous) => previous === current ? previous : current);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header className={styles.header}>
      <span className={styles.mark} data-cursor="SCROLL">
        AK
      </span>

      <div className={styles.nav}>
        <ul className={styles.navList}>
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              {item.href ? (
                <a
                  href={item.href}
                  className={`${styles.navItem}${!item.external && item.href === `#${activeSection}` ? ` ${styles.navItemActive}` : ""}`}
                  aria-current={!item.external && item.href === `#${activeSection}` ? "location" : undefined}
                  data-cursor={item.cursor}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.label}
                </a>
              ) : (
                <span className={styles.navItem} data-cursor={item.cursor}>
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ul>

        <button
          ref={toggleRef}
          type="button"
          className={styles.menuToggle}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className={styles.menuIcon} aria-hidden="true" />
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className={styles.mobilePanel}>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <a
                    href={item.href}
                    className={`${styles.mobileNavItem}${!item.external && item.href === `#${activeSection}` ? ` ${styles.mobileNavItemActive}` : ""}`}
                    aria-current={!item.external && item.href === `#${activeSection}` ? "location" : undefined}
                    onClick={() => setOpen(false)}
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className={styles.mobileNavItem}>{item.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
