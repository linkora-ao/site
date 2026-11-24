import { AboutSection } from "@src/components/molecules/sections/about-section";
import { ContactCtaSection } from "@src/components/molecules/sections/contact-cta-section";
import { MethodSection } from "@src/components/molecules/sections/method-section";
import { ServicesSection } from "@src/components/molecules/sections/services-section";
import { WhySection } from "@src/components/molecules/sections/why-section";
import { HomeHero } from "@src/components/pages/home-hero";

/** Home: a mesma história do menu, em versão resumida, com ligação para cada página. */
export function HomePage() {
  return (
    <>
      <HomeHero />
      <ServicesSection compact />
      <AboutSection compact />
      <WhySection compact />
      <MethodSection compact />
      <ContactCtaSection />
    </>
  );
}
