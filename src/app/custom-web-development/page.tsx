import Services from "@/components/WebDevelopment/Services/Services";
import Hero from "@/components/WebDevelopment/Hero";
import CompanyServe from "@/components/WebDevelopment/CompanyServe/CompanyServe";
import PartnerSection from "@/components/WebDevelopment/PartnerReasons/PartnerReasons";
import { partnerReasons, sectionContent } from "@/components/WebDevelopment/PartnerReasons/PartnerData";
import Strategies from "@/components/WebDevelopment/Strategies/Strategies";

export default function CustomWebDevelopment() {
  return (
    <main>
      <Hero />
      <Services />
      <CompanyServe />
      <PartnerSection
        title={sectionContent.title}
        subtitle={sectionContent.subtitle}
        reasons={partnerReasons}
      />
      <Strategies />
    </main>
  );
}
