/* Migré depuis lib/pages-html — éditable en React */
import Image from 'next/image';
import type { ReactNode } from 'react';

export function SeoPrivatisationDomaineCamarguePageBody(): ReactNode {
  return (
    <>
      <section className="pp-page-hero" aria-labelledby="seo-priv-title">
            <Image src="/assets/images/privatisation-hero.jpg" alt="Privatisation domaine Camargue — La Paillote Paradise, Aigues-Mortes" fill className="pp-page-hero__img" priority sizes="100vw" />
            <div className="pp-page-hero__content">
              <nav aria-label="Fil d'Ariane">
                <ol className="pp-breadcrumb" style={{ justifyContent: "center" }}>
                  <li><a href="/">Accueil</a></li>
                  <li className="pp-breadcrumb__sep" aria-hidden="true">/</li>
                  <li><a href="/privatisation">Privatisation</a></li>
                  <li className="pp-breadcrumb__sep" aria-hidden="true">/</li>
                  <li aria-current="page">Domaine Camargue</li>
                </ol>
              </nav>
              <span className="pp-eyebrow pp-eyebrow--gold">Domaine du Petit Chaumont</span>
              <h1 className="pp-page-hero__title" id="seo-priv-title">Privatisation d'un domaine en Camargue</h1>
              <p className="pp-page-hero__subtitle">Mariage · EVJF · Anniversaire · Séminaire · Aigues-Mortes</p>
            </div>
          </section>
      
          <section className="pp-section" style={{ background: "var(--pp-sand)" }}>
            <div className="pp-container">
              <div className="pp-grid-2" style={{ alignItems: "center", gap: "var(--pp-space-16)" }}>
                <div data-pp-reveal="left">
                  <span className="pp-eyebrow">Un lieu d'exception privatisable en Camargue</span>
                  <h2 className="pp-title">Votre événement privé au cœur de la Camargue</h2>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-6)" }}>
                    Le <strong>Domaine du Petit Chaumont</strong> se transforme en un cadre exclusif pour votre événement en Camargue. Piscine privée, terrasses de plein air, grande capacité d'accueil jusqu'à 600 personnes — notre domaine répond à tous vos projets événementiels à <strong>Aigues-Mortes</strong>.
                  </p>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-6)" }}>
                    EVJF mémorables, anniversaires aux couleurs du soleil, mariages pieds dans l'eau, séminaires d'entreprise immersifs : nous faisons de votre vision une réalité. Nos équipes vous accompagnent de A à Z pour créer l'événement dont vous rêvez.
                  </p>
                  <div className="pp-grid-2" style={{ gap: "var(--pp-space-4)", marginBottom: "var(--pp-space-8)" }}>
                    <div style={{ background: "white", padding: "var(--pp-space-5)", borderRadius: "var(--pp-radius-md)", boxShadow: "var(--pp-shadow-sm)" }}>
                      <p style={{ fontSize: "1.8rem", fontWeight: "700", color: "var(--pp-sunset)" }}>600</p>
                      <p style={{ color: "var(--pp-gray)", fontSize: "var(--pp-text-sm)" }}>personnes max.</p>
                    </div>
                    <div style={{ background: "white", padding: "var(--pp-space-5)", borderRadius: "var(--pp-radius-md)", boxShadow: "var(--pp-shadow-sm)" }}>
                      <p style={{ fontSize: "1.8rem", fontWeight: "700", color: "var(--pp-sunset)" }}>6h</p>
                      <p style={{ color: "var(--pp-gray)", fontSize: "var(--pp-text-sm)" }}>à minuit</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "var(--pp-space-4)", flexWrap: "wrap" }}>
                    <a href="/privatisation" className="pp-btn pp-btn--primary">Voir la page privatisation</a>
                    <a href="/contact" className="pp-btn pp-btn--outline-ocean">Demander un devis</a>
                  </div>
                </div>
                <div data-pp-reveal="right">
                  <div style={{ position: "relative", width: "100%", height: "420px", borderRadius: "var(--pp-radius-lg)", overflow: "hidden", boxShadow: "var(--pp-shadow-lg)" }}>
                    <Image src="/assets/images/privatisation-ambiance.jpg" alt="Privatisation domaine Camargue — La Paillote Paradise, Aigues-Mortes" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                </div>
              </div>
            </div>
          </section>
      
          <section className="pp-section" style={{ background: "var(--pp-cream)" }}>
            <div className="pp-container">
              <div style={{ textAlign: "center", marginBottom: "var(--pp-space-12)" }}>
                <span className="pp-eyebrow">Types d'événements</span>
                <h2 className="pp-title" data-pp-reveal>Pour quel événement en Camargue ?</h2>
              </div>
              <div className="pp-grid-3" style={{ gap: "var(--pp-space-6)" }}>
                <div style={{ background: "white", borderRadius: "var(--pp-radius-md)", padding: "var(--pp-space-7)", boxShadow: "var(--pp-shadow-sm)", textAlign: "center" }} data-pp-reveal data-pp-delay="0">
                  <div style={{ fontSize: "2.5rem", marginBottom: "var(--pp-space-4)" }} aria-hidden="true"></div>
                  <h3 style={{ color: "var(--pp-ocean)", marginBottom: "var(--pp-space-3)" }}>Mariage</h3>
                  <p style={{ color: "var(--pp-gray)", fontSize: "var(--pp-text-sm)" }}>Cérémonie et/ou soirée de mariage au bord de la piscine, en Camargue.</p>
                </div>
                <div style={{ background: "white", borderRadius: "var(--pp-radius-md)", padding: "var(--pp-space-7)", boxShadow: "var(--pp-shadow-sm)", textAlign: "center" }} data-pp-reveal data-pp-delay="1">
                  <div style={{ fontSize: "2.5rem", marginBottom: "var(--pp-space-4)" }} aria-hidden="true"></div>
                  <h3 style={{ color: "var(--pp-ocean)", marginBottom: "var(--pp-space-3)" }}>EVJF / EVG</h3>
                  <p style={{ color: "var(--pp-gray)", fontSize: "var(--pp-text-sm)" }}>Journée ou soirée privée pour fêter les futurs mariés en Camargue.</p>
                </div>
                <div style={{ background: "white", borderRadius: "var(--pp-radius-md)", padding: "var(--pp-space-7)", boxShadow: "var(--pp-shadow-sm)", textAlign: "center" }} data-pp-reveal data-pp-delay="2">
                  <div style={{ fontSize: "2.5rem", marginBottom: "var(--pp-space-4)" }} aria-hidden="true"></div>
                  <h3 style={{ color: "var(--pp-ocean)", marginBottom: "var(--pp-space-3)" }}>Anniversaire</h3>
                  <p style={{ color: "var(--pp-gray)", fontSize: "var(--pp-text-sm)" }}>Fêtez vos 30, 40, 50 ans ou plus dans un cadre inoubliable.</p>
                </div>
                <div style={{ background: "white", borderRadius: "var(--pp-radius-md)", padding: "var(--pp-space-7)", boxShadow: "var(--pp-shadow-sm)", textAlign: "center" }} data-pp-reveal data-pp-delay="3">
                  <div style={{ fontSize: "2.5rem", marginBottom: "var(--pp-space-4)" }} aria-hidden="true"></div>
                  <h3 style={{ color: "var(--pp-ocean)", marginBottom: "var(--pp-space-3)" }}>Séminaire</h3>
                  <p style={{ color: "var(--pp-gray)", fontSize: "var(--pp-text-sm)" }}>Team-building, incentive et réunion d'entreprise dans un cadre inspirant.</p>
                </div>
                <div style={{ background: "white", borderRadius: "var(--pp-radius-md)", padding: "var(--pp-space-7)", boxShadow: "var(--pp-shadow-sm)", textAlign: "center" }} data-pp-reveal data-pp-delay="4">
                  <div style={{ fontSize: "2.5rem", marginBottom: "var(--pp-space-4)" }} aria-hidden="true"></div>
                  <h3 style={{ color: "var(--pp-ocean)", marginBottom: "var(--pp-space-3)" }}>Baptême</h3>
                  <p style={{ color: "var(--pp-gray)", fontSize: "var(--pp-text-sm)" }}>Célébrez les premiers instants de vie dans un domaine privé exceptionnel.</p>
                </div>
                <div style={{ background: "var(--pp-ocean)", borderRadius: "var(--pp-radius-md)", padding: "var(--pp-space-7)", boxShadow: "var(--pp-shadow-md)", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }} data-pp-reveal data-pp-delay="5">
                  <div>
                    <p style={{ color: "white", fontSize: "var(--pp-text-lg)", marginBottom: "var(--pp-space-4)" }}>Votre événement sur mesure</p>
                    <a href="/contact" className="pp-btn pp-btn--primary">Demander un devis</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
