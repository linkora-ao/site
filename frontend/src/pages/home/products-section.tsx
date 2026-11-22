import { Link } from "@tanstack/react-router";
import { ButtonLink } from "@components/molecules/button-link";
import { buttonVariants } from "@components/atoms/button";

export function ProductsSection() {
  return (
    <section
      className="sec bg-background-alt border-t border-t-border border-b border-b-border"
      id="produtos"
    >
      <div className="container">
        <div className="flex flex-wrap justify-between items-end gap-[24px]">
          <div>
            <div className="eyebrow">Produtos Linkora</div>
            <h2 className="disp h-lg display leading-[1.05] mt-[20px] text-[length:clamp(26px,3.75vw,54px)]">
              Software nosso,
              <br />
              mantido por nós.
            </h2>
          </div>
          <p className="m-0 max-w-[400px] text-[18px] leading-[1.65] text-muted-foreground">
            Além dos projectos à medida, a Linkora desenvolve produtos próprios.
            O primeiro já está em piloto.
          </p>
        </div>
        <div className="flex flex-wrap gap-y-[14px] gap-x-[28px] items-center mt-[28px]">
          <ButtonLink to="/produtos" variant="navy">
            Ver todos os produtos{" "}
            <span className="arr" aria-hidden="true">
              →
            </span>
          </ButtonLink>
          <Link to="/bove" className="lnk">
            Ir para a página da BOVE{" "}
            <span className="arr" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
        <div
          className="mt-[clamp(34px,3.89vw,56px)] bg-primary text-background rounded-[20px] overflow-hidden relative shadow-card"
          id="bove"
        >
          <svg
            className="absolute left-[50%] -top-[clamp(72px,8.33vw,120px)] -ml-[clamp(240px,27.78vw,400px)] size-[800px]"
            aria-hidden="true"
            viewBox="0 0 800 800"
          >
            <circle
              className="stroke-primary-strong"
              cx="400"
              cy="400"
              r="220"
              fill="none"
              strokeWidth="2"
            />
            <circle
              className="stroke-primary-strong"
              cx="400"
              cy="400"
              r="300"
              fill="none"
              strokeWidth="2"
              opacity=".7"
            />
            <circle
              className="stroke-primary-strong"
              cx="400"
              cy="400"
              r="380"
              fill="none"
              strokeWidth="2"
              opacity=".45"
            />
          </svg>
          <div className="relative flex justify-between items-center gap-[16px] py-[28px] px-[clamp(29px,3.06vw,44px)]">
            <span className="mono font-mono text-[13px] text-muted-on-primary">
              PRODUTO 01
            </span>
            <span className="inline-flex items-center gap-[10px] text-[14px] font-semibold text-background">
              <span
                className="rounded-full bg-accent size-[9px]"
                aria-hidden="true"
              ></span>
              Disponível em piloto
            </span>
          </div>
          <div className="relative text-center pt-[24px] pb-0 px-[clamp(29px,3.06vw,44px)]">
            <h3 className="disp display text-[length:clamp(79px,12.22vw,176px)] leading-[.9] text-accent">
              BOVE
            </h3>
            <p className="disp display mt-[18px] mr-auto ml-auto text-[length:clamp(26px,2.64vw,38px)] leading-[1.1] max-w-[760px]">
              A plataforma que gere o teu centro de formação.
            </p>
            <p className="mt-[20px] mr-auto ml-auto text-[19px] leading-[1.6] max-w-[620px] text-muted-on-primary">
              Multitenant: cada instituição tem o seu espaço, a sua identidade e
              os seus dados, numa plataforma estável, mantida pela Linkora.
            </p>
            <div className="flex flex-wrap justify-center gap-[14px] mt-[34px]">
              <a
                href="#contacto"
                className={buttonVariants({ variant: "primary", size: "lg" })}
              >
                Pedir demonstração
              </a>
              <a
                href="#contacto"
                className={buttonVariants({
                  variant: "outline-on-primary",
                  size: "lg",
                })}
              >
                Falar sobre o BOVE
              </a>
            </div>
          </div>
          <div className="pxm relative max-w-[940px] mt-[clamp(38px,4.44vw,64px)] mr-auto ml-auto py-0 px-[clamp(29px,3.06vw,44px)]">
            <div className="bg-card text-primary rounded-[12px_12px_0_0] shadow-[0_-10px_70px_-20px_rgba(0,0,0,.5)] overflow-hidden">
              <div className="flex items-center gap-[10px] py-[11px] px-[16px] bg-background-alt border-b border-b-border">
                <span
                  className="rounded-full bg-border-strong size-[9px]"
                  aria-hidden="true"
                ></span>
                <span
                  className="rounded-full bg-border-strong size-[9px]"
                  aria-hidden="true"
                ></span>
                <span
                  className="rounded-full bg-border-strong size-[9px]"
                  aria-hidden="true"
                ></span>
                <span className="mono font-mono ml-[8px] text-[12px] bg-white border border-border rounded-[6px] py-[3px] px-[10px] text-muted-foreground">
                  centrox.bove.ao
                </span>
              </div>
              <div className="flex min-h-[380px]">
                <div className="w-[164px] flex-none bg-primary py-[18px] px-[12px] grid gap-[4px] [align-content:start] text-[13px] font-semibold text-muted-on-primary">
                  <span className="disp display text-[18px] text-background pt-0 pb-[12px] px-[10px]">
                    BOVE
                  </span>
                  <span className="py-[9px] px-[10px] bg-primary-strong text-background rounded-[6px]">
                    Painel
                  </span>
                  <span className="py-[9px] px-[10px]">Turmas</span>
                  <span className="py-[9px] px-[10px]">Formandos</span>
                  <span className="py-[9px] px-[10px]">Finanças</span>
                  <span className="py-[9px] px-[10px]">Certificados</span>
                </div>
                <div className="flex-1 min-w-0 p-[20px] grid gap-[14px] [align-content:start]">
                  <div className="flex justify-between items-center">
                    <span className="disp display text-[22px]">
                      Painel · Centro X
                    </span>
                    <span className="text-[12px] text-muted-foreground">
                      Novembro 2026
                    </span>
                  </div>
                  <div className="grid grid-cols-[repeat(4,minmax(0,1fr))] gap-[10px]">
                    <div className="border border-border rounded-[8px] p-[12px]">
                      <div className="text-[11px] font-semibold text-muted-foreground">
                        Formandos activos
                      </div>
                      <div className="mono font-mono text-[22px] font-medium mt-[6px]">
                        248
                      </div>
                    </div>
                    <div className="border border-border rounded-[8px] p-[12px]">
                      <div className="text-[11px] font-semibold text-muted-foreground">
                        Turmas em curso
                      </div>
                      <div className="mono font-mono text-[22px] font-medium mt-[6px]">
                        12
                      </div>
                    </div>
                    <div className="border border-border rounded-[8px] p-[12px]">
                      <div className="text-[11px] font-semibold text-muted-foreground">
                        Recebido no mês
                      </div>
                      <div className="mono font-mono text-[16px] font-medium mt-[10px] text-accent-dark">
                        1 850 000 Kz
                      </div>
                    </div>
                    <div className="border border-border rounded-[8px] p-[12px]">
                      <div className="text-[11px] font-semibold text-muted-foreground">
                        Presença média
                      </div>
                      <div className="mono font-mono text-[22px] font-medium mt-[6px]">
                        91%
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-[12px]">
                    <div className="border border-border rounded-[8px] p-[14px]">
                      <div className="text-[11.5px] font-bold">
                        Recebido esta semana
                      </div>
                      <div
                        className="flex items-end gap-[8px] h-[96px] mt-[12px]"
                        aria-hidden="true"
                      >
                        <span className="flex-1 h-[40%] bg-primary rounded-[3px_3px_0_0]"></span>
                        <span className="flex-1 h-[62%] bg-primary rounded-[3px_3px_0_0]"></span>
                        <span className="flex-1 h-[50%] bg-primary rounded-[3px_3px_0_0]"></span>
                        <span className="flex-1 h-[88%] bg-accent rounded-[3px_3px_0_0]"></span>
                        <span className="flex-1 h-[70%] bg-primary rounded-[3px_3px_0_0]"></span>
                        <span className="flex-1 h-[36%] bg-primary rounded-[3px_3px_0_0]"></span>
                        <span className="flex-1 h-[24%] bg-primary rounded-[3px_3px_0_0]"></span>
                      </div>
                    </div>
                    <div className="border border-border rounded-[8px] overflow-hidden text-[12.5px]">
                      <div className="py-[10px] px-[12px] border-b border-b-border font-bold text-[11.5px]">
                        Turmas em curso
                      </div>
                      <div className="flex justify-between py-[10px] px-[12px] border-b border-b-border">
                        <span className="font-semibold">
                          Informática de Gestão
                        </span>
                        <span className="mono font-mono">24</span>
                      </div>
                      <div className="flex justify-between py-[10px] px-[12px] border-b border-b-border">
                        <span className="font-semibold">Excel Avançado</span>
                        <span className="mono font-mono">18</span>
                      </div>
                      <div className="flex justify-between py-[10px] px-[12px]">
                        <span className="font-semibold">
                          Contabilidade Geral
                        </span>
                        <span className="mono font-mono">22</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="stack relative grid grid-cols-[repeat(4,minmax(0,1fr))] bg-primary-soft border-t border-t-border-on-primary">
            <div className="py-[28px] px-[clamp(21px,2.22vw,32px)] border-r border-r-border-on-primary">
              <div className="disp display text-[22px]">Multitenant</div>
              <p className="mt-[8px] text-[14.5px] leading-[1.5] text-muted-on-primary">
                Um espaço próprio por instituição, em subdomínio.
              </p>
            </div>
            <div className="py-[28px] px-[clamp(21px,2.22vw,32px)] border-r border-r-border-on-primary">
              <div className="disp display text-[22px]">Turmas e horários</div>
              <p className="mt-[8px] text-[14.5px] leading-[1.5] text-muted-on-primary">
                Inscrições, turmas e formadores organizados.
              </p>
            </div>
            <div className="py-[28px] px-[clamp(21px,2.22vw,32px)] border-r border-r-border-on-primary">
              <div className="disp display text-[22px]">Propinas</div>
              <p className="mt-[8px] text-[14.5px] leading-[1.5] text-muted-on-primary">
                Pagamentos e recibos em kwanzas.
              </p>
            </div>
            <div className="py-[28px] px-[clamp(21px,2.22vw,32px)]">
              <div className="disp display text-[22px]">Certificados</div>
              <p className="mt-[8px] text-[14.5px] leading-[1.5] text-muted-on-primary">
                Documentos e relatórios prontos a emitir.
              </p>
            </div>
          </div>
          <div className="relative flex flex-wrap items-center justify-between gap-y-[16px] gap-x-[32px] py-[28px] px-[clamp(29px,3.06vw,44px)] bg-primary-deep">
            <div>
              <div className="disp display text-[24px]">
                Piloto BOVE: 2 vagas para centros de formação
              </div>
              <p className="mt-[6px] text-[15px] leading-[1.5] text-muted-on-primary max-w-[560px]">
                Acompanhamento directo da equipa e condições de lançamento para
                os dois primeiros centros.
              </p>
            </div>
            <a
              href="#contacto"
              className={buttonVariants({ variant: "primary" })}
            >
              Candidatar-me
            </a>
          </div>
        </div>
        {/* TODO: think if its necessary */}
        <div className="hidden">
          <div className="mt-[clamp(34px,3.89vw,56px)] flex flex-wrap justify-between items-baseline gap-[12px]">
            <div className="disp display text-[26px]">Catálogo</div>
            <a href="#contacto" className="lnk">
              Quero ser dos primeiros a saber dos próximos produtos{" "}
              <span className="arr" aria-hidden="true">
                →
              </span>
            </a>
          </div>
          <div className="stack grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[20px] mt-[20px]">
            <a
              href="#bove"
              className="svc flex flex-col gap-[8px] min-h-[150px] py-[24px] px-[26px] no-underline text-inherit shadow-[inset_0_3px_0_0_var(--accent)]"
            >
              <span className="mono font-mono text-[12px] text-accent-dark">
                01 · DISPONÍVEL
              </span>
              <span className="disp display text-[30px]">BOVE</span>
              <span className="text-[15px] leading-[1.5] text-muted-foreground">
                Gestão para centros de formação e instituições de ensino.
              </span>
            </a>
            <div className="tile">
              <span className="mono font-mono text-[12px] text-muted-foreground">
                02 · EM DESENVOLVIMENTO
              </span>
              <span className="disp display text-[26px] text-[#7A7468]">
                [Próximo produto]
              </span>
              <span className="text-[15px] leading-[1.5] text-muted-foreground">
                Espaço reservado. Nome e descrição por anunciar.
              </span>
            </div>
            <div className="tile">
              <span className="mono font-mono text-[12px] text-muted-foreground">
                03 · NO PLANO
              </span>
              <span className="disp display text-[26px] text-[#7A7468]">
                [Produto 03]
              </span>
              <span className="text-[15px] leading-[1.5] text-muted-foreground">
                Espaço reservado. Nome e descrição por anunciar.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
