import Hero from "@/components/GroceryDelivery/Hero/Hero";
import Services from "@/components/GroceryDelivery/Services/Services";
import WhyChooseUs from "@/components/GroceryDelivery/WhyChooseUs";
import { Partners } from "@/components/Partners/Partners";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/ui/FAQ";
import OurProcess from "@/components/ui/OurProcess/OurProcess";

export default function GroceryAppDevelopment() {
  return (
    <div>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Partners />
      <OurProcess />
      <Testimonials />
      <FAQ />
    </div>
  );
}
