import type { ReactNode } from "react";
import { cn } from "@lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Sobre fundos navy. */
  onPrimary?: boolean;
  className?: string;
};

/** Etiqueta + título + descrição. Cabeçalho padrão de todas as secções. */
export function SectionHeading({ eyebrow, title, description, onPrimary, className }: SectionHeadingProps) {
  return (
    <header className={cn("max-w-2xl", className)}>
      {eyebrow && <p className={cn("eyebrow mb-4", onPrimary ? "text-accent" : "text-accent-dark")}>{eyebrow}</p>}
      <h2 className="display text-3xl sm:text-4xl lg:text-5xl">{title}</h2>
      {description && (
        <p
          className={cn(
            "text-pretty-p mt-5 text-base leading-relaxed sm:text-lg",
            onPrimary ? "text-muted-on-primary" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
