import styles from "./ChapterIndex.module.css";

const CHAPTERS = [
  { id: "intro", number: "01", label: "Intro" },
  { id: "work", number: "02", label: "Work" },
  { id: "tatweer", number: "03", label: "Tatweer" },
  { id: "casa-luce", number: "04", label: "Casa Luce" },
  { id: "about", number: "05", label: "About" },
];

export default function ChapterIndex({ activeId }: { activeId: string }) {
  return (
    <nav className={styles.index} aria-label="Page chapters">
      <ol className={styles.list}>
        {CHAPTERS.map((chapter) => (
          <li key={chapter.id} className={styles.item + (chapter.id === activeId ? " " + styles.itemActive : "")}>
            <a href={"#" + chapter.id} aria-current={chapter.id === activeId ? "location" : undefined}>
              <span className={styles.number}>{chapter.number}</span>
              <span className={styles.label}>{chapter.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
