export function CommitmentsSection() {
  return (
    <section className="sec on-n bg-primary text-background" id="compromissos">
      <div className="container">
        <div className="flex flex-wrap justify-between items-end gap-[24px]">
          <div>
            <div className="eyebrow">Porquê a Linkora</div>
            <h2 className="disp h-lg display leading-[1.05] mt-[20px] text-[length:clamp(26px,3.75vw,54px)]">
              Compromissos
              <br />
              que podes exigir.
            </h2>
          </div>
          <p className="m-0 max-w-[400px] text-[18px] leading-[1.65] text-muted-on-primary">
            Rigor não se declara. Escreve-se no contrato e cumpre-se, entrega a
            entrega.
          </p>
        </div>
        <div className="stack grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[24px] mt-[clamp(38px,4.44vw,64px)]">
          <article className="svd bg-accent border-accent text-primary min-h-[340px]">
            <svg
              className="absolute right-[24px] top-[24px] size-[76px]"
              aria-hidden="true"
              viewBox="0 0 80 80"
            >
              <rect
                className="fill-primary"
                x="4"
                y="12"
                width="72"
                height="56"
                rx="10"
              />
              <path
                className="stroke-accent"
                d="M30 28 L18 40 L30 52 M50 28 L62 40 L50 52"
                fill="none"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="mono font-mono text-[13px] font-medium">01</span>
            <h3 className="disp display text-[32px] mt-auto pt-[clamp(64px,6.94vw,100px)]">
              O código é seu
            </h3>
            <p className="m-0 text-[16.5px] leading-[1.55]">
              Entregue com documentação e passagem de conhecimento, em cada
              projecto.
            </p>
            <a
              href="#servicos"
              className="lnk self-start mt-[6px] [border-bottom-color:var(--primary)]"
            >
              Ver o que entregamos{" "}
              <span className="arr" aria-hidden="true">
                →
              </span>
            </a>
          </article>
          <article className="svd min-h-[340px]">
            <svg
              className="absolute right-[24px] top-[24px] size-[76px]"
              aria-hidden="true"
              viewBox="0 0 80 80"
            >
              <circle
                className="stroke-background"
                cx="40"
                cy="40"
                r="34"
                fill="none"
                strokeWidth="3"
              />
              <text
                className="fill-accent"
                x="40"
                y="49"
                textAnchor="middle"
                fontFamily="Schibsted Grotesk,sans-serif"
                fontWeight="800"
                fontSize="26"
              >
                Kz
              </text>
            </svg>
            <span className="mono font-mono text-[13px] text-accent">02</span>
            <h3 className="disp display text-[32px] mt-auto pt-[clamp(64px,6.94vw,100px)]">
              Tudo em kwanzas
            </h3>
            <p className="m-0 text-[16.5px] leading-[1.55] text-muted-on-primary">
              Proposta e facturação em AOA, sem conversões nem custos
              escondidos.
            </p>
            <a href="#contacto" className="lnk self-start mt-[6px]">
              Pedir proposta{" "}
              <span className="arr" aria-hidden="true">
                →
              </span>
            </a>
          </article>
          <article className="svd min-h-[340px]">
            <svg
              className="absolute right-[24px] top-[24px] size-[76px]"
              aria-hidden="true"
              viewBox="0 0 80 80"
            >
              <rect
                className="fill-background"
                x="4"
                y="8"
                width="30"
                height="14"
                rx="4"
              />
              <rect
                className="fill-accent"
                x="18"
                y="33"
                width="30"
                height="14"
                rx="4"
              />
              <rect
                className="fill-primary-strong stroke-background"
                x="32"
                y="58"
                width="44"
                height="14"
                rx="4"
                strokeWidth="2"
              />
            </svg>
            <span className="mono font-mono text-[13px] text-accent">03</span>
            <h3 className="disp display text-[32px] mt-auto pt-[clamp(64px,6.94vw,100px)]">
              Proposta por fases
            </h3>
            <p className="m-0 text-[16.5px] leading-[1.55] text-muted-on-primary">
              Âmbito, prazos e valores por escrito, fase a fase. Só avanças
              quando estiveres confortável.
            </p>
            <a href="#processo" className="lnk self-start mt-[6px]">
              Ver as quatro fases{" "}
              <span className="arr" aria-hidden="true">
                →
              </span>
            </a>
          </article>
          <article className="svd min-h-[340px]">
            <svg
              className="absolute right-[24px] top-[20px] size-[76px]"
              aria-hidden="true"
              viewBox="0 0 80 80"
            >
              <path
                className="fill-background"
                d="M40 74 C40 74 12 48 12 30 A28 28 0 0 1 68 30 C68 48 40 74 40 74 Z"
              />
              <circle className="fill-accent" cx="40" cy="30" r="11" />
            </svg>
            <span className="mono font-mono text-[13px] text-accent">04</span>
            <h3 className="disp display text-[32px] mt-auto pt-[clamp(64px,6.94vw,100px)]">
              Suporte em Luanda
            </h3>
            <p className="m-0 text-[16.5px] leading-[1.55] text-muted-on-primary">
              Falas com quem constrói o sistema, na tua língua e no teu fuso
              horário.
            </p>
            <a href="#contacto" className="lnk self-start mt-[6px]">
              Falar com a equipa{" "}
              <span className="arr" aria-hidden="true">
                →
              </span>
            </a>
          </article>
          <article className="svd min-h-[340px]">
            <svg
              className="absolute right-[24px] top-[24px] size-[76px]"
              aria-hidden="true"
              viewBox="0 0 80 80"
            >
              <rect
                className="stroke-background"
                x="4"
                y="12"
                width="72"
                height="56"
                rx="10"
                fill="none"
                strokeWidth="3"
              />
              <path
                className="stroke-accent"
                d="M10 42 H26 L32 26 L42 56 L50 38 H70"
                fill="none"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="mono font-mono text-[13px] text-accent">05</span>
            <h3 className="disp display text-[32px] mt-auto pt-[clamp(64px,6.94vw,100px)]">
              Estabilidade medida
            </h3>
            <p className="m-0 text-[16.5px] leading-[1.55] text-muted-on-primary">
              Monitorização, backups e deploys controlados, com
              disponibilidade-alvo de 99,99%.
            </p>
            <a href="#produtos" className="lnk self-start mt-[6px]">
              Ver o BOVE em produção{" "}
              <span className="arr" aria-hidden="true">
                →
              </span>
            </a>
          </article>
          <article className="svd min-h-[340px]">
            <svg
              className="absolute right-[24px] top-[20px] size-[76px]"
              aria-hidden="true"
              viewBox="0 0 80 80"
            >
              <path
                className="fill-background"
                d="M40 6 L68 16 V38 C68 56 56 68 40 74 C24 68 12 56 12 38 V16 Z"
              />
              <path
                className="stroke-primary"
                d="M27 40 L36 49 L54 30"
                fill="none"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="mono font-mono text-[13px] text-accent">06</span>
            <h3 className="disp display text-[32px] mt-auto pt-[clamp(64px,6.94vw,100px)]">
              Acompanhamento pós-lançamento
            </h3>
            <p className="m-0 text-[16.5px] leading-[1.55] text-muted-on-primary">
              Ficamos contigo depois do deploy: correcções, suporte e evolução
              contínua.
            </p>
            <a href="#processo" className="lnk self-start mt-[6px]">
              Conhecer o processo{" "}
              <span className="arr" aria-hidden="true">
                →
              </span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
