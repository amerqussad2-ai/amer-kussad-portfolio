"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import ChapterIndex from "@/components/ChapterIndex";
import Hero from "@/components/Hero";
import Work from "@/components/Work";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const [activeChapter, setActiveChapter] = useState("intro");
  const [workRevealed, setWorkRevealed] = useState(false);
  const workRef = useRef<HTMLElement | null>(null);

  const handleIntroFinish = useCallback(() => {
    setIntroDone(true);
  }, []);

  useEffect(() => {
    const node = workRef.current;
    if (!node) return;

    // Drives which chapter reads as "active" — a passive scroll-spy, never
    // intercepting the wheel/touch, so scrolling stays entirely native.
    const activeObserver = new IntersectionObserver(
      ([entry]) => {
        setActiveChapter(entry.isIntersecting ? "work" : "intro");
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    // One-time reveal: once Work has entered the viewport, it stays revealed
    // even if the user scrolls back up past it.
    const revealObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setWorkRevealed(true);
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    activeObserver.observe(node);
    revealObserver.observe(node);

    return () => {
      activeObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Preloader onFinish={handleIntroFinish} />
      <div inert={!introDone}>
        <Header />
        <ChapterIndex activeId={activeChapter} />
        <main>
          <Hero receded={activeChapter === "work"} />
          <Work ref={workRef} revealed={workRevealed} />
        </main>
      </div>
    </>
  );
}
