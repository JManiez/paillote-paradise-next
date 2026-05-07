/* ============================================================
   PAILLOTE PARADISE — magnetic-cursor.js
   Curseur magnetique sur les CTA marques .pp-magnetic
   ============================================================ */
(function () {
  'use strict';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isDesktop = window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches;
  if (reduced || !isDesktop) return;

  const STRENGTH = 0.35;
  const RADIUS = 90;

  function bind(el) {
    let raf = null;
    let tx = 0, ty = 0;

    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist > RADIUS) {
        reset();
        return;
      }
      tx = dx * STRENGTH;
      ty = dy * STRENGTH;
      schedule();
    }

    function reset() {
      tx = 0;
      ty = 0;
      schedule();
    }

    function schedule() {
      if (raf) return;
      raf = requestAnimationFrame(function () {
        el.style.transform = 'translate(' + tx + 'px,' + ty + 'px)';
        raf = null;
      });
    }

    el.addEventListener('mouseleave', reset);
    document.addEventListener('mousemove', onMove);
  }

  function init() {
    document.querySelectorAll('.pp-magnetic').forEach(bind);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
