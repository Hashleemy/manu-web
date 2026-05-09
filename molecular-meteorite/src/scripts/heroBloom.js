/**
 * FE-3.1 — Hero Bloom animation (page load)
 * Targets: #hero-flower .bract, .stem, #hero-headline, #hero-subline, #hero-cta
 * Reduced motion: skips animation, renders final state immediately.
 */
import { gsap } from 'gsap';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const bracts = document.querySelectorAll('#hero-flower .bract');
const stem   = document.querySelector('#hero-flower .stem');
const headline = document.getElementById('hero-headline');
const subline  = document.getElementById('hero-subline');
const cta      = document.getElementById('hero-cta');

if (reduced || !bracts.length) {
  // Reduced motion: ensure everything is visible in final state
  gsap.set([headline, subline, cta].filter(Boolean), { opacity: 1, y: 0 });
} else {
  // Set initial states — hidden before animation begins
  gsap.set(bracts, { scale: 0, opacity: 0, svgOrigin: '100 100' });
  gsap.set(stem, { scaleY: 0, transformOrigin: 'bottom center', opacity: 0 });
  gsap.set([headline, subline, cta].filter(Boolean), { opacity: 0, y: 28 });

  const tl = gsap.timeline({ delay: 0.15 });

  // Petals bloom outward
  tl.to(bracts, {
    scale: 1,
    opacity: 1,
    duration: 1.5,
    stagger: 0.09,
    ease: 'power2.inOut',
  })
  // Stem grows up simultaneously
  .to(stem, {
    scaleY: 1,
    opacity: 1,
    duration: 0.9,
    ease: 'power1.out',
  }, 0.2)
  // Headline fades in after flower starts opening
  .to(headline, {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: 'power2.out',
  }, '-=0.9')
  .to(subline, {
    opacity: 1,
    y: 0,
    duration: 0.55,
    ease: 'power2.out',
  }, '-=0.55')
  .to(cta, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: 'power2.out',
  }, '-=0.4');
}
