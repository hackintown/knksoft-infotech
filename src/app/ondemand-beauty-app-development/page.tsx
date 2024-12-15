"use client";
import AppModels from "@/components/BeautySalon/AppModels/AppModels";
import GetAll from "@/components/BeautySalon/AppModels/GetAll";
import Hero from "@/components/BeautySalon/Hero";
import Services from "@/components/BeautySalon/Services/Services";

export default function OnDemandBeautyAppDevelopment() {
  return (
    <div>
      <Hero />
      <AppModels />
      <Services />
      <GetAll />
    </div>
  );
}
