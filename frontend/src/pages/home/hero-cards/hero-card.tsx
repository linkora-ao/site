import type { ReactNode } from "react";
import { cn } from "@lib/cn";

/** Casca comum dos cartões da Hero: mesma altura, sombra e cantos em todos os slides. */
export function HeroCard({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-[12px] bg-card text-primary",
        "shadow-[0_40px_70px_-30px_rgba(0,0,0,.65),0_0_0_1px_rgba(255,255,255,.08)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Barra superior dos cartões: rótulo à esquerda, nota à direita. */
export function HeroCardBar({ label, note, noteClassName }: { label: string; note: string; noteClassName?: string }) {
  return (
    <div className="flex items-center justify-between gap-[12px] py-[12px] px-[18px] bg-background-alt border-b border-b-border">
      <span className="mono font-mono text-[11.5px] tracking-[.1em] uppercase text-muted-foreground">{label}</span>
      <span className={cn("mono font-mono text-[11.5px] text-muted-foreground", noteClassName)}>{note}</span>
    </div>
  );
}
