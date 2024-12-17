import Architecture from "@/components/HomeServices/Architecture";
import { Features } from "@/components/HomeServices/Features/Features";
import SilentFeatures from "@/components/HomeServices/Features/SilentFeatures";
import Hero from "@/components/HomeServices/Hero/Hero";
import { ReadymadeServices } from "@/components/HomeServices/Services/ReadymadeServices";
import Services from "@/components/HomeServices/Services/Services";
import WhyChooseUs from "@/components/HomeServices/WhyChooseUs";
import { Partners } from "@/components/Partners/Partners";
import Portfolio from "@/components/Portfolio/Portfolio";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/ui/FAQ";
import OurProcess from "@/components/ui/OurProcess/OurProcess";
import TechStackTabs from "@/components/ui/TechStackTabs";

export default function OnDemandHomeServicesAppDevelopment() {
  return (
    <div>
      <Hero />
      <Services />
      <Features />
      <WhyChooseUs />
      <ReadymadeServices />
      <SilentFeatures />
      <Architecture />
      <Portfolio />
      <TechStackTabs />
      <OurProcess />
      <Partners />
      <Testimonials />
      <FAQ />
    </div>
  );
}
