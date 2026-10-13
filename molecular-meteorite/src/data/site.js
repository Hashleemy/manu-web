/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONTENT — the one file to fill in before launch.
 *
 *  Every field below is read by the components. Leave a field as '' (empty)
 *  and the matching element is hidden on the live site — nothing breaks and no
 *  "[PLACEHOLDER]" text ever reaches a visitor.
 *
 *  Bilingual copy (bio, section headings, service blurbs) lives in
 *  src/i18n/en.js and src/i18n/es.js. Photos go in src/assets/content/ using
 *  the exact file names listed under `images` — see content/CONTENT-CHECKLIST.md
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const site = {
  // ── Identity ──
  name: 'Manuela Maria',
  brokerage: 'Berkshire Hathaway HomeServices',
  office: '',           // Office / franchise name, e.g. 'Fox & Roach, REALTORS®'
  officeAddress: '',    // Office street address (NJ advertising rules want the broker office identifiable)
  licenseNumber: '',    // NJ real estate license #, shown in the footer if provided

  // ── Live site URL (no trailing slash). Leave '' to use the Netlify-provided URL. ──
  domain: '',           // e.g. 'https://manuelamaria.com'

  // ── Contact ──
  phone: '',            // Display format, e.g. '(732) 555-0100'
  email: '',            // e.g. 'manuela@bhhs.com'
  instagram: '',        // Full URL, e.g. 'https://instagram.com/manuela.homes'
  facebook: '',         // Full URL
  linkedin: '',         // Full URL (optional)

  // ── Where she works — shown as pills in the Jersey Shore section ──
  serviceArea: ['Asbury Park', 'Spring Lake', 'Manasquan', 'Long Branch', 'Red Bank'],

  // ── Photo slots. Drop a file with EXACTLY this name into src/assets/content/ ──
  //    The site picks it up automatically on the next build; until then a
  //    placeholder frame shows. Accepted: .jpg .jpeg .png .webp
  images: {
    portrait:    { file: 'manuela-portrait.jpg',  altEn: 'Manuela Maria',                       altEs: 'Manuela Maria' },
    jerseyShore: { file: 'jersey-shore.jpg',      altEn: 'The Jersey Shore coastline',          altEs: 'La costa de Jersey Shore' },
    // Social-share preview image (1200×630). Falls back to the branded SVG card.
    og:          { file: 'og-image.jpg',          altEn: 'Manuela Maria — Jersey Shore Real Estate', altEs: 'Manuela Maria — Bienes Raíces en Jersey Shore' },
  },
};

/** Build an absolute site URL at build time. Order: site.domain → Netlify URL → local fallback. */
export function resolveSiteUrl() {
  return (
    site.domain ||
    process.env.URL ||               // set by Netlify during builds
    process.env.DEPLOY_PRIME_URL ||
    'https://manuelamaria.netlify.app'
  );
}

/** Phone number as a tel: link — strips everything except digits and a leading +. */
export function telHref(phone) {
  return 'tel:' + phone.replace(/[^\d+]/g, '');
}

/** Social links that have been filled in, in display order. */
export function socialLinks() {
  return [
    { key: 'instagram', url: site.instagram, label: 'Instagram' },
    { key: 'facebook',  url: site.facebook,  label: 'Facebook' },
    { key: 'linkedin',  url: site.linkedin,  label: 'LinkedIn' },
  ].filter((s) => s.url);
}
