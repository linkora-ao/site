import { buttonVariants } from "@components/atoms/button";
import { Icon } from "@components/atoms/icon";

export function ProcessSection() {
  return (
    <section className="sec" id="processo">
      <div className="container">
        <div className="flex flex-wrap justify-between items-end gap-[24px]">
          <div>
            <div className="eyebrow">Como trabalhamos</div>
            <h2 className="disp h-lg display leading-[1.05] mt-[20px] text-[length:clamp(26px,3.75vw,54px)]">
              Quatro fases,
              <br />
              sem surpresas.
            </h2>
          </div>
          <a href="#" className={buttonVariants({ variant: "outline", className: "gap-[12px]" })}>
            <Icon name="file-text" className="ico" />
            Descarregar modelo de proposta (PDF)
          </a>
        </div>
        <div className="track mt-[clamp(38px,4.44vw,64px)]">
          <div className="stage">
            <div className="pbar" aria-label="Progresso das quatro fases">
              <div className="pm pm1">
                <span className="sg" aria-hidden="true">
                  <i></i>
                </span>
                <div className="pl">
                  <span className="pn">01</span>
                  <span className="pt">Descoberta</span>
                </div>
              </div>
              <div className="pm pm2">
                <span className="sg" aria-hidden="true">
                  <i></i>
                </span>
                <div className="pl">
                  <span className="pn">02</span>
                  <span className="pt">Desenho</span>
                </div>
              </div>
              <div className="pm pm3">
                <span className="sg" aria-hidden="true">
                  <i></i>
                </span>
                <div className="pl">
                  <span className="pn">03</span>
                  <span className="pt">Construção</span>
                </div>
              </div>
              <div className="pm pm4">
                <span className="sg" aria-hidden="true">
                  <i></i>
                </span>
                <div className="pl">
                  <span className="pn">04</span>
                  <span className="pt">Operação</span>
                </div>
              </div>
            </div>
            <div className="pstage">
              <div className="ph ph1">
                <div
                  className="disp display text-[length:clamp(86px,13.19vw,190px)] leading-[.8] text-primary"
                  aria-hidden="true"
                >
                  01<span className="text-accent">.</span>
                </div>
                <div>
                  <h3 className="disp display text-[length:clamp(26px,3.47vw,50px)]">Descoberta</h3>
                  <p className="body mt-[14px] text-[19px] max-w-[560px]">
                    Percebemos o teu negócio, mapeamos requisitos e fechamos o âmbito.
                  </p>
                  <div className="stack grid grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-[28px] mt-[26px] items-start">
                    <ul className="list-none m-0 p-0 border-b border-b-border">
                      <li className="flex gap-[12px] items-start py-[12px] px-0 border-t border-t-border text-[16px] leading-[1.45]">
                        <Icon name="check" size={18} className="ico text-accent-dark mt-[2px] size-[18px]" />
                        Reunião de levantamento com a gestão
                      </li>
                      <li className="flex gap-[12px] items-start py-[12px] px-0 border-t border-t-border text-[16px] leading-[1.45]">
                        <Icon name="check" size={18} className="ico text-accent-dark mt-[2px] size-[18px]" />
                        Mapeamento de processos e prioridades
                      </li>
                      <li className="flex gap-[12px] items-start py-[12px] px-0 border-t border-t-border text-[16px] leading-[1.45]">
                        <Icon name="check" size={18} className="ico text-accent-dark mt-[2px] size-[18px]" />
                        Proposta com âmbito, prazos e valores
                      </li>
                    </ul>
                    <div className="bg-background border border-border shadow-[inset_0_3px_0_0_var(--accent)] rounded-[var(--radius)] py-[20px] px-[22px]">
                      <div className="text-[12.5px] font-bold tracking-[.1em] uppercase text-accent-dark">
                        Entregável
                      </div>
                      <div className="disp display text-[22px] mt-[8px]">Proposta por escrito</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ph ph2">
                <div
                  className="disp display text-[length:clamp(86px,13.19vw,190px)] leading-[.8] text-primary"
                  aria-hidden="true"
                >
                  02<span className="text-accent">.</span>
                </div>
                <div>
                  <h3 className="disp display text-[length:clamp(26px,3.47vw,50px)]">Desenho</h3>
                  <p className="body mt-[14px] text-[19px] max-w-[560px]">
                    Arquitectura, fluxos e protótipo validados contigo antes de escrevermos código.
                  </p>
                  <div className="stack grid grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-[28px] mt-[26px] items-start">
                    <ul className="list-none m-0 p-0 border-b border-b-border">
                      <li className="flex gap-[12px] items-start py-[12px] px-0 border-t border-t-border text-[16px] leading-[1.45]">
                        <Icon name="check" size={18} className="ico text-accent-dark mt-[2px] size-[18px]" />
                        Arquitectura e modelo de dados
                      </li>
                      <li className="flex gap-[12px] items-start py-[12px] px-0 border-t border-t-border text-[16px] leading-[1.45]">
                        <Icon name="check" size={18} className="ico text-accent-dark mt-[2px] size-[18px]" />
                        Protótipo navegável
                      </li>
                      <li className="flex gap-[12px] items-start py-[12px] px-0 border-t border-t-border text-[16px] leading-[1.45]">
                        <Icon name="check" size={18} className="ico text-accent-dark mt-[2px] size-[18px]" />
                        Validação contigo antes de construir
                      </li>
                    </ul>
                    <div className="bg-background border border-border shadow-[inset_0_3px_0_0_var(--accent)] rounded-[var(--radius)] py-[20px] px-[22px]">
                      <div className="text-[12.5px] font-bold tracking-[.1em] uppercase text-accent-dark">
                        Entregável
                      </div>
                      <div className="disp display text-[22px] mt-[8px]">Protótipo e arquitectura</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ph ph3">
                <div
                  className="disp display text-[length:clamp(86px,13.19vw,190px)] leading-[.8] text-primary"
                  aria-hidden="true"
                >
                  03<span className="text-accent">.</span>
                </div>
                <div>
                  <h3 className="disp display text-[length:clamp(26px,3.47vw,50px)]">Construção</h3>
                  <p className="body mt-[14px] text-[19px] max-w-[560px]">
                    Ciclos curtos com demonstrações regulares, testes e revisão de código.
                  </p>
                  <div className="stack grid grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-[28px] mt-[26px] items-start">
                    <ul className="list-none m-0 p-0 border-b border-b-border">
                      <li className="flex gap-[12px] items-start py-[12px] px-0 border-t border-t-border text-[16px] leading-[1.45]">
                        <Icon name="check" size={18} className="ico text-accent-dark mt-[2px] size-[18px]" />
                        Ciclos curtos com demonstração
                      </li>
                      <li className="flex gap-[12px] items-start py-[12px] px-0 border-t border-t-border text-[16px] leading-[1.45]">
                        <Icon name="check" size={18} className="ico text-accent-dark mt-[2px] size-[18px]" />
                        Testes e revisão de código
                      </li>
                      <li className="flex gap-[12px] items-start py-[12px] px-0 border-t border-t-border text-[16px] leading-[1.45]">
                        <Icon name="check" size={18} className="ico text-accent-dark mt-[2px] size-[18px]" />
                        Pré-produção para validares
                      </li>
                    </ul>
                    <div className="bg-background border border-border shadow-[inset_0_3px_0_0_var(--accent)] rounded-[var(--radius)] py-[20px] px-[22px]">
                      <div className="text-[12.5px] font-bold tracking-[.1em] uppercase text-accent-dark">
                        Entregável
                      </div>
                      <div className="disp display text-[22px] mt-[8px]">Versões demonstráveis</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ph ph4">
                <div
                  className="disp display text-[length:clamp(86px,13.19vw,190px)] leading-[.8] text-primary"
                  aria-hidden="true"
                >
                  04<span className="text-accent">.</span>
                </div>
                <div>
                  <h3 className="disp display text-[length:clamp(26px,3.47vw,50px)]">Operação</h3>
                  <p className="body mt-[14px] text-[19px] max-w-[560px]">
                    Lançamento, monitorização e evolução contínua. Ficamos contigo depois do deploy.
                  </p>
                  <div className="stack grid grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-[28px] mt-[26px] items-start">
                    <ul className="list-none m-0 p-0 border-b border-b-border">
                      <li className="flex gap-[12px] items-start py-[12px] px-0 border-t border-t-border text-[16px] leading-[1.45]">
                        <Icon name="check" size={18} className="ico text-accent-dark mt-[2px] size-[18px]" />
                        Lançamento acompanhado
                      </li>
                      <li className="flex gap-[12px] items-start py-[12px] px-0 border-t border-t-border text-[16px] leading-[1.45]">
                        <Icon name="check" size={18} className="ico text-accent-dark mt-[2px] size-[18px]" />
                        Monitorização e backups
                      </li>
                      <li className="flex gap-[12px] items-start py-[12px] px-0 border-t border-t-border text-[16px] leading-[1.45]">
                        <Icon name="check" size={18} className="ico text-accent-dark mt-[2px] size-[18px]" />
                        Suporte e evolução contínua
                      </li>
                    </ul>
                    <div className="bg-background border border-border shadow-[inset_0_3px_0_0_var(--accent)] rounded-[var(--radius)] py-[20px] px-[22px]">
                      <div className="text-[12.5px] font-bold tracking-[.1em] uppercase text-accent-dark">
                        Entregável
                      </div>
                      <div className="disp display text-[22px] mt-[8px]">Sistema em produção e suporte</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="trg t1" aria-hidden="true"></div>
          <div className="trg t2" aria-hidden="true"></div>
          <div className="trg t3" aria-hidden="true"></div>
          <div className="trg t4" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
}
