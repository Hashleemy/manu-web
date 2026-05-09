# COMMS LOG
> Decision log for the Manu project. All agents: log decisions and blockers here.

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
