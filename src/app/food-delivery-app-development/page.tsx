import Hero from "@/components/FoodDelivery/Hero/Hero";
import { Partners } from "@/components/Partners/Partners";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/ui/FAQ";
import OurProcess from "@/components/ui/OurProcess/OurProcess";

export default function FoodDeliveryAppDevelopment() {
  return (
    <div>
      <Hero />
      <Partners />
      <OurProcess />
      <Testimonials />
      <FAQ />
    </div>
  );
}
