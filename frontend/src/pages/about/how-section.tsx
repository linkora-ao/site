import { Link } from "@tanstack/react-router";

export function HowSection() {
  return (
    <section className="sec on-n bg-primary text-background relative overflow-clip" id="como">
      <div
        className="absolute -right-[clamp(108px,12.5vw,180px)] -top-[clamp(108px,12.5vw,180px)] rounded-full border-2 border-primary-strong size-[480px]"
        aria-hidden="true"
      ></div>
      <div className="container relative">
        <div className="stack grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-[clamp(43px,5vw,72px)] items-end">
          <div>
            <div className="eyebrow">Como trabalhamos</div>
            <h2 className="disp h-lg display leading-[1.05] mt-[20px] text-[length:clamp(26px,3.75vw,54px)]">
              Por fases, de perto e com o resultado à frente.
            </h2>
          </div>
          <p className="m-0 text-[19px] leading-[1.65] text-muted-on-primary max-w-[520px]">
            Trabalhar com uma equipa pequena quer dizer menos intermediários. Cada projecto avança por fases claras, e
            só passas à seguinte quando estás de acordo com a anterior.
          </p>
        </div>
        <div className="stps mt-[clamp(43px,5vw,72px)]">
          <div className="stp">
            <div className="nd">01</div>
            <div className="disp display text-[26px] mt-[22px]">Descoberta</div>
            <p className="mt-[10px] text-[16.5px] leading-[1.6] text-muted-on-primary">
              Percebemos o teu negócio e o problema real antes de propor seja o que for.
            </p>
          </div>
          <div className="stp">
            <div className="nd">02</div>
            <div className="disp display text-[26px] mt-[22px]">Desenho</div>
            <p className="mt-[10px] text-[16.5px] leading-[1.6] text-muted-on-primary">
              Fechamos âmbito, prazos e entregáveis por fases, em kwanzas.
            </p>
          </div>
          <div className="stp">
            <div className="nd">03</div>
            <div className="disp display text-[26px] mt-[22px]">Construção</div>
            <p className="mt-[10px] text-[16.5px] leading-[1.6] text-muted-on-primary">
              Desenvolvemos com entregas visíveis, para acompanhares o avanço.
            </p>
          </div>
          <div className="stp">
            <div className="nd">04</div>
            <div className="disp display text-[26px] mt-[22px]">Operação</div>
            <p className="mt-[10px] text-[16.5px] leading-[1.6] text-muted-on-primary">
              Lançamos, monitorizamos e ficamos contigo depois do deploy.
            </p>
          </div>
        </div>
        <div className="mt-[clamp(43px,5vw,72px)] flex flex-wrap items-center justify-between gap-y-[20px] gap-x-[40px] border border-border-on-primary bg-primary-soft rounded-[14px] py-[30px] px-[clamp(24px,2.5vw,36px)]">
          <div className="disp display text-[28px] leading-[1.15] max-w-[560px]">
            Falas sempre com quem escreve o código.
          </div>
          <Link to="/" className="lnk text-background">
            Ver o processo completo{" "}
            <span className="arr" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
