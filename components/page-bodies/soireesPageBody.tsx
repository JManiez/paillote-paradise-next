/* Page Soirées — United, programme hebdo & calendrier saison 2026 */
import Image from 'next/image';
import type { ReactNode } from 'react';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { SHOTGUN_UNITED_URL } from '@/lib/shotgun';
import { SOIREES_AGENDA_2026, UNITED_EDITIONS_COUNT } from '@/lib/soireesAgenda2026';

function ShotgunButton({
  className,
  children,
  size = 'lg',
}: {
  className?: string;
  children: ReactNode;
  size?: 'sm' | 'lg';
}) {
  const sizeClass = size === 'sm' ? 'pp-btn--sm' : 'pp-btn--lg';
  return (
    <a
      href={SHOTGUN_UNITED_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`pp-btn pp-btn--gold ${sizeClass} pp-magnetic ${className ?? ''}`.trim()}
    >
      {children}
    </a>
  );
}

export function SoireesPageBody(): ReactNode {
  return (
    <>
      {/* Hero */}
      <section className="pp-page-hero pp-kenburns pp-soirees-hero" aria-labelledby="soirees-title">
        <Image
          src="/assets/images/hero-soirees-united.jpg"
          alt="United by La Paillote — foule et piscine illuminée, soirée DJ en Camargue"
          fill
          className="pp-page-hero__img"
          priority
          sizes="100vw"
        />
        <div className="pp-soirees-hero__shade" aria-hidden="true" />
        <div className="pp-page-hero__breadcrumb-wrap">
          <PageBreadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Soirées' }]} />
        </div>
        <div className="pp-page-hero__content">
          <span className="pp-eyebrow pp-eyebrow--gold pp-eyebrow--theatrical">Saison 2026</span>
          <p className="pp-soirees-hero__brand" aria-hidden="true">
            UNITED
          </p>
          <h1 className="pp-page-hero__title pp-title--editorial" id="soirees-title">
            Les <em className="pp-word-gold">Soirées</em> Paradise
          </h1>
          <p className="pp-page-hero__subtitle">
            United chaque dimanche · Salsa le mercredi · Festif le vendredi
          </p>
          <div className="pp-soirees-hero__actions">
            <ShotgunButton>Réserver sur Shotgun</ShotgunButton>
            <a href="#programme" className="pp-btn pp-btn--secondary pp-btn--lg pp-magnetic">
              Voir le programme
            </a>
          </div>
        </div>
        <div className="pp-wave-bottom" aria-hidden="true">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path fill="var(--pp-night)" d="M0,40 C200,80 400,0 600,40 C800,80 1000,20 1200,50 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* United */}
      <section className="pp-section--lg pp-sunday" id="dimanche" aria-labelledby="dimanche-title">
        <div className="pp-sunday__deco" aria-hidden="true" />
        <div className="pp-sunday__halo pp-sunday__halo--left" aria-hidden="true" />
        <div className="pp-sunday__halo pp-sunday__halo--right" aria-hidden="true" />
        <div className="pp-sunday__bg-text" aria-hidden="true">
          UNITED
        </div>
        <div className="pp-particles" data-pp-particles="34" aria-hidden="true" />

        <div className="pp-container">
          <div className="pp-sunday__eyebrow" data-pp-reveal>
            <span className="pp-sunday__eyebrow-line" aria-hidden="true" />
            <span className="pp-sunday__eyebrow-text">Le rendez-vous du dimanche</span>
            <span className="pp-sunday__eyebrow-star" aria-hidden="true">
              ✦
            </span>
            <span className="pp-sunday__eyebrow-text">12h → minuit</span>
            <span className="pp-sunday__eyebrow-line" aria-hidden="true" />
          </div>

          <div className="pp-sunday__inner">
            <div className="pp-sunday__content" data-pp-reveal="left">
              <div className="pp-sunday__label">
                <span className="pp-sunday__label-dot" aria-hidden="true" />
                Événement phare
              </div>
              <h2 className="pp-sunday__title" id="dimanche-title">
                La Soirée du <em>Dimanche</em>
              </h2>
              <p className="pp-sunday__caption">
                <span className="pp-sunday__caption-line" aria-hidden="true" />
                United by La Paillote Paradise
                <span className="pp-sunday__caption-line" aria-hidden="true" />
              </p>
              <p className="pp-sunday__text">
                Chaque dimanche, de 12h à minuit, La Paillote se transforme en scène festive.
                DJ guest, piscine illuminée, cocktails signature — une énergie{' '}
                <strong>connue dans toute la région et au-delà</strong>.
              </p>

              <div className="pp-sunday__card">
                <span className="pp-sunday__card-corner pp-sunday__card-corner--tl" aria-hidden="true" />
                <span className="pp-sunday__card-corner pp-sunday__card-corner--tr" aria-hidden="true" />
                <span className="pp-sunday__card-corner pp-sunday__card-corner--bl" aria-hidden="true" />
                <span className="pp-sunday__card-corner pp-sunday__card-corner--br" aria-hidden="true" />
                <div className="pp-sunday__card-info">
                  <span className="pp-sunday__card-label">Billetterie officielle</span>
                  <span className="pp-sunday__card-date">Shotgun · United</span>
                  <span className="pp-sunday__card-time">Places limitées · Réservation en ligne</span>
                </div>
                <div className="pp-sunday__card-sep" aria-hidden="true" />
                <div className="pp-countdown pp-countdown--neon" data-pp-countdown="compact" role="status" aria-live="polite">
                  <span className="pp-countdown__num">—</span>
                  <span className="pp-countdown__label">jours</span>
                </div>
              </div>

              <div className="pp-sunday__ctas">
                <ShotgunButton>Réserver pour dimanche</ShotgunButton>
                <a href="#programme" className="pp-sunday__link">
                  Programme de la semaine
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="pp-sunday__visual" data-pp-reveal="right">
              <div className="pp-sunday__frame">
                <span className="pp-sunday__frame-corner pp-sunday__frame-corner--tl" aria-hidden="true" />
                <span className="pp-sunday__frame-corner pp-sunday__frame-corner--tr" aria-hidden="true" />
                <span className="pp-sunday__frame-corner pp-sunday__frame-corner--bl" aria-hidden="true" />
                <span className="pp-sunday__frame-corner pp-sunday__frame-corner--br" aria-hidden="true" />
                <div className="pp-sunday__img-frame">
                  <Image
                    src="/assets/images/united-dimanche.jpg"
                    alt="United — ambiance nocturne au bord de la piscine, La Paillote Paradise"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <span className="pp-sunday__img-overlay" aria-hidden="true" />
                  <span className="pp-sunday__img-grain" aria-hidden="true" />
                </div>
                <div className="pp-sunday__seal" aria-hidden="true">
                  <svg viewBox="0 0 200 200">
                    <defs>
                      <path id="ppSoireesCircle" d="M 100,100 m -76,0 a 76,76 0 1,1 152,0 a 76,76 0 1,1 -152,0" />
                    </defs>
                    <text>
                      <textPath href="#ppSoireesCircle" startOffset="0">
                        ✦ INVITATION ONLY ✦ RÉSERVÉ AUX CLIENTS
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
                  <span className="pp-sunday__badge-line" aria-hidden="true" />
                  <span className="pp-sunday__badge-label">
                    12h00
                    <br />↓<br />
                    00h00
                  </span>
                </div>
              </div>
              <div className="pp-sunday__stats">
                <div className="pp-sunday__stat">
                  <span className="pp-sunday__stat-num">{UNITED_EDITIONS_COUNT}</span>
                  <span className="pp-sunday__stat-label">
                    dimanches
                    <br />
                    saison 2026
                  </span>
                </div>
                <span className="pp-sunday__stat-sep" aria-hidden="true" />
                <div className="pp-sunday__stat">
                  <span className="pp-sunday__stat-num">DJ</span>
                  <span className="pp-sunday__stat-label">
                    guest
                    <br />
                    chaque semaine
                  </span>
                </div>
                <span className="pp-sunday__stat-sep" aria-hidden="true" />
                <div className="pp-sunday__stat">
                  <span className="pp-sunday__stat-num">12h</span>
                  <span className="pp-sunday__stat-label">
                    non-stop
                    <br />
                    de 12h à 00h
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pp-sunday__marquee" aria-hidden="true">
            <div className="pp-sunday__marquee-track">
              <span>✦ UNITED</span>
              <span>✦ SHOTGUN</span>
              <span>✦ POOL PARTY</span>
              <span>✦ DJ SETS</span>
              <span>✦ COCKTAILS</span>
              <span>✦ EVERY SUNDAY</span>
              <span>✦ UNITED</span>
              <span>✦ SHOTGUN</span>
              <span>✦ POOL PARTY</span>
              <span>✦ DJ SETS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Programme hebdo */}
      <section className="pp-section pp-agenda" id="programme" aria-labelledby="hebdo-title">
        <div className="pp-container">
          <header className="pp-agenda__head" data-pp-reveal>
            <span className="pp-eyebrow pp-eyebrow--gold">Programme</span>
            <h2 className="pp-title pp-title--light" id="hebdo-title">
              Trois soirées,
              <br />
              <em>trois ambiances</em>
            </h2>
            <p className="pp-agenda__lead">
              Mercredi latino, vendredi festif, dimanche United — chaque rendez-vous a son identité.
              Billetterie United sur{' '}
              <a href={SHOTGUN_UNITED_URL} target="_blank" rel="noopener noreferrer" className="pp-agenda__shotgun-link">
                Shotgun
              </a>
              .
            </p>
            <div className="pp-agenda__head-actions">
              <ShotgunButton size="sm">Billets United · Shotgun</ShotgunButton>
              <a href="#calendrier" className="pp-btn pp-btn--secondary pp-btn--sm">
                Calendrier complet
              </a>
            </div>
          </header>

          <div className="pp-agenda__week-wrap" data-pp-reveal data-pp-delay="1">
            <p className="pp-agenda__scroll-hint" aria-hidden="true">
              Glisser pour voir la semaine →
            </p>
            <div className="pp-agenda__week" role="list" aria-label="Programme hebdomadaire des soirées">
              <article className="pp-agenda__day pp-agenda__day--rest" role="listitem">
                <div className="pp-agenda__day-head">
                  <span className="pp-agenda__day-abbr">Lun</span>
                  <span className="pp-agenda__day-name">Lundi</span>
                </div>
                <p className="pp-agenda__day-rest">Le domaine se repose</p>
              </article>

              <article className="pp-agenda__day pp-agenda__day--rest" role="listitem">
                <div className="pp-agenda__day-head">
                  <span className="pp-agenda__day-abbr">Mar</span>
                  <span className="pp-agenda__day-name">Mardi</span>
                </div>
                <p className="pp-agenda__day-rest">Journée au calme</p>
              </article>

              <article className="pp-agenda__day pp-agenda__day--evening" role="listitem">
                <div className="pp-agenda__day-head">
                  <span className="pp-agenda__day-abbr">Mer</span>
                  <span className="pp-agenda__day-name">Mercredi</span>
                </div>
                <div className="pp-agenda__hours">Soirée</div>
                <p className="pp-agenda__day-tag">Latin vibes</p>
                <div className="pp-agenda__night">
                  <span className="pp-agenda__night-label">Soirée</span>
                  <p className="pp-agenda__night-title">Salsa &amp; Latin Music</p>
                  <p className="pp-agenda__night-desc">Bachata, reggaeton, piste au bord de la piscine.</p>
                </div>
              </article>

              <article className="pp-agenda__day" role="listitem">
                <div className="pp-agenda__day-head">
                  <span className="pp-agenda__day-abbr">Jeu</span>
                  <span className="pp-agenda__day-name">Jeudi</span>
                </div>
                <p className="pp-agenda__day-rest">Préparation du week-end</p>
              </article>

              <article className="pp-agenda__day pp-agenda__day--evening" role="listitem">
                <div className="pp-agenda__day-head">
                  <span className="pp-agenda__day-abbr">Ven</span>
                  <span className="pp-agenda__day-name">Vendredi</span>
                </div>
                <div className="pp-agenda__hours">Soirée</div>
                <p className="pp-agenda__day-tag">Week-end</p>
                <div className="pp-agenda__night">
                  <span className="pp-agenda__night-label">Soirée</span>
                  <p className="pp-agenda__night-title">Soirée Vendredi</p>
                  <p className="pp-agenda__night-desc">DJ, piscine illuminée, esprit Paillote.</p>
                </div>
              </article>

              <article className="pp-agenda__day" role="listitem">
                <div className="pp-agenda__day-head">
                  <span className="pp-agenda__day-abbr">Sam</span>
                  <span className="pp-agenda__day-name">Samedi</span>
                </div>
                <p className="pp-agenda__day-rest">Journée Paradise</p>
                <span className="pp-agenda__day-foot">Piscine &amp; tapas</span>
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
                  <li className="pp-agenda__act">DJ guest international</li>
                  <li className="pp-agenda__act">Pool party nocturne</li>
                  <li className="pp-agenda__act">Invitation only</li>
                </ul>
                <a
                  href={SHOTGUN_UNITED_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pp-btn pp-btn--gold pp-btn--xs pp-agenda__featured-cta"
                >
                  Billets sur Shotgun
                </a>
              </article>
            </div>
          </div>

          <p className="pp-agenda__note" data-pp-reveal data-pp-delay="2">
            Mercredi &amp; vendredi : accès sur place selon affluence · Dimanche United : réservation conseillée via Shotgun.
          </p>
        </div>
      </section>

      {/* Calendrier saison */}
      <section
        className="pp-section pp-soirees-cal"
        id="calendrier"
        style={{ background: 'var(--pp-night-mid)' }}
        aria-labelledby="agenda-saison-title"
      >
        <div className="pp-container">
          <div className="pp-section-header" data-pp-reveal style={{ color: 'var(--pp-white)' }}>
            <span className="pp-eyebrow pp-eyebrow--gold">Agenda saison 2026</span>
            <h2 className="pp-title pp-title--light" id="agenda-saison-title">
              Calendrier complet
            </h2>
            <p className="pp-subtitle pp-subtitle--light">
              {UNITED_EDITIONS_COUNT} éditions United · dates spéciales &amp; soirées thématiques
            </p>
          </div>

          <div className="pp-soirees-cal__grid" data-pp-reveal>
            {SOIREES_AGENDA_2026.map((month) => (
              <div key={month.id} className="pp-soirees-cal__month">
                <header className="pp-soirees-cal__month-head">
                  <h3 className="pp-soirees-cal__month-title">{month.title}</h3>
                  <span className="pp-soirees-cal__month-count">{month.summary}</span>
                </header>
                <ul className="pp-soirees-cal__events">
                  {month.events.map((event) => (
                    <li
                      key={event.date + event.title}
                      className={
                        'pp-soirees-cal__row' +
                        (event.highlight ? ' pp-soirees-cal__row--highlight' : '') +
                        (event.kind === 'united' ? ' pp-soirees-cal__row--united' : '')
                      }
                    >
                      <time className="pp-soirees-cal__date" dateTime={event.date}>
                        {event.dateLabel}
                      </time>
                      <div className="pp-soirees-cal__body">
                        <span className={`pp-soirees-cal__tag pp-soirees-cal__tag--${event.kind}`}>
                          {event.tag}
                        </span>
                        <p className="pp-soirees-cal__name">{event.title}</p>
                      </div>
                      {event.ticketUrl ? (
                        <a
                          href={event.ticketUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pp-soirees-cal__ticket"
                          aria-label={`Billets Shotgun — ${event.title}`}
                        >
                          Shotgun
                        </a>
                      ) : (
                        <span className="pp-soirees-cal__ticket pp-soirees-cal__ticket--muted">Sur place</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pp-soirees-cal__foot" data-pp-reveal>
            <p className="pp-soirees-cal__disclaimer">
              Line-ups et horaires susceptibles d&apos;évoluer — suivez{' '}
              <a href="https://www.instagram.com/pailloteparadise" target="_blank" rel="noopener noreferrer">
                @pailloteparadise
              </a>{' '}
              et la page{' '}
              <a href={SHOTGUN_UNITED_URL} target="_blank" rel="noopener noreferrer">
                United sur Shotgun
              </a>{' '}
              pour les annonces DJ.
            </p>
            <div className="pp-soirees-cal__actions">
              <ShotgunButton>Billets United · Shotgun</ShotgunButton>
              <a
                href="https://www.instagram.com/pailloteparadise"
                target="_blank"
                rel="noopener noreferrer"
                className="pp-btn pp-btn--secondary pp-btn--lg"
              >
                Suivre sur Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="pp-section pp-cta-section" aria-labelledby="soirees-cta-title">
        <div className="pp-container">
          <div className="pp-cta-section__content">
            <h2 className="pp-title" id="soirees-cta-title" style={{ color: 'var(--pp-white)' }} data-pp-reveal>
              La prochaine soirée inoubliable,
              <br />
              c&apos;est la vôtre
            </h2>
            <p
              className="pp-subtitle pp-subtitle--light"
              style={{ marginInline: 'auto', marginBottom: 'var(--pp-space-10)' }}
              data-pp-reveal
              data-pp-delay="1"
            >
              United le dimanche sur Shotgun · privatisation sur mesure pour vos événements.
            </p>
            <div
              style={{
                display: 'flex',
                gap: 'var(--pp-space-4)',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
              data-pp-reveal
              data-pp-delay="2"
            >
              <ShotgunButton>Réserver ma place</ShotgunButton>
              <a href="/privatisation" className="pp-btn pp-btn--secondary pp-btn--lg pp-magnetic">
                Privatiser pour un événement
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
