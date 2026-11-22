import { Link } from "@tanstack/react-router";

export function HeroSection() {
  return (
    <section className="on-n bg-primary text-background relative overflow-clip">
      <svg
        className="absolute -right-[clamp(144px,16.67vw,240px)] -top-[clamp(156px,18.06vw,260px)] size-[800px]"
        aria-hidden="true"
        viewBox="0 0 800 800"
      >
        <circle className="stroke-primary-strong" cx="400" cy="400" r="220" fill="none" strokeWidth="2" />
        <circle className="stroke-primary-strong" cx="400" cy="400" r="300" fill="none" strokeWidth="2" opacity=".7" />
        <circle className="stroke-primary-strong" cx="400" cy="400" r="380" fill="none" strokeWidth="2" opacity=".45" />
      </svg>
      <div className="container relative pt-[clamp(37px,3.89vw,56px)] pb-[clamp(122px,13.19vw,190px)]">
        <nav className="mono font-mono text-[13px] text-muted-on-primary" aria-label="Caminho de navegação">
          <Link to="/" className="text-muted-on-primary no-underline">
            Início
          </Link>{" "}
          <span className="text-accent">/</span> <span className="text-background">Contacto</span>
        </nav>
        <div className="eyebrow mt-[clamp(29px,3.33vw,48px)]">Contacto</div>
        <h1 className="disp h-xl display-xl mt-[24px] text-[length:clamp(31px,4.72vw,68px)] leading-[1.03] max-w-[860px]">
          Fala com quem vai <span className="text-accent">construir</span> o teu projecto.
        </h1>
        <p className="mt-[26px] text-[20px] leading-[1.6] text-muted-on-primary max-w-[600px]">
          Conta-nos o que precisas. Respondemos por email ou WhatsApp, sem compromisso.
        </p>
      </div>
    </section>
  );
}
