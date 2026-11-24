import { z } from "zod";
import { SERVICE_SLUGS } from "@data/services";

/** Telemóvel angolano: 9XX XXX XXX, com ou sem +244. */
export const PHONE_PATTERN = /^(\+?244)?\s?9\d{2}\s?\d{3}\s?\d{3}$/;

/**
 * Validação do formulário de contacto (Anexo A.8). Usada no cliente (feedback
 * imediato) e no servidor, para a regra existir num só sítio.
 * Obrigatórios: nome, email, telefone e mensagem. Opcionais: empresa e serviço.
 */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Indique o seu nome completo."),
  email: z.email("Indique um email válido."),
  phone: z.string().trim().regex(PHONE_PATTERN, "Indique um telefone angolano válido, por exemplo 923 000 000."),
  company: z.string().trim().max(120, "Nome demasiado longo.").optional(),
  service: z.enum(SERVICE_SLUGS).optional(),
  message: z
    .string()
    .trim()
    .min(10, "Conte-nos um pouco mais (mínimo 10 caracteres).")
    .max(2000, "Mensagem demasiado longa."),
});

export type ContactInput = z.infer<typeof contactSchema>;

/** Parâmetros de /contacto?servico=medida (vêm dos botões dos serviços). */
export const contactSearchSchema = z.object({
  servico: z.enum(SERVICE_SLUGS).optional().catch(undefined),
});
export type ContactSearch = z.infer<typeof contactSearchSchema>;
