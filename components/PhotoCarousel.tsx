'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { CarouselItem } from '@/lib/carouselPlaceholders';

type PhotoCarouselProps = {
  items: CarouselItem[];
  ariaLabel: string;
  id?: string;
};

export function PhotoCarousel({ items, ariaLabel, id }: PhotoCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track || items.length === 0) return;
    const clamped = Math.max(0, Math.min(index, items.length - 1));
    const slide = track.children[clamped] as HTMLElement | undefined;
    if (slide) {
      slide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      setActiveIndex(clamped);
    }
  }, [items.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const slides = Array.from(track.children) as HTMLElement[];
      if (slides.length === 0) return;
      const center = track.scrollLeft + track.clientWidth / 2;
      let closest = 0;
      let minDist = Infinity;
      slides.forEach((slide, i) => {
        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
        const dist = Math.abs(center - slideCenter);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setActiveIndex(closest);
    };

    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, [items.length]);

  if (items.length === 0) return null;

  const carouselId = id ?? 'pp-carousel';

  return (
    <div className="pp-carousel" role="region" aria-roledescription="carousel" aria-label={ariaLabel}>
      <button
        type="button"
        className="pp-carousel__nav pp-carousel__nav--prev"
        aria-label="Photo précédente"
        onClick={() => scrollToIndex(activeIndex - 1)}
        disabled={activeIndex === 0}
      >
        ‹
      </button>

      <div className="pp-carousel__track" ref={trackRef} id={carouselId}>
        {items.map((item, index) => (
          <figure className="pp-carousel__slide" key={`${item.src}-${index}`}>
            <Image
              src={item.src}
              alt={item.alt}
              className="pp-carousel__img"
              width={640}
              height={480}
              sizes="(max-width: 768px) 85vw, 22rem"
              priority={index === 0}
            />
            {item.caption ? (
              <figcaption className="pp-carousel__caption">{item.caption}</figcaption>
            ) : null}
          </figure>
        ))}
      </div>

      <button
        type="button"
        className="pp-carousel__nav pp-carousel__nav--next"
        aria-label="Photo suivante"
        onClick={() => scrollToIndex(activeIndex + 1)}
        disabled={activeIndex === items.length - 1}
      >
        ›
      </button>

      <div className="pp-carousel__dots" role="tablist" aria-label="Choisir une photo">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            className={'pp-carousel__dot' + (index === activeIndex ? ' is-active' : '')}
            aria-selected={index === activeIndex}
            aria-label={`Photo ${index + 1} sur ${items.length}`}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
