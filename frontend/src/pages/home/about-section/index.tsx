import { SunIcon } from "./atoms/sun-icon";

export function AboutSection() {
  return (
    <section className="sec" id="sobre">
      <div className="container stack grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-[clamp(48px,5.56vw,80px)] items-center">
        <div className="relative h-[560px] bg-primary rounded-[var(--radius)] overflow-hidden shadow-card">
          <SunIcon />

          <div className="absolute left-[28px] bottom-[28px] right-[28px] flex justify-between items-end text-background">
            <span className="disp display text-[30px]">Luanda</span>
            <span className="mono font-mono text-[12px] text-muted-on-primary">
              8°50′ S · 13°14′ E
            </span>
          </div>
        </div>
        <div>
          <div className="eyebrow">Quem somos</div>
          <h2 className="disp h-lg display leading-[1.05] mt-[20px] text-[length:clamp(26px,3.75vw,54px)]">
            Tecnologia feita em Angola, com o padrão e rigor internacional.
          </h2>
          <p className="body mt-[26px] max-w-[600px]">
            A Linkora nasceu em Luanda para provar que uma software house
            angolana compete pela qualidade e pela originalidade, não pelo
            tamanho. Trabalhamos com PMEs que precisam de sistemas que não param
            de funcionar.
          </p>
          <div className="mt-[36px] grid">
            <div className="flex gap-[20px] py-[20px] px-0 border-t border-t-border">
              <span className="disp display text-[28px] text-accent-dark min-w-[44px]">
                01
              </span>
              <div>
                <div className="disp display text-[21px]">
                  Funcional antes de decorativo
                </div>
                <p className="mt-[6px] text-[15.5px] text-muted-foreground leading-[1.55]">
                  Cada ecrã existe porque resolve uma tarefa real.
                </p>
              </div>
            </div>
            <div className="flex gap-[20px] py-[20px] px-0 border-t border-t-border">
              <span className="disp display text-[28px] text-accent-dark min-w-[44px]">
                02
              </span>
              <div>
                <div className="disp display text-[21px]">
                  Estável antes de rápido
                </div>
                <p className="mt-[6px] text-[15.5px] text-muted-foreground leading-[1.55]">
                  Entregamos o que aguenta o dia-a-dia, não o que impressiona na
                  demo.
                </p>
              </div>
            </div>
            <div className="flex gap-[20px] py-[20px] px-0 border-t border-t-border border-b border-b-border">
              <span className="disp display text-[28px] text-accent-dark min-w-[44px]">
                03
              </span>
              <div>
                <div className="disp display text-[21px]">
                  Simples de usar e rigoroso por dentro
                </div>
                <p className="mt-[6px] text-[15.5px] text-muted-foreground leading-[1.55]">
                  Interfaces claras sobre código limpo, testado e documentado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
