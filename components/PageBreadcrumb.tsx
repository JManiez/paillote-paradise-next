import Link from 'next/link';
import { Fragment } from 'react';

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageBreadcrumbProps = {
  items: BreadcrumbItem[];
};

/** Fil d'Ariane — à placer dans `.pp-page-hero__breadcrumb-wrap` sur les pages intérieures. */
export function PageBreadcrumb({ items }: PageBreadcrumbProps) {
  return (
    <nav aria-label="Fil d'Ariane">
      <ol className="pp-breadcrumb">
        {items.map((item, index) => (
          <Fragment key={`${item.label}-${index}`}>
            {index > 0 && (
              <li className="pp-breadcrumb__sep" aria-hidden="true">
                /
              </li>
            )}
            <li>
              {item.href ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <span aria-current="page">{item.label}</span>
              )}
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}
