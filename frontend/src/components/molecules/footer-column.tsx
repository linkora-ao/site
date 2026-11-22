import type { ReactNode } from "react";

/** Coluna do footer: título amber e lista. */
export function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-sm font-bold text-accent">{title}</p>
      <ul className="mt-[18px] grid gap-3">{children}</ul>
    </div>
  );
}

/** Classe dos links do footer (cream, amber no hover). */
export const footerLinkClass = "focus-ring text-[15.5px] text-primary-foreground transition-colors hover:text-accent";
