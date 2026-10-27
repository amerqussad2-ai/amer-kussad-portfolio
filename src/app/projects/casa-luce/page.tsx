import Link from "next/link";
import CasaLuce from "@/components/CasaLuce";
export const metadata = { title: "Casa Luce — Amer Kussad", description: "A concept restaurant website — project case study by Amer Kussad." };
export default function CasaLuceCaseStudy() {
  return (
    <main className="v2-case">
      <nav className="v2-case-nav" aria-label="Case study navigation"><Link href="/#work" className="v2-case-back">← Back to selected work</Link><Link href="/">AK.</Link></nav>
      <div className="v2-case-intro"><h1>Casa Luce</h1><p>Italian restaurant concept · Case study</p></div>
      <CasaLuce revealed={true} />
      <footer className="v2-case-footer"><Link href="/#work">← All selected work</Link></footer>
    </main>
  );
}
