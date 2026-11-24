/** Navegação do site: header, menu mobile e rodapé partilham estes dados. */

export type AppPath = "/" | "/servicos" | "/sobre" | "/porque-nos" | "/metodo" | "/contacto" | "/privacidade" | "/termos";

export type NavLinkItem = { label: string; to: AppPath };

/** Ordem do header (o botão "Pedir proposta" vem à parte, de data/site.ts). */
export const NAV: readonly NavLinkItem[] = [
  { label: "Serviços", to: "/servicos" },
  { label: "Sobre", to: "/sobre" },
  { label: "Porquê nós", to: "/porque-nos" },
  { label: "Método", to: "/metodo" },
  { label: "Contacto", to: "/contacto" },
];
