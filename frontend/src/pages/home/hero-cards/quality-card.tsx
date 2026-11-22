import { Icon } from "@components/atoms/icon";
import { QUALITY_GATES } from "@data/quality-gates";
import { HeroCard, HeroCardBar } from "./hero-card";

/** Ficha de controlo de qualidade de uma entrega: o rigor mostrado, não só dito. */
export function QualityCard() {
  return (
    <HeroCard>
      <HeroCardBar label="Controlo de qualidade" note="entrega · 6 critérios" />
      <div className="flex-1 py-[10px] px-[22px]">
        <div className="disp display text-[22px] pt-[8px] max-[480px]:text-[20px]">
          Nada segue para produção sem passar aqui.
        </div>
        <ul className="list-none m-0 p-0 mt-[14px]">
          {QUALITY_GATES.map((gate) => (
            <li
              key={gate.label}
              className="flex items-center gap-[14px] py-[13px] px-0 border-t border-t-border text-[15.5px] font-semibold"
            >
              <span className="rounded-full bg-primary text-accent inline-flex items-center justify-center flex-none size-[24px]">
                <Icon name="check" size={14} />
              </span>
              <span className="flex-1">{gate.label}</span>
              <span className="mono font-mono text-[12px] font-medium text-accent-dark">{gate.status}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between gap-[12px] py-[14px] px-[22px] bg-primary text-background">
        <span className="font-bold text-[14px]">Pronto para produção</span>
        <span className="mono font-mono text-[12px] text-accent">{QUALITY_GATES.length} / {QUALITY_GATES.length}</span>
      </div>
    </HeroCard>
  );
}
