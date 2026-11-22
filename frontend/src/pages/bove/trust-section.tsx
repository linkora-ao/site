export function TrustSection() {
  return (
    <section className="sec bg-background" id="confianca">
      <div className="container">
        <div className="max-w-[760px]">
          <div className="eyebrow">Confiança</div>
          <h2 className="disp h-lg display leading-[1.05] mt-[20px] text-[length:clamp(26px,3.75vw,54px)]">
            Compromissos que podes verificar.
          </h2>
        </div>
        <div className="stack grid grid-cols-[repeat(4,minmax(0,1fr))] gap-[20px] mt-[clamp(34px,3.89vw,56px)]">
          <div className="dt reveal">
            <div className="mono font-mono text-[length:clamp(26px,3.06vw,44px)] font-medium tracking-[-0.04em] leading-[1]">
              99,99%
            </div>
            <p className="mt-[14px] text-[15.5px] leading-[1.5] text-muted-foreground">
              Disponibilidade-alvo, monitorizada
            </p>
          </div>
          <div className="dt reveal">
            <div className="mono font-mono text-[length:clamp(26px,3.06vw,44px)] font-medium tracking-[-0.04em] leading-[1]">
              Luanda
            </div>
            <p className="mt-[14px] text-[15.5px] leading-[1.5] text-muted-foreground">
              Equipa, suporte e desenvolvimento
            </p>
          </div>
          <div className="dt reveal">
            <div className="mono font-mono text-[length:clamp(26px,3.06vw,44px)] font-medium tracking-[-0.04em] leading-[1]">
              Kz
            </div>
            <p className="mt-[14px] text-[15.5px] leading-[1.5] text-muted-foreground">
              Propinas e recibos na tua moeda
            </p>
          </div>
          <div className="dt reveal">
            <div className="mono font-mono text-[length:clamp(26px,3.06vw,44px)] font-medium tracking-[-0.04em] leading-[1]">
              2 vagas
            </div>
            <p className="mt-[14px] text-[15.5px] leading-[1.5] text-muted-foreground">
              Piloto aberto a centros de formação
            </p>
          </div>
        </div>
        <div className="stack grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-[clamp(58px,6.67vw,96px)] mt-[clamp(58px,6.67vw,96px)] items-start">
          <div>
            <h3 className="disp display text-[length:clamp(26px,2.64vw,38px)] leading-[1.08]">Como entras no piloto</h3>
            <div className="mt-[40px] relative">
              <div
                className="absolute left-[25px] top-[30px] bottom-[clamp(30px,3.47vw,50px)] w-[2px] bg-border"
                aria-hidden="true"
              ></div>
              <div className="grid grid-cols-[52px_minmax(0,1fr)] gap-[20px] pt-0 pb-[30px] px-0 relative">
                <span className="disp display rounded-full bg-primary text-accent flex items-center justify-center text-[20px] relative z-[1] size-[52px]">
                  01
                </span>
                <div>
                  <div className="disp display text-[24px] pt-[10px]">Candidatura</div>
                  <p className="mt-[8px] text-[16.5px] leading-[1.6] text-muted-foreground max-w-[420px]">
                    Contas-nos como funciona o teu centro, em cerca de 20 minutos.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[52px_minmax(0,1fr)] gap-[20px] pt-0 pb-[30px] px-0 relative">
                <span className="disp display rounded-full bg-primary text-accent flex items-center justify-center text-[20px] relative z-[1] size-[52px]">
                  02
                </span>
                <div>
                  <div className="disp display text-[24px] pt-[10px]">Configuração</div>
                  <p className="mt-[8px] text-[16.5px] leading-[1.6] text-muted-foreground max-w-[420px]">
                    Preparamos o teu espaço, com o teu nome e a tua identidade.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[52px_minmax(0,1fr)] gap-[20px] pt-0 pb-[30px] px-0 relative">
                <span className="disp display rounded-full bg-primary text-accent flex items-center justify-center text-[20px] relative z-[1] size-[52px]">
                  03
                </span>
                <div>
                  <div className="disp display text-[24px] pt-[10px]">Arranque acompanhado</div>
                  <p className="mt-[8px] text-[16.5px] leading-[1.6] text-muted-foreground max-w-[420px]">
                    Estamos contigo nas primeiras semanas de utilização.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-[1.5px] border-dashed border-border-strong rounded-[12px] py-[20px] px-[22px] text-muted-foreground text-[15px] leading-[1.55] mt-[8px]">
              <span className="mono font-mono text-[12px] tracking-[.08em] uppercase text-accent-dark">Reservado</span>
              <br />
              [Testemunho do primeiro centro-piloto: nome, função e instituição]
            </div>
          </div>
          <div>
            <h3 className="disp display text-[length:clamp(26px,2.64vw,38px)] leading-[1.08]">Perguntas frequentes</h3>
            <div className="mt-[36px]">
              <details className="fq" open>
                <summary>O que quer dizer multitenant?</summary>
                <p>
                  Cada centro tem o seu próprio espaço, com identidade e dados separados, na mesma plataforma gerida
                  pela Linkora.
                </p>
              </details>
              <details className="fq">
                <summary>Preciso de instalar alguma coisa?</summary>
                <p>Não. Acedes pelo navegador, no computador ou no telemóvel.</p>
              </details>
              <details className="fq">
                <summary>Quanto custa?</summary>
                <p>
                  O preço é definido por proposta, em kwanzas. No piloto, os dois primeiros centros têm condições de
                  lançamento.
                </p>
              </details>
              <details className="fq">
                <summary>Posso levar os dados que já tenho?</summary>
                <p>Ajudamos a configurar o teu espaço e a trazer para a BOVE as listas que já usas.</p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
