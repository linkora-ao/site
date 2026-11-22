import { Button, buttonVariants } from "@components/atoms/button";
import { FormInput } from "@components/molecules/form-field";
import { SITE } from "@data/site";
import { useQuickContact } from "@lib/use-quick-contact";
import { pilotSchema } from "@shared/schemas/contact";

export function ContactSection() {
  const {
    form: {
      register,
      formState: { errors },
    },
    submit,
  } = useQuickContact({ topic: "piloto", schema: pilotSchema });

  return (
    <section
      className="sec bg-background pt-0 pb-[clamp(82px,8.89vw,128px)]"
      id="contacto"
    >
      <div className="container">
        <div className="on-n reveal stack relative overflow-hidden bg-primary-soft text-background rounded-[20px] p-[clamp(46px,5vw,72px)] max-[600px]:p-[22px] shadow-card grid grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] gap-[clamp(38px,4.44vw,64px)] items-center">
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
            <div className="eyebrow">Piloto BOVE</div>
            <h2 className="disp cta-h display mt-[20px] text-[length:clamp(26px,3.75vw,54px)] leading-[1.03]">
              2 vagas para centros de formação.
            </h2>
            <p className="mt-[22px] text-[19px] leading-[1.6] text-muted-on-primary max-w-[500px]">
              Os dois primeiros centros têm acompanhamento directo da equipa e
              condições de lançamento. Pede uma demonstração ou candidata-te já.
            </p>
            <div className="mono font-mono mt-[32px] text-[13.5px] text-muted-on-primary flex flex-wrap gap-y-[8px] gap-x-[26px]">
              <a href={`tel:+${SITE.whatsapp}`}>{SITE.phone}</a>
              {/* <a href={`mailto:${SITE.email}`}>{SITE.email}</a> */}
              <span>{SITE.address}</span>
            </div>
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({
                variant: "outline-on-primary",
                className: "mt-[28px]",
              })}
            >
              Falar no WhatsApp
            </a>
          </div>
          <form
            noValidate
            onSubmit={submit()}
            className="relative bg-card text-primary rounded-[14px] p-[clamp(21px,2.22vw,32px)] shadow-[0_30px_60px_-24px_rgba(0,0,0,.55),inset_0_3px_0_0_var(--accent)]"
          >
            <div className="disp display text-[26px]">
              Candidatar-me ao piloto
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
                label="Centro de formação"
                type="text"
                placeholder="Nome do centro"
                autoComplete="organization"
                error={errors.company?.message}
                {...register("company")}
              />
              <FormInput
                label="Telefone ou email"
                type="text"
                placeholder={SITE.phone}
                error={errors.contact?.message}
                {...register("contact")}
              />
            </div>
            <div className="grid gap-[10px] mt-[24px]">
              <Button type="submit" variant="navy" block wrap>
                Candidatar-me ao piloto
              </Button>
              <Button
                type="button"
                variant="outline"
                block
                wrap
                onClick={submit("demo")}
              >
                Pedir só uma demonstração
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
