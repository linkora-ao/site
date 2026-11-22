import "./service.css";
import type { Service } from "@data/services";
import { SERVICE_CONTENT } from "@data/service-content";
import { HeroSection } from "./hero-section";
import { ForWhomSection } from "./for-whom-section";
import { IncludedSection } from "./included-section";
import { HowSection } from "./how-section";
import { DifferentialsSection } from "./differentials-section";
import { TrustSection } from "./trust-section";
import { OthersSection } from "./others-section";
import { ContactSection } from "./contact-section";

/** Uma só página para os 6 serviços. Conteúdo em @data/service-content. */
export function ServicePage({ service }: { service: Service }) {
  const content = SERVICE_CONTENT[service.slug];
  const props = { service, content };
  return (
    <div className="pg pg-service">
      <HeroSection {...props} />
      <ForWhomSection {...props} />
      <IncludedSection {...props} />
      <HowSection {...props} />
      <DifferentialsSection {...props} />
      <TrustSection {...props} />
      <OthersSection {...props} />
      <ContactSection {...props} />
    </div>
  );
}
