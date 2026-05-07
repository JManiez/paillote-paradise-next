import 'server-only';
import fs from 'node:fs';
import path from 'node:path';

const PAGES_DIR = path.join(process.cwd(), 'lib', 'pages-html');

type PageData = { htmlContent: string; jsonLd: unknown[] };

const cache = new Map<string, PageData>();

export function loadPage(key: string): PageData {
  const cached = cache.get(key);
  if (cached) return cached;

  const htmlPath = path.join(PAGES_DIR, key + '.html');
  const jsonLdPath = path.join(PAGES_DIR, key + '.jsonld.json');

  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  let jsonLd: unknown[] = [];
  if (fs.existsSync(jsonLdPath)) {
    jsonLd = JSON.parse(fs.readFileSync(jsonLdPath, 'utf8')) as unknown[];
  }

  const data: PageData = { htmlContent, jsonLd };
  cache.set(key, data);
  return data;
}
