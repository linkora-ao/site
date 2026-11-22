import { Button, buttonVariants } from "@components/atoms/button";
import { SITE } from "@data/site";
import { Icon } from "@components/atoms/icon";
import { BrandIcon } from "@components/atoms/brand-icon";
import {
  FormInput,
  FormSelect,
  FormTextarea,
} from "@components/molecules/form-field";
import { QUICK_PROJECT_OPTIONS } from "@data/quick-projects";
import { useQuickContact } from "@lib/use-quick-contact";

export function ContactSection() {
  const {
    form: {
      register,
      formState: { errors },
    },
    submit,
  } = useQuickContact({
    topic: "proposta",
    project: QUICK_PROJECT_OPTIONS[0]?.value,
  });

  return (
    <section className="sec" id="contacto">
      <div className="container stack grid grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-[clamp(43px,5vw,72px)] items-start">
        <div>
          <div className="eyebrow">Contacto</div>
          <h2 className="disp h-lg display leading-[1.05] mt-[20px] text-[length:clamp(26px,3.89vw,56px)]">
            Vamos construir o teu sistema.
          </h2>
          <p className="body mt-[22px] max-w-[440px]">
            Conta-nos o que precisas. Respondemos com um plano e uma proposta
            por escrito, em kwanzas.
          </p>
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "outline",
              className: "mt-[32px] gap-[12px]",
            })}
          >
            <BrandIcon name="whatsapp" size={22} className="text-accent-dark" />
            Falar no WhatsApp
          </a>
          <div className="mt-[40px] grid border-t border-t-primary">
            <div className="flex justify-between gap-[16px] py-[18px] px-0 border-b border-b-border">
              <span className="font-bold">Telefone / WhatsApp</span>
              <a
                href={`tel:+${SITE.whatsapp}`}
                className="mono font-mono text-[15px]"
              >
                {SITE.phone}
              </a>
            </div>
            {/* TODO: remove comment when have a company address */}
            {/* <div className="flex justify-between gap-[16px] py-[18px] px-0 border-b border-b-border">
              <span className="font-bold">Email</span>
              <span className="mono font-mono text-[15px]">{SITE.email}</span>
            </div> */}
            {/* TODO: remove comment when have a company address */}
            {/* <div className="flex justify-between gap-[16px] py-[18px] px-0 border-b border-b-border">
              <span className="font-bold">Localização</span>
              <span className="text-[15.5px]">
                Luanda · {SITE.legal.address}
              </span>
            </div> */}
            <div className="flex justify-between gap-[16px] py-[18px] px-0 border-b border-b-primary">
              <span className="font-bold">Horário</span>
              <span className="text-[15.5px]">24/7</span>
            </div>
          </div>
        </div>
        <form
          noValidate
          onSubmit={submit()}
          className="bg-card border border-border rounded-[var(--radius)] shadow-card overflow-hidden"
        >
          <div className="bg-primary text-background py-[20px] px-[clamp(21px,2.22vw,32px)] flex justify-between items-center">
            <span className="disp display text-[24px]">Pedir proposta</span>
            <span className="text-[13px] text-muted-on-primary">
              Resposta por escrito
            </span>
          </div>
          <div className="p-[clamp(21px,2.22vw,32px)] grid gap-[20px]">
            <div className="g2c grid grid-cols-[repeat(2,minmax(0,1fr))] gap-[16px]">
              <FormInput
                label="Nome"
                placeholder="O teu nome"
                autoComplete="name"
                error={errors.name?.message}
                {...register("name")}
              />
              <FormInput
                label="Empresa"
                placeholder="Nome da empresa"
                autoComplete="organization"
                error={errors.company?.message}
                {...register("company")}
              />
            </div>
            <FormInput
              label="Email ou WhatsApp"
              placeholder="Como te contactamos?"
              error={errors.contact?.message}
              {...register("contact")}
            />
            <FormSelect label="Tipo de projecto" {...register("project")}>
              {QUICK_PROJECT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </FormSelect>
            <FormTextarea
              label="Mensagem"
              placeholder="O que queres resolver?"
              error={errors.message?.message}
              {...register("message")}
            />
            <Button type="submit" variant="navy" size="lg" block>
              Enviar pedido
              <Icon name="arrow-right" className="ico" />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
