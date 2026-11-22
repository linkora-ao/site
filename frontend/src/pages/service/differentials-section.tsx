import type { ServiceSectionProps } from "./types";

export function DifferentialsSection({
  service,
  content,
}: ServiceSectionProps) {
  return (
    <section className="sec bg-background" id="diferenciais">
      <div className="container">
        <div className="g2 stack grid grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] gap-[clamp(48px,5.56vw,80px)] items-start">
          <div className="sticky max-[600px]:relative top-[clamp(78px,9.03vw,130px)] max-[600px]:top-0">
            <div className="eyebrow">Porquê a Linkora</div>
            <h2 className="disp h-lg display text-[length:clamp(33px,3.47vw,50px)] leading-[1.05] mt-[20px]">
              {service.title} com padrões que não negociamos.
            </h2>
            <p className="mt-[22px] text-[18px] leading-[1.65] text-muted-foreground max-w-[400px]">
              Quatro compromissos que se aplicam a este serviço do primeiro ao
              último dia.
            </p>
          </div>
          <div>
            {content.differentials.map((d, i) => (
              <div key={d.title} className="dfr reveal">
                <span className="ix">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <div className="disp display text-[28px]">{d.title}</div>
                  <p className="mt-[10px] text-[17px] leading-[1.6] text-muted-foreground max-w-[520px]">
                    {d.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
