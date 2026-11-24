import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import type { AppPath } from "@data/navigation";
import { cn } from "@lib/cn";

type NavLinkProps = {
  to: AppPath;
  children: ReactNode;
  className?: string;
};

/** Link do header (sublinhado vermelho no hover e na página atual). */
export function NavLink({ to, children, className }: NavLinkProps) {
  return (
    <Link to={to} className={cn("nav-link focus-ring", className)}>
      {children}
    </Link>
  );
}
