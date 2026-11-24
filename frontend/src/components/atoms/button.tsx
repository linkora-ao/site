import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@lib/cn";

/**
 * Estilo único de botão do site. Também é usado em links:
 *   <Link className={buttonVariants({ variant: "primary" })} />
 * Cantos rectos, como o símbolo da marca.
 */
export const buttonVariants = cva(
  [
    "focus-ring inline-flex h-[52px] cursor-pointer items-center justify-center gap-2",
    "px-7 text-base font-semibold whitespace-nowrap",
    "transition-colors duration-200",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        /** Vermelho da marca. Um por ecrã: a acção principal. */
        primary: "bg-accent text-accent-foreground hover:bg-accent-strong",
        /** Preto, sobre fundos claros. */
        dark: "bg-primary text-primary-foreground hover:bg-muted-foreground",
        /** Branco, sobre fundos pretos. */
        light: "bg-primary-foreground text-primary hover:bg-muted-on-primary",
      },
      size: {
        md: "",
        /** Botão do header: compacto no telemóvel, 44px no desktop. */
        nav: "h-10 px-4 text-sm nav:h-11 nav:px-[22px] nav:text-[15px]",
      },
      block: {
        true: "w-full",
      },
      /** Texto longo: deixa quebrar em duas linhas em vez de sair do ecrã. */
      wrap: {
        true: "h-auto min-h-[52px] whitespace-normal py-3 text-center",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants;

export function Button({ variant, size, block, wrap, className, type = "button", ...rest }: ButtonProps) {
  return <button type={type} className={cn(buttonVariants({ variant, size, block, wrap }), className)} {...rest} />;
}
