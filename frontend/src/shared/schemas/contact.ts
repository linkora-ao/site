import { z } from "zod";
import { QUICK_PROJECTS } from "@data/quick-projects";
import { SERVICE_SLUGS } from "@data/services";

/** Tipos de pedido do formulário (passo "Que tipo de pedido?"). */
export const CONTACT_TOPICS = [
  { value: "proposta", label: "Pedir proposta" },
  { value: "demo", label: "Demonstração da BOVE" },
  { value: "piloto", label: "Piloto BOVE" },
  { value: "outro", label: "Outro assunto" },
] as const;

export type ContactTopic = (typeof CONTACT_TOPICS)[number]["value"];

const topicValues = CONTACT_TOPICS.map((t) => t.value) as [
  (typeof CONTACT_TOPICS)[number]["value"],
  ...(typeof CONTACT_TOPICS)[number]["value"][],
];

/** Telemóvel angolano: 9XX XXX XXX, com ou sem +244. */
export const PHONE_PATTERN = /^(\+?244)?\s?9\d{2}\s?\d{3}\s?\d{3}$/;

/**
 * Validação do formulário de contacto. Usada no cliente (feedback imediato)
 * e no servidor (server function), para a regra existir num só sítio.
 */
export const contactSchema = z.object({
  topic: z.enum(topicValues),
  name: z.string().trim().min(2, "Indica o teu nome."),
  company: z.string().trim().max(120).optional(),
  email: z.email("Indica um email válido."),
  phone: z
    .string()
    .trim()
    .regex(PHONE_PATTERN, "Indica um telemóvel angolano válido.")
    .or(z.literal(""))
    .optional(),
  service: z.enum(SERVICE_SLUGS).optional(),
  message: z
    .string()
    .trim()
    .min(20, "Conta-nos um pouco mais (mínimo 20 caracteres).")
    .max(2000, "Mensagem demasiado longa."),
});

export type ContactInput = z.infer<typeof contactSchema>;

/**
 * Pedido rápido (Home, páginas de serviço, piloto BOVE): só o essencial.
 * O resto é pedido no formulário completo (/contacto), para onde o pedido segue.
 */
export const quickContactSchema = z.object({
  name: z.string().trim().min(2, "Indica o teu nome."),
  company: z.string().trim().max(120).optional(),
  contact: z
    .string()
    .trim()
    .min(1, "Indica um email ou telefone.")
    .refine((v) => z.email().safeParse(v).success || PHONE_PATTERN.test(v), "Indica um email ou telemóvel angolano válido."),
  project: z.enum(QUICK_PROJECTS).optional(),
  message: z.string().trim().max(2000, "Mensagem demasiado longa.").optional(),
});
export type QuickContactInput = z.infer<typeof quickContactSchema>;

/** Piloto BOVE: o centro de formação passa a ser obrigatório. */
export const pilotSchema = quickContactSchema.extend({
  company: z.string().trim().min(2, "Indica o nome do centro."),
});

/** Parâmetros de /contacto?assunto=proposta&servico=erp&nome=...&contacto=...&mensagem=... */
export const contactSearchSchema = z.object({
  assunto: z.enum(topicValues).optional().catch(undefined),
  servico: z.enum(SERVICE_SLUGS).optional().catch(undefined),
  nome: z.string().optional().catch(undefined),
  empresa: z.string().optional().catch(undefined),
  contacto: z.string().optional().catch(undefined),
  mensagem: z.string().optional().catch(undefined),
});
export type ContactSearch = z.infer<typeof contactSearchSchema>;
