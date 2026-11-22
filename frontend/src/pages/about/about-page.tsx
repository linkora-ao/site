import "./about.css";
import { HeroSection } from "./hero-section";
import { StorySection } from "./story-section";
import { PrinciplesSection } from "./principles-section";
import { HowSection } from "./how-section";
import { PresenceSection } from "./presence-section";
import { ContactSection } from "./contact-section";

export function AboutPage() {
  return (
    <div className="pg pg-about">
      <HeroSection />
      <StorySection />
      <PrinciplesSection />
      <HowSection />
      <PresenceSection />
      <ContactSection />
    </div>
  );
}
