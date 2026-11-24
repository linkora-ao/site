import { createFileRoute } from "@tanstack/react-router";
import { WhyUsPage } from "@src/components/pages/why-us-page";
import { seo } from "@lib/seo";

export const Route = createFileRoute("/porque-nos")({
  head: () =>
    seo({
      title: "Porquê nós",
      description:
        "Engenharia de software com conhecimento do mercado de Luanda: código internacional, pagamento em Kwanzas e propriedade total para o cliente.",
      path: "/porque-nos",
    }),
  component: WhyUsPage,
});
