import { ButtonLink } from "@components/molecules/button-link";
import { SITE } from "@src/data/site";

export function ContactSection() {
  return (
    <section
      className="sec bg-background pb-[clamp(82px,8.89vw,128px)]"
      id="contacto"
    >
      <div className="container">
        <div className="on-n reveal relative overflow-hidden bg-primary-soft text-background rounded-[20px] p-[clamp(46px,5vw,72px)] max-[600px]:p-[22px] shadow-card">
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
          <div className="relative max-w-[700px]">
            <div className="eyebrow">Próximo passo</div>
            <h2 className="disp cta-h display mt-[20px] text-[length:clamp(26px,3.89vw,56px)] leading-[1.03]">
              Conhece a BOVE ou fala connosco sobre o teu projecto.
            </h2>
            <p className="mt-[22px] text-[19px] leading-[1.6] text-muted-on-primary max-w-[540px]">
              Se o teu caso não cabe num produto, também construímos software à
              medida.
            </p>
            <div className="flex flex-wrap gap-[14px] mt-[38px]">
              <ButtonLink to="/bove" variant="primary">
                Ver a BOVE
              </ButtonLink>
              <ButtonLink to="/servicos" variant="outline-on-primary">
                Ver serviços à medida
              </ButtonLink>
            </div>
            <div className="mono font-mono mt-[34px] text-[13.5px] text-muted-on-primary flex flex-wrap gap-y-[8px] gap-x-[26px]">
              <a href={`tel:+${SITE.whatsapp}`}>{SITE.phone}</a>
              {/* <a href={`mailto:${SITE.email}`}>{SITE.email}</a> */}
              <span>{SITE.address}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
