import { Icon } from "@components/atoms/icon";
import type { ServiceSectionProps } from "./types";

const ALWAYS_INCLUDED = [
  "Código-fonte e documentação",
  "Testes antes de cada entrega",
  "Acompanhamento depois do lançamento",
  "Formação à tua equipa",
];

export function IncludedSection({ content }: ServiceSectionProps) {
  return (
    <section className="sec bg-background-alt border-t border-t-border border-b border-b-border" id="incluido">
      <div className="container">
        <div className="flex flex-wrap justify-between items-end gap-[24px]">
          <div>
            <div className="eyebrow">O que está incluído</div>
            <h2 className="disp h-lg display text-[length:clamp(34px,3.75vw,54px)] leading-[1.05] mt-[20px]">O que recebes, em concreto.</h2>
          </div>
          <p className="body max-w-[400px] text-[17.5px]">
            Cada projecto é desenhado à tua medida. Estes são os blocos com que o construímos.
          </p>
        </div>
        <div className="g4 stack grid grid-cols-[repeat(3,minmax(0,1fr))] gap-y-[44px] gap-x-[36px] mt-[clamp(36px,4.17vw,60px)]">
          {content.included.map((item) => (
            <div key={item.title} className="mt2 reveal">
              <span className="tb">
                <Icon name={item.icon} size={24} />
              </span>
              <div className="disp display text-[24px] mt-[22px]">{item.title}</div>
              <p className="mt-[8px] text-[16px] leading-[1.55] text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="on-n reveal stack mt-[28px] bg-primary text-background rounded-[14px] py-[30px] px-[clamp(24px,2.5vw,36px)] grid grid-cols-[auto_minmax(0,1fr)] gap-y-[20px] gap-x-[clamp(29px,3.33vw,48px)] items-center">
          <div className="disp display text-[24px]">Sempre incluído</div>
          <div className="flex flex-wrap gap-y-[14px] gap-x-[36px]">
            {ALWAYS_INCLUDED.map((t) => (
              <div key={t} className="flex gap-[12px] items-center font-semibold text-[16px]">
                <span className="rounded-full bg-accent text-primary inline-flex items-center justify-center flex-none size-[26px]">
                  <Icon name="check" size={14} />
                </span>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
