/**
 * FE-3.5 — Parallax effects
 * Hero stems: 0.4× scroll speed · Jersey Shore image: 0.2× scroll speed
 * Uses gsap.matchMedia() so reduced-motion users get no parallax.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
  const stemLeft  = document.getElementById('hero-stem-left');
  const stemRight = document.getElementById('hero-stem-right');
  const hero      = document.getElementById('home');

  if (stemLeft && stemRight && hero) {
    gsap.to([stemLeft, stemRight], {
      yPercent: -30,
      ease: 'none',
      scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.8 },
    });
  }

  const jerseyImage = document.querySelector('#jersey-shore .jersey-image');
  if (jerseyImage) {
    gsap.to(jerseyImage, {
      yPercent: -12,
      ease: 'none',
      scrollTrigger: { trigger: '#jersey-shore', start: 'top bottom', end: 'bottom top', scrub: 1 },
    });
  }
});
