import { useEffect } from 'react';
import AnimatedContent from './reactbits/AnimatedContent.jsx';
import './case-study.css';

const CASE_STUDIES = {
  tatweer: {
    slug: 'tatweer',
    number: '01',
    title: 'Tatweer Employment',
    subtitle: 'Making recruitment feel more accessible.',
    type: 'Bilingual Recruitment Web Application',
    focus: 'Bilingual front-end & recruitment workflows',
    category: 'WEB APPLICATION',
    lead: 'A recruitment platform with different journeys for candidates, employers, and administrators — brought together through a consistent Arabic and English experience.',
    vision: 'People looking for work and businesses looking for talent have different needs. The challenge was to make those pathways feel clear, intuitive and connected, without getting in the way of the task.',
    approach: 'I focused on the front-end experience: legible layouts, structured forms, responsive screens, and interfaces that work naturally in both right-to-left and left-to-right contexts.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase'],
    image: '/images/optimized/projects/tatweer-home.webp',
    imageAlt: 'Tatweer Employment recruitment platform homepage',
    screens: [
      {
        image: '/images/optimized/projects/tatweer/jobs-listing.webp',
        alt: 'Tatweer Employment job opportunities listing page',
        title: 'Browse opportunities',
        copy: 'Job listings and details help candidates navigate available roles.'
      },
      {
        image: '/images/optimized/projects/tatweer/job-detail.webp',
        alt: 'Tatweer Employment job detail page',
        title: 'Find the details',
        copy: 'Individual job pages keep requirements and next steps within reach.'
      },
      {
        image: '/images/optimized/projects/tatweer/arabic-rtl.webp',
        alt: 'Arabic right-to-left version of Tatweer',
        title: 'Designed for both directions',
        copy: 'Arabic and English interfaces adapt to RTL and LTR layouts.'
      },
      {
        image: '/images/optimized/projects/tatweer/admin-dashboard.webp',
        alt: 'Tatweer Employment admin dashboard',
        title: 'Structured administration',
        copy: 'An authenticated administrative area supports the management of jobs and submitted data.'
      }
    ],
    principles: [
      ['01', 'For candidates', 'Explore job openings, review details and follow an application flow.'],
      ['02', 'For employers', 'Submit hiring requirements through focused request forms.'],
      ['03', 'For administrators', 'Manage jobs and review applications with protected access to candidate data.']
    ],
    note: 'The project showcases bilingual public-facing experiences alongside authenticated workflows for managing jobs and candidate data.',
    live: 'https://tatweer-employment.amerqussad2.workers.dev',
    liveLabel: 'VISIT THE LIVE PLATFORM',
    next: 'casa-luce',
    nextTitle: 'Casa Luce'
  },
  'casa-luce': {
    slug: 'casa-luce',
    number: '02',
    title: 'Casa Luce',
    subtitle: 'A restaurant atmosphere, translated to the screen.',
    type: 'Multi-page Restaurant Website',
    focus: 'Responsive front-end & interaction design',
    category: 'CREATIVE FRONT-END',
    lead: 'An editorial web experience for a fictional modern Italian restaurant in Dubai Marina — designed to feel warm, immersive and effortless across screen sizes.',
    vision: 'A restaurant website has to communicate a feeling before it asks someone to read. The idea was to give food, interior photography and typography room to tell the story.',
    approach: 'The front-end brings large visuals, quiet transitions and a clear information hierarchy together across the home page, menu, gallery, story and contact pages.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    image: '/images/optimized/projects/casa-luce-home.webp',
    imageAlt: 'Casa Luce Italian restaurant website homepage',
    screens: [
      {
        image: '/images/optimized/projects/casa-luce/home-desktop.webp',
        alt: 'Casa Luce desktop homepage',
        title: 'Editorial from the first scroll',
        copy: 'Bold serif typography and atmospheric restaurant imagery establish the visual language.'
      },
      {
        image: '/images/optimized/projects/casa-luce/gallery-desktop.webp',
        alt: 'Casa Luce restaurant gallery',
        title: 'Let the imagery lead',
        copy: 'A gallery puts food and atmosphere in focus, with minimal interface distractions.'
      },
      {
        image: '/images/optimized/projects/casa-luce/home-mobile.webp',
        alt: 'Casa Luce mobile homepage',
        title: 'The same feeling on mobile',
        copy: 'Layouts adapt to smaller screens while preserving the visual hierarchy.'
      }
    ],
    principles: [
      ['01', 'Atmosphere first', 'Large images and a warm, cinematic direction communicate the setting.'],
      ['02', 'Thoughtful responsiveness', 'The same visual character carries across desktop and mobile layouts.'],
      ['03', 'Clear reservation flow', 'A front-end demonstration form includes validation and a success state. No bookings are sent or stored.']
    ],
    note: 'Casa Luce is a fictional restaurant concept. Its reservation and contact flows demonstrate interface validation and success states; they do not send or store real bookings.',
    live: 'https://casa-luce-nine.vercel.app',
    liveLabel: 'VISIT THE LIVE DEMO',
    source: 'https://github.com/amerqussad2-ai/casa-luce',
    next: 'smash-district',
    nextTitle: 'Smash District'
  },
  'smash-district': {
    slug: 'smash-district',
    number: '03',
    title: 'Smash District',
    subtitle: 'A burger brand that refuses to sit still.',
    type: 'Interactive Restaurant & Ordering Concept',
    focus: 'Motion design & interactive UI',
    category: 'INTERACTIVE FRONT-END',
    lead: 'A high-energy website for a fictional smash-burger brand in Dubai — loud typography, real food photography and interactions that let visitors explore the menu, build a burger and fill a bag.',
    vision: 'Fast-food brands live on attitude. The goal was a site that feels as bold as the food, while keeping the menu and ordering flow genuinely easy to use.',
    approach: 'I paired an animated hero and oversized type with practical components: a five-category menu, a burger builder that updates the preview and price as you choose, and a bag that keeps count across the page.',
    stack: ['JavaScript', 'GSAP', 'Vite', 'HTML / CSS', 'Vercel'],
    image: '/images/optimized/projects/smash-district/home-desktop.webp',
    imageAlt: 'Smash District homepage with the Built To Crave hero',
    screens: [
      {
        image: '/images/optimized/projects/smash-district/menu-desktop.webp',
        alt: 'Smash District menu with category tabs and burger cards',
        title: 'A menu without the chaos',
        copy: 'Seventeen items across five categories, switched with clear tabs instead of a long scroll.'
      },
      {
        image: '/images/optimized/projects/smash-district/builder-desktop.webp',
        alt: 'Smash District build-your-own burger tool',
        title: 'Build your own',
        copy: 'Each choice updates the burger preview and the running price in real time.'
      },
      {
        image: '/images/optimized/projects/smash-district/home-mobile.webp',
        alt: 'Smash District homepage on mobile',
        title: 'Just as loud on mobile',
        copy: 'The bold type and calls to action reflow cleanly for small screens.'
      }
    ],
    principles: [
      ['01', 'Motion with a purpose', 'The hero animation sets the tone once, then gets out of the way of the menu.'],
      ['02', 'Interactive ordering', 'A burger builder and a bag show state changes clearly as visitors make choices.'],
      ['03', 'Honest demo', 'Prices are illustrative and the restaurant is fictional; no orders or payments are processed.']
    ],
    note: 'Smash District is a fictional restaurant concept. Its menu, builder and bag demonstrate front-end state and interaction; no real orders or payments are taken.',
    live: 'https://smash-district-dubai.vercel.app',
    liveLabel: 'VISIT THE LIVE DEMO',
    next: 'alsedr',
    nextTitle: 'Al-Sedr Mansaf'
  },
  alsedr: {
    slug: 'alsedr',
    number: '04',
    title: 'Al-Sedr Mansaf',
    subtitle: 'Jordanian hospitality, in Arabic and in motion.',
    type: 'Arabic RTL Restaurant Website',
    focus: 'RTL layout, motion & AI-assisted visuals',
    category: 'MOTION & RTL',
    lead: 'An Arabic-first website for a fictional mansaf restaurant in Amman — written in Jordanian dialect, laid out right-to-left, and built around a cinematic video hero and scroll-driven storytelling.',
    vision: 'Most restaurant templates are designed left-to-right and translated later. This one starts from Arabic: its typography, its reading direction and the everyday Jordanian phrases people actually say at the table.',
    approach: 'A looping video hero, a mansaf tray that assembles itself layer by layer as you scroll, a tabbed menu with photos, a party-size calculator and a validated booking form — all in a single, lightweight page. The food photography and hero video were generated with AI tools and art-directed for the brand.',
    stack: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'Higgsfield AI'],
    image: '/images/optimized/projects/alsedr/home-desktop.webp',
    imageAlt: 'Al-Sedr homepage with a mansaf video hero and Arabic headline',
    screens: [
      {
        image: '/images/optimized/projects/alsedr/menu-desktop.webp',
        alt: 'Al-Sedr Arabic menu with prices and a dish photo',
        title: 'A menu that reads right-to-left',
        copy: 'Arabic calligraphic headings, prices in Jordanian dinars and photos that change with each category.'
      },
      {
        image: '/images/optimized/projects/alsedr/calculator-desktop.webp',
        alt: 'Al-Sedr party calculator for guests, trays and meat',
        title: 'How many guests are coming?',
        copy: 'A slider calculates trays, meat, rice and an estimated cost — with a playful verdict for each party size.'
      }
    ],
    principles: [
      ['01', 'Arabic first', 'Right-to-left layout, Arabic typography and copy written in Jordanian dialect.'],
      ['02', 'Scroll storytelling', 'The mansaf is assembled on screen, layer by layer, as the visitor scrolls.'],
      ['03', 'AI-assisted art direction', 'Hero video and food photography generated with AI, then curated to match the brand.']
    ],
    note: 'Al-Sedr is a fictional restaurant concept. Its booking form demonstrates validation and a success state; no bookings are sent or stored.',
    live: 'https://alsedr-mansaf.vercel.app',
    liveLabel: 'VISIT THE LIVE DEMO',
    next: 'dont-wake-him',
    nextTitle: "Don't Wake Him"
  },
  'dont-wake-him': {
    slug: 'dont-wake-him',
    number: '05',
    title: "Don't Wake Him",
    subtitle: 'A small game about making no noise.',
    type: 'Browser Stealth Game',
    focus: 'Game UI, interaction & 3D in the browser',
    category: 'CREATIVE CODING',
    lead: 'A stealth game played in the browser: complete three missions in a dark room without waking a very light sleeper. It started as a 2D prototype and was rebuilt as a first-person 3D edition.',
    vision: 'Games are a fast way to learn interaction design — every sound, prompt and timer has to communicate instantly. The idea was to turn one simple tension, staying quiet, into a complete experience.',
    approach: 'The first version uses Phaser and TypeScript inside Next.js, with a noise system, sleep meter and objectives. The 3D edition is built with Babylon.js and Vite: three levels, PBR lighting, level select, keyboard and touch controls.',
    stack: ['Babylon.js', 'Phaser', 'TypeScript', 'Next.js', 'Vite'],
    image: '/images/optimized/projects/dont-wake-him-home.webp',
    imageAlt: "Don't Wake Him 3D — first-person view of the bedroom level",
    screens: [
      {
        image: '/images/optimized/projects/dont-wake-him/3d-gameplay.webp',
        alt: "Don't Wake Him 3D gameplay with missions, noise meter and timer",
        title: 'Inside the bedroom',
        copy: 'Missions, a noise meter, sleeper alertness and a countdown keep every step tense.'
      }
    ],
    principles: [
      ['01', 'One clear tension', 'Noise, a sleep meter and a timer make every move feel risky.'],
      ['02', 'From 2D to 3D', 'The same idea rebuilt as a first-person experience with three distinct levels.'],
      ['03', 'Prototype, honestly labeled', 'Procedural assets and synthesized sounds; built to explore ideas, not to ship as a commercial game.']
    ],
    note: "Don't Wake Him is a personal prototype. It is best played on a desktop with a keyboard and mouse.",
    live: 'https://dont-wake-him-3d.vercel.app',
    liveLabel: 'PLAY THE 3D EDITION',
    source: 'https://github.com/amerqussad2-ai/dont-wake-him',
    next: 'tatweer',
    nextTitle: 'Tatweer Employment'
  }
};

