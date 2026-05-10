import type { ReactNode } from 'react';
import { JsonLd } from './JsonLd';

type PageShellProps = {
  jsonLd?: unknown[];
  children: ReactNode;
};

export function PageShell({ jsonLd, children }: PageShellProps) {
  return (
    <>
      {jsonLd?.map((data, i) => (
        <JsonLd key={i} data={data as Record<string, unknown>} />
      ))}
      {children}
    </>
  );
}
