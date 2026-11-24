import type { ReactNode } from "react";
import { cn } from "@lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Sobre fundos pretos. */
  onPrimary?: boolean;
  /** h1 em vez de h2 (título principal das páginas interiores). */
  as?: "h1" | "h2";
  className?: string;
};

/** Etiqueta + título + descrição. Cabeçalho padrão de todas as secções. */
export function SectionHeading({ eyebrow, title, description, onPrimary, as: Tag = "h2", className }: SectionHeadingProps) {
  return (
    <header className={cn("grid gap-5", className)}>
      {eyebrow && (
        <p className={cn("eyebrow", onPrimary ? "text-muted-on-primary" : "text-muted-foreground")}>{eyebrow}</p>
      )}
      <Tag className={cn("display max-w-[22ch]")}>{title}</Tag>
      {description && (
        <p
          className={cn(
            "text-pretty-p max-w-[56ch] text-base leading-[1.65] sm:text-lg",
            onPrimary ? "text-muted-on-primary" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
