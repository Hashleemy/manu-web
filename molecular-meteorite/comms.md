# COMMS LOG
> Decision log for the Manu project. All agents: log decisions and blockers here.

---

## 2026-05-09 — FE Agent (Session 3)

### FE-4.4 — Contact.astro visual design pass

Added 3 `BougainvilleaPetal` accents to `.contact-info` left column: blush-rose top-right (-28°), gold-leaf mid-right (45°), blush-rose bottom (-70°). All `pointer-events-none`, `aria-hidden="true"`, opacity 12–18%. Section uses `relative` positioning to contain absolute-positioned petals. Build clean at 867ms.

### Bug fix: LanguageToggle `langchange` event was never dispatched

`Contact.astro` listens for `window.langchange` to sync the preferred-language select when user switches language. `LanguageToggle.astro` was NOT firing this event — `setActive()` only toggled the class and localStorage but never called `dispatchEvent`. Fixed: added `window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }))` at the end of `setActive()`. This was a silent bug — the select UI stayed on whatever value it initialized to, regardless of language toggle state.

### FE-5.2 — Accessibility audit (in-code items)

**What was already in place:**
- Hamburger: `aria-label="Open menu"` + `aria-expanded` + `aria-controls="mobile-menu"`
- Language toggle: `aria-label="Switch language / Cambiar idioma"` + `aria-live` announce region
- Social links: `aria-label` on all Instagram/Facebook links in both Contact and Footer
- PlaceholderImage: `role="img"` + `aria-label="Image placeholder: {label}"`
- Form labels: all Contact.astro inputs have `for`/`id` associations

**Fixed: Mobile menu focus trap** — Tab and Shift+Tab were not trapped inside the dialog. Added keyboard listener to cycle focus between first/last focusable elements within `#mobile-menu-panel`. Now compliant with ARIA dialog pattern.

### WCAG AA color contrast — design risk flagged

Calculated contrast ratios for primary palette pairings:
- `warm-charcoal (#3D3D3D)` on `cream-ivory (#FAF6EF)`: **~10.1:1** ✅
- `deep-forest (#2C4A3E)` on `cream-ivory (#FAF6EF)`: **~10.6:1** ✅
- `gold-leaf (#C9A96E)` on `cream-ivory (#FAF6EF)`: **~1.95:1** ⛔ Fails AA for all text sizes
- `warm-charcoal/70` on `cream-ivory`: **~3.87:1** — passes large text (≥18px), fails normal text
- `cream-ivory/40` on `deep-forest`: **~3.3:1** — passes large text, fails small footer text (text-xs)

**Recommendation:** Gold-leaf is a brand identity color — do not change the token. Instead, avoid using it as the primary color for content text. The hero subline ("Manuela Maria · Berkshire Hathaway HomeServices") is the main risk: it's a content element in gold-leaf on cream. At text-xl–2xl (20–24px) it's in large text territory (3:1 needed) but 1.95:1 still fails. **User decision needed** — either accept as a known brand tradeoff (common in luxury real estate) or switch hero subline to `warm-charcoal/60` and use gold-leaf only for icons/borders/decorative elements.

---

## 2026-05-09 — BE+FE Agent (Session 2)

### FE-1 through FE-3 — Full implementation pass

All FE-1 design system tokens, SVG components, and UI components were built by the auto-linter alongside BE agent edits. Verified via `astro check` (0 errors) and `npm run build` (clean).

