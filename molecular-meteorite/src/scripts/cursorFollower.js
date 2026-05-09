/**
 * FE-3.4 — Cursor Follower
 * A BougainvilleaPetal SVG that trails the cursor with ~80ms lag.
 * Disabled on touch devices. Rotates based on movement velocity.
 */
import { gsap } from 'gsap';

// Touch devices: skip entirely
if (window.matchMedia('(hover: none)').matches) {
  // No mouse available — abort
} else if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const cursor = document.createElement('div');
  cursor.setAttribute('aria-hidden', 'true');
  cursor.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 24px;
    height: 34px;
    pointer-events: none;
    z-index: 99999;
    will-change: transform;
    opacity: 0;
    transform: translate(-50%, -50%);
  `;
  cursor.innerHTML = `<svg viewBox="0 0 40 56" width="24" height="34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M 20 52 C 6 42 2 24 20 4 C 38 24 34 42 20 52 Z" fill="#E8B4B8" opacity="0.75"/>
    <path d="M 20 50 C 20 32 20 18 20 6" stroke="rgba(255,255,255,0.35)" stroke-width="0.8" stroke-linecap="round" fill="none"/>
  </svg>`;
  document.body.appendChild(cursor);

  const xTo = gsap.quickTo(cursor, 'x', { duration: 0.08, ease: 'power1.out' });
  const yTo = gsap.quickTo(cursor, 'y', { duration: 0.08, ease: 'power1.out' });

  let lastX = 0;
  let lastY = 0;
  let visible = false;

  window.addEventListener('mousemove', (e) => {
    const vx = e.clientX - lastX;
    const vy = e.clientY - lastY;

    xTo(e.clientX);
    yTo(e.clientY);

    // Rotate petal based on movement direction
    const angle = Math.atan2(vy, vx) * (180 / Math.PI) + 90;
    gsap.to(cursor, { rotation: angle, duration: 0.15, ease: 'power1.out' });

    lastX = e.clientX;
    lastY = e.clientY;

    if (!visible) {
      gsap.to(cursor, { opacity: 1, duration: 0.3 });
      visible = true;
    }
  });

  document.addEventListener('mouseleave', () => {
    gsap.to(cursor, { opacity: 0, duration: 0.2 });
    visible = false;
  });
}
