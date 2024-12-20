
import { AutomationSection } from "@/components/Devops/Automation";
import FAQ from "@/components/Devops/FAQ";
import { FloatingStats } from "@/components/Devops/FloatingStats";
import Hero from "@/components/Devops/Hero/Hero";
import ProcessTimeline from "@/components/Devops/ProcessTimeline";
import TechnologyStack from "@/components/Devops/TechnologyStack";
import { CaseStudies } from "@/components/Devops/CaseStudies";
import { Security } from "@/components/Devops/Security";
import { Services } from "@/components/Devops/SecurityOverview";
import CloudArchitecture from "@/components/Devops/CloudArchitecture";
import GetInTouch from "@/components/ui/Contact/GetInTouch";

export default function DevOps() {

  return (
    <div>
      <Hero />
      <Services />
      <Security />
      <FloatingStats />
      <TechnologyStack />
      <ProcessTimeline />
      <CloudArchitecture />
      <AutomationSection />
      <CaseStudies />
      <FAQ />
      <GetInTouch />
    </div>
  );
}
