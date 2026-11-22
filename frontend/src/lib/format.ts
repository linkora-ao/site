const kz = new Intl.NumberFormat("pt-AO", {
  style: "currency",
  currency: "AOA",
  maximumFractionDigits: 0,
});

/** 150000 -> "150 000 Kz" (formato angolano). */
export function formatKz(value: number) {
  return kz.format(value);
}

/** Remove espaços e prefixo +244 para comparar/guardar telefones. */
export function normalizePhoneAO(raw: string) {
  return raw.replace(/[\s()-]/g, "").replace(/^(\+|00)?244/, "");
}
