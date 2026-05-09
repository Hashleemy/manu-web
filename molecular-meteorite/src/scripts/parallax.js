import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Parallax effects:
 * - Hero stems move at 0.4× scroll speed
 * - Jersey Shore image moves at 0.2× scroll speed
 */
export function initParallax() {
  const mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    const stemLeft = document.getElementById('hero-stem-left');
    const stemRight = document.getElementById('hero-stem-right');
    const hero = document.getElementById('home');

    if (stemLeft && stemRight && hero) {
      gsap.to([stemLeft, stemRight], {
        yPercent: -30, // moves up by 30% of element height as scroll progresses
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8,
        },
      });
    }

    // Jersey Shore image parallax
    const jerseyImage = document.querySelector('#jersey-shore .jersey-image');
    if (jerseyImage) {
      gsap.to(jerseyImage, {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: {
          trigger: '#jersey-shore',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }
  });
}
