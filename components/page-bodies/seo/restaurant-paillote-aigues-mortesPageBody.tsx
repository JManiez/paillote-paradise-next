/* Migré depuis lib/pages-html — éditable en React */
import Image from 'next/image';
import type { ReactNode } from 'react';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { PageHeroImage } from '@/components/PageHeroImage';
import { ZenchefReserveLink } from '@/components/ZenchefReserveLink';

export function SeoRestaurantPailloteAiguesMortesPageBody(): ReactNode {
  return (
    <>
      <section className="pp-page-hero" aria-labelledby="seo-rest-title">
            <PageHeroImage heroKey="seo-restaurant" />
            <div className="pp-page-hero__breadcrumb-wrap">
              <PageBreadcrumb
                items={[
                  { label: 'Accueil', href: '/' },
                  { label: 'Bar à Tapas', href: '/restaurant' },
                  { label: 'Aigues-Mortes' },
                ]}
              />
            </div>
            <div className="pp-page-hero__content">
              <span className="pp-eyebrow pp-eyebrow--gold">Domaine du Petit Chaumont</span>
              <h1 className="pp-page-hero__title" id="seo-rest-title">Restaurant Paillote à Aigues-Mortes</h1>
              <p className="pp-page-hero__subtitle">Cuisine méditerranéenne · Ambiance festive · Bord de piscine</p>
            </div>
          </section>
      
          <section className="pp-section" style={{ background: "var(--pp-sand)" }}>
            <div className="pp-container">
              <div className="pp-grid-2" style={{ alignItems: "center", gap: "var(--pp-space-16)" }}>
                <div data-pp-reveal="left">
                  <span className="pp-eyebrow">Le meilleur restaurant paillote de Camargue</span>
                  <h2 className="pp-title">Votre restaurant paillote à Aigues-Mortes</h2>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-6)" }}>
                    Au cœur du <strong>Domaine du Petit Chaumont</strong>, La Paillote Paradise propose une expérience de restauration unique en Camargue. Cuisine méditerranéenne fraîche et généreuse, servie les pieds dans l'eau, face à une piscine d'exception.
                  </p>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-6)" }}>
                    Que vous cherchiez un <strong>restaurant paillote Aigues-Mortes</strong> pour déjeuner en famille, dîner en amoureux ou organiser un événement, notre équipe vous accueille dans une atmosphère chaleureuse et festive du mois de juin à septembre.
                  </p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--pp-space-3)", marginBottom: "var(--pp-space-8)" }}>
                    <li style={{ display: "flex", gap: "var(--pp-space-3)", alignItems: "center" }}><span style={{ color: "var(--pp-sunset)" }}></span> Cuisine 100% méditerranéenne, produits frais et locaux</li>
                    <li style={{ display: "flex", gap: "var(--pp-space-3)", alignItems: "center" }}><span style={{ color: "var(--pp-sunset)" }}></span> Formules déjeuner et dîner</li>
                    <li style={{ display: "flex", gap: "var(--pp-space-3)", alignItems: "center" }}><span style={{ color: "var(--pp-sunset)" }}></span> Terrasse au bord de la piscine privée</li>
                    <li style={{ display: "flex", gap: "var(--pp-space-3)", alignItems: "center" }}><span style={{ color: "var(--pp-sunset)" }}></span> Ambiance DJ et soirées hebdomadaires</li>
                    <li style={{ display: "flex", gap: "var(--pp-space-3)", alignItems: "center" }}><span style={{ color: "var(--pp-sunset)" }}></span> Note Google 4.7/5 — plus de 240 avis</li>
                  </ul>
                  <div style={{ display: "flex", gap: "var(--pp-space-4)", flexWrap: "wrap" }}>
                    <a href="/restaurant" className="pp-btn pp-btn--primary">Voir la carte & les menus</a>
                    <ZenchefReserveLink className="pp-btn pp-btn--outline-ocean">Réserver une table</ZenchefReserveLink>
                  </div>
                </div>
                <div data-pp-reveal="right">
                  <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "var(--pp-radius-lg)", overflow: "hidden", boxShadow: "var(--pp-shadow-lg)" }}>
                    <Image src="/assets/images/restaurant-ambiance.jpg" alt="Ambiance restaurant paillote Aigues-Mortes — terrasse au bord de la piscine" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                </div>
              </div>
            </div>
          </section>
      
          <section className="pp-section" style={{ background: "var(--pp-cream)" }} aria-labelledby="localisation-title">
            <div className="pp-container" style={{ textAlign: "center" }}>
              <span className="pp-eyebrow">Localisation</span>
              <h2 className="pp-title" id="localisation-title" data-pp-reveal>À proximité d'Aigues-Mortes et de la Camargue</h2>
              <p className="pp-subtitle" style={{ marginInline: "auto", marginBottom: "var(--pp-space-10)" }} data-pp-reveal data-pp-delay="1">
                Niché sur le Domaine du Petit Chaumont, notre restaurant paillote est facilement accessible depuis toute la région.
              </p>
              <div className="pp-grid-4" data-pp-reveal data-pp-delay="2">
                <div style={{ textAlign: "center", padding: "var(--pp-space-6)", background: "white", borderRadius: "var(--pp-radius-md)", boxShadow: "var(--pp-shadow-sm)" }}>
                  <p style={{ fontSize: "2rem", marginBottom: "var(--pp-space-3)" }} aria-hidden="true"></p>
                  <p style={{ fontWeight: "600", color: "var(--pp-ocean)" }}>Montpellier</p>
                  <p style={{ color: "var(--pp-gray)", fontSize: "var(--pp-text-sm)" }}>35 min</p>
                </div>
                <div style={{ textAlign: "center", padding: "var(--pp-space-6)", background: "white", borderRadius: "var(--pp-radius-md)", boxShadow: "var(--pp-shadow-sm)" }}>
                  <p style={{ fontSize: "2rem", marginBottom: "var(--pp-space-3)" }} aria-hidden="true"></p>
                  <p style={{ fontWeight: "600", color: "var(--pp-ocean)" }}>Nîmes</p>
                  <p style={{ color: "var(--pp-gray)", fontSize: "var(--pp-text-sm)" }}>30 min</p>
                </div>
                <div style={{ textAlign: "center", padding: "var(--pp-space-6)", background: "white", borderRadius: "var(--pp-radius-md)", boxShadow: "var(--pp-shadow-sm)" }}>
                  <p style={{ fontSize: "2rem", marginBottom: "var(--pp-space-3)" }} aria-hidden="true"></p>
                  <p style={{ fontWeight: "600", color: "var(--pp-ocean)" }}>Grau-du-Roi</p>
                  <p style={{ color: "var(--pp-gray)", fontSize: "var(--pp-text-sm)" }}>15 min</p>
                </div>
                <div style={{ textAlign: "center", padding: "var(--pp-space-6)", background: "white", borderRadius: "var(--pp-radius-md)", boxShadow: "var(--pp-shadow-sm)" }}>
                  <p style={{ fontSize: "2rem", marginBottom: "var(--pp-space-3)" }} aria-hidden="true"></p>
                  <p style={{ fontWeight: "600", color: "var(--pp-ocean)" }}>Palavas-les-Flots</p>
                  <p style={{ color: "var(--pp-gray)", fontSize: "var(--pp-text-sm)" }}>40 min</p>
                </div>
              </div>
            </div>
          </section>
      
          <section className="pp-cta-section" aria-labelledby="cta-rest-seo-title">
            <div className="pp-container" style={{ textAlign: "center" }}>
              <h2 className="pp-title pp-title--light" id="cta-rest-seo-title" data-pp-reveal>Réservez votre table au meilleur restaurant paillote d'Aigues-Mortes</h2>
              <p className="pp-subtitle pp-subtitle--light" style={{ marginInline: "auto", marginBottom: "var(--pp-space-10)" }} data-pp-reveal data-pp-delay="1">Ouvert de juin à septembre · Mercredi → Samedi de 12h à 19h, Dimanche de 12h à minuit (United). Réservation conseillée.</p>
              <div style={{ display: "flex", gap: "var(--pp-space-4)", justifyContent: "center", flexWrap: "wrap" }} data-pp-reveal data-pp-delay="2">
                <ZenchefReserveLink className="pp-btn pp-btn--primary pp-btn--lg">Réserver une table</ZenchefReserveLink>
                <a href="/restaurant" className="pp-btn pp-btn--secondary pp-btn--lg">Voir les menus</a>
              </div>
            </div>
          </section>
    </>
  );
}
