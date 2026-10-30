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
    category: 'WEB APPLICATION',
    lead: 'A recruitment platform with different journeys for candidates, employers, and administrators — brought together through a consistent Arabic and English experience.',
    vision: 'People looking for work and businesses looking for talent have different needs. The challenge was to make those pathways feel clear, intuitive and connected, without getting in the way of the task.',
    approach: 'I focused on the front-end experience: legible layouts, structured forms, responsive screens, and interfaces that work naturally in both right-to-left and left-to-right contexts.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase'],
    image: '/images/projects/tatweer-home.webp',
    imageAlt: 'Tatweer Employment recruitment platform homepage',
    screens: [
      {
        image: '/images/projects/tatweer/jobs-listing.png',
        alt: 'Tatweer Employment job opportunities listing page',
        title: 'Browse opportunities',
        copy: 'Job listings and details help candidates navigate available roles.'
      },
      {
        image: '/images/projects/tatweer/job-detail.png',
        alt: 'Tatweer Employment job detail page',
        title: 'Find the details',
        copy: 'Individual job pages keep requirements and next steps within reach.'
      },
      {
        image: '/images/projects/tatweer/arabic-rtl.png',
        alt: 'Arabic right-to-left version of Tatweer',
        title: 'Designed for both directions',
        copy: 'Arabic and English interfaces adapt to RTL and LTR layouts.'
      },
      {
        image: '/images/projects/tatweer/admin-dashboard.png',
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
    note: 'The project combines bilingual public pages with authenticated management workflows.',
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
    category: 'CREATIVE FRONT-END',
    lead: 'An editorial web experience for a fictional modern Italian restaurant in Dubai Marina — designed to feel warm, immersive and effortless across screen sizes.',
    vision: 'A restaurant website has to communicate a feeling before it asks someone to read. The idea was to give food, interior photography and typography room to tell the story.',
    approach: 'The front-end brings large visuals, quiet transitions and a clear information hierarchy together across the home page, menu, gallery, story and contact pages.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    image: '/images/projects/casa-luce-home.webp',
    imageAlt: 'Casa Luce Italian restaurant website homepage',
    screens: [
      {
        image: '/images/projects/casa-luce/home-desktop.png',
        alt: 'Casa Luce desktop homepage',
        title: 'Editorial from the first scroll',
        copy: 'Bold serif typography and atmospheric restaurant imagery establish the visual language.'
      },
      {
        image: '/images/projects/casa-luce/gallery-desktop.png',
        alt: 'Casa Luce restaurant gallery',
        title: 'Let the imagery lead',
        copy: 'A gallery puts food and atmosphere in focus, with minimal interface distractions.'
      },
      {
        image: '/images/projects/casa-luce/home-mobile.png',
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
    note: 'Casa Luce is a fictional restaurant concept. Its reservation interaction is a front-end demonstration, not a live booking system.',
    live: 'https://casa-luce-nine.vercel.app',
    liveLabel: 'VISIT THE LIVE DEMO',
    source: 'https://github.com/amerqussad2-ai/casa-luce',
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
    document.title = project.title + ' — Case Study | Amer Kussad';
    window.scrollTo({top:0,left:0,behavior:'instant'});
    return () => {document.title='Amer Kussad — Developer & AI Product Builder';};
  },[project]);

  if(!project){
    return <main className="case-not-found shell"><span className="study-label">404 / PROJECT NOT FOUND</span><h1>This page isn't here.</h1><a href="/#work" className="study-link">BACK TO MY WORK ↗</a></main>;
  }

  return <main className={'case-page case-page-'+slug}>
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
          <div><span>FOCUS</span><strong>Front-end & User Experience</strong></div>
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
        <div><span className="study-label">05 / THE RESULT</span><h2>Design meets<br/><em>function.</em></h2><p className="case-disclaimer">{project.note}</p></div>
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
