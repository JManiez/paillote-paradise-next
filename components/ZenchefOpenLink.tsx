'use client';

import type { ComponentProps, MouseEvent } from 'react';
import { ZENCHEF_ROOM_TRANSAT } from '@/lib/zenchef';

type ZenchefOpenLinkProps = Omit<ComponentProps<'a'>, 'href'> & {
  /** ID salle Zenchef (ex. Transat) */
  roomId?: string;
  /** ID offre / expérience Zenchef */
  offerId?: string;
  /** Nombre de couverts présélectionné */
  pax?: number;
};

/** Ouvre le widget Zenchef (table, transat, bed…). */
export function ZenchefOpenLink({
  roomId,
  offerId,
  pax,
  onClick,
  children,
  ...props
}: ZenchefOpenLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    e.preventDefault();

    const params: { roomId?: string; offerId?: string; pax?: number } = {};
    const resolvedRoom = roomId ?? ZENCHEF_ROOM_TRANSAT;
    if (resolvedRoom) params.roomId = resolvedRoom;
    if (offerId) params.offerId = offerId;
    if (pax != null) params.pax = pax;

    const widget = window.ZenchefWidget;
    if (widget?.openWith && Object.keys(params).length > 0) {
      widget.openWith(params);
    } else if (widget?.open) {
      widget.open();
    } else {
      window.location.hash = 'zc-action-open';
    }
  };

  return (
    <a href="#zc-action-open" data-zc-action="open" onClick={handleClick} {...props}>
      {children}
    </a>
  );
}

/** Réservation transat / piscine via Zenchef (salle Transat si configurée). */
export function ZenchefTransatLink(props: Omit<ZenchefOpenLinkProps, 'roomId'>) {
  return <ZenchefOpenLink roomId={ZENCHEF_ROOM_TRANSAT || undefined} pax={2} {...props} />;
}
