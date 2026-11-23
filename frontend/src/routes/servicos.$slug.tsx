import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServicePage } from "@src/pages/service/service-page";
import { getService } from "@data/services";
import { seo } from "@lib/seo";

export const Route = createFileRoute("/servicos/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData, params }) =>
    seo({
      title: loaderData?.title,
      description: loaderData?.summary,
      path: `/servicos/${params.slug}`,
    }),
  component: ServiceRoute,
});

function ServiceRoute() {
  return <ServicePage service={Route.useLoaderData()} />;
}
