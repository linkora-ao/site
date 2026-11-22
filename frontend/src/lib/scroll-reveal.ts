/**
 * Fallback do efeito `reveal` para navegadores sem `animation-timeline`.
 * Reversível, como o efeito original: ao descer os blocos aparecem e, ao voltar
 * a subir, desaparecem outra vez. O que já ficou acima do ecrã não é escondido.
 * Devolve a função de limpeza.
 */
export function initScrollRevealFallback(): () => void {
  if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return () => {};
  if (CSS.supports("animation-timeline: view()")) return () => {};
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};

  const seen = new WeakSet<Element>();
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) el.removeAttribute("data-reveal");
        else if (entry.boundingClientRect.top > 0) el.setAttribute("data-reveal", "hidden");
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
  );

  const observeAll = () => {
    for (const el of document.querySelectorAll<HTMLElement>(".reveal")) {
      if (seen.has(el)) continue;
      seen.add(el);
      if (el.getBoundingClientRect().top > window.innerHeight) el.setAttribute("data-reveal", "hidden");
      observer.observe(el);
    }
  };

  observeAll();
  // Páginas novas (navegação do router) trazem novos .reveal.
  const mutations = new MutationObserver(observeAll);
  mutations.observe(document.body, { childList: true, subtree: true });

  return () => {
    observer.disconnect();
    mutations.disconnect();
  };
}
