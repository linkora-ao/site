import { Link } from "@tanstack/react-router";
import { ConfirmChip } from "@components/atoms/chip";
import { Section } from "@components/layout/section";
import { SectionHeading } from "@components/molecules/section-heading";
import { METRICS, METRICS_CONFIRMED, WARRANTIES, WHY } from "@data/why-us";

type WhySectionProps = {
  /** Home: só as quatro garantias, com ligação para /porque-nos. */
  compact?: boolean;
  /** Página própria: o título passa a h1. */
  asPage?: boolean;
};

/** Porquê a Linkora: garantias e, na página completa, os indicadores (ainda por confirmar). */
export function WhySection({ compact, asPage }: WhySectionProps) {
  return (
    <Section tone="alt" id="porque-nos">
      <SectionHeading eyebrow="Porquê nós" title={WHY.title} description={WHY.lead} as={asPage ? "h1" : "h2"} className="mb-14 sm:mb-16" />

      <ul className="grid border-t border-foreground md:grid-cols-2 md:gap-x-14">
        {WARRANTIES.map((warranty) => (
          <li key={warranty.title} className="border-b border-border py-8">
            <h3 className="mb-2.5 text-xl leading-[1.3] font-semibold tracking-[-0.01em] sm:text-[21px]">
              {warranty.title}
            </h3>
            <p className="max-w-[46ch] text-base leading-[1.7] text-muted-foreground">{warranty.text}</p>
          </li>
        ))}
      </ul>

      {compact ? (
        <Link to="/porque-nos" className="focus-ring link-underline mt-12 inline-block">
          Ver porquê a LINKORA
        </Link>
      ) : (
        <div className="mt-16 bg-card p-6 sm:p-10">
          {!METRICS_CONFIRMED && (
            <p className="mb-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <ConfirmChip /> Indicadores declarados no site anterior, ainda sem fonte.
            </p>
          )}
          <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((metric) => (
              <div key={metric.title}>
                <dt className="mb-4 text-[38px] leading-none font-semibold tracking-[-0.03em] sm:text-[44px]">
                  {metric.value}
                </dt>
                <dd className="text-sm leading-[1.65] text-muted-foreground">
                  <b className="mb-1.5 block text-[15px] font-semibold text-foreground">{metric.title}</b>
                  {metric.text}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </Section>
  );
}
