import { JsonLd } from './JsonLd';

type PageContentProps = {
  htmlContent: string;
  jsonLd?: unknown[];
};

export function PageContent({ htmlContent, jsonLd }: PageContentProps) {
  return (
    <>
      {jsonLd?.map((data, i) => (
        <JsonLd key={i} data={data as Record<string, unknown>} />
      ))}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </>
  );
}
