"use client";

import { forwardRef } from "react";
import Image from "next/image";
import styles from "./Work.module.css";

const PROJECTS = [
  {
    id: "tatweer",
    href: "#tatweer",
    live: true,
    number: "01",
    name: "Tatweer Employment",
    type: "Recruitment web application",
    metaLabel: "Web Application",
    description:
      "A bilingual recruitment web application for employers, candidates and internal administration.",
    stack: ["React", "TypeScript", "Supabase"],
    image: "/images/projects/tatweer-home.webp",
    alt: "Tatweer Employment homepage",
    width: 1350,
    height: 610,
    modifier: styles.showcaseTatweer,
  },
  {
    id: "casa-luce",
    href: "#casa-luce",
    live: true,
    number: "02",
    name: "Casa Luce",
    type: "Restaurant website",
    metaLabel: "Website",
    description:
      "A multi-page restaurant website for a fictional modern Italian restaurant in Dubai Marina.",
    stack: ["Next.js", "TypeScript"],
    image: "/images/projects/casa-luce-home.webp",
    alt: "Casa Luce restaurant website homepage",
    width: 1352,
    height: 608,
    modifier: styles.showcaseCasaLuce,
  },
];

const Work = forwardRef<HTMLElement, { revealed: boolean }>(function Work(
  { revealed },
  ref
) {
  return (
    <section
      id="work"
      ref={ref}
      className={`${styles.work}${revealed ? ` ${styles.workRevealed}` : ""}`}
    >
      <div className={styles.intro}>
        <div className={styles.kicker}>
          <span className={styles.kickerNumber}>02</span>
          <span className={styles.kickerLabel}>Selected Work</span>
        </div>
        <h2 className={styles.heading}>Selected Work</h2>
        <span className={styles.introRule} aria-hidden="true" />
      </div>

      <div className={styles.list}>
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            className={`${styles.showcase} ${project.modifier}`}
            data-cursor="VIEW"
          >
            <Image
              src={project.image}
              alt=""
              aria-hidden="true"
              fill
              sizes="100vw"
              className={styles.showcaseBackdrop}
            />
            <div className={styles.showcaseScrim} aria-hidden="true" />

            <div className={styles.showcaseText}>
              <span className={styles.showcaseNumber}>{project.number}</span>
              <h3 className={styles.showcaseName}>{project.name}</h3>
              <p className={styles.showcaseType}>{project.type}</p>
              <p className={styles.showcaseDescription}>
                {project.description}
              </p>

              <ul className={styles.stack}>
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              {project.live ? (
                <a
                  href={project.href}
                  className={styles.viewButton}
                  data-cursor="VIEW"
                >
                  <span>View Project</span>
                  <span aria-hidden="true" className={styles.viewArrow}>
                    &rarr;
                  </span>
                </a>
              ) : (
                <button type="button" className={styles.viewButton}>
                  <span>View Project</span>
                  <span aria-hidden="true" className={styles.viewArrow}>
                    &rarr;
                  </span>
                </button>
              )}
            </div>

            <div className={styles.showcaseImageWrap}>
              <div
                className={styles.showcaseImage}
                style={{ aspectRatio: `${project.width} / ${project.height}` }}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 900px) 58vw, 92vw"
                  className={styles.showcaseImageEl}
                />
              </div>
            </div>

            <div className={styles.showcaseMeta} aria-hidden="true">
              <span>{project.metaLabel}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
});

export default Work;
