/**
 * Os seis serviços (Anexo A.4). Alimentam /servicos, a Home, o rodapé
 * e as opções do formulário de contacto (SERVICE_SLUGS).
 */
export const SERVICES = [
  {
    slug: "websites",
    title: "Websites e Aplicações Web",
    description:
      "Portais corporativos, páginas institucionais de alto impacto e aplicações web rápidas, responsivas e optimizadas para conversão.",
    highlights: [
      "Design responsivo para telemóveis, tablets e computadores",
      "Optimização de SEO para Google e motores de busca",
    ],
  },
  {
    slug: "plataformas",
    title: "Plataformas Digitais & Portais",
    description:
      "Sistemas empresariais em nuvem, portais de clientes, intranets e ecossistemas digitais para centralizar operações.",
    highlights: [
      "Autenticação segura e controlo de acessos por função",
      "Dashboards analíticos com métricas em tempo real",
    ],
  },
  {
    slug: "consultoria",
    title: "Consultoria Tecnológica",
    description:
      "Orientação estratégica para diagnóstico de sistemas, selecção de tecnologias e plano de aceleração digital corporativa.",
    highlights: [
      "Auditoria de segurança, código e arquitectura de TI",
      "Mapeamento de maturidade digital e plano director",
    ],
  },
  {
    slug: "medida",
    title: "Soluções de Software à Medida",
    description:
      "Desenvolvimento personalizado de raiz para desafios específicos do seu modelo de negócio que ferramentas prontas não resolvem.",
    highlights: [
      "Integração com sistemas legados e ERPs existentes",
      "APIs RESTful e GraphQL robustas e documentadas",
    ],
  },
  {
    slug: "automacao",
    title: "Automação de Processos (BPA)",
    description:
      "Eliminação de tarefas manuais repetitivas, integração entre sistemas e fluxos de dados automáticos sem fricção.",
    highlights: [
      "Integração automatizada de WhatsApp e notificações",
      "Sincronização bidireccional de bases de dados",
    ],
  },
  {
    slug: "suporte",
    title: "Suporte e Manutenção Contínua",
    description:
      "Acompanhamento proactivo, actualizações de segurança, backups regulares e suporte técnico com SLA rigoroso.",
    highlights: [
      "Monitorização proactiva de disponibilidade 24/7",
      "Actualizações preventivas e correcção de vulnerabilidades",
    ],
  },
] as const;

export type Service = (typeof SERVICES)[number];
export type ServiceSlug = Service["slug"];

export const SERVICE_SLUGS = SERVICES.map((service) => service.slug) as [ServiceSlug, ...ServiceSlug[]];

/** Chamada final do bloco de serviços (Anexo A.4). */
export const CUSTOM_CTA = {
  text: "Tem um desafio tecnológico específico ou inovador? Criamos soluções desenhadas de raiz para a sua realidade operacional.",
  button: "Falar sobre projecto à medida",
  service: "medida",
} as const satisfies { text: string; button: string; service: ServiceSlug };
