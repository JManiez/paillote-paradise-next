import Image from 'next/image';
import type { HeroMeta } from '../lib/preparePageHtml';

type Props = { hero: HeroMeta };

/** Image LCP du hero — remplace l’ancienne balise <img> du HTML statique */
export function HeroImage({ hero }: Props) {
  return (
    <Image
      src={hero.src}
      alt={hero.alt}
      fill
      priority
      sizes="100vw"
      className={hero.imgClass}
    />
  );
}
