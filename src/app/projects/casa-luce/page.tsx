import type { Metadata } from "next";
import Header from "@/components/Header";
import CasaLuce from "@/components/CasaLuce";
import styles from "../project.module.css";

export const metadata: Metadata = {
  title: "Casa Luce — Amer Kussad",
  description: "Case study of the Casa Luce responsive restaurant website.",
};

export default function CasaLuceProjectPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <nav className={styles.backRow} aria-label="Project navigation">
          <a href="/#work" className={styles.backLink}>
            <span aria-hidden="true">←</span> Back to Selected Work
          </a>
        </nav>
        <CasaLuce revealed />
        <nav className={styles.footerNav} aria-label="More projects">
          <a href="/#work" className={styles.backLink}>← All projects</a>
          <a href="/projects/tatweer" className={styles.backLink}>
            Tatweer Employment <span aria-hidden="true">→</span>
          </a>
        </nav>
      </main>
    </>
  );
}
