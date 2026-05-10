/* Migré depuis lib/pages-html — éditable en React */
import type { ReactNode } from 'react';

export function SeoPiscinePriveeCamarguePageBody(): ReactNode {
  return (
    <>
      <section className="pp-page-hero" aria-labelledby="seo-piscine-title">
            <img src="/assets/images/piscine-hero.jpg" alt="Piscine privée Camargue — La Paillote Paradise Aigues-Mortes, transats et palmiers" className="pp-page-hero__img" loading="eager" fetchPriority="high" width="1920" height="800" />
            <div className="pp-page-hero__content">
              <nav aria-label="Fil d'Ariane">
                <ol className="pp-breadcrumb" style={{ justifyContent: "center" }}>
                  <li><a href="/">Accueil</a></li>
                  <li className="pp-breadcrumb__sep" aria-hidden="true">/</li>
                  <li><a href="/piscine-transats">Piscine &amp; Transats</a></li>
                  <li className="pp-breadcrumb__sep" aria-hidden="true">/</li>
                  <li aria-current="page">Camargue</li>
                </ol>
              </nav>
              <span className="pp-eyebrow pp-eyebrow--gold">Domaine du Petit Chaumont, Aigues-Mortes</span>
              <h1 className="pp-page-hero__title" id="seo-piscine-title">Piscine Privée en Camargue</h1>
              <p className="pp-page-hero__subtitle">Location de transats · Journée piscine · Expérience VIP</p>
            </div>
          </section>
      
          <section className="pp-section" style={{ background: "var(--pp-sand)" }}>
            <div className="pp-container">
              <div className="pp-grid-2" style={{ alignItems: "center", gap: "var(--pp-space-16)" }}>
                <div data-pp-reveal="left">
                  <span className="pp-eyebrow">La piscine privée la plus festive de Camargue</span>
                  <h2 className="pp-title">Journée piscine privée à Aigues-Mortes</h2>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-6)" }}>
                    Offrez-vous une parenthèse paradisiaque au bord de la <strong>piscine privée du Domaine du Petit Chaumont</strong>. Installés sur vos transats avec vue dégagée, profitez d'une journée piscine unique en <strong>Camargue</strong> avec service en bord de basssin, cocktails et musique live.
                  </p>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-6)" }}>
                    Idéal pour une sortie entre amis, en famille ou en couple. Notre piscine privée <strong>Aigues-Mortes</strong> est accessible sur réservation — demi-journée, journée complète ou expérience VIP tout compris.
                  </p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--pp-space-3)", marginBottom: "var(--pp-space-8)" }}>
                    <li style={{ display: "flex", gap: "var(--pp-space-3)", alignItems: "center" }}><span style={{ color: "var(--pp-sunset)" }}>✓</span> Grande piscine privée chauffée · Camargue</li>
                    <li style={{ display: "flex", gap: "var(--pp-space-3)", alignItems: "center" }}><span style={{ color: "var(--pp-sunset)" }}>✓</span> Transats et matelas de plage premium</li>
                    <li style={{ display: "flex", gap: "var(--pp-space-3)", alignItems: "center" }}><span style={{ color: "var(--pp-sunset)" }}>✓</span> Service cocktails, boissons et snacks en bord de piscine</li>
                    <li style={{ display: "flex", gap: "var(--pp-space-3)", alignItems: "center" }}><span style={{ color: "var(--pp-sunset)" }}>✓</span> Musique et DJ dès le milieu d'après-midi</li>
                    <li style={{ display: "flex", gap: "var(--pp-space-3)", alignItems: "center" }}><span style={{ color: "var(--pp-sunset)" }}>✓</span> Vestiaires, douches et espaces de détente</li>
                  </ul>
                  <div style={{ display: "flex", gap: "var(--pp-space-4)", flexWrap: "wrap" }}>
                    <a href="/piscine-transats" className="pp-btn pp-btn--primary">Voir les tarifs piscine</a>
                    <a href="/contact" className="pp-btn pp-btn--outline-ocean">Réserver des transats</a>
                  </div>
                </div>
                <div data-pp-reveal="right">
                  <img src="/assets/images/piscine-detail.jpg" alt="Transats au bord de la piscine privée — La Paillote Paradise, Camargue" loading="lazy" width="700" height="500" style={{ width: "100%", borderRadius: "var(--pp-radius-lg)", objectFit: "cover", height: "400px", boxShadow: "var(--pp-shadow-lg)" }} />
                </div>
              </div>
            </div>
          </section>
      
          <section className="pp-section" style={{ background: "var(--pp-ocean)" }} aria-labelledby="cta-piscine-seo">
            <div className="pp-container" style={{ textAlign: "center" }}>
              <h2 className="pp-title pp-title--light" id="cta-piscine-seo" data-pp-reveal>Réservez votre journée piscine en Camargue</h2>
              <p className="pp-subtitle pp-subtitle--light" style={{ marginInline: "auto", marginBottom: "var(--pp-space-10)" }} data-pp-reveal data-pp-delay="1">Disponible d'avril à septembre. Réservation obligatoire pour les transats.</p>
              <div style={{ display: "flex", gap: "var(--pp-space-4)", justifyContent: "center", flexWrap: "wrap" }} data-pp-reveal data-pp-delay="2">
                <a href="/contact" className="pp-btn pp-btn--primary pp-btn--lg">Réserver maintenant</a>
                <a href="/piscine-transats" className="pp-btn pp-btn--secondary pp-btn--lg">Voir les formules</a>
              </div>
            </div>
          </section>
    </>
  );
}
