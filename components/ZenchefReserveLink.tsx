import type { ComponentProps } from 'react';

type ZenchefReserveLinkProps = Omit<ComponentProps<'a'>, 'href'>;

/** Lien/bouton style site qui ouvre le module de réservation Zenchef. */
export function ZenchefReserveLink({ children, ...props }: ZenchefReserveLinkProps) {
  return (
    <a href="#zc-action-open" data-zc-action="open" {...props}>
      {children}
    </a>
  );
}
