export function PrinciplesSection() {
  return (
    <section className="sec bg-background-alt border-t border-t-border border-b border-b-border" id="principios">
      <div className="container">
        <div className="flex flex-wrap justify-between items-end gap-[24px]">
          <div>
            <div className="eyebrow">O que nos move</div>
            <h2 className="disp h-lg display leading-[1.05] mt-[20px] text-[length:clamp(26px,3.75vw,54px)]">
              Seis princípios.
              <br />
              Sem letras pequenas.
            </h2>
          </div>
          <p className="body max-w-[420px] text-[17.5px]">
            Não são slogans. São as regras que aplicamos a cada proposta, a cada linha de código e a cada resposta de
            suporte.
          </p>
        </div>
        <div className="mt-[clamp(38px,4.44vw,64px)]">
          <div className="prow reveal">
            <div className="nm">
              01<i>.</i>
            </div>
            <div>
              <h3 className="disp display text-[length:clamp(26px,2.36vw,34px)] leading-[1.08]">Qualidade real</h3>
              <p className="body mt-[14px] text-[17.5px]">
                Preferimos fazer menos e fazer bem. Cada entrega passa por requisitos claros, testes e revisão.
              </p>
            </div>
            <div>
              <div className="mono font-mono text-[12px] tracking-[.1em] uppercase text-accent-dark">Na prática</div>
              <p className="mt-[10px] text-[18px] leading-[1.55] font-semibold">
                Código documentado e testado antes de chegar a ti.
              </p>
            </div>
          </div>
          <div className="prow reveal">
            <div className="nm">
              02<i>.</i>
            </div>
            <div>
              <h3 className="disp display text-[length:clamp(26px,2.36vw,34px)] leading-[1.08]">Estabilidade</h3>
              <p className="body mt-[14px] text-[17.5px]">
                Um sistema que pára custa dinheiro. Desenhamos para aguentar o dia-a-dia do teu negócio.
              </p>
            </div>
            <div>
              <div className="mono font-mono text-[12px] tracking-[.1em] uppercase text-accent-dark">Na prática</div>
              <p className="mt-[10px] text-[18px] leading-[1.55] font-semibold">
                Monitorização, backups e alertas desde o primeiro dia. Disponibilidade-alvo de 99,99%.
              </p>
            </div>
          </div>
          <div className="prow reveal">
            <div className="nm">
              03<i>.</i>
            </div>
            <div>
              <h3 className="disp display text-[length:clamp(26px,2.36vw,34px)] leading-[1.08]">Código próprio</h3>
              <p className="body mt-[14px] text-[17.5px]">
                O que construímos para ti é teu: código-fonte e documentação entregues, sem dependências escondidas.
              </p>
            </div>
            <div>
              <div className="mono font-mono text-[12px] tracking-[.1em] uppercase text-accent-dark">Na prática</div>
              <p className="mt-[10px] text-[18px] leading-[1.55] font-semibold">
                Podes mudar de fornecedor sem perder o teu sistema.
              </p>
            </div>
          </div>
          <div className="prow reveal">
            <div className="nm">
              04<i>.</i>
            </div>
            <div>
              <h3 className="disp display text-[length:clamp(26px,2.36vw,34px)] leading-[1.08]">Suporte em Luanda</h3>
              <p className="body mt-[14px] text-[17.5px]">
                Falas com quem construiu, no teu fuso horário e na tua língua.
              </p>
            </div>
            <div>
              <div className="mono font-mono text-[12px] tracking-[.1em] uppercase text-accent-dark">Na prática</div>
              <p className="mt-[10px] text-[18px] leading-[1.55] font-semibold">
                Resposta directa da equipa, sem call centers e sem pedidos perdidos.
              </p>
            </div>
          </div>
          <div className="prow reveal">
            <div className="nm">
              05<i>.</i>
            </div>
            <div>
              <h3 className="disp display text-[length:clamp(26px,2.36vw,34px)] leading-[1.08]">Transparência</h3>
              <p className="body mt-[14px] text-[17.5px]">
                Propostas por fases, com objectivos, prazos e preços claros, em kwanzas.
              </p>
            </div>
            <div>
              <div className="mono font-mono text-[12px] tracking-[.1em] uppercase text-accent-dark">Na prática</div>
              <p className="mt-[10px] text-[18px] leading-[1.55] font-semibold">
                Sabes o que recebes antes de avançar para a fase seguinte.
              </p>
            </div>
          </div>
          <div className="prow reveal">
            <div className="nm">
              06<i>.</i>
            </div>
            <div>
              <h3 className="disp display text-[length:clamp(26px,2.36vw,34px)] leading-[1.08]">
                Compromisso com o resultado
              </h3>
              <p className="body mt-[14px] text-[17.5px]">
                Só damos um projecto por concluído quando funciona no teu dia-a-dia.
              </p>
            </div>
            <div>
              <div className="mono font-mono text-[12px] tracking-[.1em] uppercase text-accent-dark">Na prática</div>
              <p className="mt-[10px] text-[18px] leading-[1.55] font-semibold">
                Acompanhamento depois do lançamento, para o sistema não ser deixado sozinho.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
