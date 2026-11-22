import "./services.css";
import { HeroSection } from "./hero-section";
import { ListSection } from "./list-section";
import { WhySection } from "./why-section";
import { ContactSection } from "./contact-section";

export function ServicesPage() {
  return (
    <div className="pg pg-services">
      <HeroSection />
      <ListSection />
      <WhySection />
      <ContactSection />
    </div>
  );
}
