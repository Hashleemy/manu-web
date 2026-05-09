# MANU PROJECT — TASK BOARD
> Multi-agent shared task list. Agents: read this file before starting work. Claim a task by changing its status. Update status when done. Do NOT edit tasks assigned to another agent.

---

## STATUS KEY
- `[ ]` — not started
- `[~]` — in progress (add agent ID)
- `[x]` — complete
- `[!]` — blocked (add reason)

---

## TRACKS
- **FE** — Frontend: design system, page sections, animations, bilingual content, responsive/a11y QA
- **BE** — Backend: form wiring, SEO/meta, performance, deployment

Agents may work both tracks in parallel. Check for cross-track dependencies noted inline.

---

## SHARED — PHASE 1 (Complete)

### Project Scaffolding ✅
- [x] Astro 6.3.1 project initialized → `molecular-meteorite/`
- [x] `astro.config.mjs` configured with Tailwind PostCSS + sitemap
- [x] `package.json` scripts: `dev`, `build`, `preview`
- [x] `.gitignore` in place (Astro scaffold)
- [x] `.env.example` created
- [x] Dependencies installed: `gsap`, `lenis`, `three`, `sharp`, `@astrojs/sitemap`, `tailwindcss`, `@tailwindcss/postcss`
- [x] Full folder structure created (`components/`, `layouts/`, `styles/`, `scripts/`, `i18n/`, `data/`, `public/...`)
- [x] `src/styles/global.css` — Tailwind v4 `@theme` tokens: colors, fonts, spacing, radii, reset, utilities, reduced-motion guard
- [x] `src/layouts/Layout.astro` — Google Fonts, Lenis, GSAP+ScrollTrigger init, bilingual meta/OG tags, lang prop
- [x] `src/i18n/en.js` + `es.js` + `index.js` — all copy written (nav, hero, about, services, jerseyShore, listings, testimonials, contact, footer, meta)
- [x] `src/data/listings.js` — 6 placeholder property objects
- [x] `src/data/testimonials.js` — 5 placeholder testimonials (EN + ES quotes)
- [x] Build verified clean (819ms, 0 errors)

---

## FRONTEND TRACK

### FE-1 — Design System

#### FE-1.1 Tokens (partially complete in Phase 1)
- [x] Color palette defined in `global.css` `@theme`: cream-ivory, deep-forest, blush-rose, gold-leaf, petal-white, warm-charcoal
- [x] Font families defined: `--font-heading`, `--font-accent`, `--font-body`
- [x] Spacing scale: `--spacing-section`, `--spacing-section-lg`
- [x] Organic border-radius values: `--radius-organic`, `--radius-petal`

#### FE-1.2 Global Styles (partially complete in Phase 1)
- [x] CSS reset and base element styles
- [x] `.section-wrapper` utility (max-width + padding)
- [x] `.heading-display` and `.heading-accent` typography helpers
- [x] `prefers-reduced-motion` guard block
- [ ] Bilingual text sizing utilities (larger Spanish strings need accommodation)
- [ ] Organic curve clip-path helpers

#### FE-1.3 SVG Flower Asset Library
- [ ] `src/components/BougainvilleaFull.astro` — full flower SVG (hero, decorative)
- [ ] `src/components/BougainvilleaPetal.astro` — single petal SVG (cursor follower, petal fall)
- [ ] `src/components/CoastalWildflower.astro` — wildflower SVG (section dividers)
- [ ] `src/components/FlowerStem.astro` — decorative stem SVG (hero background, footer)
- [ ] `src/components/WaveDivider.astro` — SVG organic wave for section transitions
- [ ] `src/components/ui/ServiceIcon.astro` — accepts `type` prop: `buying | selling | relocation`

#### FE-1.4 Reusable UI Components
- [ ] `src/components/ui/Button.astro` — props: `variant (primary|secondary)`, `href`, `labelEn`, `labelEs`
- [ ] `src/components/ui/Card.astro` — base card with hover state: lift + shadow + petal accent
- [ ] `src/components/ui/BerkshireBadge.astro` — Berkshire Hathaway logo with gold border
- [ ] `src/components/ui/LanguageToggle.astro` — EN / ES switcher, triggers crossfade
- [ ] `src/components/ui/PlaceholderImage.astro` — accepts `slot` prop, renders labeled placeholder box
- [ ] `src/components/Nav.astro` — logo + nav links + language toggle + mobile trigger
- [ ] `src/components/MobileMenu.astro` — slide-in drawer for mobile nav

---

### FE-2 — Page Sections
> All sections use `PlaceholderImage.astro` for photos. Never block on missing assets.

