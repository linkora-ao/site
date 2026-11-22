import { Icon } from "@components/atoms/icon";

export function CrmVisual() {
  return (
    <div className="relative">
      <div className="relative h-[470px]">
        <div className="pxm absolute left-[36px] top-0 right-0">
          <div className="bg-card border border-border rounded-[12px] overflow-hidden text-primary shadow-[0_30px_70px_-20px_rgba(0,0,0,.6)]">
            <div className="wbar">
              <i></i>
              <i></i>
              <i></i>
              <span className="u">crm.cliente.ao</span>
            </div>
            <div className="pt-[16px] pb-[6px] px-[18px] flex justify-between items-center">
              <span className="disp display text-[18px]">Pipeline</span>
              <span className="mono font-mono text-[12px] text-muted-foreground">Previsão 1 280 000 Kz</span>
            </div>
            <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[10px] pt-[8px] pb-[20px] px-[18px]">
              <div className="bg-background-alt rounded-[10px] p-[10px] grid gap-[8px] [align-content:start]">
                <div className="flex justify-between text-[11.5px] font-bold pt-[2px] pb-[4px] px-[2px]">
                  <span>Contacto</span>
                  <span className="mono font-mono text-muted-foreground">3</span>
                </div>
                <div className="bg-white border border-border rounded-[8px] py-[10px] px-[11px]">
                  <div className="text-[12px] font-bold">Centro Formar</div>
                  <div className="mono font-mono text-[12px] mt-[5px]">450 000 Kz</div>
                  <span className="inline-block mt-[7px] text-[10.5px] font-bold py-[2px] px-[8px] rounded-full bg-[#DCE4F1] text-[#173C70]">
                    Novo
                  </span>
                </div>
                <div className="bg-white border border-border rounded-[8px] py-[10px] px-[11px]">
                  <div className="text-[12px] font-bold">Clínica Vida</div>
                  <div className="mono font-mono text-[12px] mt-[5px]">320 000 Kz</div>
                  <span className="inline-block mt-[7px] text-[10.5px] font-bold py-[2px] px-[8px] rounded-full bg-[#DCE4F1] text-[#173C70]">
                    Novo
                  </span>
                </div>
                <div className="bg-white border border-border rounded-[8px] py-[10px] px-[11px]">
                  <div className="text-[12px] font-bold">Comercial Sul</div>
                  <div className="mono font-mono text-[12px] mt-[5px]">180 000 Kz</div>
                  <span className="inline-block mt-[7px] text-[10.5px] font-bold py-[2px] px-[8px] rounded-full bg-[#FBEBC8] text-[#7A4B07]">
                    Follow-up
                  </span>
                </div>
              </div>
              <div className="bg-background-alt rounded-[10px] p-[10px] grid gap-[8px] [align-content:start]">
                <div className="flex justify-between text-[11.5px] font-bold pt-[2px] pb-[4px] px-[2px]">
                  <span>Proposta</span>
                  <span className="mono font-mono text-muted-foreground">2</span>
                </div>
                <div className="bg-white border border-border rounded-[8px] py-[10px] px-[11px]">
                  <div className="text-[12px] font-bold">Escola Futuro</div>
                  <div className="mono font-mono text-[12px] mt-[5px]">600 000 Kz</div>
                  <span className="inline-block mt-[7px] text-[10.5px] font-bold py-[2px] px-[8px] rounded-full bg-[#FBEBC8] text-[#7A4B07]">
                    Enviada
                  </span>
                </div>
                <div className="bg-white border border-border rounded-[8px] py-[10px] px-[11px]">
                  <div className="text-[12px] font-bold">Grupo Alfa</div>
                  <div className="mono font-mono text-[12px] mt-[5px]">280 000 Kz</div>
                  <span className="inline-block mt-[7px] text-[10.5px] font-bold py-[2px] px-[8px] rounded-full bg-[#FBEBC8] text-[#7A4B07]">
                    Enviada
                  </span>
                </div>
              </div>
              <div className="bg-background-alt rounded-[10px] p-[10px] grid gap-[8px] [align-content:start]">
                <div className="flex justify-between text-[11.5px] font-bold pt-[2px] pb-[4px] px-[2px]">
                  <span>Fechado</span>
                  <span className="mono font-mono text-muted-foreground">1</span>
                </div>
                <div className="bg-white border border-border rounded-[8px] py-[10px] px-[11px]">
                  <div className="text-[12px] font-bold">Instituto Luz</div>
                  <div className="mono font-mono text-[12px] mt-[5px]">230 000 Kz</div>
                  <span className="inline-block mt-[7px] text-[10.5px] font-bold py-[2px] px-[8px] rounded-full bg-[#E4EFE3] text-[#25552B]">
                    Ganho
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fy1 absolute -right-[6px] top-[clamp(204px,23.61vw,340px)]">
          <span className="chp">
            <Icon name="check" size={20} className="ico text-accent-dark size-[20px]" />
            Oportunidade avançou
          </span>
        </div>
        <div className="fy2 absolute left-0 top-[clamp(180px,20.83vw,300px)]">
          <span className="chp">
            <Icon name="check" size={20} className="ico text-accent-dark size-[20px]" />
            Follow-up agendado
          </span>
        </div>
      </div>
    </div>
  );
}
