import { Link } from "@tanstack/react-router";
import { Icon } from "@components/atoms/icon";
import { getService } from "@data/services";
import type { ServiceSectionProps } from "./types";

export function OthersSection({ content }: ServiceSectionProps) {
  const others = content.others.map((slug) => getService(slug)).filter((s) => s !== undefined);
  return (
    <section className="sec bg-background pb-[clamp(61px,6.67vw,96px)]" id="outros">
      <div className="container">
        <div className="flex flex-wrap justify-between items-end gap-[20px]">
          <h2 className="disp display text-[length:clamp(26px,2.78vw,40px)]">Outros serviços</h2>
          <Link to="/servicos" className="lnk">
            Ver todos os serviços{" "}
            <span className="arr" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
        <div className="g4 stack grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[20px] mt-[36px]">
          {others.map((s) => (
            <Link key={s.slug} to="/servicos/$slug" params={{ slug: s.slug }} className="ot reveal">
              <span className="tb">
                <Icon name={s.icon} size={24} />
              </span>
              <span>
                <span className="disp display block text-[22px]">{s.title}</span>
                <span className="block mt-[4px] text-[15px] leading-[1.45] text-muted-foreground">{s.summary}</span>
              </span>
              <span className="arr text-[20px] text-accent-dark" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