#### FE-2.1 Navigation
- [ ] `src/components/sections/Nav.astro` — logo (Manuela Maria), links: Home · About · Services · Listings · Contact
- [ ] Language toggle on right side
- [ ] Mobile hamburger + `MobileMenu.astro` slide-in drawer
- [ ] Scroll-based style change: transparent → cream background on scroll
- [ ] Bilingual nav link labels via `useTranslation`

#### FE-2.2 Hero Section
- [ ] `src/components/sections/Hero.astro` — full-screen, cream-to-blush gradient background
- [ ] `BougainvilleaFull.astro` centered (animation wired in FE-3.1)
- [ ] Parallax stems: two `FlowerStem.astro`, left + right sides (wired in FE-3.5)
- [ ] Headline: **"Your Home Awaits."** / **"Tu Hogar te Espera."** (Playfair Display)
- [ ] Subline: her title + Berkshire Hathaway affiliation
- [ ] CTA `Button.astro`: **Find Your Home** / **Encuentra tu Hogar** → `#contact`
- [ ] Scroll indicator (animated chevron or petal)

#### FE-2.3 About Section
- [ ] `src/components/sections/About.astro` — two-column asymmetric layout
- [ ] LEFT: `PlaceholderImage.astro slot="manuela-portrait"`
- [ ] RIGHT: bilingual story text from `useTranslation`
- [ ] `BerkshireBadge.astro` below story text
- [ ] `CoastalWildflower.astro` background accent (low opacity)
- [ ] Scroll-triggered entrance (wired in FE-3.3)

#### FE-2.4 Services Section
- [ ] `src/components/sections/Services.astro` — three-card layout with `WaveDivider.astro` above
- [ ] Buying card: `ServiceIcon buying` + bilingual copy from `useTranslation`
- [ ] Selling card: `ServiceIcon selling` + bilingual copy
- [ ] Relocation card: `ServiceIcon relocation` + bilingual copy
- [ ] Hover microanimation wired (FE-3.6)
- [ ] Scroll-triggered stagger entrance (FE-3.3)

#### FE-2.5 Jersey Shore Section
- [ ] `src/components/sections/JerseyShore.astro` — full-width coastal character section
- [ ] `PlaceholderImage.astro slot="jersey-shore-coastal"`
- [ ] Neighborhood highlights: Asbury Park, Spring Lake, Manasquan, Long Branch, Red Bank
- [ ] Bilingual copy from `useTranslation`
- [ ] `BougainvilleaPetal.astro` accents overlaying image
- [ ] Scroll-triggered reveal (FE-3.3)

#### FE-2.6 Listings Section
- [ ] `src/components/sections/Listings.astro` — grid (3-col desktop / 2-col tablet / 1-col mobile)
- [ ] `src/components/ui/ListingCard.astro` — photo placeholder, price, address, beds/baths, "View Details" link
- [ ] `PlaceholderImage.astro slot="listing-{id}"` inside each card
- [ ] Section heading from `useTranslation` (Featured Listings / Propiedades Destacadas)
- [ ] "View All" CTA below grid
- [ ] Hover microanimation (FE-3.6)
- [ ] ⚠ `src/data/listings.js` already created

#### FE-2.7 Testimonials Section
- [ ] `src/components/sections/Testimonials.astro` — scattered petal layout
- [ ] `src/components/ui/TestimonialCard.astro` — soft rounded card, slight rotation, quote + attribution
- [ ] Render from `src/data/testimonials.js` — active language switches quote field
- [ ] Section heading from `useTranslation`
- [ ] Scroll-triggered stagger reveal (FE-3.3)
- [ ] ⚠ `src/data/testimonials.js` already created

#### FE-2.8 Contact Section
- [ ] `src/components/sections/Contact.astro` — split layout: left info + right form
- [ ] LEFT: bilingual invitation copy + contact detail placeholders from `useTranslation`
- [ ] RIGHT: form fields: Name, Email, Phone (optional), Message, Preferred Language
- [ ] HTML5 form validation
- [ ] `BougainvilleaPetal.astro` accents on left column
- [ ] ⚠ Form backend wiring is **BE-2** — add `data-netlify` or Formspree `action` attr as placeholder

#### FE-2.9 Footer
- [ ] `src/components/sections/Footer.astro` — deep-forest background, cream/gold text
- [ ] Manuela Maria name in Gold Leaf
- [ ] Quick nav links: Home · About · Services · Listings · Contact
- [ ] Social icons: Instagram, Facebook (placeholder `href="#"`)
- [ ] Berkshire Hathaway legal disclaimer placeholder
- [ ] Copyright line from `useTranslation`
- [ ] `BougainvilleaFull.astro` decorative, bottom-right corner (low opacity)

