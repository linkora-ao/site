import { cn } from "@lib/cn";
import { SITE } from "@data/site";

type LogoProps = {
  className?: string;
  variant?: "header" | "footer";
};

export function Logo({ variant = "header", className }: LogoProps) {
  const size = variant === "header" ? 40 : 36;

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      {/* <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="15" cy="15" r="12" className="fill-accent" />
        <rect
          x="14"
          y="14"
          width="22"
          height="22"
          rx="5"
          className="fill-primary-foreground"
        />
      </svg> */}
      {variant === "header" ? (
        <span className="grid leading-none">
          <span className="font-display text-[26px] leading-[.9] font-bold tracking-[-0.03em]">
            {SITE.shortName}
          </span>
          <span className="mono-label mt-1.5 text-[10px] tracking-[.24em] text-muted-on-primary">
            {SITE.country}
          </span>
        </span>
      ) : (
        <span className="font-display text-2xl font-bold tracking-[-0.03em]">
          {SITE.shortName}{" "}
          <span className="font-semibold text-muted-on-primary">
            {SITE.country}
          </span>
        </span>
      )}
    </span>
  );
}
