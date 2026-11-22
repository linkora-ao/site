import { Link } from "@tanstack/react-router";
import { Button } from "@components/atoms/button";
import { ButtonLink } from "@components/molecules/button-link";
import { FormInput, FormTextarea } from "@components/molecules/form-field";
import { SITE } from "@data/site";
import { useQuickContact } from "@lib/use-quick-contact";
import type { ServiceSectionProps } from "./types";

/**
 * Pedido rápido: leva o que foi escrito para o formulário completo (/contacto),
 * onde é validado com contactSchema e enviado. Este usa react-hook-form (useQuickContact).
 */
export function ContactSection({ service, content }: ServiceSectionProps) {
  const {
    form: {
      register,
      formState: { errors },
    },
    submit,
  } = useQuickContact({ topic: "proposta", service: service.slug });

  return (
    <section
      className="sec bg-background pt-0 pb-[clamp(82px,8.89vw,128px)]"
      id="contacto"
    >
      <div className="container">
        <div className="g2 stack on-n reveal relative overflow-hidden bg-primary-soft text-background rounded-[20px] p-[clamp(46px,5vw,72px)] max-[600px]:p-[22px] shadow-card grid grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] gap-[clamp(38px,4.44vw,64px)] items-center">
          <svg
            className="absolute -left-[clamp(120px,13.89vw,200px)] -top-[clamp(132px,15.28vw,220px)]"
            aria-hidden="true"
            viewBox="0 0 600 600"
            width="560"
            height="560"
          >
            <circle
              className="stroke-border-on-primary"
              cx="300"
              cy="300"
              r="130"
              fill="none"
              strokeWidth="2"
            />
            <circle
              className="stroke-border-on-primary"
              cx="300"
              cy="300"
              r="210"
              fill="none"
              strokeWidth="2"
            />
          </svg>
          <div className="relative">
            <div className="eyebrow">Pedir proposta</div>
            <h2 className="disp display mt-[20px] text-[length:clamp(26px,3.75vw,54px)] leading-[1.03]">
              {content.cta}
            </h2>
            <p className="mt-[22px] text-[19px] leading-[1.6] text-muted-on-primary max-w-[480px]">
              Conta-nos o que precisas e respondemos com uma proposta por fases,
              em kwanzas. Sem compromisso.
            </p>
            <div className="mono font-mono mt-[30px] text-[13.5px] text-muted-on-primary flex flex-wrap gap-y-[8px] gap-x-[26px]">
              <span>{SITE.phone}</span>
              <span>{SITE.email}</span>
              <span>Luanda, Angola</span>
            </div>
            <ButtonLink
              to="/contacto"
              variant="outline-on-primary"
              className="mt-[26px]"
            >
              Falar no WhatsApp
            </ButtonLink>
          </div>
          <form
            noValidate
            onSubmit={submit()}
            className="relative bg-card text-primary rounded-[14px] p-[clamp(21px,2.22vw,32px)] shadow-[0_30px_60px_-24px_rgba(0,0,0,.55),inset_0_3px_0_0_var(--accent)]"
          >
            <div className="disp display text-[26px]">
              Pedir proposta · {service.title}
            </div>
            <div className="grid gap-[16px] mt-[22px]">
              <FormInput
                label="O teu nome"
                type="text"
                placeholder="Nome e apelido"
                autoComplete="name"
                error={errors.name?.message}
                {...register("name")}
              />
              <FormInput
                label="Telefone ou email"
                type="text"
                placeholder={"9XX XXX XXX"}
                error={errors.contact?.message}
                {...register("contact")}
              />
              <FormTextarea
                label="O que precisas?"
                className="h-[96px]"
                placeholder="Em uma ou duas frases."
                error={errors.message?.message}
                {...register("message")}
              />
            </div>
            <div className="grid gap-[12px] mt-[22px]">
              <Button type="submit" variant="navy" block>
                Pedir proposta
              </Button>
              <Link
                to="/contacto"
                className="lnk justify-self-center text-[14.5px]"
              >
                Prefiro a página de contacto completa{" "}
                <span className="arr" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
