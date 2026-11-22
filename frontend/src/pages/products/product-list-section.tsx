import { ButtonLink } from "@components/molecules/button-link";
import { buttonVariants } from "@components/atoms/button";

export function ProductListSection() {
  return (
    <section
      className="bg-[linear-gradient(var(--primary)_0,var(--primary)_120px,var(--background)_120px)] -mt-[clamp(72px,8.33vw,120px)] relative pb-[clamp(72px,7.78vw,112px)]"
      id="produtos-lista"
    >
      <div className="container">
        <div className="fcard relative">
          <div className="pt-[clamp(37px,3.89vw,56px)] pb-[clamp(34px,3.61vw,52px)] px-[clamp(34px,3.61vw,52px)] flex flex-col gap-0">
            <div className="flex flex-wrap items-center gap-y-[14px] gap-x-[18px]">
              <span className="mono font-mono text-[13px] text-accent-dark">PRODUTO 01 · EM DESTAQUE</span>
              <span className="inline-flex items-center gap-[9px] text-[13.5px] font-semibold bg-background-alt border border-border rounded-full py-[6px] px-[14px]">
                <span className="rounded-full bg-accent size-[9px]" aria-hidden="true"></span>Disponível em piloto
              </span>
            </div>
            <h2 className="disp display mt-[26px] text-[length:clamp(59px,9.17vw,132px)] leading-[.9] text-primary">
              BOVE<span className="text-accent">.</span>
            </h2>
            <p className="disp display mt-[22px] text-[length:clamp(26px,2.36vw,34px)] leading-[1.1]">
              A plataforma que gere o teu centro de formação.
            </p>
            <p className="body mt-[18px] text-[18px] max-w-[480px]">
              Inscrições, turmas, propinas em kwanzas e certificados num só sistema. Cada instituição tem o seu espaço,
              a sua identidade e os seus dados.
            </p>
            <div className="flex flex-wrap gap-[8px] mt-[24px]">
              <span className="chip text-muted-foreground">multitenant</span>
              <span className="chip text-muted-foreground">turmas e horários</span>
              <span className="chip text-muted-foreground">propinas em kwanzas</span>
              <span className="chip text-muted-foreground">certificados</span>
            </div>
            <div className="flex flex-wrap items-center gap-y-[14px] gap-x-[18px] mt-[36px]">
              <ButtonLink to="/bove" variant="navy" size="lg">
                Ver a página da BOVE{" "}
                <span className="arr" aria-hidden="true">
                  →
                </span>
              </ButtonLink>
              <a href="#contacto" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Candidatar-me ao piloto
              </a>
            </div>
          </div>
          <div className="fart">
            <svg
              className="absolute -left-[clamp(72px,8.33vw,120px)] -top-[clamp(120px,13.89vw,200px)] size-[700px]"
              aria-hidden="true"
              viewBox="0 0 800 800"
            >
              <circle className="stroke-primary-strong" cx="400" cy="400" r="220" fill="none" strokeWidth="2" />
              <circle
                className="stroke-primary-strong"
                cx="400"
                cy="400"
                r="300"
                fill="none"
                strokeWidth="2"
                opacity=".7"
              />
            </svg>
            <div className="pxm relative w-full">
              <div className="bg-card text-primary rounded-[12px_0_0_0] overflow-hidden w-full shadow-[0_-10px_60px_-20px_rgba(0,0,0,.5)]">
                <div className="wbar">
                  <i></i>
                  <i></i>
                  <i></i>
                  <span className="u">centrox.bove.ao</span>
                </div>
                <div className="flex min-h-[360px]">
                  <div className="w-[140px] flex-none bg-primary py-[16px] px-[10px] grid gap-[4px] [align-content:start] text-[12.5px] font-semibold text-muted-on-primary">
                    <span className="disp display text-[17px] text-background pt-0 pb-[12px] px-[10px]">BOVE</span>
                    <span className="py-[8px] px-[10px] bg-primary-strong text-background rounded-[6px]">Painel</span>
                    <span className="py-[8px] px-[10px]">Turmas</span>
                    <span className="py-[8px] px-[10px]">Formandos</span>
                    <span className="py-[8px] px-[10px]">Finanças</span>
                    <span className="py-[8px] px-[10px]">Certificados</span>
                  </div>
                  <div className="flex-1 min-w-0 p-[18px] grid gap-[12px] [align-content:start]">
                    <div className="disp display text-[19px]">Painel · Centro X</div>
                    <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[8px]">
                      <div className="border border-border rounded-[8px] p-[11px]">
                        <div className="text-[10.5px] font-semibold text-muted-foreground">Formandos activos</div>
                        <div className="mono font-mono text-[17px] font-medium mt-[7px]">248</div>
                      </div>
                      <div className="border border-border rounded-[8px] p-[11px]">
                        <div className="text-[10.5px] font-semibold text-muted-foreground">Turmas em curso</div>
                        <div className="mono font-mono text-[17px] font-medium mt-[7px]">12</div>
                      </div>
                      <div className="border border-border rounded-[8px] p-[11px]">
                        <div className="text-[10.5px] font-semibold text-muted-foreground">Recebido no mês</div>
                        <div className="mono font-mono text-[17px] font-medium mt-[7px] text-accent-dark">
                          1,85 M Kz
                        </div>
                      </div>
                    </div>
                    <div className="border border-border rounded-[8px] p-[12px]">
                      <div className="text-[11px] font-bold">Recebido esta semana</div>
                      <div className="flex items-end gap-[8px] h-[96px] mt-[12px]" aria-hidden="true">
                        <span className="flex-1 h-[40%] bg-primary rounded-[3px_3px_0_0]"></span>
                        <span className="flex-1 h-[62%] bg-primary rounded-[3px_3px_0_0]"></span>
                        <span className="flex-1 h-[50%] bg-primary rounded-[3px_3px_0_0]"></span>
                        <span className="flex-1 h-[88%] bg-accent rounded-[3px_3px_0_0]"></span>
                        <span className="flex-1 h-[70%] bg-primary rounded-[3px_3px_0_0]"></span>
                        <span className="flex-1 h-[36%] bg-primary rounded-[3px_3px_0_0]"></span>
                        <span className="flex-1 h-[24%] bg-primary rounded-[3px_3px_0_0]"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
