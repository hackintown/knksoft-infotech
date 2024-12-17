import AppModels from "@/components/CarWashing/AppModels/AppModels";
import Architecture from "@/components/CarWashing/Architecture";
import OneWaySolutions from "@/components/CarWashing/Features/OneWaySolutions";
import Hero from "@/components/CarWashing/Hero/Hero";
import HowWorks from "@/components/CarWashing/HowWorks";
import { Partners } from "@/components/Partners/Partners";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/ui/FAQ";
import OurProcess from "@/components/ui/OurProcess/OurProcess";

export default function CarWashingAppDevelopment() {
  return (
    <div>
      <Hero />
      <AppModels />
      <OneWaySolutions />
      <HowWorks />
      <Architecture />
      <Partners />
      <OurProcess />
      <Testimonials />
      <FAQ />
    </div>
  );
}
