/* Migré depuis lib/pages-html — éditable en React */
import Image from 'next/image';
import type { ReactNode } from 'react';

export function SeoPailloteCamarguePageBody(): ReactNode {
  return (
    <>
      <section className="pp-page-hero" aria-labelledby="seo-paillote-title">
            <Image src="/assets/images/hero-home.jpg" alt="Paillote Camargue — La Paillote Paradise, bar restaurant piscine Aigues-Mortes" fill className="pp-page-hero__img" priority sizes="100vw" />
            <div className="pp-page-hero__content">
              <nav aria-label="Fil d'Ariane">
                <ol className="pp-breadcrumb" style={{ justifyContent: "center" }}>
                  <li><a href="/">Accueil</a></li>
                  <li className="pp-breadcrumb__sep" aria-hidden="true">/</li>
                  <li aria-current="page">Paillote Camargue</li>
                </ol>
              </nav>
              <span className="pp-eyebrow pp-eyebrow--gold">Domaine du Petit Chaumont</span>
              <h1 className="pp-page-hero__title" id="seo-paillote-title">La Paillote Paradise en Camargue</h1>
              <p className="pp-page-hero__subtitle">Restaurant · Bar · Piscine Privée · Soirées · Aigues-Mortes</p>
            </div>
          </section>
      
          <section className="pp-section" style={{ background: "var(--pp-sand)" }}>
            <div className="pp-container">
              <div style={{ maxWidth: "800px", marginInline: "auto", textAlign: "center" }} data-pp-reveal>
                <span className="pp-eyebrow">Une paillote comme nulle part ailleurs</span>
                <h2 className="pp-title">La paillote authentique de Camargue</h2>
                <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", fontSize: "var(--pp-text-lg)", marginBottom: "var(--pp-space-8)" }}>
                  Imaginez une <strong>paillote en Camargue</strong> où le soleil se couche sur les marais salants, où l'on sirote un cocktail au bord d'une piscine privée, où la musique s'emballe au fil des soirées du dimanche. C'est exactement ça, La Paillote Paradise à Aigues-Mortes.
                </p>
                <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", fontSize: "var(--pp-text-lg)", marginBottom: "var(--pp-space-10)" }}>
                  Installée sur le <strong>Domaine du Petit Chaumont</strong>, notre paillote rassemble le meilleur de la Camargue : la nature préservée, la cuisine méditerranéenne, l'hospitalité du Sud et la fête.
                </p>
              </div>
              <div className="pp-grid-3" style={{ gap: "var(--pp-space-8)" }}>
                <article className="pp-card" data-pp-reveal data-pp-delay="0">
                  <div className="pp-card__img-wrap">
                    <Image src="/assets/images/hero-restaurant.jpg" alt="Restaurant paillote Camargue" width={400} height={280} className="pp-card__img" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="pp-card__body">
                    <h3 className="pp-card__title">Restaurant</h3>
                    <p className="pp-card__text">Cuisine méditerranéenne, formules déjeuner et dîner.</p>
                    <a href="/restaurant" className="pp-btn pp-btn--outline-ocean pp-btn--sm">Découvrir</a>
                  </div>
                </article>
                <article className="pp-card" data-pp-reveal data-pp-delay="1">
                  <div className="pp-card__img-wrap">
                    <Image src="/assets/images/hero-piscine.jpg" alt="Piscine privée paillote Camargue" width={400} height={280} className="pp-card__img" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="pp-card__body">
                    <h3 className="pp-card__title">Piscine Privée</h3>
                    <p className="pp-card__text">Transats premium, service en bord de piscine, journée VIP tout compris.</p>
                    <a href="/piscine-transats" className="pp-btn pp-btn--outline-ocean pp-btn--sm">Découvrir</a>
                  </div>
                </article>
                <article className="pp-card" data-pp-reveal data-pp-delay="2">
                  <div className="pp-card__img-wrap">
                    <Image src="/assets/images/hero-soirees.jpg" alt="Soirees paillote Camargue Aigues-Mortes" width={400} height={280} className="pp-card__img" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="pp-card__body">
                    <h3 className="pp-card__title">Soirées</h3>
                    <p className="pp-card__text">DJ, musique live et la célèbre soirée du dimanche qui enflamme la Camargue.</p>
                    <a href="/soirees" className="pp-btn pp-btn--outline-ocean pp-btn--sm">Découvrir</a>
                  </div>
                </article>
              </div>
            </div>
          </section>
      
          <section className="pp-cta-section" aria-labelledby="cta-paillote-seo">
            <div className="pp-container" style={{ textAlign: "center" }}>
              <h2 className="pp-title pp-title--light" id="cta-paillote-seo" data-pp-reveal>Venez découvrir la paillote de Camargue</h2>
              <p className="pp-subtitle pp-subtitle--light" style={{ marginInline: "auto", marginBottom: "var(--pp-space-10)" }} data-pp-reveal data-pp-delay="1">Ouvert de juin à septembre · Mercredi → Samedi 12h&#8239;–&#8239;19h, Dimanche 12h&#8239;–&#8239;00h. Domaine du Petit Chaumont, Aigues-Mortes.</p>
              <div style={{ display: "flex", gap: "var(--pp-space-4)", justifyContent: "center", flexWrap: "wrap" }} data-pp-reveal data-pp-delay="2">
                <a href="/contact" className="pp-btn pp-btn--primary pp-btn--lg">Nous contacter</a>
                <a href="/" className="pp-btn pp-btn--secondary pp-btn--lg">Découvrir le site</a>
              </div>
            </div>
          </section>
    </>
  );
}
