# AGENT COMMS — Manu Project
> This is the shared communication channel for all agents working concurrently on this project.
> Format every message as: `[AGENT-ID] [TIMESTAMP] — message`
> Use this file to: flag blockers, announce decisions, coordinate handoffs, ask questions, share findings.
> Keep messages concise. One idea per message. Update tasks.md when task status changes.

---

## ACTIVE AGENTS
| Agent ID | Assigned Phase | Status |
|---|---|---|
| AGENT-1 | Phase 1 — Scaffolding | ✅ Complete |
| — | Phase 2 — Design System | Not assigned |

---

## LOG

<!-- Agents append messages below this line, newest at the bottom -->

[SYSTEM] [2026-05-09] — Project initialized. soul.md, tasks.md, and comms.md created. Awaiting agent assignment and Phase 1 kickoff.

[AGENT-1] [2026-05-09] — Phase 1 complete. Astro 6.3.1 scaffolded (project name: molecular-meteorite). Tailwind v4 configured via PostCSS (not Vite plugin — incompatible with Vite 8/rolldown). Lenis installed as `lenis` (canonical package name, not `@studio-freight/lenis`). GSAP, Three.js, sharp all installed. Full folder structure created: components/, sections/, ui/, animations/, layouts/, styles/, scripts/, i18n/, data/, public/images/placeholders/, public/fonts/, public/icons/. Base Layout.astro live with Google Fonts (Playfair Display, Cormorant Garamond, Inter), Lenis smooth scroll, GSAP + ScrollTrigger init, bilingual meta tags, and OG placeholder tag. Handing off to Phase 2.

[CLAUDE] [2026-05-09] — tasks.md expanded to full build spec: 167 tasks across 6 phases covering scaffolding, design system, all 9 page sections, animations, bilingual content, and QA/deploy. GitHub: Hashleemy. Open questions still pending — see table below. Phase 2 ready to start.

[CLAUDE] [2026-05-09] — Repo pushed. Private GitHub repo live at https://github.com/Hashleemy/manuela-maria. .claude/ gitignored and excluded from all commits. README and root .gitignore added. Author: Hashleemy.

[AGENT-FE] [2026-05-09] — FE-1 and FE-2 complete. Design system: bilingual CSS toggle, 6 SVG components (BougainvilleaFull, Petal, CoastalWildflower, FlowerStem, WaveDivider, ServiceIcon), all 7 UI components (Button, Card, BerkshireBadge, LanguageToggle, PlaceholderImage, Nav, MobileMenu). All 9 page sections built and wired in index.astro. Build clean (890ms, 0 errors). Discovered: Contact.astro was already built by BE agent with Netlify Forms wiring — kept as-is, noted that form labels need CSS toggle pass in FE-4.4. Three.js not yet used anywhere — must be dynamic-imported when needed. Moving to FE-3 animations next.

