import { Link } from "@tanstack/react-router";
import { Logo } from "@components/atoms/logo";
import { LEGAL_LINKS, SITE } from "@data/site";

export function Footer() {
  return (
    <footer className="border-t border-border-on-primary bg-primary pt-16 pb-8 text-primary-foreground">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-[200px_minmax(0,1fr)_auto] md:gap-14">
          <Link to="/" aria-label={`${SITE.name}, início`} className="focus-ring w-fit">
            <Logo />
          </Link>
          <p className="max-w-[52ch] text-sm leading-[1.75] text-muted-on-primary">{SITE.about}</p>
          <ul className="grid gap-2.5 text-sm">
            {LEGAL_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="focus-ring transition-colors hover:text-muted-on-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-border-on-primary pt-6 text-[13px] text-muted-on-primary">
          <span>
            © {new Date().getFullYear()} {SITE.legalName}
          </span>
          <span>{SITE.madeIn}</span>
        </div>
      </div>
    </footer>
  );
}
