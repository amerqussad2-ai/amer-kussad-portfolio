"use client";

import { forwardRef, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./CasaLuce.module.css";

const VISUAL_PRINCIPLES = [
  {
    number: "01",
    label: "ATMOSPHERE",
    text: "A dark, warm visual system built around evening dining, soft lighting and Dubai Marina.",
  },
  {
    number: "02",
    label: "TYPOGRAPHY",
    text: "Large serif headlines paired with restrained supporting text for a premium editorial feel.",
  },
  {
    number: "03",
    label: "CONTENT FIRST",
    text: "Photography and restaurant imagery lead the experience instead of decorative interface elements.",
  },
];

const RESERVATION_STEPS = [
  {
    number: "01",
    label: "CHOOSE",
    text: "Enter reservation details through a clear, focused form.",
  },
  {
    number: "02",
    label: "VALIDATE",
    text: "Client-side validation guides required fields and input quality.",
  },
  {
    number: "03",
    label: "CONFIRM",
    text: "A front-end success state confirms the demonstration flow.",
  },
];

const OUTCOME_FEATURES = [
  {
    label: "MULTI-PAGE EXPERIENCE",
    text: "Home, Menu, Our Story, Gallery, Reservations and Contact.",
  },
  {
    label: "IMAGE-LED DESIGN",
    text: "Large restaurant visuals carry the atmosphere and brand character.",
  },
  {
    label: "RESPONSIVE SYSTEM",
    text: "Layouts adapt intentionally across desktop and mobile.",
  },
  {
    label: "FRONT-END INTERACTION",
    text: "Forms include validation and demonstration success states without backend persistence.",
  },
];

const CasaLuce = forwardRef<HTMLElement, { revealed: boolean }>(
  function CasaLuce({ revealed }, ref) {
    const sectionRef = useRef<HTMLElement | null>(null);

    // Per-scene entrance: each [data-scene] block reveals once as it enters
    // the viewport — a passive IntersectionObserver, never touching scroll.
    useEffect(() => {
      const root = sectionRef.current;
      if (!root) return;

      const scenes = Array.from(
        root.querySelectorAll<HTMLElement>("[data-scene]")
      );
      if (!scenes.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(styles.sceneRevealed);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
      );

      scenes.forEach((scene) => observer.observe(scene));
      return () => observer.disconnect();
    }, []);

    return (
      <section
        id="casa-luce"
        ref={(node) => {
          sectionRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        className={`${styles.casaLuce}${revealed ? ` ${styles.casaLuceRevealed}` : ""}`}
      >
        {/* A — Overview */}
        <div className={`${styles.scene} ${styles.overview}`} data-scene>
          <div className={styles.overviewAtmosphere} aria-hidden="true">
            <Image
              src="/images/projects/casa-luce/home-desktop.png"
              alt=""
              fill
              sizes="100vw"
              className={styles.overviewAtmosphereImage}
            />
          </div>

          <div className={styles.overviewText}>
            <div className={styles.kicker}>
              <span className={styles.kickerNumber}>04</span>
              <span className={styles.kickerLabel}>Casa Luce</span>
            </div>
            <p className={styles.overviewType}>
              Front-End Restaurant Website
            </p>
            <h2 className={styles.overviewHeadline}>
              A warm editorial
              <br />
              restaurant experience
              <br />
              built for the web.
            </h2>
            <p className={styles.overviewCopy}>
              A refined multi-page restaurant website designed around
              atmosphere, cuisine and an immersive responsive experience.
            </p>
            <p className={styles.overviewMeta}>
              Italian Kitchen · Dubai Marina
            </p>
          </div>

          <div className={styles.overviewImageWrap}>
            <div className={styles.overviewImage}>
              <Image
                src="/images/projects/casa-luce/home-desktop.png"
                alt="Casa Luce homepage"
                fill
                sizes="(min-width: 900px) 92vw, 100vw"
                className={styles.overviewImageEl}
              />
            </div>
          </div>
        </div>

        {/* B — Visual Direction */}
        <div
          className={`${styles.scene} ${styles.visualDirection}`}
          data-scene
        >
          <span className={styles.visualGlow} aria-hidden="true" />
          <div className={styles.sceneInner}>
            <span className={styles.rule} aria-hidden="true" />
            <span className={styles.label}>Visual Direction</span>
            <h2 className={styles.visualHeading}>
              Warm.
              <br />
              Cinematic.
              <br />
              Editorial.
            </h2>

            <div className={styles.principleList}>
              {VISUAL_PRINCIPLES.map((principle) => (
                <div key={principle.number} className={styles.principleRow}>
                  <span className={styles.principleNumber}>
                    {principle.number}
                  </span>
                  <div>
                    <h3 className={styles.principleLabel}>
                      {principle.label}
                    </h3>
                    <p className={styles.principleText}>{principle.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* C — Gallery Experience */}
        <div className={`${styles.scene} ${styles.gallery}`} data-scene>
          <div className={styles.sceneInner}>
            <span className={styles.rule} aria-hidden="true" />
            <span className={styles.label}>Gallery Experience</span>
            <h2 className={styles.galleryHeading}>
              Show the atmosphere.
              <br />
              Before explaining it.
            </h2>
            <p className={styles.galleryCopy}>
              The gallery presents the restaurant through food, interiors
              and Marina views, allowing imagery to carry the experience.
            </p>
          </div>

          <div className={styles.galleryFrame}>
            <div className={styles.galleryAtmosphere} aria-hidden="true">
              <Image
                src="/images/projects/casa-luce/gallery-desktop.png"
                alt=""
                fill
                sizes="100vw"
                className={styles.galleryAtmosphereImage}
              />
            </div>
            <div className={styles.galleryImage}>
              <Image
                src="/images/projects/casa-luce/gallery-desktop.png"
                alt="Casa Luce gallery page"
                fill
                sizes="100vw"
                className={styles.galleryImageEl}
              />
            </div>
          </div>
        </div>

        {/* D — Reservations Experience */}
        <div
          className={`${styles.scene} ${styles.reservations}`}
          data-scene
        >
          <span className={styles.reservationsGlow} aria-hidden="true" />
          <div className={styles.sceneInner}>
            <span className={styles.rule} aria-hidden="true" />
            <span className={styles.label}>Reservations</span>
            <h2 className={styles.reservationsHeading}>
              A clear path
              <br />
              to a table.
            </h2>
            <p className={styles.reservationsCopy}>
              The reservation experience was designed as a focused
              front-end flow with clear inputs, validation and a polished
              success state.
            </p>

            <div className={styles.stepsList}>
              {RESERVATION_STEPS.map((step) => (
                <div key={step.number} className={styles.stepRow}>
                  <span className={styles.stepNumber}>{step.number}</span>
                  <div>
                    <span className={styles.stepLabel}>{step.label}</span>
                    <p className={styles.stepText}>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className={styles.demoNote}>
              <span className={styles.demoNoteLabel}>Demonstration Only</span>
              Submissions are not sent or stored.
            </p>
          </div>
        </div>

        {/* E — Responsive Experience */}
        <div className={`${styles.scene} ${styles.responsive}`} data-scene>
          <div className={styles.sceneInner}>
            <span className={styles.rule} aria-hidden="true" />
            <span className={styles.label}>Responsive Experience</span>
            <h2 className={styles.responsiveHeading}>
              Designed to feel
              <br />
              intentional at every size.
            </h2>
            <p className={styles.responsiveCopy}>
              The same visual identity adapts across desktop and mobile
              without losing hierarchy, atmosphere or usability.
            </p>

            <div className={styles.responsivePair}>
              <div className={styles.responsiveMobileFigure}>
                <div className={styles.responsiveMobileImage}>
                  <Image
                    src="/images/projects/casa-luce/home-mobile.png"
                    alt="Casa Luce mobile homepage"
                    fill
                    sizes="(min-width: 900px) 26vw, 68vw"
                    className={styles.responsiveImageEl}
                  />
                </div>
                <span className={styles.responsiveCaption}>Mobile</span>
              </div>

              <div className={styles.responsiveDesktopFigure}>
                <div className={styles.responsiveDesktopImage}>
                  <Image
                    src="/images/projects/casa-luce/home-desktop.png"
                    alt="Casa Luce homepage"
                    fill
                    sizes="(min-width: 900px) 48vw, 90vw"
                    className={styles.responsiveImageEl}
                  />
                </div>
                <span className={styles.responsiveCaption}>Desktop</span>
              </div>
            </div>
          </div>
        </div>

        {/* F — Project Outcome */}
        <div className={`${styles.scene} ${styles.outcome}`} data-scene>
          <span className={styles.outcomeGlow} aria-hidden="true" />
          <div className={styles.sceneInner}>
            <span className={styles.rule} aria-hidden="true" />
            <span className={styles.label}>Project Outcome</span>
            <h2 className={styles.outcomeHeading}>
              A visual identity
              <br />
              carried through the web.
            </h2>
            <p className={styles.outcomeCopy}>
              Casa Luce brings together responsive layout, image-led
              storytelling and refined interaction in a complete
              multi-page front-end experience.
            </p>

            <div className={styles.outcomeGrid}>
              {OUTCOME_FEATURES.map((feature) => (
                <div key={feature.label} className={styles.outcomeCard}>
                  <h3 className={styles.outcomeLabel}>{feature.label}</h3>
                  <p className={styles.outcomeText}>{feature.text}</p>
                </div>
              ))}
            </div>

            <p className={styles.techLine}>
              Next.js · React · TypeScript · Tailwind CSS · Vercel
            </p>
          </div>
        </div>

        {/* G — Live Site + GitHub / H — Next Chapter */}
        <div className={`${styles.scene} ${styles.cta}`} data-scene>
          <div className={styles.sceneInner}>
            <span className={styles.rule} aria-hidden="true" />
            <div className={styles.ctaRow}>
              <div className={styles.ctaActions}>
                <a
                  href="https://casa-luce-nine.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.liveButton}
                  data-cursor="VISIT"
                >
                  <span>View Live Site</span>
                  <span aria-hidden="true" className={styles.liveArrow}>
                    &#8599;
                  </span>
                </a>

                <a
                  href="https://github.com/amerqussad2-ai/casa-luce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.codeButton}
                  data-cursor="CODE"
                >
                  <span>View GitHub</span>
                  <span aria-hidden="true" className={styles.liveArrow}>
                    &#8599;
                  </span>
                </a>
              </div>

              <div className={styles.nextProject} aria-hidden="true">
                <span className={styles.nextLabel}>Next Chapter</span>
                <span className={styles.nextName}>05 / About</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

export default CasaLuce;
