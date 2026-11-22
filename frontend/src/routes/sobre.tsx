import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@src/pages/about/about-page";
import { seo } from "@lib/seo";

export const Route = createFileRoute("/sobre")({
  head: () => seo({ title: "Sobre", description: "Quem é a Linkora e como trabalha." }),
  component: AboutPage,
});
