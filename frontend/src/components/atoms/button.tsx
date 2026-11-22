import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@lib/cn";

/**
 * Estilo único de botão do site. Também é usado em links:
 *   <Link className={buttonVariants({ variant: "primary" })} />
 */
export const buttonVariants = cva(
  [
    "focus-ring inline-flex h-[50px] cursor-pointer items-center justify-center gap-2",
    "rounded-sm px-6 text-[15px] font-semibold whitespace-nowrap",
    "transition-[box-shadow,background-color,border-color,color] duration-150",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        /** Acento: amber com aresta inferior. Uso principal (CTA). */
        primary:
          "bg-accent text-accent-foreground shadow-edge hover:bg-accent-light hover:shadow-edge-hover",
        /** Navy sólido, sobre fundos claros. */
        navy: "bg-primary text-primary-foreground hover:bg-primary-soft hover:shadow-[inset_0_-3px_0_var(--accent)]",
        /** Contorno, sobre fundos claros. */
        outline:
          "border border-border bg-transparent text-foreground hover:border-foreground",
        /** Contorno, sobre fundos navy. */
        "outline-on-primary":
          "border border-border-on-primary bg-transparent text-primary-foreground hover:border-accent hover:text-accent",
      },
      size: {
        md: "",
        sm: "h-10 px-4 text-sm",
        lg: "h-14 px-8 text-base",
        /** Botão do header: compacto no telemóvel, 46px no desktop. */
        nav: "h-[42px] px-4 text-sm nav:h-[46px] nav:px-[22px] nav:text-[15px]",
      },
      block: {
        true: "w-full",
      },
      /** Texto longo: deixa quebrar em duas linhas em vez de sair do cartão. */
      wrap: {
        true: "h-auto min-h-[50px] whitespace-normal py-[10px] text-center",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants;

export function Button({
  variant,
  size,
  block,
  wrap,
  className,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size, block, wrap }), className)}
      {...rest}
    />
  );
}
