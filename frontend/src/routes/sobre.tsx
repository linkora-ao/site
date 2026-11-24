import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@src/components/pages/about-page";
import { seo } from "@lib/seo";

export const Route = createFileRoute("/sobre")({
  head: () =>
    seo({
      title: "Sobre",
      description:
        "A LINKORA nasceu em Luanda para pôr a tecnologia ao serviço das empresas angolanas: missão, visão, propósito e valores.",
      path: "/sobre",
    }),
  component: AboutPage,
});
