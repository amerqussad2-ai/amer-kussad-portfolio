import { useState } from 'react';
import SplitText from './reactbits/SplitText.jsx';
import FadeContent from './reactbits/FadeContent.jsx';
import ScrollStack, { ScrollStackItem } from './reactbits/ScrollStack.jsx';
import AnimatedContent from './reactbits/AnimatedContent.jsx';
import Magnet from './reactbits/Magnet.jsx';
import CaseStudy from './CaseStudy.jsx';

const projects = [
  {
    id: '01',
    slug: 'tatweer',
    title: 'Tatweer Employment',
    category: 'RECRUITMENT WEB APP',
    description: 'A bilingual recruitment application built around clearer journeys for candidates, employers and internal teams.',
    angle: 'Bilingual experiences. Practical workflows.',
    label: 'PRODUCT-FOCUSED FRONT-END',
    stack: ['React', 'TypeScript', 'Supabase'],
    image: '/images/projects/tatweer-home.webp',
    alt: 'Screenshot of the Tatweer Employment recruitment platform',
    link: '/projects/tatweer',
    accent: 'teal'
  },
  {
    id: '02',
    slug: 'casa-luce',
    title: 'Casa Luce',
    category: 'RESTAURANT WEBSITE',
    description: 'A multi-page experience for a fictional Italian restaurant, built with a focus on responsive layouts and visual detail.',
    angle: 'Editorial design. Responsive interactions.',
    label: 'CREATIVE FRONT-END',
    stack: ['Next.js', 'TypeScript', 'Responsive UI'],
    image: '/images/projects/casa-luce-home.webp',
    alt: 'Screenshot of the Casa Luce restaurant website',
    link: '/projects/casa-luce',
    accent: 'blue'
  }
];

function Header() {
  const [open, setOpen] = useState(false);
  const onProject = window.location.pathname.startsWith('/projects/');
  return <header className="header">
    <div className="shell header-inner">
      <a className="brand" href={onProject ? "/" : "#home"} aria-label="Amer Kussad, back to top"><span className="brand-mark">AK<span>.</span></span><span className="brand-meta"><b>AMER KUSSAD</b><small>PERSONAL PORTFOLIO</small></span></a>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation" id="main-navigation">
        <a href={onProject ? "/#work" : "#work"} onClick={() => setOpen(false)}>Work</a>
        <a href={onProject ? "/#about" : "#about"} onClick={() => setOpen(false)}>About me</a>
        <a href={onProject ? "/#contact" : "#contact"} onClick={() => setOpen(false)}>Contact</a>
      </nav>
      <div className="header-actions"><a className="resume-link" href="https://amer-kussad-portfolio.vercel.app/Amer_Kussad_Frontend_Resume.pdf" target="_blank" rel="noopener noreferrer">RESUME <span aria-hidden="true">↗</span></a><button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button></div>
    </div>
  </header>;
}

function Hero() {
  return <section className="hero-stage" id="home" aria-labelledby="hero-title">
    <div className="hero-atmosphere" aria-hidden="true" />
    <div className="shell hero-layout">
      <div className="hero-copy">
        <div className="hero-topline">
          <span className="hero-overline">01 / AN INTRODUCTION</span>
          <span className="hero-topline-dot" aria-hidden="true">✳</span>
        </div>
        <p className="eyebrow"><span className="rule" /> FRONT-END DEVELOPER <span className="role-divider">/</span> AI PRODUCT BUILDER</p>
        <p className="hello">Hello, I'm</p>
        <h1 className="hero-name" id="hero-title">
          <span className="name-row"><SplitText text="Amer" tag="span" trigger="load" splitType="chars" effect="rise" delay={70} duration={0.95} textAlign="left" /></span>
          <span className="name-row"><SplitText text="Kussad" tag="span" trigger="load" splitType="chars" effect="rise" delay={62} duration={1.05} textAlign="left" /><span className="name-period">.</span></span>
        </h1>
        <div className="hero-statement">
          <span className="statement-rule" aria-hidden="true" />
          <p>I build interfaces <em>people feel.</em><br />And products <em>people use.</em></p>
        </div>
        <p className="hero-intro">A front-end focused developer bringing thoughtful design, clean code and a curiosity for AI into every project.</p>
        <div className="hero-buttons">
          <a className="btn-main" href="#work">VIEW MY WORK <span aria-hidden="true">↗</span></a>
          <a className="underlink" href="#about">The person behind the code <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-bottom-info">
          <span className="hero-location"><span className="location-dot" /> BASED IN THE UAE</span>
          <a href="#work" className="hero-scroll">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a>
        </div>
      </div>

      <div className="hero-photo">
        <div className="portrait-grid" aria-hidden="true" />
        <div className="portrait-outline" aria-hidden="true" />
        <div className="portrait-serial" aria-hidden="true"><span>AK / 01</span><span>PERSONAL ARCHIVE</span></div>
        <FadeContent trigger="mount" effect="fade" blur duration={1.05} delay={0.35} className="portrait-reveal">
          <div className="portrait-frame">
            <img src="/images/amer-kussad-profile.jpg" alt="Portrait of Amer Kussad" width="900" height="1200" fetchPriority="high" />
            <div className="portrait-film" aria-hidden="true" />
            <div className="portrait-footer">
              <span>AMER KUSSAD <b>✳</b></span>
              <span>THE PERSON BEHIND THE PIXELS</span>
            </div>
          </div>
        </FadeContent>
        <div className="portrait-vertical" aria-hidden="true">DEVELOPER · MAKER · CURIOUS MIND</div>
        <div className="portrait-signal" aria-hidden="true"><span /> HUMAN FIRST. ALWAYS.</div>
      </div>
    </div>
    <div className="shell hero-bottom-rule" aria-hidden="true"><span>DESIGN × ENGINEERING × CURIOSITY</span><span>AK — 2026</span></div>
  </section>;
}

