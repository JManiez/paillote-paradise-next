/* ============================================================
   PAILLOTE PARADISE — scroll-cinema.js
   Animations cinematiques : Hero pin, Sunday mask reveal, Bento
   Necessite : GSAP + ScrollTrigger
   ============================================================ */
(function () {
  'use strict';

  // Garde : GSAP doit etre charge
  if (typeof window.gsap === 'undefined') {
    console.warn('[PP] GSAP non charge, scroll-cinema desactive');
    return;
  }

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

  // Enregistrer ScrollTrigger
  if (typeof window.ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // ───────────────────────────────────────────────────────────
  // 1. Hero : pin + split title + zoom image
  // ───────────────────────────────────────────────────────────
  function initHeroPin() {
    if (reduced || !isDesktop) return;
    const hero = document.querySelector('.pp-hero');
    if (!hero) return;
    const img = hero.querySelector('.pp-hero__img');
    const title = hero.querySelector('.pp-hero__title');
    if (!title || !img) return;

    // Wrap chaque ligne du titre dans un span pour les animer separement
    const lines = title.querySelectorAll('br');
    if (lines.length) {
      const html = title.innerHTML.split('<br>').map(function (chunk) {
        return '<span class="pp-hero__title-line">' + chunk.trim() + '</span>';
      }).join('');
      title.innerHTML = html;
    }
    const lineEls = title.querySelectorAll('.pp-hero__title-line');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: '+=80%',
        scrub: 1.2,
        pin: false, // pin desactive pour ne pas casser la nav, on fait juste un scrub
      }
    });

    if (lineEls.length >= 2) {
      tl.to(lineEls[0], { xPercent: -18, opacity: 0.7, ease: 'none' }, 0)
        .to(lineEls[1], { xPercent: 18, opacity: 0.7, ease: 'none' }, 0);
    }
    tl.to(img, { scale: 1.12, ease: 'none' }, 0);
  }

  // ───────────────────────────────────────────────────────────
  // 2. Bento : reveal en cascade au scroll
  // ───────────────────────────────────────────────────────────
  function initBentoReveal() {
    const cells = document.querySelectorAll('.pp-bento__cell');
    if (!cells.length) return;
    if (reduced) {
      cells.forEach(function (c) { c.style.opacity = 1; });
      return;
    }

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
      }
    });
  }

  // ───────────────────────────────────────────────────────────
  // 3. Sunday : SVG mask radial qui s'ouvre au scroll
  // ───────────────────────────────────────────────────────────
  function initSundayMask() {
    const frame = document.querySelector('.pp-sunday__img-frame');
    if (!frame) return;
    if (reduced) {
      frame.style.setProperty('--pp-mask', '100%');
      return;
    }

    gsap.fromTo(frame,
      { '--pp-mask': '0%' },
      {
        '--pp-mask': '100%',
        ease: 'power2.out',
        scrollTrigger: {
          trigger: frame,
          start: 'top 85%',
          end: 'top 35%',
          scrub: 1,
        }
      }
    );
  }

  // ───────────────────────────────────────────────────────────
  // 4. Compte a rebours United (prochain dimanche 20h)
  // ───────────────────────────────────────────────────────────
  function initSundayCountdown() {
    const els = document.querySelectorAll('[data-pp-countdown]');
    if (!els.length) return;

    function nextSundayNoon() {
      const now = new Date();
      const target = new Date(now);
      const day = now.getDay(); // 0=dim, 1=lun..
      let daysToAdd = (7 - day) % 7;
      target.setHours(12, 0, 0, 0);
      // Si on est dimanche apres minuit, on vise le suivant
      if (day === 0 && now.getHours() >= 24) daysToAdd = 7;
      else if (daysToAdd === 0 && now.getHours() >= 12) daysToAdd = 7;
      target.setDate(now.getDate() + daysToAdd);
      return target;
    }

    function update() {
      const target = nextSundayNoon();
      const diff = target - new Date();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      els.forEach(function (el) {
        const numEl = el.querySelector('.pp-countdown__num');
        const labelEl = el.querySelector('.pp-countdown__label');
        const isCompact = el.dataset.ppCountdown === 'compact';
        if (days > 0) {
          if (numEl) numEl.textContent = days;
          if (labelEl) {
            if (isCompact) labelEl.textContent = days > 1 ? 'jours' : 'jour';
            else labelEl.textContent = days > 1 ? 'jours avant United' : 'jour avant United';
          }
        } else {
          if (numEl) numEl.textContent = hours;
          if (labelEl) {
            if (isCompact) labelEl.textContent = hours > 1 ? 'heures' : 'heure';
            else labelEl.textContent = hours > 1 ? 'heures restantes' : 'heure restante';
          }
        }
      });
    }

    update();
    setInterval(update, 60000);
  }

  // ───────────────────────────────────────────────────────────
  // 5. Signature SVG dessinee au scroll
  // ───────────────────────────────────────────────────────────
  function initSignatureDraw() {
    const els = document.querySelectorAll('.pp-philosophy__signature, .pp-stroke-draw');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-drawn'); });
      return;
    }
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-drawn');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    els.forEach(function (el) { obs.observe(el); });
  }

  // ───────────────────────────────────────────────────────────
  // 6. Particules de sel — generation dynamique
  // ───────────────────────────────────────────────────────────
  function initParticles() {
    if (reduced) return;
    document.querySelectorAll('[data-pp-particles]').forEach(function (host) {
      const count = parseInt(host.getAttribute('data-pp-particles'), 10) || 18;
      for (let i = 0; i < count; i++) {
        const dot = document.createElement('span');
        dot.className = 'pp-particles__dot';
        dot.style.left = (Math.random() * 100) + '%';
        dot.style.animationDuration = (12 + Math.random() * 14) + 's';
        dot.style.animationDelay = (-Math.random() * 18) + 's';
        const scale = 0.6 + Math.random() * 1.4;
        dot.style.transform = 'scale(' + scale + ')';
        host.appendChild(dot);
      }
    });
  }

  // ───────────────────────────────────────────────────────────
  // Init
  // ───────────────────────────────────────────────────────────
  function init() {
    initHeroPin();
    initBentoReveal();
    initSundayMask();
    initSundayCountdown();
    initSignatureDraw();
    initParticles();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
