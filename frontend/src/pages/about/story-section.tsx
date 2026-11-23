export function StorySection() {
  return (
    <section className="sec bg-background" id="historia">
      <div className="container">
        <div className="stack grid grid-cols-[minmax(0,.95fr)_minmax(0,1.05fr)] gap-[clamp(58px,6.67vw,96px)] items-start">
          <div className="sticky top-[clamp(78px,9.03vw,130px)]">
            <div className="eyebrow">Porque existimos</div>
            <h2 className="disp h-lg display leading-[1.05] mt-[20px] text-[length:clamp(26px,3.75vw,54px)]">
              Há software que impressiona na demonstração e falha na segunda
              semana.
            </h2>
          </div>
          <div>
            <p className="reveal m-0 text-[22px] leading-[1.55] font-semibold text-primary">
              A Linkora nasce em Luanda de uma ideia simples: as empresas e
              instituições angolanas merecem software estável, bem pensado e
              mantido.
            </p>
            <p className="body reveal mt-[28px] text-[19px]">
              Em demasiados projectos, o software é entregue e esquecido.
              Funciona na apresentação, falha quando o negócio cresce e ninguém
              responde quando é preciso. Decidimos fazer ao contrário: poucos
              projectos, bem feitos, e acompanhados depois do lançamento.
            </p>
            <p className="body reveal mt-[22px] text-[19px]">
              Começámos pequenos, de propósito. Hoje a equipa é um fundador que
              programa, o que significa que falas sempre com quem escreve o
              código. O nosso primeiro produto próprio, a BOVE, nasceu desta
              mesma exigência.
            </p>
            <div className="reveal flex flex-wrap gap-[10px] mt-[32px] text-primary">
              <span className="chip">poucos projectos</span>
              <span className="chip">bem feitos</span>
              <span className="chip">acompanhados depois do lançamento</span>
            </div>
            <div className="reveal mt-[clamp(34px,3.89vw,56px)] grid grid-cols-[96px_minmax(0,1fr)] gap-[24px] items-center bg-card border border-border rounded-[14px] p-[26px] shadow-card">
              <div
                className="rounded-full bg-primary relative overflow-hidden size-[96px] border border-border"
                aria-hidden="true"
              >
                <img
                  src="/users/euclides-ribeiro.jpeg"
                  className="aspect-square object-cover"
                  alt="Euclides Ribeiro - Fundador"
                />
              </div>
              <div>
                <div className="mono font-mono text-[12px] tracking-[.08em] uppercase text-accent-dark">
                  Quem está por trás
                </div>
                <div className="disp display text-[26px] mt-[8px]">
                  Euclides Ribeiro
                </div>
                <div className="font-semibold mt-[2px]">Fundador</div>
                <p className="mt-[10px] text-[15.5px] leading-[1.55] text-muted-foreground">
                  Consultor de Contabilidade e Finanças. Licenciado em
                  Contabilidade e Finanças pelo Instituto Superior Técnico de
                  Administração e Finanças (ISAF).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
