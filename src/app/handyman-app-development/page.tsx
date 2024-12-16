import Benefits from "@/components/HandyManApp/Benifits";
import Hero from "@/components/HandyManApp/Hero/Hero";
import HowWorks from "@/components/HandyManApp/HowWorks";
import Services from "@/components/HandyManApp/Services/Services";
import { Partners } from "@/components/Partners/Partners";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/ui/FAQ";
import OurProcess from "@/components/ui/OurProcess/OurProcess";

export default function HandymanAppDevelopment() {
  return (
    <div>
      <Hero />
      <Services /> 
      <Benefits />
      <HowWorks />
      <Partners />
      <OurProcess />
      <Testimonials />
      <FAQ />
    </div>
  );
}
