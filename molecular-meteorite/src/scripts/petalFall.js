/**
 * FE-3.2 — Petal Fall
 * On scroll past hero: spawns 8-12 BougainvilleaPetal SVGs that float downward,
 * rotate, and fade out. Cleaned up after animation ends to avoid DOM bloat.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduced) {
  const PETAL_SVG = `<svg viewBox="0 0 40 56" width="28" height="40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M 20 52 C 6 42 2 24 20 4 C 38 24 34 42 20 52 Z" fill="#E8B4B8" opacity="0.85"/>
  <path d="M 20 50 C 20 32 20 18 20 6" stroke="rgba(255,255,255,0.35)" stroke-width="0.8" stroke-linecap="round" fill="none"/>
</svg>`;

  const PETAL_COLORS = ['#E8B4B8', '#D4929A', '#CC7A8F', '#C9A96E'];

  let triggered = false;

  function spawnPetals() {
    if (triggered) return;
    triggered = true;

    const count = Math.floor(Math.random() * 5) + 8; // 8–12 petals

    for (let i = 0; i < count; i++) {
      const petal = document.createElement('div');
      petal.setAttribute('aria-hidden', 'true');
      petal.style.cssText = `
        position: fixed;
        top: -60px;
        left: ${Math.random() * 90 + 5}vw;
        width: 28px;
        height: 40px;
        pointer-events: none;
        z-index: 9999;
      `;
      petal.innerHTML = PETAL_SVG.replace('#E8B4B8', PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)]);
      document.body.appendChild(petal);

      const delay = i * (Math.random() * 0.4 + 0.1);
      const duration = Math.random() * 2 + 2.5;
      const drift = (Math.random() - 0.5) * 40;

      gsap.fromTo(
        petal,
        { y: -60, rotation: Math.random() * 30 - 15, opacity: 0, x: 0 },
        {
          y: window.innerHeight + 80,
          rotation: Math.random() * 360 + 180,
          opacity: 1,
          x: drift,
          duration,
          delay,
          ease: 'none',
          onStart() { gsap.to(petal, { opacity: 0, duration: 0.4, delay: duration + delay - 0.5 }); },
          onComplete() { petal.remove(); },
        }
      );
    }
  }

  // Trigger once when user scrolls past hero section
  ScrollTrigger.create({
    trigger: '#about',
    start: 'top 90%',
    once: true,
    onEnter: spawnPetals,
  });
}
