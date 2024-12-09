import Hero from "@/components/MVP/Hero";
import Services from "@/components/MVP/Services/Services";
import TechStackTabs from "@/components/ui/TechStackTabs";
import { Partners } from "@/components/Partners/Partners";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/ui/FAQ";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import { whyChooseData } from "@/components/MVP/WhyChooseUs/why-choose-data";
export default function MVPDevelopment() {
  return (
    <div>
      <Hero />
      <Services />
      <WhyChooseUs data={whyChooseData} />
      <Partners />
      <TechStackTabs />
      <Testimonials />
      <FAQ />
    </div>
  );
}
