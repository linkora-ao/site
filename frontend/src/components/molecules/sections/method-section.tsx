import { Link } from "@tanstack/react-router";
import { Section } from "@components/layout/section";
import { SectionHeading } from "@components/molecules/section-heading";
import { METHOD, PHASES } from "@data/method";

type MethodSectionProps = {
  /** Home: número, nome e descrição de cada fase, com ligação para /metodo. */
  compact?: boolean;
  /** Página própria: o título passa a h1. */
  asPage?: boolean;
};

/** Método em quatro fases, com o que o cliente recebe em cada uma (página completa). */
export function MethodSection({ compact, asPage }: MethodSectionProps) {
  return (
    <Section id="metodo">
      <SectionHeading eyebrow="Método" title={METHOD.title} description={METHOD.lead} as={asPage ? "h1" : "h2"} className="mb-14 sm:mb-16" />

      <ol className="grid border-t border-foreground sm:grid-cols-2 lg:grid-cols-4">
        {PHASES.map((phase) => (
          <li
            key={phase.number}
            className="border-b border-border pt-8 pb-8 sm:pr-7 lg:border-r lg:border-b-0 lg:pb-2 lg:not-last:mr-7 lg:last:border-r-0"
          >
            <span className="mb-6 block text-5xl leading-none font-semibold tracking-[-0.04em] text-accent sm:mb-7 sm:text-[56px]">
              {phase.number}
            </span>
            <h3 className="mb-3 text-xl leading-[1.3] font-semibold tracking-[-0.01em] sm:text-[21px]">
              {phase.title}
            </h3>
            <p className="text-[15px] leading-[1.7] text-muted-foreground">{phase.text}</p>

            {!compact && (
              <>
                <p className="label-caps mt-7 border-t border-border pt-5 text-muted-foreground">O que recebe</p>
                <ul className="mt-3.5 mb-6 grid gap-2.5">
                  {phase.deliverables.map((item) => (
                    <li
                      key={item}
                      className="relative pl-4 text-[14.5px] leading-[1.55] before:absolute before:top-[9px] before:left-0 before:size-1.5 before:bg-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ol>

      {compact ? (
        <Link to="/metodo" className="focus-ring link-underline mt-12 inline-block">
          Ver o método
        </Link>
      ) : (
        <p className="mt-14 max-w-[60ch] border-l-4 border-accent bg-background-alt px-6 py-6 text-lg leading-[1.5] font-medium sm:px-8 sm:text-xl">
          {METHOD.pledge}
        </p>
      )}
    </Section>
  );
}
