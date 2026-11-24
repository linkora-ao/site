import type { ComponentPropsWithoutRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@lib/cn";

/** Secção de página: fundo, ritmo vertical e container num só sítio. */
const sectionVariants = cva("section-y", {
  variants: {
    tone: {
      default: "bg-background text-foreground",
      /** Branco quente: contraste suave. */
      alt: "bg-background-alt text-foreground",
      /** Preto: secções de autoridade (serviços, contacto, rodapé). */
      primary: "bg-primary text-primary-foreground",
    },
  },
  defaultVariants: { tone: "default" },
});

type SectionProps = Omit<ComponentPropsWithoutRef<"section">, "color"> &
  VariantProps<typeof sectionVariants> & {
    /** Classes do container interno. */
    containerClassName?: string;
  };

export function Section({ tone, className, containerClassName, children, ...rest }: SectionProps) {
  return (
    <section className={cn(sectionVariants({ tone }), className)} {...rest}>
      <div className={cn("container", containerClassName)}>{children}</div>
    </section>
  );
}
