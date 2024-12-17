import { Partners } from "@/components/Partners/Partners";
import AdminPanel from "@/components/TaxiApp/AppModels/AdminPanel";
import AppModels from "@/components/TaxiApp/AppModels/AppModels"; 
import CustomerApp from "@/components/TaxiApp/AppModels/CustomerApp";
import Dashboard from "@/components/TaxiApp/AppModels/Dashboard";
import Hero from "@/components/TaxiApp/Hero/Hero";
import WhyChooseUs from "@/components/TaxiApp/WhyChooseUs";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/ui/FAQ";
import OurProcess from "@/components/ui/OurProcess/OurProcess";

export default function TaxiAppDevelopment() {
  return (
    <div>
      <Hero />
      <AppModels />
      <CustomerApp />
      <Dashboard />
      <AdminPanel />
      <WhyChooseUs />
      <Partners />
      <OurProcess />
      <Testimonials />
      <FAQ />
    </div>
  );
}
