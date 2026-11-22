import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Icon } from "@components/atoms/icon";
import type { AppPath } from "@data/navigation";
import { cn } from "@lib/cn";

type ArrowLinkProps = {
  to: AppPath;
  children: ReactNode;
  className?: string;
};

/** Link de texto com sublinhado amber e seta ("Ver todos os serviços →"). */
export function ArrowLink({ to, children, className }: ArrowLinkProps) {
  return (
    <Link to={to} className={cn("focus-ring link-underline group/arrow inline-flex items-center gap-1.5", className)}>
      {children}
      <Icon name="arrow-right" size={16} className="transition-transform group-hover/arrow:translate-x-1" />
    </Link>
  );
}
