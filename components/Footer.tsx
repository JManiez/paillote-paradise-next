import Link from 'next/link';
import Image from 'next/image';
import { PP_PHONE_DISPLAY, PP_PHONE_E164 } from '../lib/publicPhone';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pp-footer" role="contentinfo">
      <div className="pp-container">
        <div className="pp-footer__grid">
          <div className="pp-footer__brand">
            <div className="pp-footer__brand-logo">
              <Image
                src="/assets/images/logo-transparent-blue.png"
                alt="Paillote Paradise"
                className="pp-footer__logo-img"
                width={148}
                height={100}
              />
              <span className="pp-footer__logo-sub">
                Domaine du Petit Chaumont · Aigues-Mortes
              </span>
            </div>
            <p>
              Un espace de vie unique en Camargue — bar à tapas, cocktails, piscine,
              soirées et moments inoubliables, du lever au coucher du soleil.
            </p>

            <div className="pp-footer__socials">
              <a
                href="https://www.instagram.com/pailloteparadise"
                className="pp-footer__social-link"
                aria-label="Instagram La Paillote Paradise"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/pailloteparadise"
                className="pp-footer__social-link"
                aria-label="Facebook La Paillote Paradise"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@pailloteparadise"
                className="pp-footer__social-link"
                aria-label="TikTok La Paillote Paradise"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05A6.34 6.34 0 003.15 15.3a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.14a8.28 8.28 0 004.85 1.56V7.26a4.86 4.86 0 01-1.09-.57z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="pp-footer__col-title">Notre univers</h3>
            <ul className="pp-footer__links">
              <li><Link href="/restaurant" className="pp-footer__link">Bar à Tapas</Link></li>
              <li><Link href="/bar" className="pp-footer__link">Bar &amp; Cocktails</Link></li>
              <li><Link href="/piscine-transats" className="pp-footer__link">Piscine &amp; Transats</Link></li>
              <li><Link href="/privatisation" className="pp-footer__link">Groupes &amp; Privatisation</Link></li>
              <li><Link href="/galerie" className="pp-footer__link">Galerie photos</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="pp-footer__col-title">Infos pratiques</h3>
            <ul className="pp-footer__links">
              <li><Link href="/seo/restaurant-paillote-aigues-mortes" className="pp-footer__link">Bar à Tapas Aigues-Mortes</Link></li>
              <li><Link href="/seo/piscine-privee-camargue" className="pp-footer__link">Piscine privée Camargue</Link></li>
              <li><Link href="/seo/soiree-dimanche-aigues-mortes" className="pp-footer__link">Soirée Aigues-Mortes</Link></li>
              <li><Link href="/seo/privatisation-domaine-camargue" className="pp-footer__link">EVJF &amp; EVG Camargue</Link></li>
              <li><Link href="/contact" className="pp-footer__link">Nous contacter</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="pp-footer__col-title">Nous trouver</h3>
            <div className="pp-footer__contact-item">
              <span className="pp-footer__contact-icon"></span>
              <span>
                Domaine du Petit Chaumont
                <br />
                Route du Petit Chaumont
                <br />
                30220 Aigues-Mortes
              </span>
            </div>
            <div className="pp-footer__contact-item">
              <span className="pp-footer__contact-icon"></span>
              <span>
                <a href={`tel:${PP_PHONE_E164}`} className="pp-footer__link">
                  {PP_PHONE_DISPLAY}
                </a>
              </span>
            </div>
            <div className="pp-footer__contact-item">
              <span className="pp-footer__contact-icon"></span>
              <span>
                <a href="mailto:contact@pailloteparadise.fr" className="pp-footer__link">
                  contact@pailloteparadise.fr
                </a>
              </span>
            </div>
            <div className="pp-footer__contact-item">
              <span className="pp-footer__contact-icon"></span>
              <span>
                Ouvert de juin à septembre
                <br />
                Mer.&#8239;–&#8239;Sam. 12h&#8239;–&#8239;19h · Dim. 12h&#8239;–&#8239;00h (United)
              </span>
            </div>
          </div>
        </div>

        <div className="pp-footer__bottom">
          <p className="pp-footer__copyright">
            © {year} La Paillote Paradise — Domaine du Petit Chaumont. Tous droits réservés.
          </p>
          <nav className="pp-footer__legal" aria-label="Liens légaux">
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/politique-confidentialite">Politique de confidentialité</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
