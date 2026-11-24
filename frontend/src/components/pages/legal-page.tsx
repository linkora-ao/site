import { ConfirmChip } from "@components/atoms/chip";
import { Section } from "@components/layout/section";
import { SectionHeading } from "@components/molecules/section-heading";

type LegalPageProps = { title: string };

/**
 * Página legal (Termos, Privacidade). O Anexo A não traz o texto:
 * fica o marcador visível até a LINKORA fornecer o documento final.
 */
export function LegalPage({ title }: LegalPageProps) {
  return (
    <Section containerClassName="max-w-3xl">
      <SectionHeading as="h1" eyebrow="Legal" title={title} />
      <p className="mt-10 flex flex-wrap items-center gap-3 text-base leading-[1.7] text-muted-foreground">
        <ConfirmChip /> O texto desta página será publicado assim que for aprovado.
      </p>
    </Section>
  );
}
