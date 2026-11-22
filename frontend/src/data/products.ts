import type { AppPath } from "@data/navigation";

/**
 * Produtos próprios da Linkora. Para acrescentar um produto: nova entrada aqui
 * (aparece no mega-menu e no footer). O espaço "Em preparação" é o próximo produto.
 */
export const PRODUCTS = [
  {
    slug: "bove",
    number: "01",
    name: "BOVE",
    status: "Disponível em piloto",
    summary: "Plataforma multitenant para centros de formação e instituições de ensino.",
    to: "/bove",
    cta: "Conhecer BOVE",
  },
] as const satisfies readonly {
  slug: string;
  number: string;
  name: string;
  status: string;
  summary: string;
  to: AppPath;
  cta: string;
}[];

export type Product = (typeof PRODUCTS)[number];

export const UPCOMING_PRODUCT = {
  number: "02",
  title: "Em preparação",
  summary: "Espaço reservado para o próximo produto da Linkora.",
} as const;
