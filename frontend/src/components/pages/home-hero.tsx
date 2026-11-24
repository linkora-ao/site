import { Section } from "@components/layout/section";
import { ProposalButton } from "@components/molecules/proposal-button";
import { GUARANTEES, SITE } from "@data/site";

const FACTS = [
  { label: "Sede", value: SITE.city },
  { label: "Horário", value: SITE.hours },
  { label: "Resposta", value: SITE.response },
] as const;

/** Hero assimétrica: afirmação, um botão e as três garantias num bloco preto. */
export function HomeHero() {
  return (
    <Section className="pt-12 pb-0 sm:pt-20 lg:pt-[88px]">
      <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,.75fr)] lg:gap-[72px]">
        <div>
          <p className="eyebrow mb-7 text-muted-foreground">Startup angolana de tecnologia · Luanda</p>
          <h1 className="display-xl max-w-[11.5ch]">{SITE.tagline}</h1>
          <p className="text-pretty-p mt-8 mb-10 max-w-[56ch] text-base leading-[1.65] text-muted-foreground sm:text-lg">
            Desenvolvemos plataformas web, aplicações móveis e sistemas inteligentes sob medida para empresas em
            Angola, com padrões internacionais de excelência.
          </p>
          <ProposalButton />
        </div>

        <aside
          aria-label="Três garantias"
          className="relative mr-3 bg-primary px-6 pt-8 pb-4 text-primary-foreground sm:px-9 sm:pt-10 sm:pb-7 lg:mt-2"
        >
          <span aria-hidden="true" className="absolute -top-3.5 -right-3.5 size-11 bg-accent sm:-top-5 sm:-right-5 sm:size-14" />
          <p className="eyebrow text-muted-on-primary">Três garantias</p>
          <ol className="mt-7">
            {GUARANTEES.map((guarantee, index) => (
              <li
                key={guarantee}
                className="grid grid-cols-[36px_1fr] gap-1.5 border-t border-border-on-primary py-5 text-base leading-[1.4] font-medium sm:text-lg"
              >
                <span className="label-caps pt-1.5 text-muted-on-primary">{String(index + 1).padStart(2, "0")}</span>
                {guarantee}
              </li>
            ))}
          </ol>
        </aside>
      </div>

      <dl className="mt-14 grid gap-5 border-t border-foreground pt-7 pb-14 sm:mt-20 sm:grid-cols-3 sm:gap-10 sm:pb-14">
        {FACTS.map((fact) => (
          <div key={fact.label}>
            <dt className="label-caps mb-2 text-muted-foreground">{fact.label}</dt>
            <dd className="text-base leading-[1.5] font-medium">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
