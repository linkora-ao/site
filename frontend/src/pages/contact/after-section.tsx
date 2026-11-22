export function AfterSection() {
  return (
    <section
      className="sec bg-background-alt border-t border-t-border border-b border-b-border"
      id="depois"
    >
      <div className="container">
        <div className="g2 stack grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-[clamp(53px,6.11vw,88px)] items-center">
          <div>
            <div className="eyebrow">Depois de enviares</div>
            <h2 className="disp h-lg display leading-[1.05] mt-[20px] text-[length:clamp(26px,3.47vw,50px)]">
              Sabes sempre o que vem a seguir.
            </h2>
            <div className="mt-[clamp(29px,3.33vw,48px)] relative">
              <div
                className="absolute left-[25px] top-[30px] bottom-[clamp(36px,4.17vw,60px)] w-[2px] bg-border"
                aria-hidden="true"
              ></div>
              <div className="nx">
                <span className="nn">01</span>
                <div>
                  <div className="disp display text-[26px] pt-[12px]">
                    Lemos o teu pedido
                  </div>
                  <p className="mt-[8px] text-[17px] leading-[1.6] text-muted-foreground max-w-[440px]">
                    Respondemos em 1 dia útil, por email ou WhatsApp, com as
                    perguntas que faltam.
                  </p>
                </div>
              </div>
              <div className="nx">
                <span className="nn">02</span>
                <div>
                  <div className="disp display text-[26px] pt-[12px]">
                    Conversamos
                  </div>
                  <p className="mt-[8px] text-[17px] leading-[1.6] text-muted-foreground max-w-[440px]">
                    Uma conversa curta, por chamada ou presencialmente em
                    Luanda, para perceber o teu contexto.
                  </p>
                </div>
              </div>
              <div className="nx">
                <span className="nn">03</span>
                <div>
                  <div className="disp display text-[26px] pt-[12px]">
                    Proposta por fases
                  </div>
                  <p className="mt-[8px] text-[17px] leading-[1.6] text-muted-foreground max-w-[440px]">
                    Recebes uma proposta clara, em kwanzas, com objectivos,
                    prazos e entregáveis. Sem compromisso.
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-[6px] text-[16.5px] leading-[1.6] text-muted-foreground max-w-[460px]">
              Falas sempre com a equipa que vai construir com rigor.
            </p>
          </div>
          <div className="reveal relative rounded-[20px] overflow-hidden bg-primary-soft shadow-card min-h-[420px]">
            <svg
              className="absolute inset-0"
              viewBox="0 0 520 500"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <circle
                className="stroke-primary-strong"
                cx="300"
                cy="260"
                r="130"
                fill="none"
                strokeWidth="2"
              />
              <circle
                className="stroke-primary-strong"
                cx="300"
                cy="260"
                r="200"
                fill="none"
                strokeWidth="2"
                opacity=".6"
              />
              <circle className="fill-accent" cx="300" cy="260" r="96" />
              <rect
                className="fill-primary"
                x="0"
                y="270"
                width="520"
                height="230"
              />
              <path
                className="stroke-primary-strong"
                d="M0 292 Q 65 284 130 292 T 260 292 T 390 292 T 520 292"
                fill="none"
                strokeWidth="2"
              />
              <path
                className="stroke-primary-strong"
                d="M0 326 Q 65 318 130 326 T 260 326 T 390 326 T 520 326"
                fill="none"
                strokeWidth="2"
              />
              <path
                className="stroke-primary-strong"
                d="M0 364 Q 65 356 130 364 T 260 364 T 390 364 T 520 364"
                fill="none"
                strokeWidth="2"
              />
              <path
                className="stroke-primary-strong"
                d="M0 408 Q 65 400 130 408 T 260 408 T 390 408 T 520 408"
                fill="none"
                strokeWidth="2"
              />
              <path
                className="stroke-accent"
                d="M270 285h60M278 305h44M286 325h28"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute left-[32px] bottom-[30px] right-[32px] flex justify-between items-end gap-[16px] text-background">
              <div>
                <div className="disp display text-[length:clamp(26px,3.06vw,44px)] leading-[1]">
                  Luanda
                </div>
                <div className="mono font-mono text-[12.5px] text-muted-on-primary mt-[8px]">
                  8°50′ S · 13°14′ E
                </div>
              </div>
              {/* TODO: remove comment when have information */}
              {/* <span className="mono font-mono text-[12px] text-accent">
                [Morada]
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
