import { Link } from "@tanstack/react-router";
import { Icon } from "@components/atoms/icon";
import { MegaBanner, MegaIntro, MegaPanelLayout } from "@components/molecules/mega-panel";
import { MEGA_BANNER, MEGA_INTRO } from "@data/navigation";
import { SERVICES } from "@data/services";

/** Conteúdo do mega-menu "Serviços". */
export function ServicesMegaMenu() {
  return (
    <MegaPanelLayout intro={<MegaIntro {...MEGA_INTRO.services} />}>
      <div className="grid grid-cols-3 gap-x-2 gap-y-1">
        {SERVICES.map((service) => (
          <Link
            key={service.slug}
            to="/servicos/$slug"
            params={{ slug: service.slug }}
            className="focus-ring group/item grid grid-cols-[48px_minmax(0,1fr)] items-start gap-4 rounded-[10px] p-4 text-foreground transition-colors hover:bg-background-alt focus-visible:bg-background-alt"
          >
            <span className="flex-center size-12 rounded-[10px] bg-primary text-accent transition-colors group-focus-visible/item:bg-accent group-focus-visible/item:text-primary group-hover/item:bg-accent group-hover/item:text-primary">
              <Icon name={service.icon} size={24} />
            </span>
            <span>
              <b className="flex items-center gap-2 text-[17px] leading-tight font-bold">
                {service.title}
                <Icon
                  name="arrow-right"
                  size={16}
                  className="-translate-x-1.5 text-accent-dark opacity-0 transition group-focus-visible/item:translate-x-0 group-focus-visible/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:opacity-100"
                />
              </b>
              <span className="mt-1.5 block text-[14.5px] leading-[1.45] text-muted-foreground">{service.summary}</span>
            </span>
          </Link>
        ))}
      </div>
      <MegaBanner {...MEGA_BANNER.services} />
    </MegaPanelLayout>
  );
}
