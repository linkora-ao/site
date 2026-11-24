import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@src/components/pages/services-page";
import { seo } from "@lib/seo";

export const Route = createFileRoute("/servicos")({
  head: () =>
    seo({
      title: "Serviços",
      description:
        "Websites, plataformas digitais, consultoria, software à medida, automação de processos e suporte contínuo, em Luanda.",
      path: "/servicos",
    }),
  component: ServicesPage,
});
