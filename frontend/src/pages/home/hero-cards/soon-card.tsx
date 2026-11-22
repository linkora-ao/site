import { HeroCard, HeroCardBar } from "./hero-card";

const Skeleton = ({ className }: { className: string }) => (
  <span aria-hidden="true" className={`block h-[10px] rounded-[5px] bg-background-alt ${className}`} />
);

/** Teaser do próximo produto: mantém o carrossel pronto para novos produtos. */
export function SoonCard() {
  return (
    <HeroCard>
      <HeroCardBar label="Próximo produto" note="em breve" noteClassName="text-accent-dark" />
      <div className="flex flex-1 flex-col gap-[18px] py-[28px] px-[26px]">
        <div className="disp display text-[26px] leading-[1.1] max-[480px]:text-[22px]">
          Mais um produto Linkora está a ser construído.
        </div>
        <p className="m-0 text-[15.5px] leading-[1.5] text-muted-foreground">
          Pensado para empresas angolanas e feito com o mesmo rigor da BOVE.
        </p>
        <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[10px] mt-[4px]">
          {[0, 1, 2].map((i) => (
            <div key={i} className="grid gap-[8px] border border-dashed border-[#C9BFAA] rounded-[8px] p-[12px]">
              <Skeleton className="w-1/2" />
              <span aria-hidden="true" className="block h-[22px] w-3/5 rounded-[5px] bg-background-alt" />
            </div>
          ))}
        </div>
        <div className="grid flex-1 gap-[10px] [align-content:start] border border-dashed border-[#C9BFAA] rounded-[8px] p-[16px]">
          <Skeleton className="w-[80%]" />
          <Skeleton className="w-[64%]" />
          <Skeleton className="w-[72%]" />
          <Skeleton className="w-[40%]" />
        </div>
      </div>
      <div className="flex items-center justify-between gap-[12px] py-[14px] px-[22px] bg-primary text-background">
        <span className="font-bold text-[14px]">Queres ser dos primeiros a saber?</span>
        <a href="#contacto" className="mono font-mono text-[12px] text-accent underline">
          Fala connosco
        </a>
      </div>
    </HeroCard>
  );
}
