import { SITE } from "@data/site";

type SeoInput = {
  title?: string;
  description?: string;
  /** Caminho da página (ex.: "/bove"), para og:url e canonical. */
  path?: string;
  /** Imagem de partilha própria da página; por omissão SITE.ogImage. */
  image?: string;
};

/**
 * Metadados de página num só sítio. Usar em `head: () => seo({ ... })`.
 * Sem título: "Linkora Angola | <tagline>". Com título: "<título> | Linkora Angola".
 * Inclui Open Graph e Twitter Card (pré-visualização com imagem no WhatsApp, LinkedIn, etc.).
 */
export function seo({
  title,
  path = "",
  description,
  image = SITE.ogImage,
}: SeoInput = {}) {
  const fullTitle = title
    ? `${title} | ${SITE.name}`
    : `${SITE.name} | ${SITE.tagline}`;
  const url = `${SITE.url}${path}`;
  const desc = description ?? SITE.tagline;
  const imageUrl = image.startsWith("http") ? image : `${SITE.url}${image}`;

  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: desc },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_AO" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:url", content: url },
      { property: "og:image", content: imageUrl },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: `${SITE.name}: ${SITE.tagline}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: desc },
      { name: "twitter:image", content: imageUrl },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
