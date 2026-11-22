import { Link } from "@tanstack/react-router";
import { Icon } from "@components/atoms/icon";

export function ListSection() {
  return (
    <section className="sec bg-background" id="lista">
      <div className="container">
        <div className="flex flex-wrap justify-between items-end gap-[24px]">
          <div>
            <div className="eyebrow">Catálogo de serviços</div>
            <h2 className="disp h-lg display leading-[1.05] mt-[20px] text-[length:clamp(26px,3.75vw,54px)]">
              Seis serviços.
              <br />
              Uma só equipa.
            </h2>
          </div>
          <p className="body max-w-[420px] text-[17.5px]">
            Podes contratar um serviço isolado ou combiná-los. Em qualquer caso, a base é a mesma: proposta clara,
            código teu e suporte local.
          </p>
        </div>
        <div className="stack sxw grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[24px] mt-[clamp(38px,4.44vw,64px)]">
          <article className="sx n reveal col-span-2" id="s1">
            <div className="flex justify-between items-center">
              <span className="ib">
                <Icon name="app-window" size={26} className="ico size-[26px]" />
              </span>
              <span className="num">01 / 06</span>
            </div>
            <svg
              className="sxa absolute right-[40px] top-[50%] [transform:translateY(-52%)]"
              viewBox="0 0 160 130"
              width="250"
              height="203"
              aria-hidden="true"
            >
              <rect className="fill-border-on-primary" x="40" y="6" width="110" height="78" rx="10" />
              <rect className="fill-accent" x="22" y="26" width="110" height="78" rx="10" />
              <rect className="fill-background" x="4" y="46" width="110" height="78" rx="10" />
              <circle className="fill-accent" cx="22" cy="64" r="5" />
              <rect className="fill-primary" x="34" y="60" width="50" height="8" rx="4" />
              <rect className="fill-muted-on-primary" x="16" y="82" width="86" height="8" rx="4" />
              <rect className="fill-muted-on-primary" x="16" y="98" width="60" height="8" rx="4" />
            </svg>
            <h3 className="disp display text-[length:clamp(26px,3.06vw,44px)] mt-[18px]">Plataformas web</h3>
            <p className="sd max-w-[380px]">
              Aplicações completas, seguras e preparadas para crescer: do painel de gestão ao portal do cliente, com
              arquitectura multitenant quando o negócio o pede.
            </p>
            <div className="flex flex-wrap items-center justify-between gap-[16px] mt-auto pt-[10px]">
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
          </article>
          <article className="sx p reveal col-span-1" id="s2">
            <div className="flex justify-between items-center">
              <span className="ib">
                <Icon name="code-xml" size={26} className="ico size-[26px]" />
              </span>
              <span className="num">02 / 06</span>
            </div>
            <h3 className="disp display text-[32px] mt-[22px]">Software à medida</h3>
            <p className="sd max-w-[360px]">
              Sistemas desenhados em torno dos teus processos, com código documentado e mantível, e que é teu desde o
              primeiro dia.
            </p>
            <div className="flex flex-wrap items-center justify-between gap-[16px] mt-auto pt-[10px]">
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
          </article>
          <article className="sx p reveal col-span-1" id="s3">
            <div className="flex justify-between items-center">
              <span className="ib">
                <Icon name="blocks" size={26} className="ico size-[26px]" />
              </span>
              <span className="num">03 / 06</span>
            </div>
            <h3 className="disp display text-[32px] mt-[22px]">ERP e gestão</h3>
            <p className="sd max-w-[360px]">
              Stock, facturação e operações num só sistema, adaptado à realidade angolana.
            </p>
            <div className="flex flex-wrap items-center justify-between gap-[16px] mt-auto pt-[10px]">
              <div className="flex flex-wrap gap-[8px] text-muted-foreground">
                <span className="chip">stock</span>
                <span className="chip">facturação</span>
                <span className="chip">relatórios</span>
              </div>
              <Link to="/servicos/$slug" params={{ slug: "erp" }} className="lnk [border-bottom-color:var(--accent)]">
                Ver serviço{" "}
                <span className="arr" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </article>
          <article className="sx p reveal col-span-1" id="s4">
            <div className="flex justify-between items-center">
              <span className="ib">
                <Icon name="funnel" size={26} className="ico size-[26px]" />
              </span>
              <span className="num">04 / 06</span>
            </div>
            <h3 className="disp display text-[32px] mt-[22px]">CRM e vendas</h3>
            <p className="sd max-w-[360px]">
              Clientes, oportunidades e acompanhamento comercial com visibilidade para quem decide.
            </p>
            <div className="flex flex-wrap items-center justify-between gap-[16px] mt-auto pt-[10px]">
              <div className="flex flex-wrap gap-[8px] text-muted-foreground">
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
          </article>
          <article className="sx p reveal col-span-1" id="s5">
            <div className="flex justify-between items-center">
              <span className="ib">
                <Icon name="zap" size={26} className="ico size-[26px]" />
              </span>
              <span className="num">05 / 06</span>
            </div>
            <h3 className="disp display text-[32px] mt-[22px]">Automações</h3>
            <p className="sd max-w-[360px]">
              Integrações e fluxos que eliminam tarefas repetitivas e correm sozinhos, com alertas quando algo falha.
            </p>
            <div className="flex flex-wrap items-center justify-between gap-[16px] mt-auto pt-[10px]">
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
          </article>
          <article
            className="sx a wide reveal col-span-3 grid grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)] gap-[40px] items-center py-[clamp(29px,3.06vw,44px)] px-[clamp(32px,3.33vw,48px)]"
            id="s6"
          >
            <div className="flex flex-col gap-[16px]">
              <div className="flex items-center gap-[16px]">
                <span className="ib">
                  <Icon name="globe" size={26} className="ico size-[26px]" />
                </span>
                <span className="num">06 / 06</span>
              </div>
              <h3 className="disp display text-[length:clamp(26px,3.06vw,44px)] mt-[10px]">Websites institucionais</h3>
              <p className="sd max-w-[520px]">
                Presença digital rápida e clara, pensada para transmitir confiança e gerar contactos, para empresas,
                clínicas, escolas e instituições.
              </p>
              <div className="flex flex-wrap items-center gap-[22px] mt-[10px]">
                <div className="flex flex-wrap gap-[8px] text-[#2B2410]">
                  <span className="chip">desempenho</span>
                  <span className="chip">SEO</span>
                  <span className="chip">responsivo</span>
                </div>
                <Link
                  to="/servicos/$slug"
                  params={{ slug: "websites" }}
                  className="lnk [border-bottom-color:var(--primary)]"
                >
                  Ver serviço{" "}
                  <span className="arr" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <svg viewBox="0 0 80 80" width="230" height="230" aria-hidden="true">
                <circle className="stroke-primary" cx="40" cy="40" r="34" fill="none" strokeWidth="3" />
                <ellipse className="stroke-primary" cx="40" cy="40" rx="15" ry="34" fill="none" strokeWidth="3" />
                <path className="stroke-primary" d="M6 40H74" strokeWidth="4" />
                <path className="stroke-primary" d="M12 24H68M12 56H68" strokeWidth="3" fill="none" />
                <circle className="fill-background" cx="62" cy="18" r="9" />
              </svg>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
