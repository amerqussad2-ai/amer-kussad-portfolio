import type { Metadata } from "next";
import Header from "@/components/Header";
import Tatweer from "@/components/Tatweer";
import styles from "../project.module.css";

export const metadata: Metadata = {
  title: "Tatweer Employment — Amer Kussad",
  description: "Case study of the bilingual Tatweer Employment recruitment web application.",
};

export default function TatweerProjectPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <nav className={styles.backRow} aria-label="Project navigation">
          <a href="/#work" className={styles.backLink}>
            <span aria-hidden="true">←</span> Back to Selected Work
          </a>
        </nav>
        <Tatweer revealed />
        <nav className={styles.footerNav} aria-label="More projects">
          <a href="/#work" className={styles.backLink}>← All projects</a>
          <a href="/projects/casa-luce" className={styles.backLink}>
            Casa Luce <span aria-hidden="true">→</span>
          </a>
        </nav>
      </main>
    </>
  );
}
