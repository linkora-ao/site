import { Link } from "@tanstack/react-router";

export function HeroSection() {
  return (
    <section className="on-n bg-primary text-background relative overflow-clip">
      <svg
        className="absolute -right-[clamp(144px,16.67vw,240px)] -top-[clamp(180px,20.83vw,300px)] size-[800px]"
        aria-hidden="true"
        viewBox="0 0 800 800"
      >
        <circle className="stroke-primary-strong" cx="400" cy="400" r="220" fill="none" strokeWidth="2" />
        <circle className="stroke-primary-strong" cx="400" cy="400" r="300" fill="none" strokeWidth="2" opacity=".7" />
        <circle className="stroke-primary-strong" cx="400" cy="400" r="380" fill="none" strokeWidth="2" opacity=".45" />
      </svg>
      <div className="container relative pt-[clamp(37px,3.89vw,56px)] pb-[clamp(128px,13.89vw,200px)]">
        <nav className="mono font-mono text-[13px] text-muted-on-primary" aria-label="Caminho de navegação">
          <Link to="/" className="text-muted-on-primary no-underline">
            Início
          </Link>{" "}
          <span className="text-accent">/</span> <span className="text-background">Produtos</span>
        </nav>
        <div className="eyebrow mt-[clamp(34px,3.89vw,56px)]">Produtos</div>
        <h1 className="disp h-xl display-xl mt-[24px] text-[length:clamp(35px,5.28vw,76px)] leading-[1.02] max-w-[900px]">
          Software <span className="text-accent">nosso</span>, mantido por nós.
        </h1>
        <p className="mt-[28px] text-[20px] leading-[1.6] text-muted-on-primary max-w-[640px]">
          Além de construir software para clientes, a Linkora desenvolve produtos próprios para problemas que vemos
          repetir-se em Angola. Começamos pela formação.
        </p>
      </div>
    </section>
  );
}
