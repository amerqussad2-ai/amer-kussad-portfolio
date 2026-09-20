"use client";

import { forwardRef, useEffect, useRef } from "react";
import styles from "./About.module.css";

const About = forwardRef<HTMLElement, { revealed: boolean }>(
  function About({ revealed }, ref) {
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
        id="about"
        ref={(node) => {
          sectionRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        className={`${styles.about}${revealed ? ` ${styles.aboutRevealed}` : ""}`}
      >
        <div className={`${styles.scene} ${styles.spread}`} data-scene>
          <span className={styles.glow} aria-hidden="true" />
          <div className={styles.sceneInner}>
            <div className={styles.kicker}>
              <span className={styles.kickerNumber}>05</span>
              <span className={styles.kickerLabel}>About</span>
            </div>

            <div className={styles.grid}>
              <div className={styles.identity}>
                <h2 className={styles.name}>
                  Amer
                  <br />
                  Kussad
                </h2>
                <div className={styles.identityMeta}>
                  <span className={styles.role}>Front-End Developer</span>
                  <span className={styles.stack}>
                    React · Next.js · TypeScript
                  </span>
                  <span className={styles.location}>
                    Ras Al Khaimah, UAE
                  </span>
                </div>
              </div>

              <div className={styles.editorial}>
                <div className={styles.aboutMe}>
                  <span className={styles.label}>About Me</span>
                  <h3 className={styles.aboutMeHeading}>
                    Building digital
                    <br />
                    experiences with purpose.
                  </h3>
                  <p className={styles.aboutMeCopy}>
                    I&rsquo;m a front-end developer focused on building
                    responsive, polished web experiences with React,
                    Next.js and TypeScript. I care about clear interfaces,
                    thoughtful implementation and the details that make a
                    website feel complete.
                  </p>
                </div>

                <div className={styles.journey}>
                  <span className={styles.label}>My Journey</span>
                  <p className={styles.journeyCopy}>
                    Before focusing on front-end development, I worked in
                    recruitment and customer-facing roles. That experience
                    strengthened my communication, attention to detail and
                    understanding of how people interact with services —
                    qualities I now bring into the way I build for the web.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

export default About;
