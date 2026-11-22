import type { ServiceSectionProps } from "./types";

const COMMITMENTS = [
  { value: "99,99%", label: "Disponibilidade-alvo, monitorizada" },
  { value: "Luanda", label: "Equipa e suporte locais" },
  { value: "Kz", label: "Propostas e facturação em kwanzas" },
  { value: "100%", label: "Código e documentação teus" },
];

const CASE_ROWS = [
  ["Desafio", "challenge"],
  ["Construímos", "built"],
  ["Mudou", "changed"],
] as const;

export function TrustSection({ content }: ServiceSectionProps) {
  const { caseStudy: cs } = content;
  return (
    <section
      className="sec bg-background-alt border-t border-t-border border-b border-b-border"
      id="confianca"
    >
      <div className="container">
        <div className="max-w-[760px]">
          <div className="eyebrow">Confiança</div>
          <h2 className="disp h-lg display text-[length:clamp(34px,3.75vw,54px)] leading-[1.05] mt-[20px]">
            Compromissos que podes verificar.
          </h2>
        </div>
        <div className="cfs mt-[clamp(34px,3.89vw,56px)]">
          {COMMITMENTS.map((c) => (
            <div key={c.value} className="reveal">
              <div className="disp display text-[length:clamp(26px,3.06vw,44px)] leading-[1]">
                {c.value}
              </div>
              <p className="mt-[14px] text-[15.5px] leading-[1.5] text-muted-foreground max-w-[200px]">
                {c.label}
              </p>
            </div>
          ))}
        </div>
        <div className="g2 stack grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-[clamp(53px,6.11vw,88px)] mt-[clamp(53px,6.11vw,88px)] items-start">
          <div>
            <h3 className="disp display text-[length:clamp(26px,2.5vw,36px)] leading-[1.08]">
              Caso de estudo
            </h3>
            <div className="reveal mt-[32px] bg-card border border-border rounded-[14px] p-[clamp(21px,2.22vw,32px)] shadow-[var(--shadow-card),inset_0_3px_0_0_var(--accent)]">
              <div className="flex justify-between items-center gap-[12px]">
                <span className="mono font-mono text-[12px] tracking-[.1em] uppercase text-muted-foreground">
                  {cs.sector}
                </span>
                <span className="mono font-mono text-[11px] tracking-[.08em] uppercase text-accent-dark border border-dashed border-border-strong rounded-full py-[4px] px-[10px]">
                  Exemplo de caso
                </span>
              </div>
              <div className="disp display mt-[20px] text-[30px] leading-[1.08]">
                {cs.client}
              </div>
              <p className="mt-[10px] mb-[22px] text-[17px] leading-[1.5] text-primary font-medium">
                {cs.headline}
              </p>
              {CASE_ROWS.map(([label, key]) => (
                <div
                  key={key}
                  className="grid grid-cols-[104px_minmax(0,1fr)] gap-[16px] py-[16px] px-0 border-t border-t-border"
                >
                  <span className="mono font-mono text-[11.5px] tracking-[.1em] uppercase text-accent-dark pt-[3px]">
                    {label}
                  </span>
                  <span className="text-[15.5px] leading-[1.55] text-muted-foreground">
                    {cs[key]}
                  </span>
                </div>
              ))}
              <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[12px] mt-[8px]">
                {cs.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="bg-background-alt border border-border rounded-[10px] pt-[14px] pb-[16px] px-[14px]"
                  >
                    <div className="mono font-mono text-[26px] font-medium tracking-[-0.04em] leading-[1] text-primary">
                      {m.value}
                    </div>
                    <div className="mt-[8px] text-[13px] leading-[1.4] text-muted-foreground">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mono font-mono mt-[16px] text-[11.5px] leading-[1.5] text-muted-foreground">
                Cliente e valores fictícios, só para mostrar o formato. Serão
                substituídos por um caso real.
              </p>
            </div>
          </div>
          <div>
            <h3 className="disp display text-[length:clamp(26px,2.5vw,36px)] leading-[1.08]">
              Perguntas frequentes
            </h3>
            <div className="mt-[32px]">
              {content.faq.map((f, i) => (
                <details key={f.q} className="fq" open={i === 0}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
