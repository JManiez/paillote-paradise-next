import 'server-only';
import { parse, HTMLElement } from 'node-html-parser';

export type HeroMeta = {
  src: string;
  alt: string;
  imgClass: 'pp-hero__img' | 'pp-page-hero__img';
};

export type PreparedPage =
  | {
      mode: 'simple';
      html: string;
    }
  | {
      mode: 'hero';
      sectionAttrs: Record<string, string>;
      sectionInner: string;
      restHtml: string;
      hero: HeroMeta;
    };

function isHTMLElement(n: unknown): n is HTMLElement {
  return typeof n === 'object' && n !== null && 'tagName' in n;
}

function attrsToRecord(el: HTMLElement): Record<string, string> {
  const out: Record<string, string> = {};
  const attrs = el.attributes as Record<string, string>;
  for (const key of Object.keys(attrs)) {
    out[key] = attrs[key];
  }
  return out;
}

/**
 * Extrait la première image hero (pp-hero__img / pp-page-hero__img) pour la rendre avec next/image,
 * tout en conservant le HTML du reste de la page.
 */
export function preparePageHtml(html: string): PreparedPage {
  const root = parse(html, { comment: true });
  const section = root.querySelector('section.pp-hero, section.pp-page-hero');
  if (!section || !isHTMLElement(section)) {
    return { mode: 'simple', html };
  }

  const img = section.querySelector('img.pp-hero__img, img.pp-page-hero__img');
  if (!img || !isHTMLElement(img)) {
    return { mode: 'simple', html };
  }

  const src = img.getAttribute('src');
  if (!src) {
    return { mode: 'simple', html };
  }

  const alt = img.getAttribute('alt') ?? '';
  const imgClass = img.classList.contains('pp-hero__img')
    ? ('pp-hero__img' as const)
    : ('pp-page-hero__img' as const);

  img.remove();

  const sectionAttrs = attrsToRecord(section);
  const sectionInner = section.innerHTML;
  section.remove();

  const restHtml = root.toString().trim();

  return {
    mode: 'hero',
    sectionAttrs,
    sectionInner,
    restHtml,
    hero: { src, alt, imgClass },
  };
}
