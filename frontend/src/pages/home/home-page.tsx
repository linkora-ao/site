import "./home.css";
import { HeroSection } from "./hero-section";
import { CredibilitySection } from "./credibility-section";
import { AboutSection } from "./about-section";
import { ServicesSection } from "./services-section";
import { CommitmentsSection } from "./commitments-section";
import { ProcessSection } from "./process-section";
import { ProductsSection } from "./products-section";
import { ContactSection } from "./contact-section";

export function HomePage() {
  return (
    <div className="pg pg-home">
      <HeroSection />
      <CredibilitySection />
      <AboutSection />
      <ServicesSection />
      <CommitmentsSection />
      <ProcessSection />
      <ProductsSection />
      <ContactSection />
    </div>
  );
}
