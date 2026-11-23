import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@src/pages/contact/contact-page";
import { contactSearchSchema } from "@shared/schemas/contact";
import { seo } from "@lib/seo";

export const Route = createFileRoute("/contacto")({
  // /contacto?assunto=proposta&servico=erp (vem do botão "Pedir proposta" e dos pedidos rápidos)
  validateSearch: contactSearchSchema,
  head: () =>
    seo({
      title: "Contacto",
      path: "/contacto",
      description: "Fala com a equipa da Linkora.",
    }),
  component: ContactPage,
});