---

### FE-3 — Animations

#### FE-3.1 Hero Bloom (Page Load)
- [ ] `src/scripts/heroBloom.js` — GSAP timeline
- [ ] Animate `BougainvilleaFull` SVG paths: petals unfurl from bud, 2.5s
- [ ] Easing: `power2.inOut` on petal paths
- [ ] Sequence: flower opens → headline fades in (0.4s delay) → CTA fades in (0.2s delay)
- [ ] Wrap in `matchMedia` to reduce/skip on mobile

#### FE-3.2 Petal Fall (Scroll Trigger)
- [ ] `src/scripts/petalFall.js`
- [ ] On scroll past hero: spawn 8–12 `BougainvilleaPetal` elements in DOM
- [ ] Animate: float 100vh, rotate 0→360°, fade out at bottom
- [ ] Stagger spawn times for organic feel
- [ ] Clean up petals after animation to avoid DOM bloat

#### FE-3.3 Section Entrance Animations
- [ ] `src/scripts/scrollReveal.js` — ScrollTrigger-based
- [ ] About: image slides left → 0, text fades up from right
- [ ] Services: cards stagger in L → C → R, 0.15s apart
- [ ] Jersey Shore: image + text fade up together
- [ ] Listings: cards stagger in row by row
- [ ] Testimonials: scatter in from various offsets
- [ ] Contact: left fades in → right form slides up
- [ ] All: Y 40px → 0, opacity 0 → 1, `power2.out`, 0.7s

#### FE-3.4 Cursor Follower
- [ ] `src/scripts/cursorFollower.js`
- [ ] 24px `BougainvilleaPetal` SVG as cursor overlay element
- [ ] Follow mouse with ~80ms lag (GSAP `quickTo`)
- [ ] Disable on touch devices
- [ ] Subtle rotation based on velocity direction

#### FE-3.5 Parallax
- [ ] Hero flower stems: 0.4× scroll speed (ScrollTrigger `scrub`)
- [ ] Jersey Shore background image: 0.2× scroll speed

#### FE-3.6 Hover Microanimations
- [ ] Service cards: lift 6px, blush-rose shadow, petal in corner
- [ ] Listing cards: lift 4px, gold-leaf border transition
- [ ] Nav links: gold underline slides in from left
- [ ] CTA button: scale 1.03, background deepens

#### FE-3.7 Language Toggle Crossfade
- [ ] On toggle click: fade out 0.2s → swap → fade in 0.2s
- [ ] CSS class + GSAP `.to()` on content wrappers
- [ ] Persist language in `localStorage`

#### FE-3.8 Reduced Motion
- [ ] All GSAP animations wrapped in `matchMedia('(prefers-reduced-motion: reduce)')` guard
- [ ] Fallback: render final state immediately with no transition

---

### FE-4 — Bilingual Content

#### FE-4.1 Translation Architecture (complete)
- [x] `src/i18n/en.js` — all English strings
- [x] `src/i18n/es.js` — all Spanish strings
- [x] `src/i18n/index.js` — `useTranslation(lang)` helper
- [x] Keys defined: nav, hero, about, services, jerseyShore, listings, testimonials, contact, footer, meta

#### FE-4.2 English Copy (complete)
- [x] Hero, About, Services, Jersey Shore, Testimonials, Contact, Footer, Meta

#### FE-4.3 Spanish Copy (complete)
- [x] Hero, About, Services, Jersey Shore, Testimonials, Contact, Footer, Meta (Colombian cadence)

#### FE-4.4 Language Toggle Wiring
- [ ] Wire `LanguageToggle.astro` → updates all section content via `useTranslation`
- [ ] Wire `<html lang>` attribute to current language
- [ ] `<link rel="alternate" hreflang>` tags confirmed in `Layout.astro` head ✅
- [ ] Ensure form labels and validation messages switch language

---

### FE-5 — Frontend QA

#### FE-5.1 Responsiveness
- [ ] Mobile audit ≤640px: Hero, About (stack), Services (single col), Jersey Shore, Listings (single col), Testimonials, Contact (stack), Footer, Nav + hamburger
- [ ] Tablet audit 641–1024px: all sections
- [ ] All touch interactions work (no hover-only features)

