import { useState } from 'react';
import SplitText from './reactbits/SplitText.jsx';
import FadeContent from './reactbits/FadeContent.jsx';
import ScrollStack, { ScrollStackItem } from './reactbits/ScrollStack.jsx';
import AnimatedContent from './reactbits/AnimatedContent.jsx';
import Magnet from './reactbits/Magnet.jsx';

const projects = [
  {
    id: '01',
    title: 'Tatweer Employment',
    category: 'RECRUITMENT PLATFORM',
    description: 'A bilingual recruitment experience bringing candidates, employers, and real-world workflows together.',
    stack: ['React', 'TypeScript', 'Supabase'],
    image: '/images/projects/tatweer-home.webp',
    alt: 'Screenshot of the Tatweer Employment recruitment platform',
    link: 'https://amer-kussad-portfolio.vercel.app/#tatweer',
    accent: 'teal'
  },
  {
    id: '02',
    title: 'Casa Luce',
    category: 'FRONT-END EXPERIENCE',
    description: 'An editorial restaurant website that balances atmosphere, responsive design, and thoughtful interaction.',
    stack: ['Next.js', 'TypeScript', 'Responsive UI'],
    image: '/images/projects/casa-luce-home.webp',
    alt: 'Screenshot of the Casa Luce restaurant website',
    link: 'https://amer-kussad-portfolio.vercel.app/#casa-luce',
    accent: 'blue'
  }
];

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="header">
    <div className="shell header-inner">
      <a className="brand" href="#home" aria-label="Amer Kussad, back to top"><span className="brand-mark">AK<span>.</span></span><span className="brand-meta"><b>AMER KUSSAD</b><small>PERSONAL PORTFOLIO</small></span></a>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation" id="main-navigation">
        <a href="#work" onClick={() => setOpen(false)}>Work</a>
        <a href="#about" onClick={() => setOpen(false)}>About me</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
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
  return <section className="work-section" id="work" aria-labelledby="work-heading">
    <div className="shell">
      <div className="section-head">
        <div><span className="section-number">01 / SELECTED WORK</span><h2 id="work-heading">Things I've<br /><em>built.</em></h2></div>
        <p>Every project teaches me something new. Here's a selection of the work I've been exploring and creating.</p>
      </div>
      <ScrollStack className="projects-stack" useWindowScroll smoothScroll={false} itemDistance={100} itemStackDistance={22} stackPosition="12%" baseScale={0.92} itemScale={0.035} dimAmount={0.12} holdDistance={220}>
        {projects.map(project => <ScrollStackItem key={project.id} itemClassName={'project-card '+project.accent}>
          <div className="project-content">
            <div className="project-info">
              <div className="project-top"><span>{project.id} / {project.category}</span><span>PERSONAL WORK</span></div>
              <div className="project-bottom">
                <p className="project-kicker">FEATURED PROJECT</p>
                <h3>{project.title}</h3><p className="project-description">{project.description}</p>
                <div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer" aria-label={'View '+project.title+' case study'}>EXPLORE PROJECT <span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <div className="project-preview"><img src={project.image} alt={project.alt} loading="lazy" /><span className="project-preview-label">PROJECT PREVIEW / {project.id}</span></div>
          </div>
        </ScrollStackItem>)}
      </ScrollStack>
      <p className="work-footnote">MORE IDEAS IN PROGRESS <span aria-hidden="true">↗</span></p>
    </div>
  </section>;
}

function About() {
  return <section className="about-section" id="about" aria-labelledby="about-heading"><div className="shell about-layout">
    <AnimatedContent distance={65} duration={1.1} threshold={0.15} className="about-left">
      <span className="section-number">02 / THE PERSON BEHIND THE PIXELS</span>
      <h2 id="about-heading">More than<br />a <em>job title.</em></h2>
      <div className="about-rule" />
      <p className="about-aside">BUILDING WITH INTENTION,<br />NOT JUST TECHNOLOGY.</p>
    </AnimatedContent>
    <div className="about-right">
      <AnimatedContent distance={45} duration={1.0} threshold={0.12} delay={0.08}>
        <p className="about-quote">“I like building things people actually enjoy using.”</p>
      </AnimatedContent>
      <AnimatedContent distance={36} duration={0.95} threshold={0.12} delay={0.14}>
        <p>My background started in recruitment and customer-facing roles. That taught me to listen, understand real problems, and care about the people behind every interaction.</p>
        <p>Today I bring that mindset into front-end development, carefully considered UI, and my exploration of practical AI products.</p>
        <div className="skill-pills"><span>React</span><span>Next.js</span><span>TypeScript</span><span>Front-End</span><span>AI Exploration</span></div>
      </AnimatedContent>
    </div>
  </div></section>;
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
  return <><Header /><main><Hero /><div className="statement-strip"><div className="shell strip-inner"><span>PERSONAL NOTE</span><strong>Good interfaces make complicated things feel simple.</strong><span>DESIGN × CODE × CURIOSITY</span></div></div><Work /><About /><Contact /></main></>;
}
