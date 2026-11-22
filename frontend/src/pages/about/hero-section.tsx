import { Link } from "@tanstack/react-router";
import { ButtonLink } from "@components/molecules/button-link";
import { buttonVariants } from "@components/atoms/button";

export function HeroSection() {
  return (
    <section className="on-n bg-primary text-background relative overflow-clip">
      <svg
        className="absolute -right-[clamp(156px,18.06vw,260px)] -top-[clamp(96px,11.11vw,160px)] size-[800px]"
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
          <span className="text-accent">/</span> <span className="text-background">Sobre</span>
        </nav>
        <div className="stack grid grid-cols-[minmax(0,1.15fr)_minmax(0,.85fr)] gap-[clamp(43px,5vw,72px)] items-center mt-[clamp(29px,3.33vw,48px)]">
          <div>
            <div className="eyebrow">Sobre a Linkora</div>
            <h1 className="disp h-xl display-xl mt-[24px] text-[length:clamp(31px,4.72vw,68px)] leading-[1.03]">
              Software feito em Luanda, com padrões que <span className="text-accent">não negociamos.</span>
            </h1>
            <p className="mt-[28px] text-[20px] leading-[1.6] text-muted-on-primary max-w-[580px]">
              A Linkora é uma startup angolana de tecnologia. Construímos plataformas e sistemas para PMEs e
              instituições de formação, com código próprio, estabilidade e suporte de quem os construiu.
            </p>
            <div className="flex flex-wrap gap-[14px] mt-[40px]">
              <a href="#contacto" className={buttonVariants({ variant: "primary" })}>
                Falar connosco
              </a>
              <ButtonLink to="/servicos" variant="outline-on-primary">
                Ver os serviços
              </ButtonLink>
            </div>
          </div>
          <aside className="relative" aria-label="Ficha da empresa">
            <div
              className="absolute -right-[26px] -top-[26px] rounded-full bg-accent size-[112px]"
              aria-hidden="true"
            ></div>
            <dl className="fch relative m-0">
              <div className="r">
                <dt className="k">Sede</dt>
                <dd className="v m-0">Luanda, Angola</dd>
              </div>
              <div className="r">
                <dt className="k">Foco</dt>
                <dd className="v m-0">PMEs e instituições de formação</dd>
              </div>
              <div className="r">
                <dt className="k">Fazemos</dt>
                <dd className="v m-0">Plataformas, software à medida, ERP, CRM, automações e websites</dd>
              </div>
              <div className="r">
                <dt className="k">Produto</dt>
                <dd className="v m-0">BOVE, em piloto</dd>
              </div>
              <div className="r">
                <dt className="k">Equipa</dt>
                <dd className="v m-0">Pequena, de propósito</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
