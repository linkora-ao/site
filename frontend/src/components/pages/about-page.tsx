import { AboutSection } from "@src/components/molecules/sections/about-section";
import { ContactCtaSection } from "@src/components/molecules/sections/contact-cta-section";

export function AboutPage() {
  return (
    <>
      <AboutSection asPage />
      <ContactCtaSection />
    </>
  );
}
