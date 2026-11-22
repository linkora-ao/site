import { SERVICES, SERVICE_SLUGS, type ServiceSlug } from "@data/services";

/**
 * Opções de "Tipo de projecto" no pedido rápido da Home.
 * Os serviços vêm de SERVICES; "bove" é o produto (leva ao assunto "demo").
 */
export type QuickProject = ServiceSlug | "bove";

export const QUICK_PROJECTS: [QuickProject, ...QuickProject[]] = ["bove", ...SERVICE_SLUGS];

export const QUICK_PROJECT_OPTIONS: { value: QuickProject; label: string }[] = [
  ...SERVICES.map((s) => ({ value: s.slug, label: s.title })),
  { value: "bove", label: "BOVE · centro de formação" },
];
