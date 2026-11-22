export function CredibilitySection() {
  return (
    <section
      className="relative z-[2] -mt-[clamp(43px,5vw,72px)]"
      aria-label="Credibilidade"
    >
      <div className="container">
        <div className="stack grid grid-cols-[repeat(4,minmax(0,1fr))] bg-card rounded-[var(--radius)] shadow-card border border-border">
          <div className="py-[clamp(21px,2.22vw,32px)] px-[28px] border-r border-r-border">
            <div className="disp display text-[length:clamp(26px,3.06vw,44px)]">
              99,99%
            </div>
            <div
              className="w-[28px] h-[3px] bg-accent mt-[14px] mb-[12px] rounded-[2px]"
              aria-hidden="true"
            ></div>
            <p className="m-0 text-[15px] leading-[1.5] text-muted-foreground">
              Disponibilidade-alvo, com monitorização contínua.
            </p>
          </div>
          <div className="py-[clamp(21px,2.22vw,32px)] px-[28px] border-r border-r-border">
            <div className="disp display text-[length:clamp(26px,3.06vw,44px)]">
              Luanda
            </div>
            <div
              className="w-[28px] h-[3px] bg-accent mt-[14px] mb-[12px] rounded-[2px]"
              aria-hidden="true"
            ></div>
            <p className="m-0 text-[15px] leading-[1.5] text-muted-foreground">
              Equipa e suporte aqui, em hora de Angola.
            </p>
          </div>
          <div className="py-[clamp(21px,2.22vw,32px)] px-[28px] border-r border-r-border">
            <div className="disp display text-[length:clamp(26px,3.06vw,44px)]">
              Kwanzas
            </div>
            <div
              className="w-[28px] h-[3px] bg-accent mt-[14px] mb-[12px] rounded-[2px]"
              aria-hidden="true"
            ></div>
            <p className="m-0 text-[15px] leading-[1.5] text-muted-foreground">
              Propostas e facturação em AOA, sem conversões.
            </p>
          </div>
          <div className="py-[clamp(21px,2.22vw,32px)] px-[28px]">
            <div className="disp display text-[length:clamp(26px,3.06vw,44px)]">
              Código seu
            </div>
            <div
              className="w-[28px] h-[3px] bg-accent mt-[14px] mb-[12px] rounded-[2px]"
              aria-hidden="true"
            ></div>
            <p className="m-0 text-[15px] leading-[1.5] text-muted-foreground">
              Entregue com documentação em cada projecto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
