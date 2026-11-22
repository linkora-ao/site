/**
 * Critérios por que passa cada entrega da Linkora (cartão da Hero da Home).
 * Texto qualitativo de propósito: não inventa números de projectos reais.
 */
export const QUALITY_GATES = [
  { label: "Requisitos validados contigo", status: "assinado" },
  { label: "Revisão de código", status: "feita" },
  { label: "Testes automáticos", status: "a passar" },
  { label: "Segurança e permissões", status: "verificadas" },
  { label: "Cópias de segurança", status: "testadas" },
  { label: "Lançamento com reversão", status: "pronto" },
] as const;
