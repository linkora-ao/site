import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@src/components/pages/legal-page";
import { seo } from "@lib/seo";

export const Route = createFileRoute("/privacidade")({
  head: () => seo({ title: "Política de Privacidade", path: "/privacidade" }),
  component: () => <LegalPage title="Política de Privacidade" />,
});
