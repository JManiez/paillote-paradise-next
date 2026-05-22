# TODO — Paillote Paradise (site Next.js)

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
