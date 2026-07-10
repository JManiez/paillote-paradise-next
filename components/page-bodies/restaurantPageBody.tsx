/* Migré depuis lib/pages-html — éditable en React */
import Image from 'next/image';
import type { ReactNode } from 'react';
import { PhotoCarousel } from '@/components/PhotoCarousel';
import { TAPAS_CAROUSEL_PLACEHOLDERS } from '@/lib/carouselPlaceholders';
import { PP_PHONE_E164 } from '@/lib/publicPhone';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { PageHeroImage } from '@/components/PageHeroImage';
import { ZenchefReserveLink } from '@/components/ZenchefReserveLink';

export function RestaurantPageBody(): ReactNode {
  return (
    <>
      <section className="pp-page-hero" aria-labelledby="page-title">
            <PageHeroImage heroKey="restaurant" />
            <div className="pp-page-hero__breadcrumb-wrap">
              <PageBreadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Bar à Tapas' }]} />
            </div>
            <div className="pp-page-hero__content">
              <span className="pp-eyebrow pp-eyebrow--gold">Tapas &amp; Partage</span>
              <h1 className="pp-page-hero__title" id="page-title">Bar à Tapas</h1>
              <p className="pp-page-hero__subtitle">Tapas méditerranéennes · Vins du domaine · Terrasse face à la piscine</p>
            </div>
      
            
            <div className="pp-wave-bottom" aria-hidden="true">
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none"><path fill="var(--pp-sand)" d="M0,40 C200,80 400,0 600,40 C800,80 1000,20 1200,50 L1200,120 L0,120 Z"/></svg>
            </div>
          </section>
      
          
          <section className="pp-section" style={{ background: "var(--pp-sand)" }} aria-labelledby="intro-title">
            <div className="pp-blob pp-blob--gold" style={{ width: "480px", height: "480px", top: "-10%", right: "-8%", opacity: "0.3" }} aria-hidden="true"></div>
      
            <div className="pp-container" style={{ position: "relative", zIndex: "2" }}>
              <div className="pp-grid-2" style={{ alignItems: "center", gap: "var(--pp-space-16)" }}>
                <div data-pp-reveal="left">
                  <span className="pp-eyebrow pp-eyebrow--theatrical">Notre philosophie</span>
                  <h2 className="pp-title pp-title--editorial" id="intro-title">Une paillote qui sent le <em className="pp-word-gold">soleil de Camargue</em></h2>
                  <p className="pp-subtitle" style={{ marginBottom: "var(--pp-space-6)" }}>
                    Ici, on partage. Des planches, des tapas, des verres de vin du domaine —
                    tout est préparé maison avec les produits du terroir gardois et des pêcheurs locaux.
                    Convivial, généreux, <strong>sans chichi</strong>.
                  </p>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-6)" }}>
                    Installez-vous sur la terrasse ou au bord de la piscine, les pieds dans l'eau ou dans le sable,
                    et profitez de l'ambiance unique de notre paillote privée — isolée sur le Domaine du Petit Chaumont,
                    <strong>loin de toute agitation</strong>, avec parking gratuit sur place.
                  </p>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-8)" }}>
                    Et pour accompagner tout ça : nos <strong>cocktails maison</strong>, les <strong>vins bio du domaine</strong>
                    (blanc, rosé, rouge — Domaine du Petit Chaumont), et une sélection de boissons pour tous les goûts.
                  </p>
                  <div style={{ display: "flex", gap: "var(--pp-space-4)", flexWrap: "wrap" }}>
                    <ZenchefReserveLink className="pp-btn pp-btn--primary pp-magnetic">Réserver une table</ZenchefReserveLink>
                    <a href="#carte-tapas" className="pp-btn pp-btn--outline">Voir la carte tapas</a>
                  </div>
                </div>
                <div data-pp-reveal="right" style={{ borderRadius: "var(--pp-radius-xl)", overflow: "hidden", boxShadow: "var(--pp-shadow-lg)" }}>
                  <Image
                    src="/assets/images/universe-restaurant.jpg"
                    alt="Terrasse et piscine du bar à tapas La Paillote Paradise — Domaine du Petit Chaumont"
                    width={700}
                    height={500}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>
      
              
              <div className="pp-grid-2" style={{ alignItems: "center", gap: "var(--pp-space-12)", marginTop: "var(--pp-space-24)" }}>
                <div data-pp-reveal="left">
                  <span className="pp-eyebrow">Aperçu de la carte</span>
                  <h3 className="pp-title" style={{ fontSize: "var(--pp-text-3xl)" }}>Quelques notes du <em className="pp-word-gold">moment</em></h3>
                  <p className="pp-subtitle">Carte renouvelée selon les arrivages. Voici ce qui chante en cuisine cette semaine.</p>
                </div>
                <div className="pp-vmarquee" data-pp-reveal="right" aria-label="Aperçu menu défilant">
                  <div className="pp-vmarquee__track">
                    <div className="pp-vmarquee__item"><span>Planche de la mer</span><span>28</span></div>
                    <div className="pp-vmarquee__item"><span>Tataki de thon rouge au sésame</span><span>16</span></div>
                    <div className="pp-vmarquee__item"><span>Guacamole maison et tortillas</span><span>10</span></div>
                    <div className="pp-vmarquee__item"><span>Croquetas de jambon ibérique</span><span>8</span></div>
                    <div className="pp-vmarquee__item"><span>Planche mixte charcuterie &amp; fromage</span><span>22</span></div>
                    <div className="pp-vmarquee__item"><span>Focaccia mortadelle stracciatella et pesto</span><span>14</span></div>
                    <div className="pp-vmarquee__item"><span>Couteaux en persillade</span><span>12</span></div>
                    <div className="pp-vmarquee__item"><span>Glaces et Sorbet artisanaux</span><span>4,50</span></div>
                    
                    <div className="pp-vmarquee__item" aria-hidden="true"><span>Planche de la mer</span><span>28</span></div>
                    <div className="pp-vmarquee__item" aria-hidden="true"><span>Tataki de thon rouge au sésame</span><span>16</span></div>
                    <div className="pp-vmarquee__item" aria-hidden="true"><span>Guacamole maison et tortillas</span><span>10</span></div>
                    <div className="pp-vmarquee__item" aria-hidden="true"><span>Croquetas de jambon ibérique</span><span>8</span></div>
                    <div className="pp-vmarquee__item" aria-hidden="true"><span>Planche mixte charcuterie &amp; fromage</span><span>22</span></div>
                    <div className="pp-vmarquee__item" aria-hidden="true"><span>Focaccia mortadelle stracciatella et pesto</span><span>14</span></div>
                    <div className="pp-vmarquee__item" aria-hidden="true"><span>Couteaux en persillade</span><span>12</span></div>
                    <div className="pp-vmarquee__item" aria-hidden="true"><span>Glaces et Sorbet artisanaux</span><span>4,50</span></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      
          
          <section className="pp-section" id="carte-tapas" style={{ background: "var(--pp-sand)" }} aria-labelledby="tapas-title">
            <div className="pp-divider pp-divider--top pp-divider--wave" data-fill="sand-ultra" aria-hidden="true">
              <svg viewBox="0 0 1200 110" preserveAspectRatio="none"><path d="M0,40 C200,90 400,0 600,40 C800,80 1000,10 1200,50 L1200,0 L0,0 Z"/></svg>
            </div>
            <div className="pp-blob pp-blob--ocean" style={{ width: "400px", height: "400px", top: "-5%", right: "-6%", opacity: "0.18" }} aria-hidden="true"></div>
            <div className="pp-blob pp-blob--gold" style={{ width: "300px", height: "300px", bottom: "10%", left: "-4%", opacity: "0.15" }} aria-hidden="true"></div>
      
            <div className="pp-container" style={{ position: "relative", zIndex: "2" }}>
              <div className="pp-section-header" data-pp-reveal>
                <span className="pp-eyebrow pp-eyebrow--gold">Saison 2026</span>
                <h2 className="pp-title pp-title--editorial" id="tapas-title">La <em className="pp-word-gold">Carte</em> Tapas</h2>
                <p className="pp-subtitle">Partagez, picorez, savourez — une cuisine du soleil pensée pour être vécue ensemble.</p>
              </div>

              <div style={{ marginBottom: "var(--pp-space-16)" }} data-pp-reveal>
                <PhotoCarousel
                  items={TAPAS_CAROUSEL_PLACEHOLDERS}
                  ariaLabel="Plats et tapas — La Paillote Paradise"
                  id="carousel-tapas"
                />
              </div>
      
              
              <div style={{ marginBottom: "var(--pp-space-16)" }} data-pp-reveal>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--pp-space-4)", marginBottom: "var(--pp-space-8)" }}>
                  <span style={{ fontSize: "1.8rem" }} aria-hidden="true"></span>
                  <h3 style={{ fontFamily: "var(--pp-font-serif)", fontSize: "var(--pp-text-2xl)", color: "var(--pp-ocean)", margin: "0" }}>Planches à partager</h3>
                  <div style={{ flex: "1", height: "1px", background: "linear-gradient(to right, rgba(var(--pp-ocean-rgb),.3), transparent)" }}></div>
                </div>
                <div className="pp-tapas-grid">
                  <div className="pp-tapas-item" data-pp-reveal data-pp-delay="1">
                    <div className="pp-tapas-item__body">
                      <p className="pp-tapas-item__name">Guacamole maison et tortillas</p>
                    </div>
                    <span className="pp-tapas-item__price">10€</span>
                  </div>
                  <div className="pp-tapas-item" data-pp-reveal data-pp-delay="2">
                    <div className="pp-tapas-item__body">
                      <p className="pp-tapas-item__name">Planche de charcuterie ibérique</p>
                    </div>
                    <span className="pp-tapas-item__price">20€</span>
                  </div>
                  <div className="pp-tapas-item" data-pp-reveal data-pp-delay="3">
                    <div className="pp-tapas-item__body">
                      <p className="pp-tapas-item__name">Planche mixte charcuterie &amp; fromage</p>
                    </div>
                    <span className="pp-tapas-item__price">22€</span>
                  </div>
                  <div className="pp-tapas-item" data-pp-reveal data-pp-delay="4">
                    <div className="pp-tapas-item__body">
                      <p className="pp-tapas-item__name">Planche de fromage</p>
                    </div>
                    <span className="pp-tapas-item__price">18€</span>
                  </div>
                  <div className="pp-tapas-item pp-tapas-item--highlight" data-pp-reveal data-pp-delay="5">
                    <div className="pp-tapas-item__body">
                      <p className="pp-tapas-item__name">Planche de la mer</p>
                      <p className="pp-tapas-item__desc">Couteaux en persillade · Poulpe mariné · Chipiron · Gambas en panure frits · Tapas du moment</p>
                    </div>
                    <span className="pp-tapas-item__price">28€</span>
                  </div>
                </div>
              </div>
      
              
              <div style={{ marginBottom: "var(--pp-space-16)" }} data-pp-reveal>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--pp-space-4)", marginBottom: "var(--pp-space-8)" }}>
                  <span style={{ fontSize: "1.8rem" }} aria-hidden="true"></span>
                  <h3 style={{ fontFamily: "var(--pp-font-serif)", fontSize: "var(--pp-text-2xl)", color: "var(--pp-ocean)", margin: "0" }}>Finger food</h3>
                  <div style={{ flex: "1", height: "1px", background: "linear-gradient(to right, rgba(var(--pp-ocean-rgb),.3), transparent)" }}></div>
                </div>
                <div className="pp-tapas-grid">
                  <div className="pp-tapas-item" data-pp-reveal data-pp-delay="1">
                    <div className="pp-tapas-item__body">
                      <p className="pp-tapas-item__name">Pan con tomate</p>
                    </div>
                    <span className="pp-tapas-item__price">4€</span>
                  </div>
                  <div className="pp-tapas-item" data-pp-reveal data-pp-delay="2">
                    <div className="pp-tapas-item__body">
                      <p className="pp-tapas-item__name">Panier de frites</p>
                    </div>
                    <span className="pp-tapas-item__price">6€</span>
                  </div>
                  <div className="pp-tapas-item" data-pp-reveal data-pp-delay="3">
                    <div className="pp-tapas-item__body">
                      <p className="pp-tapas-item__name">Falafels et Tzatziki maison</p>
                    </div>
                    <span className="pp-tapas-item__price">9€</span>
                  </div>
                  <div className="pp-tapas-item" data-pp-reveal data-pp-delay="4">
                    <div className="pp-tapas-item__body">
                      <p className="pp-tapas-item__name">Croquetas de jambon ibérique</p>
                    </div>
                    <span className="pp-tapas-item__price">8€</span>
                  </div>
                  <div className="pp-tapas-item" data-pp-reveal data-pp-delay="5">
                    <div className="pp-tapas-item__body">
                      <p className="pp-tapas-item__name">Croquetas de manchego</p>
                    </div>
                    <span className="pp-tapas-item__price">8€</span>
                  </div>
                  <div className="pp-tapas-item" data-pp-reveal data-pp-delay="6">
                    <div className="pp-tapas-item__body">
                      <p className="pp-tapas-item__name">Encornets et seiches grillées en persillade</p>
                      <p className="pp-tapas-item__desc">Aïoli maison</p>
                    </div>
                    <span className="pp-tapas-item__price">9€</span>
                  </div>
                  <div className="pp-tapas-item" data-pp-reveal data-pp-delay="7">
                    <div className="pp-tapas-item__body">
                      <p className="pp-tapas-item__name">Couteaux en persillade</p>
                    </div>
                    <span className="pp-tapas-item__price">12€</span>
                  </div>
                  <div className="pp-tapas-item" data-pp-reveal data-pp-delay="8">
                    <div className="pp-tapas-item__body">
                      <p className="pp-tapas-item__name">Tenders de poulet mayonnaise pimenté</p>
                    </div>
                    <span className="pp-tapas-item__price">10€</span>
                  </div>
                </div>
              </div>
      
              
              <div style={{ marginBottom: "var(--pp-space-16)" }} data-pp-reveal>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--pp-space-4)", marginBottom: "var(--pp-space-8)" }}>
                  <span style={{ fontSize: "1.8rem" }} aria-hidden="true"></span>
                  <h3 style={{ fontFamily: "var(--pp-font-serif)", fontSize: "var(--pp-text-2xl)", color: "var(--pp-ocean)", margin: "0" }}>Tapas du moment</h3>
                  <div style={{ flex: "1", height: "1px", background: "linear-gradient(to right, rgba(var(--pp-ocean-rgb),.3), transparent)" }}></div>
                </div>
                <div className="pp-tapas-grid">
                  <div className="pp-tapas-item pp-tapas-item--highlight" data-pp-reveal data-pp-delay="1">
                    <div className="pp-tapas-item__body">
                      <p className="pp-tapas-item__name">Tataki de thon rouge au sésame</p>
                    </div>
                    <span className="pp-tapas-item__price">16€</span>
                  </div>
                  <div className="pp-tapas-item pp-tapas-item--highlight" data-pp-reveal data-pp-delay="2">
                    <div className="pp-tapas-item__body">
                      <p className="pp-tapas-item__name">Focaccia mortadelle stracciatella et pesto</p>
                    </div>
                    <span className="pp-tapas-item__price">14€</span>
                  </div>
                  <div className="pp-tapas-item pp-tapas-item--highlight" data-pp-reveal data-pp-delay="3">
                    <div className="pp-tapas-item__body">
                      <p className="pp-tapas-item__name">Gravlax de saumon aux herbes</p>
                      <p className="pp-tapas-item__desc">Fromage frais et toasts</p>
                    </div>
                    <span className="pp-tapas-item__price">13€</span>
                  </div>
                </div>
              </div>
      
              
              <div style={{ marginBottom: "var(--pp-space-16)" }} data-pp-reveal>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--pp-space-4)", marginBottom: "var(--pp-space-8)" }}>
                  <span style={{ fontSize: "1.8rem" }} aria-hidden="true"></span>
                  <h3 style={{ fontFamily: "var(--pp-font-serif)", fontSize: "var(--pp-text-2xl)", color: "var(--pp-ocean)", margin: "0" }}>Salades</h3>
                  <div style={{ flex: "1", height: "1px", background: "linear-gradient(to right, rgba(var(--pp-ocean-rgb),.3), transparent)" }}></div>
                </div>
                <div className="pp-tapas-grid">
                  <div className="pp-tapas-item" data-pp-reveal data-pp-delay="1">
                    <div className="pp-tapas-item__body">
                      <p className="pp-tapas-item__name">Salade Cesar</p>
                    </div>
                    <span className="pp-tapas-item__price">17€</span>
                  </div>
                  <div className="pp-tapas-item" data-pp-reveal data-pp-delay="2">
                    <div className="pp-tapas-item__body">
                      <p className="pp-tapas-item__name">Salade de tomates burrata et roquette</p>
                    </div>
                    <span className="pp-tapas-item__price">16€</span>
                  </div>
                </div>
              </div>
      
              
              <div data-pp-reveal>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--pp-space-4)", marginBottom: "var(--pp-space-8)" }}>
                  <span style={{ fontSize: "1.8rem" }} aria-hidden="true"></span>
                  <h3 style={{ fontFamily: "var(--pp-font-serif)", fontSize: "var(--pp-text-2xl)", color: "var(--pp-ocean)", margin: "0" }}>Desserts</h3>
                  <div style={{ flex: "1", height: "1px", background: "linear-gradient(to right, rgba(var(--pp-ocean-rgb),.3), transparent)" }}></div>
                </div>
                <div className="pp-tapas-grid">
                  <div className="pp-tapas-item" data-pp-reveal data-pp-delay="1">
                    <div className="pp-tapas-item__body">
                      <p className="pp-tapas-item__name">Plateaux de fruits frais à partager</p>
                    </div>
                    <span className="pp-tapas-item__price">15€</span>
                  </div>
                  <div className="pp-tapas-item" data-pp-reveal data-pp-delay="2">
                    <div className="pp-tapas-item__body">
                      <p className="pp-tapas-item__name">Glaces et Sorbet artisanaux</p>
                    </div>
                    <span className="pp-tapas-item__price">4,50€ / U</span>
                  </div>
                </div>
              </div>
      
              
              <div style={{ marginTop: "var(--pp-space-12)", textAlign: "center" }} data-pp-reveal>
                <p style={{ color: "var(--pp-gray)", fontSize: "var(--pp-text-sm)", fontStyle: "italic" }}>
                  Carte susceptible d'évoluer selon les arrivages et la saison. <strong>Tous nos plats sont préparés maison</strong>, sauces et desserts inclus.
                </p>
              </div>
            </div>
          </section>
      
          
          <section className="pp-section pp-cta-section" aria-labelledby="res-cta-title">
            <div className="pp-container">
              <div className="pp-cta-section__content">
                <span className="pp-eyebrow pp-eyebrow--gold" data-pp-reveal>On vous attend</span>
                <h2 className="pp-title" id="res-cta-title" data-pp-reveal data-pp-delay="1" style={{ color: "var(--pp-white)" }}>
                  Venez profiter de la paillote
                </h2>
                <p className="pp-subtitle pp-subtitle--light" style={{ marginInline: "auto", marginBottom: "var(--pp-space-10)" }} data-pp-reveal data-pp-delay="2">
                  Tapas, cocktails, vin du domaine — réservation conseillée,
                  surtout en juillet-août.
                </p>
                <div style={{ display: "flex", gap: "var(--pp-space-4)", justifyContent: "center", flexWrap: "wrap" }} data-pp-reveal data-pp-delay="3">
                  <ZenchefReserveLink className="pp-btn pp-btn--gold pp-btn--lg pp-magnetic">Réserver une table</ZenchefReserveLink>
                  <a href={`tel:${PP_PHONE_E164}`} className="pp-btn pp-btn--secondary pp-btn--lg pp-magnetic">Appeler directement</a>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
