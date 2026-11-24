import { createFileRoute } from "@tanstack/react-router";
import { MethodPage } from "@src/components/pages/method-page";
import { seo } from "@lib/seo";

export const Route = createFileRoute("/metodo")({
  head: () =>
    seo({
      title: "Método",
      description:
        "Como a LINKORA transforma uma ideia em solução: diagnóstico, proposta, desenvolvimento ágil e lançamento, em quatro fases validadas consigo.",
      path: "/metodo",
    }),
  component: MethodPage,
});
