"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import styles from "./CustomCursor.module.css";

const DEFAULT_LABEL = "SCROLL";

function readCursorLabel(node: EventTarget | null): string | null {
  if (!(node instanceof Element)) return null;
  return node.closest<HTMLElement>("[data-cursor]")?.dataset.cursor ?? null;
}

function subscribeFinePointer(callback: () => void) {
  const mql = window.matchMedia("(pointer: fine)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getFinePointerSnapshot() {
  return window.matchMedia("(pointer: fine)").matches;
}

function getFinePointerServerSnapshot() {
  return false;
}

export default function CustomCursor() {
  const finePointer = useSyncExternalStore(
    subscribeFinePointer,
    getFinePointerSnapshot,
    getFinePointerServerSnapshot
  );
  const [touchDisabled, setTouchDisabled] = useState(false);
  const [label, setLabel] = useState(DEFAULT_LABEL);
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const dotRef = useRef<HTMLDivElement | null>(null);

  const enabled = finePointer && !touchDisabled;

  useEffect(() => {
    if (!enabled) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const lag = reducedMotion ? 1 : 0.2;

    let raf = 0;
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { ...pos };

    const applyTransform = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      }
    };

    const loop = () => {
      pos.x += (target.x - pos.x) * lag;
      pos.y += (target.y - pos.y) * lag;
      applyTransform();
      raf = requestAnimationFrame(loop);
    };

    const handlePointerMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      setVisible(true);
      const found = readCursorLabel(event.target);
      setLabel(found ?? DEFAULT_LABEL);
      setActive(Boolean(found));
    };

    const handlePointerLeave = () => setVisible(false);

    const handleTouchStart = () => {
      setTouchDisabled(true);
      setVisible(false);
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("touchstart", handleTouchStart, {
      passive: true,
      once: true,
    });

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, [enabled]);

  useEffect(() => {
    document.documentElement.classList.toggle("has-custom-cursor", enabled);
    return () => document.documentElement.classList.remove("has-custom-cursor");
  }, [enabled]);

  if (!enabled) return null;

  const classNames = [
    styles.cursor,
    active ? styles.cursorActive : "",
    visible ? "" : styles.cursorHidden,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={dotRef} aria-hidden="true" className={classNames}>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
