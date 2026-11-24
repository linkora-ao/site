import { Link } from "@tanstack/react-router";
import { Section } from "@components/layout/section";
import { ABOUT, MISSION, PILLARS, VALUES } from "@data/about";

type AboutSectionProps = {
  /** Home: afirmação, texto e três pilares, com ligação para /sobre. */
  compact?: boolean;
  /** Página própria: o título passa a h1. */
  asPage?: boolean;
};

/** Sobre a Linkora: afirmação, pilares e, na página completa, missão, visão, propósito e valores. */
export function AboutSection({ compact, asPage }: AboutSectionProps) {
  const Heading = asPage ? "h1" : "h2";
  return (
    <Section id="sobre">
      <p className="eyebrow text-muted-foreground">Sobre</p>

      <div className="mt-6 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,.9fr)] lg:gap-[72px]">
        <Heading className="display max-w-[20ch]">{ABOUT.title}</Heading>
        <div className="grid gap-5 pt-2 text-base leading-[1.7] text-muted-foreground sm:text-lg">
          {ABOUT.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <ul className="mt-16 grid gap-8 sm:mt-20 md:grid-cols-3 md:gap-10">
        {PILLARS.map((pillar) => (
          <li key={pillar.title} className="border-t-2 border-foreground pt-6">
            <h3 className="mb-3 text-xl leading-[1.3] font-semibold tracking-[-0.01em]">{pillar.title}</h3>
            <p className="text-base leading-[1.7] text-muted-foreground">{pillar.text}</p>
          </li>
        ))}
      </ul>

      {compact ? (
        <Link to="/sobre" className="focus-ring link-underline mt-12 inline-block">
          Conhecer a LINKORA
        </Link>
      ) : (
        <>
          <dl className="mt-16 grid gap-8 bg-background-alt p-6 sm:mt-20 sm:p-12 md:grid-cols-3 md:gap-12">
            {MISSION.map((item) => (
              <div key={item.label}>
                <dt className="eyebrow label-caps mb-3 text-muted-foreground">{item.label}</dt>
                <dd className="text-base leading-[1.7]">{item.text}</dd>
              </div>
            ))}
          </dl>

          <h3 className="mt-20 mb-7 text-2xl font-semibold tracking-[-0.02em] sm:mt-24 sm:text-[26px]">Valores</h3>
          <ul className="grid border-t border-border sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
            {VALUES.map((value) => (
              <li key={value.title} className="grid content-start gap-2 border-b border-border py-7">
                <b className="text-lg font-semibold">{value.title}</b>
                <span className="text-[15px] leading-[1.65] text-muted-foreground">{value.text}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </Section>
  );
}
