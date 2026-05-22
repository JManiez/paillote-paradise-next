'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { PARADISE_GALLERY } from '@/lib/paradiseGallery';

const BATCH_SIZE = 24;

export function GalleryGrid() {
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const items = useMemo(() => PARADISE_GALLERY.slice(0, visibleCount), [visibleCount]);
  const hasMore = visibleCount < PARADISE_GALLERY.length;

  return (
    <>
      <div className="pp-gallery-grid" aria-label="Galerie photos de la Paillote Paradise">
        {items.map((item, index) => (
          <div className="pp-gallery-item" key={item.src}>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="pp-gallery-item__img"
              sizes="(max-width: 768px) 50vw, 33vw"
              priority={index < 6}
            />
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="pp-gallery-load-more">
          <button
            type="button"
            className="pp-btn pp-btn--ocean pp-btn--lg"
            onClick={() => setVisibleCount((n) => Math.min(n + BATCH_SIZE, PARADISE_GALLERY.length))}
          >
            Afficher plus de photos ({items.length} / {PARADISE_GALLERY.length})
          </button>
        </div>
      )}
    </>
  );
}
