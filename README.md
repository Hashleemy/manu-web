Real Estate Website

A luxury real estate website for a Colombian-born agent serving the Jersey Shore and surrounding communities through Berkshire Hathaway. Built with warmth, craft, and a bilingual soul.

---

## Author

**[Hashleemy](https://github.com/Hashleemy)**

---

## About the Project

Manuela Maria is not just a real estate agent — she is a guide. This website reflects her dual identity: Colombian roots and Jersey Shore craft. It speaks English and Spanish with equal grace, moves like a garden in the wind, and earns the trust of every visitor who lands on it.

The one-sentence north star:
> *"This website is a garden — and Manuela is the one who tends it, grows it, and hands you the keys to your own."*

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | [Astro](https://astro.build) 6.3.1 |
| Styling | [Tailwind CSS](https://tailwindcss.com) v4 |
| Scroll Animations | [GSAP](https://gsap.com) + ScrollTrigger |
| Smooth Scroll | [Lenis](https://lenis.darkroom.engineering) |
| WebGL / 3D | [Three.js](https://threejs.org) |

---

## Design System

- **Colors:** Cream Ivory · Deep Forest · Blush Rose · Gold Leaf
- **Flowers:** Bougainvillea (Colombia) + Coastal Wildflowers (Jersey Shore)
- **Typography:** Playfair Display (headings) · Cormorant Garamond (accents) · Inter (body)
- **Languages:** English + Spanish — co-equal, always

---

## Project Structure

```
/
├── soul.md               # Creative brief & visual identity
├── tasks.md              # Full build task board (6 phases)
├── comms.md              # Agent communication & decision log
├── recap.md              # Session recap
├── netlify.toml          # Netlify build config (base dir, headers) — import the repo and deploy, no settings needed
├── content/
│   ├── CONTENT-CHECKLIST.md     # Every photo / text / contact item still needed, and where it goes
│   └── QUESTIONS-FOR-MANUELA.md # Bilingual intake questions that feed the bio and copy
└── molecular-meteorite/  # Astro project
    ├── src/
    │   ├── components/   # UI + section components
    │   ├── layouts/      # Base layout
    │   ├── pages/        # Astro pages
    │   ├── styles/       # Global CSS + design tokens
    │   ├── scripts/      # GSAP, Lenis, cursor animations
    │   ├── i18n/         # EN/ES copy (bio, headings, service blurbs)
    │   ├── data/         # site.js (contact, office, photo slots), listings, testimonials
    │   └── assets/content/  # DROP PHOTOS HERE — exact file names in its README
    └── public/
        └── images/       # Placeholder image slots
```

---

## Adding Content (no code changes needed)

| What | Where |
|---|---|
| Phone, email, socials, office, license, domain | `molecular-meteorite/src/data/site.js` — empty fields are simply hidden |
| Photos | `molecular-meteorite/src/assets/content/` using the exact file names in its README |
| Bio, headings, service text (EN + ES) | `molecular-meteorite/src/i18n/en.js` and `es.js` |
| Listings / testimonials | `molecular-meteorite/src/data/listings.js`, `testimonials.js` — remove `sample: true` on real entries |

Sample listings and testimonials show in `npm run dev` with a **Sample** badge and are hidden from production builds, so a deploy never shows invented content. Full checklist: `content/CONTENT-CHECKLIST.md`.

## Getting Started

```bash
cd molecular-meteorite
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

---

## Build Phases

| Phase | Description | Status |
|---|---|---|
| 1 | Project Scaffolding | ✅ Complete |
| 2 | Design System | ⬜ Not started |
| 3 | Page Sections | ⬜ Not started |
| 4 | Animations | ⬜ Not started |
| 5 | Bilingual Content | ⬜ Not started |
| 6 | Polish & QA | ⬜ Not started |

See [`tasks.md`](./tasks.md) for the full task board.

---

## License

Private. All rights reserved.
