import { Icon } from "@components/atoms/icon";

export function ApproachSection() {
  return (
    <section
      className="sec on-n bg-primary text-background relative overflow-clip"
      id="abordagem"
    >
      <div
        className="absolute -left-[clamp(96px,11.11vw,160px)] -bottom-[clamp(120px,13.89vw,200px)] rounded-full border-2 border-primary-strong size-[460px]"
        aria-hidden="true"
      ></div>
      <div className="container relative">
        <div className="stack grid grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] gap-[clamp(53px,6.11vw,88px)] items-start">
          <div className="sticky max-[600px]:relative top-[clamp(78px,9.03vw,130px)] max-[600px]:top-0">
            <div className="eyebrow">Como construímos produtos</div>
            <h2 className="disp h-lg display leading-[1.05] mt-[20px] text-[length:clamp(26px,3.75vw,54px)]">
              Poucos produtos. Bem feitos.
            </h2>
            <p className="mt-[24px] text-[18px] leading-[1.65] text-muted-on-primary max-w-[420px]">
              Preferimos lançar menos e manter melhor. Cada produto da Linkora
              segue os mesmos princípios.
            </p>
          </div>
          <div className="stack grid grid-cols-[repeat(2,minmax(0,1fr))] gap-[20px]">
            <div className="pf reveal">
              <span className="tb">
                <Icon name="clock" size={24} className="ico size-[24px]" />
              </span>
              <div className="disp display text-[26px] mt-[22px]">
                Nascem de problemas reais
              </div>
              <p className="mt-[10px] text-[16.5px] leading-[1.6] text-muted-on-primary">
                Só desenhamos um produto depois de o problema se repetir em
                clientes reais, e não por moda.
              </p>
            </div>
            <div className="pf reveal">
              <span className="tb">
                <Icon name="server" size={24} className="ico size-[24px]" />
              </span>
              <div className="disp display text-[26px] mt-[22px]">
                Multitenant desde o início
              </div>
              <p className="mt-[10px] text-[16.5px] leading-[1.6] text-muted-on-primary">
                Uma plataforma, vários clientes, cada um com o seu espaço e os
                seus dados separados.
              </p>
            </div>
            <div className="pf reveal">
              <span className="tb">
                <Icon name="shield" size={24} className="ico size-[24px]" />
              </span>
              <div className="disp display text-[26px] mt-[22px]">
                Mantidos por nós
              </div>
              <p className="mt-[10px] text-[16.5px] leading-[1.6] text-muted-on-primary">
                Actualizações, monitorização e suporte em Luanda. Tu usas, nós
                mantemos.
              </p>
            </div>
            <div className="pf reveal">
              <span className="tb">
                <Icon name="globe" size={24} className="ico size-[24px]" />
              </span>
              <div className="disp display text-[26px] mt-[22px]">
                Feitos para Angola
              </div>
              <p className="mt-[10px] text-[16.5px] leading-[1.6] text-muted-on-primary">
                Kwanzas, realidade local e conversa directa com a equipa que os
                constrói.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
