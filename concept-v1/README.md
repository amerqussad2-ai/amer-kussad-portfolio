# Amer Kussad — Personal Portfolio V2

A personal-first dark-mode React portfolio built with Vite, featuring **five selected React Bits interactions**.

## Approved effects (implemented)
1. **SplitText** — hero name reveal, triggered on load
2. **FadeContent** — portrait entrance with gentle blur
3. **ScrollStack** — project case-study cards stack as the visitor scrolls
4. **AnimatedContent** — understated on-scroll About section entrance
5. **Magnet** — magnetic contact CTA on pointer-capable devices

These are source components copied from [React Bits](https://github.com/DavidHDev/react-bits) and kept under `src/reactbits/`. See `REACT_BITS_LICENSE.md` for the upstream MIT + Commons Clause license. This repository contains an application using these components, **not a component library for resale**.

## Develop

```bash
cd concept-v1
npm install
npm run dev
```

## Build
```bash
npm run build
```

Vercel settings: root directory `concept-v1`, framework `Vite`, output directory `dist`.

## Design
- Dark theme with agreed six-color palette (#303234, #3B7074, #F7F7F5, #BFD8DD, #294D63, #F45129)
- Personal narrative led by Amer's name and photograph
- Photos from existing portfolio copied locally; no external image service
- Selected work: Tatweer Employment and Casa Luce, each with an internal case study, optimized screenshots, a live-site link and clearly stated project scope
- Respects `prefers-reduced-motion`; hover effects not required for usability
- Existing original site on `main` remains unchanged

## Professional positioning
- Front-End Developer & AI Product Builder, emphasizing verified React, Next.js, TypeScript and web-application work.
- The personal narrative reflects current recruitment/customer-service experience and Artificial Intelligence studies; it does **not** claim published AI products that are not yet showcased.
- Casa Luce is explicitly a fictional restaurant concept and its reservation flows are demonstrations only.
- The supplied CV remains available directly from this new site.

## Publishing and quality checks
- `npm run build`: builds Vite, compresses portfolio screenshots and emits unique SEO HTML for the homepage and both project pages, social preview, robots.txt, and sitemap.xml.
- `npx playwright install chromium` then `npm run test:smoke`: tests key navigation, images, mobile and reduced-motion behavior, email copy and metadata.
- GitHub Actions runs these smoke tests automatically on pushes and pull requests to `portfolio-v2`.
- Do not claim validated Core Web Vitals, Safari support or accessibility certification without corresponding tests.

## Final content checks
Before using the portfolio for applications, verify your preferred spelling, current job status, CV accuracy and LinkedIn profile manually. Use the site case studies to demonstrate real work and add new projects only when their status can be confirmed.
