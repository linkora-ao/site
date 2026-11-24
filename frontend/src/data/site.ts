/**
 * Configuração central do site. Tudo o que se repete em várias páginas
 * (nome, contactos, CTA principal) vive aqui. Texto de origem: Anexo A do brief.
 *
 * Valores com "TODO" ainda precisam de confirmação antes de publicar.
 */

import { env } from "@src/env";

export const SITE = {
  name: env.VITE_APP_NAME,
  shortName: "Linkora",
  tagline: "Ligamos o seu negócio ao futuro digital",
  url: (env.VITE_APP_URL ?? "https://linkora.ao").replace(/\/$/, ""),
  locale: "pt-AO",
  description:
    "Startup angolana de tecnologia, em Luanda. Plataformas web, aplicações móveis e sistemas inteligentes sob medida para empresas em Angola.",
  /** Imagem de partilha (1200x630) em public/. Tem de ser servida por URL absoluto. */
  ogImage: "/og-image.png",
  email: "contacto@linkora.ao",
  emailSales: "comercial@linkora.ao",
  mobile: "244949614129",
  phone: "+244 949 614 129",
  address: "Luanda, Angola",
  city: "Luanda, Angola",
  hours: "Segunda a Sexta, 08:30 – 17:30 (WAT)",
  response: "Habitualmente em menos de 24 horas úteis",
  legalName: "LINKORA Tecnologias",
  /** Rodapé (Anexo A.8). */
  about:
    "A LINKORA é uma startup de tecnologia angolana dedicada a ligar pessoas e negócios através de soluções digitais de alto valor agregado, inovação sustentável e engenharia de excelência.",
  madeIn: "Orgulhosamente concebido e desenvolvido em Luanda, Angola.",
} as const;

/** Dados que o Anexo A declara por confirmar: a interface mostra a etiqueta "A confirmar". */
export const TO_CONFIRM = { phone: true } as const;

/** CTA principal, reutilizado em todo o site (ver molecules/proposal-button). */
export const CTA = {
  label: "Pedir proposta",
  to: "/contacto",
} as const;

/** Três garantias da Hero (Anexo A.1). */
export const GUARANTEES = [
  "Engenharia de software moderna",
  "Infraestrutura cloud escalável",
  "Suporte presencial e remoto em Luanda",
] as const;

/** Rodapé: ligações legais. */
export const LEGAL_LINKS = [
  { label: "Termos de Uso", to: "/termos" },
  { label: "Política de Privacidade", to: "/privacidade" },
] as const;
