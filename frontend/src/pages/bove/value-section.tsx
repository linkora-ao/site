export function ValueSection() {
  return (
    <section className="sec on-n bg-primary text-background relative overflow-clip" id="valor">
      <div
        className="absolute -right-[clamp(108px,12.5vw,180px)] -top-[clamp(108px,12.5vw,180px)] rounded-full border-2 border-primary-strong size-[480px]"
        aria-hidden="true"
      ></div>
      <div className="container relative">
        <div className="max-w-[780px]">
          <div className="eyebrow">Porquê a BOVE</div>
          <h2 className="disp h-lg display leading-[1.05] mt-[20px] text-[length:clamp(26px,3.75vw,54px)]">
            Feita para o contexto angolano. Mantida por nós.
          </h2>
        </div>
        <div className="stack grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[20px] mt-[clamp(38px,4.44vw,64px)]">
          <div className="bn reveal span-all col-span-2">
            <div className="mono font-mono text-[13px] text-accent">Multitenant</div>
            <h3 className="disp display mt-[14px] text-[length:clamp(26px,2.64vw,38px)] leading-[1.05]">
              Um espaço por instituição.
              <br />
              Uma só plataforma por baixo.
            </h3>
            <p className="mt-[16px] text-[17px] leading-[1.6] text-muted-on-primary max-w-[520px]">
              Cada centro tem o seu subdomínio, a sua identidade e os seus dados separados. Nós tratamos das
              actualizações para todos.
            </p>
            <div className="flex max-[600px]:flex-col gap-[12px] mt-[32px]">
              <div className="flex-1 bg-background text-primary rounded-[10px] py-[14px] px-[16px] flex items-center gap-[10px] text-[13.5px] font-bold">
                <span className="rounded-full bg-accent flex-none size-[10px]"></span>
                <span className="mono font-mono font-medium text-[12.5px]">centrox.bove.ao</span>
              </div>
              <div className="flex-1 bg-primary-strong rounded-[10px] py-[14px] px-[16px] flex items-center gap-[10px] text-[13.5px] font-bold">
                <span className="rounded-full bg-background flex-none size-[10px]"></span>
                <span className="mono font-mono font-medium text-[12.5px]">formar.bove.ao</span>
              </div>
              <div className="flex-1 bg-accent text-primary rounded-[10px] py-[14px] px-[16px] flex items-center gap-[10px] text-[13.5px] font-bold">
                <span className="rounded-full bg-primary flex-none size-[10px]"></span>
                <span className="mono font-mono font-medium text-[12.5px]">academia.bove.ao</span>
              </div>
            </div>
            <div className="flex justify-around h-[26px] py-0 px-[15%] max-[600px]:h-[12px]" aria-hidden="true">
              <span className="w-[2px] bg-border-on-primary"></span>
              <span className="w-[2px] bg-border-on-primary"></span>
              <span className="w-[2px] bg-border-on-primary"></span>
            </div>
            <div className="border border-border-on-primary rounded-[10px] py-[16px] px-[20px] flex justify-between items-center gap-[12px] max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-[6px] bg-primary-deep">
              <span className="disp display text-[20px]">Núcleo BOVE</span>
              <span className="mono font-mono text-[12.5px] text-muted-on-primary">
                código, servidores e actualizações · Linkora
              </span>
            </div>
          </div>
          <div className="bn reveal">
            <div className="mono font-mono text-[13px] text-accent">Kwanzas</div>
            <div className="mono font-mono mt-[22px] text-[length:clamp(26px,2.78vw,40px)] font-medium tracking-[-0.03em] text-background">
              45 000<span className="text-accent">Kz</span>
            </div>
            <h3 className="disp display mt-[22px] text-[26px]">Tudo em kwanzas.</h3>
            <p className="mt-[10px] text-[16px] leading-[1.6] text-muted-on-primary">
              Propinas, recibos e relatórios na moeda com que o teu centro trabalha.
            </p>
          </div>
          <div className="bn reveal">
            <div className="mono font-mono text-[13px] text-accent">Suporte local</div>
            <h3 className="disp display mt-[22px] text-[30px] leading-[1.08]">Equipa em Luanda.</h3>
            <p className="mt-[12px] text-[16px] leading-[1.6] text-muted-on-primary">
              Falas com quem construiu a BOVE, no teu fuso horário e na tua língua.
            </p>
          </div>
          <div className="bn reveal span-all col-span-2 flex flex-wrap items-center justify-between gap-y-[20px] gap-x-[40px]">
            <div className="max-w-[480px]">
              <div className="mono font-mono text-[13px] text-accent">Estabilidade</div>
              <h3 className="disp display mt-[14px] text-[32px] leading-[1.08]">
                Um sistema que não pára no meio do mês.
              </h3>
              <p className="mt-[12px] text-[16px] leading-[1.6] text-muted-on-primary">
                Monitorização, backups e actualizações geridas pela Linkora. Tu focas-te nos formandos.
              </p>
            </div>
            <div className="mono font-mono text-[length:clamp(29px,4.44vw,64px)] font-medium tracking-[-0.04em] text-accent leading-[1]">
              99,99%
              <div className="text-[12px] tracking-[.04em] text-muted-on-primary mt-[8px] font-normal">
                disponibilidade-alvo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
