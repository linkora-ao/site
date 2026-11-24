import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getRouteApi, Link } from "@tanstack/react-router";
import { Button } from "@components/atoms/button";
import { FormInput, FormSelect, FormTextarea } from "@components/molecules/form-field";
import { SERVICES } from "@data/services";
import { sendContact } from "@lib/contact";
import { contactSchema, type ContactInput } from "@shared/schemas/contact";

const route = getRouteApi("/contacto");

/**
 * Formulário de /contacto (Anexo A.8): react-hook-form + contactSchema,
 * envio com sendContact. O serviço pode vir pré-escolhido em /contacto?servico=medida.
 */
export function ContactForm() {
  const search = route.useSearch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: { service: search.servico },
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      await sendContact(values);
    } catch {
      setError("root", { message: "Não foi possível enviar a mensagem. Tente de novo daqui a pouco." });
    }
  });

  if (isSubmitSuccessful) {
    return (
      <div className="bg-card p-8 text-card-foreground sm:p-10" role="status">
        <p className="text-[28px] leading-tight font-semibold tracking-[-0.02em]">Mensagem enviada.</p>
        <p className="mt-3 text-base leading-[1.7] text-muted-foreground">
          Obrigado. Respondemos habitualmente em menos de 24 horas úteis.
        </p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5 bg-card p-6 text-card-foreground sm:p-10">
      <FormInput
        label="Nome completo"
        type="text"
        autoComplete="name"
        error={errors.name?.message}
        {...register("name")}
      />
      <div className="grid items-start gap-5 sm:grid-cols-2">
        <FormInput
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="nome@empresa.ao"
          error={errors.email?.message}
          {...register("email")}
        />
        <FormInput
          label="Telefone / WhatsApp"
          type="tel"
          autoComplete="tel"
          placeholder="9XX XXX XXX"
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>
      <div className="grid items-start gap-5 sm:grid-cols-2">
        <FormInput
          label="Empresa ou projecto"
          optional
          type="text"
          autoComplete="organization"
          error={errors.company?.message}
          {...register("company")}
        />
        <FormSelect
          label="Serviço de maior interesse"
          optional
          error={errors.service?.message}
          {...register("service", { setValueAs: (value: string) => value || undefined })}
        >
          <option value="">Escolha um serviço</option>
          {SERVICES.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title}
            </option>
          ))}
        </FormSelect>
      </div>
      <FormTextarea
        label="Como podemos ajudar o seu negócio?"
        rows={5}
        error={errors.message?.message}
        {...register("message")}
      />

      <div className="grid gap-3">
        <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full sm:w-fit">
          {isSubmitting ? "A enviar…" : "Enviar mensagem"}
        </Button>
        {errors.root && (
          <p role="alert" className="text-[13.5px] font-medium text-destructive">
            {errors.root.message}
          </p>
        )}
        <p className="text-[13px] leading-[1.6] text-muted-foreground">
          As informações partilhadas são confidenciais e nunca serão partilhadas com terceiros.{" "}
          <Link to="/privacidade" className="focus-ring text-foreground underline">
            Política de Privacidade
          </Link>
        </p>
      </div>
    </form>
  );
}
