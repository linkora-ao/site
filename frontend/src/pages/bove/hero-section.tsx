import { Link } from "@tanstack/react-router";
import { buttonVariants } from "@components/atoms/button";
import { Icon } from "@components/atoms/icon";

export function HeroSection() {
  return (
    <section className="on-n bg-primary text-background relative overflow-clip">
      <svg
        className="absolute -right-[clamp(156px,18.06vw,260px)] -top-[clamp(72px,8.33vw,120px)] size-[800px]"
        aria-hidden="true"
        viewBox="0 0 800 800"
      >
        <circle className="stroke-primary-strong" cx="400" cy="400" r="220" fill="none" strokeWidth="2" />
        <circle className="stroke-primary-strong" cx="400" cy="400" r="300" fill="none" strokeWidth="2" opacity=".7" />
        <circle className="stroke-primary-strong" cx="400" cy="400" r="380" fill="none" strokeWidth="2" opacity=".45" />
      </svg>
      <div className="container relative pt-[clamp(37px,3.89vw,56px)] pb-[clamp(77px,8.33vw,120px)]">
        <nav className="mono font-mono text-[13px] text-muted-on-primary" aria-label="Caminho de navegação">
          <Link to="/" className="text-muted-on-primary no-underline">
            Início
          </Link>{" "}
          <span className="text-accent">/</span>{" "}
          <Link to="/produtos" className="text-muted-on-primary no-underline">
            Produtos
          </Link>{" "}
          <span className="text-accent">/</span> <span className="text-background">BOVE</span>
        </nav>
        <div className="stack grid grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] gap-[clamp(34px,3.89vw,56px)] items-center mt-[44px]">
          <div>
            <span className="inline-flex items-center gap-[10px] text-[14px] font-semibold border border-border-on-primary rounded-full py-[8px] px-[16px]">
              <span className="rounded-full bg-accent size-[9px]" aria-hidden="true"></span>Disponível em piloto · 2
              vagas
            </span>
            <h1 className="disp hbove display-xl mt-[22px] text-[length:clamp(76px,11.67vw,168px)] leading-[.88] text-accent">
              BOVE
            </h1>
            <p className="disp display mt-[20px] text-[length:clamp(26px,2.78vw,40px)] leading-[1.08]">
              Gere o teu centro de formação sem folhas de Excel.
            </p>
            <p className="mt-[22px] text-[19px] leading-[1.6] text-muted-on-primary max-w-[520px]">
              Inscrições, turmas, propinas em kwanzas e certificados num só sistema. Feito em Luanda, com suporte de
              quem o construiu.
            </p>
            <div className="flex flex-wrap items-center gap-y-[14px] gap-x-[20px] mt-[36px]">
              <a href="#contacto" className={buttonVariants({ variant: "primary", size: "lg" })}>
                Pedir demonstração
              </a>
              <a href="#contacto" className={buttonVariants({ variant: "outline-on-primary", size: "lg" })}>
                Candidatar-me ao piloto
              </a>
            </div>
            <a href="#problema" className="lnk inline-block mt-[26px] text-background">
              Saber mais{" "}
              <span className="arr" aria-hidden="true">
                ↓
              </span>
            </a>
          </div>
          <div className="relative">
            <div className="pxm">
              <div className="bg-card border border-border rounded-[12px] overflow-hidden shadow-card text-primary shadow-[0_40px_90px_-30px_rgba(0,0,0,.65)]">
                <div className="wbar">
                  <i></i>
                  <i></i>
                  <i></i>
                  <span className="u">centrox.bove.ao</span>
                </div>
                <div className="flex min-h-[430px] max-[600px]:min-h-0">
                  <div className="max-[600px]:hidden w-[170px] flex-none bg-primary py-[18px] px-[12px] grid gap-[4px] [align-content:start] text-[13px] font-semibold text-muted-on-primary">
                    <span className="disp display text-[19px] text-background pt-0 pb-[14px] px-[10px]">BOVE</span>
                    <span className="py-[9px] px-[10px] bg-primary-strong text-background rounded-[6px]">Painel</span>
                    <span className="py-[9px] px-[10px]">Turmas</span>
                    <span className="py-[9px] px-[10px]">Formandos</span>
                    <span className="py-[9px] px-[10px]">Finanças</span>
                    <span className="py-[9px] px-[10px]">Certificados</span>
                    <span className="py-[9px] px-[10px]">Formadores</span>
                  </div>
                  <div className="flex-1 min-w-0 p-[22px] max-[600px]:p-[14px] grid gap-[14px] [align-content:start]">
                    <div className="flex flex-wrap justify-between items-center gap-x-[12px] gap-y-[2px]">
                      <span className="disp display text-[23px] max-[600px]:text-[19px]">Painel · Centro X</span>
                      <span className="text-[12px] text-muted-foreground">Novembro 2026</span>
                    </div>
                    <div className="grid grid-cols-[repeat(4,minmax(0,1fr))] max-[600px]:grid-cols-[repeat(2,minmax(0,1fr))] gap-[10px]">
                      <div className="border border-border rounded-[8px] p-[12px]">
                        <div className="text-[11px] font-semibold text-muted-foreground">Formandos activos</div>
                        <div className="mono font-mono text-[22px] font-medium mt-[8px]">248</div>
                      </div>
                      <div className="border border-border rounded-[8px] p-[12px]">
                        <div className="text-[11px] font-semibold text-muted-foreground">Turmas em curso</div>
                        <div className="mono font-mono text-[22px] font-medium mt-[8px]">12</div>
                      </div>
                      <div className="border border-border rounded-[8px] p-[12px]">
                        <div className="text-[11px] font-semibold text-muted-foreground">Recebido no mês</div>
                        <div className="mono font-mono text-[15px] font-medium mt-[8px] text-accent-dark mt-[12px]">
                          1 850 000 Kz
                        </div>
                      </div>
                      <div className="border border-border rounded-[8px] p-[12px]">
                        <div className="text-[11px] font-semibold text-muted-foreground">Presença média</div>
                        <div className="mono font-mono text-[22px] font-medium mt-[8px]">91%</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] max-[600px]:grid-cols-[minmax(0,1fr)] gap-[12px]">
                      <div className="border border-border rounded-[8px] p-[14px]">
                        <div className="text-[11.5px] font-bold">Recebido esta semana</div>
                        <div className="flex items-end gap-[8px] h-[110px] mt-[14px]" aria-hidden="true">
                          <span className="flex-1 h-[40%] bg-primary rounded-[3px_3px_0_0]"></span>
                          <span className="flex-1 h-[62%] bg-primary rounded-[3px_3px_0_0]"></span>
                          <span className="flex-1 h-[50%] bg-primary rounded-[3px_3px_0_0]"></span>
                          <span className="flex-1 h-[88%] bg-accent rounded-[3px_3px_0_0]"></span>
                          <span className="flex-1 h-[70%] bg-primary rounded-[3px_3px_0_0]"></span>
                          <span className="flex-1 h-[36%] bg-primary rounded-[3px_3px_0_0]"></span>
                          <span className="flex-1 h-[24%] bg-primary rounded-[3px_3px_0_0]"></span>
                        </div>
                      </div>
                      <div className="border border-border rounded-[8px] overflow-hidden text-[12.5px]">
                        <div className="py-[10px] px-[12px] border-b border-b-border font-bold text-[11.5px]">
                          Turmas em curso
                        </div>
                        <div className="flex justify-between py-[10px] px-[12px] border-b border-b-border">
                          <span className="font-semibold">Informática de Gestão</span>
                          <span className="mono font-mono">24</span>
                        </div>
                        <div className="flex justify-between py-[10px] px-[12px] border-b border-b-border">
                          <span className="font-semibold">Excel Avançado</span>
                          <span className="mono font-mono">18</span>
                        </div>
                        <div className="flex justify-between py-[10px] px-[12px] border-b border-b-border">
                          <span className="font-semibold">Contabilidade Geral</span>
                          <span className="mono font-mono">22</span>
                        </div>
                        <div className="flex justify-between py-[10px] px-[12px]">
                          <span className="font-semibold">Secretariado</span>
                          <span className="mono font-mono">16</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fy1 absolute -right-[22px] top-[clamp(34px,3.89vw,56px)]">
              <span className="chp">
                <Icon name="check" size={20} className="ico text-accent-dark size-[20px]" />
                Recibo emitido · 45 000 Kz
              </span>
            </div>
            <div className="fy2 absolute -left-[34px] bottom-[46px]">
              <span className="chp">
                <Icon name="check" size={20} className="ico text-accent-dark size-[20px]" />
                Certificado pronto · Ana Domingos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
