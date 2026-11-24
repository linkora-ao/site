import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@src/components/pages/home-page";
import { SITE } from "@data/site";
import { seo } from "@lib/seo";

export const Route = createFileRoute("/")({
  head: () => seo({ description: SITE.description, path: "/" }),
  component: HomePage,
});
