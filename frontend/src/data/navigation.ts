/**
 * Navegação do site: header, mega-menus, menu mobile e footer partilham estes dados.
 */

/** Rotas sem parâmetros (as de serviço usam /servicos/$slug e vêm de data/services.ts). */
export type AppPath =
  "/" | "/servicos" | "/produtos" | "/bove" | "/sobre" | "/contacto";

export type NavLinkItem = { label: string; to: AppPath; hash?: string };

export type MegaMenuId = "services" | "products";

export type NavEntry =
  | { kind: "mega"; menu: MegaMenuId; label: string; to: AppPath }
  | ({ kind: "link" } & NavLinkItem);

/** Ordem do header. */
export const NAV: readonly NavEntry[] = [
  { kind: "link", label: "Início", to: "/" },
  { kind: "mega", menu: "services", label: "Serviços", to: "/servicos" },
  { kind: "link", label: "Empresa", to: "/sobre" },
  { kind: "link", label: "Compromissos", to: "/", hash: "compromissos" },
  { kind: "link", label: "Processo", to: "/", hash: "processo" },
  { kind: "mega", menu: "products", label: "Produtos", to: "/produtos" },
  { kind: "link", label: "Contacto", to: "/contacto" },
];

/** Links simples do header (usados no menu mobile). */
export const NAV_LINKS = NAV.filter(
  (entry): entry is { kind: "link" } & NavLinkItem => entry.kind === "link",
);

type MegaContent = {
  eyebrow: string;
  /** Uma linha por posição (quebra de linha no título). */
  title: readonly string[];
  text: string;
  cta: { label: string; to: AppPath };
};

/** Cartão navy à esquerda de cada mega-menu. */
export const MEGA_INTRO: Record<MegaMenuId, MegaContent> = {
  services: {
    eyebrow: "Serviços",
    title: ["Seis serviços,", "uma equipa em Luanda."],
    text: "Do site institucional ao ERP completo, com código teu e suporte local.",
    cta: { label: "Ver todos os serviços", to: "/servicos" },
  },
  products: {
    eyebrow: "Produtos",
    title: ["Software nosso,", "mantido por nós."],
    text: "Produtos próprios da Linkora, desenhados para o contexto angolano.",
    cta: { label: "Ver todos os produtos", to: "/produtos" },
  },
};

/** Faixa por baixo de cada mega-menu. */
export const MEGA_BANNER = {
  services: {
    tag: "Produto próprio",
    title: "BOVE: plataforma para centros de formação",
    badge: "Piloto aberto",
    cta: "Conhecer BOVE",
    to: "/bove",
  },
  products: {
    tag: null,
    title: "Piloto BOVE: 2 vagas para centros de formação",
    badge: null,
    cta: "Candidatar-me",
    to: "/bove",
  },
} as const;

/** Coluna "Produtos" do footer. */
export const FOOTER_PRODUCT_LINKS: readonly NavLinkItem[] = [
  { label: "BOVE", to: "/bove" },
  { label: "Catálogo", to: "/produtos" },
  { label: "Piloto BOVE", to: "/bove" },
];

/** Coluna "Empresa" do footer. */
export const COMPANY_LINKS: readonly NavLinkItem[] = [
  { label: "Quem somos", to: "/sobre" },
  { label: "Compromissos", to: "/", hash: "compromissos" },
  { label: "Como trabalhamos", to: "/", hash: "processo" },
  { label: "Contacto", to: "/contacto" },
];
