#!/usr/bin/env node
// Extrait le <main> et les JSON-LD de chaque HTML source vers des fichiers HTML "fragment"
// que le page.tsx importera via dangerouslySetInnerHTML.
import fs from 'node:fs';
import path from 'node:path';

const SRC = '/Users/ju/Desktop/R&R/PAILLOTE-PARADISE';
const OUT = path.resolve(process.cwd(), 'lib/pages-html');

const PAGES = [
  { html: 'index.html', key: 'home' },
  { html: 'restaurant.html', key: 'restaurant' },
  { html: 'bar.html', key: 'bar' },
  { html: 'piscine-transats.html', key: 'piscine-transats' },
  { html: 'soirees.html', key: 'soirees' },
  { html: 'privatisation.html', key: 'privatisation' },
  { html: 'galerie.html', key: 'galerie' },
  { html: 'contact.html', key: 'contact' },
  { html: 'mentions-legales.html', key: 'mentions-legales' },
  { html: 'politique-confidentialite.html', key: 'politique-confidentialite' },
  { html: 'seo/restaurant-paillote-aigues-mortes.html', key: 'seo/restaurant-paillote-aigues-mortes' },
  { html: 'seo/piscine-privee-camargue.html', key: 'seo/piscine-privee-camargue' },
  { html: 'seo/soiree-dimanche-aigues-mortes.html', key: 'seo/soiree-dimanche-aigues-mortes' },
  { html: 'seo/paillote-camargue.html', key: 'seo/paillote-camargue' },
  { html: 'seo/brunch-dimanche-aigues-mortes.html', key: 'seo/brunch-dimanche-aigues-mortes' },
  { html: 'seo/privatisation-domaine-camargue.html', key: 'seo/privatisation-domaine-camargue' },
];

fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(path.join(OUT, 'seo'), { recursive: true });

const summary = [];

for (const page of PAGES) {
  const fullPath = path.join(SRC, page.html);
  if (!fs.existsSync(fullPath)) {
    console.warn('SKIP missing', fullPath);
    continue;
  }
  const html = fs.readFileSync(fullPath, 'utf8');

  // 1. Extraire le bloc <main ...>...</main>
  const mainMatch = html.match(/<main\b[^>]*id=["']main["'][^>]*>([\s\S]*?)<\/main>/i);
  let main = mainMatch ? mainMatch[1] : '';

  // 2. Extraire les JSON-LD du <head>
  const jsonLdMatches = [...html.matchAll(/<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  const jsonLds = jsonLdMatches.map((m) => m[1].trim()).filter(Boolean);

  // 3. Supprimer les <script> inline éventuels du main
  main = main.replace(/<script\b[\s\S]*?<\/script>/gi, '');

  // 4. Supprimer les commentaires HTML pour alléger
  main = main.replace(/<!--([\s\S]*?)-->/g, '');

  // 5. Trim leading/trailing whitespace
  main = main.trim();

  // Écrire le HTML nettoyé
  const outHtml = path.join(OUT, page.key + '.html');
  fs.mkdirSync(path.dirname(outHtml), { recursive: true });
  fs.writeFileSync(outHtml, main);

  // Écrire les JSON-LD séparément (un fichier JSON par page)
  if (jsonLds.length > 0) {
    const outLd = path.join(OUT, page.key + '.jsonld.json');
    // On parse-vérifie chaque JSON-LD
    const parsed = jsonLds.map((s, i) => {
      try {
        return JSON.parse(s);
      } catch (e) {
        console.error('Invalid JSON-LD #' + i + ' in', page.key, e.message);
        return null;
      }
    }).filter(Boolean);
    fs.writeFileSync(outLd, JSON.stringify(parsed, null, 2));
  }

  summary.push({
    key: page.key,
    bytes: main.length,
    jsonLds: jsonLds.length,
  });
}

console.log('Extraction OK:');
for (const s of summary) {
  console.log(`  ${s.key.padEnd(50)} ${String(s.bytes).padStart(7)}b  jsonld=${s.jsonLds}`);
}
