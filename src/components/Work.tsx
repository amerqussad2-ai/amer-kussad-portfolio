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
    image: "/images/projects/tatweer-home.webp",
    mobileImage: "/images/projects/tatweer-mobile-clean.webp",
    alt: "Tatweer Employment website shown on a laptop and mobile phone",
    imageAspect: "2000 / 1307",
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
    image: "/images/projects/casa-luce-home.webp",
    mobileImage: "/images/projects/casa-luce/home-mobile.png",
    alt: "Casa Luce restaurant website shown on a laptop and mobile phone",
    imageAspect: "2000 / 904",
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
              <div className={styles.deviceStage}>
                <div className={styles.laptopFrame}>
                  <div className={styles.laptopLid}>
                    <span className={styles.laptopCamera} aria-hidden="true" />
                    <div className={styles.showcaseImage}>
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        sizes="(min-width: 1000px) 33vw, (min-width: 700px) 55vw, 73vw"
                        className={styles.showcaseImageEl}
                      />
                    </div>
                  </div>
                  <div className={styles.laptopBase} aria-hidden="true" />
                </div>

                <div className={styles.phoneFrame} aria-hidden="true">
                  <span className={styles.phoneNotch} />
                  <div className={styles.phoneScreen}>
                    <Image
                      src={project.mobileImage}
                      alt=""
                      fill
                      sizes="(min-width: 1000px) 9vw, 18vw"
                      className={styles.phoneImage}
                    />
                  </div>
                </div>
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
