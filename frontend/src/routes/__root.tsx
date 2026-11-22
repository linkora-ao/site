import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { NotFound } from "@components/layout/not-found";
import { SiteLayout } from "@components/layout/site-layout";
import { SITE } from "@data/site";
import TanStackQueryDevtools from "@integrations/tanstack-query/devtools";
import { seo } from "@lib/seo";
import appCss from "@src/styles.css?url";

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, ...seo().meta],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  notFoundComponent: NotFound,
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang={SITE.locale}>
      <head>
        <HeadContent />
      </head>
      <body>
        <SiteLayout>{children}</SiteLayout>
        <TanStackDevtools
          config={{ position: "bottom-right" }}
          plugins={[{ name: "Tanstack Router", render: <TanStackRouterDevtoolsPanel /> }, TanStackQueryDevtools]}
        />
        <Scripts />
      </body>
    </html>
  );
}
