"use client";

import { useCallback, useState } from "react";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import ChapterIndex from "@/components/ChapterIndex";
import Hero from "@/components/Hero";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  const handleIntroFinish = useCallback(() => {
    setIntroDone(true);
  }, []);

  return (
    <>
      <Preloader onFinish={handleIntroFinish} />
      <div inert={!introDone}>
        <Header />
        <ChapterIndex />
        <Hero />
      </div>
    </>
  );
}
