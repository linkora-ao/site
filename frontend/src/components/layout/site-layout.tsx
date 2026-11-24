import type { ReactNode } from "react";
import { Footer } from "@components/layout/footer";
import { Header } from "@components/layout/header";

/** Moldura de todas as páginas: link de acessibilidade, header, conteúdo e footer. */
export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-accent-foreground"
      >
        Saltar para o conteúdo
      </a>
      <Header />
      <main id="conteudo">{children}</main>
      <Footer />
    </>
  );
}
