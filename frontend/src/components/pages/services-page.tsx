import { ContactCtaSection } from "@src/components/molecules/sections/contact-cta-section";
import { ServicesSection } from "@src/components/molecules/sections/services-section";

export function ServicesPage() {
  return (
    <>
      <ServicesSection asPage />
      <ContactCtaSection />
    </>
  );
}
