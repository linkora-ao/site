import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { buttonVariants, type ButtonVariants } from "@components/atoms/button";
import { cn } from "@lib/cn";

type ButtonLinkProps = ButtonVariants & {
  /** Rota do site, por exemplo "/servicos" ou "/servicos/$slug" (com params). */
  to: string;
  params?: { slug: string };
  hash?: string;
  className?: string;
  children: ReactNode;
};

/** Link com aspeto de botão. Para o CTA "Pedir proposta" usar ProposalButton. */
export function ButtonLink({
  to,
  params,
  hash,
  variant,
  size,
  block,
  className,
  children,
}: ButtonLinkProps) {
  return (
    <Link
      to={to as never}
      params={params as never}
      hash={hash}
      className={cn(buttonVariants({ variant, size, block }), className)}
    >
      {children}
    </Link>
  );
}
