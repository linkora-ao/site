import { Icon } from "@components/atoms/icon";

export function FeaturesSection() {
  return (
    <section className="sec bg-background-alt border-t border-t-border border-b border-b-border" id="funcionalidades">
      <div className="container">
        <div className="max-w-[760px]">
          <div className="eyebrow">Funcionalidades</div>
          <h2 className="disp h-lg display leading-[1.05] mt-[20px] text-[length:clamp(26px,3.75vw,54px)]">
            Tudo o que um centro de formação usa todos os dias.
          </h2>
        </div>
        <div className="grid gap-[clamp(72px,8.33vw,120px)] mt-[clamp(53px,6.11vw,88px)]">
          <div className="fb">
            <div className="reveal">
              <div className="mono font-mono text-[13px] text-accent-dark">01 / 04 · Formandos</div>
              <h3 className="disp display mt-[16px] text-[length:clamp(26px,3.06vw,44px)]">
                Inscrições e fichas de formandos
              </h3>
              <p className="body mt-[18px] text-[18px]">
                Cada formando tem uma ficha única, com os cursos que frequenta, o estado da inscrição e o histórico de
                pagamentos.
              </p>
              <ul className="fl2">
                <li>
                  <span className="ck">
                    <Icon name="check" size={14} className="ico size-[14px]" />
                  </span>
                  <span>Inscrição rápida, sem papel</span>
                </li>
                <li>
                  <span className="ck">
                    <Icon name="check" size={14} className="ico size-[14px]" />
                  </span>
                  <span>Estados claros: activo, pendente, concluído</span>
                </li>
                <li>
                  <span className="ck">
                    <Icon name="check" size={14} className="ico size-[14px]" />
                  </span>
                  <span>Procura por nome, curso ou turma</span>
                </li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-[12px] overflow-hidden shadow-card text-primary">
              <div className="wbar">
                <i></i>
                <i></i>
                <i></i>
                <span className="u">centrox.bove.ao/formandos</span>
              </div>
              <div className="flex justify-between items-center p-[16px]">
                <span className="disp display text-[20px]">Formandos · 248</span>
                <span className="text-[12.5px] text-muted-foreground border border-border rounded-full py-[6px] px-[14px] min-w-[120px]">
                  Pesquisar…
                </span>
              </div>
              <div className="trow grid-cols-[28px_minmax(0,1fr)_auto]">
                <span className="av">AD</span>
                <span className="min-w-0">
                  <b className="block">Ana Domingos</b>
                  <span className="text-muted-foreground text-[12px]">Informática de Gestão</span>
                </span>
                <span className="stt s-ok">Activa</span>
              </div>
              <div className="trow grid-cols-[28px_minmax(0,1fr)_auto]">
                <span className="av">EK</span>
                <span className="min-w-0">
                  <b className="block">Eduardo Kiala</b>
                  <span className="text-muted-foreground text-[12px]">Excel Avançado</span>
                </span>
                <span className="stt s-ok">Activo</span>
              </div>
              <div className="trow grid-cols-[28px_minmax(0,1fr)_auto]">
                <span className="av">MC</span>
                <span className="min-w-0">
                  <b className="block">Mariana Cassule</b>
                  <span className="text-muted-foreground text-[12px]">Contabilidade Geral</span>
                </span>
                <span className="stt s-pd">Inscrição pendente</span>
              </div>
              <div className="trow grid-cols-[28px_minmax(0,1fr)_auto]">
                <span className="av">PQ</span>
                <span className="min-w-0">
                  <b className="block">Paulo Quimbamba</b>
                  <span className="text-muted-foreground text-[12px]">Secretariado</span>
                </span>
                <span className="stt s-nv">Concluído</span>
              </div>
              <div className="trow grid-cols-[28px_minmax(0,1fr)_auto]">
                <span className="av">JM</span>
                <span className="min-w-0">
                  <b className="block">Joana Manuel</b>
                  <span className="text-muted-foreground text-[12px]">Excel Avançado</span>
                </span>
                <span className="stt s-ok">Activa</span>
              </div>
            </div>
          </div>
          <div className="fb rv">
            <div className="bg-card border border-border rounded-[12px] overflow-hidden shadow-card text-primary">
              <div className="wbar">
                <i></i>
                <i></i>
                <i></i>
                <span className="u">centrox.bove.ao/turmas</span>
              </div>
              <div className="pt-[16px] pb-[6px] px-[16px] flex justify-between items-center">
                <span className="disp display text-[20px]">Horário semanal</span>
                <span className="stt s-nv">12 turmas</span>
              </div>
              <div
                className="overflow-x-auto"
                role="region"
                aria-label="Horário semanal (desliza para ver os dias todos)"
                tabIndex={0}
              >
                <div className="max-[640px]:min-w-[600px] pt-[6px] pb-[18px] px-[16px] grid grid-cols-[repeat(6,minmax(0,1fr))] gap-[8px]">
                  <div className="mono font-mono text-[11px] text-muted-foreground text-center pb-[4px]">Seg</div>
                  <div className="mono font-mono text-[11px] text-muted-foreground text-center pb-[4px]">Ter</div>
                  <div className="mono font-mono text-[11px] text-muted-foreground text-center pb-[4px]">Qua</div>
                  <div className="mono font-mono text-[11px] text-muted-foreground text-center pb-[4px]">Qui</div>
                  <div className="mono font-mono text-[11px] text-muted-foreground text-center pb-[4px]">Sex</div>
                  <div className="mono font-mono text-[11px] text-muted-foreground text-center pb-[4px]">Sáb</div>
                  <div className="rounded-[7px] py-[9px] px-[10px] text-[11.5px] font-bold leading-[1.3] bg-primary text-background">
                    Informática de Gestão
                    <br />
                    <span className="font-medium opacity-[.8]">Sala 1</span>
                  </div>
                  <div className="rounded-[7px] py-[9px] px-[10px] text-[11.5px] font-bold leading-[1.3] border border-dashed border-border text-transparent">
                    .
                  </div>
                  <div className="rounded-[7px] py-[9px] px-[10px] text-[11.5px] font-bold leading-[1.3] bg-accent text-primary">
                    Excel Avançado
                    <br />
                    <span className="font-medium">Sala 2</span>
                  </div>
                  <div className="rounded-[7px] py-[9px] px-[10px] text-[11.5px] font-bold leading-[1.3] border border-dashed border-border text-transparent">
                    .
                  </div>
                  <div className="rounded-[7px] py-[9px] px-[10px] text-[11.5px] font-bold leading-[1.3] bg-primary text-background">
                    Informática de Gestão
                    <br />
                    <span className="font-medium opacity-[.8]">Sala 1</span>
                  </div>
                  <div className="rounded-[7px] py-[9px] px-[10px] text-[11.5px] font-bold leading-[1.3] bg-background-alt text-primary border border-border">
                    Workshop
                  </div>
                  <div className="rounded-[7px] py-[9px] px-[10px] text-[11.5px] font-bold leading-[1.3] border border-dashed border-border text-transparent">
                    .
                  </div>
                  <div className="rounded-[7px] py-[9px] px-[10px] text-[11.5px] font-bold leading-[1.3] bg-background-alt text-primary border border-border">
                    Contabilidade
                    <br />
                    <span className="font-medium text-muted-foreground">Sala 3</span>
                  </div>
                  <div className="rounded-[7px] py-[9px] px-[10px] text-[11.5px] font-bold leading-[1.3] border border-dashed border-border text-transparent">
                    .
                  </div>
                  <div className="rounded-[7px] py-[9px] px-[10px] text-[11.5px] font-bold leading-[1.3] bg-background-alt text-primary border border-border">
                    Contabilidade
                    <br />
                    <span className="font-medium text-muted-foreground">Sala 3</span>
                  </div>
                  <div className="rounded-[7px] py-[9px] px-[10px] text-[11.5px] font-bold leading-[1.3] bg-accent text-primary">
                    Excel Avançado
                    <br />
                    <span className="font-medium">Sala 2</span>
                  </div>
                  <div className="rounded-[7px] py-[9px] px-[10px] text-[11.5px] font-bold leading-[1.3] border border-dashed border-border text-transparent">
                    .
                  </div>
                  <div className="rounded-[7px] py-[9px] px-[10px] text-[11.5px] font-bold leading-[1.3] bg-background-alt text-primary border border-border">
                    Secretariado
                    <br />
                    <span className="font-medium text-muted-foreground">Sala 2</span>
                  </div>
                  <div className="rounded-[7px] py-[9px] px-[10px] text-[11.5px] font-bold leading-[1.3] border border-dashed border-border text-transparent">
                    .
                  </div>
                  <div className="rounded-[7px] py-[9px] px-[10px] text-[11.5px] font-bold leading-[1.3] bg-background-alt text-primary border border-border">
                    Secretariado
                    <br />
                    <span className="font-medium text-muted-foreground">Sala 2</span>
                  </div>
                  <div className="rounded-[7px] py-[9px] px-[10px] text-[11.5px] font-bold leading-[1.3] bg-primary text-background">
                    Formadores
                    <br />
                    <span className="font-medium opacity-[.8]">Reunião</span>
                  </div>
                  <div className="rounded-[7px] py-[9px] px-[10px] text-[11.5px] font-bold leading-[1.3] border border-dashed border-border text-transparent">
                    .
                  </div>
                  <div className="rounded-[7px] py-[9px] px-[10px] text-[11.5px] font-bold leading-[1.3] border border-dashed border-border text-transparent">
                    .
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal">
              <div className="mono font-mono text-[13px] text-accent-dark">02 / 04 · Turmas</div>
              <h3 className="disp display mt-[16px] text-[length:clamp(26px,3.06vw,44px)]">
                Turmas, horários e formadores
              </h3>
              <p className="body mt-[18px] text-[18px]">
                Organiza as turmas por curso, sala e formador, e vê a semana inteira num só quadro.
              </p>
              <ul className="fl2">
                <li>
                  <span className="ck">
                    <Icon name="check" size={14} className="ico size-[14px]" />
                  </span>
                  <span>Horário semanal por sala e por formador</span>
                </li>
                <li>
                  <span className="ck">
                    <Icon name="check" size={14} className="ico size-[14px]" />
                  </span>
                  <span>Alterações visíveis para toda a equipa</span>
                </li>
                <li>
                  <span className="ck">
                    <Icon name="check" size={14} className="ico size-[14px]" />
                  </span>
                  <span>Presenças registadas por aula</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="fb">
            <div className="reveal">
              <div className="mono font-mono text-[13px] text-accent-dark">03 / 04 · Finanças</div>
              <h3 className="disp display mt-[16px] text-[length:clamp(26px,3.06vw,44px)]">
                Propinas e recibos em kwanzas
              </h3>
              <p className="body mt-[18px] text-[18px]">
                Sabes quem pagou, quem está pendente e quanto entrou no mês, sem somar listas à mão.
              </p>
              <ul className="fl2">
                <li>
                  <span className="ck">
                    <Icon name="check" size={14} className="ico size-[14px]" />
                  </span>
                  <span>Estado de pagamento por formando</span>
                </li>
                <li>
                  <span className="ck">
                    <Icon name="check" size={14} className="ico size-[14px]" />
                  </span>
                  <span>Recibos emitidos em kwanzas</span>
                </li>
                <li>
                  <span className="ck">
                    <Icon name="check" size={14} className="ico size-[14px]" />
                  </span>
                  <span>Atrasos sempre à vista</span>
                </li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-[12px] overflow-hidden shadow-card text-primary">
              <div className="wbar">
                <i></i>
                <i></i>
                <i></i>
                <span className="u">centrox.bove.ao/financas</span>
              </div>
              <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[10px] p-[16px]">
                <div className="border border-border rounded-[8px] p-[12px]">
                  <div className="text-[11px] font-semibold text-muted-foreground">Recebido no mês</div>
                  <div className="mono font-mono text-[14px] font-medium mt-[8px] text-accent-dark mt-[10px]">
                    1 850 000 Kz
                  </div>
                </div>
                <div className="border border-border rounded-[8px] p-[12px]">
                  <div className="text-[11px] font-semibold text-muted-foreground">Em atraso</div>
                  <div className="mono font-mono text-[14px] font-medium mt-[8px] mt-[10px]">6 formandos</div>
                </div>
                <div className="border border-border rounded-[8px] p-[12px]">
                  <div className="text-[11px] font-semibold text-muted-foreground">Recibos emitidos</div>
                  <div className="mono font-mono text-[18px] font-medium mt-[8px]">132</div>
                </div>
              </div>
              <div className="trow grid-cols-[28px_minmax(0,1fr)_92px_auto]">
                <span className="av">AD</span>
                <span className="min-w-0">
                  <b className="block">Ana Domingos</b>
                  <span className="text-muted-foreground text-[12px]">Propina · Novembro</span>
                </span>
                <span className="mono font-mono text-[12.5px] text-right">45 000 Kz</span>
                <span className="stt s-ok">Pago</span>
              </div>
              <div className="trow grid-cols-[28px_minmax(0,1fr)_92px_auto]">
                <span className="av">EK</span>
                <span className="min-w-0">
                  <b className="block">Eduardo Kiala</b>
                  <span className="text-muted-foreground text-[12px]">Propina · Novembro</span>
                </span>
                <span className="mono font-mono text-[12.5px] text-right">30 000 Kz</span>
                <span className="stt s-pd">Pendente</span>
              </div>
              <div className="trow grid-cols-[28px_minmax(0,1fr)_92px_auto]">
                <span className="av">MC</span>
                <span className="min-w-0">
                  <b className="block">Mariana Cassule</b>
                  <span className="text-muted-foreground text-[12px]">Propina · Outubro</span>
                </span>
                <span className="mono font-mono text-[12.5px] text-right">60 000 Kz</span>
                <span className="stt s-no">Em atraso</span>
              </div>
              <div className="trow grid-cols-[28px_minmax(0,1fr)_92px_auto]">
                <span className="av">JM</span>
                <span className="min-w-0">
                  <b className="block">Joana Manuel</b>
                  <span className="text-muted-foreground text-[12px]">Propina · Novembro</span>
                </span>
                <span className="mono font-mono text-[12.5px] text-right">30 000 Kz</span>
                <span className="stt s-ok">Pago</span>
              </div>
            </div>
          </div>
          <div className="fb rv">
            <div className="bg-card border border-border rounded-[12px] overflow-hidden shadow-card text-primary">
              <div className="wbar">
                <i></i>
                <i></i>
                <i></i>
                <span className="u">centrox.bove.ao/certificados</span>
              </div>
              <div className="grid grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] min-h-[300px]">
                <div className="border-r border-r-border p-[16px] grid gap-[10px] [align-content:start] text-[13px]">
                  <b>Prontos a emitir · 12</b>
                  <div className="flex items-center gap-[10px] py-[8px] px-[10px] border border-border rounded-[8px]">
                    <span className="rounded-[4px] bg-primary text-accent inline-flex items-center justify-center size-[16px]">
                      <Icon name="check" size={12} className="ico size-[12px]" />
                    </span>
                    <span className="font-semibold">Ana Domingos</span>
                  </div>
                  <div className="flex items-center gap-[10px] py-[8px] px-[10px] border border-border rounded-[8px]">
                    <span className="rounded-[4px] bg-primary text-accent inline-flex items-center justify-center size-[16px]">
                      <Icon name="check" size={12} className="ico size-[12px]" />
                    </span>
                    <span className="font-semibold">Eduardo Kiala</span>
                  </div>
                  <div className="flex items-center gap-[10px] py-[8px] px-[10px] border border-border rounded-[8px]">
                    <span className="rounded-[4px] bg-white text-accent inline-flex items-center justify-center size-[16px]"></span>
                    <span className="font-semibold">Joana Manuel</span>
                  </div>
                  <div className="flex items-center gap-[10px] py-[8px] px-[10px] border border-border rounded-[8px]">
                    <span className="rounded-[4px] bg-white text-accent inline-flex items-center justify-center size-[16px]"></span>
                    <span className="font-semibold">Paulo Quimbamba</span>
                  </div>
                  <span className="h-[38px] text-[13px] py-0 px-[14px] mt-[6px]">Exportar PDF</span>
                </div>
                <div className="p-[20px] bg-background-alt flex items-center justify-center">
                  <div className="bg-white border border-border rounded-[6px] pt-[22px] pb-[18px] px-[22px] w-full text-center relative shadow-card">
                    <div className="absolute left-0 top-0 w-[60px] h-[6px] bg-accent"></div>
                    <div className="mono font-mono text-[10px] tracking-[.2em] text-accent-dark">CERTIFICADO</div>
                    <div className="disp display text-[22px] mt-[10px]">Ana Domingos</div>
                    <div className="text-[11.5px] text-muted-foreground mt-[8px] leading-[1.5]">
                      concluiu com aproveitamento o curso de
                      <br />
                      <b className="text-primary">Informática de Gestão</b>
                    </div>
                    <div className="flex justify-between items-end mt-[18px] text-[10px] text-muted-foreground">
                      <span>Centro X · Luanda</span>
                      <span className="rounded-full bg-accent inline-block size-[34px]"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal">
              <div className="mono font-mono text-[13px] text-accent-dark">04 / 04 · Certificados</div>
              <h3 className="disp display mt-[16px] text-[length:clamp(26px,3.06vw,44px)]">
                Certificados e relatórios
              </h3>
              <p className="body mt-[18px] text-[18px]">
                Emite certificados e declarações com os dados que já estão no sistema, e exporta relatórios para a
                direcção.
              </p>
              <ul className="fl2">
                <li>
                  <span className="ck">
                    <Icon name="check" size={14} className="ico size-[14px]" />
                  </span>
                  <span>Certificados prontos em PDF</span>
                </li>
                <li>
                  <span className="ck">
                    <Icon name="check" size={14} className="ico size-[14px]" />
                  </span>
                  <span>Declarações geradas num clique</span>
                </li>
                <li>
                  <span className="ck">
                    <Icon name="check" size={14} className="ico size-[14px]" />
                  </span>
                  <span>Relatórios de presenças e de receita</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-[clamp(77px,8.89vw,128px)] flex flex-wrap justify-between items-end gap-[20px]">
          <h3 className="disp display text-[length:clamp(26px,2.5vw,36px)]">E ainda, no dia-a-dia</h3>
          <span className="mono font-mono text-[13px] text-muted-foreground">Incluído em todos os espaços</span>
        </div>
        <div className="stack grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[20px] mt-[28px]">
          <div className="mt2 reveal">
            <span className="tb">
              <Icon name="users" size={22} className="ico size-[22px]" />
            </span>
            <div className="disp display text-[22px] mt-[18px]">Formadores</div>
            <p className="mt-[8px] text-[15.5px] leading-[1.55] text-muted-foreground">
              Perfis, turmas atribuídas e disponibilidade.
            </p>
          </div>
          <div className="mt2 reveal">
            <span className="tb">
              <Icon name="clipboard-check" size={22} className="ico size-[22px]" />
            </span>
            <div className="disp display text-[22px] mt-[18px]">Presenças</div>
            <p className="mt-[8px] text-[15.5px] leading-[1.55] text-muted-foreground">
              Registo por aula e presença média por turma.
            </p>
          </div>
          <div className="mt2 reveal">
            <span className="tb">
              <Icon name="shield" size={22} className="ico size-[22px]" />
            </span>
            <div className="disp display text-[22px] mt-[18px]">Perfis e permissões</div>
            <p className="mt-[8px] text-[15.5px] leading-[1.55] text-muted-foreground">
              Cada pessoa vê apenas o que lhe cabe.
            </p>
          </div>
          <div className="mt2 reveal">
            <span className="tb">
              <Icon name="globe" size={22} className="ico size-[22px]" />
            </span>
            <div className="disp display text-[22px] mt-[18px]">Identidade própria</div>
            <p className="mt-[8px] text-[15.5px] leading-[1.55] text-muted-foreground">
              O teu logótipo e o teu subdomínio.
            </p>
          </div>
          <div className="mt2 reveal">
            <span className="tb">
              <Icon name="bell" size={22} className="ico size-[22px]" />
            </span>
            <div className="disp display text-[22px] mt-[18px]">Avisos aos formandos</div>
            <p className="mt-[8px] text-[15.5px] leading-[1.55] text-muted-foreground">
              Lembretes de pagamento e de aulas.
            </p>
          </div>
          <div className="mt2 reveal">
            <span className="tb">
              <Icon name="download" size={22} className="ico size-[22px]" />
            </span>
            <div className="disp display text-[22px] mt-[18px]">Relatórios e exportação</div>
            <p className="mt-[8px] text-[15.5px] leading-[1.55] text-muted-foreground">
              Dados prontos para a direcção e para o Excel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
