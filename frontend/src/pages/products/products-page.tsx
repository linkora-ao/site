import "./products.css";
import { HeroSection } from "./hero-section";
import { ProductListSection } from "./product-list-section";
import { MoreProductsSection } from "./more-products-section";
import { ApproachSection } from "./approach-section";
import { ContactSection } from "./contact-section";

export function ProductsPage() {
  return (
    <div className="pg pg-products">
      <HeroSection />
      <ProductListSection />
      <MoreProductsSection />
      <ApproachSection />
      <ContactSection />
    </div>
  );
}
