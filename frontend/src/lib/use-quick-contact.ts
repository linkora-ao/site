import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";
import type { z } from "zod";
import type { QuickProject } from "@data/quick-projects";
import type { ServiceSlug } from "@data/services";
import { toContactSearch } from "@lib/contact";
import {
  quickContactSchema,
  type ContactTopic,
  type QuickContactInput,
} from "@shared/schemas/contact";

type Options = {
  /** Assunto com que o formulário completo abre. */
  topic: ContactTopic;
  /** Serviço pré-seleccionado (páginas de serviço). */
  service?: ServiceSlug;
  /** Tipo de projecto pré-seleccionado (select da Home). */
  project?: QuickProject;
  /** Schema do pedido; por omissão quickContactSchema. */
  schema?: z.ZodType<QuickContactInput, QuickContactInput>;
};

/**
 * Pedido rápido com react-hook-form + Zod: valida no cliente e leva o resultado
 * para /contacto já preenchido. Usado na Home, nas páginas de serviço e no piloto BOVE.
 *
 *   const { form, submit } = useQuickContact({ topic: "proposta" });
 *   <form onSubmit={submit()}> ... {...form.register("name")} ...
 *   <Button onClick={submit("demo")}> (outro assunto, mesmos dados)
 */
export function useQuickContact({
  topic,
  service,
  project,
  schema = quickContactSchema,
}: Options) {
  const navigate = useNavigate();
  const form = useForm<QuickContactInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      company: "",
      contact: "",
      message: "",
      project: project ?? service,
    },
    mode: "onTouched",
  });

  const submit = (override?: ContactTopic) =>
    form.handleSubmit((values) =>
      navigate({
        to: "/contacto",
        search: toContactSearch(values, { topic: override ?? topic, service }),
      }),
    );

  return { form, submit };
}
