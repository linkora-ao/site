import type { ReactNode } from "react";
import { Section } from "@components/layout/section";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Botões ou conteúdo extra por baixo do texto. */
  children?: ReactNode;
};

/** Abertura de página (h1). Mesma estrutura em todas as páginas. */
export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <Section tone="alt">
      {eyebrow && <p className="eyebrow mb-5 text-accent-dark">{eyebrow}</p>}
      <h1 className="display-xl max-w-4xl text-4xl sm:text-5xl lg:text-6xl">{title}</h1>
      {description && (
        <p className="text-pretty-p mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
      {children && <div className="mt-10 flex flex-wrap gap-3">{children}</div>}
    </Section>
  );
}
