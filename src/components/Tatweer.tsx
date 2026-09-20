"use client";

import { forwardRef, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Tatweer.module.css";

const SOLUTION_ITEMS = [
  {
    number: "01",
    label: "FOR CANDIDATES",
    text: "Discover opportunities, explore job details and submit applications through a clear bilingual experience.",
  },
  {
    number: "02",
    label: "FOR EMPLOYERS",
    text: "Submit recruitment requests and job requirements through structured employer-facing forms.",
  },
  {
    number: "03",
    label: "FOR ADMIN",
    text: "Manage jobs, review submitted data and access protected candidate files through an authenticated admin area.",
  },
];

const TECH_GROUPS = [
  {
    number: "01",
    label: "FRONTEND",
    items: ["React", "TypeScript", "Vite", "Tailwind CSS"],
  },
  {
    number: "02",
    label: "DATA & AUTH",
    items: ["Supabase", "PostgreSQL", "Supabase Auth", "Supabase Storage"],
  },
  {
    number: "03",
    label: "APP LAYER",
    items: ["Wouter", "TanStack Query", "React Hook Form", "Zod"],
  },
  {
    number: "04",
    label: "DEPLOYMENT",
    items: ["Cloudflare Workers", "Wrangler", "Git / GitHub"],
  },
];

const JOBS_STEPS = [
  { number: "01", label: "DISCOVER", text: "Browse available opportunities." },
  {
    number: "02",
    label: "REVIEW",
    text: "Explore job details and requirements.",
  },
  {
    number: "03",
    label: "APPLY",
    text: "Submit an application through the job flow.",
  },
];

const RTL_FEATURES = [
  {
    number: "01",
    label: "FULL ARABIC INTERFACE",
    text: "Native RTL layout across the public experience.",
  },
  {
    number: "02",
    label: "RTL / LTR DIRECTION",
    text: "Public UI structure adapts between right-to-left and left-to-right layouts.",
  },
  {
    number: "03",
    label: "BILINGUAL PUBLIC EXPERIENCE",
    text: "Core public-facing flows are available in Arabic and English.",
  },
];

const ADMIN_CAPABILITIES = [
  {
    label: "MANAGE JOBS",
    text: "Create, update and manage job listings.",
  },
  {
    label: "REVIEW SUBMITTED DATA",
    text: "Review applications, candidate submissions and employer requests.",
  },
  {
    label: "ACCESS PROTECTED FILES",
    text: "Access private candidate files through authenticated admin workflows.",
  },
];

const OUTCOME_FEATURES = [
  {
    label: "JOB OPPORTUNITIES",
    text: "Browse job listings and open individual job details.",
  },
  {
    label: "EMPLOYER REQUESTS",
    text: "Submit recruitment requirements through structured forms.",
  },
  {
    label: "ADMIN CONTROL",
    text: "Manage jobs and review submitted data.",
  },
  {
    label: "ARABIC / RTL SUPPORT",
    text: "A bilingual public experience with RTL and LTR layouts.",
  },
  {
    label: "MODERN WEB STACK",
    text: "Built with React, TypeScript, Supabase and Cloudflare deployment tooling.",
  },
  {
    label: "PROTECTED FILE ACCESS",
    text: "Private candidate files are restricted through authenticated admin access.",
  },
];

const Tatweer = forwardRef<HTMLElement, { revealed: boolean }>(
  function Tatweer({ revealed }, ref) {
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
        id="tatweer"
        ref={(node) => {
          sectionRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        className={`${styles.tatweer}${revealed ? ` ${styles.tatweerRevealed}` : ""}`}
      >
        {/* A — Overview */}
        <div className={`${styles.scene} ${styles.overview}`} data-scene>
          <div className={styles.overviewAtmosphere} aria-hidden="true">
            <Image
              src="/images/projects/tatweer-home.webp"
              alt=""
              fill
              sizes="100vw"
              className={styles.overviewAtmosphereImage}
            />
            <span className={styles.overviewGlow} />
          </div>

          <div className={styles.overviewGrid}>
            <div className={styles.overviewText}>
              <div className={styles.kicker}>
                <span className={styles.kickerNumber}>03</span>
                <span className={styles.kickerLabel}>Tatweer Employment</span>
              </div>
              <h2 className={styles.overviewTitle}>Tatweer Employment</h2>
              <p className={styles.overviewType}>
                Recruitment Web Application
              </p>
              <p className={styles.overviewCopy}>
                A bilingual recruitment web application for employers,
                candidates and internal administration.
              </p>
              <ul className={styles.overviewStack}>
                <li>React</li>
                <li>TypeScript</li>
                <li>Supabase</li>
              </ul>
            </div>

            <div className={styles.overviewImageWrap}>
              <div className={styles.overviewImage}>
                <Image
                  src="/images/projects/tatweer-home.webp"
                  alt="Tatweer Employment homepage"
                  fill
                  sizes="(min-width: 900px) 58vw, 92vw"
                  className={styles.overviewImageEl}
                />
              </div>
            </div>
          </div>
        </div>

        {/* B — The Solution */}
        <div className={`${styles.scene} ${styles.solution}`} data-scene>
          <span className={styles.solutionAtmosphere} aria-hidden="true" />
          <div className={styles.sceneInner}>
            <span className={styles.rule} aria-hidden="true" />
            <h2 className={styles.solutionHeading}>The Solution</h2>

            <div className={styles.solutionList}>
              {SOLUTION_ITEMS.map((item) => (
                <div key={item.number} className={styles.solutionRow}>
                  <span className={styles.solutionNumber}>{item.number}</span>
                  <span className={styles.solutionLabel}>/ {item.label}</span>
                  <p className={styles.solutionText}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* C — Tech Stack */}
        <div className={`${styles.scene} ${styles.techStack}`} data-scene>
          <div className={styles.sceneInner}>
            <span className={styles.rule} aria-hidden="true" />
            <h2 className={styles.techHeading}>Tech Stack</h2>

            <div className={styles.techGrid}>
              {TECH_GROUPS.map((group) => (
                <div key={group.number} className={styles.techGroup}>
                  <span className={styles.techNumber}>{group.number}</span>
                  <h3 className={styles.techLabel}>{group.label}</h3>
                  <ul className={styles.techItems}>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* D — Jobs Experience */}
        <div className={`${styles.scene} ${styles.jobs}`} data-scene>
          <div className={styles.jobsAtmosphere} aria-hidden="true">
            <Image
              src="/images/projects/tatweer/jobs-listing.png"
              alt=""
              fill
              sizes="100vw"
              className={styles.jobsAtmosphereImage}
            />
          </div>

          <div className={styles.sceneInner}>
            <span className={styles.rule} aria-hidden="true" />
            <div className={styles.jobsGrid}>
              <div className={styles.jobsText}>
                <span className={styles.label}>Jobs Experience</span>
                <h2 className={styles.jobsTitle}>
                  Discover. Review. <span className={styles.yellow}>Apply.</span>
                </h2>
                <p className={styles.jobsCopy}>
                  A clear flow for browsing opportunities, reviewing job
                  details and submitting applications.
                </p>

                <div className={styles.stepsList}>
                  {JOBS_STEPS.map((step) => (
                    <div key={step.number} className={styles.stepRow}>
                      <span className={styles.stepNumber}>{step.number}</span>
                      <div>
                        <span className={styles.stepLabel}>
                          / {step.label}
                        </span>
                        <p className={styles.stepText}>{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.jobsImages}>
                <figure className={styles.jobsListingFigure}>
                  <div className={styles.jobsListingImage}>
                    <Image
                      src="/images/projects/tatweer/jobs-listing.png"
                      alt="Tatweer jobs listing page"
                      fill
                      sizes="(min-width: 900px) 46vw, 92vw"
                      className={styles.jobsImageEl}
                    />
                  </div>
                  <figcaption className={styles.jobsCaption}>
                    01 / Jobs Listing
                  </figcaption>
                </figure>

                <figure className={styles.jobDetailFigure}>
                  <div className={styles.jobDetailImage}>
                    <Image
                      src="/images/projects/tatweer/job-detail.png"
                      alt="Tatweer job detail page"
                      fill
                      sizes="(min-width: 900px) 32vw, 78vw"
                      className={styles.jobsImageEl}
                    />
                  </div>
                  <figcaption className={styles.jobsCaption}>
                    02 / Job Details
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>

        {/* E — Arabic / RTL */}
        <div className={`${styles.scene} ${styles.rtl}`} data-scene>
          <div className={styles.rtlAtmosphere} aria-hidden="true">
            <Image
              src="/images/projects/tatweer/arabic-rtl.png"
              alt=""
              fill
              sizes="100vw"
              className={styles.rtlAtmosphereImage}
            />
          </div>

          <div className={styles.sceneInner}>
            <span className={styles.rule} aria-hidden="true" />
            <div className={styles.rtlGrid}>
              <div className={styles.rtlText}>
                <span className={styles.label}>Arabic / RTL</span>
                <h2 className={styles.rtlTitle}>
                  Built for Everyone.
                  <br />
                  In Every Language.
                </h2>
                <p className={styles.rtlCopy}>
                  A bilingual Arabic and English experience with RTL and LTR
                  layout support across the public website.
                </p>

                <div className={styles.featureList}>
                  {RTL_FEATURES.map((feature) => (
                    <div key={feature.number} className={styles.featureRow}>
                      <span className={styles.featureNumber}>
                        {feature.number}
                      </span>
                      <div>
                        <span className={styles.featureLabel}>
                          / {feature.label}
                        </span>
                        <p className={styles.featureText}>{feature.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.rtlImageWrap}>
                <div className={styles.rtlImage}>
                  <Image
                    src="/images/projects/tatweer/arabic-rtl.png"
                    alt="Tatweer Arabic RTL interface"
                    fill
                    sizes="(min-width: 900px) 62vw, 94vw"
                    className={styles.rtlImageEl}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* F — Admin Dashboard */}
        <div className={`${styles.scene} ${styles.admin}`} data-scene>
          <div className={styles.adminAtmosphere} aria-hidden="true">
            <Image
              src="/images/projects/tatweer/admin-dashboard.png"
              alt=""
              fill
              sizes="100vw"
              className={styles.adminAtmosphereImage}
            />
          </div>

          <div className={styles.sceneInner}>
            <span className={styles.rule} aria-hidden="true" />
            <div className={styles.adminGrid}>
              <div className={styles.adminText}>
                <span className={styles.label}>Admin Dashboard</span>
                <h2 className={styles.adminTitle}>
                  Admin
                  <br />
                  Control.
                </h2>
                <p className={styles.adminCopy}>
                  A protected admin area for managing jobs, reviewing
                  submitted data and accessing candidate files.
                </p>

                <div className={styles.capabilityList}>
                  {ADMIN_CAPABILITIES.map((capability) => (
                    <div key={capability.label} className={styles.capability}>
                      <h3 className={styles.capabilityLabel}>
                        {capability.label}
                      </h3>
                      <p className={styles.capabilityText}>
                        {capability.text}
                      </p>
                    </div>
                  ))}
                </div>

                <p className={styles.technicalNote}>
                  <span className={styles.technicalNoteLabel}>
                    Technical Note
                  </span>
                  Role-based authentication and protected file access
                  restrict administrative data to authorized users.
                </p>
              </div>

              <div className={styles.adminImageWrap}>
                <div className={styles.adminImage}>
                  <Image
                    src="/images/projects/tatweer/admin-dashboard.png"
                    alt="Tatweer admin dashboard"
                    fill
                    sizes="(min-width: 900px) 56vw, 92vw"
                    className={styles.adminImageEl}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* G — Project Outcome */}
        <div className={`${styles.scene} ${styles.outcome}`} data-scene>
          <span className={styles.outcomeGlow} aria-hidden="true" />
          <div className={styles.sceneInner}>
            <span className={styles.rule} aria-hidden="true" />
            <span className={styles.label}>Project Outcome</span>
            <h2 className={styles.outcomeHeading}>
              Connecting People to
              <br />
              Better Possibilities.
            </h2>
            <p className={styles.outcomeCopy}>
              A bilingual recruitment platform combining public job
              discovery, employer requests and protected administrative
              workflows.
            </p>

            <div className={styles.outcomeGrid}>
              {OUTCOME_FEATURES.map((feature) => (
                <div key={feature.label} className={styles.outcomeCard}>
                  <h3 className={styles.outcomeLabel}>{feature.label}</h3>
                  <p className={styles.outcomeText}>{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* H — Live Site + Next Project */}
        <div className={`${styles.scene} ${styles.cta}`} data-scene>
          <div className={styles.sceneInner}>
            <span className={styles.rule} aria-hidden="true" />
            <div className={styles.ctaRow}>
              <a
                href="https://tatweer-employment.amerqussad2.workers.dev"
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

              <div className={styles.nextProject} aria-hidden="true">
                <span className={styles.nextLabel}>Next Project</span>
                <span className={styles.nextName}>04 / Casa Luce</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

export default Tatweer;
