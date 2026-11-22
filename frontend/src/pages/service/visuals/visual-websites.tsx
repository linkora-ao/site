import { Icon } from "@components/atoms/icon";

export function WebsitesVisual() {
  return (
    <div className="relative">
      <div className="relative h-[470px]">
        <div className="pxm absolute left-0 top-[10px] w-[480px]">
          <div className="bg-card border border-border rounded-[12px] overflow-hidden text-primary shadow-[0_30px_70px_-20px_rgba(0,0,0,.6)]">
            <div className="wbar">
              <i></i>
              <i></i>
              <i></i>
              <span className="u">clinicavida.ao</span>
            </div>
            <div className="bg-primary text-background p-0">
              <div className="flex justify-between items-center py-[14px] px-[20px]">
                <span className="disp display text-[16px]">Clínica Vida</span>
                <span className="flex gap-[14px] text-[11px] text-muted-on-primary">
                  <span>Serviços</span>
                  <span>Equipa</span>
                  <span>Contacto</span>
                </span>
              </div>
              <div className="pt-[26px] pb-[30px] px-[20px]">
                <div className="disp display text-[26px] leading-[1.05] max-w-[240px]">
                  Cuidado em que podes confiar.
                </div>
                <div className="h-[8px] w-[60%] bg-muted-on-primary rounded-[4px] mt-[8px]"></div>
                <div className="h-[8px] w-[44%] bg-muted-on-primary rounded-[4px] mt-[8px]"></div>
                <span className="inline-block mt-[16px] bg-accent text-primary text-[11.5px] font-bold py-[8px] px-[14px] rounded-[6px]">
                  Marcar consulta
                </span>
              </div>
            </div>
            <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[10px] pt-[14px] pb-[20px] px-[20px]">
              <div className="border border-border rounded-[8px] p-[10px]">
                <div className="rounded-[6px] bg-primary size-[22px]"></div>
                <div className="text-[11.5px] font-bold mt-[8px]">Consultas</div>
              </div>
              <div className="border border-border rounded-[8px] p-[10px]">
                <div className="rounded-[6px] bg-primary size-[22px]"></div>
                <div className="text-[11.5px] font-bold mt-[8px]">Exames</div>
              </div>
              <div className="border border-border rounded-[8px] p-[10px]">
                <div className="rounded-[6px] bg-primary size-[22px]"></div>
                <div className="text-[11.5px] font-bold mt-[8px]">Urgência</div>
              </div>
            </div>
          </div>
        </div>
        <div className="fy2 absolute right-[10px] bottom-0 w-[128px] border-[5px] border-primary rounded-[22px] bg-card overflow-hidden shadow-[0_24px_50px_-16px_rgba(0,0,0,.6)]">
          <div className="bg-primary text-background pt-[14px] pb-[16px] px-[10px]">
            <div className="disp display text-[11px]">Clínica Vida</div>
            <div className="disp display text-[14px] leading-[1.1] mt-[10px]">Cuidado em que podes confiar.</div>
            <span className="inline-block mt-[10px] bg-accent text-primary text-[8.5px] font-bold py-[5px] px-[8px] rounded-[4px]">
              Marcar consulta
            </span>
          </div>
          <div className="pt-[8px] pb-[12px] px-[10px] grid gap-[6px]">
            <div className="border border-border rounded-[6px] h-[22px]"></div>
            <div className="border border-border rounded-[6px] h-[22px]"></div>
          </div>
        </div>
        <div className="fy1 absolute -right-[6px] top-[10px]">
          <span className="chp">
            <Icon name="check" size={20} className="ico text-accent-dark size-[20px]" />
            Pedido de contacto recebido
          </span>
        </div>
      </div>
    </div>
  );
}
