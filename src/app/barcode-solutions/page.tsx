import FAQ from "@/components/BarCode/FAQ";
import Features from "@/components/BarCode/Features/Features";
import SecurityFeatures from "@/components/BarCode/Features/SecurityFeatures";
import Hero from "@/components/BarCode/Hero/Hero";
import HowItWorks from "@/components/BarCode/HowItWorks";
import Integration from "@/components/BarCode/Integration";
import Services from "@/components/BarCode/Services/Services";
import Stats from "@/components/BarCode/Stats";
import GetInTouch from "@/components/ui/Contact/GetInTouch";
import OurProcess from "@/components/ui/OurProcess/OurProcess";

export default function BarcodeSolutions() {


  return (
    <main className="overflow-hidden">
      <Hero />
      <Features />
      <Services />
      <HowItWorks />
      <SecurityFeatures />
      <Stats />
      <Integration />
      <OurProcess />
      <FAQ />
      <GetInTouch />
    </main>
  );
} 