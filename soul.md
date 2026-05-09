# SOUL OF THE PROJECT — Manuela Maria

> This document is the creative heartbeat of the website. Every agent, every decision, every line of code should serve what is written here. When in doubt, return to this file.

---

## WHO SHE IS

**Manuela Maria** is not just a real estate agent. She is a guide — warm, determined, deeply personal. Colombian by heart, Jersey Shore by craft. She carries the color of bougainvillea and the salt of the Atlantic in the same breath. She speaks two languages fluently and leads with both: the emotional warmth of Spanish and the precision of English. She works with Berkshire Hathaway, one of the most trusted names in real estate, and she brings that trust down to earth — into the sand, the neighborhoods, the homes that families will grow inside of.

Her clients don't just buy houses. They find homes. She makes sure of that.

---

## THE FEELING WE ARE BUILDING

When someone lands on this website, they should feel:

1. **Arrived.** Like stepping into a beautifully kept garden on a warm morning. Unhurried. Safe.
2. **Seen.** The site speaks English and Spanish with equal grace — no second-class language, no asterisk. Both are primary.
3. **Trusted.** Berkshire Hathaway's prestige is present but never cold. The brand is a foundation, not a cage.
4. **Delighted.** Flowers move. Petals drift. The site is alive — gently, not aggressively.

---

## VISUAL IDENTITY

### Color Palette

| Name | Hex | Use |
|---|---|---|
| Cream Ivory | `#FAF6EF` | Page background, cards |
| Deep Forest | `#2C4A3E` | Primary text, nav, footer |
| Blush Rose | `#E8B4B8` | Accents, hover states, flowers |
| Gold Leaf | `#C9A96E` | CTA buttons, Berkshire badge border, links |
| Petal White | `#FFFFFF` | Card backgrounds, overlays |
| Warm Charcoal | `#3D3D3D` | Body text |

### Flower Theme — The Species

The floral identity is a duet:

- **Bougainvillea** — Manuela's Colombian roots. Vivid, tropical, papery thin petals in deep rose and magenta. These appear in the hero, as cursor followers, and as decorative accents throughout.
- **Coastal Wildflowers** — The Jersey Shore. White and blush wildflowers, soft grasses, sea lavender. These appear in section dividers, backgrounds, and scroll-triggered animations.

Together they say: *she brought warmth from somewhere beautiful and planted it here.*

### Typography

- **Headings:** `Playfair Display` — elegant serif, timeless luxury
- **Subheadings / accents:** `Cormorant Garamond` — softer, more romantic
- **Body:** `Inter` — clean, accessible, modern
- **Spanish text:** same fonts — no differentiation. Both languages live at the same visual level.

### Layout Principles

- Generous whitespace. Let things breathe.
- Asymmetric layouts — never rigid grids. Flowers don't grow in rows.
- Sections bleed into each other softly using organic curves (SVG wave dividers or border-radius clips).
- Photography: warm-toned, golden hour if possible. Jersey Shore coastline, charming homes, neighborhood scenes.

---

## ANIMATION PHILOSOPHY

> Animations should feel like wind through a garden — present, alive, but never demanding attention.

### Rules
1. **Nothing snaps.** Every transition eases in and out. Use GSAP `power2.inOut` or `expo.out` as defaults.
2. **Scroll tells the story.** As the user scrolls, the site unfolds like turning pages in a beautiful book.
3. **Petals fall, they do not pop.** Flower animations are drifting, soft, organic — never bouncy or cartoonish.
4. **The cursor is invited.** A small bougainvillea petal follows the mouse cursor — subtle, delicate, ~24px, trails with slight lag.
5. **Load sequence matters.** On page load: the hero blooms. A single flower opens from center — petals unfurl using GSAP timeline, then the headline fades in, then the CTA.

### Key Animations
- **Hero Bloom:** SVG magnolia/bougainvillea opens from bud to full flower on load (2.5s timeline)
- **Petal Fall:** On scroll past hero, 6–12 individual petals float downward across the viewport, rotating gently, fading out at the bottom
- **Section Reveals:** Each section's content fades up with a 40px Y offset, staggered children, triggered by ScrollTrigger
- **Parallax Stems:** Background flower stems in the hero move at 0.4x scroll speed, creating depth
- **Card Hover:** Property/service cards lift 6px, gain a soft box-shadow, and a small petal appears in the corner
- **Language Toggle:** Content crossfades on language switch — no hard cut

---

## CONTENT VOICE

### English
Warm, confident, aspirational. Not corporate. Not cold. Think: a trusted friend who happens to be a real estate expert.

> *"Your next home is out there. I'll help you find it."*

### Spanish
Equally warm, slightly more personal. Colombian cadence — the kind of Spanish that feels like family.

> *"Tu próximo hogar te espera. Yo te ayudo a encontrarlo."*

---

## SECTIONS & INTENT

### Hero
Full-screen. Flower bloom animation. Her name, title, and a single powerful line. CTA: **Find Your Home** / **Encuentra tu Hogar**. Background: soft gradient from cream to blush with parallax flower stems.

### About Manuela
Two columns: her photo (warm, professional, smiling — not stiff) and her story. Bilingual. Mention Colombia, mention the Shore, mention her commitment. Berkshire Hathaway logo appears here, tastefully.

### Services
Three cards: **Buying**, **Selling**, **Relocation & Investment**. Each card has a flower icon, a short bilingual description, and a hover animation.

### The Jersey Shore & Beyond
A section celebrating the area she serves. Evocative copy about the communities — Asbury Park, Spring Lake, Manasquan, Long Branch, Red Bank and beyond. A subtle illustrated map or coastal image with flower overlays.

### Featured Listings
A clean grid of property cards. Placeholder-ready. Each card: photo, price, address, beds/baths, a "View Details" link.

### Testimonials
Client quotes presented as petals — each quote card is soft, rounded, slightly rotated like a flower petal scattered across the section. Scroll-triggered reveal.

### Contact
Split layout: left side has a friendly invitation (bilingual), right side has the form. Fields: Name, Email, Phone (optional), Message, Preferred Language (EN/ES). Below the form: phone number, email, Instagram, Facebook.

### Footer
Dark forest green background. Logo in gold. Berkshire Hathaway required legal disclaimer. Quick nav links. Copyright. A single bougainvillea illustration in the corner.

---

## WHAT TO AVOID

- Cold, corporate layouts
- Generic stock-photo real estate clichés (keys on a desk, shaking hands)
- Hard lines and rigid grids — this site breathes
- Any animation that lasts more than 3 seconds or demands the user wait
- Treating Spanish as secondary — it is co-equal
- Cluttered nav — keep it minimal: Home, About, Services, Listings, Contact + Lang Toggle

---

## THE ONE SENTENCE

> *This website is a garden — and Manuela is the one who tends it, grows it, and hands you the keys to your own.*
