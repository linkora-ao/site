import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@src/components/pages/legal-page";
import { seo } from "@lib/seo";

export const Route = createFileRoute("/termos")({
  head: () => seo({ title: "Termos de Uso", path: "/termos" }),
  component: () => <LegalPage title="Termos de Uso" />,
});
