#!/usr/bin/env node
/**
 * Convertit lib/pages-html/*.html en composants TSX.
 * Usage: node scripts/html-to-tsx.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const HTML_DIR = path.join(ROOT, 'lib', 'pages-html');
const OUT_DIR = path.join(ROOT, 'components', 'page-bodies');

const ATTR_KEBAB_MAP = [
  ['stroke-width', 'strokeWidth'],
  ['stroke-linecap', 'strokeLinecap'],
  ['stroke-linejoin', 'strokeLinejoin'],
  ['stroke-miterlimit', 'strokeMiterlimit'],
  ['fill-opacity', 'fillOpacity'],
  ['stroke-opacity', 'strokeOpacity'],
  ['clip-rule', 'clipRule'],
  ['fill-rule', 'fillRule'],
  ['text-anchor', 'textAnchor'],
  ['dominant-baseline', 'dominantBaseline'],
  ['font-weight', 'fontWeight'],
  ['font-size', 'fontSize'],
  ['font-family', 'fontFamily'],
  ['letter-spacing', 'letterSpacing'],
  ['text-transform', 'textTransform'],
  ['fetchpriority', 'fetchPriority'],
  ['referrerpolicy', 'referrerPolicy'],
  ['allowfullscreen', 'allowFullScreen'],
  ['autocomplete', 'autoComplete'],
  ['tabindex', 'tabIndex'],
  ['readonly', 'readOnly'],
  ['maxlength', 'maxLength'],
  ['minlength', 'minLength'],
  ['crossorigin', 'crossOrigin'],
  ['formaction', 'formAction'],
  ['formmethod', 'formMethod'],
  ['http-equiv', 'httpEquiv'],
  ['accept-charset', 'acceptCharset'],
];

function kebabToCamel(s) {
  return s.replace(/-([a-z])/gi, (_, c) => c.toUpperCase());
}

function parseStyleToJsObject(styleStr) {
  const out = {};
  const parts = styleStr.trim().split(';').filter(Boolean);
  for (const part of parts) {
    const idx = part.indexOf(':');
    if (idx === -1) continue;
    const rawKey = part.slice(0, idx).trim();
    const val = part.slice(idx + 1).trim();
    const key = kebabToCamel(rawKey);
    if (key) out[key] = val;
  }
  return out;
}

function formatStyleObject(obj) {
  const entries = Object.entries(obj);
  if (entries.length === 0) return '{}';
  const inner = entries.map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join(', ');
  return `{ ${inner} }`;
}

function htmlToJsxInner(html) {
  let s = html;

  s = s.replace(/<!--[\s\S]*?-->/g, '');

  s = s.replace(/style="([^"]*)"/g, (_, styleStr) => {
    const obj = parseStyleToJsObject(styleStr);
    return `style={${formatStyleObject(obj)}}`;
  });

  s = s.replace(/\bclass=/g, 'className=');
  s = s.replace(/\bfor=/g, 'htmlFor=');
  s = s.replace(/\ballowfullscreen\b/g, 'allowFullScreen={true}');
  s = s.replace(/\brows="(\d+)"/g, 'rows={$1}');
  s = s.replace(/\bcols="(\d+)"/g, 'cols={$1}');

  for (const [from, to] of ATTR_KEBAB_MAP) {
    const re = new RegExp(`\\b${from}=`, 'g');
    s = s.replace(re, `${to}=`);
  }

  s = s.replace(/\btabIndex="(-?\d+)"/g, 'tabIndex={$1}');

  s = s.replace(/\bdata-elfsight-app-lazy\b(?![=])/g, 'data-elfsight-app-lazy={true}');

  s = s.replace(/<br\s*>/gi, '<br />');
  s = s.replace(/<hr\s*>/gi, '<hr />');

  s = s.replace(/<img([^>]*?)(?<!\/)>/gi, (m, inner) => {
    if (inner.trimEnd().endsWith('/')) return m;
    return `<img${inner} />`;
  });

  s = s.replace(/<input([^>]*?)(?<!\/)>/gi, (m, inner) => {
    if (inner.trimEnd().endsWith('/')) return m;
    return `<input${inner} />`;
  });

  s = s.replace(/<iframe([^>]*?)>\s*<\/iframe>/gi, (m, inner) => {
    if (inner.trimEnd().endsWith('/')) return m;
    return `<iframe${inner} />`;
  });

  return s.trim();
}

function pathToComponentName(relPath) {
  const base = relPath.replace(/\.html$/, '');
  const parts = base.split(/[/\\]/);
  const pascal = parts.map((p) =>
    p
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join('')
  );
  return `${pascal.join('')}PageBody`;
}

function walkHtml(dir, baseRel = '') {
  const out = [];
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, name.name);
    const rel = path.join(baseRel, name.name).replace(/\\/g, '/');
    if (name.isDirectory()) {
      out.push(...walkHtml(abs, rel));
    } else if (name.name.endsWith('.html')) {
      out.push({ abs, relKey: rel.replace(/\.html$/, '') });
    }
  }
  return out;
}

function main() {
  if (!fs.existsSync(HTML_DIR)) {
    console.error(
      `Dossier introuvable: ${HTML_DIR}\n` +
        'Placez des fichiers .html (ex. depuis git) puis relancez: node scripts/html-to-tsx.mjs'
    );
    process.exit(1);
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const files = walkHtml(HTML_DIR);

  const registry = [];

  for (const { abs, relKey } of files) {
    const raw = fs.readFileSync(abs, 'utf8');
    let jsx = htmlToJsxInner(raw);

    if (relKey === 'home') {
      jsx = jsx.replace(
        /<span className="pp-agenda__pill pp-agenda__pill--bar"> Happy Hour<\/span>\s*/g,
        ''
      );
    }

    const compName = pathToComponentName(relKey + '.html');
    const subPath = relKey.includes('/') ? path.dirname(relKey) : '';
    const outSub = path.join(OUT_DIR, subPath);
    fs.mkdirSync(outSub, { recursive: true });
    const baseFile = path.basename(relKey);
    const outFile = path.join(outSub, `${baseFile}PageBody.tsx`);

    const content = `/* Migré depuis lib/pages-html — éditable en React */
import type { ReactNode } from 'react';

export function ${compName}(): ReactNode {
  return (
    <>
${jsx
  .split('\n')
  .map((line) => '      ' + line)
  .join('\n')}
    </>
  );
}
`;

    fs.writeFileSync(outFile, content, 'utf8');
    registry.push({ relKey, compName });
  }

  const indexLines = registry
    .sort((a, b) => a.relKey.localeCompare(b.relKey))
    .map((r) => `export { ${r.compName} } from '@/components/page-bodies/${r.relKey}PageBody';`);

  fs.writeFileSync(path.join(OUT_DIR, 'index.ts'), indexLines.join('\n') + '\n', 'utf8');

  console.log(`Wrote ${registry.length} page body components.`);
}

main();
