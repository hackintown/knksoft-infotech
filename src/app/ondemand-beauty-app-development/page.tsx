"use client";
import AppModels from "@/components/BeautySalon/AppModels/AppModels";
import GetAll from "@/components/BeautySalon/AppModels/GetAll";
import Hero from "@/components/BeautySalon/Hero";
import Services from "@/components/BeautySalon/Services/Services";
import TrustReason from "@/components/BeautySalon/TrustReason";
import { Partners } from "@/components/Partners/Partners";
import Testimonials from "@/components/Testimonials/Testimonials";
import GetInTouch from "@/components/ui/Contact/GetInTouch";
import OurProcess from "@/components/ui/OurProcess/OurProcess";

export default function OnDemandBeautyAppDevelopment() {
  return (
    <div>
      <Hero />
      <AppModels />
      <Services />
      <GetAll />
      <TrustReason />
      <Partners />
      <Testimonials />
      <OurProcess />
      <GetInTouch />
    </div>
  );
}
