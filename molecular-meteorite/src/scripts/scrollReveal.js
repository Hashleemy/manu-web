/**
 * FE-3.3 — Section entrance animations + FE-3.5 Parallax
 * Uses GSAP ScrollTrigger. All animations respect prefers-reduced-motion.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ── Helper ────────────────────────────────────────────────────────────────────
function reveal(targets, vars = {}, triggerEl) {
  if (reduced) return;
  const elements = typeof targets === 'string' ? document.querySelectorAll(targets) : targets;
  if (!elements.length) return;

  gsap.fromTo(
    elements,
    { opacity: 0, y: vars.fromY ?? 40 },
    {
      opacity: 1,
      y: 0,
      duration: vars.duration ?? 0.7,
      stagger: vars.stagger ?? 0,
      ease: vars.ease ?? 'power2.out',
      scrollTrigger: {
        trigger: triggerEl ?? elements[0],
        start: 'top 82%',
        once: true,
      },
    }
  );
}

function revealSplit(leftEl, rightEl, triggerEl) {
  if (reduced || !leftEl || !rightEl) return;

  // Left: slide in from left
  gsap.fromTo(
    leftEl,
    { opacity: 0, x: -40 },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: { trigger: triggerEl ?? leftEl, start: 'top 80%', once: true },
    }
  );

  // Right: fade up
  gsap.fromTo(
    rightEl,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.15,
      ease: 'power2.out',
      scrollTrigger: { trigger: triggerEl ?? leftEl, start: 'top 80%', once: true },
    }
  );
}

// ── About (FE-2.3) ────────────────────────────────────────────────────────────
revealSplit(
  document.querySelector('#about .about-image'),
  document.querySelector('#about .about-content'),
  document.getElementById('about')
);

// ── Services (FE-2.4) — stagger L → C → R ────────────────────────────────────
reveal('.service-card', { stagger: 0.15 }, document.getElementById('services'));

// ── Jersey Shore (FE-2.5) ─────────────────────────────────────────────────────
reveal(
  [document.querySelector('#jersey-shore .jersey-image'), document.querySelector('#jersey-shore .jersey-content')].filter(Boolean),
  { stagger: 0.12 },
  document.getElementById('jersey-shore')
);

// ── Listings (FE-2.6) — row-by-row stagger ───────────────────────────────────
reveal('.listing-card', { stagger: 0.1 }, document.getElementById('listings'));

// ── Testimonials (FE-2.7) — scattered scatter-in ─────────────────────────────
const testimonialCards = document.querySelectorAll('.testimonial-card');
if (!reduced && testimonialCards.length) {
  const offsets = [{ x: -20, y: 30 }, { x: 0, y: 40 }, { x: 20, y: 25 }, { x: -15, y: 35 }, { x: 15, y: 30 }];
  testimonialCards.forEach((card, i) => {
    const off = offsets[i % offsets.length];
    gsap.fromTo(
      card,
      { opacity: 0, x: off.x, y: off.y },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.75,
        ease: 'power2.out',
        scrollTrigger: { trigger: card, start: 'top 85%', once: true },
      }
    );
  });
}

// ── Contact (FE-2.8) — left fades in, form slides up ─────────────────────────
revealSplit(
  document.querySelector('#contact > div > div > div:first-child'),
  document.querySelector('#contact > div > div > div:last-child'),
  document.getElementById('contact')
);

// ── FE-3.5 Parallax ─────────────────────────────────────────────────────────
if (!reduced) {
  // Hero stems — 0.4× scroll speed
  const stemLeft  = document.getElementById('hero-stem-left');
  const stemRight = document.getElementById('hero-stem-right');

  if (stemLeft) {
    gsap.to(stemLeft, {
      y: -80,
      ease: 'none',
      scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: true },
    });
  }
  if (stemRight) {
    gsap.to(stemRight, {
      y: -60,
      ease: 'none',
      scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: true },
    });
  }

  // Jersey Shore background image — 0.2× scroll speed
  const jerseyImg = document.querySelector('#jersey-shore .jersey-image');
  if (jerseyImg) {
    gsap.to(jerseyImg, {
      y: -30,
      ease: 'none',
      scrollTrigger: { trigger: '#jersey-shore', start: 'top bottom', end: 'bottom top', scrub: true },
    });
  }
}
