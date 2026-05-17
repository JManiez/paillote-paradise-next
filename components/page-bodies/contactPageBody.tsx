/* Migré depuis lib/pages-html — éditable en React */
import type { ReactNode } from 'react';
import { PP_PHONE_DISPLAY, PP_PHONE_E164 } from '@/lib/publicPhone';

export function ContactPageBody(): ReactNode {
  return (
    <>
      <section className="pp-page-hero" aria-labelledby="contact-page-title">
            <img
              src="/assets/images/hero-contact.jpg"
              alt="Entree du Domaine du Petit Chaumont — La Paillote Paradise, Aigues-Mortes"
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
                  <li aria-current="page">Contact</li>
                </ol>
              </nav>
              <span className="pp-eyebrow pp-eyebrow--gold">Réservation & Accès</span>
              <h1 className="pp-page-hero__title" id="contact-page-title">Contactez-nous</h1>
              <p className="pp-page-hero__subtitle">Réservation · Privatisation · Plan d'accès</p>
            </div>
      
            
            <div className="pp-wave-bottom" aria-hidden="true">
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none"><path fill="var(--pp-sand)" d="M0,40 C200,80 400,0 600,40 C800,80 1000,20 1200,50 L1200,120 L0,120 Z"/></svg>
            </div>
          </section>
      
          
          <section className="pp-section" style={{ background: "var(--pp-sand)" }} aria-labelledby="contact-main-title">
            <div className="pp-container">
              <div className="pp-grid-2" style={{ gap: "var(--pp-space-16)", alignItems: "flex-start" }}>
      
                
                <div data-pp-reveal="left">
                  <span className="pp-eyebrow">Informations pratiques</span>
                  <h2 className="pp-title" id="contact-main-title">Nous trouver & nous joindre</h2>
      
                  <div className="pp-acces__info" style={{ marginBottom: "var(--pp-space-10)" }}>
                    <div className="pp-acces__item">
                      <div className="pp-acces__item-icon" aria-hidden="true"></div>
                      <div>
                        <p className="pp-acces__item-title">Adresse</p>
                        <p className="pp-acces__item-text">
                          Domaine du Petit Chaumont<br />
                          Route du Petit Chaumont<br />
                          30220 Aigues-Mortes, Gard
                        </p>
                      </div>
                    </div>
      
                    <div className="pp-acces__item">
                      <div className="pp-acces__item-icon" aria-hidden="true"></div>
                      <div>
                        <p className="pp-acces__item-title">Téléphone</p>
                        <p className="pp-acces__item-text">
                          <a href={`tel:${PP_PHONE_E164}`} className="pp-acces__item-text">{PP_PHONE_DISPLAY}</a>
                        </p>
                      </div>
                    </div>
      
                    <div className="pp-acces__item">
                      <div className="pp-acces__item-icon" aria-hidden="true"></div>
                      <div>
                        <p className="pp-acces__item-title">Email</p>
                        <p className="pp-acces__item-text">
                          <a href="mailto:contact@pailloteparadise.fr">contact@pailloteparadise.fr</a>
                        </p>
                      </div>
                    </div>
      
                    <div className="pp-acces__item">
                      <div className="pp-acces__item-icon" aria-hidden="true"></div>
                      <div>
                        <p className="pp-acces__item-title">Ouverture</p>
                        <p className="pp-acces__item-text">
                          Ouvert de juin à septembre<br />
                          Mercredi → Samedi : 11h&#8239;–&#8239;19h<br />
                          Dimanche : 12h&#8239;–&#8239;00h (United)<br />
                          Lundi &amp; Mardi fermés
                        </p>
                      </div>
                    </div>
                  </div>
      
                  
                  <h3 style={{ fontSize: "var(--pp-text-xl)", marginBottom: "var(--pp-space-5)" }}>Plan d'accès</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--pp-space-4)", marginBottom: "var(--pp-space-8)" }}>
                    <div style={{ display: "flex", gap: "var(--pp-space-3)" }}>
                      <span style={{ fontSize: "1.5rem" }} aria-hidden="true"></span>
                      <div>
                        <strong style={{ color: "var(--pp-ocean)", fontSize: "var(--pp-text-sm)" }}>Depuis Montpellier</strong>
                        <p style={{ color: "var(--pp-gray)", fontSize: "var(--pp-text-sm)" }}>A9 sortie Gallargues + D979 vers Aigues-Mortes · 35 min</p>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "var(--pp-space-3)" }}>
                      <span style={{ fontSize: "1.5rem" }} aria-hidden="true"></span>
                      <div>
                        <strong style={{ color: "var(--pp-ocean)", fontSize: "var(--pp-text-sm)" }}>Depuis Nîmes</strong>
                        <p style={{ color: "var(--pp-gray)", fontSize: "var(--pp-text-sm)" }}>A9 sortie Gallargues + D979 · 30 min</p>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "var(--pp-space-3)" }}>
                      <span style={{ fontSize: "1.5rem" }} aria-hidden="true"></span>
                      <div>
                        <strong style={{ color: "var(--pp-ocean)", fontSize: "var(--pp-text-sm)" }}>Depuis Grau-du-Roi</strong>
                        <p style={{ color: "var(--pp-gray)", fontSize: "var(--pp-text-sm)" }}>Route de la Camargue direction Aigues-Mortes · 15 min</p>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "var(--pp-space-3)" }}>
                      <span style={{ fontSize: "1.5rem" }} aria-hidden="true"></span>
                      <div>
                        <strong style={{ color: "var(--pp-ocean)", fontSize: "var(--pp-text-sm)" }}>Parking</strong>
                        <p style={{ color: "var(--pp-gray)", fontSize: "var(--pp-text-sm)" }}>Grand parking gratuit sur le domaine privé</p>
                      </div>
                    </div>
                  </div>
      
                  <a
                    href="https://maps.google.com/?q=Domaine+du+Petit+Chaumont+Aigues-Mortes"
                    className="pp-btn pp-btn--ocean"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ouvrir l'itineraire Google Maps (nouvel onglet)"
                  >
                    Voir sur Google Maps
                  </a>
                </div>
      
                
                <div data-pp-reveal="right">
                  <span className="pp-eyebrow">Formulaire de contact</span>
                  <h2 style={{ fontFamily: "var(--pp-font-display)", fontSize: "var(--pp-text-3xl)", marginBottom: "var(--pp-space-8)" }}>
                    Envoyez-nous un message
                  </h2>
      
                  <div className="pp-form" style={{ padding: "var(--pp-space-8)" }}>
                    <form
                      id="pp-contact-form"
                      action="#"
                      method="post"
                      aria-label="Formulaire de contact La Paillote Paradise"
                    >
                      <div className="pp-form__grid">
                        <div className="pp-form__group">
                          <label className="pp-form__label" htmlFor="c-prenom">Prénom *</label>
                          <input className="pp-form__input" type="text" id="c-prenom" name="prenom" required autoComplete="given-name" placeholder="Votre prénom" />
                        </div>
                        <div className="pp-form__group">
                          <label className="pp-form__label" htmlFor="c-nom">Nom *</label>
                          <input className="pp-form__input" type="text" id="c-nom" name="nom" required autoComplete="family-name" placeholder="Votre nom" />
                        </div>
                        <div className="pp-form__group">
                          <label className="pp-form__label" htmlFor="c-email">Email *</label>
                          <input className="pp-form__input" type="email" id="c-email" name="email" required autoComplete="email" placeholder="votre@email.fr" />
                        </div>
                        <div className="pp-form__group">
                          <label className="pp-form__label" htmlFor="c-tel">Téléphone</label>
                          <input className="pp-form__input" type="tel" id="c-tel" name="telephone" autoComplete="tel" placeholder="06 XX XX XX XX" />
                        </div>
                        <div className="pp-form__group pp-form__group--full">
                          <label className="pp-form__label" htmlFor="c-sujet">Sujet *</label>
                          <select className="pp-form__select" id="c-sujet" name="sujet" required>
                            <option value="">Choisir…</option>
                            <option value="reservation-restaurant">Réservation bar à tapas</option>
                            <option value="reservation-transats">Réservation transats / piscine</option>
                            <option value="soiree-dimanche">Soirée du dimanche</option>
                            <option value="privatisation">Privatisation / événement privé</option>
                            <option value="autre">Autre question</option>
                          </select>
                        </div>
                        <div className="pp-form__group pp-form__group--full">
                          <label className="pp-form__label" htmlFor="c-message">Votre message *</label>
                          <textarea className="pp-form__textarea" id="c-message" name="message" required placeholder="Décrivez votre demande : date souhaitée, nombre de personnes, questions particulières…" rows={5}></textarea>
                        </div>
                        <div className="pp-form__group pp-form__group--full">
                          <label className="pp-form__label" style={{ display: "flex", alignItems: "flex-start", gap: "var(--pp-space-3)", cursor: "pointer" }}>
                            <input type="checkbox" id="c-consent" name="consent" value="1" required style={{ marginTop: "4px", flexShrink: "0" }} />
                            <span>J&apos;accepte que mes données soient utilisées pour répondre à ma demande, conformément à la <a href="/politique-confidentialite" style={{ color: "var(--pp-sunset)", textDecoration: "underline" }}>politique de confidentialité</a>. *</span>
                          </label>
                        </div>
                      </div>
                      <div style={{ marginTop: "var(--pp-space-6)" }}>
                        <button type="submit" className="pp-btn pp-btn--primary pp-btn--lg" style={{ width: "100%", justifyContent: "center" }}>
                          Envoyer mon message
                        </button>
                        <p className="pp-form__note" style={{ textAlign: "center", marginTop: "var(--pp-space-3)" }}>
                          Réponse sous 24h. Champs obligatoires marqués *.
                        </p>
                      </div>
                    </form>
                    <div id="pp-form-success" className="pp-form__success" role="alert" tabIndex={-1}>
                       Merci pour votre message ! Nous vous répondrons sous 24h.
                    </div>
                  </div>
                </div>
      
              </div>
            </div>
          </section>
      
          
          <section className="pp-section" style={{ background: "var(--pp-cream)", paddingBlock: "0" }} aria-label="Carte Google Maps — Domaine du Petit Chaumont">
            <div className="pp-container" style={{ paddingBlock: "var(--pp-space-12)" }}>
              <div style={{ borderRadius: "var(--pp-radius-lg)", overflow: "hidden", boxShadow: "var(--pp-shadow-md)", height: "450px" }} data-pp-reveal>
                <iframe
                  src="https://maps.google.com/maps?q=43.5667%2C4.1833&amp;hl=fr&amp;z=14&amp;output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  loading="lazy"
                  title="Carte Google Maps — Domaine du Petit Chaumont, Aigues-Mortes"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen={true}
                 />
              </div>
            </div>
          </section>
      
          
          <section className="pp-section" style={{ background: "var(--pp-ocean)" }} aria-labelledby="reseaux-title">
            <div className="pp-container" style={{ textAlign: "center" }}>
              <h2 className="pp-title pp-title--light" id="reseaux-title" data-pp-reveal>
                Suivez l'ambiance en temps réel
              </h2>
              <p className="pp-subtitle pp-subtitle--light" style={{ marginInline: "auto", marginBottom: "var(--pp-space-10)" }} data-pp-reveal data-pp-delay="1">
                Rejoignez notre communauté sur les réseaux sociaux pour ne manquer aucune annonce,
                aucun DJ guest, aucune surprise.
              </p>
              <div style={{ display: "flex", gap: "var(--pp-space-4)", justifyContent: "center", flexWrap: "wrap" }} data-pp-reveal data-pp-delay="2">
                <a href="https://www.instagram.com/pailloteparadise" target="_blank" rel="noopener noreferrer" className="pp-btn pp-btn--primary pp-btn--lg">
                   Instagram
                </a>
                <a href="https://www.facebook.com/pailloteparadise" target="_blank" rel="noopener noreferrer" className="pp-btn pp-btn--secondary pp-btn--lg">
                  Facebook
                </a>
                <a href="https://www.tiktok.com/@pailloteparadise" target="_blank" rel="noopener noreferrer" className="pp-btn pp-btn--secondary pp-btn--lg">
                   TikTok
                </a>
              </div>
            </div>
          </section>
    </>
  );
}
