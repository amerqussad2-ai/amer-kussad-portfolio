"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";

const NAV_ITEMS = [
  { label: "Work", cursor: "WORK", href: "#work" },
  { label: "About", cursor: "ABOUT" },
  { label: "Resume", cursor: "RESUME" },
  { label: "Contact", cursor: "CONTACT" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

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
                  className={styles.navItem}
                  data-cursor={item.cursor}
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
                    className={styles.mobileNavItem}
                    onClick={() => setOpen(false)}
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
