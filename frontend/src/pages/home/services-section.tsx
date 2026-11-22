import { Link } from "@tanstack/react-router";
import { buttonVariants } from "@components/atoms/button";

export function ServicesSection() {
  return (
    <section className="sec bg-background-alt border-t border-t-border border-b border-b-border" id="servicos">
      <div className="container">
        <div className="flex flex-wrap justify-between items-end gap-[24px]">
          <div>
            <div className="eyebrow">Serviços</div>
            <h2 className="disp h-lg display leading-[1.05] mt-[20px] text-[length:clamp(26px,3.75vw,54px)]">
              O que construímos
              <br />
              para o teu negócio.
            </h2>
          </div>
          <a href="#contacto" className={buttonVariants({ variant: "navy" })}>
            Falar sobre o teu projecto
          </a>
        </div>
        <div className="stkwrap mt-[clamp(38px,4.44vw,64px)]">
          <article className="stk b1 top-[clamp(62px,7.22vw,104px)] bg-primary text-background">
            <div className="stx">
              <div className="r1 flex justify-between items-center">
                <span className="mono font-mono text-[13px] text-accent">01 / 06</span>
              </div>
              <h3 className="disp r1 display text-[length:clamp(26px,3.47vw,50px)] mt-auto">Plataformas web</h3>
              <p className="r2 m-0 text-[18px] leading-[1.55] max-w-[460px] text-muted-on-primary">
                Aplicações completas, seguras e preparadas para crescer: do painel de gestão ao portal do cliente.
              </p>
              <div className="r3 flex flex-wrap items-center justify-between gap-[16px] mt-[8px]">
                <div className="flex flex-wrap gap-[8px] text-muted-on-primary">
                  <span className="chip">multitenant</span>
                  <span className="chip">APIs</span>
                  <span className="chip">cloud / VPS</span>
                </div>
                <Link to="/servicos/$slug" params={{ slug: "web" }} className="lnk [border-bottom-color:var(--accent)]">
                  Ver serviço{" "}
                  <span className="arr" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </div>
            <div className="sta bg-primary-soft">
              <div className="r4">
                <svg viewBox="0 0 160 130" width="250" height="203" aria-hidden="true">
                  <rect className="fill-border-on-primary" x="40" y="6" width="110" height="78" rx="10" />
                  <rect className="fill-accent" x="22" y="26" width="110" height="78" rx="10" />
                  <rect className="fill-background" x="4" y="46" width="110" height="78" rx="10" />
                  <circle className="fill-accent" cx="22" cy="64" r="5" />
                  <rect className="fill-primary" x="34" y="60" width="50" height="8" rx="4" />
                  <rect className="fill-muted-on-primary" x="16" y="82" width="86" height="8" rx="4" />
                  <rect className="fill-muted-on-primary" x="16" y="98" width="60" height="8" rx="4" />
                </svg>
              </div>
            </div>
          </article>
          <article className="stk c2 b2 top-[clamp(74px,8.61vw,124px)] bg-card text-primary border border-border">
            <div className="stx">
              <div className="r1 flex justify-between items-center">
                <span className="mono font-mono text-[13px] text-accent-dark">02 / 06</span>
              </div>
              <h3 className="disp r1 display text-[length:clamp(26px,3.47vw,50px)] mt-auto">Software à medida</h3>
              <p className="r2 m-0 text-[18px] leading-[1.55] max-w-[460px] text-muted-foreground">
                Sistemas desenhados em torno dos teus processos, com código documentado e mantível.
              </p>
              <div className="r3 flex flex-wrap items-center justify-between gap-[16px] mt-[8px]">
                <div className="flex flex-wrap gap-[8px] text-muted-foreground">
                  <span className="chip">requisitos</span>
                  <span className="chip">testes</span>
                  <span className="chip">documentação</span>
                </div>
                <Link
                  to="/servicos/$slug"
                  params={{ slug: "medida" }}
                  className="lnk [border-bottom-color:var(--accent)]"
                >
                  Ver serviço{" "}
                  <span className="arr" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </div>
            <div className="sta bg-background-alt">
              <div className="r4">
                <div
                  className="disp display text-[length:clamp(68px,10.42vw,150px)] text-primary leading-[1]"
                  aria-hidden="true"
                >
                  &lt;<span className="text-accent">/</span>&gt;
                </div>
              </div>
            </div>
          </article>
          <article className="stk c3 b3 top-[clamp(86px,10vw,144px)] bg-accent text-primary">
            <div className="stx">
              <div className="r1 flex justify-between items-center">
                <span className="mono font-mono text-[13px] text-primary">03 / 06</span>
              </div>
              <h3 className="disp r1 display text-[length:clamp(26px,3.47vw,50px)] mt-auto">ERP e gestão</h3>
              <p className="r2 m-0 text-[18px] leading-[1.55] max-w-[460px] text-[#2B2410]">
                Stock, facturação e operações num só sistema, adaptado à realidade angolana.
              </p>
              <div className="r3 flex flex-wrap items-center justify-between gap-[16px] mt-[8px]">
                <div className="flex flex-wrap gap-[8px] text-[#2B2410]">
                  <span className="chip">stock</span>
                  <span className="chip">facturação</span>
                  <span className="chip">relatórios</span>
                </div>
                <Link
                  to="/servicos/$slug"
                  params={{ slug: "erp" }}
                  className="lnk [border-bottom-color:var(--primary)]"
                >
                  Ver serviço{" "}
                  <span className="arr" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </div>
            <div className="sta bg-accent-light">
              <div className="r4">
                <svg viewBox="0 0 80 80" width="210" height="210" aria-hidden="true">
                  <rect className="fill-primary" x="4" y="4" width="34" height="34" rx="7" />
                  <rect className="fill-background" x="42" y="4" width="34" height="34" rx="7" />
                  <rect className="fill-background" x="4" y="42" width="34" height="34" rx="7" />
                  <rect
                    className="fill-primary"
                    x="45"
                    y="45"
                    width="30"
                    height="30"
                    rx="7"
                    transform="rotate(10 60 60)"
                  />
                </svg>
              </div>
            </div>
          </article>
          <article className="stk c4 b4 top-[clamp(98px,11.39vw,164px)] bg-primary-soft text-background">
            <div className="stx">
              <div className="r1 flex justify-between items-center">
                <span className="mono font-mono text-[13px] text-accent">04 / 06</span>
              </div>
              <h3 className="disp r1 display text-[length:clamp(26px,3.47vw,50px)] mt-auto">CRM e vendas</h3>
              <p className="r2 m-0 text-[18px] leading-[1.55] max-w-[460px] text-muted-on-primary">
                Clientes, oportunidades e acompanhamento comercial com visibilidade para quem decide.
              </p>
              <div className="r3 flex flex-wrap items-center justify-between gap-[16px] mt-[8px]">
                <div className="flex flex-wrap gap-[8px] text-muted-on-primary">
                  <span className="chip">pipeline</span>
                  <span className="chip">contactos</span>
                  <span className="chip">indicadores</span>
                </div>
                <Link to="/servicos/$slug" params={{ slug: "crm" }} className="lnk [border-bottom-color:var(--accent)]">
                  Ver serviço{" "}
                  <span className="arr" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </div>
            <div className="sta bg-primary-strong">
              <div className="r4">
                <svg viewBox="0 0 80 80" width="230" height="230" aria-hidden="true">
                  <circle className="fill-background" cx="29" cy="40" r="24" />
                  <circle className="fill-accent" cx="53" cy="40" r="24" fillOpacity=".95" />
                </svg>
              </div>
            </div>
          </article>
          <article className="stk c5 b5 top-[clamp(110px,12.78vw,184px)] bg-card text-primary border border-border">
            <div className="stx">
              <div className="r1 flex justify-between items-center">
                <span className="mono font-mono text-[13px] text-accent-dark">05 / 06</span>
              </div>
              <h3 className="disp r1 display text-[length:clamp(26px,3.47vw,50px)] mt-auto">Automações</h3>
              <p className="r2 m-0 text-[18px] leading-[1.55] max-w-[460px] text-muted-foreground">
                Integrações e fluxos que eliminam tarefas repetitivas e correm sozinhos.
              </p>
              <div className="r3 flex flex-wrap items-center justify-between gap-[16px] mt-[8px]">
                <div className="flex flex-wrap gap-[8px] text-muted-foreground">
                  <span className="chip">integrações</span>
                  <span className="chip">fluxos</span>
                  <span className="chip">alertas</span>
                </div>
                <Link
                  to="/servicos/$slug"
                  params={{ slug: "automacoes" }}
                  className="lnk [border-bottom-color:var(--accent)]"
                >
                  Ver serviço{" "}
                  <span className="arr" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </div>
            <div className="sta bg-background-alt">
              <div className="r4">
                <svg viewBox="0 0 80 80" width="220" height="220" aria-hidden="true">
                  <circle className="fill-primary" cx="40" cy="40" r="34" />
                  <path
                    className="fill-accent stroke-accent"
                    d="M44 12 L24 44 H38 L34 68 L56 34 H42 Z"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </article>
          <article className="stk c6 top-[clamp(122px,14.17vw,204px)] bg-primary text-background">
            <div className="stx">
              <div className="r1 flex justify-between items-center">
                <span className="mono font-mono text-[13px] text-accent">06 / 06</span>
              </div>
              <h3 className="disp r1 display text-[length:clamp(26px,3.47vw,50px)] mt-auto">Websites institucionais</h3>
              <p className="r2 m-0 text-[18px] leading-[1.55] max-w-[460px] text-muted-on-primary">
                Presença digital rápida e clara, pensada para transmitir confiança e gerar contactos.
              </p>
              <div className="r3 flex flex-wrap items-center justify-between gap-[16px] mt-[8px]">
                <div className="flex flex-wrap gap-[8px] text-muted-on-primary">
                  <span className="chip">desempenho</span>
                  <span className="chip">SEO</span>
                  <span className="chip">responsivo</span>
                </div>
                <Link
                  to="/servicos/$slug"
                  params={{ slug: "websites" }}
                  className="lnk [border-bottom-color:var(--accent)]"
                >
                  Ver serviço{" "}
                  <span className="arr" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </div>
            <div className="sta bg-primary-soft">
              <div className="r4">
                <svg viewBox="0 0 80 80" width="230" height="230" aria-hidden="true">
                  <circle className="stroke-background" cx="40" cy="40" r="34" fill="none" strokeWidth="3" />
                  <ellipse className="stroke-background" cx="40" cy="40" rx="15" ry="34" fill="none" strokeWidth="3" />
                  <path className="stroke-accent" d="M6 40H74" strokeWidth="4" />
                  <path className="stroke-background" d="M12 24H68M12 56H68" strokeWidth="3" fill="none" />
                </svg>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
