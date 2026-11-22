import { heroSlidesSchema } from "@shared/schemas/hero-slide";

/**
 * Slides do carrossel da Hero da Home, pela ordem em que aparecem.
 * Para juntar um produto novo: acrescentar o id em shared/schemas/hero-slide.ts,
 * criar o cartão em pages/home/hero-cards/ e registá-lo em hero-carousel.tsx.
 */
export const HERO_SLIDES = heroSlidesSchema.parse([
  { id: "bove", caption: "BOVE" },
  { id: "quality", caption: "Controlo de qualidade" },
  { id: "soon", caption: "Em breve" },
]);
