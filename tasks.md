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
- [x] GSAP crossfade implemented: incoming language fades in at 0.2s `power1.out`. `LanguageToggle.astro` imports GSAP, calls `gsap.fromTo(inEls, { opacity: 0 }, { opacity: 1, ... })` after class toggle. Soul.md: "no hard cut on language switch" — implemented. Init call skips animation; only user clicks animate.

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
- [x] Contact.astro visual design pass: BougainvilleaPetal accents added to `.contact-info` left column — 3 petals absolutely positioned (blush-rose top-right rotated -28°, gold-leaf mid-right rotated 45°, blush-rose bottom rotated -70°; all pointer-events-none + aria-hidden)
- [x] Contact.astro form labels updated to `.lang-en`/`.lang-es` pattern — all labels + submit button + error messages switch on language toggle
- [x] Contact.astro JS validation updated to read `document.documentElement.lang` at submit time for bilingual errors
- [x] `public/icons/apple-touch-icon.svg` created as placeholder. ⚠ Replace with proper 180×180 PNG before launch — iOS requires PNG, not SVG
- [x] `LanguageToggle.astro` bug fixed: now dispatches `langchange` CustomEvent (was missing — Contact.astro language-select sync was silently broken). Fixed by adding `window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }))` inside `setActive()`.

---

### FE-5 — Frontend QA

#### FE-5.1 Responsiveness ✅
- [x] Mobile audit ≤640px: Hero, About (stack), Services (single col), Jersey Shore, Listings (single col), Testimonials, Contact (stack), Footer, Nav + hamburger — all grid-cols-1 on mobile, stacking confirmed in code
- [x] Tablet audit 641–1024px: 2-col grids kick in at sm/md, 3-col at lg — confirmed breakpoints across all sections
- [x] Touch interactions: hover-only states are purely decorative (lift, shadow, underline) — no content gated behind hover. Cursor follower already skips on `hover: none`. Touch targets fixed: hamburger min-h-[44px], language toggle min-h-[40px] + py-2 on mobile, mobile close btn min-h-[44px]
- [x] Fixes applied: `section-padding` → `clamp(3.5rem, 8vw, 6rem)` (was fixed 6rem); testimonial rotations disabled on mobile via CSS to prevent horizontal overflow; `-rotate-20` in JerseyShore → `rotate-[-20deg]` (arbitrary Tailwind value)

#### FE-5.2 Accessibility ✅
- [x] `aria-label` on all icon buttons — hamburger, mobile close, footer social, language toggle — all confirmed ✅
- [x] `alt` / `role="img"` on all `PlaceholderImage` components — `role="img"` + `aria-label` confirmed ✅
- [x] All form labels associated via `for`/`id` — Contact.astro all field pairs confirmed ✅
- [x] `aria-live` region on language toggle — `aria-live="polite" aria-atomic="true" class="sr-only"` ✅
- [x] Mobile menu keyboard — `inert` attribute added (starts inert, removed on open, restored on close). Prevents Tab-into-closed-menu. ✅
- [x] Skip-to-content link added to `Layout.astro` (sr-only until focused, links to `#main-content`, bilingual) ✅
- [x] WCAG AA contrast — fixed 2 functional fails: ListingCard "View Details" `text-gold-leaf`→`text-deep-forest` (was 2.24:1 on white); JerseyShore subheading `text-gold-leaf`→`text-deep-forest/60` (was 2.08:1 on cream). Hero subline gold-on-cream is design-signature per soul.md (intentional). All forest/charcoal text passes at 9:1.
- [~] Screen reader test (NVDA or VoiceOver) — manual verification needed; cannot automate in this environment

#### FE-5.3 Cross-Browser ✅ (code-level; live browser testing needed before launch)
- [x] Code-level audit complete: fixed Safari `backdrop-filter` — added `-webkit-backdrop-filter` to Nav.astro scroll handler. All other code uses standard, well-supported APIs (GSAP, Lenis, CSS custom properties, aspect-ratio, clamp, inert, clip-path — all Chrome 102+/Firefox 112+/Safari 15.5+). `text-wrap: balance` degrades gracefully in older browsers.
- [x] Chrome live testing — 2026-10-13: Playwright Chromium 141 + local Google Chrome (Lighthouse). Desktop 1440px + iPhone 13 viewport, EN + ES. 0 console errors, 0 axe violations, no horizontal scroll. Firefox/Edge still untested (low risk — no vendor-specific CSS beyond -webkit-backdrop-filter).
- [!] Safari live testing — GSAP backdrop-filter fix applied in code; verify visually in Safari.
- [!] iOS Safari + Android Chrome — verify smooth scroll (Lenis), language toggle, form submit on mobile browsers.

