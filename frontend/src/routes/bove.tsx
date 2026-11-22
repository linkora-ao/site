import { createFileRoute } from "@tanstack/react-router";
import { BovePage } from "@src/pages/bove/bove-page";
import { seo } from "@lib/seo";

export const Route = createFileRoute("/bove")({
  head: () =>
    seo({
      title: "BOVE",
      description: "Plataforma de gestão para centros de formação e instituições de ensino.",
    }),
  component: BovePage,
});
