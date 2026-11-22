import { Icon } from "@components/atoms/icon";

export function AutomationsVisual() {
  return (
    <div className="relative">
      <div className="relative h-[470px]">
        <div className="absolute left-[30px] top-[20px] right-0">
          <div className="bg-card border border-border rounded-[12px] overflow-hidden text-primary shadow-[0_30px_70px_-20px_rgba(0,0,0,.6)]">
            <div className="wbar">
              <i></i>
              <i></i>
              <i></i>
              <span className="u">fluxos.cliente.ao</span>
            </div>
            <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)] min-h-[330px]">
              <div className="p-[18px]">
                <div className="disp display text-[17px] mb-[12px]">Fluxo · Nova encomenda</div>
                <div className="border-[1.5px] border-primary rounded-[10px] py-[12px] px-[14px] bg-background-alt">
                  <div className="mono font-mono text-[10.5px] tracking-[.08em] uppercase text-accent-dark">Quando</div>
                  <div className="font-bold text-[14px] mt-[4px]">Encomenda recebida</div>
                </div>
                <div className="w-[2px] h-[18px] bg-primary mr-auto ml-auto" aria-hidden="true"></div>
                <div className="border-[1.5px] border-border rounded-[10px] py-[12px] px-[14px] bg-white">
                  <div className="mono font-mono text-[10.5px] tracking-[.08em] uppercase text-accent-dark">Depois</div>
                  <div className="font-bold text-[14px] mt-[4px]">Criar factura</div>
                </div>
                <div className="w-[2px] h-[18px] bg-primary mr-auto ml-auto" aria-hidden="true"></div>
                <div className="border-[1.5px] border-border rounded-[10px] py-[12px] px-[14px] bg-white">
                  <div className="mono font-mono text-[10.5px] tracking-[.08em] uppercase text-accent-dark">Depois</div>
                  <div className="font-bold text-[14px] mt-[4px]">Avisar o cliente</div>
                </div>
              </div>
              <div className="p-[18px] bg-background-alt border-l border-l-border">
                <div className="text-[12px] font-bold">Execuções hoje</div>
                <div className="mono font-mono text-[30px] mt-[6px] mb-[10px]">124</div>
                <div className="flex justify-between items-center py-[9px] px-0 border-t border-t-border text-[12px]">
                  <span className="mono font-mono">09:41</span>
                  <span className="text-[11px] font-bold py-[2px] px-[8px] rounded-full bg-[#E4EFE3] text-[#25552B]">
                    Ok
                  </span>
                </div>
                <div className="flex justify-between items-center py-[9px] px-0 border-t border-t-border text-[12px]">
                  <span className="mono font-mono">09:58</span>
                  <span className="text-[11px] font-bold py-[2px] px-[8px] rounded-full bg-[#E4EFE3] text-[#25552B]">
                    Ok
                  </span>
                </div>
                <div className="flex justify-between items-center py-[9px] px-0 border-t border-t-border text-[12px]">
                  <span className="mono font-mono">10:12</span>
                  <span className="text-[11px] font-bold py-[2px] px-[8px] rounded-full bg-[#E4EFE3] text-[#25552B]">
                    Ok
                  </span>
                </div>
                <div className="flex justify-between items-center py-[9px] px-0 border-t border-t-border text-[12px]">
                  <span className="mono font-mono">10:30</span>
                  <span className="text-[11px] font-bold py-[2px] px-[8px] rounded-full bg-[#FBEBC8] text-[#7A4B07]">
                    Alerta
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="pxm absolute left-0 bottom-[30px] rounded-full bg-accent flex items-center justify-center text-primary size-[84px]"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            width="40"
            height="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          >
            <path d="M13 2.500L5 13.500h6l-1 8 8-11h-6z" />
          </svg>
        </div>
        <div className="fy1 absolute -right-[6px] top-[clamp(223px,25.83vw,372px)]">
          <span className="chp">
            <Icon name="check" size={20} className="ico text-accent-dark size-[20px]" />
            Fluxo executado
          </span>
        </div>
      </div>
    </div>
  );
}
