import { Link } from "@tanstack/react-router";
import { buttonVariants, type ButtonVariants } from "@components/atoms/button";
import { cn } from "@lib/cn";
import { CTA } from "@data/site";

type ProposalButtonProps = Pick<ButtonVariants, "variant" | "size" | "block"> & {
  className?: string;
};

/**
 * O botão "Pedir proposta". Texto e destino vêm de data/site.ts (CTA),
 * por isso mudar um deles muda o site inteiro. Usar em todas as páginas.
 */
export function ProposalButton({ variant, size, block, className }: ProposalButtonProps) {
  return (
    <Link to={CTA.to} className={cn(buttonVariants({ variant, size, block }), className)}>
      {CTA.label}
    </Link>
  );
}
