#!/usr/bin/env node
/**
 * Copie uniquement les JPG depuis PHOTOS2025 et PHOTOS UNITED vers public/assets/images/gallery/
 * et régénère lib/paradiseGallery.ts
 *
 * Usage : depuis paillote-paradise-next : node scripts/sync-gallery.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT = path.join(__dirname, '..');
const ROOT = path.join(PROJECT, '..');
const SRC_DIRS = [
  path.join(ROOT, 'PHOTOS2025'),
  path.join(ROOT, 'PHOTOS UNITED'),
];
const DEST = path.join(PROJECT, 'public', 'assets', 'images', 'gallery');
const OUT_TS = path.join(PROJECT, 'lib', 'paradiseGallery.ts');

function listPhotos(dir) {
  if (!fs.existsSync(dir)) {
    console.warn('Dossier absent (ignoré):', dir);
    return [];
  }
  return fs
    .readdirSync(dir)
    .filter((n) => /\.(jpe?g)$/i.test(n))
    .map((n) => path.join(dir, n))
    .sort((a, b) => path.basename(a).localeCompare(path.basename(b)));
}

function main() {
  const files = [];
  for (const dir of SRC_DIRS) {
    files.push(...listPhotos(dir));
  }

  if (files.length === 0) {
    console.error('Aucune photo trouvée dans PHOTOS2025 ou PHOTOS UNITED.');
    process.exit(1);
  }

  const entries = files.map((src, idx) => {
    const name = `${String(idx + 1).padStart(3, '0')}.jpg`;
    return {
      src: `/assets/images/gallery/${name}`,
      alt: `La Paillote Paradise — ${path.basename(src)}`,
    };
  });

  const ts = `/** Généré par scripts/sync-gallery.mjs — sources : PHOTOS2025 + PHOTOS UNITED */
export const PARADISE_GALLERY = ${JSON.stringify(entries, null, 2)} as const;

export type ParadiseGalleryItem = (typeof PARADISE_GALLERY)[number];
`;

  fs.writeFileSync(OUT_TS, ts, 'utf8');
  console.log(`Écrit ${OUT_TS} (${entries.length} entrées)`);

  fs.rmSync(DEST, { recursive: true, force: true });
  fs.mkdirSync(DEST, { recursive: true });

  let i = 1;
  for (const src of files) {
    const name = `${String(i).padStart(3, '0')}.jpg`;
    fs.copyFileSync(src, path.join(DEST, name));
    i++;
  }

  console.log(`Copié ${entries.length} images → public/assets/images/gallery/`);
}

main();
