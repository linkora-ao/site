import { env } from "@src/env";
import type { ContactInput } from "@shared/schemas/contact";

/**
 * Envia o pedido de contacto para a API.
 * TODO: confirmar o endpoint e o formato com o backend; se o token não puder
 * ficar no cliente, mover para uma server function do TanStack Start.
 */
export async function sendContact(input: ContactInput): Promise<void> {
  const res = await fetch(`${env.VITE_API_URL}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.VITE_API_TOKEN_FORM_WRITE_ACCESS ?? env.VITE_API_TOKEN}`,
    },
    body: JSON.stringify(input),
  });
  if (!res.ok) throw new Error(`Falha ao enviar (${res.status})`);
}
