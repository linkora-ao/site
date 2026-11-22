import "./bove.css";
import { HeroSection } from "./hero-section";
import { ProblemSection } from "./problem-section";
import { FeaturesSection } from "./features-section";
import { ValueSection } from "./value-section";
import { TrustSection } from "./trust-section";
import { ContactSection } from "./contact-section";

export function BovePage() {
  return (
    <div className="pg pg-bove">
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <ValueSection />
      <TrustSection />
      <ContactSection />
    </div>
  );
}
