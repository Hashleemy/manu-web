# Content Checklist — what the site still needs before it is "hers"

The site is build-complete and publish-ready. Everything below is **content only**:
each item has a placeholder today, and nothing breaks if it stays empty. Fill items in
as they arrive from Manuela; no code changes are needed for any of them.

Legend: ☐ waiting · ☑ done · (draft) = Claude wrote a draft that Manuela should confirm or replace

---

## 1. Photos → drop into `molecular-meteorite/src/assets/content/`

Use the **exact file name**. The site picks the file up on the next build. Send the largest original; the build resizes and compresses.

| ☐ | File name | Appears in | Shape / minimum size | Direction for the photographer |
|---|---|---|---|---|
| ☐ | `manuela-portrait.jpg` | About — organic oval frame | Portrait 3:4 · ≥ 1200 × 1600 px | Warm, natural light, relaxed. Plain or outdoor background. Head-and-shoulders to waist-up. Shown in a soft oval, so keep her centered with space around. |
| ☐ | `jersey-shore.jpg` | Jersey Shore section | Portrait 4:5 · ≥ 1200 × 1500 px | A coastline, boardwalk, or Victorian-street scene from one of her towns. Golden hour. Ideally one she took herself. |
| ☐ | `og-image.jpg` | Link preview (iMessage, WhatsApp, Facebook, Instagram DMs) | Landscape · exactly 1200 × 630 px | Optional. A branded card already exists; replace it with a photo of her + her name if she wants a face on link previews. |
| ☐ | `listing-1.jpg` … `listing-6.jpg` | Featured Listings cards | Landscape 4:3 · ≥ 1200 × 900 px | Exterior hero shot per listing. Number matches the `id` in `src/data/listings.js`. |

Optional later: a hero background photo (not planned; the hero is illustrated by design).

---

## 2. Contact & identity → `molecular-meteorite/src/data/site.js`

| ☐ | Field | Status | Notes |
|---|---|---|---|
| ☐ | `phone` | empty → hidden | Display format, e.g. `(732) 555-0100` |
| ☐ | `email` | empty → hidden | The address she wants leads sent to. Also used for Netlify form notifications. |
| ☐ | `instagram` | empty → hidden | Full URL |
| ☐ | `facebook` | empty → hidden | Full URL |
| ☐ | `linkedin` | empty → hidden | Full URL, optional |
| ☐ | `office` | empty | BHHS office/franchise name, e.g. `Fox & Roach, REALTORS®` — goes in the footer disclaimer |
| ☐ | `officeAddress` | empty → hidden | NJ advertising rules: the broker's office should be identifiable |
| ☐ | `licenseNumber` | empty → hidden | NJ salesperson license number |
| ☐ | `domain` | empty → Netlify URL | e.g. `https://manuelamaria.com` once a domain is bought |
| ☑ | `serviceArea` | (draft) | Asbury Park · Spring Lake · Manasquan · Long Branch · Red Bank — confirm the towns she actually works |

---

## 3. Words → `molecular-meteorite/src/i18n/en.js` and `es.js`

Both languages are co-equal; whenever English changes, Spanish changes with it.

| ☐ | Section | Key(s) | Status | What's needed from Manuela |
|---|---|---|---|---|
| ☐ | Hero | `hero.headline`, `hero.cta` | (draft) "Your Home Awaits." | Confirm or give a line she loves |
| ☐ | About — biography | `about.heading`, `about.body` | (draft, two paragraphs, invented facts) | Answers to `QUESTIONS-FOR-MANUELA.md` §A — Claude rewrites both languages |
| ☐ | Services | `services.*` | (draft) Buying · Selling · Relocation & Investment | Are these her three? Any specialty (first-time buyers, luxury, Latino families, investors)? |
| ☐ | Jersey Shore | `jerseyShore.body` | (draft) | Her own words on the towns: coffee spots, streets, what she tells newcomers |
| ☐ | Listings | `src/data/listings.js` | 6 **sample** entries (hidden on live site) | Real listings: address, price, beds, baths, sq ft, MLS/brokerage URL, photo |
| ☐ | Testimonials | `src/data/testimonials.js` | 5 **sample** entries (hidden on live site) | 3–6 real client quotes with permission, name as they want it shown, town |
| ☐ | Contact | `contact.subheading` | (draft) "I respond within 24 hours." | Confirm the promise or change it |
| ☐ | Footer | `footer.tagline` | (draft) "Tending to your most important garden." | Confirm |
| ☑ | Footer disclaimer | built from `site.js` | automatic | Fills in once `office` / `licenseNumber` / `officeAddress` are set |

---

## 4. Launch steps (one-time, by the site owner)

1. Netlify → **Add new site → Import from GitHub → `Hashleemy/manu-web`**. All settings come from the root `netlify.toml`; just click Deploy.
2. Netlify → **Forms** → confirm the `contact` form was detected → **Notifications** → add Manuela's email.
3. Send one test message through the live form; confirm it arrives.
4. When a domain is bought: Netlify → Domain management → add it, then set `domain` in `site.js` so canonical URLs, sitemap and link previews use it.

---

## How to preview with sample content

`npm run dev` always shows the sample listings and testimonials (with a gold **Sample** badge).
`npm run build` hides them unless `PUBLIC_SHOW_SAMPLE_CONTENT=true` is set — so a Netlify deploy never shows invented homes or quotes.