#### FE-5.2 Accessibility
- [ ] WCAG AA color contrast audit
- [ ] `aria-label` on all icon buttons (hamburger, social, language toggle)
- [ ] `alt` text on all `PlaceholderImage` components
- [ ] Keyboard Tab order: nav → hero → sections → form → footer
- [ ] All form labels associated via `for`/`id`
- [ ] `aria-live` region on language toggle
- [ ] Screen reader test (NVDA or VoiceOver)

#### FE-5.3 Cross-Browser
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest — verify GSAP compatibility)
- [ ] Edge (latest)
- [ ] iOS Safari
- [ ] Android Chrome

#### FE-5.4 Final Frontend Passes
- [ ] Animation timing pass — compare against `soul.md` rules
- [ ] Proof all English copy: warm, confident, not corporate
- [ ] Proof all Spanish copy: Colombian cadence
- [ ] Replace all `[PLACEHOLDER]` contact info once received from Manuela
- [ ] Replace all placeholder images once received from Manuela

---

## BACKEND TRACK

### BE-1 — SEO & Meta

- [ ] Add JSON-LD structured data in `Layout.astro`: `LocalBusiness` schema
  - fields: name, url, telephone, email, address (Jersey Shore area), image, sameAs (social)
- [ ] Create `public/robots.txt`
- [ ] Confirm `sitemap.xml` generates correctly on build (`@astrojs/sitemap` already configured ✅)
- [ ] Create OG image placeholder at `public/images/og-image.jpg` (1200×630, labeled)
- [ ] Confirm each page has unique `<title>` and `<meta description>`

---

### BE-2 — Contact Form

- [ ] Decide form backend (answer Open Question #7): Netlify Forms or Formspree
- [ ] **If Netlify Forms**: add `data-netlify="true"` + hidden `<input name="form-name">` to form in `Contact.astro`
- [ ] **If Formspree**: add `action="https://formspree.io/f/{id}"` + `method="POST"` to form
- [ ] Add server-side spam protection (Netlify honeypot or Formspree reCAPTCHA)
- [ ] Test full form submission end-to-end in staging
- [ ] Confirm bilingual validation messages work (depends on FE-4.4)

---

### BE-3 — Performance

- [ ] Run Lighthouse audit — target: Performance > 90
- [ ] Swap all raw `<img>` tags for Astro `<Image>` component
- [ ] Add `loading="lazy"` to all below-fold images
- [ ] Defer GSAP animation scripts below the fold (`type="module"` + dynamic import)
- [ ] Confirm Google Fonts use `display=swap` ✅ (already set in `Layout.astro`)
- [ ] Audit bundle — Three.js is heavy; dynamic-import it if only used in one section

---

### BE-4 — Deployment

- [ ] Initialize git repo and push to GitHub (username: Hashleemy)
- [ ] Connect repo to Vercel or Netlify
- [ ] Configure build: command `npm run build`, output dir `dist/`
- [ ] Set up custom domain (answer Open Question #6)
- [ ] HTTPS auto-enabled on Vercel/Netlify ✅
- [ ] Configure form backend environment variables if using Formspree
- [ ] Post-deploy: verify with Playwright MCP — screenshot all 9 sections
- [ ] Smoke test: form submission, language toggle, all nav links

---

### BE-5 — Final Backend Passes

- [ ] Remove all `console.log` calls from scripts
- [ ] Verify no `.env` values are exposed to the client (no `PUBLIC_` prefix on secrets)
- [ ] Confirm `robots.txt` is not blocking crawlers in production
- [ ] Validate sitemap URL against live domain once deployed

---

## OPEN QUESTIONS (blocking certain tasks)

| # | Question | Blocks |
|---|---|---|
| 1 | Real photos of Manuela or continue with placeholders? | FE-5.4 |
| 2 | Phone number and email for contact section? | FE-5.4, BE-1 (JSON-LD) |
| 3 | Instagram and Facebook handles/URLs? | FE-5.4, BE-1 (JSON-LD sameAs) |
| 4 | MLS feed / API for listings, or static placeholders only? | FE-2.6 |
| 5 | Berkshire Hathaway brand guidelines to comply with? | FE-1.4 (BerkshireBadge), FE-2.9 (Footer disclaimer) |
| 6 | Will the site need a custom domain? | BE-4 |
| 7 | Form backend preference — Netlify Forms, Formspree, or custom? | BE-2 |

---

## NOTES
- All agents: log decisions and blockers in `comms.md`
- `soul.md` is the source of truth for design intent — consult it before making creative choices
- All images use `PlaceholderImage.astro` until real assets are provided — never block section builds on missing photos
- Spanish is co-equal to English — never treat it as a secondary pass
- Project lives in `molecular-meteorite/` directory
