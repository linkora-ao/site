import { buttonVariants } from "@components/atoms/button";
import { Icon } from "@components/atoms/icon";
import { HeroCarousel } from "./hero-carousel";

export function HeroSection() {
  return (
    <section className="on-n bg-primary text-background relative overflow-hidden pt-[clamp(51px,5.56vw,80px)] pb-[clamp(108px,11.67vw,168px)] max-[900px]:pb-[150px] px-0">
      <svg
        className="absolute left-0 right-0 bottom-[clamp(34px,3.89vw,56px)] w-full h-[120px]"
        aria-hidden="true"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          className="stroke-primary-strong"
          d="M0 60 Q90 30 180 60 T360 60 T540 60 T720 60 T900 60 T1080 60 T1260 60 T1440 60"
          fill="none"
          strokeWidth="2"
        />
        <path
          className="stroke-primary-strong"
          d="M0 84 Q90 54 180 84 T360 84 T540 84 T720 84 T900 84 T1080 84 T1260 84 T1440 84"
          fill="none"
          strokeWidth="2"
          opacity=".7"
        />
        <path
          className="stroke-primary-strong"
          d="M0 108 Q90 78 180 108 T360 108 T540 108 T720 108 T900 108 T1080 108 T1260 108 T1440 108"
          fill="none"
          strokeWidth="2"
          opacity=".45"
        />
      </svg>
      <div className="container stack relative grid grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-[clamp(34px,3.89vw,56px)] items-center">
        <div>
          <div className="eyebrow">Empresa angolana de tecnologia</div>
          <h1 className="disp h-xl display-xl mt-[26px] text-[length:clamp(33px,5vw,72px)]">
            Softwares para empresas que{" "}
            <span className="text-accent">não podem parar.</span>
          </h1>
          <p className="mt-[30px] max-w-[520px] text-[20px] leading-[1.6] text-muted-on-primary">
            Plataformas web, software à medida e automações para PMEs em Angola,
            com engenharia rigorosa, suporte local e propostas em kwanzas.
          </p>
          <div className="flex flex-wrap gap-[14px] mt-[38px]">
            <a
              href="#contacto"
              className={buttonVariants({ variant: "primary" })}
            >
              Pedir proposta
              <Icon name="arrow-right" className="ico" />
            </a>
            <a
              href="#servicos"
              className={buttonVariants({ variant: "outline-on-primary" })}
            >
              Ver serviços
            </a>
          </div>
        </div>
        <div className="relative min-h-[560px] min-w-0 max-[900px]:min-h-0">
          <div
            className="absolute left-[clamp(186px,21.53vw,310px)] top-0 rounded-full bg-accent size-[250px] max-[900px]:left-auto max-[900px]:-right-[50px] max-[900px]:-top-[30px] max-[900px]:size-[170px]"
            aria-hidden="true"
          ></div>
          <svg
            className="absolute inset-0 w-full h-full max-[900px]:hidden"
            aria-hidden="true"
            viewBox="0 0 560 560"
          >
            <circle
              className="stroke-primary-strong"
              cx="435"
              cy="125"
              r="170"
              fill="none"
              strokeWidth="2"
            />
            <circle
              className="stroke-primary-strong"
              cx="435"
              cy="125"
              r="215"
              fill="none"
              strokeWidth="2"
              opacity=".6"
            />
          </svg>
          <HeroCarousel />
        </div>
      </div>
    </section>
  );
}
