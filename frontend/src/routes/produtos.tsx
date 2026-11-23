import { createFileRoute } from "@tanstack/react-router";
import { ProductsPage } from "@src/pages/products/products-page";
import { seo } from "@lib/seo";

export const Route = createFileRoute("/produtos")({
  head: () =>
    seo({
      title: "Produtos",
      path: "/produtos",
      description: "Plataformas próprias da Linkora.",
    }),
  component: ProductsPage,
});
