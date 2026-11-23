import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@src/pages/home/home-page";
import { SITE } from "@data/site";
import { seo } from "@lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seo({ title: SITE.tagline, description: SITE.description, path: "/" }),
  component: HomePage,
});
