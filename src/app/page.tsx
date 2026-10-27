"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "tatweer",
    number: "01",
    title: "Tatweer Employment",
    discipline: "DIGITAL PRODUCT / RECRUITMENT",
    description: "A bilingual recruitment platform built to make the journey clearer for candidates, employers and the people behind the scenes.",
    tags: ["React", "TypeScript", "Supabase"],
    image: "/images/projects/tatweer-home.webp",
    alt: "Tatweer Employment — recruitment web application homepage",
    href: "/projects/tatweer",
    theme: "olive",
  },
  {
    id: "casa-luce",
    number: "02",
    title: "Casa Luce",
    discipline: "WEB EXPERIENCE / HOSPITALITY",
    description: "An atmospheric concept for an Italian restaurant, where warmth, photography and thoughtful interactions lead the story.",
    tags: ["Next.js", "TypeScript", "Responsive UI"],
    image: "/images/projects/casa-luce-home.webp",
    alt: "Casa Luce — restaurant website homepage",
    href: "/projects/casa-luce",
    theme: "copper",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none">
      {diagonal ? (
        <path d="M5 19 19 5M7 5h12v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M4 12h16m-7-7 7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("v2-visible"));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("v2-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
      );
      targets.forEach((target) => observer.observe(target));
      const activate = requestAnimationFrame(() => root.classList.add("v2-motion-ready"));
      const progress = root.querySelector<HTMLElement>(".v2-progress");
      let pending = false;
      const updateProgress = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (progress) progress.style.transform = "scaleX(" + (max > 0 ? Math.min(window.scrollY / max, 1) : 0) + ")";
        pending = false;
      };
      const onScroll = () => {
        if (!pending) { pending = true; requestAnimationFrame(updateProgress); }
      };
      updateProgress();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      return () => {
        cancelAnimationFrame(activate);
        observer.disconnect();
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      };
    }
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) return;
    const onMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      hero.style.setProperty("--v2-mx", ((event.clientX - rect.left) / rect.width - 0.5).toFixed(3));
      hero.style.setProperty("--v2-my", ((event.clientY - rect.top) / rect.height - 0.5).toFixed(3));
    };
    const onLeave = () => {
      hero.style.setProperty("--v2-mx", "0");
      hero.style.setProperty("--v2-my", "0");
    };
    hero.addEventListener("pointermove", onMove, { passive: true });
    hero.addEventListener("pointerleave", onLeave);
    return () => {
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <div className="v2" ref={rootRef}>
      <a className="v2-skip" href="#main">Skip to content</a>
      <div className="v2-progress" aria-hidden="true" />

      <header className="v2-header">
        <a className="v2-brand" href="#top" aria-label="Amer Kussad, back to top" data-cursor="TOP">
          <span>AK</span><i aria-hidden="true" />
        </a>
        <nav className="v2-navigation" aria-label="Main navigation">
          {navLinks.map((link) => <a href={link.href} key={link.href} data-cursor="GO">{link.label}</a>)}
        </nav>
        <a className="v2-availability" href="mailto:amerkussad5@gmail.com" data-cursor="EMAIL">
          <span className="v2-availability-dot" /> Available for opportunities <Arrow diagonal />
        </a>
        <button className="v2-menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="v2-mobile-nav" type="button" onClick={() => setMenuOpen((value) => !value)}>
          <span /> <span />
        </button>
        {menuOpen && (
          <nav className="v2-mobile-nav" id="v2-mobile-nav" aria-label="Mobile navigation">
            {navLinks.map((link) => <a href={link.href} onClick={() => setMenuOpen(false)} key={link.href}>{link.label}<Arrow diagonal /></a>)}
            <a href="/Amer_Kussad_Frontend_Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Resume<Arrow diagonal /></a>
          </nav>
        )}
      </header>

      <main id="main">
        <section className="v2-hero" id="top" ref={heroRef} aria-labelledby="v2-main-title">
          <div className="v2-hero-grid" aria-hidden="true" />
          <div className="v2-hero-topline"><span>Independent front-end developer</span><span>Based in the UAE · Working worldwide</span></div>
          <div className="v2-hero-art">
            <div className="v2-portrait-frame">
              <Image src="/images/amer-kussad-profile.jpg" alt="Portrait of Amer Kussad" fill priority sizes="(max-width: 700px) 90vw, 48vw" className="v2-portrait-img" />
              <div className="v2-portrait-shade" aria-hidden="true" />
            </div>
            <div className="v2-portrait-caption" aria-hidden="true">FORM & FUNCTION / 2026</div>
          </div>
          <div className="v2-hero-title-block">
            <h1 id="v2-main-title" className="v2-hero-name"><span>Amer</span><span>Kussad<span className="v2-name-period">.</span></span></h1>
          </div>
          <div className="v2-hero-bottom">
            <div className="v2-hero-intro">
              <p className="v2-hero-lead">Digital experiences,<br/><em>built to feel different.</em></p>
              <p className="v2-hero-summary">I turn ideas into considered, responsive web experiences — with a focus on craft, clarity and the details people remember.</p>
              <div className="v2-hero-actions">
                <a href="#work" className="v2-cta v2-cta-primary" data-cursor="EXPLORE">Explore selected work <Arrow diagonal /></a>
                <a href="/Amer_Kussad_Frontend_Resume.pdf" target="_blank" rel="noopener noreferrer" className="v2-text-link" data-cursor="VIEW">View résumé <Arrow diagonal /></a>
              </div>
            </div>
            <a className="v2-scroll-cue" href="#work" aria-label="Scroll to selected work"><span>Scroll to explore</span><span className="v2-scroll-line" /></a>
          </div>
        </section>

        <section className="v2-work" id="work" aria-labelledby="v2-work-heading">
          <div className="v2-container">
            <div className="v2-work-intro" data-reveal>
              <h2 id="v2-work-heading">The work<br/><em>speaks.</em></h2>
              <div><span className="v2-hairline" /><p>A selection of digital experiences where design decisions meet thoughtful development.</p></div>
            </div>
            <div className="v2-project-list">
              {projects.map((project) => (
                <article key={project.id} className={"v2-project v2-project-" + project.theme} data-reveal>
                  <div className="v2-project-meta">
                    <span>{project.discipline}</span><span>{project.number} / 02</span>
                  </div>
                  <Link href={project.href} className="v2-project-visual" aria-label={"View " + project.title + " case study"} data-cursor="VIEW">
                    <span className="v2-project-image">
                      <Image src={project.image} alt={project.alt} fill sizes="(max-width: 800px) 90vw, 80vw" />
                    </span>
                    <span className="v2-project-orb" aria-hidden="true"><Arrow diagonal /></span>
                  </Link>
                  <div className="v2-project-details">
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                    <div className="v2-project-aside">
                      <ul aria-label="Technologies">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                      <Link href={project.href} className="v2-project-link" data-cursor="VIEW">Explore case study <Arrow diagonal /></Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="v2-statement" aria-label="Approach">
          <div className="v2-container v2-statement-inner" data-reveal>
            <p>Not just how it looks.<br/><em>How it feels to use.</em></p>
            <span>Made with intention — down to the smallest interaction.</span>
          </div>
        </section>

        <section className="v2-about" id="about" aria-labelledby="v2-about-heading">
          <div className="v2-container v2-about-grid">
            <div className="v2-about-left" data-reveal>
              <span className="v2-label">A little about me</span>
              <h2 id="v2-about-heading">Curiosity<br/>meets <em>craft.</em></h2>
            </div>
            <div className="v2-about-right" data-reveal>
              <p className="v2-about-highlight">I’m Amer — a front-end developer interested in the space between thoughtful design and reliable code.</p>
              <p>Working with React, Next.js and TypeScript, I build web experiences that balance aesthetics with clarity. My background in recruitment and customer-facing work shapes how I think about the people on the other side of every screen.</p>
              <div className="v2-skills" aria-label="Core technologies"><span>React</span><span>Next.js</span><span>TypeScript</span><span>Responsive design</span><span>UI engineering</span></div>
              <a href="/Amer_Kussad_Frontend_Resume.pdf" className="v2-about-resume" target="_blank" rel="noopener noreferrer" data-cursor="VIEW">More about my experience <Arrow diagonal /></a>
            </div>
          </div>
        </section>

        <section className="v2-contact" id="contact" aria-labelledby="v2-contact-heading">
          <div className="v2-container">
            <div className="v2-contact-top" data-reveal><span className="v2-label">Have something in mind?</span><span>Let’s make it happen.</span></div>
            <a href="mailto:amerkussad5@gmail.com" className="v2-contact-title" data-cursor="EMAIL" aria-label="Email Amer to start a conversation">
              <h2 id="v2-contact-heading">Let’s create<br/><em>something good.</em></h2>
              <span className="v2-contact-arrow"><Arrow diagonal /></span>
            </a>
            <div className="v2-contact-bottom">
              <div><a href="mailto:amerkussad5@gmail.com" className="v2-email" data-cursor="EMAIL">amerkussad5@gmail.com</a><p>Open to opportunities and collaborations.</p></div>
              <div className="v2-social">
                <a href="https://www.linkedin.com/in/amer-qussad-727a6a199" target="_blank" rel="noopener noreferrer">LinkedIn <Arrow diagonal /></a>
                <a href="https://github.com/amerqussad2-ai" target="_blank" rel="noopener noreferrer">GitHub <Arrow diagonal /></a>
                <a href="/Amer_Kussad_Frontend_Resume.pdf" target="_blank" rel="noopener noreferrer">Résumé <Arrow diagonal /></a>
              </div>
            </div>
            <footer className="v2-footer"><span>© {new Date().getFullYear()} Amer Kussad</span><span>Designed with intention. Built with care.</span><a href="#top">Back to top ↑</a></footer>
          </div>
        </section>
      </main>
    </div>
  );
}
