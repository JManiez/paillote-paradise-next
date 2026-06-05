/* Migré depuis lib/pages-html — éditable en React */
import Image from 'next/image';
import type { ReactNode } from 'react';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { ZenchefTransatLink } from '@/components/ZenchefOpenLink';
import { PP_PHONE_E164 } from '@/lib/publicPhone';

export function PiscineTransatsPageBody(): ReactNode {
  return (
    <>
      <section className="pp-page-hero" aria-labelledby="piscine-title">
            <Image
              src="/assets/images/hero-piscine-2025.jpg"
              alt="Piscine privée de la Paillote Paradise avec transats et parasols, Aigues-Mortes Camargue"
              fill
              className="pp-page-hero__img"
              priority
              sizes="100vw"
            />
            <div className="pp-page-hero__breadcrumb-wrap">
              <PageBreadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Piscine & Transats' }]} />
            </div>
            <div className="pp-page-hero__content">
              <span className="pp-eyebrow pp-eyebrow--gold pp-eyebrow--theatrical">Détente absolue</span>
              <h1 className="pp-page-hero__title pp-title--editorial" id="piscine-title">Piscine &amp; <em className="pp-word-gold">Transats</em></h1>
              <p className="pp-page-hero__subtitle">Piscine privée 80 m² · Transats premium · Bar au bord de l&apos;eau</p>
            </div>
      
            
            <div className="pp-wave-bottom" aria-hidden="true">
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none"><path fill="var(--pp-sand)" d="M0,40 C200,80 400,0 600,40 C800,80 1000,20 1200,50 L1200,120 L0,120 Z"/></svg>
            </div>
          </section>
      
          
          <section className="pp-section" style={{ background: "var(--pp-sand)" }} aria-labelledby="concept-title">
            <div className="pp-blob pp-blob--palm" style={{ width: "480px", height: "480px", top: "-10%", right: "-8%", opacity: "0.3" }} aria-hidden="true"></div>
            <div className="pp-container" style={{ position: "relative", zIndex: "2" }}>
              <div className="pp-grid-2" style={{ alignItems: "center", gap: "var(--pp-space-16)" }}>
                <div data-pp-reveal="left">
                  <span className="pp-eyebrow pp-eyebrow--theatrical">Le concept</span>
                  <h2 className="pp-title pp-title--editorial" id="concept-title">Votre journée <em className="pp-word-gold">paradisiaque</em> en Camargue</h2>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-6)" }}>
                    La piscine privée de la Paillote Paradise, c&apos;est 80 m² d&apos;eau cristalline
                    nichés au cœur du Domaine du Petit Chaumont, <strong>à l&apos;abri des regards et loin de la foule</strong>.
                    Transats premium, service aux chaises longues et cocktails maison — tout est pensé
                    pour votre confort et votre plaisir.
                  </p>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-6)" }}>
                    Accessible aux clients de la paillote le midi ou sur réservation de journée,
                    notre espace piscine est un véritable coin de paradis entre Aigues-Mortes et la mer —
                    dans un <strong>domaine isolé, hors de ville</strong>, avec un cadre naturel exceptionnel
                    au cœur de la Camargue gardoise.
                  </p>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-8)" }}>
                    <strong>Parking gratuit et illimité sur place</strong> — venez sereinement, pas de stress pour vous garer.
                  </p>
                  <div style={{ display: "flex", gap: "var(--pp-space-4)", flexWrap: "wrap" }}>
                    <ZenchefTransatLink className="pp-btn pp-btn--primary pp-magnetic">Réserver un transat</ZenchefTransatLink>
                    <a href="#tarifs" className="pp-btn pp-btn--outline">Voir les tarifs</a>
                  </div>
                </div>
                <div data-pp-reveal="right" style={{ borderRadius: "var(--pp-radius-xl)", overflow: "hidden", boxShadow: "var(--pp-shadow-lg)" }}>
                  <Image
                    src="/assets/images/universe-piscine.jpg"
                    alt="Transats et parasols au bord de la piscine privée — Paillote Paradise"
                    width={700}
                    height={500}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </section>
      
          
          <section className="pp-section" aria-labelledby="equip-title">
            <div className="pp-divider pp-divider--top pp-divider--curve" data-fill="sand" aria-hidden="true">
              <svg viewBox="0 0 1200 130" preserveAspectRatio="none"><path d="M0,80 C300,30 600,130 900,70 C1050,40 1150,90 1200,60 L1200,0 L0,0 Z"/></svg>
            </div>
            <div className="pp-container" style={{ position: "relative", zIndex: "2" }}>
              <div className="pp-section-header" data-pp-reveal>
                <span className="pp-eyebrow pp-eyebrow--theatrical">Nos équipements</span>
                <h2 className="pp-title pp-title--editorial" id="equip-title">Tout pour votre <em className="pp-word-gold">confort</em></h2>
              </div>
      
              <div className="pp-hex-grid">
                <div className="pp-hex" data-pp-reveal data-pp-delay="1">
                  <div className="pp-hex__icon" aria-hidden="true"></div>
                  <span className="pp-hex__label">Piscine<br />80 m²</span>
                </div>
                <div className="pp-hex" data-pp-reveal data-pp-delay="2">
                  <div className="pp-hex__icon" aria-hidden="true"></div>
                  <span className="pp-hex__label">Transats<br />premium</span>
                </div>
                <div className="pp-hex" data-pp-reveal data-pp-delay="3">
                  <div className="pp-hex__icon" aria-hidden="true"></div>
                  <span className="pp-hex__label">Bar &amp;<br />service</span>
                </div>
                <div className="pp-hex" data-pp-reveal data-pp-delay="4">
                  <div className="pp-hex__icon" aria-hidden="true"></div>
                  <span className="pp-hex__label">Ambiance<br />musicale</span>
                </div>
                <div className="pp-hex" data-pp-reveal data-pp-delay="5">
                  <div className="pp-hex__icon" aria-hidden="true"></div>
                  <span className="pp-hex__label">Beds<br />privés</span>
                </div>
                <div className="pp-hex" data-pp-reveal data-pp-delay="6">
                  <div className="pp-hex__icon" aria-hidden="true"></div>
                  <span className="pp-hex__label">Serviette<br />&amp; solaire</span>
                </div>
                <div className="pp-hex" data-pp-reveal data-pp-delay="7">
                  <div className="pp-hex__icon" aria-hidden="true"></div>
                  <span className="pp-hex__label">Parking<br />gratuit</span>
                </div>
                <div className="pp-hex" data-pp-reveal data-pp-delay="8">
                  <div className="pp-hex__icon" aria-hidden="true"></div>
                  <span className="pp-hex__label">Cadre isolé<br />nature</span>
                </div>
              </div>
            </div>
          </section>
      
          
          <section className="pp-section" id="tarifs" style={{ background: "var(--pp-cream)" }} aria-labelledby="tarifs-title">
            <div className="pp-divider pp-divider--top pp-divider--wave" data-fill="sand-ultra" aria-hidden="true">
              <svg viewBox="0 0 1200 110" preserveAspectRatio="none"><path d="M0,40 C200,90 400,0 600,40 C800,80 1000,10 1200,50 L1200,0 L0,0 Z"/></svg>
            </div>
            <div className="pp-blob pp-blob--gold" style={{ width: "420px", height: "420px", bottom: "-10%", left: "-8%", opacity: "0.28" }} aria-hidden="true"></div>
      
            <div className="pp-container" style={{ position: "relative", zIndex: "2" }}>
              <div className="pp-section-header" data-pp-reveal>
                <span className="pp-eyebrow pp-eyebrow--theatrical">Nos formules</span>
                <h2 className="pp-title pp-title--editorial" id="tarifs-title">Tarifs piscine &amp; <em className="pp-word-gold">transats</em></h2>
                <p className="pp-subtitle">Par personne ou forfait duo. Réservation en ligne — 2 personnes minimum sur les beds.</p>
              </div>
      
              <div className="pp-pricing-grid">
      
                
                <div className="pp-pricing-card" data-pp-reveal data-pp-delay="1">
                  <h3 className="pp-pricing-name">Transat Simple</h3>
                  <div className="pp-pricing-price"><sup>€</sup>20</div>
                  <div className="pp-pricing-unit">par personne</div>
                  <ul className="pp-pricing-features">
                    <li className="pp-pricing-feature">1 transat premium</li>
                    <li className="pp-pricing-feature">Accès piscine</li>
                    <li className="pp-pricing-feature">Service aux transats</li>
                  </ul>
                  <ZenchefTransatLink className="pp-btn pp-btn--outline" style={{ width: "100%", justifyContent: "center", marginTop: "auto" }}>Réserver</ZenchefTransatLink>
                </div>
      
                
                <div className="pp-pricing-card pp-pricing-card--featured" data-pp-reveal data-pp-delay="2">
                  <h3 className="pp-pricing-name">Formule Transat</h3>
                  <div className="pp-pricing-price"><sup>€</sup>35</div>
                  <div className="pp-pricing-unit">par personne</div>
                  <ul className="pp-pricing-features">
                    <li className="pp-pricing-feature">1 transat premium</li>
                    <li className="pp-pricing-feature">Accès piscine</li>
                    <li className="pp-pricing-feature">Salade César ou Thaï</li>
                    <li className="pp-pricing-feature">Verre de vin ou soft</li>
                    <li className="pp-pricing-feature">Service aux transats</li>
                  </ul>
                  <ZenchefTransatLink className="pp-btn pp-btn--primary pp-magnetic" style={{ width: "100%", justifyContent: "center", marginTop: "auto" }}>Réserver</ZenchefTransatLink>
                </div>
      
                
                <div className="pp-pricing-card" data-pp-reveal data-pp-delay="3">
                  <div className="pp-pricing-badge">Pour 2</div>
                  <h3 className="pp-pricing-name">Formule Paradise</h3>
                  <div className="pp-pricing-price"><sup>€</sup>85</div>
                  <div className="pp-pricing-unit">pour 2 personnes</div>
                  <ul className="pp-pricing-features">
                    <li className="pp-pricing-feature">2 transats premium</li>
                    <li className="pp-pricing-feature">Accès piscine</li>
                    <li className="pp-pricing-feature">2 salades César ou Thaï</li>
                    <li className="pp-pricing-feature">Bouteille de vin du domaine</li>
                    <li className="pp-pricing-feature pp-pricing-feature--note">Blanc · Rosé · Rouge<br />Domaine du Petit Chaumont, vins bio des Sables de Camargue</li>
                    <li className="pp-pricing-feature">Service aux transats</li>
                  </ul>
                  <ZenchefTransatLink className="pp-btn pp-btn--gold pp-magnetic" style={{ width: "100%", justifyContent: "center", marginTop: "auto" }}>Réserver</ZenchefTransatLink>
                </div>

                <div className="pp-pricing-card" data-pp-reveal data-pp-delay="4">
                  <div className="pp-pricing-badge">2 pers. min.</div>
                  <h3 className="pp-pricing-name">Bed Simple</h3>
                  <div className="pp-pricing-price"><sup>€</sup>30</div>
                  <div className="pp-pricing-unit">par personne · 2 pers. minimum</div>
                  <ul className="pp-pricing-features">
                    <li className="pp-pricing-feature">1 bed premium au bord de la piscine</li>
                    <li className="pp-pricing-feature">Accès piscine</li>
                    <li className="pp-pricing-feature">Service en bord de bassin</li>
                  </ul>
                  <ZenchefTransatLink className="pp-btn pp-btn--outline" style={{ width: "100%", justifyContent: "center", marginTop: "auto" }}>Réserver</ZenchefTransatLink>
                </div>

                <div className="pp-pricing-card" data-pp-reveal data-pp-delay="5">
                  <div className="pp-pricing-badge">Pour 2</div>
                  <h3 className="pp-pricing-name">Formule Bed Paradise</h3>
                  <div className="pp-pricing-price"><sup>€</sup>100</div>
                  <div className="pp-pricing-unit">pour 2 personnes</div>
                  <ul className="pp-pricing-features">
                    <li className="pp-pricing-feature">2 beds premium</li>
                    <li className="pp-pricing-feature">Tous les avantages Formule Paradise</li>
                    <li className="pp-pricing-feature">2 salades César ou Thaï</li>
                    <li className="pp-pricing-feature">Bouteille de vin du domaine</li>
                    <li className="pp-pricing-feature">Service aux transats &amp; beds</li>
                  </ul>
                  <ZenchefTransatLink className="pp-btn pp-btn--gold pp-magnetic" style={{ width: "100%", justifyContent: "center", marginTop: "auto" }}>Réserver</ZenchefTransatLink>
                </div>
      
              </div>
            </div>
          </section>
      
          
          <section className="pp-section pp-cta-section" aria-labelledby="piscine-cta-title">
            <div className="pp-container">
              <div className="pp-cta-section__content">
                <h2 className="pp-title" id="piscine-cta-title" style={{ color: "var(--pp-white)" }} data-pp-reveal>
                  Réservez votre journée au bord de la piscine
                </h2>
                <p className="pp-subtitle pp-subtitle--light" style={{ marginInline: "auto", marginBottom: "var(--pp-space-10)" }} data-pp-reveal data-pp-delay="1">
                  Places limitées — réservation conseillée, surtout le week-end et en haute saison (juin – septembre).
                </p>
                <div style={{ display: "flex", gap: "var(--pp-space-4)", justifyContent: "center", flexWrap: "wrap" }} data-pp-reveal data-pp-delay="2">
                  <ZenchefTransatLink className="pp-btn pp-btn--gold pp-btn--lg pp-magnetic">Réserver un transat</ZenchefTransatLink>
                  <a href={`tel:${PP_PHONE_E164}`} className="pp-btn pp-btn--secondary pp-btn--lg pp-magnetic"> Appeler</a>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
