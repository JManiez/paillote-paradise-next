/* ============================================================
   PAILLOTE PARADISE — scroll-cinema.js
   GSAP + ScrollTrigger (optionnel) + effets sans GSAP.
   Réinitialisé sur l'événement personnalisé `pp:page` (navigation Next).
   ============================================================ */
(function () {
  'use strict';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

  function killGsapTriggers() {
    if (typeof window.ScrollTrigger !== 'undefined' && window.ScrollTrigger.getAll) {
      window.ScrollTrigger.getAll().forEach(function (t) {
        t.kill();
      });
    }
  }

  // ─── GSAP : Hero, Bento, Sunday mask ────────────────────────
  function initGsapBlock() {
    if (typeof window.gsap === 'undefined') {
      return;
    }
    killGsapTriggers();
    if (typeof window.ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    if (reduced || !isDesktop) return;

    function initHeroPin() {
      const hero = document.querySelector('.pp-hero');
      if (!hero) return;
      const img = hero.querySelector('.pp-hero__img');
      const title = hero.querySelector('.pp-hero__title');
      if (!title || !img) return;

      if (!title.querySelector('.pp-hero__title-line')) {
        const lines = title.querySelectorAll('br');
        if (lines.length) {
          const html = title.innerHTML.split('<br>').map(function (chunk) {
            return '<span class="pp-hero__title-line">' + chunk.trim() + '</span>';
          }).join('');
          title.innerHTML = html;
        }
      }
      const lineEls = title.querySelectorAll('.pp-hero__title-line');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: '+=80%',
          scrub: 1.2,
          pin: false,
        },
      });

      if (lineEls.length >= 2) {
        tl.to(lineEls[0], { xPercent: -18, opacity: 0.7, ease: 'none' }, 0)
          .to(lineEls[1], { xPercent: 18, opacity: 0.7, ease: 'none' }, 0);
      }
      tl.to(img, { scale: 1.12, ease: 'none' }, 0);
    }

    function initBentoReveal() {
      const cells = document.querySelectorAll('.pp-bento__cell');
      if (!cells.length) return;
      gsap.set(cells, { opacity: 0, y: 60 });
      gsap.to(cells, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: { each: 0.12, from: 'start' },
        scrollTrigger: {
          trigger: '.pp-bento',
          start: 'top 80%',
        },
      });
    }

    function initSundayMask() {
      const frame = document.querySelector('.pp-sunday__img-frame');
      if (!frame) return;
      gsap.fromTo(
        frame,
        { '--pp-mask': '0%' },
        {
          '--pp-mask': '100%',
          ease: 'power2.out',
          scrollTrigger: {
            trigger: frame,
            start: 'top 85%',
            end: 'top 35%',
            scrub: 1,
          },
        }
      );
    }

    initHeroPin();
    initBentoReveal();
    initSundayMask();
  }

  // ─── Compte à rebours (sans GSAP) ──────────────────────────
  function initSundayCountdown() {
    if (window.__ppCountdownInterval) {
      clearInterval(window.__ppCountdownInterval);
      window.__ppCountdownInterval = null;
    }
    const els = document.querySelectorAll('[data-pp-countdown]');
    if (!els.length) return;

    function nextSundayNoon() {
      const now = new Date();
      const target = new Date(now);
      target.setHours(12, 0, 0, 0);
      const day = now.getDay();
      let daysToAdd = (7 - day) % 7;
      if (daysToAdd === 0 && now.getTime() >= target.getTime()) {
        daysToAdd = 7;
      }
      target.setDate(now.getDate() + daysToAdd);
      return target;
    }

    function update() {
      const target = nextSundayNoon();
      const diff = target.getTime() - new Date().getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      els.forEach(function (el) {
        const numEl = el.querySelector('.pp-countdown__num');
        const labelEl = el.querySelector('.pp-countdown__label');
        const isCompact = el.dataset.ppCountdown === 'compact';
        if (days > 0) {
          if (numEl) numEl.textContent = String(days);
          if (labelEl) {
            if (isCompact) labelEl.textContent = days > 1 ? 'jours' : 'jour';
            else labelEl.textContent = days > 1 ? 'jours avant United' : 'jour avant United';
          }
        } else {
          if (numEl) numEl.textContent = String(Math.max(0, hours));
          if (labelEl) {
            if (isCompact) labelEl.textContent = hours > 1 ? 'heures' : 'heure';
            else labelEl.textContent = hours > 1 ? 'heures restantes' : 'heure restante';
          }
        }
      });
    }

    update();
    window.__ppCountdownInterval = window.setInterval(update, 60000);
  }

  // ─── Signature SVG (IntersectionObserver) ──────────────────
  function initSignatureDraw() {
    const sel = '.pp-philosophy__signature, .pp-stroke-draw';
    const els = document.querySelectorAll(sel);
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) {
        el.classList.add('is-drawn');
      });
      return;
    }
    if (!window.__ppSigObserver) {
      window.__ppSigObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              e.target.classList.add('is-drawn');
              window.__ppSigObserver.unobserve(e.target);
            }
          });
        },
        { threshold: 0.4 }
      );
    }
    const obs = window.__ppSigObserver;
    els.forEach(function (el) {
      if (el.dataset.ppSigObs === '1') return;
      el.dataset.ppSigObs = '1';
      if (!el.classList.contains('is-drawn')) obs.observe(el);
    });
  }

  // ─── Particules ────────────────────────────────────────────
  function initParticles() {
    if (reduced) return;
    document.querySelectorAll('[data-pp-particles]').forEach(function (host) {
      if (host.dataset.ppParticlesSeeded === '1') return;
      host.dataset.ppParticlesSeeded = '1';
      const count = parseInt(host.getAttribute('data-pp-particles'), 10) || 18;
      for (let i = 0; i < count; i++) {
        const dot = document.createElement('span');
        dot.className = 'pp-particles__dot';
        dot.style.left = Math.random() * 100 + '%';
        dot.style.animationDuration = 12 + Math.random() * 14 + 's';
        dot.style.animationDelay = -Math.random() * 18 + 's';
        const scale = 0.6 + Math.random() * 1.4;
        dot.style.transform = 'scale(' + scale + ')';
        host.appendChild(dot);
      }
    });
  }

  function initReducedMotionStatic() {
    if (!reduced) return;
    document.querySelectorAll('.pp-bento__cell').forEach(function (c) {
      c.style.opacity = '1';
    });
    const frame = document.querySelector('.pp-sunday__img-frame');
    if (frame) frame.style.setProperty('--pp-mask', '100%');
  }

  function boot() {
    initReducedMotionStatic();
    initGsapBlock();
    initSundayCountdown();
    initSignatureDraw();
    initParticles();
  }

  if (!window.__ppScrollPageListener) {
    window.__ppScrollPageListener = true;
    window.addEventListener('pp:page', boot);
  }

  function initialBoot() {
    if (window.__ppScrollDomBootDone) {
      queueMicrotask(boot);
      return;
    }
    window.__ppScrollDomBootDone = true;
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', boot);
    } else {
      boot();
    }
  }
  initialBoot();
})();
