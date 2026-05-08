(function () {
  'use strict';

  /* ============================================================
     PAILLOTE PARADISE — main.js (Next.js version)
     Vanilla JS : menu, animations, formulaires
     Note : initComponents() supprimé — header/footer sont des
     composants React gérés par app/layout.tsx
     ============================================================ */

  /* ─── 1. Header au scroll ───────────────────────────────────── */
  function initHeader() {
    const header = document.getElementById('pp-header');
    if (!header || header.dataset.ppHeaderScrollBound === '1') return;
    header.dataset.ppHeaderScrollBound = '1';

    function updateHeader() {
      if (window.scrollY > 40) {
        header.classList.add('pp-header--scrolled');
        header.classList.remove('pp-header--transparent');
        header.classList.remove('pp-header--expanded');
      } else {
        header.classList.remove('pp-header--scrolled');
        header.classList.add('pp-header--transparent');
        header.classList.add('pp-header--expanded');
      }
    }

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }

  /* Menu mobile : géré entièrement par React (components/Header.tsx).
     Ne pas attacher de listeners ici : ClientScripts recharge main.js à
     chaque navigation et provoquerait des écouteurs multiples sur #pp-burger
     (double toggle → menu bloqué ou qui se referme tout de suite). */

  /* ─── 3. Lien actif dans la navigation ─────────────────────── */
  function setActiveNavLink() {
    const path = window.location.pathname.replace(/\/$/, '') || '/';
    document.querySelectorAll('.pp-nav__link, .pp-mobile-nav__link').forEach(function (link) {
      const href = link.getAttribute('href').replace(/\/$/, '') || '/';
      if (href === path) {
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  /* ─── 4. Annee dans le footer ───────────────────────────────── */
  function initYear() {
    const el = document.getElementById('pp-year');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ─── 5. Animations de revele (IntersectionObserver) ────────── */
  function initReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-pp-reveal]').forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    );

    document.querySelectorAll('[data-pp-reveal]').forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ─── 6. Compteurs animés ───────────────────────────────────── */
  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          animateCounter(entry.target);
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(function (el) { observer.observe(el); });
  }

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1800;
    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ─── 7. Smooth scroll sur ancres internes ──────────────────── */
  function initSmoothScroll() {
    if (window.__ppSmoothScrollBound) return;
    window.__ppSmoothScrollBound = true;
    document.addEventListener('click', function (e) {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      const offset = document.getElementById('pp-header') ? (window.scrollY > 40 ? 72 : 126) : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  }

  /* ─── 8. Formulaire de contact (API Next.js) ──────────────────── */
  function initContactForm() {
    const form = document.getElementById('pp-contact-form');
    if (!form) return;

    const success = document.getElementById('pp-form-success');
    const submitBtn = form.querySelector('[type="submit"]');

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Envoi en cours…';
      }

      try {
        const data = new FormData(form);
        const payload = {
          name: (data.get('prenom') || '') + ' ' + (data.get('nom') || ''),
          email: data.get('email'),
          phone: data.get('telephone'),
          subject: data.get('sujet'),
          message: data.get('message'),
          consent: true,
        };
        const res = await fetch('/api/contact', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        });

        if (res.ok) {
          form.reset();
          if (success) {
            success.style.display = 'block';
            success.focus();
          }
        } else {
          throw new Error('Erreur serveur');
        }
      } catch {
        alert('Une erreur est survenue. Merci de nous contacter par téléphone.');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Envoyer mon message';
        }
      }
    });
  }

  /* ─── 9. Filtres galerie ───────────────────────────────────── */
  function initGalleryFilters() {
    const filters = document.querySelectorAll('.pp-gallery-filter');
    const items = document.querySelectorAll('.pp-gallery-item');
    if (!filters.length || !items.length) return;

    filters.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filters.forEach(function (f) { f.classList.remove('is-active'); });
        btn.classList.add('is-active');

        const cat = btn.getAttribute('data-filter');
        items.forEach(function (item) {
          if (cat === 'all' || item.getAttribute('data-cat') === cat) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  /* ─── 10. FAQ accordion ─────────────────────────────────────── */
  function initFAQ() {
    document.querySelectorAll('.pp-faq details').forEach(function (detail) {
      const summary = detail.querySelector('summary');
      if (!summary) return;
      summary.addEventListener('click', function () {
        const isOpen = detail.open;
        detail.closest('.pp-faq').querySelectorAll('details[open]').forEach(function (d) {
          if (d !== detail) d.removeAttribute('open');
        });
        if (isOpen) detail.removeAttribute('open');
      });
    });
  }

  /* ─── 11. Onglets ───────────────────────────────────────────── */
  function initTabs() {
    document.querySelectorAll('[role="tablist"]').forEach(function (tablist) {
      const tabs = tablist.querySelectorAll('[role="tab"]');
      tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
          tabs.forEach(function (t) {
            t.setAttribute('aria-selected', 'false');
            const panel = document.getElementById(t.getAttribute('aria-controls'));
            if (panel) panel.hidden = true;
          });
          tab.setAttribute('aria-selected', 'true');
          const activePanel = document.getElementById(tab.getAttribute('aria-controls'));
          if (activePanel) activePanel.hidden = false;
        });
      });
    });
  }

  /* ─── Init globale ──────────────────────────────────────────── */
  function init() {
    initHeader();
    setActiveNavLink();
    initYear();
    initReveal();
    initCounters();
    initSmoothScroll();
    initContactForm();
    initGalleryFilters();
    initFAQ();
    initTabs();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
