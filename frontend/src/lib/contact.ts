import { env } from "@src/env";
import type { ServiceSlug } from "@data/services";
import type { ContactInput, ContactSearch, ContactTopic, QuickContactInput } from "@shared/schemas/contact";

/**
 * Envia o pedido de contacto para a API.
 * TODO: confirmar o endpoint e o formato com o backend; se o token não puder
 * ficar no cliente, mover para uma server function do TanStack Start.
 */
export async function sendContact(input: ContactInput): Promise<void> {
  const res = await fetch(`${env.VITE_API_BASE_URL}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.VITE_API_TOKEN_FORM_WRITE_ACCESS ?? env.VITE_API_TOKEN}`,
    },
    body: JSON.stringify(input),
  });
  if (!res.ok) throw new Error(`Falha ao enviar (${res.status})`);
}

/**
 * Converte um pedido rápido nos parâmetros de /contacto, para o formulário
 * completo abrir já preenchido. "bove" no tipo de projecto vira o assunto "demo".
 */
export function toContactSearch(
  input: QuickContactInput,
  base: { topic: ContactTopic; service?: ServiceSlug },
): ContactSearch {
  const isBove = input.project === "bove";
  return {
    assunto: isBove ? "demo" : base.topic,
    servico: isBove ? undefined : ((input.project as ServiceSlug | undefined) ?? base.service),
    nome: input.name,
    empresa: input.company || undefined,
    contacto: input.contact,
    mensagem: input.message || undefined,
  };
}
