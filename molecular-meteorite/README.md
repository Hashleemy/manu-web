# Manuela Maria — Real Estate Website

Bilingual real estate site for Manuela Maria, serving the Jersey Shore with Colombian warmth and Berkshire Hathaway trust.

**Author:** [Hashleemy](https://github.com/Hashleemy)

---

## Stack

| Layer | Package |
|---|---|
| Framework | Astro 6.3.1 |
| Styling | Tailwind CSS v4 (via `@tailwindcss/postcss`) |
| Animations | GSAP + ScrollTrigger |
| Smooth scroll | Lenis |
| WebGL | Three.js |
| Deployment | Netlify (Netlify Forms for contact) |

> **Note:** Use `@tailwindcss/postcss` — `@tailwindcss/vite` is incompatible with Vite 8 / rolldown in Astro 6.

---

## Getting Started

```bash
npm install
npm run dev       # http://localhost:4321
npm run build
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── sections/     # Hero, About, Services, JerseyShore, Listings,
│   │                 # Testimonials, Contact, Footer
│   ├── ui/           # Button, Card, BerkshireBadge, LanguageToggle,
│   │                 # Nav, MobileMenu, PlaceholderImage
│   └── animations/   # GSAP-driven flower components
├── layouts/
│   └── Layout.astro  # Base layout — Lenis + GSAP init, fonts, meta
├── pages/
│   └── index.astro   # All sections wired here
├── styles/
│   └── global.css    # Tailwind v4 @theme tokens, CSS custom properties
├── scripts/          # heroBloom, petalFall, scrollReveal, cursorFollower
├── i18n/             # en.js, es.js, index.js (useTranslation helper)
└── data/             # listings.js, testimonials.js
public/
├── images/
│   └── placeholders/ # Named image slots — replace with real assets
└── fonts/
```

---

## Bilingual System

Language is toggled via `LanguageToggle.astro`, which sets `html.is-es` and persists to `localStorage`. Content uses `.lang-en` / `.lang-es` CSS spans, both rendered in the DOM, one hidden at a time.

---

## Placeholder Images

All `PlaceholderImage` components accept a `slot` label. Open `public/images/placeholders/` and drop in real images matching these slots:

| Slot | Location |
|---|---|
| `manuela-portrait` | About section |
| `jersey-shore-coastal` | Jersey Shore section |
| `listing-1` through `listing-6` | Featured Listings |
| `og-image` | Open Graph (1200×630) |

---

## Build Status

| Phase | Description | Status |
|---|---|---|
| 1 | Project Scaffolding | ✅ |
| 2 | Design System | ✅ |
| 3 | Page Sections | ✅ |
| 4 | Animations | ✅ |
| 5 | Bilingual Content | ✅ |
| 6 | QA & Deploy | ⬜ |

---

## License

Private. All rights reserved.
