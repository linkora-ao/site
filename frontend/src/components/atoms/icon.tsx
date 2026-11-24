import { ArrowRight, Check, Menu, X, type LucideProps } from "lucide-react";

/**
 * Registo único de ícones de interface (Lucide).
 * Para usar um ícone novo: importar acima e acrescentar aqui.
 * Assim só os ícones listados entram no bundle.
 */
const ICONS = {
  "arrow-right": ArrowRight,
  check: Check,
  menu: Menu,
  x: X,
} as const;

export type IconName = keyof typeof ICONS;

type IconProps = Omit<LucideProps, "ref"> & { name: IconName };

export function Icon({ name, size = 20, strokeWidth = 1.75, ...rest }: IconProps) {
  const Component = ICONS[name];
  return <Component size={size} strokeWidth={strokeWidth} aria-hidden="true" {...rest} />;
}
