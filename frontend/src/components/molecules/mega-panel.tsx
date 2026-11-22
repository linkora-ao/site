import { Fragment, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLink } from "@components/atoms/arrow-link";
import type { AppPath } from "@data/navigation";

type MegaIntroProps = {
  eyebrow: string;
  title: readonly string[];
  text: string;
  cta: { label: string; to: AppPath };
};

/** Cartão navy à esquerda do mega-menu. */
export function MegaIntro({ eyebrow, title, text, cta }: MegaIntroProps) {
  return (
    <div className="relative flex flex-col gap-3.5 overflow-hidden rounded-lg bg-primary p-8 text-primary-foreground">
      <span aria-hidden="true" className="absolute -right-12 -bottom-12 size-[150px] rounded-full bg-accent" />
      <span
        aria-hidden="true"
        className="absolute right-5 bottom-5 size-[84px] rounded-[18px] bg-background opacity-95"
      />
      <p className="eyebrow text-accent">{eyebrow}</p>
      <p className="font-display text-[30px] leading-[1.08] font-bold tracking-[-0.03em]">
        {title.map((line, i) => (
          <Fragment key={line}>
            {i > 0 && <br />}
            {line}
          </Fragment>
        ))}
      </p>
      <p className="max-w-[250px] text-[15px] leading-[1.55] text-muted-on-primary">{text}</p>
      <div className="relative mt-auto pt-14">
        <ArrowLink to={cta.to}>{cta.label}</ArrowLink>
      </div>
    </div>
  );
}

/** Estrutura comum dos painéis: cartão à esquerda, conteúdo à direita. */
export function MegaPanelLayout({ intro, children }: { intro: ReactNode; children: ReactNode }) {
  return (
    <div className="container py-9">
      <div className="grid grid-cols-[340px_minmax(0,1fr)] items-stretch gap-10">
        {intro}
        <div>{children}</div>
      </div>
    </div>
  );
}

type MegaBannerProps = {
  to: AppPath;
  tag?: string | null;
  title: string;
  badge?: string | null;
  cta: string;
};

/** Faixa por baixo do painel (produto em destaque ou convite ao piloto). */
export function MegaBanner({ to, tag, title, badge, cta }: MegaBannerProps) {
  return (
    <Link
      to={to}
      className="focus-ring group/banner mt-4 flex items-center justify-between gap-5 rounded-[10px] border border-border bg-background-alt px-5 py-3.5 text-foreground transition-colors hover:border-foreground"
    >
      <span className="flex min-w-0 items-center gap-3.5">
        <span className="size-2.5 flex-none rounded-full bg-accent" />
        {tag && <span className="mono-label whitespace-nowrap text-accent-dark">{tag}</span>}
        <span className="text-base font-bold">{title}</span>
      </span>
      <span className="flex items-center gap-4 whitespace-nowrap">
        {badge && (
          <span className="mono-label rounded-sm bg-primary px-2 py-1.5 text-accent normal-case tracking-normal">
            {badge}
          </span>
        )}
        <span className="link-underline text-[14.5px] group-hover/banner:border-current">{cta} →</span>
      </span>
    </Link>
  );
}
