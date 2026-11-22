import type { ServiceSectionProps } from "./types";

export function HowSection({ content }: ServiceSectionProps) {
  return (
    <section className="sec on-n bg-primary text-background relative overflow-clip" id="como">
      <div
        className="absolute -left-[clamp(108px,12.5vw,180px)] -top-[clamp(108px,12.5vw,180px)] rounded-full border-2 border-primary-strong size-[480px]"
        aria-hidden="true"
      ></div>
      <div className="container relative">
        <div className="g2 stack grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-[clamp(43px,5vw,72px)] items-end">
          <div>
            <div className="eyebrow">Como funciona</div>
            <h2 className="disp h-lg display text-[length:clamp(34px,3.75vw,54px)] leading-[1.05] mt-[20px]">
              Quatro fases. Sabes o que fazemos e o que te cabe.
            </h2>
          </div>
          <p className="m-0 text-[19px] leading-[1.65] text-muted-on-primary max-w-[500px]">
            Só avanças para a fase seguinte quando estás de acordo com a anterior.
          </p>
        </div>
        <div className="g4 stack grid grid-cols-[repeat(4,minmax(0,1fr))] gap-[20px] mt-[clamp(38px,4.44vw,64px)]">
          {content.steps.map((step, i) => (
            <div key={step.title} className="sp reveal">
              <div className="sn">{String(i + 1).padStart(2, "0")}</div>
              <div className="disp display text-[26px] mt-[22px]">{step.title}</div>
              <div className="mt-[20px]">
                <div className="lb text-accent">Nós</div>
                <p className="mt-[6px] text-[15.5px] leading-[1.55] text-background">{step.us}</p>
              </div>
              <div className="mt-[16px] pt-[16px] border-t border-t-border-on-primary">
                <div className="lb text-muted-on-primary">Tu</div>
                <p className="mt-[6px] text-[15.5px] leading-[1.55] text-muted-on-primary">{step.you}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
