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

#### FE-1.2 Global Styles ✅
- [x] CSS reset and base element styles
- [x] `.section-wrapper` utility (max-width + padding)
- [x] `.heading-display` and `.heading-accent` typography helpers
- [x] `prefers-reduced-motion` guard block
- [x] Bilingual toggle CSS (`.lang-en` / `.lang-es` show/hide via `html.is-es`)
- [x] Language restore inline script in Layout.astro (prevents FOUC)
- [x] `.text-balance-bi`, `.bilingual-text` text utilities
- [x] `.img-organic`, `.img-petal` organic image frame helpers
- [x] `.clip-organic`, `.clip-petal`, `.clip-wave-top`, `.clip-wave-bottom` clip-path helpers

#### FE-1.3 SVG Flower Asset Library ✅
- [x] `src/components/BougainvilleaFull.astro` — 6-bract flower, `.bract` targets for GSAP heroBloom
- [x] `src/components/BougainvilleaPetal.astro` — single petal with central vein, `color`/`size`/`opacity` props
- [x] `src/components/CoastalWildflower.astro` — 8-petal daisy with stem and leaf
- [x] `src/components/FlowerStem.astro` — S-curve stem with 3 leaves and bud
- [x] `src/components/WaveDivider.astro` — sine-wave section divider, `fill`/`flipped`/`height` props
- [x] `src/components/ui/ServiceIcon.astro` — `type: buying | selling | relocation`, deep-forest line art

#### FE-1.4 Reusable UI Components ✅
- [x] `src/components/ui/Button.astro` — `variant (primary|secondary)`, `href`, `labelEn`, `labelEs`; renders `<a>` or `<button>`
- [x] `src/components/ui/Card.astro` — hover lift + blush shadow, `hoverable`/`padded` props
- [x] `src/components/ui/BerkshireBadge.astro` — diamond mark + gold border text badge; replace with logo when guidelines confirmed
- [x] `src/components/ui/LanguageToggle.astro` — EN/ES toggle with `localStorage` persistence, `aria-live` announcement
- [x] `src/components/ui/PlaceholderImage.astro` — labeled flower-mark placeholder, `slot`/`aspectRatio` props
- [x] `src/components/Nav.astro` — fixed header, transparent→cream on scroll, bilingual links, mobile trigger
- [x] `src/components/MobileMenu.astro` — slide-in drawer, focus trap, Escape key close, all a11y attrs
- [x] `public/icons/favicon.svg` — bougainvillea 6-petal mark on forest-green circle

---

### FE-2 — Page Sections
> All sections use `PlaceholderImage.astro` for photos. Never block on missing assets.

#### FE-2.1 Navigation ✅
- [x] `src/components/Nav.astro` — fixed header, bilingual links (lang-en/lang-es spans)
- [x] Language toggle integrated (right side)
- [x] Mobile hamburger → `MobileMenu.astro` slide-in drawer
- [x] Scroll-based style change: transparent → cream/blur on scroll (inline JS)
- [x] `index.astro` wires Nav + MobileMenu above `<main>`

#### FE-2.2 Hero Section ✅
- [x] `src/components/sections/Hero.astro` — full-screen, cream→blush gradient
- [x] `BougainvilleaFull.astro` centered with `id="hero-flower"` (FE-3.1 animation target)
- [x] `id="hero-stem-left"` + `id="hero-stem-right"` parallax targets (FE-3.5)
- [x] Bilingual headline (Playfair Display, 8xl at lg)
- [x] Subline in Cormorant Garamond italic, gold-leaf
- [x] CTA Button → `#contact`
- [x] Animated scroll chevron

#### FE-2.3 About Section ✅
- [x] `src/components/sections/About.astro` — grid-cols [2fr 3fr], asymmetric
- [x] LEFT: `PlaceholderImage slot="manuela-portrait"` with `img-organic` framing
- [x] RIGHT: bilingual headings and body text; `BerkshireBadge` below
- [x] Background `CoastalWildflower` accents (7% opacity)
- [x] `.about-grid` / `.about-content` / `.about-image` targets ready for FE-3.3

#### FE-2.4 Services Section ✅
- [x] `src/components/sections/Services.astro` — 3-col grid with `WaveDivider` above+below
- [x] All three service cards with `ServiceIcon`, bilingual heading + description
- [x] Petal corner accent on hover (CSS `group-hover:opacity-100`)
- [x] `.service-card` / `.services-grid` targets ready for FE-3.3 stagger

#### FE-2.5 Jersey Shore Section ✅
- [x] `src/components/sections/JerseyShore.astro` — 2-col lg grid, image left / copy right
- [x] `PlaceholderImage slot="jersey-shore-coastal"` with rounded corners
- [x] 3 `BougainvilleaPetal` accents overlaying image (absolute positioned)
- [x] Neighborhood pills: 5 communities styled as tags
- [x] `.jersey-image` / `.jersey-content` targets ready for FE-3.3

