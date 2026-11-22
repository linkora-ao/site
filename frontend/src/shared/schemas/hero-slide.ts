import { z } from "zod";

/** Identificadores dos slides da Hero da Home. Cada um tem o seu cartão em pages/home/hero-cards. */
export const HERO_SLIDE_IDS = ["bove", "quality", "soon"] as const;

export const heroSlideSchema = z.object({
  id: z.enum(HERO_SLIDE_IDS),
  /** Legenda curta por cima do cartão e nome acessível do slide. */
  caption: z.string().min(1),
});
export const heroSlidesSchema = z.array(heroSlideSchema).min(1);

export type HeroSlide = z.infer<typeof heroSlideSchema>;
