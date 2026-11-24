import { SITE } from "@data/site";

/** Dados de contacto (Anexo A.8), em lista com filetes. Sobre fundo preto. */
export function ContactDetails() {
  const rows = [
    { label: "Sede", value: SITE.address },
    // {
    //   label: "Email",
    //   value: (
    //     <>
    //       {SITE.email}
    //       <br />
    //       {SITE.emailSales}
    //     </>
    //   ),
    // },
    {
      label: "Telefone e WhatsApp",
      value: (
        <div className="flex items-center gap-2">
          <a href={`tel:+${SITE.mobile}`}>{SITE.phone}</a>{" "}
          <a
            href={`https://wa.me/${SITE.mobile}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 leading-7"
          >
            Contactar Whatsapp
          </a>
        </div>
      ),
    },
    { label: "Horário", value: SITE.hours },
    { label: "Resposta", value: SITE.response },
  ];

  return (
    <dl>
      {rows.map((row) => (
        <div
          key={row.label}
          className="border-t border-border-on-primary py-[18px]"
        >
          <dt className="label-caps mb-1.5 text-muted-on-primary">
            {row.label}
          </dt>
          <dd className="text-[17px] leading-[1.55]">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
