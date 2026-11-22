import { SITE } from "@data/site";

type SeoInput = { title?: string; description?: string };

/**
 * Metadados de página num só sítio. Usar em `head: () => seo({ ... })`.
 * Sem título: "Linkora Angola | <tagline>". Com título: "<título> | Linkora Angola".
 */
export function seo({ title, description }: SeoInput = {}) {
  const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} | ${SITE.tagline}`;
  const desc = description ?? SITE.tagline;

  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: desc },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_AO" },
      { property: "og:site_name", content: SITE.name },
    ],
  };
}
