"use client";

import { forwardRef } from "react";
import Image from "next/image";
import styles from "./Work.module.css";

const PROJECTS = [
  {
    id: "tatweer",
    href: "/projects/tatweer",
    liveUrl: "https://tatweer-employment.amerqussad2.workers.dev",
    number: "01",
    name: "Tatweer Employment",
    type: "Recruitment web application",
    description:
      "A bilingual recruitment web application connecting employers, candidates and internal administration through a clear, accessible experience.",
    stack: ["REACT", "TYPESCRIPT", "SUPABASE"],
    scene: "/images/projects/tatweer-mono-scene.avif",
    image: "/images/projects/tatweer-home.webp",
    mobileImage: "/images/projects/tatweer-mobile-hq.webp",
    alt: "Tatweer Employment website shown on a laptop and mobile phone",
    modifier: styles.showcaseTatweer,
  },
  {
    id: "casa-luce",
    href: "/projects/casa-luce",
    liveUrl: "https://casa-luce-nine.vercel.app",
    number: "02",
    name: "Casa Luce",
    type: "Restaurant website",
    description:
      "A refined multi-page restaurant website for a fictional modern Italian restaurant in Dubai Marina, built around atmosphere and responsive design.",
    stack: ["NEXT.JS", "TYPESCRIPT", "TAILWIND CSS"],
    scene: "/images/projects/casa-luce-mono-scene.avif",
    image: "/images/projects/casa-luce-home.webp",
    mobileImage: "/images/projects/casa-luce/home-mobile.png",
    alt: "Casa Luce restaurant website shown on a laptop and mobile phone",
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
        <p className={styles.kicker}>SELECTED WORK</p>
        <h2 className={styles.heading}>Featured Projects</h2>
        <p className={styles.introCopy}>
          A selection of real-world projects I&apos;ve designed and developed,
          <br className={styles.introBreak} />
          with a focus on clean design, performance and user experience.
        </p>
      </div>

      <div className={styles.list}>
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            className={`${styles.showcase} ${project.modifier}`}
          >
            <a
              href={project.href}
              className={styles.showcaseImageWrap}
              aria-label={`View ${project.name} project details`}
              data-cursor="VIEW"
            >
              <div className={styles.studioScene}>
                <Image
                  src={project.scene}
                  alt=""
                  aria-hidden="true"
                  width={1672}
                  height={941}
                  sizes="(min-width: 1200px) 55vw, (min-width: 900px) 60vw, 95vw"
                  className={styles.mockupImage}
                />
                <span className={styles.desktopScreen}>
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1200px) 55vw, (min-width: 900px) 60vw, 100vw"
                    className={styles.realDesktopImage}
                  />
                </span>
                <span className={styles.mobileScreen} aria-hidden="true">
                  <Image
                    src={project.mobileImage}
                    alt=""
                    fill
                    sizes="(min-width: 1200px) 16vw, (min-width: 900px) 18vw, 30vw"
                    className={styles.realMobileImage}
                  />
                </span>
              </div>
            </a>

            <div className={styles.showcaseText}>
              <span className={styles.showcaseNumber}>{project.number}</span>
              <h3 className={styles.showcaseName}>
                <a href={project.href} className={styles.projectTitleLink}>
                  {project.name}
                </a>
              </h3>
              <p className={styles.showcaseDescription}>{project.description}</p>
              <span className="sr-only">{project.type}</span>
              <ul className={styles.stack} aria-label="Technologies">
                {project.stack.map((tech) => <li key={tech}>{tech}</li>)}
              </ul>

              <div className={styles.projectActions}>
                <a href={project.href} className={styles.viewButton} data-cursor="VIEW">
                  <span aria-hidden="true" className={styles.viewArrow}>→</span>
                  <span>VIEW PROJECT</span>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.liveButton}
                  data-cursor="VISIT"
                >
                  <span>LIVE SITE</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
});

export default Work;
