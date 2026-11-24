import { cn } from "@lib/cn";

/**
 * Etiqueta "A confirmar" para dados que o Anexo A declara sem comprovação.
 * Visível de propósito: sai quando o dado for confirmado.
 */
export function ConfirmChip({ onPrimary, className }: { onPrimary?: boolean; className?: string }) {
  return (
    <span
      className={cn(
        "inline-block border px-2 py-[3px] align-middle text-[11px] leading-none font-medium tracking-[0.08em] uppercase",
        onPrimary ? "border-muted-on-primary text-muted-on-primary" : "border-muted-foreground text-muted-foreground",
        className,
      )}
    >
      A confirmar
    </span>
  );
}
