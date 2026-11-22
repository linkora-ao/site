import type { CSSProperties } from "react";
import { Link } from "@tanstack/react-router";
import { Icon } from "@components/atoms/icon";
import type { Service } from "@data/services";
import { cn } from "@lib/cn";

type ServiceCardProps = {
  service: Service;
  /** Aparece ao fazer scroll (usar em /servicos). */
  reveal?: boolean;
  /** Posição na grelha, para escalonar a entrada por coluna. */
  index?: number;
};

/** Cartão de serviço, usado na home e em /servicos. */
export function ServiceCard({ service, reveal, index = 0 }: ServiceCardProps) {
  return (
    <Link
      to="/servicos/$slug"
      params={{ slug: service.slug }}
      style={reveal ? ({ "--reveal-i": index % 3 } as CSSProperties) : undefined}
      className={cn(
        "focus-ring group flex flex-col rounded-md border border-border bg-card p-6 shadow-card transition-colors hover:border-accent-dark",
        reveal && "reveal",
      )}
    >
      <span className="flex-center size-11 rounded-sm bg-primary text-accent">
        <Icon name={service.icon} />
      </span>
      <h3 className="display mt-5 text-xl">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-dark">
        Ver serviço
        <Icon name="arrow-right" size={16} className="transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
