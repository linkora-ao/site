import { useEffect } from "react";
import { initScrollRevealFallback } from "@lib/scroll-reveal";

/** Liga os fallbacks de scroll (só actua onde o CSS não tem animation-timeline). */
export function ScrollEffects() {
  useEffect(() => initScrollRevealFallback(), []);
  return null;
}
