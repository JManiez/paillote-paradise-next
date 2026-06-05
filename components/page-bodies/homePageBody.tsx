/* Migré depuis lib/pages-html — éditable en React */
import Image from 'next/image';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { HOME_GALLERY_PREVIEW_COUNT } from '@/lib/galleryConstants';
import { PARADISE_GALLERY } from '@/lib/paradiseGallery';
import { SHOTGUN_UNITED_URL } from '@/lib/shotgun';
import { SITE_HOURS_LINE, SITE_SEASON } from '@/lib/siteHours';
import { ZenchefTransatLink } from '@/components/ZenchefOpenLink';

/** Sections masquées temporairement */
const SHOW_HOME_DIMANCHE = false;
const SHOW_HOME_STATS = false;

export function HomePageBody(): ReactNode {
  const galleryPreview = PARADISE_GALLERY.slice(0, HOME_GALLERY_PREVIEW_COUNT);
  const galleryTotal = PARADISE_GALLERY.length;

  return (
    <>
      <section className="pp-hero" aria-labelledby="hero-title">
            <Image
              src="/assets/images/hero-home-bg.jpg"
              alt="La Paillote Paradise — piscine privée, transats et parasols au Domaine du Petit Chaumont, Aigues-Mortes"
              fill
              className="pp-hero__img"
              priority
              sizes="100vw"
            />
            <div className="pp-hero__bg" aria-hidden="true"></div>
            <div className="pp-hero__grain" aria-hidden="true"></div>
      
            <div className="pp-hero__content">
              <span className="pp-eyebrow pp-eyebrow--gold" data-pp-reveal="fade">Domaine du Petit Chaumont · Aigues-Mortes</span>
              <h1 className="pp-hero__title" id="hero-title" data-pp-reveal data-pp-delay="1">
                L'art de vivre<br /><em className="pp-text-gold">en Camargue</em>
              </h1>
              <p className="pp-hero__subtitle" data-pp-reveal data-pp-delay="2">
                Bar à tapas, cocktails, vins du domaine, piscine privée et soirées —
                un écrin de liberté entre sel et vignes.
              </p>
              <div className="pp-hero__ctas" data-pp-reveal data-pp-delay="3">
                <a href="/restaurant" className="pp-btn pp-btn--primary pp-btn--lg pp-magnetic">Voir la carte tapas</a>
                <a href="/galerie" className="pp-btn pp-btn--secondary pp-btn--lg pp-magnetic">Voir la galerie</a>
              </div>
            </div>
      
            <div className="pp-hero__scroll" aria-hidden="true">
              <div className="pp-hero__scroll-arrow"></div>
              <span>Découvrir</span>
            </div>
          </section>
      
          
          <div className="pp-strip" aria-hidden="true">
            <div className="pp-strip__inner">
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> Bar à Tapas</span>
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> Piscine privée</span>
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> Transats premium</span>
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> Cocktails maison</span>
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> Vins du domaine</span>
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> Soirées DJ</span>
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> Parking gratuit</span>
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> Cadre isolé en Camargue</span>
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> Bar à Tapas</span>
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> Piscine privée</span>
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> Transats premium</span>
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> Cocktails maison</span>
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> Vins du domaine</span>
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> Soirées DJ</span>
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> Parking gratuit</span>
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> Cadre isolé en Camargue</span>
            </div>
          </div>
      
          
          <section className="pp-section pp-universe" aria-labelledby="univers-title">
      
            
            <div className="pp-divider pp-divider--top pp-divider--wave" data-fill="sand-ultra" aria-hidden="true">
              <svg viewBox="0 0 1200 110" preserveAspectRatio="none"><path d="M0,40 C200,90 400,0 600,40 C800,80 1000,10 1200,50 L1200,0 L0,0 Z"/></svg>
            </div>
      
            <div className="pp-blob pp-blob--gold" style={{ width: "520px", height: "520px", top: "-10%", right: "-8%" }} aria-hidden="true"></div>
            <div className="pp-blob pp-blob--palm" style={{ width: "380px", height: "380px", bottom: "-8%", left: "-6%", animationDelay: "-6s" }} aria-hidden="true"></div>
      
            <div className="pp-container" style={{ position: "relative", zIndex: "2" }}>
              <div className="pp-section-header" data-pp-reveal>
                <span className="pp-eyebrow pp-eyebrow--theatrical">Notre univers</span>
                <h2 className="pp-title pp-title--editorial" id="univers-title">Quatre expériences,<br />un seul <em className="pp-word-gold">endroit magique</em></h2>
                <p className="pp-subtitle">
                  Du Mercredi au Samedi de 12h à 19h, et chaque Dimanche jusqu'à minuit pour United —
                  La Paillote Paradise vous offre une parenthèse hors du temps dans le plus beau domaine de Camargue.
                </p>
              </div>
      
              <div className="pp-bento" role="list">
      
                
                <a href="/restaurant" className="pp-bento__cell pp-bento__cell--xl" role="listitem" aria-label="Découvrir le bar à tapas">
                  <Image src="/assets/images/universe-restaurant.jpg" alt="Bar à tapas Paillote Paradise" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectPosition: "60% center" }} />
                  <span className="pp-bento__num" aria-hidden="true">01</span>
                  <div className="pp-bento__body">
                    <h3 className="pp-bento__title">Bar à Tapas</h3>
                    <p className="pp-bento__desc">Tapas méditerranéennes, vins du domaine, terrasse face à la piscine — tout est fait maison.</p>
                    <span className="pp-bento__cta">Voir la carte</span>
                  </div>
                </a>
      
                
                <a href="/piscine-transats" className="pp-bento__cell pp-bento__cell--vert" role="listitem" aria-label="Reserver un transat">
                  <Image src="/assets/images/universe-piscine.jpg" alt="Piscine et transats Paillote Paradise" fill sizes="(max-width: 768px) 100vw, 25vw" style={{ objectPosition: "center 65%" }} />
                  <span className="pp-bento__num" aria-hidden="true">02</span>
                  <div className="pp-bento__body">
                    <h3 className="pp-bento__title">Piscine<br />& Transats</h3>
                    <p className="pp-bento__desc">Transats premium au bord d'une piscine privée à couper le souffle.</p>
                    <span className="pp-bento__cta">Réserver</span>
                  </div>
                </a>
      
                
                <a href="/bar" className="pp-bento__cell pp-bento__cell--sq" role="listitem" aria-label="Decouvrir la carte des cocktails">
                  <Image src="/assets/images/universe-bar.jpg" alt="Bar à cocktails Paillote Paradise" fill sizes="(max-width: 768px) 100vw, 25vw" style={{ objectPosition: "center 55%" }} />
                  <span className="pp-bento__num" aria-hidden="true">04</span>
                  <div className="pp-bento__body">
                    <h3 className="pp-bento__title">Bar</h3>
                    <p className="pp-bento__desc">Cocktails signature et mocktails raffinés.</p>
                    <span className="pp-bento__cta">Carte</span>
                  </div>
                </a>
      
                
                <a href="/soirees" className="pp-bento__cell pp-bento__cell--horiz" role="listitem" aria-label="Voir le programme des soirees">
                  <Image src="/assets/images/bento-soirees-united.jpg" alt="Soirées United — ambiance néon La Paillote Paradise" fill sizes="(max-width: 768px) 100vw, 50vw" />
                  <span className="pp-bento__num" aria-hidden="true">03</span>
                  <div className="pp-bento__body">
                    <h3 className="pp-bento__title">Soirées & DJ Sets</h3>
                    <p className="pp-bento__desc">Soirées thématiques toute la semaine et la grande soirée du dimanche — le rendez-vous incontournable de la région.</p>
                    <span className="pp-bento__cta">Programme</span>
                  </div>
                </a>
      
              </div>
            </div>
      
            
            <div className="pp-divider pp-divider--bottom pp-divider--curve" data-fill="sand" aria-hidden="true">
              <svg viewBox="0 0 1200 130" preserveAspectRatio="none"><path d="M0,80 C300,130 600,30 900,70 C1050,90 1150,110 1200,100 L1200,130 L0,130 Z"/></svg>
            </div>
          </section>
      
          
          <section className="pp-section pp-philosophy" aria-labelledby="philosophy-quote">
            <div className="pp-philosophy__deco" aria-hidden="true"></div>
            <span className="pp-philosophy__quote-mark" aria-hidden="true">"</span>
            <div className="pp-blob pp-blob--gold" style={{ width: "420px", height: "420px", top: "20%", right: "-10%", opacity: "0.25" }} aria-hidden="true"></div>
      
            <div className="pp-container pp-container--sm">
              <p className="pp-philosophy__quote" id="philosophy-quote" data-pp-reveal>
                Ici, le temps s'arrête. Entre <em className="pp-word-gold">sel et vignes</em>, chaque instant
                devient un souvenir — une invitation à savourer l'essentiel.
              </p>
              <span className="pp-philosophy__author" data-pp-reveal data-pp-delay="1">La Paillote Paradise</span>
      
              <svg className="pp-philosophy__signature" viewBox="0 0 320 90" aria-hidden="true">
                <path d="M10,55 Q25,15 45,40 T80,45 Q95,30 110,50 T145,45 Q160,20 175,55 Q190,75 210,40 T245,55 Q260,35 280,50 Q295,60 310,40"/>
              </svg>
            </div>
      
            
            <div className="pp-divider pp-divider--bottom pp-divider--cliff" data-fill="night" aria-hidden="true">
              <svg viewBox="0 0 1200 140" preserveAspectRatio="none"><path d="M0,140 L0,80 C200,40 500,120 800,60 C950,30 1100,80 1200,50 L1200,140 Z"/></svg>
            </div>
          </section>
      
          
          {SHOW_HOME_DIMANCHE && (
          <section className="pp-section--lg pp-sunday" id="dimanche" aria-labelledby="sunday-title">
            <div className="pp-sunday__deco" aria-hidden="true"></div>
            <div className="pp-sunday__halo pp-sunday__halo--left" aria-hidden="true"></div>
            <div className="pp-sunday__halo pp-sunday__halo--right" aria-hidden="true"></div>
            <div className="pp-sunday__bg-text" aria-hidden="true">DIM.</div>
            <div className="pp-particles" data-pp-particles="34" aria-hidden="true"></div>
      
            <div className="pp-container">
      
              
              <div className="pp-sunday__eyebrow" data-pp-reveal>
                <span className="pp-sunday__eyebrow-line" aria-hidden="true"></span>
                <span className="pp-sunday__eyebrow-text">Le rendez-vous du dimanche</span>
                <span className="pp-sunday__eyebrow-star" aria-hidden="true">✦</span>
                <span className="pp-sunday__eyebrow-text">De 12h à minuit</span>
                <span className="pp-sunday__eyebrow-line" aria-hidden="true"></span>
              </div>
      
              <div className="pp-sunday__inner">
      
                
                <div className="pp-sunday__content" data-pp-reveal="left">
      
                  <div className="pp-sunday__label">
                    <span className="pp-sunday__label-dot" aria-hidden="true"></span>
                    Événement phare
                  </div>
      
                  <h2 className="pp-sunday__title" id="sunday-title">
                    United by<br /><em>La Paillote</em>
                  </h2>
      
                  <p className="pp-sunday__caption">
                    <span className="pp-sunday__caption-line" aria-hidden="true"></span>
                    United By La Paillote Paradise
                    <span className="pp-sunday__caption-line" aria-hidden="true"></span>
                  </p>
      
                  <p className="pp-sunday__text">
                    On ne la présente plus. La <strong>United by Paillote Paradise</strong> —
                    un rassemblement de DJs internationaux et de passionnés de musique venus de partout,
                    pour s'unir et vivre un moment d'exception.
                  </p>
      
                  
                  <div className="pp-sunday__card">
                    <span className="pp-sunday__card-corner pp-sunday__card-corner--tl" aria-hidden="true"></span>
                    <span className="pp-sunday__card-corner pp-sunday__card-corner--tr" aria-hidden="true"></span>
                    <span className="pp-sunday__card-corner pp-sunday__card-corner--bl" aria-hidden="true"></span>
                    <span className="pp-sunday__card-corner pp-sunday__card-corner--br" aria-hidden="true"></span>
      
                    <div className="pp-sunday__card-info">
                      <span className="pp-sunday__card-label">Prochaine édition</span>
                      <span className="pp-sunday__card-date">Dimanche 10 mai 2026</span>
                      <span className="pp-sunday__card-time">12h00 → 00h00 · 12h non-stop</span>
                    </div>
      
                    <div className="pp-sunday__card-sep" aria-hidden="true"></div>
      
                    <div className="pp-countdown pp-countdown--neon" data-pp-countdown="compact" role="status" aria-live="polite">
                      <span className="pp-countdown__num">—</span>
                      <span className="pp-countdown__label">jours</span>
                    </div>
                  </div>
      
                  
                  <ul className="pp-sunday__features" aria-label="Caractéristiques de la soirée du dimanche">
                    <li className="pp-sunday__feature">
                      <span className="pp-sunday__feature-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
                      </span>
                      <div className="pp-sunday__feature-body">
                        <strong>DJs internationaux</strong>
                        <span>Line-up exclusif de 12h à minuit</span>
                      </div>
                    </li>
                    <li className="pp-sunday__feature">
                      <span className="pp-sunday__feature-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M2 14c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1 2-1 4-1"/><path d="M2 19c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1 2-1 4-1"/><path d="M2 9c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1 2-1 4-1"/></svg>
                      </span>
                      <div className="pp-sunday__feature-body">
                        <strong>Pool party nocturne</strong>
                        <span>Au bord de la piscine illuminée</span>
                      </div>
                    </li>
                    <li className="pp-sunday__feature">
                      <span className="pp-sunday__feature-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 3h14l-7 9-7-9z"/><line x1="12" y1="12" x2="12" y2="20"/><line x1="8" y1="20" x2="16" y2="20"/></svg>
                      </span>
                      <div className="pp-sunday__feature-body">
                        <strong>Cocktails signature</strong>
                        <span>Bar ouvert jusqu'à minuit</span>
                      </div>
                    </li>
                    <li className="pp-sunday__feature">
                      <span className="pp-sunday__feature-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2l9 4v6c0 5-3.8 9.4-9 10-5.2-.6-9-5-9-10V6l9-4z"/><polyline points="9 12 11 14 15 10"/></svg>
                      </span>
                      <div className="pp-sunday__feature-body">
                        <strong>Accès privatif</strong>
                        <span>Réservé aux clients de la Paillote</span>
                      </div>
                    </li>
                  </ul>
      
                  <div className="pp-sunday__ctas">
                    <a
                      href={SHOTGUN_UNITED_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pp-btn pp-btn--gold pp-btn--lg pp-magnetic"
                    >
                      Réserver pour dimanche
                    </a>
                    <a href="/soirees" className="pp-sunday__link">
                      Voir le line-up
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
      
                
                <div className="pp-sunday__visual" data-pp-reveal="right">
      
                  <div className="pp-sunday__frame">
                    <span className="pp-sunday__frame-corner pp-sunday__frame-corner--tl" aria-hidden="true"></span>
                    <span className="pp-sunday__frame-corner pp-sunday__frame-corner--tr" aria-hidden="true"></span>
                    <span className="pp-sunday__frame-corner pp-sunday__frame-corner--bl" aria-hidden="true"></span>
                    <span className="pp-sunday__frame-corner pp-sunday__frame-corner--br" aria-hidden="true"></span>
      
                    <div className="pp-sunday__img-frame">
                      <Image
                        src="/assets/images/soiree-dimanche.jpg"
                        alt="La grande soirée du dimanche — ambiance DJ set au bord de la piscine de la Paillote Paradise"
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                      <span className="pp-sunday__img-overlay" aria-hidden="true"></span>
                      <span className="pp-sunday__img-grain" aria-hidden="true"></span>
                    </div>
      
                    
                    <div className="pp-sunday__seal" aria-hidden="true">
                      <svg viewBox="0 0 200 200">
                        <defs>
                          <path id="ppSundayCircle" d="M 100,100 m -76,0 a 76,76 0 1,1 152,0 a 76,76 0 1,1 -152,0" />
                        </defs>
                        <text>
                          <textPath href="#ppSundayCircle" startOffset="0">
                            ✦  INVITATION ONLY  ✦  RÉSERVÉ AUX CLIENTS  
                          </textPath>
                        </text>
                      </svg>
                      <span className="pp-sunday__seal-center">
                        <span className="pp-sunday__seal-star">✦</span>
                        <span className="pp-sunday__seal-word">United</span>
                      </span>
                    </div>
      
                    
                    <div className="pp-sunday__badge">
                      <span className="pp-sunday__badge-day">DIM.</span>
                      <span className="pp-sunday__badge-line" aria-hidden="true"></span>
                      <span className="pp-sunday__badge-label">12h00<br />↓<br />00h00</span>
                    </div>
                  </div>
      
                  
                  <div className="pp-sunday__stats">
                    <div className="pp-sunday__stat">
                      <span className="pp-sunday__stat-num">26</span>
                      <span className="pp-sunday__stat-label">dimanches<br />par saison</span>
                    </div>
                    <span className="pp-sunday__stat-sep" aria-hidden="true"></span>
                    <div className="pp-sunday__stat">
                      <span className="pp-sunday__stat-num">30K<sup>+</sup></span>
                      <span className="pp-sunday__stat-label">membres<br />communauté</span>
                    </div>
                    <span className="pp-sunday__stat-sep" aria-hidden="true"></span>
                    <div className="pp-sunday__stat">
                      <span className="pp-sunday__stat-num">12h</span>
                      <span className="pp-sunday__stat-label">non-stop<br />de 12h à 00h</span>
                    </div>
                  </div>
                </div>
      
              </div>
      
              
              <div className="pp-sunday__marquee" aria-hidden="true">
                <div className="pp-sunday__marquee-track">
                  <span>✦ DJ SETS</span>
                  <span>✦ POOL PARTY</span>
                  <span>✦ COCKTAILS SIGNATURE</span>
                  <span>✦ LIVE PERFORMANCE</span>
                  <span>✦ OPEN-AIR</span>
                  <span>✦ INVITATION ONLY</span>
                  <span>✦ EVERY SUNDAY</span>
                  <span>✦ DJ SETS</span>
                  <span>✦ POOL PARTY</span>
                  <span>✦ COCKTAILS SIGNATURE</span>
                  <span>✦ LIVE PERFORMANCE</span>
                  <span>✦ OPEN-AIR</span>
                  <span>✦ INVITATION ONLY</span>
                  <span>✦ EVERY SUNDAY</span>
                </div>
              </div>
            </div>
          </section>
          )}
      
          
          {SHOW_HOME_STATS && (
          <section className="pp-section pp-stats" aria-labelledby="stats-title">
            <div className="pp-divider pp-divider--top pp-divider--wave" data-fill="night" aria-hidden="true">
              <svg viewBox="0 0 1200 110" preserveAspectRatio="none"><path d="M0,0 L0,30 C200,80 500,0 800,40 C950,60 1100,30 1200,50 L1200,0 Z"/></svg>
            </div>
            <div className="pp-blob pp-blob--sand" style={{ width: "480px", height: "480px", top: "-15%", left: "-10%", opacity: "0.35" }} aria-hidden="true"></div>
            <div className="pp-container" style={{ position: "relative", zIndex: "2" }}>
              <h2 className="sr-only" id="stats-title">La Paillote Paradise en chiffres</h2>
              <div className="pp-stats__grid">
                <div className="pp-stat" data-pp-reveal data-pp-delay="1">
                  <span className="pp-stat__number" data-count="15" data-suffix="ans">15 ans</span>
                  <span className="pp-stat__label">d'expérience en Camargue</span>
                </div>
                <div className="pp-stat" data-pp-reveal data-pp-delay="2">
                  <span className="pp-stat__number" data-count="5000" data-suffix="+">5000+</span>
                  <span className="pp-stat__label">convives accueillis chaque saison</span>
                </div>
                <div className="pp-stat" data-pp-reveal data-pp-delay="3">
                  <span className="pp-stat__number" data-count="80" data-suffix=" m²">80 m²</span>
                  <span className="pp-stat__label">de piscine privée</span>
                </div>
                <div className="pp-stat" data-pp-reveal data-pp-delay="4">
                  <span className="pp-stat__number" data-count="26" data-suffix=" weeks">26</span>
                  <span className="pp-stat__label">dimanches magiques par saison</span>
                </div>
              </div>
            </div>
          </section>
          )}
      
          
          <section className="pp-section pp-agenda" aria-labelledby="agenda-title">
            <div className="pp-container">

              <header className="pp-agenda__head" data-pp-reveal>
                <span className="pp-eyebrow">Agenda</span>
                <h2 className="pp-title pp-title--light" id="agenda-title">Votre semaine<br />en <em>Camargue</em></h2>
                <p className="pp-agenda__lead">
                  Mer. → Sam. : piscine, tapas &amp; cocktails · 12h – 19h · Dimanche : United de 12h à minuit.
                </p>
                <div className="pp-agenda__head-actions">
                  <ZenchefTransatLink className="pp-btn pp-btn--secondary pp-btn--sm">Louer un transat</ZenchefTransatLink>
                  <a href="/soirees" className="pp-btn pp-btn--gold pp-btn--sm">Voir les soirées</a>
                </div>
              </header>

              <div className="pp-agenda__week-wrap" data-pp-reveal data-pp-delay="1">
                <p className="pp-agenda__scroll-hint" aria-hidden="true">Glisser pour voir la semaine →</p>
                <div className="pp-agenda__week" role="list" aria-label="Programme hebdomadaire">

                  <article className="pp-agenda__day pp-agenda__day--rest" role="listitem">
                    <div className="pp-agenda__day-head">
                      <span className="pp-agenda__day-abbr">Lun</span>
                      <span className="pp-agenda__day-name">Lundi</span>
                    </div>
                    <p className="pp-agenda__day-rest">Le domaine se repose</p>
                    <span className="pp-agenda__day-foot">À demain</span>
                  </article>

                  <article className="pp-agenda__day pp-agenda__day--rest" role="listitem">
                    <div className="pp-agenda__day-head">
                      <span className="pp-agenda__day-abbr">Mar</span>
                      <span className="pp-agenda__day-name">Mardi</span>
                    </div>
                    <p className="pp-agenda__day-rest">Le domaine se repose</p>
                  </article>

                  <article className="pp-agenda__day pp-agenda__day--evening" role="listitem">
                    <div className="pp-agenda__day-head">
                      <span className="pp-agenda__day-abbr">Mer</span>
                      <span className="pp-agenda__day-name">Mercredi</span>
                    </div>
                    <div className="pp-agenda__hours">12h – 19h</div>
                    <p className="pp-agenda__day-tag">Journée Paradise</p>
                    <ul className="pp-agenda__acts">
                      <li className="pp-agenda__act">
                        <span className="pp-agenda__act-icon pp-agenda__act-icon--pool" aria-hidden="true"></span>
                        Piscine &amp; transats
                      </li>
                      <li className="pp-agenda__act">
                        <span className="pp-agenda__act-icon pp-agenda__act-icon--tapas" aria-hidden="true"></span>
                        Bar à tapas
                      </li>
                    </ul>
                    <div className="pp-agenda__night">
                      <span className="pp-agenda__night-label">Soirée</span>
                      <p className="pp-agenda__night-title">Salsa &amp; Latin Music</p>
                      <a href="/soirees" className="pp-agenda__night-link">En savoir plus</a>
                    </div>
                  </article>

                  <article className="pp-agenda__day" role="listitem">
                    <div className="pp-agenda__day-head">
                      <span className="pp-agenda__day-abbr">Jeu</span>
                      <span className="pp-agenda__day-name">Jeudi</span>
                    </div>
                    <div className="pp-agenda__hours">12h – 19h</div>
                    <p className="pp-agenda__day-tag">Journée Paradise</p>
                    <ul className="pp-agenda__acts">
                      <li className="pp-agenda__act">
                        <span className="pp-agenda__act-icon pp-agenda__act-icon--pool" aria-hidden="true"></span>
                        Piscine &amp; transats
                      </li>
                      <li className="pp-agenda__act">
                        <span className="pp-agenda__act-icon pp-agenda__act-icon--tapas" aria-hidden="true"></span>
                        Bar à tapas
                      </li>
                      <li className="pp-agenda__act pp-agenda__act--accent">
                        <span className="pp-agenda__act-icon pp-agenda__act-icon--bar" aria-hidden="true"></span>
                        Happy hour
                      </li>
                    </ul>
                  </article>

                  <article className="pp-agenda__day pp-agenda__day--evening" role="listitem">
                    <div className="pp-agenda__day-head">
                      <span className="pp-agenda__day-abbr">Ven</span>
                      <span className="pp-agenda__day-name">Vendredi</span>
                    </div>
                    <div className="pp-agenda__hours">12h – 19h</div>
                    <p className="pp-agenda__day-tag">Journée Paradise</p>
                    <ul className="pp-agenda__acts">
                      <li className="pp-agenda__act">
                        <span className="pp-agenda__act-icon pp-agenda__act-icon--pool" aria-hidden="true"></span>
                        Piscine &amp; transats
                      </li>
                      <li className="pp-agenda__act">
                        <span className="pp-agenda__act-icon pp-agenda__act-icon--tapas" aria-hidden="true"></span>
                        Bar à tapas
                      </li>
                    </ul>
                    <div className="pp-agenda__night">
                      <span className="pp-agenda__night-label">Soirée</span>
                      <p className="pp-agenda__night-title">Soirée généraliste</p>
                      <a href="/soirees" className="pp-agenda__night-link">En savoir plus</a>
                    </div>
                  </article>

                  <article className="pp-agenda__day" role="listitem">
                    <div className="pp-agenda__day-head">
                      <span className="pp-agenda__day-abbr">Sam</span>
                      <span className="pp-agenda__day-name">Samedi</span>
                    </div>
                    <div className="pp-agenda__hours">12h – 19h</div>
                    <p className="pp-agenda__day-tag">Journée Paradise</p>
                    <ul className="pp-agenda__acts">
                      <li className="pp-agenda__act">
                        <span className="pp-agenda__act-icon pp-agenda__act-icon--pool" aria-hidden="true"></span>
                        Piscine &amp; transats
                      </li>
                      <li className="pp-agenda__act">
                        <span className="pp-agenda__act-icon pp-agenda__act-icon--tapas" aria-hidden="true"></span>
                        Bar à tapas
                      </li>
                      <li className="pp-agenda__act pp-agenda__act--accent">
                        <span className="pp-agenda__act-icon pp-agenda__act-icon--bar" aria-hidden="true"></span>
                        Cocktails signature
                      </li>
                    </ul>
                  </article>

                  <article className="pp-agenda__day pp-agenda__day--featured" role="listitem">
                    <div className="pp-agenda__day-head">
                      <span className="pp-agenda__day-abbr">Dim</span>
                      <span className="pp-agenda__day-name">Dimanche</span>
                    </div>
                    <div className="pp-agenda__hours pp-agenda__hours--featured">12h – minuit</div>
                    <p className="pp-agenda__featured-kicker">Événement phare</p>
                    <h3 className="pp-agenda__featured-title">United by La Paillote</h3>
                    <ul className="pp-agenda__acts pp-agenda__acts--featured">
                      <li className="pp-agenda__act">DJ Guest international</li>
                      <li className="pp-agenda__act">Pool party</li>
                      <li className="pp-agenda__act">Line-up exclusif</li>
                    </ul>
                    <a
                      href={SHOTGUN_UNITED_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pp-btn pp-btn--gold pp-btn--xs pp-agenda__featured-cta"
                    >
                      Billets Shotgun
                    </a>
                  </article>

                </div>
              </div>

              <p className="pp-agenda__note" data-pp-reveal data-pp-delay="2">
                {SITE_SEASON} · Lundi &amp; mardi fermés · Réservation conseillée pour les groupes.
              </p>

            </div>
          </section>
      
          
          <div className="pp-strip pp-strip--gold" aria-hidden="true">
            <div className="pp-strip__inner">
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> 15 ans d'experience</span>
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> 5000+ convives par saison</span>
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> 4.8/5 sur Google</span>
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> Parking gratuit sur place</span>
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> 26 dimanches magiques</span>
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> Hors de la foule · Cadre privé</span>
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> Domaine du Petit Chaumont</span>
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> Aigues-Mortes</span>
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> 15 ans d'experience</span>
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> 5000+ convives par saison</span>
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> 4.8/5 sur Google</span>
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> Parking gratuit sur place</span>
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> 26 dimanches magiques</span>
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> Hors de la foule · Cadre privé</span>
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> Domaine du Petit Chaumont</span>
              <span className="pp-strip__item"><span className="pp-strip__dot"></span> Aigues-Mortes</span>
            </div>
          </div>
      
          
          <section className="pp-section pp-reviews" aria-labelledby="reviews-title">
            <div className="pp-container">
              <div className="pp-section-header" data-pp-reveal>
                <span className="pp-eyebrow">Avis clients</span>
                <h2 className="pp-title" id="reviews-title">Ce que disent nos convives</h2>
                <p className="pp-subtitle">
                  Plus de 300 avis Google avec une note de 4,8/5 — votre satisfaction est notre plus belle récompense.
                </p>
              </div>
      
              
              <div className="pp-reviews-widget">
                <div className="elfsight-app-VOTRE_ID_ELFSIGHT" data-elfsight-app-lazy={true}></div>
              </div>
      
              <div className="pp-grid-3 pp-reviews__cards">
      
                <article className="pp-review-card" data-pp-reveal data-pp-delay="1">
                  <span className="pp-review-card__quote" aria-hidden="true">&ldquo;</span>
                  <div className="pp-review-card__stars" aria-label="5 etoiles">
                    <span className="pp-review-card__star"></span>
                    <span className="pp-review-card__star"></span>
                    <span className="pp-review-card__star"></span>
                    <span className="pp-review-card__star"></span>
                    <span className="pp-review-card__star"></span>
                  </div>
                  <p className="pp-review-card__text">
                    La soirée du dimanche — une expérience à vivre absolument !
                    L'ambiance est incroyable, le cadre magnifique. On revient chaque été.
                  </p>
                  <div className="pp-review-card__author">
                    <div className="pp-review-card__avatar">ML</div>
                    <div>
                      <p className="pp-review-card__name">Marie L.</p>
                      <p className="pp-review-card__location">Montpellier</p>
                    </div>
                  </div>
                </article>
      
                <article className="pp-review-card" data-pp-reveal data-pp-delay="2">
                  <span className="pp-review-card__quote" aria-hidden="true">&ldquo;</span>
                  <div className="pp-review-card__stars" aria-label="5 etoiles">
                    <span className="pp-review-card__star"></span>
                    <span className="pp-review-card__star"></span>
                    <span className="pp-review-card__star"></span>
                    <span className="pp-review-card__star"></span>
                    <span className="pp-review-card__star"></span>
                  </div>
                  <p className="pp-review-card__text">
                    Les transats au bord de la piscine, le service impeccable et la cuisine
                    excellente. Un paradis en Camargue, le nom dit tout !
                  </p>
                  <div className="pp-review-card__author">
                    <div className="pp-review-card__avatar">TB</div>
                    <div>
                      <p className="pp-review-card__name">Thomas B.</p>
                      <p className="pp-review-card__location">Paris</p>
                    </div>
                  </div>
                </article>
      
                <article className="pp-review-card" data-pp-reveal data-pp-delay="3">
                  <span className="pp-review-card__quote" aria-hidden="true">&ldquo;</span>
                  <div className="pp-review-card__stars" aria-label="5 etoiles">
                    <span className="pp-review-card__star"></span>
                    <span className="pp-review-card__star"></span>
                    <span className="pp-review-card__star"></span>
                    <span className="pp-review-card__star"></span>
                    <span className="pp-review-card__star"></span>
                  </div>
                  <p className="pp-review-card__text">
                    EVJF organisé ici — un endroit de rêve ! L'équipe a tout géré
                    à la perfection. Mes amies et moi garderons un souvenir impérissable.
                  </p>
                  <div className="pp-review-card__author">
                    <div className="pp-review-card__avatar">CR</div>
                    <div>
                      <p className="pp-review-card__name">Camille R.</p>
                      <p className="pp-review-card__location">Nîmes</p>
                    </div>
                  </div>
                </article>
      
              </div>
            </div>
          </section>
      
          
          <section className="pp-section pp-acces" id="acces" aria-labelledby="acces-title">
            <div className="pp-container">
              <div className="pp-acces__inner">
      
                <div data-pp-reveal="left">
                  <span className="pp-eyebrow">Nous trouver</span>
                  <h2 className="pp-title" id="acces-title">Domaine du<br />Petit Chaumont</h2>
                  <p className="pp-subtitle pp-subtitle--mb">
                    Situé sur le domaine privé du Petit Chaumont à Aigues-Mortes,
                    en plein cœur de la Camargue gardoise.
                  </p>
      
                  <div className="pp-acces__info">
                    <div className="pp-acces__item">
                      <div className="pp-acces__item-icon" aria-hidden="true"></div>
                      <div>
                        <p className="pp-acces__item-title">Adresse</p>
                        <p className="pp-acces__item-text">
                          Route du Petit Chaumont<br />
                          30220 Aigues-Mortes, Gard
                        </p>
                      </div>
                    </div>
                    <div className="pp-acces__item">
                      <div className="pp-acces__item-icon" aria-hidden="true"></div>
                      <div>
                        <p className="pp-acces__item-title">En voiture</p>
                        <p className="pp-acces__item-text">
                          35 min de Montpellier · 30 min de Nîmes<br />
                          15 min du Grau-du-Roi · <strong>Parking gratuit et illimité sur place</strong>
                        </p>
                      </div>
                    </div>
                    <div className="pp-acces__item">
                      <div className="pp-acces__item-icon" aria-hidden="true"></div>
                      <div>
                        <p className="pp-acces__item-title">Cadre privilégié</p>
                        <p className="pp-acces__item-text">
                          Domaine isolé, hors de l'agitation des stations balnéaires —
                          un écrin de nature à 5 minutes de la cité médiévale d'Aigues-Mortes.
                        </p>
                      </div>
                    </div>
                    <div className="pp-acces__item">
                      <div className="pp-acces__item-icon" aria-hidden="true"></div>
                      <div>
                        <p className="pp-acces__item-title">Saison & horaires</p>
                        <p className="pp-acces__item-text">{SITE_HOURS_LINE}</p>
                      </div>
                    </div>
                  </div>
      
                  <div className="pp-acces__cta">
                    <a
                      href="https://maps.google.com/?q=Domaine+du+Petit+Chaumont+Aigues-Mortes"
                      className="pp-btn pp-btn--ocean"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ouvrir l'itineraire dans Google Maps (nouvel onglet)"
                    >
                      Obtenir l'itinéraire
                    </a>
                  </div>
                </div>
      
                <div className="pp-acces__map" data-pp-reveal="right">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45424.69!2d4.1914!3d43.5594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b50c1b0ea46f4b%3A0x!2sDomaine+du+Petit+Chaumont%2C+Aigues-Mortes!5e0!3m2!1sfr!2sfr!4v1"
                    loading="lazy"
                    title="Carte Google Maps — Domaine du Petit Chaumont, Aigues-Mortes"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen={true}
                   />
                </div>
      
              </div>
            </div>
          </section>
      
          
          <section className="pp-section pp-instagram" aria-labelledby="insta-title">
            <div className="pp-container">
              <div className="pp-section-header" data-pp-reveal>
                <span className="pp-eyebrow">Galerie Paradise</span>
                <h2 className="pp-title" id="insta-title">L&apos;ambiance en images</h2>
                <p className="pp-subtitle">
                  Aperçu — {galleryPreview.length} photos sur {galleryTotal}. La galerie complète est sur la page dédiée.
                </p>
              </div>
      
              <div className="pp-instagram__grid" data-pp-reveal>
                {galleryPreview.map((item, index) => (
                  <div className="pp-instagram__item" key={item.src}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 16vw"
                      priority={index < 6}
                    />
                  </div>
                ))}
              </div>

              <div className="pp-instagram__preview-actions" data-pp-reveal>
                <Link href="/galerie" className="pp-btn pp-btn--primary pp-magnetic">
                  Voir toute la galerie ({galleryTotal} photos)
                </Link>
              </div>
      
              <a href="https://www.instagram.com/pailloteparadise" target="_blank" rel="noopener noreferrer" className="pp-instagram__handle" data-pp-reveal>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                @pailloteparadise
              </a>
            </div>
          </section>
      
          
          <section className="pp-section pp-cta-section" aria-labelledby="cta-title">
            <div className="pp-cta-section__deco" aria-hidden="true"></div>
            <div className="pp-container">
              <div className="pp-cta-section__content">
                <span className="pp-eyebrow pp-eyebrow--gold" data-pp-reveal>Réservez dès maintenant</span>
                <h2 className="pp-title pp-title--light" id="cta-title" data-pp-reveal data-pp-delay="1">
                  Votre prochaine soirée inoubliable<br />commence ici
                </h2>
                <p className="pp-subtitle pp-subtitle--light pp-cta-section__subtitle" data-pp-reveal data-pp-delay="2">
                  Bar à tapas, piscine, transats, groupes ou soirée du dimanche —
                  choisissez votre expérience et laissez-nous faire le reste.
                </p>
                <div className="pp-cta-section__actions" data-pp-reveal data-pp-delay="3">
                  <a href="/contact" className="pp-btn pp-btn--gold pp-btn--lg pp-magnetic">Réserver / Nous contacter</a>
                  <a href="/privatisation" className="pp-btn pp-btn--secondary pp-btn--lg pp-magnetic">Privatiser la paillote</a>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
