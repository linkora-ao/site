/**
 * Configuração central do site. Tudo o que se repete em várias páginas
 * (nome, contactos, navegação, CTA principal, redes) vive aqui.
 *
 * TODO: preencher os valores marcados com "TODO" antes de publicar.
 */

import { env } from "@src/env";

export const SITE = {
  name: env.VITE_APP_NAME,
  shortName: "Linkora",
  tagline:
    env.VITE_APP_DESCRIPTION ?? "Software à medida para empresas angolanas.",
  url: (env.VITE_APP_URL ?? "https://www.linkora.ao").replace(/\/$/, ""),
  locale: "pt-AO",
  email: "geral@linkora.ao",
  phone: "+244 949 614 129",
  whatsapp: "244949614129",
  get whatsappUrl() {
    return `https://wa.me/${this.whatsapp}`;
  },
  address: "Luanda, Angola",
  country: "Angola",
  description:
    "Empresa angolana de tecnologia. Plataformas, software à medida e automações para PMEs.",
  ogImage: "/og-image.png",
  hours: "Seg a Sex, 08h às 17h",
  legal: {
    name: "Linkora Angola - Soluções Digitais, Lda.",
    nif: "[NIF]", // TODO
    address: "[Morada]", // TODO
  },
} as const;

/** CTA principal, reutilizado em todo o site (ver molecules/ProposalButton). */
export const CTA = {
  label: "Pedir proposta",
  to: "/contacto",
  search: { assunto: "proposta" },
} as const;

/** CTA secundário (botão de contorno ao lado do principal). */
export const CTA_SECONDARY = {
  label: "Ver serviços",
  to: "/servicos",
} as const;

export type SocialId =
  "linkedin" | "facebook" | "instagram" | "whatsapp" | "github";

export const SOCIALS: readonly { id: SocialId; label: string; href: string }[] =
  [
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://linkedin.com/company/linkora-ao",
    },
    {
      id: "facebook",
      label: "Facebook",
      href: "https://facebook.com/linkora-ao",
    },
    {
      id: "instagram",
      label: "Instagram",
      href: "https://instagram.com/linkora-ao",
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      href: SITE.whatsappUrl,
    },
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/linkora-ao",
    },
  ];
