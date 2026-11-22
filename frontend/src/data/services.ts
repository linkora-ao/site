import type { IconName } from "@components/atoms/icon";

/**
 * Catálogo de serviços. Alimenta /servicos, o mega-menu, o menu mobile, o footer,
 * as páginas /servicos/$slug e as opções do formulário de contacto (SERVICE_SLUGS).
 * Títulos e resumos vêm do desenho.
 *
 * TODO: acrescentar aqui os textos finais de cada página de serviço
 * (entregáveis, fases, caso de estudo, perguntas frequentes).
 */
export const SERVICES = [
  {
    slug: "web",
    title: "Plataformas web",
    summary: "Aplicações seguras, do painel ao portal do cliente.",
    icon: "app-window",
  },
  {
    slug: "medida",
    title: "Software à medida",
    summary: "Sistemas desenhados em torno dos teus processos.",
    icon: "code-xml",
  },
  {
    slug: "erp",
    title: "ERP e gestão",
    summary: "Stock, facturação e operações num só sistema.",
    icon: "blocks",
  },
  {
    slug: "crm",
    title: "CRM e vendas",
    summary: "Clientes e oportunidades com visibilidade.",
    icon: "funnel",
  },
  {
    slug: "automacoes",
    title: "Automações",
    summary: "Integrações que eliminam tarefas repetitivas.",
    icon: "zap",
  },
  {
    slug: "websites",
    title: "Websites institucionais",
    summary: "Presença digital clara, que gera contactos.",
    icon: "globe",
  },
] as const satisfies readonly {
  slug: string;
  title: string;
  summary: string;
  icon: IconName;
}[];

export type Service = (typeof SERVICES)[number];
export type ServiceSlug = Service["slug"];

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug) as [ServiceSlug, ...ServiceSlug[]];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