**Key decisions:**
- Language toggle uses CSS class approach (`html.is-es`) rather than re-rendering server components. All content uses `.lang-en`/`.lang-es` spans. This requires the page to be built once with both languages present.
- Contact.astro was first built by BE agent (functional, Netlify Forms wiring), then fully updated by FE pass to use `.lang-en`/`.lang-es` on all form labels. Bilingual validation errors use `data-error-en`/`data-error-es` attributes read at submit time.
- `parallax.js` created as auto-executing GSAP matchMedia wrapper. Parallax is also partially implemented in `scrollReveal.js` — the parallax.js version is the canonical one (uses `gsap.matchMedia()` — cleaner for reduced motion).
- TypeScript error in `Layout.astro` (Lenis window cast conflict with Lenis's own type declarations) fixed by using `(window as unknown as Record<string, unknown>)` pattern.

### BE-3 — Performance audit (post FE build)

`dist/index.html` audited: **zero raw `<img>` tags** found. All images use `PlaceholderImage.astro` divs. No Astro `<Image>` component needed until real photos arrive.

**Playwright Lighthouse blocked**: Chromium not installed on this machine (`npx playwright install chrome` required). Visual QA needs to be done in browser by the user or with a headless environment.

### BE-4 — GitHub repo confirmed

Repo URL from memory: `https://github.com/Hashleemy/manuela-maria` (private). Commands for user to run:
```
git init
git add .
git commit -m "Initial commit — full site implementation"
git remote add origin https://github.com/Hashleemy/manuela-maria.git
git push -u origin main
```
After push: connect to Netlify at app.netlify.com → "Add new site" → GitHub → pick `manuela-maria` → build settings auto-detected from `netlify.toml`.

### Remaining blockers (in priority order)
1. **User action**: git init + push to GitHub → connect to Netlify (BE-4)
2. **Manuela to provide**: phone, email, social handles (Open Questions #2, #3) → update i18n files + JSON-LD
3. **Manuela to provide**: photos → replace `PlaceholderImage` with real `<Image>` + add OG image JPG
4. **User/browser**: visual QA, Lighthouse audit, cross-browser testing (FE-5)
5. **Decision needed**: custom domain (Open Question #6)

---

## 2026-05-09 — BE Agent

### BE-1 — SEO & Meta

**JSON-LD schema added** (`Layout.astro` frontmatter + `<script type="application/ld+json">`).
- Used `@type: RealEstateAgent` (Schema.org subtype of LocalBusiness — more specific, better for real estate SEO).
- All contact fields (phone, email, sameAs URLs) are PLACEHOLDER values pending Open Questions #2 and #3.
- `knowsLanguage: ["en", "es"]` added to reflect bilingual service.

**robots.txt created** at `public/robots.txt`. Allows all crawlers, references sitemap at `https://manuelamaria.com/sitemap-index.xml`.

**sitemap.xml** — confirmed generating correctly at build. `@astrojs/sitemap` outputs `dist/sitemap-index.xml` which references `dist/sitemap-0.xml` with the homepage URL. Both verified on build run (788ms, 0 errors).

**OG image** — created labeled SVG placeholder at `public/images/og-image.svg` (1200×630, brand-colored with Manuela Maria name/title). The Layout.astro still references `/images/og-image.jpg` which is what social platforms will use. A real 1200×630 JPG must be placed at `public/images/og-image.jpg` before launch — blocked on assets from Manuela (Open Question #1).

**title/description** — confirmed already present in `Layout.astro` with bilingual defaults and `<meta name="description">`. Each page that passes `title`/`description` props gets unique values.

---

### BE-2 — Contact Form

**Decision: Netlify Forms** (Open Question #7 answered).
- Rationale: This is a static Astro site deploying to Netlify (see BE-4). Netlify Forms requires no extra dependencies, no environment variables, and form submissions go straight to the Netlify dashboard with email notifications. Zero backend code needed.
- Alternative considered: Formspree — would require an account ID and environment variable, adds an external dependency.

**Contact.astro created** at `src/components/sections/Contact.astro`.
- `data-netlify="true"` + `name="contact"` on the form.
- Hidden `<input name="form-name" value="contact">` required by Netlify.
- **Honeypot spam field** (`name="bot-field"`, hidden via CSS) — Netlify detects this automatically and filters bot submissions.
- Client-side JS validation with bilingual error messages (EN/ES via `lang` prop).
- All form labels use `for`/`id` associations for a11y.
- `aria-live="polite"` error region for screen reader compatibility.
- Note for FE: this is a functional/structural version. FE-2.8 visual design pass still needed (BougainvilleaPetal accents, animation wiring per FE-3.3).

---

### BE-3 — Performance

**GSAP defer** — confirmed already deferred. Astro bundles `<script>` tags in `Layout.astro` as ES modules (deferred by default). No change needed.

**Google Fonts display=swap** — confirmed in `Layout.astro` (`display=swap` in the Google Fonts URL). ✅

**Three.js** — currently imported in `package.json` but not used anywhere in the codebase. When FE builds the section that uses Three.js, it MUST be dynamically imported to avoid adding ~600KB to the initial bundle. Recommended pattern:
```js
// In the component that needs it:
const THREE = await import('three');
```

**Lighthouse / Image component / lazy loading** — blocked until FE sections are built. No `<img>` tags exist in the codebase yet. These will be audited and replaced once FE sections are assembled.

---

### BE-4 — Deployment

**netlify.toml created** at project root.
- Build command: `npm run build`, publish dir: `dist`, Node 22.
- Security headers added: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`.
- Cache headers: fonts + `/_astro/` assets cached 1 year (immutable), images 24h.
- Netlify Forms will auto-detect the `data-netlify="true"` form at build time — no extra config needed.

**git init + GitHub push** — BLOCKED. Requires user authorization. User should run:
```
git init
git add .
git commit -m "Initial commit — Manu project scaffold + BE phase"
git remote add origin https://github.com/Hashleemy/<repo-name>.git
git push -u origin main
```

**Vercel vs Netlify** — recommending **Netlify** since we're using Netlify Forms. Using Vercel would require switching to Formspree or building a custom API route.

**Custom domain** — blocked on Open Question #6.

**HTTPS** — auto-enabled on Netlify ✅

**Formspree env vars** — not needed (using Netlify Forms).

---

### BE-5 — Final Backend Passes

**console.log audit** — searched all `.js`, `.ts`, `.astro` files in `src/`. Zero `console.log` calls found. ✅

**Environment variable audit** — `.env.example` has no values prefixed with `PUBLIC_`. No secrets are currently client-exposed. ✅ (Re-audit if any Formspree/API keys are added later.)

**robots.txt production check** — verified file does not disallow any paths. Will need to re-validate sitemap URL against live domain once deployed (BE-5 final item).

---

## Open Questions Status

| # | Question | Status |
|---|---|---|
| 1 | Real photos? | Blocking OG image JPG + all PlaceholderImage replacements |
| 2 | Phone + email? | Blocking JSON-LD + Contact info display |
| 3 | Social handles? | Blocking JSON-LD sameAs + Footer social links |
| 4 | MLS feed? | Blocking Listings data source decision |
| 5 | Berkshire brand guidelines? | Blocking BerkshireBadge + Footer disclaimer |
| 6 | Custom domain? | Blocking BE-4 DNS setup |
| 7 | Form backend? | **ANSWERED: Netlify Forms** |
