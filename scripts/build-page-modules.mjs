#!/usr/bin/env node
// Convertit lib/pages/*.html (extraits) en lib/pages/*.ts (modules TS exportant le HTML)
// pour les page.tsx puissent les importer sans I/O au runtime.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(process.cwd(), 'lib/pages');

function escapeBacktickString(s) {
  // Échapper les backslash, backtick et ${
  return s
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');
}

function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(full);
      continue;
    }
    if (!entry.name.endsWith('.html')) continue;

    const base = entry.name.replace(/\.html$/, '');
    const tsPath = path.join(dir, base + '.ts');
    const jsonLdPath = path.join(dir, base + '.jsonld.json');

    const html = fs.readFileSync(full, 'utf8');
    const escaped = escapeBacktickString(html);

    let jsonLdLine = 'export const jsonLd: unknown[] = []';
    if (fs.existsSync(jsonLdPath)) {
      const ld = fs.readFileSync(jsonLdPath, 'utf8');
      jsonLdLine = `export const jsonLd: unknown[] = ${ld.trim()}`;
    }

    const ts = `// Auto-généré depuis HTML source. Ne pas éditer manuellement.
export const htmlContent: string = \`${escaped}\`

${jsonLdLine}
`;
    fs.writeFileSync(tsPath, ts);
    console.log('  →', path.relative(process.cwd(), tsPath));
  }
}

processDir(ROOT);
console.log('Modules TS générés.');
