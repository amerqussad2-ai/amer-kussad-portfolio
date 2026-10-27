import Link from "next/link";
import Tatweer from "@/components/Tatweer";
export const metadata = { title: "Tatweer Employment — Amer Kussad", description: "A bilingual recruitment platform — project case study by Amer Kussad." };
export default function TatweerCaseStudy() {
  return (
    <main className="v2-case">
      <nav className="v2-case-nav" aria-label="Case study navigation"><Link href="/#work" className="v2-case-back">← Back to selected work</Link><Link href="/">AK.</Link></nav>
      <div className="v2-case-intro"><h1>Tatweer Employment</h1><p>Recruitment web application · Case study</p></div>
      <Tatweer revealed={true} />
      <footer className="v2-case-footer"><Link href="/#work">← All selected work</Link></footer>
    </main>
  );
}
