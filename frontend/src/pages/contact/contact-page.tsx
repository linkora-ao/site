import "./contact.css";
import { HeroSection } from "./hero-section";
import { FormSection } from "./form-section";
import { AfterSection } from "./after-section";

export function ContactPage() {
  return (
    <div className="pg pg-contact">
      <HeroSection />
      <FormSection />
      <AfterSection />
    </div>
  );
}
