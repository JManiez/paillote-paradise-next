import type { HTMLAttributes } from 'react';

/** Attributs HTML (parser) → props React pour <section> */
export function sectionAttrsToProps(attrs: Record<string, string>): HTMLAttributes<HTMLElement> {
  const props: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') props.className = v;
    else if (k === 'for') props.htmlFor = v;
    else props[k] = v;
  }
  return props as HTMLAttributes<HTMLElement>;
}
