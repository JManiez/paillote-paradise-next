/**
 * Placeholders carrousels Bar / Restaurant — à remplacer par photos dédiées.
 * TODO: remplacer par assets dans public/assets/images/carousel/
 */
import { PARADISE_GALLERY } from '@/lib/paradiseGallery';

export type CarouselItem = {
  src: string;
  alt: string;
  caption?: string;
};

function pick(indices: number[]): CarouselItem[] {
  return indices.map((i) => {
    const item = PARADISE_GALLERY[i];
    if (!item) return { src: '/assets/images/universe-bar.jpg', alt: 'La Paillote Paradise' };
    return { src: item.src, alt: item.alt };
  });
}

/** Indices provisoires — cocktails / bar */
export const COCKTAIL_CAROUSEL_PLACEHOLDERS: CarouselItem[] = pick([17, 18, 19, 20, 21, 22, 23, 24]);

/** Indices provisoires — tapas / restaurant */
export const TAPAS_CAROUSEL_PLACEHOLDERS: CarouselItem[] = pick([1, 2, 3, 4, 5, 6, 7, 8]);
