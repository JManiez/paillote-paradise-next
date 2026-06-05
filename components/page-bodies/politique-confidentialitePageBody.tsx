/* Migré depuis lib/pages-html — éditable en React */
import type { ReactNode } from 'react';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';

export function PolitiqueConfidentialitePageBody(): ReactNode {
  return (
    <>
      <section className="pp-page-hero pp-page-hero--short" aria-labelledby="pc-title">
            <div className="pp-page-hero__breadcrumb-wrap">
              <PageBreadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Politique de confidentialité' }]} />
            </div>
            <div className="pp-page-hero__content">
              <h1 className="pp-page-hero__title" id="pc-title">Politique de confidentialité</h1>
            </div>
          </section>
      
          <section className="pp-section" style={{ background: "var(--pp-sand)" }}>
            <div className="pp-container">
              <div style={{ maxWidth: "800px", marginInline: "auto" }}>
                <div style={{ background: "white", borderRadius: "var(--pp-radius-lg)", padding: "var(--pp-space-12)", boxShadow: "var(--pp-shadow-sm)" }}>
      
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-8)" }}>
                    La présente politique de confidentialité décrit comment <strong>La Paillote Paradise</strong> collecte, utilise et protège vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679) et à la loi Informatique et Libertés.
                  </p>
      
                  <h2 style={{ fontFamily: "var(--pp-font-display)", color: "var(--pp-ocean)", marginBottom: "var(--pp-space-6)" }}>1. Responsable du traitement</h2>
                  <ul style={{ listStyle: "none", color: "var(--pp-gray)", lineHeight: "2", marginBottom: "var(--pp-space-8)" }}>
                    <li><strong>Identité :</strong> La Paillote Paradise — [Raison sociale]</li>
                    <li><strong>Adresse :</strong> Domaine du Petit Chaumont, 30220 Aigues-Mortes</li>
                    <li><strong>Contact DPO :</strong> <a href="mailto:contact@pailloteparadise.fr" style={{ color: "var(--pp-sunset)" }}>contact@pailloteparadise.fr</a></li>
                  </ul>
      
                  <h2 style={{ fontFamily: "var(--pp-font-display)", color: "var(--pp-ocean)", marginBottom: "var(--pp-space-6)" }}>2. Données collectées</h2>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-4)" }}>Nous collectons uniquement les données que vous nous transmettez volontairement via :</p>
                  <ul style={{ color: "var(--pp-gray)", lineHeight: "2", marginLeft: "var(--pp-space-6)", marginBottom: "var(--pp-space-4)" }}>
                    <li>Le <strong>formulaire de contact</strong> : nom, prénom, email, téléphone, message.</li>
                    <li>Le <strong>formulaire de devis privatisation</strong> : informations supplémentaires sur l'événement.</li>
                  </ul>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-8)" }}>
                    Nous ne collectons aucune donnée bancaire ni donnée sensible au sens de l'article 9 du RGPD.
                  </p>
      
                  <h2 style={{ fontFamily: "var(--pp-font-display)", color: "var(--pp-ocean)", marginBottom: "var(--pp-space-6)" }}>3. Finalités du traitement</h2>
                  <ul style={{ color: "var(--pp-gray)", lineHeight: "2", marginLeft: "var(--pp-space-6)", marginBottom: "var(--pp-space-8)" }}>
                    <li>Répondre à vos demandes de contact et de réservation.</li>
                    <li>Établir des devis pour la privatisation du domaine.</li>
                    <li>Améliorer la qualité de nos services.</li>
                  </ul>
      
                  <h2 style={{ fontFamily: "var(--pp-font-display)", color: "var(--pp-ocean)", marginBottom: "var(--pp-space-6)" }}>4. Base légale</h2>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-8)" }}>
                    Le traitement de vos données repose sur votre <strong>consentement</strong> (article 6.1.a du RGPD) exprimé lors de la soumission du formulaire, et sur l'<strong>exécution de mesures précontractuelles</strong> (article 6.1.b) dans le cadre d'une demande de devis.
                  </p>
      
                  <h2 style={{ fontFamily: "var(--pp-font-display)", color: "var(--pp-ocean)", marginBottom: "var(--pp-space-6)" }}>5. Durée de conservation</h2>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-8)" }}>
                    Vos données sont conservées pendant <strong>3 ans</strong> à compter de votre dernier contact, sauf obligation légale contraire ou suppression à votre demande.
                  </p>
      
                  <h2 style={{ fontFamily: "var(--pp-font-display)", color: "var(--pp-ocean)", marginBottom: "var(--pp-space-6)" }}>6. Destinataires des données</h2>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-4)" }}>Vos données sont transmises à :</p>
                  <ul style={{ color: "var(--pp-gray)", lineHeight: "2", marginLeft: "var(--pp-space-6)", marginBottom: "var(--pp-space-8)" }}>
                    <li><strong>Formspree</strong> (traitement des formulaires) — politique disponible sur formspree.io/legal/privacy-policy</li>
                    <li>Nos équipes internes uniquement, dans le cadre du traitement de votre demande.</li>
                  </ul>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-8)" }}>
                    Aucune donnée n'est vendue ou cédée à des tiers à des fins commerciales.
                  </p>
      
                  <h2 style={{ fontFamily: "var(--pp-font-display)", color: "var(--pp-ocean)", marginBottom: "var(--pp-space-6)" }}>7. Vos droits</h2>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-4)" }}>Conformément au RGPD, vous disposez des droits suivants :</p>
                  <ul style={{ color: "var(--pp-gray)", lineHeight: "2", marginLeft: "var(--pp-space-6)", marginBottom: "var(--pp-space-4)" }}>
                    <li><strong>Droit d'accès</strong> : obtenir une copie de vos données.</li>
                    <li><strong>Droit de rectification</strong> : corriger des données inexactes.</li>
                    <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données.</li>
                    <li><strong>Droit d'opposition</strong> : vous opposer à un traitement.</li>
                    <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré.</li>
                    <li><strong>Droit de limitation</strong> : limiter le traitement de vos données.</li>
                  </ul>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-8)" }}>
                    Pour exercer ces droits : <a href="mailto:contact@pailloteparadise.fr" style={{ color: "var(--pp-sunset)" }}>contact@pailloteparadise.fr</a><br />
                    En cas de litige, vous pouvez saisir la <strong>CNIL</strong> : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--pp-sunset)" }}>cnil.fr</a>
                  </p>
      
                  <h2 style={{ fontFamily: "var(--pp-font-display)", color: "var(--pp-ocean)", marginBottom: "var(--pp-space-6)" }}>8. Cookies</h2>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-4)" }}>Ce site utilise uniquement des <strong>cookies techniques</strong> (session, préférences) strictement nécessaires à son fonctionnement. Aucun cookie de suivi ou publicitaire n'est utilisé sans consentement explicite.</p>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-8)" }}>
                    Les services tiers intégrés (Google Maps, Google Fonts, Formspree) peuvent déposer leurs propres cookies. Nous vous invitons à consulter leurs politiques respectives.
                  </p>
      
                  <h2 style={{ fontFamily: "var(--pp-font-display)", color: "var(--pp-ocean)", marginBottom: "var(--pp-space-6)" }}>9. Sécurité</h2>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-8)" }}>
                    Nous mettons en œuvre des mesures techniques et organisationnelles appropriées (connexion HTTPS, accès restreint) pour protéger vos données contre tout accès non autorisé, altération ou divulgation.
                  </p>
      
                  <p style={{ color: "var(--pp-gray)", fontSize: "var(--pp-text-sm)", marginTop: "var(--pp-space-10)", paddingTop: "var(--pp-space-6)", borderTop: "1px solid var(--pp-border)" }}>
                    Dernière mise à jour : avril 2026
                  </p>
      
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