function Work() {
  return <section className="work-section work-v3" id="work" aria-labelledby="work-heading">
    <div className="shell work-shell">
      <div className="work-overline-row">
        <span className="section-number">01 / A FEW THINGS I'VE BUILT</span>
        <span className="work-count">SELECTED WORK · 02 PROJECTS</span>
      </div>
      <div className="work-v3-heading">
        <h2 id="work-heading">Made with<br /><em>intention.</em></h2>
        <div className="work-v3-heading-aside">
          <span className="work-v3-decoration" aria-hidden="true">✳</span>
          <p>Different ideas, different challenges — each one a chance to get the details right.</p>
          <span className="work-v3-discovery">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></span>
        </div>
      </div>

      <ScrollStack className="projects-stack projects-stack-v3" useWindowScroll smoothScroll={false} itemDistance={130} itemStackDistance={24} stackPosition="11%" baseScale={0.95} itemScale={0.028} dimAmount={0.10} holdDistance={210}>
        {projects.map(project => <ScrollStackItem key={project.id} itemClassName={'project-card case-card '+project.accent}>
          <article className="case-article" aria-label={project.title}>
            <div className="case-details">
              <div className="case-topline">
                <span>PROJECT {project.id} <span className="case-slash">/</span> 02</span>
                <span className="case-tag">{project.label}</span>
              </div>
              <div className="case-main">
                <span className="case-category"><span className="case-category-dot"/> {project.category}</span>
                <h3>{project.title}</h3>
                <p className="case-description">{project.description}</p>
                <p className="case-angle">{project.angle}</p>
                <div className="case-stack">
                  <span className="case-stack-label">BUILT WITH</span>
                  <div className="case-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
                <a className="case-cta" href={project.link} aria-label={'Explore '+project.title+' case study'}>
                  <span>EXPLORE THIS PROJECT</span><span className="case-cta-arrow" aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="case-bottomline"><span>AK / PERSONAL PORTFOLIO</span><span>CASE STUDY {project.id}</span></div>
            </div>
            <div className="case-visual">
              <div className="case-visual-top">
                <span className="case-visual-marker" aria-hidden="true">✳</span>
                <span>TAKE A CLOSER LOOK</span>
                <span>{project.id} — 02</span>
              </div>
              <div className="case-device">
                <div className="case-device-bar" aria-hidden="true">
                  <span className="case-dots"><i/><i/><i/></span>
                  <span className="case-address">{project.title.toLowerCase().replaceAll(' ','-')}.preview</span>
                  <span className="case-browser-menu">↗</span>
                </div>
                <div className="case-image-wrap">
                  <img src={project.image} alt={project.alt} loading="lazy" width="1350" height="610" />
                </div>
              </div>
              <div className="case-visual-foot">
                <span>REAL PROJECT SCREENSHOT</span>
                <span>DESIGN × DEVELOPMENT</span>
              </div>
              <span className="case-watermark" aria-hidden="true">{project.id}</span>
            </div>
          </article>
        </ScrollStackItem>)}
      </ScrollStack>
      <div className="work-v3-tail">
        <span className="work-v3-line" aria-hidden="true"/>
        <p>And I'm not done building yet.</p>
        <a href="#contact">LET'S CREATE SOMETHING <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </section>;
}

