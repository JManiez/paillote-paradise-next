(function () {
  'use strict';

  /* ============================================================
     PAILLOTE PARADISE — main.js
     Inits idempotentes + réagit à `pp:page` (navigation App Router).
     ============================================================ */

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

  function setActiveNavLink() {
    const path = window.location.pathname.replace(/\/$/, '') || '/';
    document.querySelectorAll('.pp-nav__link, .pp-mobile-nav__link').forEach(function (link) {
      link.removeAttribute('aria-current');
      const href = (link.getAttribute('href') || '').replace(/\/$/, '') || '/';
      if (href === path) {
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  function initYear() {
    const el = document.getElementById('pp-year');
    if (el) el.textContent = String(new Date().getFullYear());
  }

  function initReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-pp-reveal]').forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }
    if (!window.__ppRevealObserver) {
      window.__ppRevealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              window.__ppRevealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
      );
    }
    const obs = window.__ppRevealObserver;
    document.querySelectorAll('[data-pp-reveal]').forEach(function (el) {
      if (el.dataset.ppRevealBound === '1') return;
      el.dataset.ppRevealBound = '1';
      obs.observe(el);
    });
  }

  function initCounters() {
    if (!window.__ppCounterObserver) {
      window.__ppCounterObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            window.__ppCounterObserver.unobserve(entry.target);
            animateCounter(entry.target);
          });
        },
        { threshold: 0.5 }
      );
    }
    const obs = window.__ppCounterObserver;
    document.querySelectorAll('[data-count]').forEach(function (el) {
      if (el.dataset.ppCountBound === '1') return;
      el.dataset.ppCountBound = '1';
      obs.observe(el);
    });
  }

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'), 10);
    if (Number.isNaN(target)) return;
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1800;
    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = String(Math.round(eased * target)) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

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
      const header = document.getElementById('pp-header');
      const offset = header ? (window.scrollY > 40 ? 72 : 126) : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  }

  function initContactForm() {
    const form = document.getElementById('pp-contact-form');
    if (!form) return;

    if (form.__ppSubmitAbort) {
      try {
        form.__ppSubmitAbort.abort();
      } catch {}
    }
    const ac = new AbortController();
    form.__ppSubmitAbort = ac;

    const success = document.getElementById('pp-form-success');
    const submitBtn = form.querySelector('[type="submit"]');

    form.addEventListener(
      'submit',
      async function (e) {
        e.preventDefault();
        const consentInput = form.querySelector('[name="consent"]');
        const consent = !!(consentInput && consentInput.checked);
        if (!consent) {
          alert('Merci de cocher la case relative au traitement de vos données.');
          return;
        }

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'Envoi en cours…';
        }

        try {
          const data = new FormData(form);
          const payload = {
            name: ((data.get('prenom') || '') + ' ' + (data.get('nom') || '')).trim(),
            email: data.get('email'),
            phone: data.get('telephone'),
            subject: data.get('sujet'),
            message: data.get('message'),
            consent: consent,
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
        } catch (err) {
          if (err && err.name === 'AbortError') return;
          alert('Une erreur est survenue. Merci de nous contacter par téléphone.');
        } finally {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Envoyer mon message';
          }
        }
      },
      { signal: ac.signal }
    );
  }

  function initGalleryFilters() {
    const filters = document.querySelectorAll('.pp-gallery-filter');
    const items = document.querySelectorAll('.pp-gallery-item');
    if (!filters.length || !items.length) return;

    filters.forEach(function (btn) {
      if (btn.dataset.ppGalleryFilterBound === '1') return;
      btn.dataset.ppGalleryFilterBound = '1';
      btn.addEventListener('click', function () {
        filters.forEach(function (f) {
          f.classList.remove('is-active');
        });
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

  function initFAQ() {
    document.querySelectorAll('.pp-faq details').forEach(function (detail) {
      const summary = detail.querySelector('summary');
      if (!summary || summary.dataset.ppFaqBound === '1') return;
      summary.dataset.ppFaqBound = '1';
      summary.addEventListener('click', function () {
        const isOpen = detail.open;
        const root = detail.closest('.pp-faq');
        if (root) {
          root.querySelectorAll('details[open]').forEach(function (d) {
            if (d !== detail) d.removeAttribute('open');
          });
        }
        if (isOpen) detail.removeAttribute('open');
      });
    });
  }

  function initTabs() {
    document.querySelectorAll('[role="tablist"]').forEach(function (tablist) {
      if (tablist.dataset.ppTabsBound === '1') return;
      tablist.dataset.ppTabsBound = '1';
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

  function initPageOnly() {
    setActiveNavLink();
    initYear();
    initReveal();
    initCounters();
    initContactForm();
    initGalleryFilters();
    initFAQ();
    initTabs();
  }

  function initOnce() {
    initHeader();
    initSmoothScroll();
  }

  function bootFirst() {
    if (window.__ppMainBootDone) {
      window.dispatchEvent(new CustomEvent('pp:page'));
      return;
    }
    window.__ppMainBootDone = true;
    initOnce();
    window.dispatchEvent(new CustomEvent('pp:page'));
  }

  if (!window.__ppMainPageListener) {
    window.__ppMainPageListener = true;
    window.addEventListener('pp:page', initPageOnly);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootFirst);
  } else {
    bootFirst();
  }
})();
