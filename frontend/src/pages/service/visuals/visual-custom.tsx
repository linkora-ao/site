import { Icon } from "@components/atoms/icon";

export function CustomVisual() {
  return (
    <div className="relative">
      <div className="relative h-[470px]">
        <div className="absolute left-[clamp(90px,10.42vw,150px)] top-0 w-[380px] h-[320px] bg-border-on-primary rounded-[14px]"></div>
        <div className="absolute left-[clamp(58px,6.67vw,96px)] top-[clamp(34px,3.89vw,56px)] w-[380px] h-[320px] bg-accent rounded-[14px]"></div>
        <div className="absolute left-[20px] top-[clamp(67px,7.78vw,112px)] w-[480px]">
          <div className="bg-card border border-border rounded-[12px] overflow-hidden text-primary shadow-[0_30px_70px_-20px_rgba(0,0,0,.6)]">
            <div className="wbar">
              <i></i>
              <i></i>
              <i></i>
              <span className="u">sistema.cliente.ao</span>
            </div>
            <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)] min-h-[300px]">
              <div className="bg-primary py-[20px] px-[18px]">
                <div className="whitespace-pre font-mono text-[12.5px] leading-[1.75] text-muted-on-primary">
                  <span className="text-accent">function</span> totalFactura(linhas) &#123;
                </div>
                <div className="whitespace-pre font-mono text-[12.5px] leading-[1.75] text-muted-on-primary">
                  <span className="text-accent">let</span> total = 0;
                </div>
                <div className="whitespace-pre font-mono text-[12.5px] leading-[1.75] text-muted-on-primary">
                  <span className="text-accent">for</span> (const l of linhas) &#123;
                </div>
                <div className="whitespace-pre font-mono text-[12.5px] leading-[1.75] text-muted-on-primary">
                  total += l.preco * l.qtd;
                </div>
                <div className="whitespace-pre font-mono text-[12.5px] leading-[1.75] text-muted-on-primary">
                  &#125;
                </div>
                <div className="whitespace-pre font-mono text-[12.5px] leading-[1.75] text-muted-on-primary">
                  <span className="text-accent">return</span> total;
                </div>
                <div className="whitespace-pre font-mono text-[12.5px] leading-[1.75] text-muted-on-primary">
                  &#125;
                </div>
              </div>
              <div className="py-[16px] px-[18px]">
                <div className="disp display text-[17px] mb-[8px]">Entregas</div>
                <div className="flex justify-between items-center gap-[10px] py-[11px] px-0 border-t border-t-border text-[12.5px]">
                  <b>Requisitos</b>
                  <span className="text-[11px] font-bold py-[2px] px-[9px] rounded-full bg-[#E4EFE3] text-[#25552B]">
                    Concluído
                  </span>
                </div>
                <div className="flex justify-between items-center gap-[10px] py-[11px] px-0 border-t border-t-border text-[12.5px]">
                  <b>Testes</b>
                  <span className="text-[11px] font-bold py-[2px] px-[9px] rounded-full bg-[#E4EFE3] text-[#25552B]">
                    Passaram
                  </span>
                </div>
                <div className="flex justify-between items-center gap-[10px] py-[11px] px-0 border-t border-t-border text-[12.5px]">
                  <b>Documentação</b>
                  <span className="text-[11px] font-bold py-[2px] px-[9px] rounded-full bg-[#FBEBC8] text-[#7A4B07]">
                    Em curso
                  </span>
                </div>
                <div className="flex justify-between items-center gap-[10px] py-[11px] px-0 border-t border-t-border text-[12.5px]">
                  <b>Entrega 1</b>
                  <span className="text-[11px] font-bold py-[2px] px-[9px] rounded-full bg-[#DCE4F1] text-[#173C70]">
                    Fase 1
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fy1 absolute -right-[6px] top-[36px]">
          <span className="chp">
            <Icon name="check" size={20} className="ico text-accent-dark size-[20px]" />
            Testes passaram
          </span>
        </div>
      </div>
    </div>
  );
}