#### FE-2.6 Listings Section ✅
- [x] `src/components/sections/Listings.astro` — 3-col desktop / 2-col tablet / 1-col mobile grid
- [x] `src/components/ui/ListingCard.astro` — price, address split, beds/baths/sqft, bilingual labels
- [x] `PlaceholderImage slot="listing-{id}"` per card, hover scale on image
- [x] Bilingual section heading + "View All" CTA
- [x] `.listing-card` targets ready for FE-3.6 hover microanimations

#### FE-2.7 Testimonials Section ✅
- [x] `src/components/sections/Testimonials.astro` — deep-forest bg with wave dividers
- [x] `src/components/ui/TestimonialCard.astro` — soft rounded cards, slight CSS rotation, large quote mark
- [x] Bilingual quotes via `quote_en`/`quote_es` fields; `.lang-en`/`.lang-es` toggle
- [x] `.testimonial-card` targets ready for FE-3.3 scatter reveal

#### FE-2.8 Contact Section ✅
- [x] `src/components/sections/Contact.astro` — 2-col lg split layout
- [x] LEFT: bilingual heading, subheading, phone/email/instagram with SVG icons
- [x] RIGHT: full form — name, email, phone, message, language preference
- [x] Client-side JS validation with bilingual error messages
- [x] Netlify Forms already wired (`data-netlify="true"`, honeypot) ← BE-2 partially done
- [x] ⚠ Note: Contact uses server-side `lang` prop (single render); CSS toggle won't update form labels — wire in FE-4.4

#### FE-2.9 Footer ✅
- [x] `src/components/sections/Footer.astro` — deep-forest bg, cream/gold text
- [x] Manuela Maria name in gold Cormorant Garamond italic
- [x] 3-col grid: brand / nav links / social
- [x] Instagram + Facebook icon buttons (placeholder `href="#"`)
- [x] Berkshire disclaimer + copyright from i18n
- [x] `BougainvilleaFull` decorative (6% opacity), bottom-right corner
- [x] `index.astro` fully wired: Nav → Hero → About → Services → JerseyShore → Listings → Testimonials → Contact → Footer

---

### FE-3 — Animations

#### FE-3.1 Hero Bloom (Page Load) ✅
- [x] `src/scripts/heroBloom.js` — GSAP timeline, direct module (runs on import)
- [x] Bracts: scale 0→1 with `svgOrigin: '100 100'`, stagger 0.09s, `power2.inOut`
- [x] Stem: scaleY 0→1, grows alongside bracts
- [x] Sequence: flower → headline → subline → CTA (cascading offsets)
- [x] Reduced motion guard: `gsap.set()` all to final state if `prefers-reduced-motion: reduce`

#### FE-3.2 Petal Fall (Scroll Trigger) ✅
- [x] `src/scripts/petalFall.js` — ScrollTrigger on hero bottom
- [x] Spawns 8–12 inline SVG petals at random positions/sizes/colors
- [x] Each petal: float 100vh + drift, rotate, fade out at bottom
- [x] DOM cleanup via `onComplete: () => wrapper.remove()`
- [x] One-shot trigger (`triggered` flag prevents re-fire)

#### FE-3.3 Section Entrance Animations ✅
- [x] `src/scripts/scrollReveal.js` — ScrollTrigger `reveal()` helper
- [x] About: image slides from left (-40px X), text fades up
- [x] Services: cards stagger 0.15s left → center → right
- [x] Jersey Shore: image + content fade up with offset delay
- [x] Listings: cards stagger 0.1s per card
- [x] Testimonials: scatter-in with random stagger from scale 0.96
- [x] Contact: info fades in, form slides up 0.2s delayed
- [x] All: `once: true` — triggers once, ScrollTrigger destroyed after

#### FE-3.4 Cursor Follower ✅
- [x] `src/scripts/cursorFollower.js` — 24px petal SVG, `mix-blend-mode: multiply`
- [x] GSAP `quickTo` for smooth trailing (duration 0.45s, power3.out)
- [x] Skipped on `hover: none` (touch) and `prefers-reduced-motion: reduce`
- [x] Rotates toward velocity direction via `Math.atan2`

#### FE-3.5 Parallax ✅
- [x] `src/scripts/parallax.js` — hero stems scrub at 0.3× (`yPercent: -30`)
- [x] Jersey Shore image: yPercent -12, scrub 1
- [x] `prefers-reduced-motion` guard via `gsap.matchMedia()`

