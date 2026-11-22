import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@src/pages/services/services-page";
import { seo } from "@lib/seo";

export const Route = createFileRoute("/servicos/")({
  head: () => seo({ title: "Serviços", description: "ERP, CRM, websites, automações e software à medida." }),
  component: ServicesPage,
});
