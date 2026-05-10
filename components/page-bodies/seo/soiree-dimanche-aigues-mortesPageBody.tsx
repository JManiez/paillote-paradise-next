/* Migré depuis lib/pages-html — éditable en React */
import type { ReactNode } from 'react';

export function SeoSoireeDimancheAiguesMortesPageBody(): ReactNode {
  return (
    <>
      <section className="pp-page-hero" aria-labelledby="seo-soiree-title">
            <img src="/assets/images/hero-soirees.jpg" alt="Soiree du dimanche Aigues-Mortes — La Paillote Paradise, foule et DJ en Camargue" className="pp-page-hero__img" loading="eager" fetchPriority="high" width="1920" height="800" />
            <div className="pp-page-hero__content">
              <nav aria-label="Fil d'Ariane">
                <ol className="pp-breadcrumb" style={{ justifyContent: "center" }}>
                  <li><a href="/">Accueil</a></li>
                  <li className="pp-breadcrumb__sep" aria-hidden="true">/</li>
                  <li><a href="/soirees">Soirées</a></li>
                  <li className="pp-breadcrumb__sep" aria-hidden="true">/</li>
                  <li aria-current="page">Soirée Dimanche Aigues-Mortes</li>
                </ol>
              </nav>
              <span className="pp-eyebrow pp-eyebrow--gold">Chaque dimanche · Saison 2026</span>
              <h1 className="pp-page-hero__title" id="seo-soiree-title">La Soirée du Dimanche à Aigues-Mortes</h1>
              <p className="pp-page-hero__subtitle">La fête incontournable de Camargue · Domaine du Petit Chaumont</p>
            </div>
          </section>
      
          <section className="pp-section" style={{ background: "var(--pp-night)" }}>
            <div className="pp-container">
              <div className="pp-grid-2" style={{ alignItems: "center", gap: "var(--pp-space-16)" }}>
                <div data-pp-reveal="left">
                  <span className="pp-eyebrow pp-eyebrow--gold">L'événement du week-end en Camargue</span>
                  <h2 className="pp-title pp-title--light">La soirée du dimanche connue dans toute la France</h2>
                  <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: "1.8", marginBottom: "var(--pp-space-6)" }}>
                    Chaque <strong>dimanche à Aigues-Mortes</strong>, La Paillote Paradise accueille ce qui est devenu la soirée la plus attendue de Camargue. Plus de <strong>600 personnes</strong> se retrouvent au Domaine du Petit Chaumont pour une nuit mémorable avec DJ set professionnel, animations et ambiance électrique.
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: "1.8", marginBottom: "var(--pp-space-6)" }}>
                    Connue jusqu'à Montpellier, Nîmes et au-delà, la <strong>soirée du dimanche Aigues-Mortes</strong> attire chaque semaine une foule festive et bienveillante. Si vous cherchez une soirée unique en Camargue, c'est ici que ça se passe.
                  </p>
                  <div className="pp-grid-2" style={{ gap: "var(--pp-space-6)", marginBottom: "var(--pp-space-8)" }}>
                    <div style={{ textAlign: "center", padding: "var(--pp-space-6)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "var(--pp-radius-md)" }}>
                      <p style={{ fontSize: "3rem", fontWeight: "700", color: "var(--pp-sunset)" }}>600+</p>
                      <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "var(--pp-text-sm)" }}>personnes chaque dimanche</p>
                    </div>
                    <div style={{ textAlign: "center", padding: "var(--pp-space-6)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "var(--pp-radius-md)" }}>
                      <p style={{ fontSize: "3rem", fontWeight: "700", color: "var(--pp-sunset)" }}>26</p>
                      <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "var(--pp-text-sm)" }}>soirées par saison</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "var(--pp-space-4)", flexWrap: "wrap" }}>
                    <a href="/soirees" className="pp-btn pp-btn--primary pp-btn--lg">Voir l'agenda complet</a>
                    <a href="/contact" className="pp-btn pp-btn--secondary pp-btn--lg">S'informer & réserver</a>
                  </div>
                </div>
                <div data-pp-reveal="right">
                  <img src="/assets/images/soiree-dimanche.jpg" alt="Soiree du dimanche La Paillote Paradise — ambiance festive, DJ et foule en Camargue" loading="lazy" width="700" height="500" style={{ width: "100%", borderRadius: "var(--pp-radius-lg)", objectFit: "cover", height: "450px", boxShadow: "var(--pp-shadow-lg)" }} />
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
