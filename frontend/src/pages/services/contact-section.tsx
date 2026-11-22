import { buttonVariants } from "@components/atoms/button";
import { SITE } from "@data/site";

export function ContactSection() {
  return (
    <section
      className="sec bg-background pb-[clamp(82px,8.89vw,128px)]"
      id="contacto"
    >
      <div className="container">
        <div className="on-n reveal relative overflow-hidden bg-primary-soft text-background rounded-[20px] py-[clamp(51px,5.56vw,80px)] px-[clamp(46px,5vw,72px)] shadow-card">
          <svg
            className="absolute -right-[clamp(96px,11.11vw,160px)] -top-[clamp(120px,13.89vw,200px)]"
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
          <div
            className="absolute right-[clamp(43px,5vw,72px)] -bottom-[clamp(42px,4.86vw,70px)] rounded-full bg-accent size-[200px]"
            aria-hidden="true"
          ></div>
          <div className="relative max-w-[720px]">
            <div className="eyebrow">Próximo passo</div>
            <h2 className="disp cta-h display mt-[20px] text-[length:clamp(28px,4.17vw,60px)] leading-[1.03]">
              Conta-nos o que precisas. Respondemos com uma proposta por fases.
            </h2>
            <p className="mt-[24px] text-[19px] leading-[1.6] text-muted-on-primary max-w-[560px]">
              Sem compromisso e em kwanzas. Falas directamente com a equipa que
              vai construir.
            </p>
            <div className="flex flex-wrap gap-[14px] mt-[40px]">
              <a
                href="#contacto"
                className={buttonVariants({ variant: "primary" })}
              >
                Pedir proposta
              </a>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "outline-on-primary" })}
              >
                Falar no WhatsApp
              </a>
            </div>
            <div className="mono font-mono mt-[36px] text-[13.5px] text-muted-on-primary flex flex-wrap gap-y-[8px] gap-x-[28px]">
              <a href={`tel:+${SITE.whatsapp}`}>{SITE.phone}</a>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <span>{SITE.address}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
