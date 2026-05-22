/* Migré depuis lib/pages-html — éditable en React */
import Image from 'next/image';
import type { ReactNode } from 'react';

export function SoireesPageBody(): ReactNode {
  return (
    <>
      <section className="pp-page-hero pp-kenburns" aria-labelledby="soirees-title">
            <Image
              src="/assets/images/hero-soirees.jpg"
              alt="Soiree DJ au bord de la piscine de la Paillote Paradise — nuit festive en Camargue"
              fill
              className="pp-page-hero__img"
              priority
              sizes="100vw"
            />
            <div className="pp-page-hero__content">
              <nav aria-label="Fil d'Ariane">
                <ol className="pp-breadcrumb" style={{ justifyContent: "center" }}>
                  <li><a href="/">Accueil</a></li>
                  <li className="pp-breadcrumb__sep" aria-hidden="true">/</li>
                  <li aria-current="page">Soirées</li>
                </ol>
              </nav>
              <span className="pp-eyebrow pp-eyebrow--gold pp-eyebrow--theatrical">Saison 2026</span>
              <h1 className="pp-page-hero__title pp-title--editorial" id="soirees-title">Les <em className="pp-word-gold">Soirées</em> Paradise</h1>
              <p className="pp-page-hero__subtitle">DJ set · Soirées thématiques · La grande soirée du dimanche</p>
            </div>
      
            
            <div className="pp-wave-bottom" aria-hidden="true">
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none"><path fill="var(--pp-night)" d="M0,40 C200,80 400,0 600,40 C800,80 1000,20 1200,50 L1200,120 L0,120 Z"/></svg>
            </div>
          </section>
      
          
          <section className="pp-dimanche-hero" id="dimanche" aria-labelledby="dimanche-title">
            <div className="pp-dimanche-hero__particles" aria-hidden="true"></div>
            <div className="pp-particles" data-pp-particles="28" aria-hidden="true"></div>
            <div className="pp-sunday__bg-text" aria-hidden="true">UNITED</div>
      
            <div className="pp-container" style={{ position: "relative", zIndex: "2" }}>
              <div className="pp-grid-2" style={{ alignItems: "center", gap: "var(--pp-space-12)", marginBottom: "var(--pp-space-16)" }}>
      
                <div data-pp-reveal="left">
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "var(--pp-space-2)", background: "rgba(201,168,76,.15)", border: "1px solid rgba(201,168,76,.30)", borderRadius: "var(--pp-radius-full)", padding: "var(--pp-space-2) var(--pp-space-6)", fontSize: "var(--pp-text-xs)", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--pp-gold)", marginBottom: "var(--pp-space-6)" }}>
                     L'événement phare de la saison
                  </div>
                  <h2 className="pp-title pp-title--light pp-title--editorial" id="dimanche-title" style={{ marginBottom: "var(--pp-space-6)" }}>
                    La Soirée du <em className="pp-word-gold">Dimanche</em>
                  </h2>
                  <p style={{ color: "rgba(253,250,244,.75)", fontSize: "var(--pp-text-lg)", lineHeight: "1.7", maxWidth: "50ch", marginBottom: "var(--pp-space-6)" }}>
                    Chaque dimanche, de 12h à minuit, La Paillote Paradise se transforme en scène festive unique.
                    Un DJ guest, une piscine illuminée, des cocktails signature et une énergie
                    <strong style={{ color: "var(--pp-gold)" }}>connue dans toute la région et au-delà</strong>.
                  </p>
      
                  <div className="pp-countdown pp-countdown--neon" data-pp-countdown role="status" aria-live="polite" style={{ marginBottom: "var(--pp-space-6)" }}>
                    <span className="pp-countdown__num">—</span>
                    <span className="pp-countdown__label">avant United</span>
                  </div>
      
                  <div style={{ display: "flex", gap: "var(--pp-space-4)", flexWrap: "wrap" }}>
                    <a href="/contact" className="pp-btn pp-btn--gold pp-btn--lg pp-magnetic">Réserver pour dimanche</a>
                    <a href="#programme" className="pp-btn pp-btn--secondary pp-btn--lg pp-magnetic">Voir le programme</a>
                  </div>
                </div>
      
                <div data-pp-reveal="right" style={{ display: "flex", justifyContent: "center" }}>
                  <div className="pp-vinyl" aria-hidden="true"></div>
                </div>
              </div>
      
              
              <div className="pp-grid-4" data-pp-reveal>
                <div style={{ textAlign: "center", padding: "var(--pp-space-6)" }}>
                  <span style={{ fontFamily: "var(--pp-font-display)", fontSize: "var(--pp-text-4xl)", fontWeight: "800", color: "var(--pp-gold)", display: "block" }} data-count="26" data-suffix="">26</span>
                  <span style={{ color: "rgba(253,250,244,.60)", fontSize: "var(--pp-text-sm)", display: "block", marginTop: "var(--pp-space-1)" }}>dimanches par saison</span>
                </div>
                <div style={{ textAlign: "center", padding: "var(--pp-space-6)" }}>
                  <span style={{ fontFamily: "var(--pp-font-display)", fontSize: "var(--pp-text-4xl)", fontWeight: "800", color: "var(--pp-gold)", display: "block" }}>DJ</span>
                  <span style={{ color: "rgba(253,250,244,.60)", fontSize: "var(--pp-text-sm)", display: "block", marginTop: "var(--pp-space-1)" }}>guest chaque semaine</span>
                </div>
                <div style={{ textAlign: "center", padding: "var(--pp-space-6)" }}>
                  <span style={{ fontFamily: "var(--pp-font-display)", fontSize: "var(--pp-text-4xl)", fontWeight: "800", color: "var(--pp-gold)", display: "block" }}>12h</span>
                  <span style={{ color: "rgba(253,250,244,.60)", fontSize: "var(--pp-text-sm)", display: "block", marginTop: "var(--pp-space-1)" }}>début des festivités</span>
                </div>
                <div style={{ textAlign: "center", padding: "var(--pp-space-6)" }}>
                  <span style={{ fontFamily: "var(--pp-font-display)", fontSize: "var(--pp-text-2xl)", fontWeight: "800", color: "var(--pp-gold)", display: "block" }}>4</span>
                  <span style={{ color: "rgba(253,250,244,.60)", fontSize: "var(--pp-text-sm)", display: "block", marginTop: "var(--pp-space-1)" }}>régions qui nous connaissent</span>
                </div>
              </div>
            </div>
          </section>
      
          
          <section className="pp-section" id="programme" style={{ background: "var(--pp-night)" }} aria-labelledby="hebdo-title">
            <div className="pp-container">
              <div className="pp-section-header" data-pp-reveal style={{ color: "var(--pp-white)" }}>
                <span className="pp-eyebrow pp-eyebrow--gold">Programme</span>
                <h2 className="pp-title pp-title--light" id="hebdo-title">Trois soirées, trois ambiances</h2>
                <p className="pp-subtitle pp-subtitle--light">
                  Mercredi en mode latino, vendredi en mode festif, dimanche en mode United —
                  chaque rendez-vous a son identité, et chacun trouve la sienne.
                </p>
              </div>
      
              <div className="pp-soirees-grid">
      
                <div className="pp-soiree-card" data-pp-reveal data-pp-delay="1">
                  <div className="pp-soiree-card__day"> Mercredi</div>
                  <h3 className="pp-soiree-card__title">Salsa & Latin Music</h3>
                  <p className="pp-soiree-card__desc">
                    Salsa, bachata, reggaeton, kizomba — chaque mercredi, La Paillote vibre aux rythmes
                    latins. Cours d'initiation possible, bar à cocktails et piste ouverte au bord de la piscine.
                  </p>
                  <div className="pp-soiree-card__meta">
                    <span className="pp-soiree-card__badge"> En soirée</span>
                    <span className="pp-soiree-card__badge"> Cocktails signature</span>
                    <span className="pp-soiree-card__badge"> Tous niveaux</span>
                  </div>
                </div>
      
                <div className="pp-soiree-card" data-pp-reveal data-pp-delay="2">
                  <div className="pp-soiree-card__day"> Vendredi</div>
                  <h3 className="pp-soiree-card__title">Soirée Vendredi</h3>
                  <p className="pp-soiree-card__desc">
                    Une soirée généraliste pour bien démarrer le week-end : DJ aux platines,
                    ambiance festive, piscine illuminée et l'esprit Paillote au rendez-vous.
                  </p>
                  <div className="pp-soiree-card__meta">
                    <span className="pp-soiree-card__badge"> En soirée</span>
                    <span className="pp-soiree-card__badge"> DJ résident</span>
                    <span className="pp-soiree-card__badge"> Pool & Bar</span>
                  </div>
                </div>
      
                <div className="pp-soiree-card pp-soiree-card--dimanche" data-pp-reveal data-pp-delay="3" style={{ borderColor: "rgba(201,168,76,.30)", background: "linear-gradient(135deg, var(--pp-night-mid) 0%, rgba(201,168,76,.08) 100%)" }}>
                  <div className="pp-soiree-card__day"> Dimanche</div>
                  <h3 className="pp-soiree-card__title" style={{ color: "var(--pp-gold)" }}>United by La Paillote</h3>
                  <p className="pp-soiree-card__desc">
                    L'événement phare, connu dans toute la région.
                    DJ guest international, ambiance unique,
                    piscine illuminée et foule de passionnés. De midi à minuit, pas une minute de plus.
                  </p>
                  <div className="pp-soiree-card__meta">
                    <span className="pp-soiree-card__badge pp-soiree-card__badge--gold"> 12h → 00h</span>
                    <span className="pp-soiree-card__badge pp-soiree-card__badge--gold"> DJ Guest International</span>
                    <span className="pp-soiree-card__badge pp-soiree-card__badge--gold"> Invitation Only</span>
                  </div>
                  <a href="/contact" className="pp-btn pp-btn--gold pp-btn--sm">Réserver ma place</a>
                </div>
      
              </div>
            </div>
          </section>
      
          
          <section className="pp-section" style={{ background: "var(--pp-night-mid)" }} aria-labelledby="agenda-saison-title">
            <div className="pp-container">
              <div className="pp-section-header" data-pp-reveal style={{ color: "var(--pp-white)" }}>
                <span className="pp-eyebrow pp-eyebrow--gold">Agenda saison 2026</span>
                <h2 className="pp-title pp-title--light" id="agenda-saison-title">Événements spéciaux</h2>
                <p className="pp-subtitle pp-subtitle--light">
                  En plus du programme hebdomadaire, retrouvez nos événements exceptionnels
                  tout au long de la saison.
                </p>
              </div>
      
              <div className="pp-agenda-saison" data-pp-reveal>
      
                <div className="pp-agenda-saison__month">
                  <div className="pp-agenda-saison__month-header">
                    <span className="pp-agenda-saison__month-title">Avril — Ouverture de saison</span>
                    <span style={{ color: "var(--pp-gold)", fontSize: "var(--pp-text-sm)" }}>4 événements</span>
                  </div>
                  <div className="pp-agenda-saison__events">
                    <div className="pp-agenda-event-row">
                      <span className="pp-agenda-event-date">Sam. 5 avr.</span>
                      <span className="pp-agenda-event-name"> Soirée d'Ouverture de Saison</span>
                      <span className="pp-agenda-event-type">Soirée spéciale</span>
                    </div>
                    <div className="pp-agenda-event-row">
                      <span className="pp-agenda-event-date">Dim. 6 avr.</span>
                      <span className="pp-agenda-event-name"> Soirée du Dimanche #1</span>
                      <span className="pp-agenda-event-type">Dimanche</span>
                    </div>
                    <div className="pp-agenda-event-row">
                      <span className="pp-agenda-event-date">Sam. 19 avr.</span>
                      <span className="pp-agenda-event-name"> Soirée Tropical Vibes</span>
                      <span className="pp-agenda-event-type">Samedi thème</span>
                    </div>
                    <div className="pp-agenda-event-row">
                      <span className="pp-agenda-event-date">Dim. 27 avr.</span>
                      <span className="pp-agenda-event-name"> Soirée du Dimanche · DJ Guest Annoncé</span>
                      <span className="pp-agenda-event-type">Dimanche</span>
                    </div>
                  </div>
                </div>
      
                <div className="pp-agenda-saison__month">
                  <div className="pp-agenda-saison__month-header">
                    <span className="pp-agenda-saison__month-title">Juin — Début de l'été</span>
                    <span style={{ color: "var(--pp-gold)", fontSize: "var(--pp-text-sm)" }}>5 événements</span>
                  </div>
                  <div className="pp-agenda-saison__events">
                    <div className="pp-agenda-event-row">
                      <span className="pp-agenda-event-date">Sam. 20 juin</span>
                      <span className="pp-agenda-event-name"> Fête de la Musique — Concert Live</span>
                      <span className="pp-agenda-event-type">Événement spécial</span>
                    </div>
                    <div className="pp-agenda-event-row">
                      <span className="pp-agenda-event-date">Dim. 21 juin</span>
                      <span className="pp-agenda-event-name"> Soirée du Dimanche — Solstice d'Été</span>
                      <span className="pp-agenda-event-type">Dimanche</span>
                    </div>
                  </div>
                </div>
      
                <div className="pp-agenda-saison__month">
                  <div className="pp-agenda-saison__month-header">
                    <span className="pp-agenda-saison__month-title">Juillet-Août — Haute saison</span>
                    <span style={{ color: "var(--pp-gold)", fontSize: "var(--pp-text-sm)" }}>Chaque semaine</span>
                  </div>
                  <div className="pp-agenda-saison__events">
                    <div className="pp-agenda-event-row">
                      <span className="pp-agenda-event-date">13-14 juil.</span>
                      <span className="pp-agenda-event-name"> Soirée Nationale — Feu d'artifice & DJ</span>
                      <span className="pp-agenda-event-type">Fête nationale</span>
                    </div>
                    <div className="pp-agenda-event-row">
                      <span className="pp-agenda-event-date">Fin juillet</span>
                      <span className="pp-agenda-event-name"> Soirée Blanche — All White Party</span>
                      <span className="pp-agenda-event-type">Thème</span>
                    </div>
                    <div className="pp-agenda-event-row">
                      <span className="pp-agenda-event-date">Mi-août</span>
                      <span className="pp-agenda-event-name"> Soirée Mousse — Summer Foam Party</span>
                      <span className="pp-agenda-event-type">Thème</span>
                    </div>
                    <div className="pp-agenda-event-row">
                      <span className="pp-agenda-event-date">Chaque dim.</span>
                      <span className="pp-agenda-event-name"> La Grande Soirée du Dimanche</span>
                      <span className="pp-agenda-event-type">Dimanche</span>
                    </div>
                  </div>
                </div>
      
                <div className="pp-agenda-saison__month">
                  <div className="pp-agenda-saison__month-header">
                    <span className="pp-agenda-saison__month-title">Septembre — Closing</span>
                    <span style={{ color: "var(--pp-gold)", fontSize: "var(--pp-text-sm)" }}>3 événements</span>
                  </div>
                  <div className="pp-agenda-saison__events">
                    <div className="pp-agenda-event-row">
                      <span className="pp-agenda-event-date">Dimanches sept.</span>
                      <span className="pp-agenda-event-name"> Les derniers dimanches Paradise</span>
                      <span className="pp-agenda-event-type">Dimanche</span>
                    </div>
                    <div className="pp-agenda-event-row">
                      <span className="pp-agenda-event-date">Fin sept.</span>
                      <span className="pp-agenda-event-name"> Soirée de Clôture — La Grande Finale</span>
                      <span className="pp-agenda-event-type">Closing</span>
                    </div>
                  </div>
                </div>
      
              </div>
      
              <div style={{ textAlign: "center", marginTop: "var(--pp-space-10)" }} data-pp-reveal>
                <p style={{ color: "rgba(253,250,244,.50)", fontSize: "var(--pp-text-sm)", marginBottom: "var(--pp-space-6)" }}>
                  Programme susceptible d'evoluer — suivez-nous sur Instagram pour les annonces DJ et surprises !
                </p>
                <div style={{ display: "flex", gap: "var(--pp-space-4)", justifyContent: "center", flexWrap: "wrap" }}>
                  <a href="/contact" className="pp-btn pp-btn--gold">Réserver pour un événement</a>
                  <a href="https://www.instagram.com/pailloteparadise" target="_blank" rel="noopener noreferrer" className="pp-btn pp-btn--secondary">Suivre sur Instagram</a>
                </div>
              </div>
            </div>
          </section>
      
          
          <section className="pp-section pp-cta-section" aria-labelledby="soirees-cta-title">
            <div className="pp-container">
              <div className="pp-cta-section__content">
                <h2 className="pp-title" id="soirees-cta-title" style={{ color: "var(--pp-white)" }} data-pp-reveal>
                  La prochaine soirée inoubliable,<br />c'est la vôtre
                </h2>
                <p className="pp-subtitle pp-subtitle--light" style={{ marginInline: "auto", marginBottom: "var(--pp-space-10)" }} data-pp-reveal data-pp-delay="1">
                  Réservez votre soirée ou privatisez le domaine pour votre événement personnel.
                </p>
                <div style={{ display: "flex", gap: "var(--pp-space-4)", justifyContent: "center", flexWrap: "wrap" }} data-pp-reveal data-pp-delay="2">
                  <a href="/contact" className="pp-btn pp-btn--gold pp-btn--lg pp-magnetic">Réserver ma place</a>
                  <a href="/privatisation" className="pp-btn pp-btn--secondary pp-btn--lg pp-magnetic">Privatiser pour un événement</a>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
