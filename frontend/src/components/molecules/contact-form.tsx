import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getRouteApi } from "@tanstack/react-router";
import { Button } from "@components/atoms/button";
import { FormInput, FormTextarea } from "@components/molecules/form-field";
import { sendContact } from "@lib/contact";
import {
  CONTACT_TOPICS,
  contactSchema,
  type ContactInput,
} from "@shared/schemas/contact";

const route = getRouteApi("/contacto");

/** Formulário completo de /contacto: react-hook-form + contactSchema, envio com sendContact. */
export function ContactForm() {
  const search = route.useSearch();
  const isEmail = search.contacto?.includes("@");
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      topic: search.assunto ?? "proposta",
      name: search.nome ?? "",
      company: search.empresa ?? "",
      email: isEmail ? search.contacto : "",
      phone: search.contacto && !isEmail ? search.contacto : "",
      service: search.servico,
      message: search.mensagem ?? "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      await sendContact(values);
    } catch {
      setError("root", {
        message: "Não foi possível enviar. Tenta de novo daqui a pouco.",
      });
    }
  });

  if (isSubmitSuccessful) {
    return (
      <div
        className="fcard2 bg-card border border-border rounded-[20px] p-[clamp(32px,3.6vw,52px)] shadow-card"
        role="status"
      >
        <div className="disp display text-[30px]">Mensagem enviada.</div>
        <p className="mt-[14px] text-[17px] leading-[1.6] text-muted-foreground">
          Obrigado. Lemos todos os pedidos e respondemos em dia útil, em
          português.
        </p>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="fcard2 bg-card border border-border rounded-[20px] pt-[clamp(32px,3.33vw,48px)] pb-[clamp(29px,3.06vw,44px)] px-[clamp(34px,3.61vw,52px)] shadow-card grid gap-[36px]"
    >
      <div>
        <div className="stl">
          <span className="mono font-mono">01</span>Que tipo de pedido?
        </div>
        <div
          className="flex flex-wrap gap-[10px] mt-[18px]"
          role="radiogroup"
          aria-label="Tipo de pedido"
        >
          {CONTACT_TOPICS.map((t) => (
            <span key={t.value}>
              <input
                className="opt"
                type="radio"
                id={`t-${t.value}`}
                value={t.value}
                {...register("topic")}
              />
              <label className="optl" htmlFor={`t-${t.value}`}>
                {t.label}
              </label>
            </span>
          ))}
        </div>
      </div>
      <div>
        <div className="stl">
          <span className="mono font-mono">02</span>Sobre ti
        </div>
        <div className="g2 g2c grid grid-cols-[repeat(2,minmax(0,1fr))] gap-[20px] mt-[18px]">
          <FormInput
            label="Nome"
            required
            type="text"
            autoComplete="name"
            placeholder="Nome e apelido"
            error={errors.name?.message}
            {...register("name")}
          />
          <FormInput
            label="Empresa ou instituição"
            type="text"
            autoComplete="organization"
            placeholder="Nome da organização"
            error={errors.company?.message}
            {...register("company")}
          />
          <FormInput
            label="Email"
            required
            type="email"
            autoComplete="email"
            placeholder="nome@empresa.ao"
            error={errors.email?.message}
            {...register("email")}
          />
          <FormInput
            label="Telefone ou WhatsApp"
            type="tel"
            autoComplete="tel"
            placeholder="9XX XXX XXX"
            error={errors.phone?.message}
            {...register("phone")}
          />
        </div>
      </div>
      <div>
        <div className="stl">
          <span className="mono font-mono">03</span>A tua mensagem
        </div>
        <div className="mt-[18px]">
          <FormTextarea
            label="Em que podemos ajudar?"
            required
            className="h-[150px]"
            placeholder="Conta-nos, por palavras tuas, o que precisas e para quando."
            error={errors.message?.message}
            {...register("message")}
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-y-[18px] gap-x-[28px] pt-[28px] border-t border-t-border">
        <p
          className="m-0 max-w-[340px] text-[14.5px] leading-[1.55] text-muted-foreground"
          aria-live="polite"
        >
          {errors.root ? (
            <b className="text-destructive">{errors.root.message}</b>
          ) : (
            <>
              Usamos os teus dados apenas para responder a este pedido. Resposta
              em <b className="text-primary">1 dia útil</b>.
            </>
          )}
        </p>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "A enviar…" : "Enviar mensagem"}
          <span aria-hidden="true">→</span>
        </Button>
      </div>
    </form>
  );
}