function BrowserMock({src, alt, variant = ''}) {
  return <div className={'study-browser '+variant}>
    <div className="study-browser-chrome" aria-hidden="true">
      <span className="study-browser-dots"><i/><i/><i/></span>
      <span>PROJECT PREVIEW</span>
      <span>↗</span>
    </div>
    <img src={src} alt={alt} loading="lazy" />
  </div>;
}

export default function CaseStudy({slug}) {
  const project=CASE_STUDIES[slug];
  useEffect(()=>{
    if (!project) return;
    document.title = project.title + ' — Front-End Case Study | Amer Kussad';
    window.scrollTo({top:0,left:0,behavior:'instant'});
    return () => {document.title='Amer Kussad — Developer & AI Product Builder';};
  },[project]);

  if(!project){
    return <main id="main-content" className="case-not-found shell"><span className="study-label">404 / PROJECT NOT FOUND</span><h1>This page isn't here.</h1><a href="/#work" className="study-link">BACK TO MY WORK ↗</a></main>;
  }

  return <main id="main-content" className={'case-page case-page-'+slug}>
    <section className="case-hero shell" aria-labelledby="case-title">
      <div className="case-crumbs"><a href="/#work">← ALL PROJECTS</a><span> / </span><span>CASE STUDY {project.number}</span></div>
      <div className="case-hero-heading">
        <div>
          <span className="study-label"><span className="study-accent-rule" /> {project.category} / {project.number}</span>
          <h1 id="case-title">{project.title}<span className="case-title-period">.</span></h1>
          <p className="case-subtitle">{project.subtitle}</p>
        </div>
        <span className="case-hero-stamp" aria-hidden="true">AK /<br/>SELECTED<br/>WORK ✳</span>
      </div>
      <div className="case-overview">
        <p>{project.lead}</p>
        <div className="case-overview-meta">
          <div><span>PROJECT TYPE</span><strong>{project.type}</strong></div>
          <div><span>MY FOCUS</span><strong>{project.focus}</strong></div>
          <div><span>BUILT WITH</span><strong>{project.stack.slice(0,3).join(' · ')}</strong></div>
        </div>
      </div>
    </section>

    <section className="case-cover shell" aria-label="Project preview">
      <div className="case-cover-frame">
        <div className="case-cover-top"><span>01 / FIRST IMPRESSION</span><span>{project.title.toUpperCase()}</span></div>
        <BrowserMock src={project.image} alt={project.imageAlt} variant="study-cover-browser"/>
        <div className="case-cover-bottom"><span>SELECTED WORK BY AMER KUSSAD</span><span>2026 ✳</span></div>
      </div>
    </section>

    <section className="case-narrative shell" aria-labelledby="case-story">
      <AnimatedContent distance={42} duration={0.85} threshold={0.1} className="case-narrative-heading">
        <span className="study-label">02 / THE THINKING</span>
        <h2 id="case-story">The idea<br/>behind the <em>work.</em></h2>
      </AnimatedContent>
      <div className="case-narrative-body">
        <AnimatedContent distance={30} duration={0.85} threshold={0.08}>
          <h3>THE CONTEXT</h3>
          <p>{project.vision}</p>
        </AnimatedContent>
        <AnimatedContent distance={30} duration={0.85} threshold={0.08} delay={0.08}>
          <h3>THE APPROACH</h3>
          <p>{project.approach}</p>
        </AnimatedContent>
      </div>
    </section>

    <section className="case-features">
      <div className="shell">
        <div className="case-section-heading"><span className="study-label">03 / EXPERIENCE DETAILS</span><h2>Built around<br/><em>what matters.</em></h2></div>
        <div className="case-feature-list">{project.principles.map(([number,title,detail])=>
          <div className="case-feature" key={number}><span>{number}</span><h3>{title}</h3><p>{detail}</p></div>
        )}</div>
      </div>
    </section>

    <section className="case-gallery shell">
      <div className="case-section-heading"><span className="study-label">04 / A CLOSER LOOK</span><h2>Details in<br/><em>the making.</em></h2></div>
      <div className="case-gallery-grid">{project.screens.map((screen,i)=>
        <figure className={'case-gallery-card '+(screen.image.includes('home-mobile')?'is-mobile':'')} key={screen.image}>
          <div className="case-gallery-visual"><BrowserMock src={screen.image} alt={screen.alt} variant={screen.image.includes('home-mobile')?'study-mobile-browser':''}/></div>
          <figcaption><span>0{i+1} / SCREEN</span><h3>{screen.title}</h3><p>{screen.copy}</p></figcaption>
        </figure>
      )}</div>
    </section>

    <section className="case-conclusion">
      <div className="shell case-conclusion-grid">
        <div><span className="study-label">05 / WHAT THIS SHOWS</span><h2>Design meets<br/><em>function.</em></h2><p className="case-disclaimer">{project.note}</p></div>
        <div className="case-outro">
          <span className="study-label">THE TOOLKIT</span>
          <div className="case-outro-tags">{project.stack.map(t=><span key={t}>{t}</span>)}</div>
          <div className="case-outro-actions">
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="case-live-link">{project.liveLabel}<span aria-hidden="true">↗</span></a>
            {project.source&&<a href={project.source} target="_blank" rel="noopener noreferrer" className="case-source-link">VIEW SOURCE ON GITHUB ↗</a>}
          </div>
        </div>
      </div>
    </section>

    <section className="case-next shell">
      <span className="study-label">KEEP EXPLORING</span>
      <a href={'/projects/'+project.next}><span>NEXT PROJECT</span><strong>{project.nextTitle}<em>↗</em></strong></a>
      <a className="case-back-bottom" href="/#work">← BACK TO ALL PROJECTS</a>
    </section>
    <footer className="case-footer shell"><span>© {new Date().getFullYear()} AMER KUSSAD</span><span>PERSONAL PORTFOLIO / CASE STUDY {project.number}</span><a href="/">BACK HOME ↑</a></footer>
  </main>;
}
