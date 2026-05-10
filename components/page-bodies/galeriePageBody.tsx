/* Migré depuis lib/pages-html — éditable en React */
import type { ReactNode } from 'react';

export function GaleriePageBody(): ReactNode {
  return (
    <>
      <section className="pp-page-hero" aria-labelledby="galerie-title">
            <img
              src="/assets/images/hero-galerie.jpg"
              alt="Vue aerienne du Domaine du Petit Chaumont et de la piscine de la Paillote Paradise"
              className="pp-page-hero__img"
              loading="eager"
              fetchPriority="high"
              width="1920"
              height="800"
             />
            <div className="pp-page-hero__content">
              <nav aria-label="Fil d'Ariane">
                <ol className="pp-breadcrumb" style={{ justifyContent: "center" }}>
                  <li><a href="/">Accueil</a></li>
                  <li className="pp-breadcrumb__sep" aria-hidden="true">/</li>
                  <li aria-current="page">Galerie</li>
                </ol>
              </nav>
              <span className="pp-eyebrow pp-eyebrow--gold">En images</span>
              <h1 className="pp-page-hero__title" id="galerie-title">La Galerie Paradise</h1>
              <p className="pp-page-hero__subtitle">Bar à Tapas · Piscine · Soirées · Événements</p>
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
      
              
              <div className="pp-gallery-filters" role="group" aria-label="Filtrer les photos par categorie" data-pp-reveal>
                <button className="pp-gallery-filter is-active" data-filter="all" aria-pressed="true">Tout voir</button>
                <button className="pp-gallery-filter" data-filter="restaurant" aria-pressed="false">Bar à Tapas</button>
                <button className="pp-gallery-filter" data-filter="piscine" aria-pressed="false">Piscine &amp; Transats</button>
                <button className="pp-gallery-filter" data-filter="soirees" aria-pressed="false">Soirées</button>
                <button className="pp-gallery-filter" data-filter="evenements" aria-pressed="false">Événements</button>
                <button className="pp-gallery-filter" data-filter="domaine" aria-pressed="false">Le Domaine</button>
              </div>
      
              
              <div className="pp-gallery-grid" data-pp-reveal aria-label="Galerie photos de la Paillote Paradise">
      
                
                <div className="pp-gallery-item pp-gallery-item--wide" data-cat="restaurant">
                  <img src="/assets/images/restaurant-hero.jpg" alt="Terrasse du bar à tapas La Paillote Paradise avec vue sur la piscine" className="pp-gallery-item__img" loading="lazy" width="900" height="450" />
                  <div className="pp-gallery-item__overlay" aria-hidden="true">
                    <span> Bar à Tapas</span>
                  </div>
                </div>
      
                <div className="pp-gallery-item" data-cat="piscine">
                  <img src="/assets/images/piscine-hero.jpg" alt="Transats et parasols au bord de la piscine privée" className="pp-gallery-item__img" loading="lazy" width="450" height="450" />
                  <div className="pp-gallery-item__overlay" aria-hidden="true"><span> Piscine</span></div>
                </div>
      
                <div className="pp-gallery-item pp-gallery-item--tall" data-cat="soirees">
                  <img src="/assets/images/hero-soirees.jpg" alt="Soiree DJ au bord de la piscine illuminee — Paillote Paradise" className="pp-gallery-item__img" loading="lazy" width="450" height="900" />
                  <div className="pp-gallery-item__overlay" aria-hidden="true"><span> Soirée</span></div>
                </div>
      
                <div className="pp-gallery-item" data-cat="restaurant">
                  <img src="/assets/images/universe-restaurant.jpg" alt="Tapas maison — bar à tapas Paillote Paradise" className="pp-gallery-item__img" loading="lazy" width="450" height="450" />
                  <div className="pp-gallery-item__overlay" aria-hidden="true"><span> Bar à Tapas</span></div>
                </div>
      
                <div className="pp-gallery-item" data-cat="piscine">
                  <img src="/assets/images/universe-piscine.jpg" alt="Vue plongeante sur la piscine depuis le parasol" className="pp-gallery-item__img" loading="lazy" width="450" height="450" />
                  <div className="pp-gallery-item__overlay" aria-hidden="true"><span> Piscine</span></div>
                </div>
      
                <div className="pp-gallery-item" data-cat="evenements">
                  <img src="/assets/images/soiree-dimanche.jpg" alt="EVJF privatise au bord de la piscine — Paillote Paradise" className="pp-gallery-item__img" loading="lazy" width="450" height="450" />
                  <div className="pp-gallery-item__overlay" aria-hidden="true"><span> EVJF</span></div>
                </div>
      
                <div className="pp-gallery-item" data-cat="soirees">
                  <img src="/assets/images/universe-soirees.jpg" alt="Foule festive lors de la soiree du dimanche Paradise" className="pp-gallery-item__img" loading="lazy" width="450" height="450" />
                  <div className="pp-gallery-item__overlay" aria-hidden="true"><span> Soirée du Dimanche</span></div>
                </div>
      
                <div className="pp-gallery-item pp-gallery-item--wide" data-cat="domaine">
                  <img src="/assets/images/hero-home.jpg" alt="Vue panoramique du Domaine du Petit Chaumont en Camargue" className="pp-gallery-item__img" loading="lazy" width="900" height="450" />
                  <div className="pp-gallery-item__overlay" aria-hidden="true"><span> Le Domaine</span></div>
                </div>
      
                <div className="pp-gallery-item" data-cat="restaurant">
                  <img src="/assets/images/restaurant-hero.jpg" alt="Brunch du dimanche — buffet et ambiance festive" className="pp-gallery-item__img" loading="lazy" width="450" height="450" />
                  <div className="pp-gallery-item__overlay" aria-hidden="true"><span> Brunch</span></div>
                </div>
      
                <div className="pp-gallery-item pp-gallery-item--tall" data-cat="evenements">
                  <img src="/assets/images/privatisation-hero.jpg" alt="Anniversaire privatise au domaine — decoration et ambiance festive" className="pp-gallery-item__img" loading="lazy" width="450" height="900" />
                  <div className="pp-gallery-item__overlay" aria-hidden="true"><span> Anniversaire</span></div>
                </div>
      
                <div className="pp-gallery-item" data-cat="soirees">
                  <img src="/assets/images/hero-soirees.jpg" alt="DJ guest lors d'une soiree thematique — Paillote Paradise" className="pp-gallery-item__img" loading="lazy" width="450" height="450" />
                  <div className="pp-gallery-item__overlay" aria-hidden="true"><span> DJ Set</span></div>
                </div>
      
                <div className="pp-gallery-item" data-cat="piscine">
                  <img src="/assets/images/universe-bar.jpg" alt="Cocktail au bord de la piscine — service aux transats" className="pp-gallery-item__img" loading="lazy" width="450" height="450" />
                  <div className="pp-gallery-item__overlay" aria-hidden="true"><span> Cocktails</span></div>
                </div>
      
              </div>
      
              
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
                  <a href="/contact" className="pp-btn pp-btn--gold pp-btn--lg">Réserver</a>
                  <a href="/soirees" className="pp-btn pp-btn--secondary pp-btn--lg">Voir les soirées</a>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