function About() {
  return <section className="about-section about-v3" id="about" aria-labelledby="about-heading">
    <div className="shell">
      <div className="about-v3-eyebrow">
        <span className="section-number">02 / THE PERSON BEHIND THE WORK</span>
        <span className="about-v3-index">PERSONAL NOTES — AMER KUSSAD</span>
      </div>
      <div className="about-v3-intro">
        <AnimatedContent distance={55} duration={0.95} threshold={0.14} className="about-v3-title-wrap">
          <h2 id="about-heading">There's more<br />to me than <em>code.</em></h2>
          <span className="about-v3-title-mark" aria-hidden="true">✳</span>
        </AnimatedContent>
        <AnimatedContent distance={40} duration={0.95} threshold={0.14} delay={0.1} className="about-v3-intro-note">
          <span className="about-v3-small-rule" aria-hidden="true" />
          <p>I believe the best digital experiences start with understanding people — not just picking the right technology.</p>
        </AnimatedContent>
      </div>

      <div className="about-v3-main">
        <AnimatedContent distance={42} duration={0.95} threshold={0.12} className="about-v3-story">
          <div className="about-v3-story-header">
            <span>01 / MY STORY</span>
            <span className="about-v3-story-icon" aria-hidden="true">↗</span>
          </div>
          <p className="about-v3-editorial">From people<br />to <em>pixels.</em></p>
          <div className="about-v3-body-copy">
            <p>Before I started focusing on front-end development, I worked in recruitment and customer-facing roles. That taught me how to listen, understand real problems, and care about the details that make an experience work for someone.</p>
            <p>Now I take that same curiosity into building for the web — crafting responsive interfaces with React, Next.js and TypeScript, and exploring how AI can turn thoughtful ideas into useful products.</p>
          </div>
          <a className="about-v3-story-link" href="#contact">A GOOD CONVERSATION STARTS HERE <span aria-hidden="true">↗</span></a>
        </AnimatedContent>

        <div className="about-v3-right">
          <AnimatedContent distance={48} duration={0.95} threshold={0.14} delay={0.08} className="about-v3-values">
            <div className="about-v3-panel-top"><span>02 / HOW I THINK</span><span aria-hidden="true">✳</span></div>
            <p className="about-v3-quote">“Design for people.<br /><em>Build with purpose.</em>”</p>
            <div className="about-v3-principles">
              <div><span>01</span><strong>Keep it clear.</strong><p>A simple experience often takes the most thoughtful work.</p></div>
              <div><span>02</span><strong>Make it feel right.</strong><p>Good front-end work lives in the details and interactions.</p></div>
              <div><span>03</span><strong>Stay curious.</strong><p>Keep experimenting with modern tools, products and AI.</p></div>
            </div>
          </AnimatedContent>
          <AnimatedContent distance={34} duration={0.9} threshold={0.12} className="about-v3-tools">
            <div className="about-v3-tools-heading"><span>03 / MY TOOLKIT</span><span>ALWAYS EVOLVING</span></div>
            <div className="about-v3-tool-list">
              <span>React</span><span>Next.js</span><span>TypeScript</span><span>UI / UX</span><span>AI Exploration</span>
            </div>
          </AnimatedContent>
        </div>
      </div>
      <div className="about-v3-footer"><span>THE HUMAN SIDE OF BUILDING THINGS.</span><span>AK / 2026</span></div>
    </div>
  </section>;
}

function Contact() {
  return <section className="contact-section shell" id="contact" aria-labelledby="contact-heading">
    <span className="section-number">03 / LET'S CONNECT</span>
    <AnimatedContent distance={44} duration={1} threshold={0.15}>
      <h2 id="contact-heading">Have something<br /><em>in mind?</em></h2>
      <p className="contact-sub">I'm always open to meaningful conversations, new opportunities, and interesting ideas.</p>
    </AnimatedContent>
    <Magnet padding={90} magnetStrength={3.6} maxOffset={17} wrapperClassName="magnet-contact">
      <a className="contact-button" href="mailto:amerkussad5@gmail.com">LET'S TALK <span aria-hidden="true">↗</span></a>
    </Magnet>
    <div className="contact-links"><a href="mailto:amerkussad5@gmail.com">amerkussad5@gmail.com</a><a href="https://www.linkedin.com/in/amer-qussad-727a6a199" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a><a href="https://github.com/amerqussad2-ai" target="_blank" rel="noopener noreferrer">GITHUB ↗</a></div>
    <footer className="footer"><span>© {new Date().getFullYear()} AMER KUSSAD.</span><span>DESIGNED TO FEEL PERSONAL.</span><a href="#home">BACK TO TOP ↑</a></footer>
  </section>;
}

export default function App() {
  const slug = window.location.pathname.match(/^\/projects\/([^/]+)\/?$/)?.[1];
  if (window.location.pathname.startsWith('/projects/')) {
    return <><Header /><CaseStudy slug={slug} /></>;
  }
  return <><Header /><main><Hero /><div className="statement-strip"><div className="shell strip-inner"><span>PERSONAL NOTE</span><strong>Good interfaces make complicated things feel simple.</strong><span>DESIGN × CODE × CURIOSITY</span></div></div><Work /><About /><Contact /></main></>;
}