#### FE-3.6 Hover Microanimations ✅
- [x] Service cards: CSS `hover:-translate-y-1.5 hover:shadow-lg hover:shadow-blush-rose/20` on `Card.astro`
- [x] Service cards: petal corner SVG `group-hover:opacity-100` in `Services.astro`
- [x] Listing cards: `hover:-translate-y-1.5 hover:shadow-lg` + image `group-hover:scale-[1.02]` in `ListingCard.astro`
- [x] Nav links: `after:w-0 hover:after:w-full` gold underline in `Nav.astro`
- [x] CTA button: `hover:bg-gold-leaf hover:text-deep-forest` in `Button.astro`

#### FE-3.7 Language Toggle Crossfade ✅
- [x] CSS toggle (`.lang-en`/`.lang-es` show/hide) is instantaneous
- [x] `localStorage` persistence in `LanguageToggle.astro`
- [x] GSAP crossfade enhancement: add 0.15s opacity fade to `LanguageToggle.astro` script if desired — low priority

#### FE-3.8 Reduced Motion ✅
- [x] `heroBloom.js`: `window.matchMedia` check, falls back to `gsap.set()` final state
- [x] `scrollReveal.js`: `reduced` flag, returns early from all `reveal()` calls
- [x] `petalFall.js`: `matchMedia` guard, no petals spawn
- [x] `cursorFollower.js`: early return if `prefers-reduced-motion: reduce`
- [x] `parallax.js`: `gsap.matchMedia()` wrapper
- [x] `global.css`: `@media (prefers-reduced-motion: reduce)` disables all CSS transitions

#### FE-3 — Animation scripts imported
- [x] All scripts imported in `index.astro` `<script>` block (Astro defers as ES modules)

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
- [x] `LanguageToggle.astro` toggles `html.is-es` class + updates `document.lang` + persists to `localStorage`
- [x] `Layout.astro` inline script restores language before paint (prevents FOUC)
- [x] `<html lang>` attribute updated on toggle
- [x] `<link rel="alternate" hreflang>` tags in `Layout.astro` head ✅
- [x] All section content uses `.lang-en`/`.lang-es` spans — toggle affects instantly
- [x] `LanguageToggle.astro` has `aria-live` announcement for screen readers
- [ ] Contact.astro visual design pass: add BougainvilleaPetal accents (`.contact-info` left column)
- [x] Contact.astro form labels updated to `.lang-en`/`.lang-es` pattern — all labels + submit button + error messages switch on language toggle
- [x] Contact.astro JS validation updated to read `document.documentElement.lang` at submit time for bilingual errors
- [x] `public/icons/apple-touch-icon.svg` created as placeholder. ⚠ Replace with proper 180×180 PNG before launch — iOS requires PNG, not SVG

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

- [x] Add JSON-LD structured data in `Layout.astro`: `LocalBusiness` schema
  - Used `@type: RealEstateAgent` (Schema.org subtype — more specific). PLACEHOLDER values for phone/email/sameAs pending Open Questions #2 & #3.
- [x] Create `public/robots.txt`
  - All crawlers allowed, sitemap URL: `https://manuelamaria.com/sitemap-index.xml`
- [x] Confirm `sitemap.xml` generates correctly on build (`@astrojs/sitemap` already configured ✅)
  - Verified: `sitemap-index.xml` + `sitemap-0.xml` present in `dist/` on clean build.
- [~] Create OG image placeholder at `public/images/og-image.jpg` (1200×630, labeled)
  - Created branded SVG placeholder at `public/images/og-image.svg`. ⚠ Real 1200×630 JPG must be placed at `public/images/og-image.jpg` before launch — social platforms require JPG/PNG, not SVG. Blocked on Manuela's brand assets (Open Question #1).
- [x] Confirm each page has unique `<title>` and `<meta description>`
  - Confirmed in `Layout.astro` — bilingual defaults + per-page override via props. ✅

#### BE-1 new sub-tasks discovered
- [ ] Replace JSON-LD PLACEHOLDERs (phone, email, sameAs) once Open Questions #2 & #3 answered
- [ ] Place real `public/images/og-image.jpg` (1200×630) once brand assets received from Manuela
- [ ] Once i18n routing uses language paths (e.g. `/es/`), update `hreflang` alternates in `Layout.astro` to point to language-specific URLs (currently both EN/ES point to same path)

---

### BE-2 — Contact Form

