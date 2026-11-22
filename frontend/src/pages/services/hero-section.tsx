import { Link } from "@tanstack/react-router";
import { buttonVariants } from "@components/atoms/button";

export function HeroSection() {
  return (
    <section className="on-n bg-primary text-background relative overflow-hidden">
      <svg
        className="absolute -right-[clamp(132px,15.28vw,220px)] -bottom-[clamp(180px,20.83vw,300px)] opacity-[.55]"
        aria-hidden="true"
        viewBox="0 0 600 600"
        width="640"
        height="640"
      >
        <circle className="stroke-primary-strong" cx="300" cy="300" r="120" fill="none" strokeWidth="2" />
        <circle className="stroke-primary-strong" cx="300" cy="300" r="200" fill="none" strokeWidth="2" />
        <circle className="stroke-primary-strong" cx="300" cy="300" r="280" fill="none" strokeWidth="2" />
      </svg>
      <div className="container pt-[clamp(37px,3.89vw,56px)] pb-[clamp(77px,8.33vw,120px)] relative">
        <nav className="mono font-mono text-[13px] text-muted-on-primary" aria-label="Caminho de navegação">
          <Link to="/" className="text-muted-on-primary no-underline">
            Início
          </Link>{" "}
          <span className="text-accent">/</span> <span className="text-background">Serviços</span>
        </nav>
        <div className="stack grid grid-cols-[minmax(0,1.2fr)_minmax(0,.8fr)] gap-[clamp(43px,5vw,72px)] items-center mt-[clamp(29px,3.33vw,48px)]">
          <div>
            <div className="eyebrow">Serviços</div>
            <h1 className="disp h-xl display-xl mt-[24px] text-[length:clamp(32px,4.86vw,70px)] leading-[1.02]">
              Tudo o que o teu negócio precisa de ter <span className="text-accent">em software.</span>
            </h1>
            <p className="mt-[28px] text-[20px] leading-[1.6] text-muted-on-primary max-w-[560px]">
              Plataformas, sistemas à medida e automações para PMEs e instituições em Angola. Construídos em Luanda, com
              código teu e suporte de quem os fez.
            </p>
            <div className="flex flex-wrap gap-[14px] mt-[40px]">
              <a href="#contacto" className={buttonVariants({ variant: "primary" })}>
                Pedir proposta
              </a>
              <a href="#lista" className={buttonVariants({ variant: "outline-on-primary" })}>
                Ver os 6 serviços{" "}
                <span className="arr" aria-hidden="true">
                  ↓
                </span>
              </a>
            </div>
          </div>
          <aside className="relative" aria-label="Índice de serviços">
            <div
              className="absolute -right-[26px] -top-[26px] rounded-full bg-accent size-[112px]"
              aria-hidden="true"
            ></div>
            <div className="relative bg-card text-primary rounded-[14px] pt-[26px] pb-[14px] px-[28px] shadow-[0_30px_60px_-24px_rgba(0,0,0,.55),inset_0_3px_0_0_var(--accent)]">
              <div className="flex justify-between items-center pb-[14px] border-b border-b-border">
                <span className="mono font-mono text-[12px] tracking-[.1em] uppercase text-accent-dark">Índice</span>
                <span className="mono font-mono text-[12px] text-muted-foreground">6 serviços</span>
              </div>
              <div>
                <a href="#s1" className="ixr">
                  <span className="n">01</span>
                  <span>Plataformas web</span>
                  <span className="arr" aria-hidden="true">
                    →
                  </span>
                </a>
                <a href="#s2" className="ixr">
                  <span className="n">02</span>
                  <span>Software à medida</span>
                  <span className="arr" aria-hidden="true">
                    →
                  </span>
                </a>
                <a href="#s3" className="ixr">
                  <span className="n">03</span>
                  <span>ERP e gestão</span>
                  <span className="arr" aria-hidden="true">
                    →
                  </span>
                </a>
                <a href="#s4" className="ixr">
                  <span className="n">04</span>
                  <span>CRM e vendas</span>
                  <span className="arr" aria-hidden="true">
                    →
                  </span>
                </a>
                <a href="#s5" className="ixr">
                  <span className="n">05</span>
                  <span>Automações</span>
                  <span className="arr" aria-hidden="true">
                    →
                  </span>
                </a>
                <a href="#s6" className="ixr">
                  <span className="n">06</span>
                  <span>Websites institucionais</span>
                  <span className="arr" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
