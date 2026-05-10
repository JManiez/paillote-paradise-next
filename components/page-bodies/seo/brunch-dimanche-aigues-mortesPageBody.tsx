/* Migré depuis lib/pages-html — éditable en React */
import type { ReactNode } from 'react';

export function SeoBrunchDimancheAiguesMortesPageBody(): ReactNode {
  return (
    <>
      <section className="pp-page-hero" aria-labelledby="seo-brunch-title">
            <img src="/assets/images/restaurant-hero.jpg" alt="Brunch du dimanche Aigues-Mortes — La Paillote Paradise, buffet au bord de la piscine" className="pp-page-hero__img" loading="eager" fetchPriority="high" width="1920" height="800" />
            <div className="pp-page-hero__content">
              <nav aria-label="Fil d'Ariane">
                <ol className="pp-breadcrumb" style={{ justifyContent: "center" }}>
                  <li><a href="/">Accueil</a></li>
                  <li className="pp-breadcrumb__sep" aria-hidden="true">/</li>
                  <li><a href="/restaurant">Restaurant</a></li>
                  <li className="pp-breadcrumb__sep" aria-hidden="true">/</li>
                  <li aria-current="page">Brunch Dimanche</li>
                </ol>
              </nav>
              <span className="pp-eyebrow pp-eyebrow--gold">Chaque dimanche · 11h–15h</span>
              <h1 className="pp-page-hero__title" id="seo-brunch-title">Brunch du Dimanche à Aigues-Mortes</h1>
              <p className="pp-page-hero__subtitle">Buffet copieux · Vue piscine · Ambiance festive en Camargue</p>
            </div>
          </section>
      
          <section className="pp-section" style={{ background: "var(--pp-sand)" }}>
            <div className="pp-container">
              <div className="pp-grid-2" style={{ alignItems: "center", gap: "var(--pp-space-16)" }}>
                <div data-pp-reveal="left">
                  <span className="pp-eyebrow">Le brunch incontournable de Camargue</span>
                  <h2 className="pp-title">Le meilleur brunch du dimanche à Aigues-Mortes</h2>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-6)" }}>
                    Chaque dimanche, dès 11h, le <strong>brunch de La Paillote Paradise</strong> installe la douceur du week-end. Tables dressées au bord de la piscine, buffet copieux aux saveurs méditerranéennes, musique douce et service aux petits soins.
                  </p>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-6)" }}>
                    Le <strong>brunch du dimanche Aigues-Mortes</strong> le plus festif du Gard : idéal pour prolonger le week-end, fêter un anniversaire ou tout simplement s'offrir un moment de pur bonheur en Camargue.
                  </p>
                  <div className="pp-grid-2" style={{ gap: "var(--pp-space-4)", marginBottom: "var(--pp-space-8)" }}>
                    <div style={{ background: "white", borderRadius: "var(--pp-radius-md)", padding: "var(--pp-space-6)", boxShadow: "var(--pp-shadow-sm)", textAlign: "center" }}>
                      <p style={{ fontSize: "var(--pp-text-2xl)", fontWeight: "700", color: "var(--pp-sunset)", fontFamily: "var(--pp-font-display)" }}>29€</p>
                      <p style={{ fontWeight: "600", color: "var(--pp-ocean)", marginBottom: "var(--pp-space-2)" }}>Brunch Classic</p>
                      <p style={{ color: "var(--pp-gray)", fontSize: "var(--pp-text-sm)" }}>Buffet complet + boissons chaudes</p>
                    </div>
                    <div style={{ background: "var(--pp-ocean)", borderRadius: "var(--pp-radius-md)", padding: "var(--pp-space-6)", boxShadow: "var(--pp-shadow-md)", textAlign: "center" }}>
                      <p style={{ fontSize: "var(--pp-text-2xl)", fontWeight: "700", color: "var(--pp-gold)", fontFamily: "var(--pp-font-display)" }}>49€</p>
                      <p style={{ fontWeight: "600", color: "white", marginBottom: "var(--pp-space-2)" }}>Brunch Paradise</p>
                      <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "var(--pp-text-sm)" }}>Premium + cocktail + accès piscine</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "var(--pp-space-4)", flexWrap: "wrap" }}>
                    <a href="/contact" className="pp-btn pp-btn--primary">Réserver pour le brunch</a>
                    <a href="/restaurant" className="pp-btn pp-btn--outline-ocean">Voir les menus</a>
                  </div>
                </div>
                <div data-pp-reveal="right">
                  <img src="/assets/images/restaurant-ambiance.jpg" alt="Brunch du dimanche bord de piscine Aigues-Mortes — La Paillote Paradise" loading="lazy" width="700" height="500" style={{ width: "100%", borderRadius: "var(--pp-radius-lg)", objectFit: "cover", height: "420px", boxShadow: "var(--pp-shadow-lg)" }} />
                </div>
              </div>
            </div>
          </section>
      
          <section className="pp-section" style={{ background: "var(--pp-cream)" }}>
            <div className="pp-container">
              <div style={{ textAlign: "center", maxWidth: "700px", marginInline: "auto", marginBottom: "var(--pp-space-12)" }}>
                <span className="pp-eyebrow">Au programme du brunch</span>
                <h2 className="pp-title" data-pp-reveal>Ce qui vous attend chaque dimanche</h2>
              </div>
              <div className="pp-grid-3" style={{ gap: "var(--pp-space-6)" }}>
                <div style={{ textAlign: "center", padding: "var(--pp-space-8)" }} data-pp-reveal data-pp-delay="0">
                  <div style={{ fontSize: "2.5rem", marginBottom: "var(--pp-space-4)" }} aria-hidden="true"></div>
                  <h3 style={{ color: "var(--pp-ocean)", marginBottom: "var(--pp-space-3)" }}>Buffet sucré</h3>
                  <p style={{ color: "var(--pp-gray)", fontSize: "var(--pp-text-sm)" }}>Viennoiseries fraîches, fruits de saison, yaourts artisanaux, confiture maison.</p>
                </div>
                <div style={{ textAlign: "center", padding: "var(--pp-space-8)" }} data-pp-reveal data-pp-delay="1">
                  <div style={{ fontSize: "2.5rem", marginBottom: "var(--pp-space-4)" }} aria-hidden="true"></div>
                  <h3 style={{ color: "var(--pp-ocean)", marginBottom: "var(--pp-space-3)" }}>Buffet salé</h3>
                  <p style={{ color: "var(--pp-gray)", fontSize: "var(--pp-text-sm)" }}>Œufs brouillés, charcuteries locales, fromages, tapenade et légumes grillés.</p>
                </div>
                <div style={{ textAlign: "center", padding: "var(--pp-space-8)" }} data-pp-reveal data-pp-delay="2">
                  <div style={{ fontSize: "2.5rem", marginBottom: "var(--pp-space-4)" }} aria-hidden="true"></div>
                  <h3 style={{ color: "var(--pp-ocean)", marginBottom: "var(--pp-space-3)" }}>Boissons & cocktails</h3>
                  <p style={{ color: "var(--pp-gray)", fontSize: "var(--pp-text-sm)" }}>Jus frais pressés, thé, café, et cocktails de bienvenue (formule Paradise).</p>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
