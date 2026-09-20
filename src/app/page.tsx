"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import ChapterIndex from "@/components/ChapterIndex";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Tatweer from "@/components/Tatweer";
import CasaLuce from "@/components/CasaLuce";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const [activeChapter, setActiveChapter] = useState("intro");
  const [workRevealed, setWorkRevealed] = useState(false);
  const [tatweerRevealed, setTatweerRevealed] = useState(false);
  const [casaLuceRevealed, setCasaLuceRevealed] = useState(false);
  const workRef = useRef<HTMLElement | null>(null);
  const tatweerRef = useRef<HTMLElement | null>(null);
  const casaLuceRef = useRef<HTMLElement | null>(null);

  const handleIntroFinish = useCallback(() => {
    setIntroDone(true);
  }, []);

  useEffect(() => {
    const introNode = document.getElementById("intro");
    const workNode = workRef.current;
    const tatweerNode = tatweerRef.current;
    const casaLuceNode = casaLuceRef.current;
    const sections = [introNode, workNode, tatweerNode, casaLuceNode].filter(
      (node): node is HTMLElement => node !== null
    );
    if (!sections.length) return;

    // Drives which chapter reads as "active" — a passive scroll-spy, never
    // intercepting the wheel/touch, so scrolling stays entirely native.
    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveChapter(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((node) => activeObserver.observe(node));

    return () => activeObserver.disconnect();
  }, []);

  useEffect(() => {
    const node = workRef.current;
    if (!node) return;

    // One-time reveal: once Work has entered the viewport, it stays revealed
    // even if the user scrolls back up past it.
    const revealObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setWorkRevealed(true);
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    revealObserver.observe(node);
    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const node = tatweerRef.current;
    if (!node) return;

    const revealObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTatweerRevealed(true);
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    revealObserver.observe(node);
    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const node = casaLuceRef.current;
    if (!node) return;

    const revealObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCasaLuceRevealed(true);
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    revealObserver.observe(node);
    return () => revealObserver.disconnect();
  }, []);

  return (
    <>
      <Preloader onFinish={handleIntroFinish} />
      <div inert={!introDone}>
        <Header />
        <ChapterIndex activeId={activeChapter} />
        <main>
          <Hero receded={activeChapter !== "intro"} />
          <Work ref={workRef} revealed={workRevealed} />
          <Tatweer ref={tatweerRef} revealed={tatweerRevealed} />
          <CasaLuce ref={casaLuceRef} revealed={casaLuceRevealed} />
        </main>
      </div>
    </>
  );
}
