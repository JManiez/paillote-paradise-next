/**
 * Numéro public E.164 (ex. +33612345678).
 * Sur Vercel : variable `NEXT_PUBLIC_PP_PHONE`.
 */
export const PP_PHONE_E164 =
  (typeof process !== 'undefined' &&
    process.env.NEXT_PUBLIC_PP_PHONE &&
    process.env.NEXT_PUBLIC_PP_PHONE.trim()) ||
  '+33684757625';

function formatFrMobileDisplay(e164: string): string {
  const m = e164.match(/^\+33(\d{9})$/);
  if (!m) return e164;
  const n = m[1];
  return `0${n.slice(0, 1)} ${n.slice(1, 3)} ${n.slice(3, 5)} ${n.slice(5, 7)} ${n.slice(7, 9)}`.trim();
}

/** Libellé affiché. Variable optionnelle `NEXT_PUBLIC_PP_PHONE_DISPLAY`. */
export const PP_PHONE_DISPLAY =
  (typeof process !== 'undefined' &&
    process.env.NEXT_PUBLIC_PP_PHONE_DISPLAY &&
    process.env.NEXT_PUBLIC_PP_PHONE_DISPLAY.trim()) ||
  formatFrMobileDisplay(PP_PHONE_E164);
