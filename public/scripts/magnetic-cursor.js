/* ============================================================
   PAILLOTE PARADISE — magnetic-cursor.js
   Un seul listener document (évite fuites si scripts rechargés).
   ============================================================ */
(function () {
  'use strict';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isDesktop = window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches;
  if (reduced || !isDesktop) return;
  if (window.__ppMagneticDelegated) return;
  window.__ppMagneticDelegated = true;

  const STRENGTH = 0.35;
  const RADIUS = 90;
  let raf = null;
  const state = new WeakMap();

  function schedule() {
    if (raf) return;
    raf = requestAnimationFrame(function () {
      document.querySelectorAll('.pp-magnetic').forEach(function (el) {
        const s = state.get(el) || { tx: 0, ty: 0 };
        el.style.transform = 'translate(' + s.tx + 'px,' + s.ty + 'px)';
      });
      raf = null;
    });
  }

  function onMove(e) {
    document.querySelectorAll('.pp-magnetic').forEach(function (el) {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist > RADIUS) {
        state.set(el, { tx: 0, ty: 0 });
      } else {
        state.set(el, { tx: dx * STRENGTH, ty: dy * STRENGTH });
      }
    });
    schedule();
  }

  document.addEventListener('mousemove', onMove, { passive: true });
})();
