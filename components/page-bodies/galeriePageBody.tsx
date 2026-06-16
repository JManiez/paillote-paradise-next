/* Migré depuis lib/pages-html — éditable en React */
import type { ReactNode } from 'react';
import { GalleryGrid } from '@/components/GalleryGrid';
import { PARADISE_GALLERY } from '@/lib/paradiseGallery';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { PageHeroImage } from '@/components/PageHeroImage';
import { ZenchefReserveLink } from '@/components/ZenchefReserveLink';

export function GaleriePageBody(): ReactNode {
  return (
    <>
      <section className="pp-page-hero" aria-labelledby="galerie-title">
            <PageHeroImage heroKey="galerie" />
            <div className="pp-page-hero__breadcrumb-wrap">
              <PageBreadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Galerie' }]} />
            </div>
            <div className="pp-page-hero__content">
              <span className="pp-eyebrow pp-eyebrow--gold">En images</span>
              <h1 className="pp-page-hero__title" id="galerie-title">La Galerie Paradise</h1>
              <p className="pp-page-hero__subtitle">{PARADISE_GALLERY.length} photos — Saison 2025</p>
            </div>
      
            
            <div className="pp-wave-bottom" aria-hidden="true">
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none"><path fill="var(--pp-sand)" d="M0,40 C200,80 400,0 600,40 C800,80 1000,20 1200,50 L1200,120 L0,120 Z"/></svg>
            </div>
          </section>
      
          
          <section className="pp-section" style={{ background: "var(--pp-sand)" }} aria-labelledby="photos-title">
            <div className="pp-container">
              <div className="pp-section-header" data-pp-reveal>
                <h2 className="pp-title" id="photos-title" style={{ position: "absolute", width: "1px", height: "1px", clip: "rect(0,0,0,0)" }}>Galerie photos</h2>
              </div>

              <GalleryGrid />
      
              
              <div style={{ textAlign: "center", marginTop: "var(--pp-space-16)" }} data-pp-reveal>
                <p style={{ color: "var(--pp-gray)", marginBottom: "var(--pp-space-4)" }}>
                  Retrouvez encore plus de photos et vidéos sur notre Instagram
                </p>
                <a
                  href="https://www.instagram.com/pailloteparadise"
                  className="pp-btn pp-btn--ocean pp-btn--lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Voir le compte Instagram de la Paillote Paradise (nouvel onglet)"
                >
                   @pailloteparadise sur Instagram
                </a>
              </div>
      
            </div>
          </section>
      
          
          <section className="pp-section pp-cta-section" aria-labelledby="galerie-cta-title">
            <div className="pp-container">
              <div className="pp-cta-section__content">
                <h2 className="pp-title" id="galerie-cta-title" style={{ color: "var(--pp-white)" }} data-pp-reveal>
                  Vivez l'expérience en vrai
                </h2>
                <p className="pp-subtitle pp-subtitle--light" style={{ marginInline: "auto", marginBottom: "var(--pp-space-10)" }} data-pp-reveal data-pp-delay="1">
                  Les photos ne font qu'effleurer la magie de la Paillote Paradise.
                  Venez vivre l'expérience par vous-même !
                </p>
                <div style={{ display: "flex", gap: "var(--pp-space-4)", justifyContent: "center", flexWrap: "wrap" }} data-pp-reveal data-pp-delay="2">
                  <ZenchefReserveLink className="pp-btn pp-btn--gold pp-btn--lg">Réserver</ZenchefReserveLink>
                  <a href="/soirees" className="pp-btn pp-btn--secondary pp-btn--lg">Voir les soirées</a>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
