import { ConfirmChip } from "@components/atoms/chip";
import { SITE, TO_CONFIRM } from "@data/site";

/** Dados de contacto (Anexo A.8), em lista com filetes. Sobre fundo preto. */
export function ContactDetails() {
  const rows = [
    { label: "Sede", value: SITE.address },
    {
      label: "Email",
      value: (
        <>
          {SITE.email}
          <br />
          {SITE.emailSales}
        </>
      ),
    },
    {
      label: "Telefone e WhatsApp",
      value: (
        <>
          {SITE.phone} {TO_CONFIRM.phone && <ConfirmChip onPrimary className="ml-1" />}
        </>
      ),
    },
    { label: "Horário", value: SITE.hours },
    { label: "Resposta", value: SITE.response },
  ];

  return (
    <dl>
      {rows.map((row) => (
        <div key={row.label} className="border-t border-border-on-primary py-[18px]">
          <dt className="label-caps mb-1.5 text-muted-on-primary">{row.label}</dt>
          <dd className="text-[17px] leading-[1.55]">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
