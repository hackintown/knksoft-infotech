import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Portfolio from "@/components/Portfolio/Portfolio";
import Testimonials from "@/components/Testimonials/Testimonials";
import { MarketplaceSection } from "@/components/Marketplace/MarketplaceSection";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import OurProcess from "@/components/ui/OurProcess/OurProcess";
import { Partners } from "@/components/Partners/Partners";
import FAQ from "@/components/ui/FAQ";
export default function Home() {
  return (
    <main>
      <Hero />
      <MarketplaceSection />
      <Portfolio />
      <Services />
      <WhoWeAre />
      <WhyChooseUs />
      <Partners />
      <Testimonials />
      <OurProcess />
      <FAQ />
    </main>
  );
}
