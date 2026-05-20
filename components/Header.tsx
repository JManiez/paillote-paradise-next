'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { PP_PHONE_DISPLAY, PP_PHONE_E164 } from '../lib/publicPhone';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/restaurant', label: 'Bar à Tapas' },
  { href: '/bar', label: 'Bar & Cocktails' },
  { href: '/piscine-transats', label: 'Piscine \u0026 Transats' },
  { href: '/privatisation', label: 'Groupes \u0026 Privatisation' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/contact', label: 'Contact' },
];

/** key={pathname} sur le parent remonte le composant → menu fermé sans setState dans un effet. */
function MobileNavBundle({
  isActive,
}: {
  isActive: (href: string) => boolean;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [portalReady, setPortalReady] = useState(false);

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('pp-nav-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('pp-nav-open');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('pp-nav-open');
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  const mobileNavPanel = (
    <nav
      className={'pp-mobile-nav' + (mobileOpen ? ' is-open' : '')}
      id="pp-mobile-nav"
      role="navigation"
      aria-label="Navigation mobile"
      aria-hidden={!mobileOpen}
    >
      <button
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        className="pp-mobile-nav__backdrop"
        onClick={() => setMobileOpen(false)}
      />
      <div className="pp-mobile-nav__inner">
        <div className="pp-mobile-nav__head">
          <Link
            href="/"
            className="pp-mobile-nav__brand"
            onClick={() => setMobileOpen(false)}
            aria-label="Paillote Paradise — Accueil"
          >
            <Image
              src="/assets/images/logo-white.png"
              alt=""
              width={120}
              height={48}
              className="pp-mobile-nav__brand-img"
            />
          </Link>
          <button
            type="button"
            className="pp-mobile-nav__close"
            id="pp-mobile-close"
            aria-label="Fermer le menu"
            onClick={() => setMobileOpen(false)}
          >
            <span aria-hidden="true" />
          </button>
        </div>

        <p className="pp-mobile-nav__label">Menu</p>
        <ul className="pp-mobile-nav__links">
          {navLinks.map((link, index) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  'pp-mobile-nav__link' + (isActive(link.href) ? ' is-active' : '')
                }
                aria-current={isActive(link.href) ? 'page' : undefined}
                onClick={() => setMobileOpen(false)}
              >
                <span className="pp-mobile-nav__link-num" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="pp-mobile-nav__link-text">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="pp-mobile-nav__foot">
          <a href={`tel:${PP_PHONE_E164}`} className="pp-mobile-nav__phone">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.68a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            {PP_PHONE_DISPLAY}
          </a>
          <p className="pp-mobile-nav__hours">Juin – sept. · Mer.–Sam. 11h–19h · Dim. 12h–00h</p>
          <div className="pp-mobile-nav__ctas">
            <Link href="/piscine-transats" className="pp-btn pp-btn--outline-palm" onClick={() => setMobileOpen(false)}>
              Louer un transat
            </Link>
            <Link href="/contact" className="pp-btn pp-btn--primary" onClick={() => setMobileOpen(false)}>
              Réserver
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );

  return (
    <>
      <button
        type="button"
        className="pp-burger"
        id="pp-burger"
        aria-expanded={mobileOpen}
        aria-controls="pp-mobile-nav"
        aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        onClick={() => setMobileOpen((v) => !v)}
      >
        <span className="pp-burger__line"></span>
        <span className="pp-burger__line"></span>
        <span className="pp-burger__line"></span>
      </button>

      {portalReady ? createPortal(mobileNavPanel, document.body) : null}
    </>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 40);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  const headerClasses = [
    'pp-header',
    scrolled ? 'pp-header--scrolled' : 'pp-header--transparent pp-header--expanded',
  ].join(' ');

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <>
      <a href="#main" className="pp-skip-link">
        Aller au contenu principal
      </a>

      <header className={headerClasses} id="pp-header" role="banner">
        <div className="pp-header__top">
          <div className="pp-header__top-inner">
            <div className="pp-header__side pp-header__side--start">
              <a href={`tel:${PP_PHONE_E164}`} className="pp-header__tel">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.68a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path>
                </svg>
                Nous appeler
              </a>
            </div>

            <Link
              href="/"
              className="pp-header__logo"
              aria-label="Paillote Paradise - Accueil"
            >
              <Image
                src="/assets/images/logo-white.png"
                alt="Paillote Paradise"
                className="pp-header__logo-img"
                width={148}
                height={100}
                priority
              />
            </Link>

            <div className="pp-header__side pp-header__side--end">
              <Link href="/contact" className="pp-btn pp-btn--primary pp-btn--xs pp-header__reserve">
                Réserver
              </Link>
              <div className="pp-header__tools" aria-label="Actions">
                <a
                  href={`tel:${PP_PHONE_E164}`}
                  className="pp-header__tel-icon"
                  aria-label={`Appeler la Paillote — ${PP_PHONE_DISPLAY}`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.68a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </a>
                <MobileNavBundle key={pathname} isActive={isActive} />
              </div>
            </div>
          </div>
        </div>

        <nav
          className="pp-nav pp-header__nav-row"
          role="navigation"
          aria-label="Navigation principale"
        >
          <div className="pp-nav__inner">
            {navLinks.map((link, i) => (
              <span key={link.href} style={{ display: 'contents' }}>
                <Link
                  href={link.href}
                  className={
                    'pp-nav__link' + (isActive(link.href) ? ' pp-nav__link--active' : '')
                  }
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
                {i < navLinks.length - 1 && (
                  <span className="pp-nav__sep" aria-hidden="true">
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}