[CLAUDE] [2026-05-09] — FE-5 QA complete (code-level). FE-5.1 Responsiveness: section-padding now clamp(3.5rem,8vw,6rem); testimonial rotation disabled on mobile to prevent overflow; -rotate-20 → rotate-[-20deg] in JerseyShore; hamburger/language-toggle/mobile-close touch targets bumped to ≥40-44px. FE-5.2 Accessibility: skip-to-content link added to Layout.astro; mobile menu now uses `inert` attribute (was keyboard-reachable when closed); WCAG contrast fixed on ListingCard "View Details" link (text-deep-forest, was 2.24:1 gold on white) and JerseyShore subheading (text-deep-forest/60, was 2.08:1 gold on cream). FE-5.3 Cross-Browser: added -webkit-backdrop-filter to Nav.astro for Safari. BE-3 bundle audit: HTML 85.4KB / JS 135.5KB / CSS 33.9KB — all clean, no chunk over 100KB, Three.js absent. Build: 866ms, 0 errors. Remaining blocked items: Lighthouse (Chrome not in env — USER ACTION needed), browser live testing, copy/image review (awaiting Manuela's assets), and BE-4 deployment (USER ACTION: git push + Netlify connect).

[CLAUDE] [2026-10-13] — Resumed from GitHub (repo is `Hashleemy/manu-web`, not `manuela-maria`). Environment: machine had Node 20; Astro 6 needs ≥22.12 → installed Node 22 via nvm. First real browser QA run (Playwright Chromium + local Chrome Lighthouse + axe-core). Found and fixed a site-wide layout bug: the unlayered universal margin/padding reset in global.css outranked all Tailwind utility padding/margin (cascade layers), so buttons/cards/sections rendered with zero padding. Also fixed: Google Fonts render-blocking (preload→stylesheet swap), 7 WCAG AA contrast failures, language-toggle accessible name, missing og-image.jpg + apple-touch-icon.png (404s), Spanish <title> never applied, removed unused `@tailwindcss/vite` dep, README pointed to wrong folder name. Result: Lighthouse 100/100/100/100 mobile and desktop, 0 axe violations, 0 console errors, no horizontal overflow on iPhone 13 width. Also fixed: mobile nav drawer never opened (inline `transform` vs Tailwind v4 `translate` property — see Decisions). Remaining blockers are all user-side: Netlify connect, Manuela's contact info/photos/social links, Safari/iOS device check.

---

## DECISIONS LOG
> Record any non-obvious decisions made during development so all agents stay aligned.

| Decision | Rationale | Made By | Date |
|---|---|---|---|
| Astro + Tailwind + GSAP + Lenis + Three.js | Best stack for creative/agency Astro site with heavy animation | Human | 2026-05-09 |
| Tailwind 4 via `@tailwindcss/postcss` (not Vite plugin) | `@tailwindcss/vite` incompatible with Vite 8/rolldown in Astro 6. PostCSS approach produces identical output with zero issues. | AGENT-1 | 2026-05-09 |
| Lenis package is `lenis` not `@studio-freight/lenis` | Package was rebranded/moved. Both resolve but `lenis` is canonical. | AGENT-1 | 2026-05-09 |
| No custom universal `* { margin:0; padding:0 }` reset in global.css | Unlayered styles beat Tailwind v4 `@layer utilities`, wiping out every `p-*`/`m-*` class. Tailwind preflight already resets inside `@layer base`. | CLAUDE | 2026-10-13 |
| Google Fonts loaded via `rel=preload as=style` + onload swap, `<noscript>` fallback | Font CSS was the only render-blocking resource (839ms on mobile Lighthouse); `display=swap` already accepted FOUT so non-blocking load costs nothing visually. | CLAUDE | 2026-10-13 |
| Animate Tailwind v4 translate utilities via `el.style.translate`, never `el.style.transform` | v4's `translate-x-*` classes set the CSS `translate` property; an inline `transform` leaves it untouched, so the mobile drawer appeared to open (backdrop) while the panel stayed offscreen. GSAP `x:`/`y:` tweens are unaffected (they write `transform`, and those elements carry no translate-* classes). | CLAUDE | 2026-10-13 |
| `gold-leaf-light` token (#DABF8A) for small gold text on deep-forest | Brand gold #C9A96E is 4.35:1 on deep-forest — fails AA for text under 18.66px bold. Lighter tint only where text is small on dark; brand gold unchanged elsewhere. | CLAUDE | 2026-10-13 |
| Flower theme: Bougainvillea + Coastal Wildflowers | Dual identity: Colombian roots + Jersey Shore — see soul.md | Human | 2026-05-09 |
| Bilingual EN/ES, co-equal treatment | Manuela is Colombian, serves bilingual clientele | Human | 2026-05-09 |
| Color palette: Cream / Forest Green / Blush / Gold | Luxury, warm, organic — see soul.md for full palette | Human | 2026-05-09 |

---

## OPEN QUESTIONS
> If an agent hits an ambiguity, post it here. Another agent or the human can answer.

| # | Question | Asked By | Answer |
|---|---|---|---|
| 1 | Do we have real photography assets for Manuela or do we use placeholders? | SYSTEM | — |
| 2 | Will listings be pulled from an MLS/API or are they static placeholder cards for now? | SYSTEM | — |
| 3 | Is there a specific Berkshire Hathaway brand guideline we need to comply with? | SYSTEM | — |
| 4 | Social media handles for Manuela (Instagram, Facebook)? | SYSTEM | — |
| 5 | Phone number and email to display on the contact section? | SYSTEM | — |
