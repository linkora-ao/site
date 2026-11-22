import { Icon } from "@components/atoms/icon";

export function ErpVisual() {
  return (
    <div className="relative">
      <div className="relative h-[470px]">
        <div className="absolute left-[clamp(36px,4.17vw,60px)] top-0 right-0">
          <div className="bg-card border border-border rounded-[12px] overflow-hidden text-primary shadow-[0_30px_70px_-20px_rgba(0,0,0,.6)]">
            <div className="wbar">
              <i></i>
              <i></i>
              <i></i>
              <span className="u">erp.cliente.ao</span>
            </div>
            <div className="flex min-h-[380px]">
              <div className="w-[130px] flex-none bg-primary py-[16px] px-[10px] grid gap-[4px] [align-content:start] text-[12.5px] font-semibold text-muted-on-primary">
                <span className="disp display text-[16px] text-background pt-0 pb-[12px] px-[8px]">ERP</span>
                <span className="py-[8px] px-[10px] bg-primary-strong text-background rounded-[6px]">Visão geral</span>
                <span className="py-[8px] px-[10px]">Stock</span>
                <span className="py-[8px] px-[10px]">Facturação</span>
                <span className="py-[8px] px-[10px]">Compras</span>
                <span className="py-[8px] px-[10px]">Relatórios</span>
              </div>
              <div className="flex-1 min-w-0 p-[18px] grid gap-[12px] [align-content:start]">
                <div className="disp display text-[19px]">Visão geral</div>
                <div className="g2c grid grid-cols-[repeat(2,minmax(0,1fr))] gap-[10px]">
                  <div className="border border-border rounded-[10px] p-[14px]">
                    <div className="text-[11px] font-bold text-muted-foreground">Artigos em stock</div>
                    <div className="mono font-mono text-[19px] font-medium mt-[8px]">1 248</div>
                    <div className="text-[11px] text-muted-foreground mt-[4px]">4 abaixo do mínimo</div>
                  </div>
                  <div className="border border-border rounded-[10px] p-[14px] text-primary">
                    <div className="text-[11px] font-bold text-muted-foreground">Facturado no mês</div>
                    <div className="mono font-mono text-[19px] font-medium mt-[8px]">3 450 000 Kz</div>
                    <div className="text-[11px] text-muted-foreground mt-[4px]">+12% face ao anterior</div>
                  </div>
                </div>
                <div className="border border-border rounded-[10px] p-[14px]">
                  <div className="text-[11.5px] font-bold">Vendas por semana</div>
                  <div className="flex items-end gap-[8px] h-[84px] mt-[12px]" aria-hidden="true">
                    <span className="flex-1 h-[35%] bg-primary rounded-[3px_3px_0_0]"></span>
                    <span className="flex-1 h-[52%] bg-primary rounded-[3px_3px_0_0]"></span>
                    <span className="flex-1 h-[44%] bg-primary rounded-[3px_3px_0_0]"></span>
                    <span className="flex-1 h-[70%] bg-primary rounded-[3px_3px_0_0]"></span>
                    <span className="flex-1 h-[58%] bg-primary rounded-[3px_3px_0_0]"></span>
                    <span className="flex-1 h-[90%] bg-accent rounded-[3px_3px_0_0]"></span>
                    <span className="flex-1 h-[62%] bg-primary rounded-[3px_3px_0_0]"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fy1 absolute -right-[6px] top-[clamp(180px,20.83vw,300px)]">
          <span className="chp">
            <Icon name="check" size={20} className="ico text-accent-dark size-[20px]" />
            Stock actualizado
          </span>
        </div>
        <div className="fy2 absolute left-0 top-[clamp(42px,4.86vw,70px)]">
          <span className="chp">
            <Icon name="check" size={20} className="ico text-accent-dark size-[20px]" />
            Factura emitida
          </span>
        </div>
      </div>
    </div>
  );
}
