import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import type { AppPath } from "@data/navigation";
import { cn } from "@lib/cn";

type NavLinkProps = {
  to: AppPath;
  hash?: string;
  children: ReactNode;
  className?: string;
};

/** Link do header (sublinhado amber no hover e na página atual). */
export function NavLink({ to, hash, children, className }: NavLinkProps) {
  return (
    <Link
      to={to}
      hash={hash}
      activeOptions={{ exact: to === "/", includeHash: true }}
      className={cn("nav-link focus-ring", className)}
    >
      {children}
    </Link>
  );
}
