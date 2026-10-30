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
- Selected work: Tatweer Employment, Casa Luce (existing project case-study links)
- Respects `prefers-reduced-motion`; hover effects not required for usability
- Existing original site on `main` remains unchanged

## What is not final
This is a design and animation milestone, not finished audited production portfolio. Project writeups and mobile motion tuning may need further refinement after real-device testing.
