import { Link } from "@tanstack/react-router";
import { Logo } from "@components/atoms/logo";
import {
  FooterColumn,
  footerLinkClass,
} from "@components/molecules/footer-column";
import { SocialLinks } from "@components/molecules/social-links";
import { COMPANY_LINKS, FOOTER_PRODUCT_LINKS } from "@data/navigation";
import { SERVICES } from "@data/services";
import { SITE } from "@data/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-deep text-primary-foreground">
      <div className="container pt-22">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.2fr]">
          <div>
            <Logo variant="footer" />
            <p className="mt-[18px] max-w-[300px] text-[15px] leading-[1.65] text-muted-on-primary">
              {SITE.description}
            </p>
            <div className="mt-[26px]">
              <SocialLinks />
            </div>
          </div>

          <FooterColumn title="Serviços">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link
                  to="/servicos/$slug"
                  params={{ slug: service.slug }}
                  className={footerLinkClass}
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Produtos">
            {FOOTER_PRODUCT_LINKS.map((link) => (
              <li key={link.label}>
                <Link to={link.to} hash={link.hash} className={footerLinkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Empresa">
            {COMPANY_LINKS.map((link) => (
              <li key={link.label}>
                <Link to={link.to} hash={link.hash} className={footerLinkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <div>
            <p className="text-sm font-bold text-accent">Contacto</p>
            <ul className="mt-[18px] grid gap-3 font-mono text-[13.5px]">
              <li>{SITE.phone}</li>
              <li>{SITE.email}</li>
              <li>{SITE.address}</li>
              <li className="text-muted-on-primary">{SITE.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-between gap-x-7 gap-y-2.5 border-t border-border-on-primary pt-[22px] font-mono text-xs text-muted-on-primary">
          <span>
            {/* TODO: remove comment when have this informations */}
            {/* {SITE.legal.name} · NIF {SITE.legal.nif} · {SITE.legal.address} */}
            {SITE.legal.name}
          </span>
          <span>
            © {new Date().getFullYear()} {SITE.name}. Todos os direitos
            reservados.
          </span>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="tracking-wider mt-10 h-[0.787em] select-none overflow-hidden text-center font-display text-[clamp(4.5rem,23vw,18.75rem)] leading-[.78] font-bold tracking-[-0.065em] whitespace-nowrap text-primary-foreground"
      >
        linkora<span className="text-accent">.</span>
      </div>
    </footer>
  );
}
