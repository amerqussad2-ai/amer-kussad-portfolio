import styles from "./ChapterIndex.module.css";

const CHAPTERS = [
  { number: "01", label: "Intro", active: true },
  { number: "02", label: "Work", active: false },
  { number: "03", label: "Tatweer", active: false },
  { number: "04", label: "Casa Luce", active: false },
  { number: "05", label: "About", active: false },
];

export default function ChapterIndex() {
  return (
    <div className={styles.index} aria-hidden="true">
      <ol className={styles.list}>
        {CHAPTERS.map((chapter) => (
          <li
            key={chapter.number}
            className={`${styles.item}${chapter.active ? ` ${styles.itemActive}` : ""}`}
          >
            <span className={styles.number}>{chapter.number}</span>
            <span className={styles.label}>{chapter.label}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
