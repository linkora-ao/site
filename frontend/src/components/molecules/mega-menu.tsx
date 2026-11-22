import { type ReactNode, useState } from "react";
import { Icon } from "@components/atoms/icon";
import { NavLink } from "@components/molecules/nav-link";
import type { AppPath } from "@data/navigation";
import { cn } from "@lib/cn";

type MegaMenuProps = {
  label: string;
  to: AppPath;
  children: ReactNode;
};

/**
 * Item do header com painel largo. Abre com hover ou foco (só CSS) e fecha com
 * Escape ou ao escolher um link. Colocar dentro de um ancestral `relative` (o header),
 * para o painel ocupar a largura toda por baixo dele.
 */
export function MegaMenu({ label, to, children }: MegaMenuProps) {
  const [dismissed, setDismissed] = useState(false);

  const close = () => {
    setDismissed(true);
    (document.activeElement as HTMLElement | null)?.blur();
  };

  return (
    <div
      className="group/mm flex h-20 items-center"
      onMouseLeave={() => setDismissed(false)}
      onKeyDown={(event) => event.key === "Escape" && close()}
    >
      <NavLink
        to={to}
        className="inline-flex items-center gap-2 group-focus-within/mm:bg-[length:100%_2px] group-hover/mm:bg-[length:100%_2px]"
      >
        {label}
        <Icon
          name="chevron-down"
          size={11}
          strokeWidth={2.2}
          className="transition-transform group-focus-within/mm:rotate-180 group-hover/mm:rotate-180"
        />
      </NavLink>

      <div
        onClick={close}
        className={cn(
          "absolute inset-x-0 top-full z-40 translate-y-2.5 border-t-[3px] border-accent bg-card text-foreground shadow-menu",
          "pointer-events-none invisible opacity-0 [transition:opacity_.18s_ease,transform_.18s_ease,visibility_0s_linear_.18s]",
          "group-focus-within/mm:pointer-events-auto group-focus-within/mm:visible group-focus-within/mm:translate-y-0 group-focus-within/mm:opacity-100 group-focus-within/mm:[transition:opacity_.2s_ease,transform_.2s_ease,visibility_0s]",
          "group-hover/mm:pointer-events-auto group-hover/mm:visible group-hover/mm:translate-y-0 group-hover/mm:opacity-100 group-hover/mm:[transition:opacity_.2s_ease,transform_.2s_ease,visibility_0s]",
          dismissed && "!pointer-events-none !invisible !opacity-0",
        )}
      >
        {children}
      </div>
    </div>
  );
}
