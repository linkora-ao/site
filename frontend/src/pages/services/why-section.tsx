import { buttonVariants } from "@components/atoms/button";
import { Icon } from "@components/atoms/icon";

export function WhySection() {
  return (
    <section
      className="sec on-n bg-primary text-background relative overflow-clip"
      id="porque"
    >
      <div
        className="absolute -left-[clamp(96px,11.11vw,160px)] -top-[clamp(96px,11.11vw,160px)] rounded-full border-2 border-primary-strong size-[420px]"
        aria-hidden="true"
      ></div>
      <div className="container relative">
        <div className="stack grid grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] gap-[clamp(53px,6.11vw,88px)] items-start">
          <div className="sticky max-[600px]:relative top-[clamp(78px,9.03vw,130px)] max-[600px]:top-0">
            <div className="eyebrow">Porquê a Linkora</div>
            <h2 className="disp h-lg display leading-[1.05] mt-[20px] text-[length:clamp(26px,3.75vw,54px)]">
              O que não muda, seja qual for o serviço.
            </h2>
            <p className="mt-[24px] text-[18px] leading-[1.65] text-muted-on-primary max-w-[420px]">
              Cinco compromissos que se aplicam a todos os projectos: do website
              mais simples ao sistema de gestão mais exigente.
            </p>
            <a
              href="#contacto"
              className={buttonVariants({
                variant: "primary",
                className: "mt-[36px] max-[600px]:my-[36px]",
              })}
            >
              Pedir proposta
            </a>
          </div>
          <div>
            <div className="dfr reveal">
              <span className="dfc">
                <Icon name="check" className="ico" />
              </span>
              <div>
                <div className="disp display text-[28px] leading-[1.1]">
                  O código é seu
                </div>
                <p className="mt-[10px] text-[17px] leading-[1.6] text-muted-on-primary max-w-[520px]">
                  Entregamos o código-fonte e a documentação. Sem dependências
                  escondidas nem reféns tecnológicos.
                </p>
              </div>
            </div>
            <div className="dfr reveal">
              <span className="dfc">
                <Icon name="check" className="ico" />
              </span>
              <div>
                <div className="disp display text-[28px] leading-[1.1]">
                  Suporte em Luanda
                </div>
                <p className="mt-[10px] text-[17px] leading-[1.6] text-muted-on-primary max-w-[520px]">
                  Equipa local, no teu fuso horário e na tua língua. Falas com
                  quem construiu.
                </p>
              </div>
            </div>
            <div className="dfr reveal">
              <span className="dfc">
                <Icon name="check" className="ico" />
              </span>
              <div>
                <div className="disp display text-[28px] leading-[1.1]">
                  Tudo em kwanzas
                </div>
                <p className="mt-[10px] text-[17px] leading-[1.6] text-muted-on-primary max-w-[520px]">
                  Propostas e facturação em kwanzas, sem surpresas no contrato.
                </p>
              </div>
            </div>
            <div className="dfr reveal">
              <span className="dfc">
                <Icon name="check" className="ico" />
              </span>
              <div>
                <div className="disp display text-[28px] leading-[1.1]">
                  Proposta por fases
                </div>
                <p className="mt-[10px] text-[17px] leading-[1.6] text-muted-on-primary max-w-[520px]">
                  Objectivos, prazos e entregáveis fechados por fase. Sabes o
                  que recebes antes de avançar.
                </p>
              </div>
            </div>
            <div className="dfr reveal">
              <span className="dfc">
                <Icon name="check" className="ico" />
              </span>
              <div>
                <div className="disp display text-[28px] leading-[1.1]">
                  Estabilidade medida
                </div>
                <p className="mt-[10px] text-[17px] leading-[1.6] text-muted-on-primary max-w-[520px]">
                  Monitorização, backups e alertas desde o primeiro dia em
                  produção.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
