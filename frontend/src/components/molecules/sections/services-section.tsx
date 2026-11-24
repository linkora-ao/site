import { Link } from "@tanstack/react-router";
import { CustomProjectButton } from "@components/molecules/custom-project-button";
import { Section } from "@components/layout/section";
import { SectionHeading } from "@components/molecules/section-heading";
import { CUSTOM_CTA, SERVICES } from "@data/services";

type ServicesSectionProps = {
  /** Home: só nome e descrição, com ligação para /servicos. */
  compact?: boolean;
  /** Página própria: o título passa a h1. */
  asPage?: boolean;
};

/** Os seis serviços, em linhas com filetes (secção preta). */
export function ServicesSection({ compact, asPage }: ServicesSectionProps) {
  return (
    <Section tone="primary" id="servicos">
      <SectionHeading
        eyebrow="Serviços"
        title="Seis serviços, do primeiro website à plataforma cloud de alta complexidade"
        as={asPage ? "h1" : "h2"}
        onPrimary
        className="mb-14 sm:mb-16"
      />

      <ol className="border-t border-border-on-primary">
        {SERVICES.map((service, index) => (
          <li
            key={service.slug}
            className="grid gap-x-10 gap-y-5 border-b border-border-on-primary py-8 sm:py-10 md:grid-cols-[72px_minmax(0,1.1fr)_minmax(0,.9fr)]"
          >
            <span className="label-caps pt-2 text-muted-on-primary">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="text-[22px] leading-[1.25] font-semibold tracking-[-0.02em] sm:text-[26px]">
                {service.title}
              </h3>
              <p className="mt-3 max-w-[52ch] text-base leading-[1.7] text-muted-on-primary">{service.description}</p>
            </div>
            {!compact && (
              <ul className="grid content-start gap-3.5 pt-1.5">
                {service.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="relative pl-[22px] text-[15px] leading-[1.55] before:absolute before:top-[9px] before:left-0 before:size-[7px] before:bg-accent"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>

      {compact ? (
        <Link to="/servicos" className="focus-ring link-underline mt-12 inline-block">
          Ver todos os serviços
        </Link>
      ) : (
        <div className="mt-14 flex flex-col items-start gap-7 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
          <p className="max-w-[34ch] text-xl leading-[1.4] font-medium sm:text-[22px]">{CUSTOM_CTA.text}</p>
          <CustomProjectButton />
        </div>
      )}
    </Section>
  );
}
