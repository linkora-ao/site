import { Link } from "@tanstack/react-router";
import { buttonVariants } from "@components/atoms/button";
import { ButtonLink } from "@components/molecules/button-link";
import { SERVICES } from "@data/services";
import { cn } from "@lib/cn";
import { SERVICE_VISUALS } from "./service-visuals";
import type { ServiceSectionProps } from "./types";

export function HeroSection({ service, content }: ServiceSectionProps) {
  const num = SERVICES.findIndex((s) => s.slug === service.slug) + 1;
  const Visual = SERVICE_VISUALS[service.slug];
  return (
    <section className="on-n bg-primary text-background relative overflow-clip">
      <svg
        className="absolute -right-[clamp(180px,20.83vw,300px)] -top-[clamp(48px,5.56vw,80px)] size-[800px]"
        aria-hidden="true"
        viewBox="0 0 800 800"
      >
        <circle className="stroke-primary-strong" cx="400" cy="400" r="220" fill="none" strokeWidth="2" />
        <circle className="stroke-primary-strong" cx="400" cy="400" r="300" fill="none" strokeWidth="2" opacity=".7" />
        <circle className="stroke-primary-strong" cx="400" cy="400" r="380" fill="none" strokeWidth="2" opacity=".45" />
      </svg>
      <div className="container relative pt-[clamp(37px,3.89vw,56px)] pb-[clamp(77px,8.33vw,120px)]">
        <nav className="mono font-mono text-[13px] text-muted-on-primary" aria-label="Caminho de navegação">
          <Link to="/" className="text-muted-on-primary no-underline">
            Início
          </Link>{" "}
          <span className="text-accent">/</span>{" "}
          <Link to="/servicos" className="text-muted-on-primary no-underline">
            Serviços
          </Link>{" "}
          <span className="text-accent">/</span> <span className="text-background">{service.title}</span>
        </nav>
        <div className="g2 stack grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-[clamp(34px,3.89vw,56px)] items-center mt-[44px]">
          <div>
            <div className="mono font-mono text-[13px] text-accent">
              SERVIÇO {String(num).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
            </div>
            <h1 className="disp hs display-xl mt-[18px] text-[length:clamp(46px,5.83vw,84px)] leading-[.95] text-accent">{service.title}</h1>
            <p className="disp display mt-[24px] text-[length:clamp(26px,2.5vw,36px)] leading-[1.1] max-w-[540px]">
              {content.headline}
            </p>
            <p className="mt-[20px] text-[19px] leading-[1.6] text-muted-on-primary max-w-[520px]">{content.sub}</p>
            <div className="flex flex-wrap gap-[14px] mt-[34px]">
              <a href="#contacto" className={cn(buttonVariants({ variant: "primary", size: "lg" }))}>
                Pedir proposta
              </a>
              <ButtonLink to="/contacto" variant="outline-on-primary" size="lg">
                Falar connosco
              </ButtonLink>
            </div>
            <div className="flex flex-wrap gap-[8px] mt-[28px]">
              {content.chips.map((c) => (
                <span key={c} className="chip text-muted-on-primary">
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <Visual />
          </div>
        </div>
      </div>
    </section>
  );
}
