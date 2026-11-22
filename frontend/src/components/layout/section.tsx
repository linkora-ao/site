import type { ComponentPropsWithoutRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@lib/cn";

/** Secção de página: fundo, ritmo vertical e container num só sítio. */
const sectionVariants = cva("section-y", {
  variants: {
    tone: {
      default: "bg-background text-foreground",
      alt: "bg-background-alt text-foreground",
      card: "bg-card text-card-foreground",
      /** Secção navy de autoridade. */
      primary: "bg-primary text-primary-foreground",
      deep: "bg-primary-deep text-primary-foreground",
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
