import { BrandIcon } from "@components/atoms/brand-icon";
import { SOCIALS } from "@data/site";

/** Redes sociais em círculos (footer). */
export function SocialLinks() {
  return (
    <ul className="flex gap-2.5">
      {SOCIALS.map((social) => (
        <li key={social.id}>
          <a
            href={social.href}
            aria-label={social.label}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring flex-center size-[46px] rounded-full border-[1.5px] border-border-on-primary text-primary-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
          >
            <BrandIcon name={social.id} size={20} />
          </a>
        </li>
      ))}
    </ul>
  );
}
