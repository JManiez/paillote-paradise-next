#!/usr/bin/env node
// Génère les page.tsx pour toutes les routes en s'appuyant sur lib/pages/*.ts
import fs from 'node:fs';
import path from 'node:path';

const PAGES = [
  { route: 'restaurant', mod: 'restaurant', seo: 'restaurant' },
  { route: 'bar', mod: 'bar', seo: 'bar' },
  { route: 'piscine-transats', mod: 'piscine-transats', seo: 'piscineTransats' },
  { route: 'soirees', mod: 'soirees', seo: 'soirees' },
  { route: 'privatisation', mod: 'privatisation', seo: 'privatisation' },
  { route: 'galerie', mod: 'galerie', seo: 'galerie' },
  { route: 'contact', mod: 'contact', seo: 'contact' },
  { route: 'mentions-legales', mod: 'mentions-legales', seo: 'mentions' },
  { route: 'politique-confidentialite', mod: 'politique-confidentialite', seo: 'privacy' },
  { route: 'seo/restaurant-paillote-aigues-mortes', mod: 'seo/restaurant-paillote-aigues-mortes', seo: 'seoRestaurant' },
  { route: 'seo/piscine-privee-camargue', mod: 'seo/piscine-privee-camargue', seo: 'seoPiscine' },
  { route: 'seo/soiree-dimanche-aigues-mortes', mod: 'seo/soiree-dimanche-aigues-mortes', seo: 'seoSoireeDimanche' },
  { route: 'seo/paillote-camargue', mod: 'seo/paillote-camargue', seo: 'seoPaillote' },
  { route: 'seo/brunch-dimanche-aigues-mortes', mod: 'seo/brunch-dimanche-aigues-mortes', seo: 'seoBrunch' },
  { route: 'seo/privatisation-domaine-camargue', mod: 'seo/privatisation-domaine-camargue', seo: 'seoPrivatisation' },
];

function pascalize(str) {
  return str
    .split(/[\/-]/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('') + 'Page';
}

for (const page of PAGES) {
  const dir = path.resolve(process.cwd(), 'app', page.route);
  fs.mkdirSync(dir, { recursive: true });

  // Le fichier vit dans app/<route>/page.tsx → il faut remonter (route.split('/').length + 1) niveaux
  const depth = page.route.split('/').length + 1;
  const up = '../'.repeat(depth);

  const componentName = pascalize(page.route);

  const ts = `import type { Metadata } from 'next';
import { PageContent } from '${up}components/PageContent';
import { pageSeo } from '${up}lib/seo';
import { htmlContent, jsonLd } from '${up}lib/pages/${page.mod}';

export const metadata: Metadata = pageSeo.${page.seo};

export default function ${componentName}() {
  return <PageContent htmlContent={htmlContent} jsonLd={jsonLd} />;
}
`;
  fs.writeFileSync(path.join(dir, 'page.tsx'), ts);
  console.log('  →', `app/${page.route}/page.tsx`);
}

console.log('Pages générées.');
