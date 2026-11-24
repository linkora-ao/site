import { Link } from "@tanstack/react-router";
import { buttonVariants } from "@components/atoms/button";
import { Section } from "@components/layout/section";
import { SectionHeading } from "@components/molecules/section-heading";

export function NotFound() {
  return (
    <Section>
      <SectionHeading
        as="h1"
        eyebrow="Erro 404"
        title="Página não encontrada"
        description="O endereço que abriu não existe ou mudou de sítio."
      />
      <Link to="/" className={`${buttonVariants({ variant: "dark" })} mt-10`}>
        Voltar ao início
      </Link>
    </Section>
  );
}