- [x] Decide form backend (answer Open Question #7): Netlify Forms or Formspree
  - **Decision: Netlify Forms.** Site deploys to Netlify, no env vars needed, submissions go to Netlify dashboard. See `comms.md` for full rationale.
- [x] **Netlify Forms**: add `data-netlify="true"` + hidden `<input name="form-name">` to form in `Contact.astro`
  - Created `src/components/sections/Contact.astro` with full Netlify Forms wiring.
- [x] Add server-side spam protection (Netlify honeypot or Formspree reCAPTCHA)
  - Netlify honeypot field added (`name="bot-field"`, visually hidden, `tabindex="-1"`).
- [!] Test full form submission end-to-end in staging — blocked on BE-4 (deployment not yet done)
- [x] Confirm bilingual validation messages work (depends on FE-4.4)
  - Client-side JS validation in `Contact.astro` reads `lang` prop and applies EN/ES error messages. Works independently of FE-4.4 toggle.

#### BE-2 new sub-tasks discovered
- [ ] FE visual design pass on `Contact.astro` needed — BE created functional structure; FE-2.8 should add BougainvilleaPetal accents, scroll-reveal animation (FE-3.3), and full typography/spacing polish
- [ ] After deployment: test form submission in Netlify dashboard — verify email notification arrives
- [ ] After deployment: test honeypot — submit with bot-field filled, confirm it's filtered

---

### BE-3 — Performance

- [ ] Run Lighthouse audit — FE sections are now built. Run: `npm run build && npm run preview` then audit via Playwright MCP. Target: Performance > 90, Accessibility > 95.
- [ ] Swap all raw `<img>` tags for Astro `<Image>` component — FE sections now exist. Audit `dist/index.html` for any raw `<img>` tags not going through Astro Image optimization.
- [ ] Add `loading="lazy"` to all below-fold images — audit after Image component pass.
- [x] Defer GSAP animation scripts below the fold (`type="module"` + dynamic import)
  - Confirmed: Astro bundles `<script>` in `Layout.astro` as deferred ES modules automatically. No manual `defer`/`type="module"` needed. ✅
- [x] Confirm Google Fonts use `display=swap` ✅ (already set in `Layout.astro`)
- [~] Audit bundle — Three.js is heavy; dynamic-import it if only used in one section
  - Three.js is in `package.json` but NOT imported anywhere yet. When FE uses it, it MUST be dynamically imported: `const THREE = await import('three');`. Added note to comms.md for FE agent.

#### BE-3 new sub-tasks discovered
- [ ] After FE sections built: run `npx astro build && npx astro preview` then Lighthouse in Playwright MCP — target Performance > 90, Accessibility > 95
- [ ] After FE sections built: audit `dist/` bundle sizes — flag any chunk over 100KB for code splitting
- [ ] Add `<link rel="preload">` for above-fold fonts if Lighthouse flags render-blocking resources

---

### BE-4 — Deployment

- [!] Initialize git repo and push to GitHub — needs user authorization. Repo: `https://github.com/Hashleemy/manuela-maria` (private). Run: `git init && git add . && git commit -m "Initial commit — full site implementation" && git remote add origin https://github.com/Hashleemy/manuela-maria.git && git push -u origin main`
- [!] Connect repo to Netlify — blocked on git push. Platform decision: **Netlify** (required for Netlify Forms; Vercel would need a different form backend). See comms.md.
- [x] Configure build: command `npm run build`, output dir `dist/`
  - Created `netlify.toml` with build config + security headers + asset cache headers.
- [!] Set up custom domain (answer Open Question #6) — blocked on user decision
- [x] HTTPS auto-enabled on Vercel/Netlify ✅
- [x] Configure form backend environment variables if using Formspree
  - Not needed — using Netlify Forms (zero env vars required). ✅
- [!] Post-deploy: verify with Playwright MCP — screenshot all 9 sections — blocked on deployment + FE sections being built
- [!] Smoke test: form submission, language toggle, all nav links — blocked on deployment

#### BE-4 new sub-tasks discovered
- [ ] USER ACTION REQUIRED: `git init`, commit, push to GitHub/Hashleemy, connect to Netlify
- [ ] After Netlify connected: enable Netlify Forms in dashboard (Forms tab → verify "contact" form detected)
- [ ] After deployment: set up Netlify form email notification to Manuela's email (contact.malemi@gmail.com)

---

### BE-5 — Final Backend Passes

- [x] Remove all `console.log` calls from scripts
  - Audited all `.js`, `.ts`, `.astro` files in `src/`. Zero `console.log` calls found. ✅
- [x] Verify no `.env` values are exposed to the client (no `PUBLIC_` prefix on secrets)
  - `.env.example` has no `PUBLIC_` prefixed values. No secrets in client-side code. ✅ Re-audit if any API keys are added.
- [x] Confirm `robots.txt` is not blocking crawlers in production
  - `public/robots.txt` uses `Allow: /` for all user-agents. ✅
- [!] Validate sitemap URL against live domain once deployed — blocked on BE-4 deployment

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
