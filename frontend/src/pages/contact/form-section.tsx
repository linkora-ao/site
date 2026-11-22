import { Icon } from "@components/atoms/icon";
import { BrandIcon } from "@components/atoms/brand-icon";
import { buttonVariants } from "@components/atoms/button";
import { ContactForm } from "@components/molecules/contact-form";
import { SITE } from "@data/site";

export function FormSection() {
  return (
    <section
      className="bg-[linear-gradient(var(--primary)_0,var(--primary)_130px,var(--background)_130px)] -mt-[clamp(78px,9.03vw,130px)] relative pb-[clamp(72px,7.78vw,112px)]"
      id="formulario"
    >
      <div className="container">
        <div className="g2 stack grid grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-[32px] items-start">
          <ContactForm />
          <div className="grid gap-[20px] [align-content:start]">
            <div className="on-n bg-primary-soft text-background border border-border-on-primary rounded-[20px] pt-[clamp(24px,2.5vw,36px)] pb-[20px] px-[clamp(24px,2.5vw,36px)] shadow-card relative overflow-hidden">
              <div
                className="absolute -right-[clamp(36px,4.17vw,60px)] -top-[clamp(36px,4.17vw,60px)] rounded-full bg-accent opacity-[.95] size-[160px]"
                aria-hidden="true"
              ></div>
              <div className="relative">
                <div className="eyebrow">Contacto directo</div>
                <div className="disp display text-[30px] leading-[1.1] mt-[16px] max-w-[260px]">
                  Prefere falar já?
                </div>
                <a
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({
                    variant: "primary",
                    size: "lg",
                    block: true,
                    className: "mt-[24px]",
                  })}
                >
                  <BrandIcon
                    name="whatsapp"
                    size={20}
                    className="size-[20px]"
                  />
                  Falar no WhatsApp
                </a>
              </div>
              <div className="mt-[26px] relative">
                <a href={`mailto:${SITE.email}`} className="ci">
                  <span className="ct">
                    <Icon name="mail" size={22} className="ico size-[22px]" />
                  </span>
                  <span>
                    <div className="ck">Email</div>
                    <div className="cv">{SITE.email}</div>
                  </span>
                </a>
                <a
                  href={`tel:${SITE.phone.replaceAll(" ", "")}`}
                  className="ci"
                >
                  <span className="ct">
                    <Icon name="phone" size={22} className="ico size-[22px]" />
                  </span>
                  <span>
                    <div className="ck">Telefone</div>
                    <div className="cv">{SITE.phone}</div>
                  </span>
                </a>
                <div className="ci">
                  <span className="ct">
                    <Icon
                      name="map-pin"
                      size={22}
                      className="ico size-[22px]"
                    />
                  </span>
                  <span>
                    <div className="ck">Localização</div>
                    <div className="cv">Luanda, Angola</div>
                  </span>
                </div>
                <div className="ci">
                  <span className="ct">
                    <Icon name="clock" size={22} className="ico size-[22px]" />
                  </span>
                  <span>
                    <div className="ck">Horário</div>
                    <div className="cv">Seg a Sex, 08h às 17h</div>
                  </span>
                </div>
              </div>
            </div>
            <div className="stack bg-card border border-border rounded-[14px] py-[28px] px-[30px] grid grid-cols-[auto_minmax(0,1fr)] gap-[22px] items-center">
              <div className="mono font-mono text-[length:clamp(26px,2.78vw,40px)] font-medium tracking-[-0.04em] leading-[1] text-primary">
                1 dia
              </div>
              <p className="m-0 text-[15.5px] leading-[1.55] text-muted-foreground">
                <b className="text-primary">Tempo de resposta.</b> Lemos todos
                os pedidos e respondemos em dia útil, em português.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
