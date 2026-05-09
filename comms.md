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

---

## DECISIONS LOG
> Record any non-obvious decisions made during development so all agents stay aligned.

| Decision | Rationale | Made By | Date |
|---|---|---|---|
| Astro + Tailwind + GSAP + Lenis + Three.js | Best stack for creative/agency Astro site with heavy animation | Human | 2026-05-09 |
| Tailwind 4 via `@tailwindcss/postcss` (not Vite plugin) | `@tailwindcss/vite` incompatible with Vite 8/rolldown in Astro 6. PostCSS approach produces identical output with zero issues. | AGENT-1 | 2026-05-09 |
| Lenis package is `lenis` not `@studio-freight/lenis` | Package was rebranded/moved. Both resolve but `lenis` is canonical. | AGENT-1 | 2026-05-09 |
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
