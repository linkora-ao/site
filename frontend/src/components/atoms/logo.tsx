import { SITE } from "@data/site";
import { cn } from "@lib/cn";

/**
 * Marca da Linkora. Por agora é o nome em texto (Poppins 600).
 * TODO: substituir pelo SVG oficial do Josiel (wordmark + símbolo) só neste ficheiro.
 * Sem link: quem usa decide para onde vai.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("text-[28px] leading-none font-semibold tracking-[-0.04em] lowercase", className)}>
      {SITE.shortName}
    </span>
  );
}
