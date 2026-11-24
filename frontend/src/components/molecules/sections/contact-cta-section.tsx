import { Section } from "@components/layout/section";
import { SectionHeading } from "@components/molecules/section-heading";
import { ProposalButton } from "@components/molecules/proposal-button";
import { SITE } from "@data/site";

/** Faixa final das páginas: convite para falar, com o botão "Pedir proposta". */
export function ContactCtaSection() {
  return (
    <Section tone="primary">
      <div className="grid items-end gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-14">
        <SectionHeading
          eyebrow="Contacto"
          title="Fale connosco sobre o seu projecto"
          description={`${SITE.response}.`}
          onPrimary
        />
        <ProposalButton variant="primary" />
      </div>
    </Section>
  );
}
