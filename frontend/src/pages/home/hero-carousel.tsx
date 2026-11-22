import { useRef, type FocusEvent, type KeyboardEvent, type PointerEvent } from "react";
import { Icon } from "@components/atoms/icon";
import { HERO_SLIDES } from "@data/hero-slides";
import { cn } from "@lib/cn";
import { useCarousel } from "@lib/use-carousel";
import type { HeroSlide } from "@shared/schemas/hero-slide";
import { BoveCard } from "./hero-cards/bove-card";
import { QualityCard } from "./hero-cards/quality-card";
import { SoonCard } from "./hero-cards/soon-card";

/** Cartão de cada slide. Um produto novo entra aqui e em HERO_SLIDES. */
const CARDS: Record<HeroSlide["id"], () => React.JSX.Element> = {
  bove: BoveCard,
  quality: QualityCard,
  soon: SoonCard,
};

const SWIPE_MIN_PX = 48;
const roundBtn =
  "focus-ring inline-flex size-[44px] cursor-pointer items-center justify-center rounded-full border border-border-on-primary text-background transition-colors hover:border-accent hover:bg-primary-strong";

/**
 * Carrossel de produtos da Hero. Roda sozinho (pausa com rato, foco ou botão; não
 * roda com prefers-reduced-motion), navega com setas, pontos, teclado e swipe.
 */
export function HeroCarousel() {
  const { index, go, next, prev, canAutoplay, running, userPaused, togglePause, setEngaged } = useCarousel({
    count: HERO_SLIDES.length,
  });
  const swipeStart = useRef<number | null>(null);

  const onPointerDown = (e: PointerEvent) => {
    if (e.pointerType !== "mouse") swipeStart.current = e.clientX;
  };
  const onPointerUp = (e: PointerEvent) => {
    if (swipeStart.current === null) return;
    const dx = e.clientX - swipeStart.current;
    swipeStart.current = null;
    if (Math.abs(dx) >= SWIPE_MIN_PX) (dx < 0 ? next : prev)();
  };
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") next();
    else if (e.key === "ArrowLeft") prev();
  };
  const onBlur = (e: FocusEvent<HTMLElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setEngaged(false);
  };

  return (
    <div
      role="group"
      aria-roledescription="carrossel"
      aria-label="Produtos Linkora"
      className="relative max-w-[520px] pt-[clamp(58px,6.67vw,96px)] max-[900px]:max-w-[560px] max-[900px]:pt-[34px]"
      onMouseEnter={() => setEngaged(true)}
      onMouseLeave={() => setEngaged(false)}
      onFocus={() => setEngaged(true)}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
    >
      <div
        className="grid touch-pan-y"
        aria-live={running ? "off" : "polite"}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (swipeStart.current = null)}
      >
        {HERO_SLIDES.map((slide, i) => {
          const Card = CARDS[slide.id];
          const active = i === index;
          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} de ${HERO_SLIDES.length}: ${slide.caption}`}
              inert={!active}
              className={cn(
                "relative col-start-1 row-start-1 motion-reduce:transition-none",
                active
                  ? "visible translate-x-0 opacity-100 [transition:opacity_.35s_ease,transform_.35s_ease]"
                  : "invisible translate-x-[28px] opacity-0 [transition:opacity_.35s_ease,transform_.35s_ease,visibility_0s_.35s]",
              )}
            >
              <div
                aria-hidden="true"
                className="mono font-mono absolute -top-[30px] left-0 text-[12px] tracking-[.1em] uppercase text-muted-on-primary"
              >
                {String(i + 1).padStart(2, "0")} · {slide.caption}
              </div>
              <Card />
            </div>
          );
        })}
      </div>
      <div className="mt-[20px] flex items-center justify-between gap-[16px]">
        <div className="flex items-center gap-[8px]">
          <button type="button" className={roundBtn} onClick={prev} aria-label="Slide anterior">
            <Icon name="chevron-left" size={20} />
          </button>
          <button type="button" className={roundBtn} onClick={next} aria-label="Slide seguinte">
            <Icon name="chevron-right" size={20} />
          </button>
          {canAutoplay && (
            <button
              type="button"
              className={roundBtn}
              onClick={togglePause}
              aria-label={userPaused ? "Retomar rotação automática" : "Pausar rotação automática"}
            >
              <Icon name={userPaused ? "play" : "pause"} size={16} />
            </button>
          )}
        </div>
        <div className="flex items-center" role="group" aria-label="Escolher slide">
          {HERO_SLIDES.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              className="focus-ring group cursor-pointer p-[9px]"
              onClick={() => go(i)}
              aria-label={`Ir para o slide ${i + 1}: ${slide.caption}`}
              aria-current={i === index}
            >
              <span
                className={cn(
                  "block h-[10px] rounded-[5px] transition-[width,background-color] motion-reduce:transition-none",
                  i === index ? "w-[28px] bg-accent" : "w-[10px] bg-primary-strong group-hover:bg-muted-on-primary",
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
