# TODO — Paillote Paradise (site Next.js)

## Formulaires contact (Resend) — **à finaliser**

Les formulaires passent par `/api/contact` (Resend). En production, la variable `RESEND_API_KEY` sur Vercel est **vide** → les envois échouent (503).

### Configuration (une fois)

1. Compte [Resend](https://resend.com) → **API Keys** → clé `re_…`
2. **Domains** → `pailloteparadise.fr` → ajouter chez le registrar (OVH, etc.) :
   - **TXT** (DKIM) : `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+C4a+SZcdXO02/tYuo86tWMa4HHCCt6x2aT/UAgmMBfErjBsxH8ldCbmHeBGEyl2WFgguE6Z9MyMWlBQmSCG9HEtyDiTazCrhXTZBYSvWjp+k9C5alg7gbERWy4Owy86j92/GiIB1dDZP8Rv9X0wMcKx277E9fLSNQwbjRflZZwIDAQAB`
   - **MX** : `feedback-smtp.eu-west-1.amazonses.com` (priorité selon Resend)
   - **TXT** (SPF) : `v=spf1 include:amazonses.com ~all`
3. Attendre statut **Verified** dans Resend (quelques minutes à 48 h)
4. Vercel → variables (déjà renseignées en prod) :
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL` = `La Paillote Paradise <contact@pailloteparadise.fr>`
   - `CONTACT_TO_EMAIL` = `paillote.paradise@gmail.com`
5. Redéployer si besoin, puis tester `/contact` et `/privatisation`

**Tant que le domaine n’est pas vérifié**, Resend refuse l’expéditeur `@pailloteparadise.fr` → erreur « Envoi refusé ».

Fichier modèle : `.env.example` → `.env.local` en local.

---

## ZenChef (réservations)

À brancher dès réception de l’URL ou du widget ZenChef.

**Boutons / liens à mettre à jour :**

- Header — « Réserver » (`components/Header.tsx`)
- Footer — lien réservation si présent
- Accueil — CTA final « Réserver / Nous contacter »
- Piscine & Transats — « Réserver un transat » (`piscine-transatsPageBody.tsx`)
- Contact — CTA « Réserver »
- Bar — « Réserver une table »

**Option widget :** intégrer le script iframe ZenChef sur `/contact` plutôt qu’un simple lien externe.

---

## Google Ads

- [ ] Créer la campagne dans Google Ads (compte + objectifs + mots-clés)
- [ ] Fournir l’ID de conversion `AW-XXXXXXXXX` pour intégrer `gtag.js` dans `app/layout.tsx`
- [ ] Configurer les pages de destination (accueil, restaurant, bar, contact, privatisation)

---

## Photos à fournir

| Usage | Fichier actuel / cible | Notes |
|--------|------------------------|--------|
| Hero Contact | `public/assets/images/hero-contact.jpg` | Photo dédiée entrée / domaine |
| Hero Galerie | `public/assets/images/hero-galerie.jpg` | Photo dédiée (vue domaine / piscine) |
| Carrousel cocktails | `public/assets/images/carousel/cocktails/` (8× DSC) | Fait |
| Carrousel tapas | `public/assets/images/carousel/tapas/` (17× DSC) | Fait |

---

## Déjà fait (référence)

- Horaires journée : **12h–19h** (Mer.–Sam.)
- Soirées **Mer. & Ven.** : **20h–01h** (agenda accueil)
- Piscine : **80 m²** · hex « Beds privés »
- Hero accueil : « entre sel et vignes »
- CTA : « Privatiser la paillote »
- Boutons `.pp-btn` : coins arrondis 8px (`--pp-radius`)
- Carrousels : 8 cocktails + 17 tapas dans `carousel/`