#### FE-5.4 Final Frontend Passes
- [x] 2026-10-13 BUG FIXED: `global.css` had an unlayered `*, *::before, *::after { margin:0; padding:0 }` reset. Unlayered CSS beats Tailwind v4's `@layer utilities`, so every `p-*`/`m-*`/`px-*` class was silently ignored (buttons had 0 padding, cards had 0 padding, section spacing collapsed). Tailwind preflight already resets margin/padding in `@layer base`; the custom reset was removed.
- [x] 2026-10-13 WCAG AA contrast pass (axe-core 4.10, 0 violations): footer text cream/40→/75 and cream/60→/75, footer eyebrow labels use new `gold-leaf-light` token (#DABF8A, 5.47:1 on deep-forest), captions charcoal/50→/75, charcoal/60→/75, charcoal/70→/80, Jersey Shore eyebrow deep-forest/60→/80.
- [x] 2026-10-13 Language toggle: visible text `EN | ES` was not part of the aria-label (WCAG 2.5.3 label-in-name) — replaced aria-label with an sr-only suffix. Toggle and first-paint script now also swap `<title>` to the Spanish title.
- [x] 2026-10-13 Footer "Connect" label made bilingual ("Conecta").
- [x] 2026-10-13 BUG FIXED: mobile drawer never slid into view (backdrop dimmed, panel stayed offscreen). `MobileMenu.astro` set an inline `transform: translateX(0)`, but Tailwind v4's `translate-x-full` uses the separate CSS `translate` property, which inline `transform` cannot override. Script now sets `panel.style.translate` directly. Verified in Playwright: panel at x=102–390 on iPhone 13, closes on link click, `inert` restored.
- [x] Animation timing pass — verified against `soul.md`: all easing uses `power2.inOut/out` ✅; 40px Y section reveals ✅; petal fall 8-12 petals (soul: 6-12) ✅; cursor 24px ✅; hero bloom sequence (bracts → headline → CTA) ✅; language crossfade implemented ✅; no animation >2.5s ✅
- [!] Proof all English copy: warm, confident, not corporate — needs user review
- [!] Proof all Spanish copy: Colombian cadence — needs user review (native speaker preferred)
- [x] `[PLACEHOLDER]` contact strings removed; contact details now come from `src/data/site.js` and are hidden until filled (2026-10-13)
- [x] Placeholder images are now auto-swapped by `SlotImage.astro` when the named file lands in `src/assets/content/` — no code change needed when photos arrive (2026-10-13)

---

## BACKEND TRACK

### BE-1 — SEO & Meta

- [x] Add JSON-LD structured data in `Layout.astro`: `LocalBusiness` schema
  - Used `@type: RealEstateAgent` (Schema.org subtype — more specific). PLACEHOLDER values for phone/email/sameAs pending Open Questions #2 & #3.
- [x] Create `public/robots.txt`
  - All crawlers allowed, sitemap URL: `https://manuelamaria.com/sitemap-index.xml`
- [x] Confirm `sitemap.xml` generates correctly on build (`@astrojs/sitemap` already configured ✅)
  - Verified: `sitemap-index.xml` + `sitemap-0.xml` present in `dist/` on clean build.
- [x] Create OG image placeholder at `public/images/og-image.jpg` (1200×630, rasterized from og-image.svg via sharp; `apple-touch-icon.png` 180×180 generated the same way — Layout.astro referenced both as .jpg/.png but only .svg existed → 404s)
  - Created branded SVG placeholder at `public/images/og-image.svg`. ⚠ Real 1200×630 JPG must be placed at `public/images/og-image.jpg` before launch — social platforms require JPG/PNG, not SVG. Blocked on Manuela's brand assets (Open Question #1).
- [x] Confirm each page has unique `<title>` and `<meta description>`
  - Confirmed in `Layout.astro` — bilingual defaults + per-page override via props. ✅

#### BE-1 new sub-tasks discovered
- [x] JSON-LD reads from `site.js`; placeholder values removed, optional fields omitted when empty (2026-10-13)
- [ ] Optional: drop a photo-based `og-image.jpg` in `src/assets/content/` — branded SVG-derived card is live in the meantime
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
- [x] FE visual design pass on `Contact.astro` complete — BougainvilleaPetal accents added to `.contact-info` (3 petals, aria-hidden); scroll-reveal via `.contact-info`/`.contact-form-wrapper` class selectors in `scrollReveal.js` (revealSplit); full typography + Netlify Forms wiring in place
- [ ] After deployment: test form submission in Netlify dashboard — verify email notification arrives
- [ ] After deployment: test honeypot — submit with bot-field filled, confirm it's filtered

---

### BE-3 — Performance

- [x] Run Lighthouse audit — 2026-10-13 (Lighthouse 12.8, local Chrome, `npm run preview`): mobile 100/100/100/100 (LCP 1.5s, CLS 0.007), desktop 100/100/100/100 (LCP 0.4s). Before fixes mobile was 87/96 — Google Fonts CSS was render-blocking (839ms); now loaded via preload→stylesheet swap with <noscript> fallback.
- [x] Bundle size audit: HTML 85.4KB / JS 135.5KB total / CSS 33.9KB. All JS chunks under 100KB (GSAP 68.4, ScrollTrigger 42.5, Lenis+Layout 17.6, animations 6, toggle 0.9). Three.js absent. Gzipped ~50KB JS, ~8KB CSS, ~18KB HTML — acceptable for GSAP+Lenis creative site.
- [x] Swap all raw `<img>` tags for Astro `<Image>` component
  - Audited `dist/index.html`: zero raw `<img>` tags. All images use `PlaceholderImage.astro` divs. ✅ Re-audit when real photos replace placeholders.
- [x] Add `loading="lazy"` to all below-fold images — not applicable yet; no `<img>` tags in HTML output.
- [x] Defer GSAP animation scripts below the fold (`type="module"` + dynamic import)
  - Confirmed: Astro bundles `<script>` in `Layout.astro` as deferred ES modules automatically. ✅
- [x] Confirm Google Fonts use `display=swap` ✅ (already set in `Layout.astro`)
- [x] Audit bundle — Three.js is NOT imported anywhere in the codebase. Zero bundle impact. ✅ Add dynamic import note when FE uses it.
- [x] TypeScript type check: 0 errors, 0 warnings (1 harmless hint about JSON-LD is:inline). ✅

#### BE-3 new sub-tasks discovered
- [x] Lighthouse verified (see BE-3 above) — all four categories 100 on mobile and desktop
- [ ] After real photos land: audit `<Image>` components — ensure all use `loading="lazy"` below fold, `loading="eager"` for hero
- [ ] When FE uses Three.js: wrap in `const THREE = await import('three');` — do NOT import at module top level

---

### BE-4 — Deployment

- [x] Git repo pushed — live at `https://github.com/Hashleemy/manu-web` (public, branch `master`)
- [!] Connect repo to Netlify — blocked on git push. Platform decision: **Netlify** (required for Netlify Forms; Vercel would need a different form backend). See comms.md.
- [x] Configure build: command `npm run build`, output dir `dist/`
  - Created `netlify.toml` with build config + security headers + asset cache headers.
- [!] Set up custom domain (answer Open Question #6) — blocked on user decision
- [x] HTTPS auto-enabled on Vercel/Netlify ✅
- [x] Configure form backend environment variables if using Formspree
  - Not needed — using Netlify Forms (zero env vars required). ✅
- [x] Pre-deploy: Playwright full-page screenshots of all 9 sections, desktop + mobile, EN + ES (2026-10-13). Re-run post-deploy against the live URL.
- [x] Smoke test (local preview, 2026-10-13): language toggle switches `<html lang>`, `<title>`, localStorage and content; all 5 nav anchors resolve; mobile drawer opens with aria-expanded=true; empty-form submit shows 3 bilingual errors. Real submission to Netlify Forms still needs the live deploy.

#### BE-4 new sub-tasks discovered
- [ ] USER ACTION REQUIRED: connect `Hashleemy/manu-web` to Netlify (base directory `molecular-meteorite`, build `npm run build`, publish `dist` — netlify.toml already in place). Git push is done.
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

## CONTENT LAYER — PUBLISH-READY STATE (2026-10-13) ✅

Goal: site can be deployed today; the only remaining work is dropping in Manuela's photos, words and contact details.

- [x] `src/data/site.js` — single file for contact, office, license, domain, service area and photo slots. Empty fields hide their element; no `[PLACEHOLDER]` text can reach a visitor (verified: 0 occurrences in `dist/index.html`).
- [x] `src/components/ui/SlotImage.astro` — looks for `src/assets/content/<file>`; renders an optimized responsive `<Image>` (480/768/1200w WebP) when present, labeled placeholder otherwise. Verified both paths in a build.
- [x] Listings + testimonials: all current entries flagged `sample: true`. Visible in `npm run dev` with a gold "Sample" badge; hidden in production. With no real listings the section shows a bilingual "listings coming soon" card with a contact CTA; with no real testimonials the section is omitted entirely.
- [x] Contact + Footer: phone / email / Instagram / Facebook / LinkedIn render only when set. Footer disclaimer assembled from brokerage + office + license + office address. Copyright year dynamic.
- [x] JSON-LD: optional fields included only when filled; `areaServed` from `site.serviceArea`.
- [x] Site URL: `site.domain` → Netlify `URL` env → fallback. Canonical, OG, sitemap and JSON-LD all follow it.
- [x] Root `netlify.toml` with `base = "molecular-meteorite"` — GitHub import needs no manual settings. Inner netlify.toml removed.
- [x] `content/CONTENT-CHECKLIST.md` + `content/QUESTIONS-FOR-MANUELA.md` (bilingual intake).
- [ ] USER: collect answers from Manuela → Claude rewrites `about.body`, `jerseyShore.body`, services copy in EN + ES.
- [ ] USER: drop photos into `src/assets/content/` (see its README for names and sizes).
- [ ] USER: fill `site.js` contact fields; replace sample listings/testimonials with real ones.
- [ ] USER: Netlify import → Forms notification email → test submission → (optional) domain.

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
