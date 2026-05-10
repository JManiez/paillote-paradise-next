/* Migré depuis lib/pages-html — éditable en React */
import type { ReactNode } from 'react';

export function PrivatisationPageBody(): ReactNode {
  return (
    <>
      <section className="pp-page-hero" aria-labelledby="priv-title">
            <img
              src="/assets/images/privatisation-hero.jpg"
              alt="Espace privatisé pour groupe à La Paillote Paradise — Aigues-Mortes"
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
                  <li aria-current="page">Groupes &amp; Privatisation</li>
                </ol>
              </nav>
              <span className="pp-eyebrow pp-eyebrow--gold">Événements &amp; Groupes</span>
              <h1 className="pp-page-hero__title" id="priv-title">Groupes &amp; Privatisation</h1>
              <p className="pp-page-hero__subtitle">Un espace rien que pour vous · EVJF · Anniversaire · Repas d'entreprise</p>
            </div>
      
            
            <div className="pp-wave-bottom" aria-hidden="true">
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none"><path fill="var(--pp-sand)" d="M0,40 C200,80 400,0 600,40 C800,80 1000,20 1200,50 L1200,120 L0,120 Z"/></svg>
            </div>
          </section>
      
          
          <section className="pp-section" style={{ background: "var(--pp-sand)" }} aria-labelledby="priv-concept-title">
            <div className="pp-container">
              <div className="pp-grid-2" style={{ alignItems: "center", gap: "var(--pp-space-16)" }}>
                <div data-pp-reveal="left">
                  <span className="pp-eyebrow">Votre groupe, votre espace</span>
                  <h2 className="pp-title" id="priv-concept-title">Un coin de la Paillote <em style={{ fontStyle: "italic", color: "var(--pp-gold)" }}>rien que pour vous</em></h2>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-6)" }}>
                    Vous êtes un groupe et vous souhaitez profiter d'un espace à part,
                    sans vous soucier du reste ? La Paillote Paradise privatise une section de son espace
                    pour accueillir votre groupe dans les meilleures conditions.
                  </p>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-8)" }}>
                    Tables réservées, service dédié, menus groupe pensés pour être partagés —
                    tout est prévu pour que vous n'ayez qu'à profiter de l'ambiance unique
                    de la Paillote, au bord de la piscine, en Camargue.
                  </p>
                  <div style={{ display: "flex", gap: "var(--pp-space-4)", flexWrap: "wrap" }}>
                    <a href="#menu-groupe" className="pp-btn pp-btn--primary">Voir les menus groupe</a>
                    <a href="#contact-groupe" className="pp-btn pp-btn--outline">Nous contacter</a>
                  </div>
                </div>
                <div data-pp-reveal="right" style={{ borderRadius: "var(--pp-radius-xl)", overflow: "hidden", boxShadow: "var(--pp-shadow-lg)" }}>
                  <img
                    src="/assets/images/privatisation-hero.jpg"
                    alt="Groupe profitant de leur espace privatisé à La Paillote Paradise"
                    loading="lazy"
                    width="700"
                    height="500"
                    style={{ width: "100%", height: "auto" }}
                   />
                </div>
              </div>
            </div>
          </section>
      
          
          <section className="pp-section" style={{ background: "var(--pp-cream)" }} aria-labelledby="inclus-title">
            <div className="pp-container">
              <div className="pp-section-header" data-pp-reveal>
                <span className="pp-eyebrow">Ce qui est prévu</span>
                <h2 className="pp-title" id="inclus-title">Votre espace, votre moment</h2>
                <p className="pp-subtitle">La privatisation d'espace comprend une section dédiée de la Paillote avec un service aux petits soins.</p>
              </div>
              <div className="pp-grid-4">
                <div className="pp-service-item" data-pp-reveal data-pp-delay="1">
                  <div className="pp-service-item__icon">—</div>
                  <h3 className="pp-service-item__title">Tables réservées</h3>
                  <p className="pp-service-item__text">Un espace attitré dans la Paillote, séparé du reste des clients</p>
                </div>
                <div className="pp-service-item" data-pp-reveal data-pp-delay="2">
                  <div className="pp-service-item__icon">—</div>
                  <h3 className="pp-service-item__title">Service dédié</h3>
                  <p className="pp-service-item__text">Un serveur ou une serveuse attitré(e) pour votre groupe</p>
                </div>
                <div className="pp-service-item" data-pp-reveal data-pp-delay="3">
                  <div className="pp-service-item__icon">—</div>
                  <h3 className="pp-service-item__title">Menus groupe</h3>
                  <p className="pp-service-item__text">Formules cocktail dînatoire à partager, dès 28€/pers.</p>
                </div>
                <div className="pp-service-item" data-pp-reveal data-pp-delay="4">
                  <div className="pp-service-item__icon">—</div>
                  <h3 className="pp-service-item__title">Accès piscine</h3>
                  <p className="pp-service-item__text">Profitez de la piscine et des transats en accès libre</p>
                </div>
                <div className="pp-service-item" data-pp-reveal data-pp-delay="1">
                  <div className="pp-service-item__icon">—</div>
                  <h3 className="pp-service-item__title">Carte complète</h3>
                  <p className="pp-service-item__text">Bar, cocktails, boissons — toute la carte disponible pour votre groupe</p>
                </div>
                <div className="pp-service-item" data-pp-reveal data-pp-delay="2">
                  <div className="pp-service-item__icon">—</div>
                  <h3 className="pp-service-item__title">Grand parking</h3>
                  <p className="pp-service-item__text">Parking gratuit sur le domaine du Petit Chaumont</p>
                </div>
                <div className="pp-service-item" data-pp-reveal data-pp-delay="3">
                  <div className="pp-service-item__icon">—</div>
                  <h3 className="pp-service-item__title">Cadre Camargue</h3>
                  <p className="pp-service-item__text">Vue nature, lumière dorée, ambiance bord de piscine unique</p>
                </div>
                <div className="pp-service-item" data-pp-reveal data-pp-delay="4">
                  <div className="pp-service-item__icon">—</div>
                  <h3 className="pp-service-item__title">Privacité préservée</h3>
                  <p className="pp-service-item__text">Domaine isolé, hors de la foule — votre événement reste intime</p>
                </div>
              </div>
            </div>
          </section>
      
          
          <section className="pp-section" id="menu-groupe" style={{ background: "var(--pp-sand)" }} aria-labelledby="menu-groupe-title">
            <div className="pp-container">
              <div className="pp-section-header" data-pp-reveal>
                <span className="pp-eyebrow pp-eyebrow--gold">Restauration groupe</span>
                <h2 className="pp-title" id="menu-groupe-title">Menus Groupe</h2>
                <p className="pp-subtitle">Cocktails dînatoires façon tapas méditerranéennes — pensés pour être partagés, dégustés, célébrés.</p>
              </div>
      
              
              <div className="pp-groupe-info" data-pp-reveal>
                <div className="pp-groupe-info__items">
                  <div className="pp-groupe-info__item">
                    <span className="pp-groupe-info__label">À partir de</span>
                    <span className="pp-groupe-info__value">15 personnes</span>
                  </div>
                  <div className="pp-groupe-info__sep" aria-hidden="true"></div>
                  <div className="pp-groupe-info__item">
                    <span className="pp-groupe-info__label">Service</span>
                    <span className="pp-groupe-info__value">Sur mesure</span>
                  </div>
                </div>
              </div>
      
              <div className="pp-groupe-grid">
      
                
                <div className="pp-groupe-card" data-pp-reveal data-pp-delay="1">
                  <div className="pp-groupe-card__header">
                    <div className="pp-groupe-card__num">Menu Classique</div>
                    <div className="pp-groupe-card__price">28<sup>€</sup><span>/pers.</span></div>
                  </div>
                  <div className="pp-groupe-card__body">
                    <ul className="pp-groupe-list">
                      <li className="pp-groupe-item">
                        <span className="pp-groupe-item__dot"></span>
                        <span>Planche de charcuterie</span>
                      </li>
                      <li className="pp-groupe-item">
                        <span className="pp-groupe-item__dot"></span>
                        <span>Duo de wraps</span>
                      </li>
                      <li className="pp-groupe-item">
                        <span className="pp-groupe-item__dot"></span>
                        <span>Verrine de gaspacho andalou</span>
                      </li>
                      <li className="pp-groupe-item">
                        <span className="pp-groupe-item__dot"></span>
                        <span>Verrine crémeux de maïs et feta</span>
                      </li>
                      <li className="pp-groupe-item">
                        <span className="pp-groupe-item__dot"></span>
                        <span>Trio de tartinades &amp; gressins <small>Houmous · Guacamole · Tapenade</small></span>
                      </li>
                      <li className="pp-groupe-item">
                        <span className="pp-groupe-item__dot"></span>
                        <span>Déclinaison de mini burgers <small>Bœuf · Poulet · Végétarien</small></span>
                      </li>
                      <li className="pp-groupe-item">
                        <span className="pp-groupe-item__dot"></span>
                        <span>Assortiment de finger food</span>
                      </li>
                      <li className="pp-groupe-item">
                        <span className="pp-groupe-item__dot"></span>
                        <span>Planche de fromage</span>
                      </li>
                      <li className="pp-groupe-item pp-groupe-item--dessert">
                        <span className="pp-groupe-item__dot pp-groupe-item__dot--gold"></span>
                        <span>Assortiment de 3 verrines sucrées</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pp-groupe-card__footer">
                    <a href="#contact-groupe" className="pp-btn pp-btn--outline" style={{ width: "100%", justifyContent: "center" }}>Choisir ce menu</a>
                  </div>
                </div>
      
                
                <div className="pp-groupe-card pp-groupe-card--featured" data-pp-reveal data-pp-delay="2">
                  <div className="pp-groupe-card__header">
                    <div className="pp-groupe-card__num">Menu Premium</div>
                    <div className="pp-groupe-card__price">38<sup>€</sup><span>/pers.</span></div>
                  </div>
                  <div className="pp-groupe-card__body">
                    <ul className="pp-groupe-list">
                      <li className="pp-groupe-item">
                        <span className="pp-groupe-item__dot"></span>
                        <span>Planche de charcuterie &amp; pan con tomate</span>
                      </li>
                      <li className="pp-groupe-item">
                        <span className="pp-groupe-item__dot"></span>
                        <span>Verrine de gaspacho andalou</span>
                      </li>
                      <li className="pp-groupe-item">
                        <span className="pp-groupe-item__dot"></span>
                        <span>Verrine saumon &amp; avocat</span>
                      </li>
                      <li className="pp-groupe-item">
                        <span className="pp-groupe-item__dot"></span>
                        <span>Trio de tartinades &amp; gressins <small>Houmous · Guacamole · Tapenade</small></span>
                      </li>
                      <li className="pp-groupe-item">
                        <span className="pp-groupe-item__dot"></span>
                        <span>Tataki de thon au sésame</span>
                      </li>
                      <li className="pp-groupe-item">
                        <span className="pp-groupe-item__dot"></span>
                        <span>Tataki de bœuf aux herbes</span>
                      </li>
                      <li className="pp-groupe-item">
                        <span className="pp-groupe-item__dot"></span>
                        <span>Planche de la mer <small>Couteaux · Moules gratinées · Seiches · Poulpes marinés</small></span>
                      </li>
                      <li className="pp-groupe-item">
                        <span className="pp-groupe-item__dot"></span>
                        <span>Mini brochettes à la plancha <small>Bœuf · Poulet</small></span>
                      </li>
                      <li className="pp-groupe-item">
                        <span className="pp-groupe-item__dot"></span>
                        <span>Planche de fromage</span>
                      </li>
                      <li className="pp-groupe-item pp-groupe-item--dessert">
                        <span className="pp-groupe-item__dot pp-groupe-item__dot--gold"></span>
                        <span>Assortiment de 5 mini verrines sucrées</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pp-groupe-card__footer">
                    <a href="#contact-groupe" className="pp-btn pp-btn--gold" style={{ width: "100%", justifyContent: "center" }}>Choisir ce menu</a>
                  </div>
                </div>
      
              </div>
            </div>
          </section>
      
          
          <section className="pp-section" id="contact-groupe" aria-labelledby="contact-groupe-title">
            <div className="pp-container pp-container--sm">
              <div className="pp-section-header" data-pp-reveal>
                <span className="pp-eyebrow">Renseignements</span>
                <h2 className="pp-title" id="contact-groupe-title">Votre demande de groupe</h2>
                <p className="pp-subtitle">
                  Remplissez ce formulaire et notre équipe vous répond sous 24h
                  pour organiser votre venue dans les meilleures conditions.
                </p>
              </div>
      
              <div className="pp-form" data-pp-reveal>
                <form
                  id="pp-groupe-form"
                  action="https://formspree.io/f/VOTRE_ID_FORMSPREE"
                  method="POST"
                  aria-label="Formulaire de demande de renseignement groupe"
                >
                  
                  <fieldset style={{ border: "none", padding: "0", margin: "0 0 var(--pp-space-6)" }}>
                    <legend className="pp-form__section-label">Vos coordonnées</legend>
                    <div className="pp-form__grid">
                      <div className="pp-form__group">
                        <label className="pp-form__label" htmlFor="g-prenom">Prénom *</label>
                        <input className="pp-form__input" type="text" id="g-prenom" name="prenom" required autoComplete="given-name" placeholder="Votre prénom" />
                      </div>
                      <div className="pp-form__group">
                        <label className="pp-form__label" htmlFor="g-nom">Nom *</label>
                        <input className="pp-form__input" type="text" id="g-nom" name="nom" required autoComplete="family-name" placeholder="Votre nom" />
                      </div>
                      <div className="pp-form__group">
                        <label className="pp-form__label" htmlFor="g-email">Email *</label>
                        <input className="pp-form__input" type="email" id="g-email" name="email" required autoComplete="email" placeholder="votre@email.fr" />
                      </div>
                      <div className="pp-form__group">
                        <label className="pp-form__label" htmlFor="g-tel">Téléphone *</label>
                        <input className="pp-form__input" type="tel" id="g-tel" name="telephone" required autoComplete="tel" placeholder="06 XX XX XX XX" />
                      </div>
                    </div>
                  </fieldset>
      
                  
                  <fieldset style={{ border: "none", padding: "0", margin: "0" }}>
                    <legend className="pp-form__section-label">Votre groupe</legend>
                    <div className="pp-form__grid">
                      <div className="pp-form__group">
                        <label className="pp-form__label" htmlFor="g-type">Type d'occasion *</label>
                        <select className="pp-form__select" id="g-type" name="type_occasion" required>
                          <option value="">Choisir…</option>
                          <option value="evjf">EVJF</option>
                          <option value="evg">EVG</option>
                          <option value="anniversaire">Anniversaire</option>
                          <option value="repas-famille">Repas de famille</option>
                          <option value="cocktail-mariage">Cocktail / Réception</option>
                          <option value="repas-entreprise">Repas d'entreprise</option>
                          <option value="sortie-groupe">Sortie de groupe</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                      <div className="pp-form__group">
                        <label className="pp-form__label" htmlFor="g-nb">Nombre de personnes *</label>
                        <select className="pp-form__select" id="g-nb" name="nombre_personnes" required>
                          <option value="">Choisir…</option>
                          <option value="10-20">10 à 20 personnes</option>
                          <option value="20-40">20 à 40 personnes</option>
                          <option value="40-60">40 à 60 personnes</option>
                          <option value="60-80">60 à 80 personnes</option>
                          <option value="plus-80">Plus de 80 personnes</option>
                        </select>
                      </div>
                      <div className="pp-form__group">
                        <label className="pp-form__label" htmlFor="g-date">Date souhaitée</label>
                        <input className="pp-form__input" type="date" id="g-date" name="date" min="2026-04-01" max="2026-09-30" />
                      </div>
                      <div className="pp-form__group">
                        <label className="pp-form__label" htmlFor="g-menu">Menu souhaité</label>
                        <select className="pp-form__select" id="g-menu" name="menu">
                          <option value="">Choisir…</option>
                          <option value="menu1">Menu Classique — 28€/pers.</option>
                          <option value="menu2">Menu Premium — 38€/pers.</option>
                          <option value="carte">Carte classique</option>
                          <option value="indecis">Je ne sais pas encore</option>
                        </select>
                      </div>
                      <div className="pp-form__group pp-form__group--full">
                        <label className="pp-form__label" htmlFor="g-message">Votre message *</label>
                        <textarea className="pp-form__textarea" id="g-message" name="message" required placeholder="Décrivez-nous votre occasion, vos souhaits particuliers, vos questions sur l'espace, les menus ou les boissons…" rows={5}></textarea>
                      </div>
                    </div>
                  </fieldset>
      
                  <div style={{ marginTop: "var(--pp-space-6)" }}>
                    <button type="submit" className="pp-btn pp-btn--primary pp-btn--lg" style={{ width: "100%", justifyContent: "center" }}>
                      Envoyer ma demande
                    </button>
                    <p className="pp-form__note" style={{ textAlign: "center", marginTop: "var(--pp-space-3)" }}>
                      Réponse sous 24h. Champs obligatoires marqués *.
                    </p>
                  </div>
                </form>
                <div id="pp-groupe-form-success" className="pp-form__success" role="alert" tabIndex={-1} style={{ display: "none" }}>
                  Merci ! Votre demande a bien été reçue. Notre équipe vous contactera sous 24h.
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
