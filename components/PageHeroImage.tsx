import Image from 'next/image';
import type { CSSProperties } from 'react';
import {
  PAGE_HERO_IMAGES,
  resolveHeroFocus,
  type PageHeroKey,
} from '@/lib/pageHeroImages';

type PageHeroImageProps = {
  heroKey: PageHeroKey;
  /** Surcharge optionnelle du point de focus */
  focus?: string;
};

export function PageHeroImage({ heroKey, focus }: PageHeroImageProps) {
  const hero = PAGE_HERO_IMAGES[heroKey];
  const objectPosition = resolveHeroFocus(focus ?? hero.focus);

  return (
    <Image
      src={hero.src}
      alt={hero.alt}
      fill
      className="pp-page-hero__img"
      priority
      sizes="100vw"
      style={
        {
          objectPosition,
          '--pp-hero-focus': objectPosition,
        } as CSSProperties
      }
    />
  );
}

/** Style à passer sur `<section className="pp-page-hero">` pour kenburns / CSS. */
export function pageHeroSectionStyle(heroKey: PageHeroKey): CSSProperties {
  return {
    '--pp-hero-focus': resolveHeroFocus(PAGE_HERO_IMAGES[heroKey].focus),
  } as CSSProperties;
}
