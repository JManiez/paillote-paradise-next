/* Migré depuis lib/pages-html — éditable en React */
import type { ReactNode } from 'react';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { PP_PHONE_DISPLAY } from '@/lib/publicPhone';
import { SITE_EMAIL, SITE_EMAIL_MAILTO } from '@/lib/siteContact';

export function MentionsLegalesPageBody(): ReactNode {
  return (
    <>
      <section className="pp-page-hero pp-page-hero--short" aria-labelledby="ml-title">
            <div className="pp-page-hero__breadcrumb-wrap">
              <PageBreadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Mentions légales' }]} />
            </div>
            <div className="pp-page-hero__content">
              <h1 className="pp-page-hero__title" id="ml-title">Mentions légales</h1>
            </div>
          </section>
      
          <section className="pp-section" style={{ background: "var(--pp-sand)" }}>
            <div className="pp-container">
              <div style={{ maxWidth: "800px", marginInline: "auto" }}>
      
                <div style={{ background: "white", borderRadius: "var(--pp-radius-lg)", padding: "var(--pp-space-12)", boxShadow: "var(--pp-shadow-sm)" }}>
      
                  <h2 style={{ fontFamily: "var(--pp-font-display)", color: "var(--pp-ocean)", marginBottom: "var(--pp-space-6)" }}>1. Éditeur du site</h2>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-3)" }}>
                    Le site <strong>www.pailloteparadise.fr</strong> est édité par :
                  </p>
                  <ul style={{ listStyle: "none", color: "var(--pp-gray)", lineHeight: "2", marginBottom: "var(--pp-space-8)" }}>
                    <li><strong>Dénomination sociale :</strong> [Raison sociale à compléter]</li>
                    <li><strong>Forme juridique :</strong> [SARL / SAS / EURL / Auto-entrepreneur]</li>
                    <li><strong>SIRET :</strong> [Numéro SIRET à compléter]</li>
                    <li><strong>Siège social :</strong> Domaine du Petit Chaumont, Route du Petit Chaumont, 30220 Aigues-Mortes</li>
                    <li><strong>Téléphone :</strong> {PP_PHONE_DISPLAY}</li>
                    <li><strong>Email :</strong> {SITE_EMAIL}</li>
                    <li><strong>Directeur de la publication :</strong> [Nom du dirigeant]</li>
                  </ul>
      
                  <h2 style={{ fontFamily: "var(--pp-font-display)", color: "var(--pp-ocean)", marginBottom: "var(--pp-space-6)" }}>2. Hébergement</h2>
                  <ul style={{ listStyle: "none", color: "var(--pp-gray)", lineHeight: "2", marginBottom: "var(--pp-space-8)" }}>
                    <li><strong>Hébergeur :</strong> Vercel Inc.</li>
                    <li><strong>Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</li>
                    <li><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--pp-sunset)" }}>vercel.com</a></li>
                  </ul>
      
                  <h2 style={{ fontFamily: "var(--pp-font-display)", color: "var(--pp-ocean)", marginBottom: "var(--pp-space-6)" }}>3. Propriété intellectuelle</h2>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-8)" }}>
                    L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, sons, vidéos) est la propriété exclusive de La Paillote Paradise ou de ses partenaires, et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction, représentation, modification ou adaptation, totale ou partielle, est strictement interdite sans autorisation écrite préalable.
                  </p>
      
                  <h2 style={{ fontFamily: "var(--pp-font-display)", color: "var(--pp-ocean)", marginBottom: "var(--pp-space-6)" }}>4. Données personnelles</h2>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-4)" }}>
                    Les données personnelles collectées via le formulaire de contact sont traitées conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679) et à la loi Informatique et Libertés n°78-17 du 6 janvier 1978 modifiée.
                  </p>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-8)" }}>
                    Pour exercer vos droits (accès, rectification, suppression, opposition), contactez-nous à : <a href={SITE_EMAIL_MAILTO} style={{ color: "var(--pp-sunset)" }}>{SITE_EMAIL}</a>
                  </p>
      
                  <h2 style={{ fontFamily: "var(--pp-font-display)", color: "var(--pp-ocean)", marginBottom: "var(--pp-space-6)" }}>5. Cookies</h2>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-8)" }}>
                    Ce site utilise uniquement des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de suivi tiers n'est déposé sans votre consentement.
                  </p>
      
                  <h2 style={{ fontFamily: "var(--pp-font-display)", color: "var(--pp-ocean)", marginBottom: "var(--pp-space-6)" }}>6. Liens hypertextes</h2>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8", marginBottom: "var(--pp-space-8)" }}>
                    Ce site peut contenir des liens vers des sites tiers. La Paillote Paradise ne peut être tenue responsable du contenu de ces sites externes. Tout lien pointant vers le site pailloteparadise.fr doit faire l'objet d'une autorisation préalable.
                  </p>
      
                  <h2 style={{ fontFamily: "var(--pp-font-display)", color: "var(--pp-ocean)", marginBottom: "var(--pp-space-6)" }}>7. Droit applicable</h2>
                  <p style={{ color: "var(--pp-gray)", lineHeight: "1.8" }}>
                    Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
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
