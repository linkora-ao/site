interface ReservedSpaceProps {
  index: number;
}

function ReservedSpace({ index }: ReservedSpaceProps) {
  return (
    <div className="slot d reveal items-center justify-center text-center">
      <span className="mono font-mono text-[12.5px] tracking-[.08em]">
        PRODUTO {index.toString().padStart(2, "0")}
      </span>
      <span className="disp display text-[24px]">Espaço reservado</span>
      <span className="text-[14.5px] leading-[1.5] max-w-[220px]">
        Os novos produtos entram aqui, sem alterar o resto da página.
      </span>
    </div>
  );
}

export function MoreProductsSection() {
  return (
    <section
      className="sec bg-background-alt border-t border-t-border border-b border-b-border"
      id="mais-produtos"
    >
      <div className="container">
        <div className="flex flex-wrap justify-between items-end gap-[24px]">
          <div>
            <div className="eyebrow">Mais produtos</div>
            <h2 className="disp h-lg display leading-[1.05] mt-[20px] text-[length:clamp(26px,3.75vw,54px)]">
              Um produto hoje.
              <br />
              Mais a caminho.
            </h2>
          </div>
          <p className="body max-w-[420px] text-[17.5px]">
            Cada novo produto nasce de um problema que já resolvemos mais de uma
            vez para clientes, e é lançado primeiro em piloto.
          </p>
        </div>
        <div className="stack grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[24px] mt-[clamp(34px,3.89vw,56px)]">
          {/* <div className="slot f reveal">
            <div className="flex justify-between items-center">
              <span className="mono font-mono text-[12.5px] text-accent-dark tracking-[.08em]">PRODUTO 02</span>
              <span className="stt s-nv text-[11.5px] font-bold py-[3px] px-[9px] rounded-full bg-[#DCE4F1] text-[#173C70]">
                Em preparação
              </span>
            </div>
            <div className="disp display text-[length:clamp(26px,2.36vw,34px)] mt-[30px] text-muted-foreground">
              [Próximo produto]
            </div>
            <p className="m-0 text-[16px] leading-[1.6] text-muted-foreground">
              [Descrição curta em uma ou duas linhas: que problema resolve e para quem.]
            </p>
            <span className="lnk self-start mt-auto text-muted-foreground [border-bottom-color:var(--border-strong)]">
              Em breve
            </span>
          </div> */}
          <ReservedSpace index={2} />
          <ReservedSpace index={3} />
          <div className="slot d reveal items-center justify-center text-center">
            <span className="mono font-mono text-[12.5px] tracking-[.08em]">
              PRODUTO 04
            </span>
            <span className="disp display text-[24px]">Espaço reservado</span>
            <span className="text-[14.5px] leading-[1.5] max-w-[220px]">
              Ideias para produtos? Fala com a equipa.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
