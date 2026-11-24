import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@src/components/pages/contact-page";
import { contactSearchSchema } from "@shared/schemas/contact";
import { seo } from "@lib/seo";

export const Route = createFileRoute("/contacto")({
  // /contacto?servico=medida (vem dos botões dos serviços)
  validateSearch: contactSearchSchema,
  head: () =>
    seo({
      title: "Contacto",
      description:
        "Fale com a equipa da LINKORA. Resposta habitual em menos de 24 horas úteis.",
      path: "/contacto",
    }),
  component: ContactPage,
});
