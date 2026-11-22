import { useCallback, useEffect, useState } from "react";

type Options = {
  /** Número de slides. */
  count: number;
  /** Milissegundos entre slides; 0 desliga a rotação automática. */
  interval?: number;
};

/**
 * Estado de um carrossel: slide activo, navegação circular e rotação automática.
 * A rotação pára com rato ou foco dentro (`setEngaged`), com o botão de pausa
 * e quando o utilizador pede menos movimento (prefers-reduced-motion).
 */
export function useCarousel({ count, interval = 6000 }: Options) {
  const [index, setIndex] = useState(0);
  const [engaged, setEngaged] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const go = useCallback((to: number) => setIndex(((to % count) + count) % count), [count]);
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  const autoplay = interval > 0 && count > 1 && !reducedMotion && !userPaused;
  const running = autoplay && !engaged;

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(next, interval);
    return () => window.clearInterval(id);
    // `index` na lista reinicia o relógio quando o slide muda à mão
  }, [running, interval, next, index]);

  return {
    index,
    go,
    next,
    prev,
    /** Há rotação automática disponível (mostra o botão de pausa). */
    canAutoplay: interval > 0 && count > 1 && !reducedMotion,
    /** Está mesmo a rodar neste momento. */
    running,
    userPaused,
    togglePause: () => setUserPaused((p) => !p),
    setEngaged,
  };
}
