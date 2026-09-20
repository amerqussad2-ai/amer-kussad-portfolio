"use client";

import { useEffect, useState } from "react";
import styles from "./Preloader.module.css";

const DURATION_MS = 1600;
const EXIT_MS = 500;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export default function Preloader({ onFinish }: { onFinish: () => void }) {
  const [value, setValue] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      const raf = requestAnimationFrame(() => {
        setValue(100);
        setExiting(true);
      });
      const timer = window.setTimeout(() => {
        setHidden(true);
        onFinish();
      }, 120);
      return () => {
        cancelAnimationFrame(raf);
        window.clearTimeout(timer);
      };
    }

    let cancelled = false;
    let frame = 0;
    let exitTimer = 0;
    let start: number | null = null;

    const tick = (timestamp: number) => {
      if (cancelled) return;
      if (start === null) start = timestamp;
      const t = Math.min((timestamp - start) / DURATION_MS, 1);
      setValue(Math.round(easeOutCubic(t) * 100));

      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setExiting(true);
        exitTimer = window.setTimeout(() => {
          if (!cancelled) {
            setHidden(true);
            onFinish();
          }
        }, EXIT_MS);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      window.clearTimeout(exitTimer);
    };
  }, [onFinish]);

  if (hidden) return null;

  return (
    <div
      className={`${styles.preloader}${exiting ? ` ${styles.preloaderExiting}` : ""}`}
      aria-hidden="true"
    >
      <div className={styles.number}>{value}</div>
      <div className={styles.track}>
        <div className={styles.bar} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
