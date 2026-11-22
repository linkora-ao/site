import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Icon } from "@components/atoms/icon";
import { NAV_LINKS } from "@data/navigation";
import { SERVICES } from "@data/services";

const row =
  "block border-b border-border-on-primary py-3.5 text-[17px] font-semibold text-primary-foreground";
const sub = "block py-2.5 pl-4 text-[15.5px] font-medium text-muted-on-primary";
const group = "mono-label pt-4 pb-1 text-accent";

/** Menu hamburger (abaixo de 1100px). Fecha ao escolher um link ou com Escape. */
export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="nav:hidden"
      onKeyDown={(event) => event.key === "Escape" && setOpen(false)}
    >
      <button
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="menu-mobile"
        onClick={() => setOpen((value) => !value)}
        className="focus-ring flex-center size-11 cursor-pointer rounded-sm border-[1.5px] border-muted-foreground text-primary-foreground"
      >
        <Icon name={open ? "x" : "menu"} size={22} />
      </button>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Menu"
          onClick={(event) =>
            (event.target as HTMLElement).closest("a") && setOpen(false)
          }
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] overflow-auto border-t border-b-[3px] border-t-border-on-primary border-b-accent bg-primary px-5 pt-2 pb-[22px] shadow-menu"
        >
          {/* <p className={group}>Linkora</p> */}
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              className={row}
            >
              {item.label}
            </Link>
          ))}

          <p className={group}>Serviços</p>
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              to="/servicos/$slug"
              params={{ slug: service.slug }}
              className={sub}
            >
              {service.title}
            </Link>
          ))}
          <Link to="/servicos" className={row}>
            Ver todos os serviços
          </Link>

          <p className={group}>Produtos</p>
          <Link to="/bove" className={sub}>
            BOVE
          </Link>
          <Link to="/produtos" className={row}>
            Ver todos os produtos
          </Link>
        </nav>
      )}
    </div>
  );
}
