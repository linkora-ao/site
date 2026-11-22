import { Link } from "@tanstack/react-router";
import { Logo } from "@components/atoms/logo";
import { MegaMenu } from "@components/molecules/mega-menu";
import { MobileMenu } from "@components/molecules/mobile-menu";
import { NavLink } from "@components/molecules/nav-link";
import { ProductsMegaMenu } from "@components/molecules/products-mega-menu";
import { ProposalButton } from "@components/molecules/proposal-button";
import { ServicesMegaMenu } from "@components/molecules/services-mega-menu";
import { NAV } from "@data/navigation";
import { SITE } from "@data/site";

const MEGA_PANELS = {
  services: <ServicesMegaMenu />,
  products: <ProductsMegaMenu />,
};

/** Header fixo ao topo. Os mega-menus ancoram-se a este elemento (relative via sticky). */
export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border-on-primary bg-primary text-primary-foreground">
      <div className="container flex h-20 items-center justify-between gap-3 nav:gap-6">
        <Link to="/" aria-label={`${SITE.name}, início`} className="focus-ring rounded-sm">
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden h-20 items-center gap-8 nav:flex">
          {NAV.map((entry) =>
            entry.kind === "mega" ? (
              <MegaMenu key={entry.menu} label={entry.label} to={entry.to}>
                {MEGA_PANELS[entry.menu]}
              </MegaMenu>
            ) : (
              <NavLink key={entry.label} to={entry.to} hash={entry.hash}>
                {entry.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <ProposalButton size="nav" arrow={false} />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
