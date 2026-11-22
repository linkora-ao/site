import { Link } from "@tanstack/react-router";
import { MegaBanner, MegaIntro, MegaPanelLayout } from "@components/molecules/mega-panel";
import { MEGA_BANNER, MEGA_INTRO } from "@data/navigation";
import { PRODUCTS, UPCOMING_PRODUCT } from "@data/products";

/** Conteúdo do mega-menu "Produtos". */
export function ProductsMegaMenu() {
  return (
    <MegaPanelLayout intro={<MegaIntro {...MEGA_INTRO.products} />}>
      <div className="grid grid-cols-3 gap-4">
        {PRODUCTS.map((product) => (
          <Link
            key={product.slug}
            to={product.to}
            className="focus-ring group/product relative col-span-2 flex flex-col gap-2.5 overflow-hidden rounded-lg bg-primary px-7 py-[26px] text-primary-foreground transition-colors hover:bg-primary-soft"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 300 300"
              width="260"
              height="260"
              className="absolute -top-[70px] -right-[70px] fill-none stroke-primary-strong"
              strokeWidth="2"
            >
              <circle cx="150" cy="150" r="70" />
              <circle cx="150" cy="150" r="110" />
            </svg>
            <span className="relative flex items-center gap-3.5">
              <span className="mono-label text-muted-on-primary">Produto {product.number}</span>
              <span className="inline-flex items-center gap-2 text-[12.5px] font-semibold">
                <span className="size-2 rounded-full bg-accent" />
                {product.status}
              </span>
            </span>
            <span className="relative font-display text-[54px] leading-[.95] font-bold tracking-[-0.05em] text-accent">
              {product.name}
            </span>
            <span className="relative max-w-[380px] text-[15.5px] leading-[1.5] text-muted-on-primary">
              {product.summary}
            </span>
            <span className="link-underline relative self-start text-[14.5px]">{product.cta} →</span>
          </Link>
        ))}

        <div className="flex flex-col gap-2 rounded-lg border-[1.5px] border-dashed border-muted-on-primary px-6 py-[26px] text-muted-foreground">
          <span className="mono-label text-accent-dark">Produto {UPCOMING_PRODUCT.number}</span>
          <span className="font-display text-[22px] font-bold tracking-[-0.02em] text-foreground">
            {UPCOMING_PRODUCT.title}
          </span>
          <span className="text-[14.5px] leading-[1.5]">{UPCOMING_PRODUCT.summary}</span>
        </div>
      </div>
      <MegaBanner {...MEGA_BANNER.products} />
    </MegaPanelLayout>
  );
}
