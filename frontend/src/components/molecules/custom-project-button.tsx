import { Link } from "@tanstack/react-router";
import { buttonVariants } from "@components/atoms/button";
import { CUSTOM_CTA } from "@data/services";

/** "Falar sobre projecto à medida": abre /contacto com o serviço já escolhido. */
export function CustomProjectButton() {
  return (
    <Link
      to="/contacto"
      search={{ servico: CUSTOM_CTA.service }}
      className={buttonVariants({ variant: "light", wrap: true })}
    >
      {CUSTOM_CTA.button}
    </Link>
  );
}
