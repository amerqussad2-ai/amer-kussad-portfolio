import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero({ receded = false }: { receded?: boolean }) {
  return (
    <section
      id="intro"
      className={`${styles.hero}${receded ? ` ${styles.heroReceded}` : ""}`}
      data-cursor="SCROLL"
    >
      <div className={styles.content}>
        <p className={styles.eyebrow}>Front-End Developer</p>

        <h1 className={styles.name}>
          <span className={styles.nameLine}>Amer</span>{" "}
          <span className={styles.nameLine}>Kussad</span>
        </h1>

        <p className={styles.copy}>
          I build responsive, polished web experiences with React, Next.js
          and TypeScript.
        </p>

        <p className={styles.location}>Ras Al Khaimah, UAE</p>

        <div className={styles.actions}>
          <a
            href="#work"
            className="button button--primary"
            data-cursor="EXPLORE"
          >
            Explore My Work
          </a>
          {/* Resume CTA: enable once the safe CV is available — add href, remove
              disabled, and set data-cursor="OPEN". */}
          <button type="button" className="button button--secondary" disabled>
            View Resume
          </button>
        </div>
      </div>

      <div className={styles.portrait}>
        <Image
          src="/images/amer-kussad-profile.jpg"
          alt="Portrait of Amer Kussad"
          fill
          priority
          sizes="(min-width: 900px) 40vw, 70vw"
          className={styles.portraitImage}
        />
        <div className={styles.portraitFade} aria-hidden="true" />
      </div>

      <div className={styles.scrollCue} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>
          Scroll
          <br />
          to explore
        </span>
      </div>
    </section>
  );
}
