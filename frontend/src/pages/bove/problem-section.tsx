import { Icon } from "@components/atoms/icon";

export function ProblemSection() {
  return (
    <section className="sec bg-background" id="problema">
      <div className="container">
        <div className="flex flex-wrap justify-between items-end gap-[24px]">
          <div>
            <div className="eyebrow">O problema que resolvemos</div>
            <h2 className="disp h-lg display leading-[1.05] mt-[20px] text-[length:clamp(26px,3.75vw,54px)]">
              Do caderno e do Excel
              <br />
              para um só sistema.
            </h2>
          </div>
          <p className="body max-w-[420px] text-[17.5px]">
            Gerir um centro de formação é gerir pessoas, turmas e dinheiro ao mesmo tempo. A BOVE junta tudo no mesmo
            sítio.
          </p>
        </div>
        <div className="grid gap-[18px] mt-[clamp(38px,4.44vw,64px)]">
          <div className="pr reveal">
            <div className="pn">
              <div className="mono font-mono text-[12px] tracking-[.1em] uppercase flex items-center gap-[8px] text-[#8A2A18]">
                <Icon name="x" size={14} className="ico size-[14px]" />
                Hoje
              </div>
              <p className="mt-[12px] text-[19px] leading-[1.5]">
                Inscrições em papel e listas de Excel espalhadas por vários computadores.
              </p>
            </div>
            <div className="mid">
              <span>
                <Icon name="arrow-right" size={20} className="ico size-[20px]" />
              </span>
            </div>
            <div className="sl">
              <div className="mono font-mono text-[12px] tracking-[.1em] uppercase text-accent">Com a BOVE</div>
              <p className="mt-[12px] text-[19px] leading-[1.5] font-semibold">
                Uma ficha única por formando, com o histórico de turmas e pagamentos.
              </p>
            </div>
          </div>
          <div className="pr reveal">
            <div className="pn">
              <div className="mono font-mono text-[12px] tracking-[.1em] uppercase flex items-center gap-[8px] text-[#8A2A18]">
                <Icon name="x" size={14} className="ico size-[14px]" />
                Hoje
              </div>
              <p className="mt-[12px] text-[19px] leading-[1.5]">Propinas em atraso que ninguém vê a tempo.</p>
            </div>
            <div className="mid">
              <span>
                <Icon name="arrow-right" size={20} className="ico size-[20px]" />
              </span>
            </div>
            <div className="sl">
              <div className="mono font-mono text-[12px] tracking-[.1em] uppercase text-accent">Com a BOVE</div>
              <p className="mt-[12px] text-[19px] leading-[1.5] font-semibold">
                Estado de pagamento por formando, recibos em kwanzas e atrasos à vista.
              </p>
            </div>
          </div>
          <div className="pr reveal">
            <div className="pn">
              <div className="mono font-mono text-[12px] tracking-[.1em] uppercase flex items-center gap-[8px] text-[#8A2A18]">
                <Icon name="x" size={14} className="ico size-[14px]" />
                Hoje
              </div>
              <p className="mt-[12px] text-[19px] leading-[1.5]">Turmas e horários que mudam por mensagens soltas.</p>
            </div>
            <div className="mid">
              <span>
                <Icon name="arrow-right" size={20} className="ico size-[20px]" />
              </span>
            </div>
            <div className="sl">
              <div className="mono font-mono text-[12px] tracking-[.1em] uppercase text-accent">Com a BOVE</div>
              <p className="mt-[12px] text-[19px] leading-[1.5] font-semibold">
                Turmas, horários e formadores organizados num só calendário.
              </p>
            </div>
          </div>
          <div className="pr reveal">
            <div className="pn">
              <div className="mono font-mono text-[12px] tracking-[.1em] uppercase flex items-center gap-[8px] text-[#8A2A18]">
                <Icon name="x" size={14} className="ico size-[14px]" />
                Hoje
              </div>
              <p className="mt-[12px] text-[19px] leading-[1.5]">Certificados feitos à mão, um a um.</p>
            </div>
            <div className="mid">
              <span>
                <Icon name="arrow-right" size={20} className="ico size-[20px]" />
              </span>
            </div>
            <div className="sl">
              <div className="mono font-mono text-[12px] tracking-[.1em] uppercase text-accent">Com a BOVE</div>
              <p className="mt-[12px] text-[19px] leading-[1.5] font-semibold">
                Certificados gerados a partir dos dados que já estão registados.
              </p>
            </div>
          </div>
          <div className="pr reveal">
            <div className="pn">
              <div className="mono font-mono text-[12px] tracking-[.1em] uppercase flex items-center gap-[8px] text-[#8A2A18]">
                <Icon name="x" size={14} className="ico size-[14px]" />
                Hoje
              </div>
              <p className="mt-[12px] text-[19px] leading-[1.5]">
                Relatórios para a direcção que demoram dias a preparar.
              </p>
            </div>
            <div className="mid">
              <span>
                <Icon name="arrow-right" size={20} className="ico size-[20px]" />
              </span>
            </div>
            <div className="sl">
              <div className="mono font-mono text-[12px] tracking-[.1em] uppercase text-accent">Com a BOVE</div>
              <p className="mt-[12px] text-[19px] leading-[1.5] font-semibold">
                Um painel com formandos, presenças e receita, sempre actualizado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
