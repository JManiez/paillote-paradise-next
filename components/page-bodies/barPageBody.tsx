/* Migré depuis lib/pages-html — éditable en React */
import type { ReactNode } from 'react';

export function BarPageBody(): ReactNode {
  return (
    <>
      <section className="pp-page-hero" aria-labelledby="page-title">
            <img
              src="/assets/images/universe-bar.jpg"
              alt="Bar de La Paillote Paradise, cocktails en bord de piscine en Camargue"
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
                  <li aria-current="page">Bar & Cocktails</li>
                </ol>
              </nav>
              <span className="pp-eyebrow pp-eyebrow--gold">Cheers !</span>
              <h1 className="pp-page-hero__title" id="page-title">Bar & Cocktails</h1>
              <p className="pp-page-hero__subtitle">Créations du barman · Classiques · Mocktails sur mesure</p>
            </div>
      
            
            <div className="pp-wave-bottom" aria-hidden="true">
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none"><path fill="var(--pp-sand)" d="M0,40 C200,80 400,0 600,40 C800,80 1000,20 1200,50 L1200,120 L0,120 Z"/></svg>
            </div>
          </section>
      
          
          <section className="pp-section" style={{ background: "var(--pp-sand)" }} aria-labelledby="bar-intro-title">
            <div className="pp-blob pp-blob--gold" style={{ width: "440px", height: "440px", top: "-8%", right: "-6%", opacity: "0.25" }} aria-hidden="true"></div>
      
            <div className="pp-container" style={{ position: "relative", zIndex: "2" }}>
              <div className="pp-grid-2" style={{ alignItems: "center", gap: "var(--pp-space-16)" }}>
                <div data-pp-reveal="left">
                  <span className="pp-eyebrow pp-eyebrow--theatrical">Notre philosophie</span>
                  <h2 className="pp-title pp-title--editorial" id="bar-intro-title">Un bar qui <em className="pp-word-gold">raconte</em> une histoire</h2>
                  <p className="pp-subtitle" style={{ marginBottom: "var(--pp-space-6)" }}>
                    Ici, le barman n'est pas derrière un comptoir — il est au cœur de l'ambiance.
                    Chaque cocktail est une création pensée pour le lieu, pour l'instant, pour vous.
                  </p>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-8)" }}>
                    Des esprits soigneusement sélectionnés, des cordials maison, des herbes fraîches du jardin —
                    le bar de la Paillote Paradise est un terrain d'expression où la technique rencontre le plaisir.
                  </p>
                  <div style={{ display: "flex", gap: "var(--pp-space-4)", flexWrap: "wrap" }}>
                    <a href="#carte-cocktails" className="pp-btn pp-btn--primary pp-magnetic">Voir la carte</a>
                    <a href="/contact" className="pp-btn pp-btn--outline pp-magnetic">Réserver une table</a>
                  </div>
                </div>
                <div data-pp-reveal="right" style={{ borderRadius: "var(--pp-radius-xl)", overflow: "hidden", boxShadow: "var(--pp-shadow-lg)" }}>
                  <img
                    src="/assets/images/universe-bar.jpg"
                    alt="Bar en bord de piscine — La Paillote Paradise Camargue"
                    loading="lazy"
                    width="700"
                    height="500"
                    style={{ width: "100%", height: "auto" }}
                   />
                </div>
              </div>
            </div>
          </section>
      
          
          <section className="pp-section" id="carte-cocktails" aria-labelledby="cocktails-title">
            <div className="pp-container">
      
              <div className="pp-section-header" data-pp-reveal>
                <span className="pp-eyebrow pp-eyebrow--gold">Saison 2026</span>
                <h2 className="pp-title pp-title--editorial" id="cocktails-title">La <em className="pp-word-gold">Carte</em> Cocktails</h2>
                <p className="pp-subtitle">Shaken or stirred — à déguster les pieds dans l'eau, face au coucher de soleil.</p>
              </div>
      
              
              <div style={{ marginBottom: "var(--pp-space-20)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--pp-space-4)", marginBottom: "var(--pp-space-3)" }}>
                  <span style={{ fontSize: "2rem" }} aria-hidden="true"></span>
                  <h3 style={{ fontFamily: "var(--pp-font-serif)", fontSize: "var(--pp-text-2xl)", color: "var(--pp-ocean)", margin: "0" }}>Cocktails Création</h3>
                  <div style={{ flex: "1", height: "1px", background: "linear-gradient(to right, rgba(var(--pp-ocean-rgb),.3), transparent)" }}></div>
                </div>
                <p style={{ color: "var(--pp-gray)", fontSize: "var(--pp-text-sm)", fontStyle: "italic", marginBottom: "var(--pp-space-8)", paddingLeft: "calc(2rem + var(--pp-space-4))" }}>Les signatures exclusives du barman · disponibles uniquement à La Paillote Paradise &nbsp;·&nbsp; <strong style={{ color: "var(--pp-gold)", fontStyle: "normal" }}>13€</strong></p>
      
                <div className="pp-bar-creations">
      
                  <article className="pp-bar-card" data-pp-reveal data-pp-delay="1">
                    <div className="pp-bar-card__number" aria-hidden="true">01</div>
                    <div className="pp-bar-card__body">
                      <h4 className="pp-bar-card__name">Le Gin-Gembre</h4>
                      <p className="pp-bar-card__ingredients">Gin infusé au poivre · Cordial gingembre basilic · Citron vert · Blanc d'œuf</p>
                      <div className="pp-bar-card__tags">
                        <span className="pp-bar-tag">Floral</span>
                        <span className="pp-bar-tag">Épicé</span>
                        <span className="pp-bar-tag">Gin</span>
                      </div>
                    </div>
                  </article>
      
                  <article className="pp-bar-card" data-pp-reveal data-pp-delay="2">
                    <div className="pp-bar-card__number" aria-hidden="true">02</div>
                    <div className="pp-bar-card__body">
                      <h4 className="pp-bar-card__name">Spice Rush</h4>
                      <p className="pp-bar-card__ingredients">Jack Fire · Oleo saccharum d'orange · Bitter spicy · Soda · Zeste d'orange</p>
                      <div className="pp-bar-card__tags">
                        <span className="pp-bar-tag">Intense</span>
                        <span className="pp-bar-tag">Fumé</span>
                        <span className="pp-bar-tag">Whisky</span>
                      </div>
                    </div>
                  </article>
      
                  <article className="pp-bar-card" data-pp-reveal data-pp-delay="3">
                    <div className="pp-bar-card__number" aria-hidden="true">03</div>
                    <div className="pp-bar-card__body">
                      <h4 className="pp-bar-card__name">Rhum'antique</h4>
                      <p className="pp-bar-card__ingredients">Rhum ambré &amp; agricole · Verjus · Sirop de gingembre · Maracuja · Fleur de sureau</p>
                      <div className="pp-bar-card__tags">
                        <span className="pp-bar-tag">Tropical</span>
                        <span className="pp-bar-tag">Fleuri</span>
                        <span className="pp-bar-tag">Rhum</span>
                      </div>
                    </div>
                  </article>
      
                  <article className="pp-bar-card" data-pp-reveal data-pp-delay="4">
                    <div className="pp-bar-card__number" aria-hidden="true">04</div>
                    <div className="pp-bar-card__body">
                      <h4 className="pp-bar-card__name">Cosa Nostra</h4>
                      <p className="pp-bar-card__ingredients">Mezcal · Cordial pimenté · Yuzu · Zeste de citron vert flambé</p>
                      <div className="pp-bar-card__tags">
                        <span className="pp-bar-tag">Fumé</span>
                        <span className="pp-bar-tag">Pimenté</span>
                        <span className="pp-bar-tag">Mezcal</span>
                      </div>
                    </div>
                  </article>
      
                  <article className="pp-bar-card" data-pp-reveal data-pp-delay="5">
                    <div className="pp-bar-card__number" aria-hidden="true">05</div>
                    <div className="pp-bar-card__body">
                      <h4 className="pp-bar-card__name">Red Minth</h4>
                      <p className="pp-bar-card__ingredients">Vodka citron jaune · Fruits rouges · Liqueur de Chambord · Menthe fraîche</p>
                      <div className="pp-bar-card__tags">
                        <span className="pp-bar-tag">Fruité</span>
                        <span className="pp-bar-tag">Frais</span>
                        <span className="pp-bar-tag">Vodka</span>
                      </div>
                    </div>
                  </article>
      
                </div>
              </div>
      
              
              <div className="pp-cocktails-layout" style={{ alignItems: "start" }}>
      
                
                <div data-pp-reveal data-pp-delay="1">
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--pp-space-4)", marginBottom: "var(--pp-space-3)" }}>
                    <span style={{ fontSize: "1.8rem" }} aria-hidden="true"></span>
                    <h3 style={{ fontFamily: "var(--pp-font-serif)", fontSize: "var(--pp-text-2xl)", color: "var(--pp-ocean)", margin: "0" }}>Cocktails Classiques</h3>
                    <div style={{ flex: "1", height: "1px", background: "linear-gradient(to right, rgba(var(--pp-ocean-rgb),.3), transparent)" }}></div>
                  </div>
                  <p style={{ color: "var(--pp-gray)", fontSize: "var(--pp-text-sm)", fontStyle: "italic", marginBottom: "var(--pp-space-6)", paddingLeft: "calc(1.8rem + var(--pp-space-4))" }}>Les intemporels · toujours réussis &nbsp;·&nbsp; <strong style={{ color: "var(--pp-gold)", fontStyle: "normal" }}>11€</strong></p>
      
                  <ul className="pp-cocktails-list">
                    <li className="pp-cocktails-classic">Mojito Cubain</li>
                    <li className="pp-cocktails-classic">Pornstar Martini</li>
                    <li className="pp-cocktails-classic">Mule <span className="pp-cocktails-classic__note">Moscow · Jamaican · London</span></li>
                    <li className="pp-cocktails-classic">Spritz <span className="pp-cocktails-classic__note">Aperol · Saint Germain</span></li>
                    <li className="pp-cocktails-classic">Espresso Martini</li>
                    <li className="pp-cocktails-classic pp-cocktails-classic--note">Tout cocktail classique sur demande</li>
                  </ul>
                </div>
      
                
                <div data-pp-reveal data-pp-delay="2">
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--pp-space-4)", marginBottom: "var(--pp-space-3)" }}>
                    <span style={{ fontSize: "1.8rem" }} aria-hidden="true"></span>
                    <h3 style={{ fontFamily: "var(--pp-font-serif)", fontSize: "var(--pp-text-2xl)", color: "var(--pp-ocean)", margin: "0" }}>Sans Alcool</h3>
                    <div style={{ flex: "1", height: "1px", background: "linear-gradient(to right, rgba(var(--pp-ocean-rgb),.3), transparent)" }}></div>
                  </div>
                  <p style={{ color: "var(--pp-gray)", fontSize: "var(--pp-text-sm)", fontStyle: "italic", marginBottom: "var(--pp-space-6)", paddingLeft: "calc(1.8rem + var(--pp-space-4))" }}>Sur mesure selon vos envies &nbsp;·&nbsp; <strong style={{ color: "var(--pp-gold)", fontStyle: "normal" }}>9€</strong></p>
      
                  <div style={{ background: "linear-gradient(135deg, var(--pp-sand) 0%, rgba(201,168,76,.08) 100%)", border: "1px solid rgba(201,168,76,.35)", borderRadius: "var(--pp-radius-lg)", padding: "var(--pp-space-8)" }}>
                    <p style={{ fontSize: "var(--pp-text-base)", color: "var(--pp-ink)", lineHeight: "1.8", margin: "0 0 var(--pp-space-4)" }}>
                      Nos mocktails sont créés <strong>sur mesure</strong> par notre barman selon vos goûts du moment — fruité, floral, épicé ou ultra-frais.
                    </p>
                    <p style={{ fontSize: "var(--pp-text-sm)", color: "var(--pp-gray)", margin: "0 0 var(--pp-space-6)" }}>
                      Pas de carte figée : venez nous parler de vos envies, on s'occupe du reste.
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "var(--pp-space-3)" }}>
                      <div style={{ width: "40px", height: "40px", background: "var(--pp-gold)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: "0" }}></div>
                      <p style={{ fontSize: "var(--pp-text-sm)", fontWeight: "600", color: "var(--pp-ocean)", margin: "0" }}>Approchez-vous du bar et parlez à notre barman !</p>
                    </div>
                  </div>
                </div>
      
              </div>
      
            </div>
          </section>
      
          
          <section className="pp-section pp-carte-section" id="carte-boissons" aria-labelledby="boissons-title">
            <div className="pp-container">
      
              <div className="pp-section-header" data-pp-reveal>
                <span className="pp-eyebrow pp-eyebrow--gold">Carte complète</span>
                <h2 className="pp-title pp-title--editorial" id="boissons-title">Boissons &amp; <em className="pp-word-gold">Spiritueux</em></h2>
                <p className="pp-subtitle">Apéritifs · Bières · Softs · Vins du domaine · Spiritueux · Champagnes</p>
              </div>
      
              
              <p className="pp-carte-scroll-hint" aria-hidden="true">Glissez pour voir la suite</p>
      
              
              <div className="pp-carte-book">
      
                
                <div className="pp-carte-page" data-pp-reveal data-pp-delay="1">
                  <div className="pp-carte-page__inner">
                    <div className="pp-carte-page__num" aria-hidden="true">1 / 3</div>
      
                    <div className="pp-carte-chapter">
                      <h3 className="pp-carte-chapter__title">Apéritifs</h3>
                      <ul className="pp-carte-lines">
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Ricard <small>2cl</small></span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">3,50</span>
                        </li>
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Martini Blanc <small>4cl</small></span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">4,50</span>
                        </li>
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Kir <small>Cassis · Mûre · Pêche</small></span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">6</span>
                        </li>
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Royal <small>Cassis · Mûre · Pêche</small></span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">9</span>
                        </li>
                      </ul>
                    </div>
      
                    <div className="pp-carte-chapter">
                      <h3 className="pp-carte-chapter__title">Bières</h3>
                      <ul className="pp-carte-lines">
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Heineken <small>33cl</small></span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">7</span>
                        </li>
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Heineken 0% <small>33cl</small></span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">6</span>
                        </li>
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Desperados</span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">8</span>
                        </li>
                      </ul>
                    </div>
      
                    <div className="pp-carte-chapter">
                      <h3 className="pp-carte-chapter__title">Softs</h3>
                      <ul className="pp-carte-lines">
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Sodas <small>33cl</small></span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">4</span>
                        </li>
                        <li className="pp-carte-line__sub">Pepsi · Pepsi Max · Limonette · Orangina · Ice Tea</li>
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Jus Pago <small>20cl · Orange · Pomme · Ananas</small></span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">4</span>
                        </li>
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Sirop <small>Grenadine · Fraise · Menthe · Citron · Pêche</small></span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">4</span>
                        </li>
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Eau Sémillante <small>50cl</small></span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">4</span>
                        </li>
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Eau Sémillante <small>75cl · plate ou gazeuse</small></span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">6</span>
                        </li>
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Hexis <small>25cl</small></span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">6</span>
                        </li>
                      </ul>
                    </div>
      
                    <div className="pp-carte-chapter">
                      <h3 className="pp-carte-chapter__title">Boissons Chaudes</h3>
                      <ul className="pp-carte-lines">
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Café · Décaféiné</span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">3,50</span>
                        </li>
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Thé</span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">4,50</span>
                        </li>
                      </ul>
                    </div>
      
                  </div>
                </div>
      
                
                <div className="pp-carte-page" data-pp-reveal data-pp-delay="2">
                  <div className="pp-carte-page__inner">
                    <div className="pp-carte-page__num" aria-hidden="true">2 / 3</div>
      
                    <div className="pp-carte-chapter">
                      <h3 className="pp-carte-chapter__title">Digestifs &amp; Spiritueux</h3>
                      <p className="pp-carte-chapter__legend">Verre 4cl · Bouteille 70cl</p>
                      <ul className="pp-carte-lines">
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Get 27</span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">11 <em>/ 110</em></span>
                        </li>
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Shooter à la demande</span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">5 <em>/ 110</em></span>
                        </li>
                      </ul>
                    </div>
      
                    <div className="pp-carte-chapter">
                      <h3 className="pp-carte-chapter__title pp-carte-chapter__title--spirit">Vodka</h3>
                      <ul className="pp-carte-lines">
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Smirnoff</span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">11 <em>/ 110</em></span>
                        </li>
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Cîroc</span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">150</span>
                        </li>
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Cîroc + Hexis</span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">160</span>
                        </li>
                      </ul>
                    </div>
      
                    <div className="pp-carte-chapter">
                      <h3 className="pp-carte-chapter__title pp-carte-chapter__title--spirit">Rhum</h3>
                      <ul className="pp-carte-lines">
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Captain Morgan</span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">11 <em>/ 110</em></span>
                        </li>
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Havana 7 ans</span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">130</span>
                        </li>
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Diplomatico</span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">150</span>
                        </li>
                      </ul>
                    </div>
      
                    <div className="pp-carte-chapter">
                      <h3 className="pp-carte-chapter__title pp-carte-chapter__title--spirit">Gin</h3>
                      <ul className="pp-carte-lines">
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Tanqueray</span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">11 <em>/ 110</em></span>
                        </li>
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Tanqueray Ten</span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">150</span>
                        </li>
                      </ul>
                    </div>
      
                    <div className="pp-carte-chapter">
                      <h3 className="pp-carte-chapter__title pp-carte-chapter__title--spirit">Whisky</h3>
                      <ul className="pp-carte-lines">
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Johnnie Walker Red Label</span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">11 <em>/ 110</em></span>
                        </li>
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Johnnie Walker Black Label</span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">150</span>
                        </li>
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Jack Daniel's</span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">150</span>
                        </li>
                      </ul>
                    </div>
      
                    <div className="pp-carte-chapter">
                      <h3 className="pp-carte-chapter__title pp-carte-chapter__title--spirit">Tequila</h3>
                      <ul className="pp-carte-lines">
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Don Julio Reposado</span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">160</span>
                        </li>
                        <li className="pp-carte-line pp-carte-line--prestige">
                          <span className="pp-carte-line__name">Don Julio 1942</span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">380</span>
                        </li>
                      </ul>
                    </div>
      
                  </div>
                </div>
      
                
                <div className="pp-carte-page" data-pp-reveal data-pp-delay="3">
                  <div className="pp-carte-page__inner">
                    <div className="pp-carte-page__num" aria-hidden="true">3 / 3</div>
      
                    <div className="pp-carte-chapter">
                      <h3 className="pp-carte-chapter__title">Champagne</h3>
                      <ul className="pp-carte-lines">
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Laurent-Perrier Brut</span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">110</span>
                        </li>
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Laurent-Perrier Rosé</span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">150</span>
                        </li>
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Ruinart Blanc de Blancs</span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">190</span>
                        </li>
                        <li className="pp-carte-line pp-carte-line--prestige">
                          <span className="pp-carte-line__name">Dom Pérignon</span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">400</span>
                        </li>
                      </ul>
                    </div>
      
                    <div className="pp-carte-chapter">
                      <h3 className="pp-carte-chapter__title">Vins du Domaine</h3>
                      <p className="pp-carte-chapter__legend">Domaine du Petit Chaumont · Vins bio des Sables de Camargue · Verre / Bouteille</p>
      
                      <h4 className="pp-carte-chapter__title--spirit">Blanc</h4>
                      <ul className="pp-carte-lines">
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Blanc de Blancs</span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">5 <em>/ 26</em></span>
                        </li>
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Chardonnay</span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">6 <em>/ 29</em></span>
                        </li>
                      </ul>
      
                      <h4 className="pp-carte-chapter__title--spirit">Rosé</h4>
                      <ul className="pp-carte-lines">
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Le Gris de Nathalie</span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">5 <em>/ 26</em></span>
                        </li>
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Mamz'elles Gris</span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">29</span>
                        </li>
                      </ul>
      
                      <h4 className="pp-carte-chapter__title--spirit">Rouge</h4>
                      <ul className="pp-carte-lines">
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Rouge des Sables</span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">5 <em>/ 26</em></span>
                        </li>
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Tradition</span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">6 <em>/ 29</em></span>
                        </li>
                      </ul>
      
                      <h4 className="pp-carte-chapter__title--spirit">Coteaux de Gascogne</h4>
                      <ul className="pp-carte-lines">
                        <li className="pp-carte-line">
                          <span className="pp-carte-line__name">Uby N°4 Semimoelleux</span>
                          <span className="pp-carte-line__dots"></span>
                          <span className="pp-carte-line__price">6 <em>/ 31</em></span>
                        </li>
                      </ul>
                    </div>
      
                  </div>
                </div>
      
              </div>
      
              <p style={{ textAlign: "center", marginTop: "var(--pp-space-8)", fontSize: "var(--pp-text-xs)", color: "var(--pp-gray)", fontStyle: "italic" }} data-pp-reveal>
                Tous les prix sont en euros, service compris.
              </p>
      
            </div>
          </section>
      
          
          <section className="pp-section" style={{ background: "var(--pp-ink)", paddingBlock: "var(--pp-space-6)", overflow: "hidden" }} aria-hidden="true">
            <div className="pp-hmarquee pp-hmarquee--dark">
              <div className="pp-hmarquee__track">
                <span className="pp-hmarquee__item">Gin-Gembre</span>
                <span className="pp-hmarquee__sep">·</span>
                <span className="pp-hmarquee__item">Spice Rush</span>
                <span className="pp-hmarquee__sep">·</span>
                <span className="pp-hmarquee__item">Rhum'antique</span>
                <span className="pp-hmarquee__sep">·</span>
                <span className="pp-hmarquee__item">Cosa Nostra</span>
                <span className="pp-hmarquee__sep">·</span>
                <span className="pp-hmarquee__item">Red Minth</span>
                <span className="pp-hmarquee__sep">·</span>
                <span className="pp-hmarquee__item">Mojito</span>
                <span className="pp-hmarquee__sep">·</span>
                <span className="pp-hmarquee__item">Espresso Martini</span>
                <span className="pp-hmarquee__sep">·</span>
                <span className="pp-hmarquee__item">Spritz</span>
                <span className="pp-hmarquee__sep">·</span>
                
                <span className="pp-hmarquee__item" aria-hidden="true">Gin-Gembre</span>
                <span className="pp-hmarquee__sep" aria-hidden="true">·</span>
                <span className="pp-hmarquee__item" aria-hidden="true">Spice Rush</span>
                <span className="pp-hmarquee__sep" aria-hidden="true">·</span>
                <span className="pp-hmarquee__item" aria-hidden="true">Rhum'antique</span>
                <span className="pp-hmarquee__sep" aria-hidden="true">·</span>
                <span className="pp-hmarquee__item" aria-hidden="true">Cosa Nostra</span>
                <span className="pp-hmarquee__sep" aria-hidden="true">·</span>
                <span className="pp-hmarquee__item" aria-hidden="true">Red Minth</span>
                <span className="pp-hmarquee__sep" aria-hidden="true">·</span>
                <span className="pp-hmarquee__item" aria-hidden="true">Mojito</span>
                <span className="pp-hmarquee__sep" aria-hidden="true">·</span>
                <span className="pp-hmarquee__item" aria-hidden="true">Espresso Martini</span>
                <span className="pp-hmarquee__sep" aria-hidden="true">·</span>
                <span className="pp-hmarquee__item" aria-hidden="true">Spritz</span>
                <span className="pp-hmarquee__sep" aria-hidden="true">·</span>
              </div>
            </div>
          </section>
      
          
          <section className="pp-section pp-cta-section" aria-labelledby="bar-cta-title">
            <div className="pp-container">
              <div className="pp-cta-section__content">
                <span className="pp-eyebrow pp-eyebrow--gold" data-pp-reveal>On vous attend au bar</span>
                <h2 className="pp-title" id="bar-cta-title" data-pp-reveal data-pp-delay="1" style={{ color: "var(--pp-white)" }}>
                  Réservez votre soirée
                </h2>
                <p className="pp-subtitle pp-subtitle--light" style={{ marginInline: "auto", marginBottom: "var(--pp-space-10)" }} data-pp-reveal data-pp-delay="2">
                  Tapas au bord de la piscine, transats, cocktails ou soirée à la Paillote —
                  le bar est ouvert toute la journée.
                </p>
                <div style={{ display: "flex", gap: "var(--pp-space-4)", justifyContent: "center", flexWrap: "wrap" }} data-pp-reveal data-pp-delay="3">
                  <a href="/contact" className="pp-btn pp-btn--gold pp-btn--lg pp-magnetic">Réserver une table</a>
                  <a href="/restaurant#carte-tapas" className="pp-btn pp-btn--secondary pp-btn--lg pp-magnetic">Voir la carte tapas</a>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
