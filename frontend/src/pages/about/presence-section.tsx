import { Icon } from "@components/atoms/icon";

export function PresenceSection() {
  return (
    <section className="sec bg-background" id="presenca">
      <div className="container">
        <div className="stack grid grid-cols-[minmax(0,.95fr)_minmax(0,1.05fr)] gap-[clamp(53px,6.11vw,88px)] items-center">
          <div className="reveal relative rounded-[20px] overflow-hidden bg-primary-soft shadow-card min-h-[500px]">
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
            <div className="absolute left-[32px] bottom-[30px] right-[32px] flex justify-between items-end gap-[16px]">
              <div>
                <div className="disp display text-[length:clamp(26px,3.06vw,44px)] leading-[1]">
                  Luanda
                </div>
                <div className="mono font-mono text-[12.5px] text-muted-on-primary mt-[8px]">
                  8°50′ S · 13°14′ E
                </div>
              </div>
              <span className="mono font-mono text-[12px] text-accent">
                Angola
              </span>
            </div>
          </div>
          <div>
            <div className="eyebrow">Presença local</div>
            <h2 className="disp h-lg display leading-[1.05] mt-[20px] text-[length:clamp(26px,3.75vw,54px)]">
              Somos de Luanda. E isso muda o que fazemos.
            </h2>
            <div className="mt-[44px]">
              <div className="loc reveal">
                <span className="lc">
                  <Icon name="clock" size={22} className="ico size-[22px]" />
                </span>
                <div>
                  <div className="disp display text-[25px]">
                    Suporte no teu fuso horário
                  </div>
                  <p className="mt-[8px] text-[17px] leading-[1.6] text-muted-foreground max-w-[480px]">
                    Equipa em Luanda, em português de Angola, disponível quando
                    o teu negócio funciona.
                  </p>
                </div>
              </div>
              <div className="loc reveal">
                <span className="lc">
                  <Icon name="banknote" size={22} className="ico size-[22px]" />
                </span>
                <div>
                  <div className="disp display text-[25px]">
                    Tudo em kwanzas
                  </div>
                  <p className="mt-[8px] text-[17px] leading-[1.6] text-muted-foreground max-w-[480px]">
                    Propostas, facturação e propinas na moeda com que trabalhas.
                  </p>
                </div>
              </div>
              <div className="loc reveal">
                <span className="lc">
                  <Icon name="map-pin" size={22} className="ico size-[22px]" />
                </span>
                <div>
                  <div className="disp display text-[25px]">
                    Contexto angolano
                  </div>
                  <p className="mt-[8px] text-[17px] leading-[1.6] text-muted-foreground max-w-[480px]">
                    Conhecemos a realidade das PMEs e desenhamos para ela.
                  </p>
                </div>
              </div>
              <div className="loc reveal">
                <span className="lc">
                  <Icon name="users" size={22} className="ico size-[22px]" />
                </span>
                <div>
                  <div className="disp display text-[25px]">
                    Presença quando faz falta
                  </div>
                  <p className="mt-[8px] text-[17px] leading-[1.6] text-muted-foreground max-w-[480px]">
                    Reunimos presencialmente em Luanda sempre que o projecto o
                    pede.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
