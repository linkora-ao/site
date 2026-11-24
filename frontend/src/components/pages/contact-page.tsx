import { Section } from "@components/layout/section";
import { ContactForm } from "@components/molecules/contact-form";
import { SectionHeading } from "@components/molecules/section-heading";
import { ContactDetails } from "@src/components/molecules/sections/contact-details";

/** /contacto: dados à esquerda, formulário à direita. */
export function ContactPage() {
  return (
    <Section
      tone="primary"
      containerClassName="grid items-start gap-14 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-20"
    >
      <div>
        <SectionHeading
          as="h1"
          eyebrow="Contacto"
          title="Fale connosco sobre o seu projecto"
          onPrimary
          className="mb-12"
        />
        <ContactDetails />
      </div>
      <ContactForm />
    </Section>
  );
}
