import { Icon } from "@components/atoms/icon";

export function WebVisual() {
  return (
    <div className="relative">
      <div className="relative h-[470px]">
        <div className="pxm absolute left-[clamp(90px,10.42vw,150px)] top-0 w-[380px] h-[300px] bg-border-on-primary rounded-[14px]"></div>
        <div className="absolute left-[clamp(58px,6.67vw,96px)] top-[clamp(34px,3.89vw,56px)] w-[380px] h-[300px] bg-accent rounded-[14px]"></div>
        <div className="absolute left-[20px] top-[clamp(67px,7.78vw,112px)] w-[440px]">
          <div className="bg-card border border-border rounded-[12px] overflow-hidden text-primary shadow-[0_30px_70px_-20px_rgba(0,0,0,.6)]">
            <div className="wbar">
              <i></i>
              <i></i>
              <i></i>
              <span className="u">app.cliente.ao</span>
            </div>
            <div className="pt-[16px] pb-[6px] px-[18px]">
              <div className="flex justify-between items-center">
                <span className="disp display text-[18px]">Utilizadores</span>
                <span className="text-[11px] font-bold bg-primary text-background py-[6px] px-[12px] rounded-[6px]">
                  Novo
                </span>
              </div>
              <div className="mt-[12px]">
                <div className="grid grid-cols-[26px_minmax(0,1fr)_70px] gap-[10px] items-center py-[9px] px-0 border-t border-t-border text-[12px]">
                  <span className="rounded-full bg-primary text-accent inline-flex items-center justify-center text-[10px] font-bold size-[24px]">
                    AD
                  </span>
                  <b>Ana Domingos</b>
                  <span className="text-[11px] font-bold py-[2px] px-[8px] rounded-full text-center bg-[#DCE4F1] text-[#173C70]">
                    Gestor
                  </span>
                </div>
                <div className="grid grid-cols-[26px_minmax(0,1fr)_70px] gap-[10px] items-center py-[9px] px-0 border-t border-t-border text-[12px]">
                  <span className="rounded-full bg-primary text-accent inline-flex items-center justify-center text-[10px] font-bold size-[24px]">
                    EK
                  </span>
                  <b>Eduardo Kiala</b>
                  <span className="text-[11px] font-bold py-[2px] px-[8px] rounded-full text-center bg-[#E4EFE3] text-[#25552B]">
                    Cliente
                  </span>
                </div>
                <div className="grid grid-cols-[26px_minmax(0,1fr)_70px] gap-[10px] items-center py-[9px] px-0 border-t border-t-border text-[12px]">
                  <span className="rounded-full bg-primary text-accent inline-flex items-center justify-center text-[10px] font-bold size-[24px]">
                    MC
                  </span>
                  <b>Mariana Cassule</b>
                  <span className="text-[11px] font-bold py-[2px] px-[8px] rounded-full text-center bg-[#FBEBC8] text-[#7A4B07]">
                    Editor
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[8px] pt-[6px] pb-[18px] px-[18px]">
              <div className="border border-border rounded-[8px] p-[9px]">
                <div className="text-[10px] text-muted-foreground font-semibold">Activos</div>
                <div className="mono font-mono text-[16px] mt-[5px]">1 204</div>
              </div>
              <div className="border border-border rounded-[8px] p-[9px]">
                <div className="text-[10px] text-muted-foreground font-semibold">Pedidos</div>
                <div className="mono font-mono text-[16px] mt-[5px]">318</div>
              </div>
              <div className="border border-border rounded-[8px] p-[9px]">
                <div className="text-[10px] text-muted-foreground font-semibold">Erros</div>
                <div className="mono font-mono text-[16px] mt-[5px]">0</div>
              </div>
            </div>
          </div>
        </div>
        <div className="fy1 absolute -right-[6px] top-[30px]">
          <span className="chp">
            <Icon name="check" size={20} className="ico text-accent-dark size-[20px]" />
            Novo perfil criado
          </span>
        </div>
      </div>
    </div>
  );
}
