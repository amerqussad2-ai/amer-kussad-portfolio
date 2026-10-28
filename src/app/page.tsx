"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import ChapterIndex from "@/components/ChapterIndex";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const [activeChapter, setActiveChapter] = useState("intro");
  const [workRevealed, setWorkRevealed] = useState(false);
  const [aboutRevealed, setAboutRevealed] = useState(false);
  const [contactRevealed, setContactRevealed] = useState(false);

  const workRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const handleIntroFinish = useCallback(() => setIntroDone(true), []);

  useEffect(() => {
    const nodes = [
      document.getElementById("intro"),
      workRef.current,
      aboutRef.current,
      contactRef.current,
    ].filter((node): node is HTMLElement => node !== null);

    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveChapter(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const registrations: Array<[HTMLElement | null, (value: boolean) => void]> = [
      [workRef.current, setWorkRevealed],
      [aboutRef.current, setAboutRevealed],
      [contactRef.current, setContactRevealed],
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const match = registrations.find(([node]) => node === entry.target);
          if (match) {
            match[1](true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    registrations.forEach(([node]) => {
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
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
          <About ref={aboutRef} revealed={aboutRevealed} />
          <Contact ref={contactRef} revealed={contactRevealed} />
        </main>
      </div>
    </>
  );
}
