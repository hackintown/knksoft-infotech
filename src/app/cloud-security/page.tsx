import CaseStudies from "@/components/CloudSecurity/CaseStudies";
import ComplianceSection from "@/components/CloudSecurity/ComplianceSection";
import FAQ from "@/components/CloudSecurity/FAQ";
import Features from "@/components/CloudSecurity/Features/Features";
import Hero from "@/components/CloudSecurity/Hero/Hero";
import SecurityArchitecture from "@/components/CloudSecurity/SecurityArchitecture";
import SecurityFeatures from "@/components/CloudSecurity/SecurityFeatures";
import SecurityMetrics from "@/components/CloudSecurity/SecurityMetrics";
import Services from "@/components/CloudSecurity/Services/Services";
import ThreatProtection from "@/components/CloudSecurity/ThreatProtection";
import GetInTouch from "@/components/ui/Contact/GetInTouch";

export default function CloudSecurity() {
  return (
    <div>
      <Hero />
      <Features />
      <Services />
      <SecurityFeatures />
      <ComplianceSection />
      <SecurityArchitecture />
      <CaseStudies />
      <ThreatProtection />
      <SecurityMetrics />
      <FAQ />
      <GetInTouch />
    </div>
  );
}