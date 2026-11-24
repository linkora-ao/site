import { Link } from "@tanstack/react-router";
import { Logo } from "@components/atoms/logo";
import { MobileMenu } from "@components/molecules/mobile-menu";
import { NavLink } from "@components/molecules/nav-link";
import { ProposalButton } from "@components/molecules/proposal-button";
import { NAV } from "@data/navigation";
import { SITE } from "@data/site";

/**
 * Header fixo ao topo. O fundo é sólido; onde há suporte, fica translúcido
 * com blur (um dos poucos sítios onde o brief permite blur).
 */
export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background supports-[backdrop-filter]:bg-background/85 supports-[backdrop-filter]:backdrop-blur-md">
      <div className="container flex h-16 items-center gap-6 nav:h-[76px] nav:gap-8">
        <Link to="/" aria-label={`${SITE.name}, início`} className="focus-ring mr-auto text-foreground">
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 nav:flex">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ProposalButton size="nav" />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
