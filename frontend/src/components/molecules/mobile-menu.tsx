import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Icon } from "@components/atoms/icon";
import { NAV } from "@data/navigation";

/** Menu hamburger (abaixo de 1000px). Fecha ao escolher um link, com Escape ou ao clicar fora. */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [open]);

  return (
    <div ref={ref} className="nav:hidden" onKeyDown={(event) => event.key === "Escape" && setOpen(false)}>
      <button
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="menu-mobile"
        onClick={() => setOpen((value) => !value)}
        className="focus-ring flex-center size-11 cursor-pointer text-foreground"
      >
        <Icon name={open ? "x" : "menu"} size={24} />
      </button>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Menu"
          onClick={(event) => (event.target as HTMLElement).closest("a") && setOpen(false)}
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-auto border-b border-border bg-background px-5 pt-2 pb-6"
        >
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block border-b border-border py-4 text-lg font-medium text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
