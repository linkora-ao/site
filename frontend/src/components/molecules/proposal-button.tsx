import { Link } from "@tanstack/react-router";
import { Icon } from "@components/atoms/icon";
import { buttonVariants, type ButtonVariants } from "@components/atoms/button";
import { cn } from "@lib/cn";
import { CTA } from "@data/site";

type ProposalButtonProps = Pick<ButtonVariants, "variant" | "size" | "block"> & {
  className?: string;
  /** Mostra a seta no fim. */
  arrow?: boolean;
};

/**
 * O botão "Pedir proposta". Texto e destino vêm de data/site.ts (CTA),
 * por isso mudar um deles muda o site inteiro. Usar em todas as páginas.
 */
export function ProposalButton({ variant, size, block, className, arrow = true }: ProposalButtonProps) {
  return (
    <Link to={CTA.to} search={CTA.search} className={cn(buttonVariants({ variant, size, block }), className)}>
      {CTA.label}
      {arrow && <Icon name="arrow-right" size={18} />}
    </Link>
  );
}
