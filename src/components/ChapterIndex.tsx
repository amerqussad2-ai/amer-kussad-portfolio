import styles from "./ChapterIndex.module.css";

const CHAPTERS = [
  { id: "intro", number: "01", label: "Intro" },
  { id: "work", number: "02", label: "Work" },
  { id: "about", number: "03", label: "About" },
  { id: "contact", number: "04", label: "Contact" },
];

export default function ChapterIndex({ activeId }: { activeId: string }) {
  return (
    <div className={styles.index} aria-hidden="true">
      <ol className={styles.list}>
        {CHAPTERS.map((chapter) => (
          <li
            key={chapter.number}
            className={`${styles.item}${chapter.id === activeId ? ` ${styles.itemActive}` : ""}`}
          >
            <span className={styles.number}>{chapter.number}</span>
            <span className={styles.label}>{chapter.label}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
