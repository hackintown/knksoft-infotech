import Benefits from "@/components/AssetsVendorManagement/Benefits";
import CallToAction from "@/components/AssetsVendorManagement/CallToAction";
import CaseStudies from "@/components/AssetsVendorManagement/CaseStudies";
import ResourceCenter from "@/components/AssetsVendorManagement/Featuers/Features";
import KeyFeatures from "@/components/AssetsVendorManagement/Featuers/KeyFeatures";
import Hero from "@/components/AssetsVendorManagement/Hero/Hero";
import IntegrationPartners from "@/components/AssetsVendorManagement/IntegrationPartners";
import InteractiveDemo from "@/components/AssetsVendorManagement/InteractiveDemo";
import ServicesOverview from "@/components/AssetsVendorManagement/Services/ServicesOverview";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/ui/FAQ";
import GetInTouch from "@/components/ui/Contact/GetInTouch";

export default function AssetsVendorManagement() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero />
      <ServicesOverview />
      <KeyFeatures />
      <InteractiveDemo />
      <Benefits />
      <CaseStudies />
      <IntegrationPartners />
      <ResourceCenter />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <GetInTouch />
    </main>
  );
}
