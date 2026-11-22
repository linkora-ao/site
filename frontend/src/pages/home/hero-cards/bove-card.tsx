import { HeroCard } from "./hero-card";

const BARS = [40, 62, 50, 88, 70, 36, 24] as const;
const KPIS = [
  { label: "Formandos", value: "248" },
  { label: "Turmas", value: "12" },
  { label: "Presença", value: "91%" },
] as const;

/** Painel da BOVE (centro de formação fictício) como primeiro slide da Hero. */
export function BoveCard() {
  return (
    <HeroCard>
      <div className="flex items-center gap-[10px] py-[10px] px-[14px] bg-background-alt border-b border-b-border">
        <i className="size-[9px] rounded-full bg-[#C9BFAA]" aria-hidden="true" />
        <i className="size-[9px] rounded-full bg-[#C9BFAA]" aria-hidden="true" />
        <i className="size-[9px] rounded-full bg-[#C9BFAA]" aria-hidden="true" />
        <span className="mono font-mono ml-[8px] text-[11.5px] bg-card border border-border rounded-[6px] py-[3px] px-[10px] text-muted-foreground">
          centrox.bove.ao
        </span>
      </div>
      <div className="flex flex-1 min-h-0">
        <div className="max-[480px]:hidden w-[118px] flex-none bg-primary py-[16px] px-[10px] grid gap-[4px] [align-content:start] text-[12.5px] font-semibold text-muted-on-primary">
          <span className="disp display text-[16px] text-background pb-[12px] px-[10px]">BOVE</span>
          <span className="py-[8px] px-[10px] bg-primary-strong text-background rounded-[6px]">Painel</span>
          <span className="py-[8px] px-[10px]">Turmas</span>
          <span className="py-[8px] px-[10px]">Formandos</span>
          <span className="py-[8px] px-[10px]">Finanças</span>
          <span className="py-[8px] px-[10px]">Certificados</span>
        </div>
        <div className="flex-1 min-w-0 p-[18px] grid gap-[12px] [align-content:space-between]">
          <div className="disp display text-[18px]">Painel · Centro X</div>
          <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[8px]">
            {KPIS.map((k) => (
              <div key={k.label} className="border border-border rounded-[8px] p-[10px]">
                <div className="text-[10.5px] font-semibold text-muted-foreground">{k.label}</div>
                <div className="mono font-mono text-[19px] font-medium mt-[4px]">{k.value}</div>
              </div>
            ))}
          </div>
          <div className="border border-border rounded-[8px] p-[12px]">
            <div className="flex justify-between text-[11px] font-bold">
              <span>Recebido esta semana</span>
              <span className="mono font-mono text-accent-dark">1 850 000 Kz</span>
            </div>
            <div className="flex items-end gap-[8px] h-[110px] mt-[10px]" aria-hidden="true">
              {BARS.map((h, i) => (
                <span
                  key={i}
                  style={{ height: `${h}%` }}
                  className={`flex-1 rounded-[3px_3px_0_0] ${h === 88 ? "bg-accent" : "bg-primary"}`}
                />
              ))}
            </div>
          </div>
          <div className="border border-border rounded-[8px] overflow-hidden text-[12px]">
            <div className="flex justify-between py-[9px] px-[12px] border-b border-b-border">
              <span className="font-semibold">Informática de Gestão</span>
              <span className="mono font-mono">24</span>
            </div>
            <div className="flex justify-between py-[9px] px-[12px]">
              <span className="font-semibold">Excel Avançado</span>
              <span className="mono font-mono">18</span>
            </div>
          </div>
        </div>
      </div>
    </HeroCard>
  );
}
